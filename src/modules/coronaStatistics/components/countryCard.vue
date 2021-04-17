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

function humanreadable(numInput: number) {
  if (numInput === undefined) {
    return "Not Defined";
  }
  const stringInput = numInput.toString();
  const arrayInput = stringInput.split("");
  const numberOfdigits = arrayInput.length;
  const injectPositions = getInjectPositions(numberOfdigits);
  const arrayWithPoints = injectPoint(arrayInput, injectPositions);
  return arrayWithPoints.join("");
}

function injectPoint(
  arrayNumber: string[],
  injectPositions: number[]
): string[] {
  if (injectPositions.length === 0) {
    return arrayNumber;
  }
  const nextInjectPosition = injectPositions.shift() as number;
  arrayNumber.splice(nextInjectPosition, 0, ".");
  return injectPoint(arrayNumber, injectPositions);
}

function getInjectPositions(arraylength: number) {
  const digitPackage = 3;
  let pointpositions: number[] = [];
  for (let i = digitPackage; arraylength > i; i += digitPackage) {
    pointpositions.push(arraylength - i);
  }
  return pointpositions;
}

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
      return humanreadable(countries[country]["All"]["population"]);
    });

    const confirmed = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return humanreadable(countries[country]["All"]["confirmed"]);
    });

    const recovered = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return humanreadable(countries[country]["All"]["recovered"]);
    });

    const died = computed(() => {
      const countries = store.getters["coronaStatistics/getCountries"];
      const country = props.country;
      return humanreadable(countries[country]["All"]["deaths"]);
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
