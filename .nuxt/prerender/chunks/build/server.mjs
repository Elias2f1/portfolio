import { version, unref, inject, defineComponent, provide, shallowReactive, h, ref, watch, Suspense, nextTick, Fragment, Transition, hasInjectionContext, getCurrentInstance, useSSRContext, createApp, effectScope, reactive, getCurrentScope, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, defineAsyncComponent, mergeProps, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1, appendHeader } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/h3/dist/index.mjs';
import { getActiveHead, CapoPlugin } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/@unhead/shared/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/radix3/dist/index.mjs';
import { defu } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/defu/dist/defu.mjs';
import { hasProtocol, isScriptProtocol, joinURL, withQuery } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/ufo/dist/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs } from 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/devalue/index.js';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/@unhead/ssr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/jiper/OneDrive%20-%20univ-rouen.fr/Bureau/SIO/PortfolioV2/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: undefined,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? undefined : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? undefined : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? undefined : _a.islandContext) && ((_b = plugin2.env) == null ? undefined : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? undefined : _c.islandContext) && ((_d = plugin2.env) == null ? undefined : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? undefined : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? undefined : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? undefined : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? undefined : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? undefined : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : undefined);
        return to;
      }
      return redirect(!inMiddleware ? undefined : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? undefined : options.replace) {
      (undefined).replace(toPath);
    } else {
      (undefined).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? undefined : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== undefined) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === undefined) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = undefined;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = undefined;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : undefined;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? undefined : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? undefined : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? undefined : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "epreuves-E4",
    path: "/epreuves/E4",
    component: () => import('./E4-Bob6Ep8g.mjs')
  },
  {
    name: "epreuves-E5",
    path: "/epreuves/E5",
    component: () => import('./E5-Cw6v_oG5.mjs')
  },
  {
    name: "epreuves-E6",
    path: "/epreuves/E6",
    component: () => import('./E6-LVO8O35x.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-BFxS5zB0.mjs')
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? undefined : _a.call(slots);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? undefined : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? undefined : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? undefined : _a.components) == null ? undefined : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? undefined : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || undefined;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? undefined : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? undefined : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (undefined).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (undefined).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes22) => routes22);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? undefined : _a2.components) == null ? undefined : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? undefined : _c2.components) == null ? undefined : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? undefined : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? undefined : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? undefined : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? undefined : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? undefined : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? undefined : _a.event;
}
function prerenderRoutes(path) {
  const paths = toArray(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
let routes;
const prerender_server_LXx1wM9sKF = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules;
  routes || (routes = Array.from(processRoutes(([__temp, __restore] = executeAsync(() => {
    var _a;
    return (_a = routerOptions.routes) == null ? undefined : _a.call(routerOptions, _routes);
  }), __temp = await __temp, __restore(), __temp) ?? _routes)));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return true;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  var _a;
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !((_a = route.children) == null ? undefined : _a.length) && shouldPrerender()) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  prerender_server_LXx1wM9sKF
];
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: undefined
    },
    keepalive: {
      type: [Boolean, Object],
      default: undefined
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    let pageLoadingEndHookAlreadyCalled = false;
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
            pageLoadingEndHookAlreadyCalled = true;
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => {
                    if (!pageLoadingEndHookAlreadyCalled) {
                      return nuxtApp.callHook("page:loading:end");
                    }
                    pageLoadingEndHookAlreadyCalled = false;
                  }).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || undefined,
                    vnode: slots.default ? h(Fragment, undefined, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || undefined,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : undefined
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? undefined : _a.default) === (Component == null ? undefined : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    handleNav(target) {
      if (target.startsWith("#")) {
        const section = target.substring(1);
        if (this.$route.path !== "/") {
          this.$router.push("/#" + section);
        } else {
          this.scrollTo(section);
        }
      } else {
        this.$router.push(target);
      }
    },
    scrollTo(id) {
      const element = (undefined).getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + (undefined).pageYOffset + yOffset;
        (undefined).scrollTo({ top: y, behavior: "smooth" });
      }
    },
    submitForm() {
      console.log("Formulaire soumis:", this.form);
      alert("Message envoyé!");
      this.form = { name: "", email: "", message: "" };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100" }, _attrs))}><nav class="fixed top-0 left-0 h-full w-64 bg-blue-600 text-white shadow-lg z-10"><div class="p-4"><h1 class="text-2xl font-bold mb-4">Portfolio</h1><ul class="space-y-4"><li><button class="hover:text-blue-300 w-full text-left">Accueil</button></li><li><button class="hover:text-blue-300 w-full text-left">Profil</button></li><li><button class="hover:text-blue-300 w-full text-left">Parcours</button></li><li><button class="hover:text-blue-300 w-full text-left">Certifications</button></li><li><button class="hover:text-blue-300 w-full text-left">Stages</button></li><li><button class="hover:text-blue-300 w-full text-left">Compétences</button></li><li><button class="hover:text-blue-300 w-full text-left">Projets</button></li><li><button class="hover:text-blue-300 w-full text-left">BTS SIO</button></li><li><button class="hover:text-blue-300 w-full text-left">Veille Tech</button></li><li><button class="hover:text-blue-300 w-full text-left">Contact</button></li></ul></div><div>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div></nav><main class="ml-64 p-8 space-y-16"><section id="accueil" class="fade-in"><h2 class="text-3xl font-bold text-blue-600 mb-4">Accueil</h2><p>Bienvenue sur mon portfolio, découvrez mes compétences, mon parcours, et mes projets.</p><button class="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"> Contactez-moi </button></section><section id="profil" class="fade-in"><h2 class="text-3xl font-bold text-blue-600 mb-4">Profil</h2><p>Je suis étudiant depuis 2 ans au Lycée Gustave Flaubert à Rouen (76) en deuxième année de BTS SIO (Services Informatiques aux Organisations), spécialité SLAM (Solutions Logicielles et Applications Métiers). J&#39;ai toujours apprécié le monde du web et donc c&#39;est pour cela que j&#39;ai décidé de me spécialiser dans ce domaine.</p><p>Après l&#39;obtention de mon BTS SIO - BAC+2, je souhaite poursuivre mon cursus en suivant la formation Licence informatique. Mon projet professionel se concentre sur la spécialisation en développement web ou cybersécurité, avec pour objectif de devenir un développeur web ou un expert en sécurité informatique au sein d&#39;une entreprise.</p></section><section id="parcours" class="fade-in py-12 px-4 md:px-8 rounded-lg shadow-md"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Parcours</h2><div class="relative"><div class="absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div><div class="space-y-8"><div class="relative flex w-full"><div class="hidden md:flex md:w-1/2"></div><div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></div><div class="w-full md:w-1/2 pl-12 md:pl-16"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"><h3 class="text-xl font-bold text-blue-700">2023 - À ce jour</h3><h4 class="text-lg font-semibold mb-2">BTS SIO - Option SLAM</h4><p class="text-gray-600">Lycée Gustave Flaubert (76 - Rouen)</p><p class="mt-2">Acquisition de compétences en développement logiciel et web</p></div></div></div><div class="relative flex w-full"><div class="w-full md:w-1/2 pr-12 md:pr-16"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 text-right md:text-left"><h3 class="text-xl font-bold text-blue-700">2020 - 2023</h3><h4 class="text-lg font-semibold mb-2">BAC Général - Mention Assez Bien</h4><p class="text-gray-600">Lycée Gustave Flaubert (76 - Sotteville-les-Rouen)</p><p class="mt-2">Options : Mathématiques /Physique Chimie / SVT</p></div></div><div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></div><div class="hidden md:flex md:w-1/2"></div></div><div class="relative flex w-full"><div class="hidden md:flex md:w-1/2"></div><div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></div><div class="w-full md:w-1/2 pl-12 md:pl-16"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"><h3 class="text-xl font-bold text-blue-700">2017 - 2020</h3><h4 class="text-lg font-semibold mb-2">Collège</h4><p class="text-gray-600">Collège Louise Michel (76 - St Etienne Du Rouvray)</p></div></div></div></div></div><div class="mt-16"><h3 class="text-2xl font-bold text-blue-600 mb-6 text-center">Centres d&#39;intérêt</h3><div class="grid md:grid-cols-2 gap-6"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"><div class="flex items-center mb-3"><svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg><h4 class="text-lg font-semibold">Voyages</h4></div><p>J&#39;aime voyager et découvrir de nouvelles cultures, paysages et traditions. Chaque voyage est pour moi une opportunité de rencontrer de nouvelles personnes et de s&#39;ouvrir au monde. </p></div><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"><div class="flex items-center mb-3"><svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 6h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg><h4 class="text-lg font-semibold">Langues</h4></div><p class="mb-2">•Obtention du cambdrige certificate en anglais niveau B2 (2017)</p><p>• Apprentissage du japonais (2024 - Présent)</p></div></div></div></div></section><section id="certifications" class="fade-in"><h2 class="text-3xl font-bold text-blue-600 mb-6">Certifications et Diplômes</h2><p class="text-lg text-gray-700 mb-8"> Vous pouvez consulter toutes mes certifications en cliquant sur le bouton ci-dessous. </p><div class="flex justify-center"><a href="https://drive.google.com/drive/folders/1quOkRdcamXHUpRFcHIgLtSwx14SHYc0J?usp=sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold"> Voir mes certifications </a></div></section><section id="stages" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Stages</h2><div class="relative"><div class="absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div><div class="space-y-12"><div class="relative flex w-full"><div class="hidden md:flex md:w-1/2"></div><div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></div><div class="w-full md:w-1/2 pl-12 md:pl-16"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"><div class="flex justify-between items-start"><h3 class="text-xl font-bold text-blue-700">2025 (5 semaines)</h3><span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2ème année</span></div><h4 class="text-lg font-semibold mb-2 mt-1">MJ GESTION - Développement</h4><div class="space-y-2 text-gray-600"><div class="flex items-start"><svg class="w-4 h-4 mt-1 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg><div><p class="font-medium">Siège : 12 Rond Point des Champs Elysées</p><p class="text-sm">39 Place de la République 76500 ELBEUF</p></div></div><div class="flex items-center"><svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg><a href="https://www.mjgestion.fr/" target="_blank" class="text-blue-600 hover:underline">www.mjgestion.fr</a></div></div><p class="mt-3">Stage BTS SIO de 2ème année au sein du service de développement.</p></div></div></div><div class="relative flex w-full"><div class="w-full md:w-1/2 pr-12 md:pr-16"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 text-right md:text-left"><div class="flex justify-between items-start"><h3 class="text-xl font-bold text-blue-700">2024 (5 semaines)</h3><span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">1ère année</span></div><h4 class="text-lg font-semibold mb-2 mt-1">Saint Gobain - Equipe SI</h4><div class="space-y-2 text-gray-600"><div class="flex items-start"><svg class="w-4 h-4 mt-1 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg><div><p class="text-sm">12 Pl. de l&#39;Iris, 92400 Courbevoie</p></div></div><div class="flex items-center"><svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg><a href="https://www.saint-gobain.com/" target="_blank" class="text-blue-600 hover:underline">www.saint-gobain.com</a></div></div><p class="mt-3">Stage BTS SIO de 1ère année au sein du service de dématérialisation de documents.</p></div></div><div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></div><div class="hidden md:flex md:w-1/2"></div></div><div class="relative flex w-full"><div class="hidden md:flex md:w-1/2"></div><div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></div><div class="w-full md:w-1/2 pl-12 md:pl-16"><div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500"><h3 class="text-xl font-bold text-blue-700">2019 (2 semaines)</h3><h4 class="text-lg font-semibold mb-2">Mairie de St Etienne -Rédaction du journal</h4><div class="space-y-2 text-gray-600"><div class="flex items-center"><svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg><p>8 Place de la libération, 76 St Etienne Du Rouvray</p></div><div class="flex items-center"><svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg><a href="https://www.saintetiennedurouvray.fr" target="_blank" class="text-blue-600 hover:underline">www.saintetiennedurouvray.fr</a></div></div><p class="mt-3">Stage d&#39;observation de deux semaines au sein de l&#39;équipe de rédaction du journal de la mairie.</p></div></div></div></div></div></div></section><section id="competences" class="fade-in"><h2 class="text-3xl font-bold text-blue-600 mb-6">Compétences</h2><p class="mb-4"><strong>Techniques :</strong></p><ul class="list-disc pl-6 mb-6"><li>HTML</li><li>CSS</li><li>Bootstrap</li><li>PHP</li><li>JavaScript</li><li>MVC</li><li>WordPress</li></ul><p class="mb-4"><strong>Conception et gestion de bases de données :</strong></p><ul class="list-disc pl-6 mb-6"><li>MySQL</li><li>UML avec JMERISE</li><li>MEA avec Modelio</li></ul><p class="mb-4"><strong>Développement d&#39;application :</strong></p><ul class="list-disc pl-6 mb-6"><li>Java</li></ul><p class="mb-4"><strong>Scripting et gestion de projet :</strong></p><ul class="list-disc pl-6"><li>Bash</li><li>Trello</li></ul></section><section id="projets" class="fade-in py-12 px-4 md:px-8 bg-gray-50"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-blue-600 mb-2">Mes Projets 💻</h2><p class="text-gray-700 mb-8"> Voici quelques projets que j&#39;ai réalisés au cours de ma formation en BTS SIO ou pendant mon temps libre. Ils couvrent divers domaines, allant du développement web, jeux à la gestion de bases de données. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><h3 class="text-xl font-semibold text-blue-500 mb-2">Portfolio Nuxt.js</h3><p class="text-gray-600"> Ce portfolio que vous consultez actuellement, développé avec Nuxt.js Une expérience moderne et responsive pour présenter mes compétences. </p></div><div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"><h3 class="text-xl font-semibold text-blue-500 mb-2">Plateforme de réservation</h3><p class="text-gray-600"> Développement d&#39;une plateforme web pour la gestion des réservations dans un open-space. Le site est connecté à une base de données et dispose d&#39;un client lourd en Java pour l&#39;administration. Ce projet a été réalisé en équipe lors de nos ateliers de professionnalisation, en utilisant Git pour la gestion de version. </p><a href="https://github.com/JRMi27/projetprof" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.115 22 16.379 22 11.984 22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg> Voir le projet </a></div></div></div></section><section id="bts-sio" class="fade-in py-12 px-4 md:px-8 rounded-lg shadow-md"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-blue-400 mb-6 text-center">BTS SIO</h2><div class="space-y-6 text-white-300"><p class="text-lg leading-relaxed"> Le <strong class="text-blue-400">BTS SIO</strong> (Brevet de Technicien Supérieur en Services Informatiques aux Organisations) est une formation Bac+2 axée sur l&#39;informatique en entreprise. </p><div class="grid md:grid-cols-2 gap-6 mt-8"><div class="p-6 rounded-lg border-l-4 border-blue-500"><h3 class="text-xl font-semibold text-blue-300 mb-3">SISR</h3><p class="text-white-300"><strong>Solutions d&#39;Infrastructure, Systèmes et Réseaux</strong> : Gestion des réseaux, serveurs et infrastructures informatiques. </p></div><div class="p-6 rounded-lg border-l-4 border-blue-500"><h3 class="text-xl font-semibold text-blue-300 mb-3">SLAM</h3><p class="text-white-300"><strong>Solutions Logicielles et Applications Métiers</strong> : Développement d&#39;applications et logiciels métiers. </p></div></div><div class="mt-10 p-6 rounded-lg"><h3 class="text-2xl font-bold text-blue-400 mb-4">Cybersécurité</h3><p class="mb-3"> Un module dédié à la <strong>cybersécurité</strong> est intégré au programme : </p><ul class="list-disc pl-6 space-y-2"><li>Sécurisation des infrastructures et données</li><li>Gestion des identités numériques</li><li>Conformité légale (RGPD, etc.)</li></ul></div></div></div></section><section id="veille-tech" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Veille Technologique</h2><p class="text-gray-700 mb-6"> La veille technologique consiste à s&#39;informer en continu sur les innovations, les évolutions et les nouvelles tendances dans le domaine du numérique et de l&#39;informatique. Elle permet d&#39;anticiper les changements, d&#39;améliorer ses compétences et de rester compétitif dans un secteur en perpétuelle évolution. </p><p class="text-gray-700 mb-8"> Le sujet de ma veille porte sur <strong>comment améliorer le SEO (Search Engine Optimization) d’un site web</strong>. Le SEO regroupe l&#39;ensemble des techniques visant à optimiser la visibilité d&#39;un site dans les résultats des moteurs de recherche comme Google. </p><div class="text-center"><a href="https://docs.google.com/spreadsheets/d/1eg9Jm9Mjbq3yj-9nTLyaGkXTRYz8YMh9Tw2JlnNw57o/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"> Consulter ma veille <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div></section><section id="epreuves" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Épreuves BTS SIO</h2><div class="grid md:grid-cols-3 gap-6"><div class="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden hover:shadow-lg transition"><div class="p-6"><h3 class="text-xl font-bold text-blue-700 mb-3">E5</h3><p class="text-gray-600 mb-4">Support et mise à disposition de services informatiques</p><ul class="list-disc pl-5 space-y-1 text-sm mb-5"><li>Epreuve orale</li><li>Coefficient: 4</li><li>Durée: 40 minutes</li></ul></div><div class="px-6 pb-4"><a href="https://drive.google.com/drive/folders/1jKWU4ieqTuV15x2VGQUwixXtdfSNSSlR?usp=sharing" target="_blank" rel="noopener noreferrer" class="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"><span>En savoir plus</span><svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div><div class="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden hover:shadow-lg transition"><div class="p-6"><h3 class="text-xl font-bold text-blue-700 mb-3">E6</h3><p class="text-gray-600 mb-4">Conception et développement d&#39;applications</p><ul class="list-disc pl-5 space-y-1 text-sm mb-5"><li>Epreuve orale</li><li>Coefficient: 4</li><li>Soutenance: 40 min (+1h30 de préparation)</li></ul></div><div class="px-6 pb-4"><a href="https://drive.google.com/drive/folders/1NPUX4nha1JK0vMvG0Gd9IL6QPyZdUYlP?usp=sharing" target="_blank" rel="noopener noreferrer" class="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"><span>En savoir plus</span><svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div></div></div></section><section id="contact" class="fade-in"><h2 class="text-3xl font-bold text-blue-600 mb-4">Contact</h2><p>Si vous avez des questions ou des opportunités à me proposer, vous pouvez me contacter via le formulaire ci-dessous :</p><form action="https://formsubmit.co/elatiaelias@gmail.com" method="POST" class="mt-6 space-y-4"><div><label for="name" class="block text-lg">Nom</label><input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></div><div><label for="email" class="block text-lg">Email</label><input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></div><div><label for="message" class="block text-lg">Message</label><textarea id="message" name="message" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows="5"></textarea></div><button type="submit" class="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"> Envoyer </button></form></section></main></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = undefined;
    const _Error404 = defineAsyncComponent(() => import('./error-404-D1cVHsLO.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-m0kY-Ws8.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? undefined : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, resolveRouteObject as a, navigateTo as b, useNuxtApp as c, useRuntimeConfig as d, entry$1 as default, injectHead as i, nuxtLinkDefaults as n, resolveUnrefHeadInput as r, useRouter as u };
//# sourceMappingURL=server.mjs.map
