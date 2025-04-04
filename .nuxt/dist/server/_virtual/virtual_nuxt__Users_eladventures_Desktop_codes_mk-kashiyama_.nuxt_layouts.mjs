import { defineAsyncComponent } from "vue";
const layouts = {
  default: defineAsyncComponent(() => import("../src/layouts/default.vue.mjs").then((m) => m.default || m))
};
export {
  layouts as default
};
//# sourceMappingURL=virtual_nuxt__Users_eladventures_Desktop_codes_mk-kashiyama_.nuxt_layouts.mjs.map
