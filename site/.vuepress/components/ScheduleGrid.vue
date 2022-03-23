<template
  ><div>
    <table class="fixed">
      <tr>
        <th></th>
        <th v-for="day in days" :key="days.indexOf(day)">{{ day }}</th>
      </tr>
      <tr v-for="hour in hours" :key="hours.indexOf(hour)">
        <th>{{ hour }}</th>
        <td
          v-for="day in days"
          :key="days.indexOf(day)"
          :class="gridView[hour][day].style"
          v-on:click="blockClicked(hour,day)"
        >
          {{ gridView[hour][day].label }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// Clase para un único bloque lógico dentro de la visualización del
// horario. Si más de un horario ocupa el bloque, entonces existe un
// empalme.
class Block {
  constructor() {
    this.grids = [];
  }

  get style() {
    if (this.grids.length > 1) {
      return "traslape";
    } else if (this.grids.length == 1) {
      return this.grids[0].style;
    } else {
      return "empty-cell";
    }
  }

  get label() {
    if (this.grids.length > 1) {
      return "empalme";
    } else if (this.grids.length == 1) {
      return this.grids[0].label;
    } else {
      return "";
    }
  }

  get empty(){
    return this.grids.length === 0;
  }

  pushGrid(grid) {
    this.grids.push(grid);
  }
}

const instanceGridView = () => {
  let gridView = new Object();

  for (let i = 0; i < hours.length; i++) {
    gridView[hours[i]] = new Object();
    for (let j = 0; j < days.length; j++) {
      gridView[hours[i]][days[j]] = new Block();
    }
  }

  return gridView;
};
const hours = [
  "07:00:00",
  "07:30:00",
  "08:00:00",
  "08:30:00",
  "09:00:00",
  "09:30:00",
  "10:00:00",
  "10:30:00",
  "11:00:00",
  "11:30:00",
  "12:00:00",
  "12:30:00",
  "13:00:00",
  "13:30:00",
  "14:00:00",
  "14:30:00",
  "15:00:00",
  "15:30:00",
  "16:00:00",
  "16:30:00",
  "17:00:00",
  "17:30:00",
  "18:00:00",
  "18:30:00",
  "19:00:00",
  "19:30:00",
  "20:00:00",
  "20:30:00",
  "21:00:00",
  "21:30:00"
];

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

// Para que la selección de horas libres tenga sentido, se tiene que
// guardar un límite inferior y superior.
// En un inicio, el usuario selecciona un bloque k y para extenderlo, solo
// puede seleccionar el bloque k + 1 o el bloque k - 1. En caso de que se
// haga una selección válida, se guarda el nuevo desplazamiento. A partir
// de ese momento, solo puede seleccionar el bloque k + despSup + 1 o
// el bloque k - despInf - 1

// Guarda el desplazamiento inferior
let lowerBoundDisplacement = [0,0,0,0,0,0,0];
// Guarda el desplazamiento superior 
let upperBoundDisplacement = [0,0,0,0,0,0,0];

export default {
  props: ["scheduleView"],
  data() {
    return {
      grids: this.scheduleView.grids,
      hours,
      days,
      lowerBoundDisplacement,
      upperBoundDisplacement
    };
  },
  methods: {
    labelGrids() {
      for (let i = 0; i < this.scheduleView.grids.length; i++) {
        this.scheduleView.setGridLabel(i, labels[i]);
        this.scheduleView.setGridStyle(i, colorPool[i]);
      }
    },
    blockClicked(hour,day){
        // Checar que esté vacío
        if(this.gridView[hour][day].empty){
            console.log("Block empty!");
            // Añadir bloque de horario a componente padre.
        }
    }
  },

  created() {},
  computed: {
    // La variable gridview almacena de manera matricial todos los Blocks
    // (uno para cada día x hora)
    gridView() {
      let gridView = instanceGridView();
      let grids = this.scheduleView.grids;
      for (let i = 0; i < this.scheduleView.grids.length; i++) {
        let grid = grids[i];
        const DAYS = 7;
        for (let j = 0; j < DAYS; j++) {
          if (grid.time_values[j]) {
            let start = grid.time_values[j][0];
            let end = grid.time_values[j][1];
            let blocks = getBlocks(start, end);
            let day = days[j];
            for (let k = 0; k < blocks.length; k++) {
              let block = blocks[k];
              gridView[block][day].pushGrid(grid);
            }
          }
        }
      }

      return gridView;
    }
  }
};

// In: ("07:00, 9:00") => out: ["07:00", "07:30","08:00", "08:30"];
let getBlocks = (start, end) => {
  if (!(hours.includes(start) && hours.includes(end))) {
    console.error("Invalid start or end");
  } else {
    let startIdx = hours.indexOf(start);
    let endIdx = hours.indexOf(end);
    let blocks = [];
    for (let i = startIdx; i < endIdx; i++) {
      blocks.push(hours[i]);
    }
    return blocks;
  }
};
</script>

<style>
.color-1 {
  background-color: #428df5;
}
.color-2 {
  background-color: #7afff2;
}

.color-3 {
  background-color: #52e354;
}
.color-4 {
  background-color: #d0e352;
}

.color-5 {
  background-color: #e3ab52;
}

.color-6 {
  background-color: #f58e62;
}
.color-7 {
  background-color: #f56462;
}

.color-8 {
  background-color: #ff689b;
}

.empty-cell {
  background-color: #dfdfdf;
}

.empty-cell:hover{
  background-color:#a1ebff;
  border: solid 2px ;
}

.traslape {
  background: #ff1212;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 11px;
}

table.fixed {
  table-layout: fixed;
  text-align: center;
  border-radius: 6px;
}

table.fixed td {
  width: 90px;
  overflow: hidden;
  border-radius: 3px;
}

table.fixed th {
  width: 10px;
}

th {
  font-family: "Radley", arial;
}
</style>
