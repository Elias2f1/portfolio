import { _ as __nuxt_component_0 } from './nuxt-link-CERVLrnW.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/devalue/index.js';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unhead/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Accueil</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/epreuves/e4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Voir E4`);
      } else {
        return [
          createTextVNode("Voir E4")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BFxS5zB0.mjs.map
