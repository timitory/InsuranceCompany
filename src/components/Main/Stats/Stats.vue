<template>
  <section class="hidden lg:flex gap-8 lg:px-20 pt-10">
      <div>
          <span class="meter block"></span>
            <p class="text-dark font-semibold mt-4">Paddy Cover key figures</p>
      </div>
      <ul class="flex items-start gap-8">
          <li>
              <div>
                  <!-- <p class="text-darker font-medium text-2xl">50,000</p> -->
                  <!-- <Customers />
                  <p class="text-darker mt-2 font-medium text-sm">Customers</p> -->
              </div>
          </li>
          <li>
              <div>
                  <!-- <p class="text-darker font-medium text-2xl">1,400</p> -->
                  <Policies />
                  <p class="text-darker mt-2 font-medium text-sm">Policies Provided</p>
              </div>
          </li>
          <li>
              <div>
                  <!-- <p class="text-darker font-medium text-2xl">20.03 seconds</p> -->
                  <Claim />
                  <p class="text-darker mt-2 font-medium text-sm">Claims fulfilment</p>
              </div>
          </li>
          <!-- <li>
              <div>
                  <Transactions />
                  <p class="text-darker mt-2 font-medium text-sm">Transactions Per Day</p>
              </div>
          </li> -->
      </ul>

  </section>
</template>

<script>
// import Customers from "./Customers.vue"
import Policies from "./Policies.vue"
import Claim from "./Claim.vue"
// import Transactions from "./Transactions.vue"
export default {
components: {
    // Customers, 
    Policies, Claim, }
}
</script>

<style scoped>
.meter{
    width: 62px;
    height: 6px;
    background: #219653;
    border-radius: 4px;
}
@media only screen and (min-width: 1024px){
    section{
        padding-left: 10%;
        padding-right: 10%;
    }
}
</style>