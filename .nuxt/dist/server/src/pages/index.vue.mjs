import { unref, useSSRContext } from "vue";
import { ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../assets/images/mk-passenger-pad.jpg.mjs";
import _imports_1 from "../assets/images/mk-passenger-shoe.jpg.mjs";
import _imports_2 from "../assets/images/mk-brake.jpg.mjs";
import heroImg from "../assets/images/mk-logo-sm.jpg.mjs";
import "/Users/eladventures/Desktop/codes/mk-kashiyama/node_modules/hookable/dist/index.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css            */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Nuxt + Tailwind Template",
      description: "Clean and minimal Nuxt 3 + Tailwind starter template."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="w-full"><img${ssrRenderAttr("src", unref(heroImg))} alt="Hero" class="object-contain w-full h-auto"><div class="container flex flex-col items-center px-4 pt-16 pb-8 mx-auto text-center md:py-12 md:px-10 lg:px-32 xl:max-w-5xl"><h1 class="text-5xl font-bold leading-none sm:text-4xl"> Philippines Exclusive Distributor </h1><p class="px-8 mt-8 mb-0 text-lg"> MK Kashiyama has a long history and experience in producing high-quality brake components since 1960. MK Kashiyama is driven toward products with better safety and higher functionality. </p></div><div class="container flex flex-col justify-center px-4 pb-12 mx-auto"><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"><img${ssrRenderAttr("src", _imports_0)} class="object-cover w-full border border-gray-300 rounded shadow aspect-square" alt="Passenger Pad"><img${ssrRenderAttr("src", _imports_1)} class="object-cover w-full border border-gray-300 rounded shadow aspect-square" alt="Passenger Shoe"><img${ssrRenderAttr("src", _imports_2)} class="object-cover w-full border border-gray-300 rounded shadow aspect-square" alt="Brake"></div></div></section><section class="my-8 text-gray-800 bg-gray-100"><div class="container flex flex-col items-center px-4 py-10 mx-auto space-y-6 md:p-8"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-12 h-12 sm:w-16 sm:h-16 text-violet-600"></svg><h1 class="text-2xl font-bold leading-tight text-center underline sm:text-3xl md:text-4xl"> Your Trusted Source for MK Kashiyama in the Philippines </h1><p class="max-w-3xl text-lg font-semibold text-center text-gray-700 sm:text-xl md:text-2xl"> &quot;Guaranteed authentic. Avoid counterfeits. <br> Get genuine quality, every time.&quot; </p></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
