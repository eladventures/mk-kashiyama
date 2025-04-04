import validate from "../node_modules/nuxt/dist/pages/runtime/validate.mjs";
import manifest_45route_45rule from "../node_modules/nuxt/dist/app/middleware/manifest-route-rule.mjs";
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  "exclude-route": () => import("../src/middleware/exclude-route.mjs")
};
export {
  globalMiddleware,
  namedMiddleware
};
//# sourceMappingURL=virtual_nuxt__Users_eladventures_Desktop_codes_mk-kashiyama_.nuxt_middleware.mjs.map
