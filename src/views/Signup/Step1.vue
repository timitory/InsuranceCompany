<template>
    <form @submit.prevent="showNext" class="w-full">
        <div class="mt-6 lg:flex">
        <div class="lg:mr-3">
            <label class="text-army font-semibold">First name</label>
            <input type="text" v-model="user.firstname" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
        </div>
        <div class="mt-4 lg:mt-0 lg:ml-3">
            <label class="text-army font-semibold">Last name</label>
            <input type="text" v-model="user.lastname" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
        </div>
        </div>
        <div class="mt-4 lg:mt-6">
            <label class="text-army font-semibold">Email Address</label>
            <input type="email" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
            <p v-if="error.email" class="text-red-500 text-sm mt-2">Please enter a valid email address</p>
        </div>
        <div class="mt-4 lg:mt-6">
            <label class="text-army font-semibold">Phone no</label>
            <input type="text" v-model="user.phone" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
            <p v-if="error.phone" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
        </div>
        <div class="mt-4 lg:mt-6">
            <label class="text-army font-semibold">Address</label>
            <input type="text" v-model="user.address" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
            <p v-if="error.address" class="text-red-500 text-sm mt-2">Please enter a valid contact address</p>
        </div>
        <div class="mt-4 lg:mt-6">
            <label class="text-army font-semibold">Select Category</label>
            <p class="mt-2">
                <input type="radio" id="test1" :value="1" name="radio-group" v-model="user.customer_type">
                <label for="test1" class="text-army">Individual</label>
            </p>
            <p class="mt-2">
                <input type="radio" id="test2" :value="2" name="radio-group" v-model="user.customer_type">
                <label for="test2" class="text-army">Corporate</label>
            </p>
        </div>
        <button class="mt-10 outline-none py-2 w-full text-center rounded cursor-pointer text-white" style="background-color: #00A859">Proceed</button>
        <router-link to="/login" class="inline-block mt-6 text-center rounded focus:outline-none bg-gray-100 text-charcoal py-2 w-full text-white">Log in if you already have an account</router-link>
    </form>
</template>

<script>
export default {
    props:['user'],
    data(){
        return {
            // user: {
            //     firstname: "",
            //     lastname: "",
            //     email: "",
            //     phone: "",
            //     category: ""
            // },
            error:{
                phone: false,
                email: false
            }
        }
    },
    computed:{
        phone(){
            return this.user.phone
        },
        email(){
            return this.user.email
        }
    },
    watch:{
        phone(){
            if(/^\d{11}$/.test(this.user.phone)){
                this.error.phone = false;
            }else{
                this.error.phone = true;
            }
        },
        email(){
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(re.test(this.user.email)){
                this.error.email = false;
            }else{
                this.error.email = true
            }
        }
    },
    methods:{
        showNext(){
            if(Object.values(this.error).includes(true)){
                return
            }else{
             this.$emit('setUser', this.user)  
            }
        }
    }
}
</script>

<style scoped>


/* Custom radio button styling */
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #2CB675;
  border-radius: 25%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #2CB675;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
/* End of custom radio button styling */

</style>