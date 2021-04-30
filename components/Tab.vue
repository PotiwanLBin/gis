<template>
  <div id="tab" class="d-flex justify-content-center align-items-center white">
    <div
      v-for="(tab, i) in tabs"
      :key="i"
      class="pointer px-3 h-100 d-flex flex-column justify-content-center"
      :class="$route.path === tab.path && 'active'"
      @click="$router.push(tab.path)"
    >
      <span>{{ tab.title }}</span>
      <span class="line"></span>
    </div>
  </div>
</template>

<style scoped>
#tab {
  padding: 0 10px !important;
  height: 63px !important;
  background-color: transparent;
}
#tab > div {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px !important;
  text-align: center;
  transition: all 0.3s ease;
}
#tab > div:hover {
  background-color: #e9e9e9;
}
#tab > div > .line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: none;
}
#tab > div.active > .line {
  display: block;
  height: 5px;
  background-color: orange;
}
</style>

<script>
export default {
  props: ["tabs", "disableRedirect"],

  beforeMount() {
    const hasActiveTab = this.tabs.some((v) => this.$route.path === v.path);
    if (!hasActiveTab && !this.disableRedirect) {
      // this.$router.push(this.tabs[0].path);
    }
  },
};
</script>
