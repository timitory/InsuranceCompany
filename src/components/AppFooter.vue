<template>
  <!-- <div class="mt-40 relative"> -->
    <div class="absolute bottom-0 w-full footer">
      <div class="custom-shape-divider-bottom-1627981608">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1627981609">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-shape-divider-bottom-1627981608 {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
.custom-shape-divider-bottom-1627981609 {
  position: relative;
  top: -30px;
  margin-bottom: -30px;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
  .custom-shape-divider-bottom-1627981608 svg {
    position: relative;
    display: block;
    width: calc(144% + 1.3px);
    height: 60px;
  }
  .custom-shape-divider-bottom-1627981609 svg {
    position: relative;
    display: block;
    width: calc(144% + 1.3px);
    height: 60px;
  }
  
  .custom-shape-divider-bottom-1627981608 .shape-fill {
    fill : #00a859;
    opacity: 0.05
  }
  .custom-shape-divider-bottom-1627981609 .shape-fill {
    fill: #1cb16b;
    opacity: 0.05
  }
@media only screen and (min-width: 768px){
  div.footer{
    display: none;
  }
}
@media only screen and (min-width: 1024px){
  div.footer{
    display: block;
  }
  .custom-shape-divider-bottom-1627981609 {
    top: -40px;
    margin-bottom: -40px;
  }
  .custom-shape-divider-bottom-1627981608 svg {
    height: 60px;
  }
  .custom-shape-divider-bottom-1627981609 svg {
    height: 65px;
  }
}


</style>