import { reactive, effect } from '@vue/reactivity'

export default function LocalStorage(key, prop, defaultValue) {
  let data = reactive(prop)

  Object.assign(
    data,
    (localStorage[key] && JSON.parse(localStorage[key])) || defaultValue,
  )

  effect(() => (localStorage[key] = JSON.stringify(data)))

  return data
}
