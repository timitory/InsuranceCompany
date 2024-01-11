<template>
  <div class="body">
      <NavBar />
      <div class="relative ">
        <div class="greenbox py-20">
          <h1 class="text-white text-center font-bold text-2xl">Terms and Conditions</h1>
          <p class="mt-8 mx-auto updated text-center text-white font-semibold py-2">Updated March 1, 2022</p>
        </div>
          <div class="relative whitebox bg-white py-12 px-3 lg:px-12 mx-auto">
            <p class="mt-6">
              <span class="font-bold">1.</span> The Customer shall repay the principal and interest in Twelve (12) equal monthly instalments.
            </p>
            <p class="mt-6">
              <span class="font-bold">2.</span> The Customer hereby authorizes PaddyCover to debit [his/her] account for the monthly loan obligations
            </p>
            <p class="mt-6">
              <span class="font-bold">3.</span> Reserved interest rate chargeable on the Customer’s account shall be Paddy Cover’s Lender’s prime lending rate from time to time.
            </p>
            <p class="mt-6">
              <span class="font-bold">4.</span> Interest will be charged on all amounts owed by Customer.
            </p>
            <p class="mt-6">
              <span class="font-bold">5.</span> In the event of default by the Customer in making any repayment on due date, the insurance cover will be terminated immediately.
            </p>
            <p class="mt-6">
              <span class="font-bold">6.</span> PaddyCover shall advise the Customer of any change in prime lending rate, charges, fees or any other terms and conditions of the loan by a notice at its branches in Nigeria or by notes in customer statements.
            </p>
            <p class="mt-6">
              <span class="font-bold">7.</span> The Customer authorizes PaddyCover to instruct the Assurer to cancel the policy where the loan remains unpaid for a period of 7 days after due date of repayment.
            </p>
            <p class="mt-6">
              <span class="font-bold">8.</span> The Customer authorizes PaddyCover to obtain and retain on the Credit Risk Management System of the Central Bank of Nigeria, all information relating to the Customer’s Bank Verification Numbers and the status of indebtedness.
            </p>
            <p class="mt-6">
              <span class="font-bold">9.</span> The Customer hereby irrevocably undertakes to fully indemnify PaddyCover against all cost and expenses (including legal fees, collection commission et cetera), arising in any way in connection with the Customer’s accounts; in enforcing the terms and conditions herein; or from the recovery of any amounts due to PaddyCover or incurred by PaddyCover in any legal proceedings of whatever nature.
            </p>
            <p class="mt-6">
              <span class="font-bold">10.</span> The terms and conditions contained binds the Customer and is not assignable.
            </p>
            <p class="mt-6">
              <span class="font-bold">11.</span> The Customer covenants and warrants that, in making any repayment on due date in the event that the loan repayment period or day falls on a weekend or public holiday, the effective loan repayment day shall be the preceding business day
            </p>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Nav/HomeNavBar"
import Footer from "@/components/Footer"
export default {
    components: {NavBar, Footer,},
    created(){
    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  }
}
</script>

<style scoped>
.body{
  overflow-x: hidden;
}
.greenbox{
  background: transparent linear-gradient(180deg, #00A859 0%, #004154 100%) 0% 0% no-repeat padding-box;
  height: 300px;
  /* border:1px solid red; */
  
}
.updated{
background: #005D31 0% 0% no-repeat padding-box;border-radius: 37px; max-width: 200px
}
.whitebox{
  box-shadow: 0px 3px 50px #00000029;
  border-radius: 15px;
  width: 90%;
  top: -40px;
}
@media only screen and (min-width: 768px){
  .whitebox{
    max-width: 670px
  }
}
@media screen and (min-width: 1024px){
  .whitebox{
    max-width: 900px
  }
  
}
</style>