<template>
  <div>
    <h3>{{ country }}</h3>
    <div>Confirmed: {{ confirmed }}</div>
    <div>Recovered: {{ recovered }}</div>
    <div>Deaths: {{ died }}</div>
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
      return countries[country]["All"]["recovered"];
    });
    return {
      confirmed,
      recovered,
      died,
    };
  },
});
</script>
