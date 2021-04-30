<template>
  <div class="background">
    <v-row class="center">
      <v-col cols="12" sm="6" md="6" class="mt-5 d-flex">
        <v-select
          :items="countries"
          v-model="country"
          filled
          label="Countrys"
          dense
          background-color="#e4fbff"
        ></v-select>
      </v-col>
      <v-btn class="d-flex ml-5" style="margin-top: 35px;" color="#3edbf0">
        OK
      </v-btn>
    </v-row>
    <div class="data-table-wrapper mx-auto">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1 "
      ></v-data-table>
    </div>
    <div
    class="data-table-wrapper mx-auto d-flex"
    style="margin-top:25px;">
      <jsonExcel
      class=" ml-auto"
        worksheet="My Worksheet"
        name="filename.xls"
        escapeCsv="false"
      >
        <v-btn>
          <v-icon>mdi-arrow-down-bold</v-icon>
          .CSV
        </v-btn>
      </jsonExcel>
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
      countries: ["O", "YERRAMAN", "FKU"],
      country: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        {
          text: "Calories",
          value: "calories"
        },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  }
};
</script>

<style scoped>
.background {
  background-color: #ffffff;
  min-height: 735px;
}

.center {
  justify-content: center;
}

.data-table-wrapper {
  width: 80%;
}

.orange-background-data-table {
  background-color: rgba(247, 171, 27, 0.8) !important;
}
</style>
