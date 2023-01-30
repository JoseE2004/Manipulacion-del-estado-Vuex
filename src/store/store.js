import { reactive } from "vue"

const store = reactive({
    usernme: 'jose.nerd',
    updateUsername(username){
        this.username = username
    }
})

export default store