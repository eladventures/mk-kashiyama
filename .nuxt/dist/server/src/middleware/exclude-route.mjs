import "vue";
import "/Users/eladventures/Desktop/codes/mk-kashiyama/node_modules/hookable/dist/index.mjs";
import { defineNuxtRouteMiddleware, abortNavigation, navigateTo } from "../../node_modules/nuxt/dist/app/composables/router.mjs";
import "/Users/eladventures/Desktop/codes/mk-kashiyama/node_modules/destr/dist/index.mjs";
import "/Users/eladventures/Desktop/codes/mk-kashiyama/node_modules/klona/dist/index.mjs";
import "/Users/eladventures/Desktop/codes/mk-kashiyama/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
const excludeRoute = defineNuxtRouteMiddleware((to, from) => {
  const excludeRoutes = [
    // TODO: add the routes you want to exclude here
  ];
  if (excludeRoutes.includes(to.name)) {
    return abortNavigation();
  }
  return navigateTo("/");
});
export {
  excludeRoute as default
};
//# sourceMappingURL=exclude-route.mjs.map
