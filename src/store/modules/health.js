export default {

    state: {
        underwriters: [],
        plan : '',
        chiHealthResources: {},
        user_health_id: '',
        beneficiaryType: ''
    },
    mutations: {
        setHealthPlan(state, obj){
            state.plan = obj
        },
        setChiHealthResources(state, obj){
            state.chiHealthResources = obj
        },
        setUserHealthId(state, id){
            state.user_health_id = id
        },
        setBeneficiaryType(state, str){
            state.beneficiaryType = str
        }
    },
    actions: {},

}