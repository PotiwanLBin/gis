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
      <v-btn
        class="d-flex ml-5"
        style="margin-top: 35px"
        color="#3edbf0"
        @click="sendData()"
      >
        OK
      </v-btn>
    </v-row>
    <div class="data-table-wrapper mx-auto">
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
    <div class="data-table-wrapper mx-auto d-flex" style="margin-top: 25px">
      <jsonExcel
        class="ml-auto"
        worksheet="My Worksheet"
        :data="data"
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
    JsonExcel,
  },
  data() {
    return {
      countries: [],
      country: "",
      headers: [
        {
          text: "Country",
          align: "start",
          value: "country",
        },
        {
          text: "Year",
          value: "year",
        },
        {
          text: "PM",
          value: "pm",
        },
      ],
      data: [],
    };
  },
  methods: {
    async sendData() {
      this.data = [];
      console.log("test");
      this.country = this.country.toString();
      console.log(this.country);
      const data = await this.$axios.get("report/findHistoricalByCountry", {
        params: {
          country: this.country,
        },
      });
      console.log(data.data);
      if (data.status === 200) {
        data.data.forEach((v) => {
          const pmData = {};
          (pmData.country = v.country),
            (pmData.year = v.year),
            (pmData.pm = v.pm);
          this.data.push(pmData);
        });
      }

      console.log(this.data);
    },
  },
  async mounted() {
    const data = await this.$axios.get("report/distinctCountry");
    this.countries = data.data;
    console.log(this.countries);
  },
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
