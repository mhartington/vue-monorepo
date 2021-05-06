"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnline = void 0;
var vue_1 = require("vue");
// useOnline composable hook.
// Adapted from https://github.com/pikax/vue-composable
var PASSIVE_EV = { passive: true };
var online = undefined;
function useOnline() {
    var supported = 'onLine' in navigator;
    if (!supported) {
        online = vue_1.ref(false);
    }
    if (!online) {
        online = vue_1.ref(navigator.onLine);
        window.addEventListener('offline', function () { return (online.value = false); }, PASSIVE_EV);
        window.addEventListener('online', function () { return (online.value = true); }, PASSIVE_EV);
    }
    return { supported: supported, online: online };
}
exports.useOnline = useOnline;
//# sourceMappingURL=index.js.map