<template>
  <div>
    <div v-if="!engineRan">
      <div class="split left">
        <ScheduleGrid :scheduleView="scheduleView"></ScheduleGrid>
      </div>
      <div class="split right controller">
        <table class="results">
          <tr>
            <td>Licenciatura</td>
            <td>
              <select id="" name="">
                <option value="ICO">ICO</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              Materias a inscribir:
              {{ actualBound }}
            </td>
            <td>
              <button v-on:click="increaseUserSetBound()">+</button>
              <button v-on:click="decreaseUserSetBound()">-</button>
            </td>
          </tr>
          <tr>
            <td><strong>Buscar Grupos</strong></td>
            <td><strong>Buscar Materias</strong></td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="filtro_grupos"
                v-model="filtroGrupos"
                style="width:100%"
              />
            </td>
            <td>
              <input
                type="text"
                name="filtro_materias"
                v-model="filtroMaterias"
                style="width:100%"
              />
            </td>
          </tr>
          <tr v-if="filtroMaterias || filtroGrupos">
            <td>
              <ul v-if="filtroGrupos" class="schedules">
                <a
                  href="#"
                  v-for="schedule in filteredSchedules"
                  :key="filteredSchedules.indexOf(schedule)"
                  @click="pushToSeeds(schedule)"
                >
                  <li class="search-result">
                    Materia: {{ schedule.data.nombre }} <br />
                    Profesor(a):{{ schedule.data.profesor }}
                    <br />
                    Grupo: {{ schedule.data.grupo }}
                  </li>
                </a>
              </ul>
            </td>
            <td>
              <ul v-if="filtroMaterias" class="schedules">
                <a
                  href="#"
                  v-for="subject in filteredSubjects"
                  :key="filteredSubjects.indexOf(subject)"
                  @click="pushToPools(subject)"
                >
                  <li class="search-result">{{ subject.name }} <br /></li>
                </a>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <ul v-if="scheduleView.grids" class="schedules">
                <a
                  href="#"
                  v-for="grid in scheduleView.grids"
                  :key="grid.id"
                  @click="removeFromSeeds(grid)"
                >
                  <div>
                    {{ grid.label }}
                  </div>
                  <div class="seed">
                    <li v-bind:class="grid.style">
                      Materia: {{ grid.data.nombre }} <br />
                      Profesor(a):{{ grid.data.profesor }}
                      <br />
                      Grupo: {{ grid.data.grupo }}
                    </li>
                  </div>
                </a>
              </ul>
            </td>
            <td>
              <ul v-if="poolContainer.pools" class="subjects">
                <a
                  href="#"
                  v-for="(pool, idx) in poolContainer.pools"
                  :key="idx"
                  @click="removeFromPool(idx)"
                >
                  <div class="subject">
                    <li>
                      Materia: {{ poolContainer.subjects[idx].name }} <br />
                    </li>
                  </div>
                </a>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <button v-on:click="runEngine()">Generar combinaciones</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div v-else>
    <div v-if="results.length > 0">
      <ResultadosHorarios :scheduleList="results"></ResultadosHorarios>
    </div>
    <div v-else>
        <h1>No se encontraron resultados :(
        Recarga la página para volver a intentarlo.
        </h1>
    </div>
    </div>
  </div>
</template>

<script>
import ScheduleGrid from "../../components/ScheduleGrid";
import ResultadosHorarios from "../../components/ResultadosHorarios";
import { ScheduleView, PoolContainer } from "../../lib/gridUtils";
/* const fetch = require("cross-fetch"); */

let idEq = (subject, pool) => {
  for (let i = 0; i < subject.id_list.length; i++) {
    for (let j = 0; j < pool.pool_id.id_list.length; j++) {
      if (subject.id_list[i] === pool.pool_id.id_list[j]) {
        console.log(`${subject.id_list[i]} == ${pool.pool_id.id_list[j]}`);
        return true;
      }
    }
  }
  return false;
};

export default {
  components: { ScheduleGrid , ResultadosHorarios},
  data() {
    return {
      pools: [],
      schedules: [],
      subjects: [],
      userSetBound: 0,
      scheduleView: new ScheduleView(),
      poolContainer: new PoolContainer(),
      filtroMaterias: "",
      filtroGrupos: "",
      api_engine_main: null,
      api_read_subjects: null,
      results: [],
      engineRan: false
    };
  },

  computed: {
    upperBound() {
      return this.scheduleView.grids.length + this.poolContainer.pools.length;
    },
    lowerBound() {
      return this.scheduleView.grids.length;
    },

    actualBound() {
      return this.upperBound + this.userSetBound;
    },

    innerBound() {
      return this.poolContainer.pools.length + this.userSetBound;
    },

    filteredSchedules() {
      return this.schedules.filter(
        schedule =>
          schedule.data.nombre
            .toLowerCase()
            .includes(this.filtroGrupos.toLowerCase()) ||
          schedule.data.profesor
            .toLowerCase()
            .includes(this.filtroGrupos.toLowerCase())
      );
    },

    filteredSubjects() {
      return this.subjects.filter(subject =>
        subject.name.toLowerCase().includes(this.filtroMaterias.toLowerCase())
      );
    }
  },

  methods: {
    getSchedules() {
      let schedules = [];
      for (let i = 0; i < this.pools.length; i++) {
        for (let j = 0; j < this.pools[i].grid_list.length; j++) {
          let grid = this.pools[i].grid_list[j];
          this.schedules.push(grid);
        }
      }
    },
    pushToSeeds(grid) {
      if (!this.scheduleView.grids.includes(grid)) {
        this.scheduleView.pushGrid(grid);
      }
      this.filtroGrupos = "";
    },
    removeFromSeeds(grid) {
      this.scheduleView.removeGrid(grid);
    },

    pushToPools(subject) {
      let pushed = false;
      for (let i = 0; i < this.pools.length; i++) {
        if (idEq(subject, this.pools[i])) {
          // Check that it wasn't there already
          let thereAlready = false;
          if (!this.poolContainer.subjects.includes(subject)) {
            this.poolContainer.pushPool(this.pools[i]);
            this.poolContainer.pushSubject(subject);
          }
          pushed = true;
          break;
        }
      }
      if (!pushed) {
        console.log(pushed);
        console.error(
          `No se encontró un pool con el id requerido:${subject.id_list}`
        );
      } else {
        this.filtroMaterias = "";
      }
    },
    removeFromPool(idx) {
      this.poolContainer.removeFromPool(idx);
    },
    decreaseUserSetBound() {
      if (this.actualBound !== this.lowerBound) {
        this.userSetBound--;
      }
    },
    increaseUserSetBound() {
      if (this.actualBound !== this.upperBound) {
        this.userSetBound++;
      }
    },

    finalizeParams() {
      let params = {
        seeds: this.scheduleView.grids,
        bound: this.innerBound,
        pool_list: this.poolContainer.pools
      };

      return params;
    },

    runEngine() {
      let params = this.finalizeParams();
      console.log(params);
      let results = this.api_engine_main(params);
      this.results = results;
      this.engineRan = true;
    }
  },

  created() {},
  mounted() {
    fetch("/files/2022/A/plantilla_ico_2022A.csv")
      .then(res => {
        if (!res.ok) {
          console.error("Error...");
        } else {
          return res.text();
        }
      })
      .then(csv => {
        const rust = import("../../lib/uaemex_horarios_lib/pkg");
        rust.then(m => {
          this.pools = m.api_init_pools(csv);
          this.getSchedules();
          this.api_engine_main = m.api_engine_main;
          this.api_read_subjects = m.api_read_subjects;

          fetch("/files/2022/A/materias_ico_2022A.csv")
            .then(res => {
              if (!res.ok) {
                console.error("Error leyendo materias...");
              } else {
                return res.text();
              }
            })
            .then(csv => {
              this.subjects = this.api_read_subjects(csv);
            });
        });
      });
  }
};
</script>

<style>
.split2 {
  width: 50%;
  padding-top: 20px;
}

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  float: left;
}

.right {
  right: 0;
  float: right;
}

ul.schedule-list {
  list-style: none;
}

table.results {
  width: 100%;
  text-align: left;
}

table.results td {
  width: 50%;
  overflow: hidden;
}

.schedules {
  list-style: none;
  padding: 0px;
}

.schedules li {
  border-radius: 3px;
}

.subjects {
  list-style: none;
  padding: 0px;
}

.subjects li {
  border-radius: 3px;
}

div.subject {
  border-radius: 3px;
  background-color: #7bcaff;
  margin-bottom: 3px;
}

div.subject:hover {
  background-color: #ff5454;
  color: #dfdfdf;
  opacity: 0.5;
}

.search-result {
  background-color: #dfdfdf;
  border: 1px solid #7e7777;
  margin-bottom: 3px;
}

div.seed :hover {
  background-color: #ff5454;
  color: #dfdfdf;
  opacity: 0.5;
}

.controller {
  font-size: 12px;
}

.temporary {
  background-color: yellow;
}

div {
  color: rgba(41, 41, 41, 1);
  font-family: arial;
}
</style>
