<template>
  <div>
    <v-toolbar color="cyan" flat style="margin-top: -10px;">
      <template v-slot:extension v-if="$route.name == 'report'">
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="reportButton in reportButtons" :key="reportButton">
            <v-icon>{{reportButton.icon}}</v-icon>
            <span
              style="color: #FFFFFFF"
              @click="changeRoute(reportButton.value)"
              >{{ reportButton.text }}</span
            >
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <div class="page">
      <pm v-if="value == 1" />
      <average v-else-if="value == 2" />
      <histories v-else-if="value == 3" />
      <population v-else-if="value == 4" />
      <p v-else></p>
    </div>
  </div>
</template>

<script>
import pm from "~/components/report/pm";
import average from "~/components/report/average";
import histories from "~/components/report/histories";
import population from "~/components/report/population";

export default {
  components: { pm, average, histories, population },
  data() {
    return {
      value: 1,
      reportButtons: [
        { text: "PM2.5", icon: "mdi-home", value: 1 },
        { text: "AVERAGE", icon: "mdi-home", value: 2 },
        { text: "HISTORIES", icon: "mdi-home", value: 3 },
        { text: "POPULATION", icon: "mdi-home", value: 4 }
      ],
      tabs: [
        { title: "PM2.5", path: "/inspire" },
        { title: "AVERAGE", path: "/visual" }
      ]
    };
  },
  methods: {
    async changeRoute(value) {
      this.value = await value;
    }
  }
};
</script>

<style scoped>
.page {
  min-height: 735px;
}
</style>