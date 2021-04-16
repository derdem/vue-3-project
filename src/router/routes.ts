import { RouteRecordRaw } from "vue-router";

export default function generateRoutes(): Array<RouteRecordRaw> {
  return [
    {
      path: "/",
      name: "Corona",
      component: () =>
        import(
          /* webpackChunkName: "corona" */ "@/views/Covid-19-Dashboard.vue"
        ),
    },
  ];
}
