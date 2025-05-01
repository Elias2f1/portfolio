import { _ as __nuxt_component_0 } from "./nuxt-link-CERVLrnW.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main = {
  head() {
    return {
      title: "Épreuve E4 - Portfolio BTS SIO"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 ml-64 p-8" }, _attrs))}><div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"><h1 class="text-3xl font-bold text-blue-600 mb-6">Épreuve E4 - Solution Logicielle et Application Métier</h1><div class="prose max-w-none"><section class="mb-8"><h2 class="text-2xl font-semibold text-blue-500 mb-4">Description de l&#39;épreuve</h2><p>L&#39;épreuve E4 évalue votre capacité à développer une solution logicielle répondant à un besoin métier concret, généralement dans le cadre de votre stage de deuxième année.</p></section><section class="mb-8"><h2 class="text-2xl font-semibold text-blue-500 mb-4">Modalités</h2><ul class="list-disc pl-6 space-y-2"><li><strong>Coefficient :</strong> 5</li><li><strong>Durée :</strong> 1 heure de présentation</li><li><strong>Type :</strong> Soutenance de projet</li><li><strong>Format :</strong> Présentation + démonstration + questions</li></ul></section><section class="mb-8"><h2 class="text-2xl font-semibold text-blue-500 mb-4">Compétences évaluées</h2><div class="grid md:grid-cols-2 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-bold text-blue-600 mb-2">Développement</h3><ul class="list-disc pl-5 space-y-1"><li>Conception technique</li><li>Qualité du code</li><li>Utilisation des bonnes pratiques</li></ul></div><div class="bg-blue-50 p-4 rounded-lg"><h3 class="font-bold text-blue-600 mb-2">Analyse</h3><ul class="list-disc pl-5 space-y-1"><li>Compréhension du besoin</li><li>Choix techniques argumentés</li><li>Gestion des contraintes</li></ul></div></div></section><section class="mb-8"><h2 class="text-2xl font-semibold text-blue-500 mb-4">Mon projet E4</h2><div class="border-l-4 border-blue-500 pl-4"><h3 class="text-xl font-semibold mb-2">Application de gestion pour MJ GESTION</h3><p><strong>Contexte :</strong> Développement d&#39;une application web interne pour la gestion des dossiers clients.</p><p><strong>Technologies :</strong> Vue.js, Node.js, MongoDB</p><p><strong>Fonctionnalités clés :</strong></p><ul class="list-disc pl-6 mt-2 space-y-1"><li>Interface administrateur complète</li><li>Gestion des workflows métier</li><li>Génération de documents automatisée</li></ul></div></section><section><h2 class="text-2xl font-semibold text-blue-500 mb-4">Documents associés</h2><div class="flex flex-wrap gap-4"><a href="/pdf/dossier_E4.pdf" download class="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> Dossier complet (PDF) </a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/#projets",
    class: "flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Voir les projets `);
      } else {
        return [
          createTextVNode(" Voir les projets ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/epreuves/E4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const E4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  E4 as default
};
//# sourceMappingURL=E4-Bob6Ep8g.js.map
