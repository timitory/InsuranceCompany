<template>
  <section class="mt-10 px-4">
      <div class="rounded-2xl py-6 px-4 bg-deeparmy relative greenphonebox  lg:py-24 lg:pl-20">
          <div class="lg:w-2/5">  
                <p class="text-grey text-sm mb-6">Multiple option insurance premium</p>
                <h3 class="text-white text-2xl font-bold">Get Covered, <span class="text-army">Pay Monthly</span></h3>
                <p class="font-medium lg:text-lg text-sm mt-6 text-white">We help breakdown your Insurance cover into smaller payment that is convenient for you</p>
                <div class="mt-10">
                    <router-link to="/signup" class="bg-army rounded-md px-6 py-3">
                        <span class="text-white text-sm font-semibold">Create an Account</span>
                    </router-link>
                </div>
          </div>
          <div class="flex justify-center absolute bottom-0 w-full left-0 lg:right-0 imgbox">
              <img class="block lg:hidden" src="@/assets/images/landingpage/paddycoverapp.png" alt="PaddyCOver Mobile app screen">
              <img class="hidden lg:block" src="@/assets/images/landingpage/bigpaddycoverapp.png" alt="PaddyCOver Mobile app screen">
          </div>
          <svg class="hidden lg:block absolute waves" width="534" height="231" viewBox="0 0 534 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <path d="M-34.9067 202.038C-25.0464 156.908 31.3092 65.2829 177.849 59.8218C361.024 52.9954 368.988 202.038 462.282 202.038C536.917 202.038 551.783 161.08 549.887 140.601" stroke="#EFEFEF" stroke-width="2.27546"/>
                <path d="M-42.7662 141.141C-25.3591 98.3519 45.7867 17.6709 191.114 37.2627C372.772 61.7523 355.22 209.972 447.15 225.871C520.693 238.59 542.322 200.765 543.943 180.262" stroke="#EFEFEF" stroke-width="2.27546"/>
                <path d="M-20.2471 266.767C-19.5536 220.578 17.4659 119.579 159.996 85.1003C338.16 42.0018 375.589 186.488 467.021 167.945C540.167 153.11 546.596 110.014 540.667 90.3202" stroke="#EFEFEF" stroke-width="2.27546"/>
                </g>
          </svg>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .greenphonebox{
        min-height: 610px
    }
    @media only screen and (min-width: 768px){
        .greenphonebox{
            min-height: 500px
        }
    }
    @media only screen and (min-width: 1024px){
        h3{
            font-size: 40px;
            line-height: 39px
        }
        .imgbox{
            left: auto;
            width: 45%;
        }
        .greenphonebox{
            min-height: 0
        }
        img{
            z-index: 1
        }
        .waves{
            right: -20px;
            top: 50%;
            opacity: 0.4;
            transform: translateY(-50%);
        }
    }
</style>