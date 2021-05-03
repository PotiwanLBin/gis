<template>
  <div id="file-preview" class="d-flex">
    <v-img
      class="mr-3 pointer"
      :src="imagePreview"
      width="80"
      height="80"
      max-width="80"
      max-height="80"
      @click="$emit('click')"
    ></v-img>

    <div
      id="file-details"
      class="mr-3 overflow-hidden flex-grow-1 d-flex flex-column justify-content-center"
    >
      <p
        class="m-0 pointer font-weight-bold description-color"
        @click="$emit('click')"
      >{{ data.fullName }}</p>
      <p class="m-0 description-color">{{ $upper(data.ext) }}</p>
    </div>

    <div
      v-if="!hideRemove"
      id="close"
      class="d-flex flex-grow-1 justify-content-center align-items-center"
    >
      <v-btn icon @click="$emit('remove-file')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
#file-preview {
  background: #ffffff;
  border: 0.5px solid #58595b;
  box-sizing: border-box;
  border-radius: 5px;
}

#file-details > p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#file-details > p:first-child:hover {
  text-decoration: underline;
}

#close {
  min-width: 50px;
  max-width: 50px;
}
</style>

<script>
export default {
  props: ["data", "hideRemove"],

  data() {
    return {
      imagePreview: "",
      previewData: {},
    };
  },

  methods: {
    async getImagePreview() {
      try {
        const data =
          typeof this.data.filePreview === "object"
            ? await this.$imagePreview(this.data.filePreview)
            : this.data.filePreview;
        this.imagePreview = data;
      } catch {
        this.imagePreview = "";
      }
    },
  },

  async mounted() {
    this.getImagePreview();
  },

  // watch: {
  //   data(value) {
  //     this.getImagePreview();
  //   },
  // },
};
</script>
