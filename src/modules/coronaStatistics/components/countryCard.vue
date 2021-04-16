<template>
  <div>
    <h3 class="font-bold py-2">{{ country }}</h3>
    <div class="grid grid-cols-2 gap-1">
      <div>Population:</div>
      <div>{{ population }}</div>
      <div>Confirmed:</div>
      <div>{{ confirmed }}</div>
      <div>Recovered:</div>
      <div>{{ recovered }}</div>
      <div>Deaths:</div>
      <div>{{ died }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "countryCard",
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const population = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return countries[country]["All"]["population"];
    });

    const confirmed = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return countries[country]["All"]["confirmed"];
    });

    const recovered = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return countries[country]["All"]["recovered"];
    });

    const died = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return countries[country]["All"]["deaths"];
    });
    return {
      population,
      confirmed,
      recovered,
      died,
    };
  },
});
</script>
