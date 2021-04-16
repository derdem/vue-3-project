<template>
  <corona-dashboard />
</template>

<script lang="ts">
import CoronaDashboard from "@/modules/coronaStatistics/components/CoronaDashboard.vue";
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import "@/modules/coronaStatistics/store";

export default defineComponent({
  components: { CoronaDashboard },
  setup() {
    const store = useStore();
    const fillStore = () => {
      store.dispatch("coronaStatistics/loadCountryData");
    };
    onMounted(fillStore);
  },
});
</script>
