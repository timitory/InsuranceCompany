<template>
    <div class="l-modal" >
        <div class="loading-modal w-full">
            <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6">
                <div class="pt-6 relative">
                    <div class="">
                        <img src="../../assets/images/ratingimage.svg" alt="" class=" mx-auto w-3/5 img" >
                        <p class="text-center pt-4 pb-8">How likely would you recommend PADDYCOVER <br /> to your friends?</p>
                        <StarRating value=0 class="text-center"></StarRating>
                        <div class="mt-4">
                            <!-- <label class="text-sm font-bold">Write a review</label> -->
                            <textarea rows="5" v-model="message"
                                placeholder=" Leave a comment"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required></textarea>
                        </div>
                        <div>
                            <button type="button" class="block w-full bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" @click="submitReview">
                                Submit
                            </button>
                        </div>
                        <div>
                            <button class="block w-full mt-2 text-dark bg-gray-100 px-12 py-2 rounded focus:outline-none" @click="viewpolicy">
                                View Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import StarRating from '../Star-rating.vue'
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
// import router from '../../router'
export default {
    components: {
  StarRating
},
props: [
    close,
    'tett'
],
data() {
    return {
        value: this.value,
        message: '',
    };
  },
  computed: {
    ...mapState({
      ratings: state => state.ratings
    })
  },
    methods: {
        viewpolicy() {
            if(this.tett === '/pet/managepet' || this.tett === '/gadget/managegadget'){
                this.$router.push(this.tett)
            }else {
                this.$router.push(`/app/dashboard/${this.tett}`)
            }
            
        },
        submitReview() {
            this.$store.commit('startLoading')
            const data = {
                message: this.message,
                rating: this.ratings,
            }
            console.log(data);
            axios({url: `${baseURL}/feedback `, data, method:'POST' })
            .then(res=>{
                this.$store.commit('endLoading')
                this.$router.push(`/app/dashboard/${this.tett}`)
                // this.$store.commit('setReviewmodal', false)
                console.log(res.data);
            })
            .catch(err=>{
                // console.log(err)
                this.$store.dispatch('handleError', err)
            })
        }
    }

}
</script>
 
<style scoped>
.loader {
    position: relative;
    top: 100px;
    max-width: 600px;
    background-color: #f7f7f7;
}

input {
    background-color: #e2f5ec;
}
</style>