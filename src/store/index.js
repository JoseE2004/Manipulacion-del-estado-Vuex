import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            username: 'Jose.Eloy'
        }
    },
    getters: {
        firstName(state){
            return state.username.split('.')[0]
        }
    }
})

export default store