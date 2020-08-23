import { ref, reactive } from 'vue'

export function useRef(initialValue) {
  const state = ref(initialValue)
  function setState(text) {
    state.value = text
  }
  return [state, setState]
}

export function useReactive(initialValue) {
  let state = reactive(initialValue)
  function setState(key, newVal) {
    state[key] = newVal
  }
  return [state, setState]
}
