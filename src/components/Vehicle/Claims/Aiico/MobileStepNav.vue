<template>
  <div class="mb-6">
      <div v-if="currentStep == 1" class="font-bold text-lg flex items-center gap-2">
          <p>Section 1: Vehicle</p>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
            </svg>
        </span>
      </div>
      <div v-if="currentStep == 2" class="font-bold text-lg flex items-center gap-2">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28809 12L14.2981 18.01L15.7121 16.596L11.1121 11.996L15.7121 7.39601L14.2981 5.99001L8.28809 12Z" fill="#000000"></path>
                </svg>
            </span>
            <p>Section 2: Driver</p>
      </div>
      <div v-if="currentStep == 3" class="font-bold text-lg flex items-center gap-2">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28809 12L14.2981 18.01L15.7121 16.596L11.1121 11.996L15.7121 7.39601L14.2981 5.99001L8.28809 12Z" fill="#000000"></path>
                </svg>
            </span>
            <p>Section 3: Circumstance of loss</p>
      </div>
      <div v-if="currentStep == 4" class="font-bold text-lg flex items-start gap-2">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28809 12L14.2981 18.01L15.7121 16.596L11.1121 11.996L15.7121 7.39601L14.2981 5.99001L8.28809 12Z" fill="#000000"></path>
                </svg>
            </span>
            <p>Section 4: Damage to Insured vehicle</p>
      </div>
      <div v-if="currentStep == 5" class="font-bold text-lg flex items-start gap-2">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.28809 12L14.2981 18.01L15.7121 16.596L11.1121 11.996L15.7121 7.39601L14.2981 5.99001L8.28809 12Z" fill="#000000"></path>
                </svg>
            </span>
            <p>Section 5: Full Details of Third Parties Involved In Accident</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['currentStep']
}
</script>

<style>

</style>