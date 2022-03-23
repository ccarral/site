<template>
  <div id="container1">
    <div v-for="scheduleView in scheduleViews">
      <div class="grid-container">
        <div class="split2 left">
          <ScheduleGrid :scheduleView="scheduleView"> </ScheduleGrid>
        </div>
        <div class="split2 right controller center-vert">
          <ul class="schedules">
            <li v-for="(grid, idx) in scheduleView.grids" :class="grid.style">
              {{ grid.label }}<br />
              Materia: {{ grid.data.nombre }} <br />
              Profesor(a):{{ grid.data.profesor }}
              <br />
              Grupo: {{ grid.data.grupo }}
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleGrid from "./ScheduleGrid";
import { ScheduleView } from "../lib/gridUtils";
export default {
  props: ["scheduleList"],
  data() {
    return {
      scheduleViews: []
    };
  },
  components: { ScheduleGrid },
  created() {
    for (let i = 0; i < this.scheduleList.length; i++) {
      let sv = new ScheduleView();
      for (let j = 0; j < this.scheduleList[i].grids.length; j++) {
        sv.pushGrid(this.scheduleList[i].grids[j]);
      }
      this.scheduleViews.push(sv);
    }
  }
};
</script>

<style>
.grid-container {
  padding-bottom: 30px;
  overflow: scroll;
}

.center-vert {
  top: 50%;
}
</style>
