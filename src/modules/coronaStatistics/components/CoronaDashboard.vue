<template>
  <div>
    <h1 class="country-header">Countries</h1>
    <div class="flex flex-wrap justify-between gap-4 mx-4">
      <div v-for="country in listOfCountries" :key="country" class="country">
        <country-card :country="country"></country-card>
        <!-- <h3>{{ country }}</h3> -->
        <!-- <div>Confirmed: {{ getCountryConfirmed(country) }}</div>
        <div>Recovered: {{ getCountryRecovered(country) }}</div>
        <div>Deaths: {{ getCountryDeaths(country) }}</div> -->
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
    console.log(store);

    const listOfCountries = computed(
      () => store.getters["coronaStatistics/getCountryList"]
    );

    /* const getCountryConfirmed = (country: string) => {
      return countries.value[country]["All"]["confirmed"];
    };

    const getCountryRecovered = (country: string) => {
      return countries.value[country]["All"]["recovered"];
    };

    const getCountryDeaths = (country: string) => {
      return countries.value[country]["All"]["deaths"];
    }; */

    return {
      listOfCountries,
      /* getCountryConfirmed,
      getCountryRecovered,
      getCountryDeaths, */
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
