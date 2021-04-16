import store from "@/store";
import axios from "axios";

store.registerModule("coronaStatistics", {
  namespaced: true,
  state: {
    countries: {},
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async loadCountryData(context) {
      const { data } = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases"
      );
      context.commit("setCountries", data);
    },
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
    getCountryList(state) {
      return Object.keys(state.countries);
    },
  },
});
