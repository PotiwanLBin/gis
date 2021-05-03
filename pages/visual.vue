<template>
  <div class="page">
    <div>
      <v-row class="center">
        <v-col cols="12" sm="4" md="4" class="mt-5 d-flex">
          <v-select
            :items="questions"
            v-model="select"
            filled
            label="Select"
            dense
            background-color="#e4fbff"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2" md="2" class="mt-5 d-flex">
          <v-select
            :items="years"
            v-model="year"
            filled
            label="Years"
            dense
            background-color="#e4fbff"
          ></v-select>
        </v-col>
        <v-btn
          class="d-flex ml-5"
          style="margin-top: 35px"
          color="#3edbf0"
          @click="sendData()"
        >
          OK
        </v-btn>
      </v-row>
    </div>
    <div>
      <GmapMap
        v-bind:center="{ lat: 10, lng: 10 }"
        v-bind:zoom="7"
        map-type-id="terrain"
        style="width: 1910px; height: 730px"
      >
        <GmapMarker
          v-for="(m, index) in markers"
          v-bind:key="index"
          v-bind:position="m.position"
          v-bind:clickable="true"
          @click="center = m.position"
        />
        <gmap-polyline
          v-bind:path.sync="path"
          v-bind:options="{ strokeColor: '#ffffff' }"
        >
        </gmap-polyline>
      </GmapMap>
    </div>
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel";

export default {
  components: {
    JsonExcel,
  },
  data() {
    return {
      questions: [
        { text: "All the city points of all countries", value: 1 },
        { text: "50 closest city points to Bangkok.", value: 2 },
        {
          text: "All the city points of Thailand’s neighboring countries.",
          value: 3,
        },
        { text: "MBR in Thailand.", value: 4 },
        { text: "Countries having the highest no. of city points.", value: 5 },
        {
          text: "All the city points which are considered as LOW INCOME",
          value: 6,
        },
      ],
      select: 0,
      years: [],
      year: 2008,
      markers: [],
      path: [],
    };
  },
  methods: {
    async sendData() {
      console.log(this.select);
      console.log(this.year);
      this.markers = [];
      this.path = [];
      switch (this.select) {
        case 1:
          const data = await this.$axios.get("visualizing/findCity", {
            params: {
              year: this.year,
            },
          });
          this.markers = data.data;
          break;
        case 2:
          const data2 = await this.$axios.get("visualizing/findClosetCity", {
            params: {
              city: "Bangkok",
            },
          });
          this.markers = data2.data;
          break;
        case 3:
          const data3 = await this.$axios.get(
            "visualizing/findThailandNeighbor",
            {
              params: {
                year: this.year,
              },
            }
          );
          this.markers = data3.data;
          break;
        case 4:
          const data4 = await this.$axios.get("visualizing/findMBR", {
            params: {
              year: this.year,
            },
          });
          this.path = data4.data;
          this.markers = data4.data;
          break;
        case 5:
          const data5 = await this.$axios.get("visualizing/findHighestCity", {
            params: {
              year: this.year,
            },
          });
          this.markers = data5.data;
          break;
        case 6:
          const data6 = await this.$axios.get("visualizing/findCityLowIncome", {
            params: {
              year: this.year,
            },
          });
          this.markers = data6.data;
          break;
      }
    },
  },
  async mounted() {
    const data = await this.$axios.get("report/distinctYear");
    this.years = data.data;
  },
};
</script>

<style scoped>
.page {
  min-height: 835px;
  background-color: #ffffff;
}

.btn {
  width: 100%;
}

.center {
  justify-content: center;
}
</style>
