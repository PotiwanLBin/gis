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
        <v-btn class="d-flex ml-5" style="margin-top: 35px;" color="#e4fbff">
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
      </GmapMap>
    </div>
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel";

export default {
  components: {
    JsonExcel
  },
  data() {
    return {
      questions: [
        "All the city points of all countries",
        "All the city points of all countries",
        "All the city points of Thailand’s neighboring countries.",
        "MBR in Thailand.",
        "Countries having the highest no. of city points.",
        "All the city points which are considered as LOW INCOME"
      ],
      select: "",
      years: [2004, 2005, 2006],
      year: 2006,
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } }
      ]
    };
  }
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
