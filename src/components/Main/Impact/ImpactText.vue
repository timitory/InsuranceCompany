<template>
  <div class="px-4 py-10 lg:pt-20 lg:px-0">
      <h1 class="text-navy text-4xl font-semibold lg:font-bold">Our Impact in the African Insurance Space.</h1>
      <p class="text-current font-medium mt-4 text-sm lg:text-lg lg:w-4/5">We deliver impact to our customers and partners via our embedded insurance products.</p>
      <div class="flex gap-4 mt-6">
          <router-link to="/signup" class="bg-army rounded-md px-4 py-3">
            <div class="flex items-center gap-2">
                <span class="text-white text-sm font-semibold">Get Cover</span>
                <div class="mt-1 flex items-center gap-2">
                    <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="white"/>
                    </svg>
                </div>
            </div>
          </router-link>
          <a href="tel:+2348094202459" class="rounded-md px-4 py-3 flex items-center justify-center" style="background-color: rgba(62, 64, 149, 0.1)">
              <span class="text-navy text-sm font-semibold">Speak to Us Now</span>
          </a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.arrow1{
    animation-name: arrow;
    animation-duration: 1s;
    animation-delay: 0;
    animation-iteration-count: infinite;
}
@keyframes arrow{
    0%{
        transform: translateX(-2px);
        opacity: 0
    }
    80%{
        transform: translateX(2px);
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateX(0px);
    }
}
@media only screen and (min-width: 1024px){
    h1{
        font-size: 40px
    }
}
</style>