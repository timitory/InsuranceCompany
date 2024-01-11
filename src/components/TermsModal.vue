<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
            <div class="pt-6 relative">
                <span class="text-lg font-bold absolute top-2 right-0 text-red-500 cursor-pointer" @click="close" style="right: -10px">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#FF0000"></path>
                    </svg>
                </span>
                <h1 class="text-2xl font-bold">PaddyCover Terms and conditions</h1>
                <!-- <p class="mt-2">Blah blah blah blah blah blah:</p> -->
                <ul class="list-disc px-4 list">
                    <li class="mt-1">The Customer shall repay the principal and interest in Twelve (12) equal monthly instalments.</li>
                    <li class="mt-1">The Customer hereby authorizes PaddyCover to debit [his/her] account for the monthly loan obligations.</li>
                    <li class="mt-1">Reserved interest rate chargeable on the Customer’s account shall be Paddy Cover’s Lender’s prime lending rate from time to time.</li>
                    <li class="mt-1">Interest will be charged on all amounts owed by Customer.</li>
                    <li class="mt-1">In the event of default by the Customer in making any repayment on due date, the insurance cover will be terminated immediately.</li>
                    <li class="mt-1">PaddyCover shall advise the Customer of any change in prime lending rate, charges, fees or any other terms and conditions of the loan by a notice at its branches in Nigeria or by notes in customer statements.</li>
                    <li class="mt-1">The Customer authorizes PaddyCover to instruct the Assurer to cancel the policy where the loan remains unpaid for a period of 7 days after due date of repayment.</li>
                    <li class="mt-1">The Customer authorizes PaddyCover to obtain and retain on the Credit Risk Management System of the Central Bank of Nigeria, all information relating to the Customer’s Bank Verification Numbers and the status of indebtedness.</li>
                    <li class="mt-1">The Customer hereby irrevocably undertakes to fully indemnify PaddyCover against all cost and expenses (including legal fees, collection commission et cetera), arising in any way in connection with the Customer’s accounts; in enforcing the terms and conditions herein; or from the recovery of any amounts due to PaddyCover or incurred by PaddyCover in any legal proceedings of whatever nature.</li>
                    <li class="mt-1">The terms and conditions contained binds the Customer and is not assignable.</li>
                    <li class="mt-1">The Customer covenants and warrants that, in making any repayment on due date in the event that the loan repayment period or day falls on a weekend or public holiday, the effective loan repayment day shall be the preceding business day.</li>
                </ul>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins: [ clickaway ],
  data(){
    return {
      
    }
  },
  methods:{
    close(){
      this.$emit('close')
    },
    
  }
  
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 100px;
  max-width: 420px;
  max-height: 80vh;
  overflow-y: auto;
}
input{
  background-color: #e2f5ec;
}
.loader::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.loader::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.loader::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.loader::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@media only screen and (min-width: 768px){
    .loader{
        max-width: 600px;
        top: 50px
    }
}
</style>