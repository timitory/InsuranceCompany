<template>
  <div>
        <div v-if="currentStep == 1" class="font-bold text-lg flex items-center gap-2">
            <p>Section 1: Vehicle</p>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                </svg>
            </span>
        </div>
        <div v-if="currentStep == 2" class="flex items-center gap-4">
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>Section 1: Vehicle</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2">
                <p>Section 2: Driver</p>
            </div>
        </div>
        <div v-if="currentStep == 3" class="flex items-center gap-4">
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>Section 1: Vehicle</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>Section 2: Driver</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2">
                <p>Section 3: Circumstance of loss</p>
            </div>
        </div>
        <div v-if="currentStep == 4" class="flex items-center gap-4">
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S1: Vehicle</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S2: Driver</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S3: Circumstance..</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2">
                <p>S4: Damage to Insured vehicle</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
        </div>
        <div v-if="currentStep == 5" class="flex items-center gap-4">
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S1: Vehi..</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S2: Dri..</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S3: Circum...</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2 opacity-30">
                <p>S4: Damage..</p>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
            <div class="font-bold text-lg flex items-center gap-2">
                <p>Section 5: Full Details of Third Parties Involved In Accident</p>
            </div>
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