<template>
  <div>
    <h1>Countries</h1>
    <div v-for="country in listOfCountries" :key="country" class="country">
      <h3>{{ country }}</h3>
      <div>Confirmed: {{ getCountryConfirmed(country) }}</div>
      <div>Recovered: {{ getCountryRecovered(country) }}</div>
      <div>Deaths: {{ getCountryDeaths(country) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, computed, defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const countries = ref({} as any);
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
.country {
  margin-bottom: 2rem;
  padding-left: 1rem;
}
</style>
