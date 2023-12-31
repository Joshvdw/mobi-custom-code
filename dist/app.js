// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2ly9l":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
//  OUT OF VENUE FIX
document.addEventListener("DOMContentLoaded", function() {
    const triggers = document.querySelectorAll(".fade-trigger");
    const images = document.querySelectorAll(".product-features_image");
    const hasTriggerBeenInView = new Array(images.length).fill(false);
    let triggerIndex;
    let hasFirstImgTriggered = false;
    images[0].style.display = "inline-block"; // display first image by default
    swapImage();
    document.addEventListener("scroll", function() {
        swapImage();
    });
    function swapImage() {
        triggers.forEach((trigger, index)=>{
            if (isInViewport(trigger)) {
                images.forEach((image)=>{
                    image.style.display = "none"; // hide all images
                });
                if (index != triggerIndex) hasTriggerBeenInView[triggerIndex] = false;
                if (!hasTriggerBeenInView[index] && hasFirstImgTriggered) images[index].style.opacity = 0; // change  img opacity to 0
                images[index].style.display = "inline-block"; // show img at current trigger index
                if (!hasTriggerBeenInView[index] && hasFirstImgTriggered) fadeIn(images[index]); // fade in opacity of img
                hasTriggerBeenInView[index] = true;
                triggerIndex = index;
                // catch to stop first img from fading 
                if (!hasFirstImgTriggered && index == 0) hasFirstImgTriggered = true;
            }
        });
    }
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});
function fadeIn(el) {
    var opacity = 0;
    var fadeInInterval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            el.style.opacity = opacity;
        } else clearInterval(fadeInInterval); // Stop the interval when opacity reaches 1
    }, 50);
} // const currentPage = window.location.pathname;
 // const homePage = currentPage == "/";
 // const integrationsPage = currentPage == "/integrations";
 // const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
 // gsap.registerPlugin(ScrollTrigger);
 // document.addEventListener("DOMContentLoaded", function () {
 //   // alert("we local baby");
 //   // NAVBAR OVERLAY FIX
 //   const overlay = document.querySelector(".navbar_dropdown-overlay");
 //   const targetElements = document.querySelectorAll(".dropdown-list");
 //   const initialDisplayValues = new Map();
 //   const config = { attributes: true };
 //   const observer = new MutationObserver(handleStyleChange);
 //   targetElements.forEach((element) => {
 //     initialDisplayValues.set(element, element.style.display);
 //     observer.observe(element, config);
 //   });
 //   function handleStyleChange(mutationsList, observer) {
 //     mutationsList.forEach((mutation) => {
 //       if (
 //         mutation.type === "attributes" &&
 //         mutation.attributeName === "style" &&
 //         mutation.target.style &&
 //         !tabletChecker()
 //       ) {
 //         const currentDisplayStyle = mutation.target.style.display;
 //         if (initialDisplayValues.get(mutation.target) !== currentDisplayStyle) {
 //           const isOpen = currentDisplayStyle == "block";
 //           if (isOpen) {
 //             overlay.style.display = "block";
 //           } else {
 //             overlay.style.display = "none";
 //           }
 //           initialDisplayValues.set(mutation.target, currentDisplayStyle);
 //         }
 //       }
 //     });
 //   }
 //   // GSAP SCROLL CODE
 //   if (homePage && !tabletChecker()) loadAndInitCanvas("canvas");
 //   // if (!tabletChecker()) loadAndInitCanvas("footer_canvas");
 //   function loadAndInitCanvas(canvasID) {
 //     const isFooter = canvasID === "footer_canvas";
 //     const images = [];
 //     const frameCount = isFooter ? 200 : 300;
 //     let imagesLoaded = 0;
 //     function handleImageLoad(img) {
 //       imagesLoaded++;
 //       if (imagesLoaded === frameCount) {
 //         initCanvas(canvasID, images);
 //         console.log("All images are loaded for canvasID: " + canvasID);
 //       }
 //     }
 //     for (let i = 0; i < frameCount; i++) {
 //       const img = new Image();
 //       img.src = currentFrame(i, canvasID);
 //       img.onload = handleImageLoad.bind(null, img);
 //       img.onerror = function () {
 //         console.error("Failed to load image:", img.src);
 //         imagesLoaded++;
 //         if (imagesLoaded === frameCount) {
 //           initCanvas(canvasID, images);
 //           console.log("All images are loaded for canvasID: " + canvasID);
 //         } else {
 //           setTimeout(function () {
 //             img.src = currentFrame(i, canvasID);
 //           }, 1000);
 //         }
 //       };
 //       images.push(img);
 //     }
 //   }
 //   function currentFrame(index, canvasID) {
 //     let baseUrl;
 //     const isFooter = canvasID === "footer_canvas";
 //     if (isFooter) {
 //       baseUrl =
 //         "https://general-client-assets.sfo3.digitaloceanspaces.com/MOBI/Home/Footer/v02/desktop";
 //     } else {
 //       baseUrl =
 //         "https://general-client-assets.sfo3.digitaloceanspaces.com/MOBI/Home/Rolling_Ball/v06";
 //     }
 //     const frameUrl = `${baseUrl}/MOBI_${
 //       isFooter ? "Footer" : "RollingBall_viewport"
 //     }_16-9_${index.toString().padStart(5, "0")}.jpg`;
 //     return frameUrl;
 //   }
 //   function initCanvas(canvasID, images) {
 //     const isFooter = canvasID === "footer_canvas";
 //     const canvas = document.querySelector(`#${canvasID}`);
 //     const context = canvas.getContext("2d");
 //     const triggerElement = isFooter
 //       ? document.querySelector(".scrub-wrapper-footer")
 //       : document.querySelector(".scrub-wrapper");
 //     const frameCount = isFooter ? 200 : 300;
 //     const airpods = {
 //       frame: 0,
 //     };
 //     canvas.width = window.innerWidth;
 //     canvas.height = window.innerHeight;
 //     function resizeCanvas() {
 //       canvas.width = window.innerWidth;
 //       const aspectRatio =
 //         images[airpods.frame].width / images[airpods.frame].height;
 //       canvas.height = window.innerWidth / aspectRatio;
 //       renderImage();
 //       ScrollTrigger.refresh();
 //     }
 //     resizeCanvas();
 //     window.addEventListener("resize", resizeCanvas);
 //     gsap.to(canvas, {
 //       width: "100%",
 //       ease: "none",
 //       onUpdate: resizeCanvas,
 //       scrollTrigger: {
 //         trigger: triggerElement,
 //         start: isFooter ? "top bottom" : "top center",
 //         end: isFooter ? "bottom bottom" : "bottom center",
 //         scrub: 0.5,
 //         normalizeScroll: true,
 //       },
 //     });
 //     gsap.to(airpods, {
 //       frame: frameCount - 1,
 //       snap: "frame",
 //       ease: "none",
 //       scrollTrigger: {
 //         trigger: triggerElement,
 //         start: isFooter ? "top bottom" : "top center",
 //         end: isFooter ? "bottom bottom" : "bottom center",
 //         scrub: 2,
 //         normalizeScroll: true,
 //       },
 //       onUpdate: renderImage,
 //     });
 //     images[0].onload = function () {
 //       renderImage();
 //     };
 //     images[0].onerror = function () {
 //       console.error(`Failed to load the initial image for ${canvasID}`);
 //     };
 //     function renderImage() {
 //       if (isFooter) {
 //         context.clearRect(0, 0, canvas.width, canvas.height);
 //         const currentImage = images[airpods.frame];
 //         const aspectRatio = currentImage.width / currentImage.height;
 //         const canvasWidth = window.innerWidth;
 //         const canvasHeight = window.innerHeight;
 //         let drawnWidth, drawnHeight;
 //         if (canvasWidth / aspectRatio > canvasHeight) {
 //           drawnWidth = canvasWidth;
 //           drawnHeight = canvasWidth / aspectRatio;
 //         } else {
 //           drawnHeight = canvasHeight;
 //           drawnWidth = canvasHeight * aspectRatio;
 //         }
 //         const x = (canvasWidth - drawnWidth) / 2;
 //         const y = (canvasHeight - drawnHeight) / 2;
 //         context.drawImage(currentImage, x, y, drawnWidth, drawnHeight);
 //       } else {
 //         context.clearRect(0, 0, canvas.width, canvas.height);
 //         const currentImage = images[airpods.frame];
 //         const aspectRatio = currentImage.width / currentImage.height;
 //         const canvasWidth = window.innerWidth;
 //         const canvasHeight = window.innerHeight;
 //         const desiredHeight = canvasHeight * 0.5;
 //         let drawnWidth, drawnHeight;
 //         drawnHeight = desiredHeight;
 //         drawnWidth = drawnHeight * aspectRatio;
 //         if (drawnWidth < canvasWidth) {
 //           drawnWidth = canvasWidth;
 //           drawnHeight = drawnWidth / aspectRatio;
 //         }
 //         const x = 0;
 //         const y = 0;
 //         context.drawImage(currentImage, x, y, drawnWidth, drawnHeight);
 //       }
 //     }
 //   }
 //   // INTEGRATION PAGE CATEGORY FILTER FIX
 //   if (integrationsPage) {
 //     let lastItem;
 //     const filterLinks = document.querySelectorAll(".category-filter");
 //     const defaultIntro = document.querySelector("#default-intro");
 //     categorySwitcher();
 //     filterLinks.forEach((link) => {
 //       link.addEventListener("click", () => {
 //         setTimeout(() => {
 //           categorySwitcher();
 //         }, 100);
 //       });
 //     });
 //     function categorySwitcher() {
 //       const url = window.location.href;
 //       const urlParams = new URLSearchParams(url.split("?")[1]);
 //       const integrationCategory = urlParams.get("integration-category");
 //       const showDefault = integrationCategory == null;
 //       if (showDefault) {
 //         displaySwap(defaultIntro, "block", true);
 //         if (lastItem != undefined) {
 //           displaySwap(lastItem, "none");
 //           lastItem = undefined;
 //         }
 //       } else {
 //         const currentCategory = capitalizeFirstLetter(integrationCategory);
 //         displaySwap(defaultIntro, "none", true);
 //         displaySwap(currentCategory, "block");
 //         if (lastItem != currentCategory) {
 //           if (lastItem != undefined) {
 //             displaySwap(lastItem, "none");
 //           }
 //           lastItem = currentCategory;
 //         }
 //       }
 //     }
 //     function capitalizeFirstLetter(string) {
 //       if (string == "pos") {
 //         return string.toUpperCase();
 //       } else {
 //         return string.charAt(0).toUpperCase() + string.slice(1);
 //       }
 //     }
 //     function displaySwap(id, displayState, isDefault) {
 //       if (isDefault) {
 //         defaultIntro.style.display = displayState;
 //       } else {
 //         document.querySelector(`#${id}`).style.display = displayState;
 //       }
 //     }
 //   }
 //   // PRELOADER VIDEO SWAP CODE
 //   if (homePage) {
 //     window.addEventListener("load", () => {
 //       document.querySelector(".loader_v1").style.display = isiOS
 //         ? "none"
 //         : "flex";
 //       document.querySelector(".loader_v2").style.display = isiOS
 //         ? "flex"
 //         : "none";
 //       const video1 = document.getElementById("bgVideo1");
 //       const video2 = document.getElementById("bgVideo2");
 //       const vidSrc1 = document.getElementById("vidSrc1");
 //       const vidSrc2 = document.getElementById("vidSrc2");
 //       setTimeout(() => {
 //         if (mobileChecker()) {
 //           changeVidSrc(vidSrc1, vidSrc2);
 //           video1.load();
 //           video2.load();
 //         }
 //         if (!isiOS) {
 //           video1.currentTime = 0;
 //           video1.play();
 //         }
 //       }, 2500);
 //       if (!isiOS) {
 //         video1.addEventListener("ended", () => {
 //           document.querySelector(".loader_v1").style.display = "none";
 //           document.querySelector(".loader_v2").style.display = "flex";
 //           video2.currentTime = 0;
 //           video2.play();
 //         });
 //       }
 //     });
 //   }
 //   // always load / refresh atop the page
 //   window.onbeforeunload = function () {
 //     if (homePage) scrollToTop();
 //   };
 //   // REMOVE LOTTIES FROM DOM ON MOBILE
 //   const topLottie = document.querySelector("#top_lottie");
 //   if (homePage && mobileChecker()) removeFromDom(topLottie);
 //   const bottomLottie = document.querySelector("#bottom_lottie");
 //   if (homePage && tabletChecker()) removeFromDom(bottomLottie);
 // }); // DOM load event listener end
 // // UTILITY FUNCTIONS
 // function tabletChecker() {
 //   const screenWidth = window.innerWidth;
 //   const breakpoint = 991;
 //   return screenWidth < breakpoint;
 // }
 // function mobileChecker() {
 //   const screenWidth = window.innerWidth;
 //   const breakpoint = 767;
 //   return screenWidth < breakpoint;
 // }
 // function removeFromDom(element) {
 //   element.remove();
 // }
 // function changeVidSrc(video1, video2) {
 //   video1.setAttribute(
 //     "src",
 //     "https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/MOBI/Home/Home_Hero_Video/mobile/MOBI_BG_9-16_v01.mp4"
 //   );
 //   video1.setAttribute("type", "video/mp4");
 //   video2.setAttribute(
 //     "src",
 //     "https://general-client-assets.sfo3.cdn.digitaloceanspaces.com/MOBI/Home/Home_Hero_Video/mobile/MOBI_BG_LOOP_9-16_v01.mp4"
 //   );
 //   video2.setAttribute("type", "video/mp4");
 // }
 // function scrollToTop() {
 //   const bodyTag = document.querySelector("body");
 //   const allElements = bodyTag.childNodes;
 //   bodyTag.style.backgroundColor = "#002e46";
 //   allElements.forEach((element) => {
 //     element.style.display = "none";
 //   });
 //   window.scrollTo(0, 0);
 // }

},{}]},["2ly9l","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
