import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0,
        documentation: '',
        version: ''
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setDocumentation(state, payload) {
        state.documentation = payload;
      },
      setVersion(state, payload) {
        this.state.version = payload
      }
    }
  })

  export default store