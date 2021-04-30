<template>
	<v-app light id="v-app-ref">
		<v-card>
		<v-toolbar color="cyan" flat>
			<div v-for="item in items" :key="item" class="ml-2">
			<v-btn
				@click="changeRoute(item.path)"
				:color="$route.path === item.path ? '#F8941E' : '#58595B'"
				>{{ item.text }}</v-btn
			>
			</div>

			<v-toolbar-title class="mx-auto">Visualizing Air Pollution (PM2.5)</v-toolbar-title>

			<!-- <template v-slot:extension v-if="$route.name == 'report'">
			<v-tabs v-model="tab" align-with-title>
				<v-tabs-slider color="yellow"></v-tabs-slider>

				<v-tab v-for="reportButton in reportButtons" :key="reportButton">
				<span style="color: #FFFFFFF" @click="setPageReport(reportButton.value)">{{ reportButton.text }}</span>
				</v-tab>
			</v-tabs>
			</template> -->
		</v-toolbar>
		</v-card>
		<v-main>
		<div class="h-100 flex-layout px-0">
			<nuxt />
		</div>
		</v-main>
		<v-footer :absolute="!fixed" app>
		<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { text: "Report", icon: "mdi-calendar-blank", path: "/report" },
        { text: "Visual", icon: "mdi-home", path: "/visual" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      reportButtons: [
        { text: "PM2.5", icon: "mdi-home", value: 1 },
        { text: "AVERAGE", icon: "mdi-home", value: 2 },
        { text: "HISTORIES", icon: "history", value: 3 },
        { text: "POPULATION", icon: "mdi-home", value: 4 }
      ]
    };
  },
  methods: {
    changeRoute(path) {
      this.$router.push(path);
    },
    setPageReport(value) {
      window.localStorage.setItem("report.value", value);
      location.reload();
    }
  }
};
</script>

<style>
#v-app-ref {
  background-color: #f3f3f3;
}

/* Language button */
.language-text {
  cursor: pointer !important;
  user-select: none !important;
}
/* Language text color */
.language-text.selected {
  color: #de5a10;
}
/* Menu */
.menu-list {
  cursor: pointer !important;
  transition: all 0.1s linear;
}
/* Menu Clicked */
.menu-list.active {
  background-color: rgba(248, 148, 30, 0.3);
  color: #f8941e;
}
</style>
