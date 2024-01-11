export default {

    state: {
        resources: {},
        user_home_id: ''
    },
    mutations: {
        setHomeResources(state, payload){
            state.resources = payload
        },
        setUserHomeId(state, id){
            state.user_home_id = id
        }
    },
    actions: {},

}