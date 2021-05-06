/* eslint-disable */
import { ref, Ref } from 'vue';

// useOnline composable hook.
// Adapted from https://github.com/pikax/vue-composable

const PASSIVE_EV: AddEventListenerOptions = { passive: true };
let online: Ref<boolean> | undefined = undefined;
export function useOnline() {
  const supported = 'onLine' in navigator;
  if (!supported) {
    online = ref(false);
  }

  if (!online) {
    online = ref(navigator.onLine);
    window.addEventListener(
      'offline',
      () => (online!.value = false),
      PASSIVE_EV
    );
    window.addEventListener('online', () => (online!.value = true), PASSIVE_EV);
  }

  return { supported, online };
}
