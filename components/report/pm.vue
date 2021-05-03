<template>
  <div class="background">
    <v-row class="center">
      <v-col cols="12" sm="4" md="3" class="mt-5">
        <v-text-field
          label="PM2.5"
          placeholder="Dense & Rounded"
          v-model="pm"
          filled
          rounded
          type="Number"
          dense
          background-color="#e4fbff"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" md="3" class="mt-5 d-flex">
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
      pm: 0,
      years: [],
      year: 2008,
      headers: [
        {
          text: "Country",
          align: "start",
          value: "country",
        },
        {
          text: "City",
          value: "city",
        },
      ],
      data: [],
    };
  },
  methods: {
    async sendData() {
      this.data = [];
      this.pm = this.pm.toString();
      this.year = this.year.toString();
      console.log(this.pm);
      console.log(this.year);
      const data = await this.$axios.get("report/findByPM25", {
        params: {
          value: this.pm,
          year: this.year,
        },
      });
      console.log(data.status);
      if (data.status === 200) {
        data.data.forEach((v) => {
          const pmData = {};
          (pmData.country = v.country), (pmData.city = v.city);
          this.data.push(pmData);
        });
      }
      console.log(this.data);
    },
  },
  async mounted() {
    const data = await this.$axios.get("report/distinctYear");
    this.years = data.data;
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
  text-align: center;
}

.data-table-wrapper {
  width: 80%;
}

.orange-background-data-table {
  background-color: rgba(247, 171, 27, 0.8) !important;
}
</style>
