<template>
  <div class="d-flex">
    <p class="mx-auto" style="font-size: 72px;color:black;">Loading...</p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  mounted() {
    this.$router.push("/report")
  }
}
</script>
