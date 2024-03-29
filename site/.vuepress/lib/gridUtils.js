export class ScheduleView {
    constructor() {
        this.grids = [];
        this.idCtr = 0;
        // this.labels = ["👾", "🤖", "👽", "👟", "🍑", "💩", "🍆"];
        this.labels = ["🐙", "🐦", "👽", "👟", "🐶", "🏀", "🗿", "👾"];
        this.colorPool = [
            "color-1", "color-2", "color-3", "color-4", "color-5", "color-6",
            "color-7", "color-8"
        ];
    }
    setGridStyle(idx, style) { this.grids[idx].style = style; }
    setGridLabel(idx, label) { this.grids[idx].label = label; }
    pushGrid(grid) {
        grid.id = this.idCtr;
        grid.style = this.colorPool.pop();
        grid.label = this.labels.pop();
        this.grids.push(grid);
        this.idCtr++;
    }
    setGridId(idx, id) { this.grids[idx].id = id; }

    triggerIdUpdate() {
        let len = this.grids.length;
        this.idCtr += len;
        for (let i = 0; i < this.grids.length; i++) {
            this.grids[len - 1 - i].id += 1;
        }
    }
    removeGrid(grid) {
        let idx = this.grids.indexOf(grid);
        if (idx !== undefined) {
            this.labels.push(grid.label);
            this.colorPool.push(grid.style);
            this.grids.splice(idx, 1);
        }
    }
}

export class PoolContainer {
    constructor() {
        this.pools = [];
        this.subjects = [];
    }

    pushPool(pool) { this.pools.push(pool); }

    pushSubject(subject) { this.subjects.push(subject); }

    removeFromPool(idx) {
        this.pools.splice(idx, 1);
        this.subjects.splice(idx, 1);
    }
}
