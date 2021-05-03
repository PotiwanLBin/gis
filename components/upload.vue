<template>
  <div>
    <input
      ref="fileInput"
      type="file"
      class="d-none"
      :accept="accept"
      @change="fileSelected"
      :multiple="multiple"
    />
    <slot name="activator" :on="{ click: selectFile }" />
  </div>
</template>

<script>
export default {
  props: ["accept", "multiple"],

  methods: {
    fileSelected() {
      const files = Array.from(this.$refs.fileInput.files);

      const exceed = files.every((file) => file.size <= 1000000);
      if (!exceed) {
        alert("File size must not exceed 1MB");
        this.$refs.fileInput.value = "";
        return;
      }

      if (files.length > 0) {
        this.$emit("input", files);
      }

      this.$refs.fileInput.value = "";
    },

    selectFile() {
      this.$refs.fileInput.click();
    },
  },
};
</script>
