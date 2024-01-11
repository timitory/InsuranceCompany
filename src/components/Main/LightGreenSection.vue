<template>
  <section class="hidden mt-24 lg:flex lg:py-24 lg:pl-32 relative overflow-x-hidden" style="background: rgba(33, 150, 83, 0.1)">
       <div class="lg:w-2/5">  
            <p class="text-darker text-sm mb-6">Multiple option insurance premium</p>
            <h3 class="text-darker text-2xl font-extrabold">Get a quote in a blink of an eye</h3>
            <p class="font-medium text-lg text-sm mt-6 text-darker lg:leading-2 w-1/2">To give you the best quality of insurance. Our partners are renowned insurance providers in the country with optimal services to their credits</p>
            <div class="mt-10">
                <router-link to="/signup" class="inline-block bg-navy rounded-md px-6 py-3">
                    <div class="flex items-center gap-2">
                        <span class="text-white text-sm font-semibold">Get Cover</span>
                        <div class="mt-1 flex items-center gap-2">
                            <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="absolute imgbox">
            <img class="block" src="@/assets/images/landingpage/womanonsofa.png" alt="Woman on sofa">
        </div>
  </section>
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
h3{
    font-size: 40px;
    line-height: 39px
}
.imgbox{
    right: 0;
    bottom: 0;
}
@media only screen and (min-width: 1024px){
    section{
        padding-left: 10%;
        padding-right: 10%;
    }
}

</style>