export default {

    state: {
        underwriters: [],
        chiResources: {},
        aiicoResources: {},
        policy: {}
    },
    mutations: {
        setVehicleUnderwriters(state, payload){
            state.plans = payload
        },
        setChiVehicleResources(state, val){
            state.chiResources = val
        },
        setAiicoVehicleResources(state, val){
            state.aiicoResources = val
        },
        setVehiclePolicy(state, obj){
            state.policy = obj
        }
    },
    actions: {},

}