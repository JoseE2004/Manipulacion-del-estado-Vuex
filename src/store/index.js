import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            username: 'Jose.Eloy'
        }
    },
    getters: {
        firstName(state){
            return state.username
        }
    }
})

export default store