<template>
  <div class="lg:flex mt-6 lg:mt-4 justify-between plans">
    <div class="relative border border-solid pb-4 plan">
        <div class="py-3 px-6 mt-4">
            <div class="flex justify-between items-center">
                <p class="mr-3 skeleton skeleton-text"></p>
                <p class=" ml-3 text-green-500 font-light skeleton skeleton-text"><span class="font-extrabold text-lg"></span></p>
            </div>
            <hr class="mt-4">
            <ul class="mt-4">
                <li class="flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
                <li class="mt-4 flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
                <li class="mt-4 flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
                <li class="mt-4 flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
            </ul>
        </div>
    </div>
    <div class="relative border border-solid pb-4 plan">
        <div class="py-3 px-6 mt-4">
            <div class="flex justify-between items-center">
                <p class="mr-3 skeleton skeleton-text"></p>
                <p class="lg:mt-0 ml-3 text-green-500 font-light skeleton skeleton-text"><span class="font-extrabold text-lg"></span></p>
            </div>
            <hr class="mt-4">
            <ul class="mt-4">
                <li class="flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
                <li class="mt-4 flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
                <li class="mt-4 flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
                <li class="mt-4 flex items-center">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="skeleton skeleton-text"></p>  
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.plan{
  margin-bottom: 20px;
  height: 269px
}
.skeleton {
  opacity: .7;
  animation: skeleton-loading 1s linear infinite alternate;
}
.skeleton-text {
  width: 100%;
  height: .5rem;
  margin-bottom: .25rem;
  border-radius: .125rem;
}
/* .skeleton-text:last-child {
  margin-bottom: 0;
  width: 80%;
} */
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

@media only screen and (min-width: 1024px){
  .plans{
    flex-wrap: wrap;
  }
  .plan{
    flex: 0 1 46%;
    margin-bottom: 20px
  }
}

</style>