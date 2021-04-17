<template>
  <div>
    <div class="flex py-4">
      <h1 class="country-header">Countries</h1>
      <button
        type="button"
        class="bg-blue-300 my-2 px-2 rounded-md active:ring-blue-500 hover:bg-blue-400"
        @click="rickRoll"
      >
        Click here for fun
      </button>
    </div>
    <div class="flex flex-wrap justify-between gap-4 mx-4">
      <div v-for="country in listOfCountries" :key="country" class="country">
        <country-card :country="country"></country-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import countryCard from "./countryCard.vue";

export default defineComponent({
  components: { countryCard },
  name: "CoronaDashboard",
  setup() {
    const store = useStore();

    const listOfCountries = computed(
      () => store.getters["coronaStatistics/getCountryList"]
    );

    const rickRoll = function () {
      window.location.href =
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO";
    };

    return {
      listOfCountries,
      rickRoll,
    };
  },
});
</script>

<style scoped>
.country-header {
  @apply m-4;
  @apply font-bold;
}
.country {
  @apply mb-8;
  @apply px-4;
  @apply ring;
  @apply rounded-md;
  @apply bg-blue-100;
}
</style>
