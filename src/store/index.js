import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      comments: [],
      count: 0,
    }
  },
  mutations: {
    'SET-COMMENTS': (state, payload) => {
      state.comments.push(payload)
    },
  },
})
