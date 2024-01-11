<template>
    <div class="mt-6">
        <div class="lg:w-3/4 lg:mx-auto">
            <p class="font-bold text-lg">LiveStock Information</p>
            <hr class="mt-4">
            <Livestockform :petform="petform" :back="this.back" :page="this.page" :policytype="this.policy"
                :callnext="this.callnext" :callback="this.callback" />
        </div>
    </div>
</template>
    
<script>
import { mapState } from 'vuex'
import Livestockform from '../../components/Pet/Livestockform.vue'
export default {
    components: {
        Livestockform,
    },
    data() {
        return {
            user_pet_id: 0,
            reference: '',
        }
    },
    props: [
        'petform',
        'page',
        'back',
        'policy',
        'policytype',
        'petdata',
        'coporatedata',
        'callnext',
        'callback',
        'paymentmode'
    ],
    methods: {

    },

    computed: {
        ...mapState({
            self: state => state.user,
            beneficiary: state => state.beneficiary,
            underwriterId: state => state.underwriter_id
        }),
    },
    mounted() {
        // console.log(this.policytype);
    }
}
</script>
    
<style scoped></style>