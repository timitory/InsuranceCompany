export default {
    state:{
        claimData: {},
        currentStep: 1
    },
    mutations:{
        setChiClaimData(state, obj){
            state.claimData = {...state.claimData, ...obj}
        },
        resetChiClaimData(state){
            state.claimData = {}
        },
        resetChiClaimStep(state){
            state.currentStep = 1
        },
        increaseChiClaimStep(state){
            state.currentStep++
        },
        decreaseChiClaimStep(state){
            state.currentStep--
        }
    }
}