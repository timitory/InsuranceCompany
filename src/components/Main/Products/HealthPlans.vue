<template>
  <div class="py-16">
      <p class="text-current text-center font-bold text-xl">Our health insurance plans at glance</p>

        <div class="my-10 flex items-center mx-auto" style="width: 300px">
            <button @click="plans = 'individual'" type="button" class="focus:outline-none w-full py-3 border text-sm" :class="[plans == 'individual' ? 'bg-army text-white' : 'bg-specialgrey text-navy']">
                INDIVIDUAL
            </button>
            <button @click="plans = 'family'" type="button" class="focus:outline-none w-full py-3 border text-sm" :class="[plans == 'family' ? 'bg-army text-white' : 'bg-specialgrey text-navy']">
                FAMILY
            </button>
        </div>

      <div v-if="plans == 'individual'" class="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-12 md:w-1/2 md:mx-auto lg:w-full">
        <div class="shadow-lg py-6 px-16 rounded flex flex-col gap-4 items-center justify-start border">
          <p class="text-current">Paddy Basic Individual</p>
          <p class="text-army font-bold text-3xl text-center">₦1,500 Monthly</p>
          <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
          <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-army text-army hover:bg-army hover:text-white">
            <div class="flex items-center gap-4">
              <p class="text-sm font-semibold">Get Started</p>
              <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#219653"/>
              </svg>
            </div>
          </router-link>
          <ul class="benefits mt-4 w-full flex flex-col gap-2 items-start">
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Minor Surgeries</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Accident and emergency care </p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Ambulance services</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Diagnostics and imaging</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Primary dental care</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="shadow-lg py-6 px-8 rounded flex flex-col gap-4 items-center justify-center border">
          <p class="text-current">Paddy Mid Individual</p>
          <p class="text-fuschia font-bold text-3xl text-center">₦3,400 Monthly</p>
          <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
          <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-fuschia text-fuschia hover:bg-fuschia hover:text-white">
            <div class="flex items-center gap-4">
              <p class="text-sm font-semibold">Get Started</p>
              <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#DD168D"/>
              </svg>
            </div>
          </router-link>
          <ul class="mt-4 w-full flex flex-col gap-2 items-start">
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Benefitfnejnfjnjnjn 1</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Benefifnnjefnjwft 1</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Benefitfjewknjefnjefn 1</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Benefitfjewknjefnjefn 1</p>
              </div>
            </li>
          </ul>
        </div> -->
        <div class="shadow-lg py-6 px-8 rounded flex flex-col gap-4 items-center justify-center border">
          <p class="text-current">Paddy Max Individual</p>
          <p class="text-navy font-bold text-3xl text-center">₦2,500 Monthly</p>
          <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
          <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-navy text-navy hover:bg-navy hover:text-white">
            <div class="flex items-center gap-4">
              <p class="text-sm font-semibold">Get Started</p>
              <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#3E4095"/>
              </svg>
            </div>
          </router-link>
          <ul class="benefits mt-4 w-full flex flex-col gap-2 items-start">
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Diagnostic services</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm"> Physiotherapy Services</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Maternity care</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Surgical Services</p>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                </svg>
                <p class="text-current text-sm">Accidents and Emergencies</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="plans == 'family'" class="mt-10 relative">
        <ul class="horizontalmenu flex flex-col md:flex-row md:overflow-x-auto gap-4 md:gap-8" ref="horizontalmenu">
          <li class="plan shadow-lg py-6 px-8 rounded flex flex-col gap-4 items-center justify-center border">
            <p class="text-current">Paddy Basic Family</p>
            <p class="text-army font-bold text-3xl text-center">₦12,333 Monthly</p>
            <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
            <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-army text-army hover:bg-army hover:text-white">
              <div class="flex items-center gap-4">
                <p class="text-sm font-semibold">Get Started</p>
                <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#219653"/>
                </svg>
              </div>
            </router-link>
            <ul class="benefits mt-4 w-full flex flex-col gap-2 items-start">
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">General and specialist consultation</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Hospital ward care – Standard ward</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Physiotherapy Sessions (5 sessions)</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Fertility Services</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Surgical services up to N250,000</p>
                </div>
              </li>
            </ul>
          </li>
          <li class="plan shadow-lg py-6 px-8 rounded flex flex-col gap-4 items-center justify-center border">
            <p class="text-current">Paddy Mid Family</p>
            <p class="text-fuschia font-bold text-3xl text-center">₦15,750 Monthly</p>
            <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
            <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-fuschia text-fuschia hover:bg-fuschia hover:text-white">
              <div class="flex items-center gap-4">
                <p class="text-sm font-semibold">Get Started</p>
                <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#DD168D"/>
                </svg>
              </div>
            </router-link>
            <ul class="benefits mt-4 w-full flex flex-col gap-2 items-start">
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">General and specialist consultation</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Fertility Services</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Hospital ward care – Semi Private ward</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Physiotherapy Sessions (10 sessions)</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Surgical services up to N300,000</p>
                </div>
              </li>
            </ul>
          </li>
          <li class="plan shadow-lg py-6 px-8 rounded flex flex-col gap-4 items-center justify-center border">
            <p class="text-current">Paddy Max Family</p>
            <p class="text-navy font-bold text-3xl text-center">₦20,601 Monthly</p>
            <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
            <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-navy text-navy hover:bg-navy hover:text-white">
              <div class="flex items-center gap-4">
                <p class="text-sm font-semibold">Get Started</p>
                <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#3E4095"/>
                </svg>
              </div>
            </router-link>
            <ul class="benefits mt-4 w-full flex flex-col gap-2 items-start">
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">General and specialist consultation</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Fertility Services</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Hospital ward care – Private ward</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Physiotherapy Sessions (15 sessions)</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Surgical services up to N500,000</p>
                </div>
              </li>
            </ul>
          </li>
          <li class="plan shadow-lg py-6 px-8 rounded flex flex-col gap-4 items-center justify-center border">
            <p class="text-current">Paddy SuperMax Family</p>
            <p class="text-navy font-bold text-3xl text-center">₦56,276 Monthly</p>
            <p class="text-current text-sm">Paddy Cover Health Insurance.</p>
            <router-link to="/signup" class="py-2 px-10 rounded border border-solid border-navy text-navy hover:bg-navy hover:text-white">
              <div class="flex items-center gap-4">
                <p class="text-sm font-semibold">Get Started</p>
                <svg class="arrow1" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z" fill="#3E4095"/>
                </svg>
              </div>
            </router-link>
            <ul class="benefits mt-4 w-full flex flex-col gap-2 items-start">
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">General and specialist consultation</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Annual Health Screening</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Hospital ward care – Private ward</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Physiotherapy Sessions (Unlimited)</p>
                </div>
              </li>
              <li>
                <div class="flex items-start gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z" fill="#2E3A59"></path>
                  </svg>
                  <p class="text-current text-sm">Surgical services up to N700,000</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <button @click="scrollRight" class="hidden md:flex absolute shadow-lg bg-white rounded-full items-center justify-center" style="width: 70px; height: 70px">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#2E3A59"></path>
          </svg>
        </button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            plans: 'individual'
        }
    },
    methods: {
      scrollRight(){
        this.$refs.horizontalmenu.scrollLeft += 250
      }
    }

}
</script>

<style scoped>
.item{
    min-width: 200px
}
.horizontalmenu::-webkit-scrollbar{
    height: 0
}
.horizontalmenu{
    scroll-behavior: smooth;
}
ul.benefits{
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (min-width: 768px){
  li.plan{
    min-width: 350px
  }
  button{
    top: 50%; 
    transform: translateY(-50%);
    right: -40px
  }
}
</style>