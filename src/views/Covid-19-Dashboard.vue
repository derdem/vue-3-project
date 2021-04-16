<template>
  <div>
    <h1 class="country-header">Countries</h1>
    <div class="flex flex-wrap justify-between gap-4 mx-4">
      <div v-for="country in listOfCountries" :key="country" class="country">
        <h3>{{ country }}</h3>
        <div>Confirmed: {{ getCountryConfirmed(country) }}</div>
        <div>Recovered: {{ getCountryRecovered(country) }}</div>
        <div>Deaths: {{ getCountryDeaths(country) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, computed, defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const countries = ref({} as Record<string, never>);
    const getCoronaData = async () => {
      const { data } = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases"
      );
      countries.value = data;
    };
    const listOfCountries = computed(() => {
      const listOfCountries = Object.keys(countries.value);
      return listOfCountries;
    });

    const getCountryConfirmed = (country: string) => {
      return countries.value[country]["All"]["confirmed"];
    };

    const getCountryRecovered = (country: string) => {
      return countries.value[country]["All"]["recovered"];
    };

    const getCountryDeaths = (country: string) => {
      return countries.value[country]["All"]["deaths"];
    };

    onMounted(getCoronaData);

    return {
      countries,
      listOfCountries,
      getCoronaData,
      getCountryConfirmed,
      getCountryRecovered,
      getCountryDeaths,
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
