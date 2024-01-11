import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import store from "../store/index"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/app',
    name: 'Dashboard',
    redirect: '/app/dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next)=>{
      const token = localStorage.getItem('user-token')
      if (to.name !== 'Login'  && !token) next({ name: 'Login' })
      else next()
    },
    children: [
      {
        path: '/app/dashboard',
        redirect: '/app/dashboard/menu',
        component: () => import ('@/views/Menu/Menu.vue'),
        beforeEnter: (to, from, next)=>{
          const token = localStorage.getItem('user-token')
          if (to.name !== 'Login'  && !token) next({ name: 'Login' })
          else next()
        },
        children: [
          {
            path: '/app/dashboard/menu',
            name: 'ShowMenu',
            component:() => import ('@/views/Menu/ShowMenu')
          },
          // =====CUSTOMER COVER VIEWS=====
          // =====CUSTOMER COVER VIEWS=====
          // =====CUSTOMER COVER VIEWS=====
          {
            path: '/customercover',
            redirect: '/customercover',
            component: () => import ('../views/Customercover/Customercover.vue'),
            children: [
              {
                path: '/customercover/buycover',
                name: 'Customercover',
                component: () => import('../views/Customercover/Buycover.vue')
              }
            ]
          },

          // =====PET VIEWS=====
          //=====PET VIEWS=====
          // =====PET VIEWS=====
          {
            path: '/Pet',
            redirect: '/pet',
            component: () => import ('../views/Pet/Pet.vue'),
            children: [
              {
                path: '/pet/buypet',
                name: 'Petcover',
                component: () => import('../views/Pet/Buypet.vue')
              },
              {
                path: '/pet/managepet',
                name: 'Petcover',
                component: () => import('../views/Pet/ManagePet.vue')
              },
              {
                path: '/pet/completeform',
                name: 'Complete Form',
                component: () => import('../views/Pet/CompleteForm.vue')
              }
            ],
          },
          {
            path: '/app/dashboard/pet/viewrepayment',
            component:() => import ('@/views/Pet/ViewRepayment.vue')
          },

          // =====GADGET VIEWS=====
          //=====GADGET VIEWS=====
          // =====GADGET VIEWS=====
          {
            path: '/Gadget',
            redirect: '/gadget',
            component: () => import ('../views/Gadget/Gadget.vue'),
            children: [
              {
                path: '/gadget/buygadget',
                name: 'Gadgetcover',
                component: () => import('../views/Gadget/Buygadget.vue')
              },
              {
                path: '/gadget/managegadget',
                name: 'Gadgetcover',
                component: () => import('../views/Gadget/ManageGadget.vue')
              },
              {
                path: '/gadget/completeform',
                name: 'Complete Form',
                component: () => import('../views/Gadget/CompleteForm.vue')
              }
            ]
          },
          {
            path: '/app/dashboard/gadget/viewrepayment',
            component:() => import ('@/components/Gadgetnew/Repayment.vue')
          },

          // =====HEALTH POLICY VIEWS=====
          // =====HEALTH POLICY VIEWS=====
          // =====HEALTH POLICY VIEWS=====
          {
            path: '/app/dashboard/buyhealth',
            redirect: '/app/dashboard/buyhealth/show',
            component: () => import ('../views/Health/BuyHealth.vue'),
            children: [
              {
                path: '/app/dashboard/buyhealth/show',
                name: 'ShowHealth',
                component: () => import('../views/Health/ShowHealthPolicy.vue')
              },
              {
                path: '/app/dashboard/buyhealth/1',
                name: 'BuyHealth1',
                component: () => import('../views/Health/FormStep1.vue')
              },
              {
                path: '/app/dashboard/buyhealth/choose',
                name: 'BuyHealthChoose',
                component: () => import('../views/Health/ChoosePlan.vue')
              },
              {
                path: '/app/dashboard/buyhealth/2',
                name: 'BuyHealth2',
                component: () => import('../views/Health/FormStep2.vue')
              },
              {
                path: '/app/dashboard/buyhealth/3',
                name: 'BuyHealth3',
                component: () => import('../views/Health/FormStep3.vue')
              },
              {
                path: '/app/dashboard/buyhealth/4',
                name: 'SelectHealthCard',
                component: () => import('../views/Health/FormStep4.vue')
              },
              {
                path: '/app/dashboard/buyhealth/multiple/upload',
                component: () => import('../views/Health/MultiplePurchase/Upload.vue')
              },
              {
                path: '/app/dashboard/buyhealth/multiple/view',
                name: 'bulkPurchaseView',
                component: () => import('../views/Health/MultiplePurchase/View.vue'),
                props : (route) => ({
                  reference : route.query.reference
                })

              },
            ]
          },
          {
            path: '/app/dashboard/health/viewrepayment',
            component:() => import ('@/views/Health/ViewRepayment.vue')
          },
          {
            path: '/app/dashboard/managehealth',
            name: 'ManageHealth',
            component: () => import('../views/Health/ManageHealth.vue')
          },
          // =====HEALTH POLICY VIEWS=====
          // =====HEALTH POLICY VIEWS=====
          // =====HEALTH POLICY VIEWS=====


          // =====VEHICLE POLICY VIEWS=====
          // =====VEHICLE POLICY VIEWS=====
          // =====VEHICLE POLICY VIEWS=====
          {
            path: '/app/dashboard/buyvehicle',
            redirect: '/app/dashboard/buyvehicle/show',
            component: () => import ('../views/Vehicle/BuyVehicle.vue'),
            children: [
              {
                path: '/app/dashboard/buyvehicle/show',
                name: 'ShowVehicle',
                component: () => import('../views/Vehicle/ShowVehiclePolicy.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/complete/:id',
                name: 'CompleteForm',
                component: () => import('../views/Vehicle/CompleteForm.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/1',
                name: 'BuyVehicle1',
                component: () => import('../views/Vehicle/FormStep1.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/choose',
                name: 'BuyVehicleChoose',
                component: () => import('../views/Vehicle/ChoosePlan.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/2',
                name: 'BuyVehicle2',
                component: () => import('../views/Vehicle/FormStep2.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/getquote',
                name: 'BuyVehicle2',
                component: () => import('../views/Vehicle/FormStep.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/3',
                name: 'BuyVehicle3',
                component: () => import('../views/Vehicle/FormStep3.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/update',
                name: 'BuyVehicle3',
                component: () => import('../views/Vehicle/FormStepUpdate.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/4',
                name: 'BuyVehicle4',
                component: () => import('../views/Vehicle/FormStep4.vue')
              },
              {
                path: '/app/dashboard/buyvehicle/5',
                name: 'BuyVehicle5',
                component: () => import('../views/Vehicle/FormStep5.vue')
              },
            ]
          },
          {
            path: '/app/dashboard/vehicle/viewrepayment',
            component:() => import ('@/views/Vehicle/ViewRepayment.vue')
          },
          {
            path: '/app/dashboard/vehicle/viewpolicy',
            component:() => import ('@/views/Vehicle/ViewPolicy.vue')
          },
          {
            path: '/app/dashboard/managevehicle',
            name: 'ManageVehicle',
            component: () => import('../views/Vehicle/ManageVehicle.vue')
          },
          {
            path: '/app/dashboard/managetravel',
            name: 'ManageTravel',
            component: () => import('../views/Travel/ManageTravel.vue')
          },
          {
            path: '/app/dashboard/claim/vehicle',
            component: () => import('../views/Vehicle/Claim/VehicleClaim.vue'),
          },
          {
            path: '/app/dashboard/claim/travel',
            component: () => import('../views/Travel/Claim/TravelClaim.vue'),
          },
          // =====VEHICLE POLICY VIEWS=====
          // =====VEHICLE POLICY VIEWS=====
          // =====VEHICLE POLICY VIEWS=====


          // =====HOMECONTENT POLICY VIEWS=====
          // =====HOMECONTENT POLICY VIEWS=====
          // =====HOMECONTENT POLICY VIEWS=====
          {
            path: '/app/dashboard/buyhome',
            redirect: '/app/dashboard/buyhome/show',
            component: () => import ('../views/Home/BuyHome.vue'),
            children: [
              {
                path: '/app/dashboard/buyhome/show',
                name: 'ShowHome',
                component: () => import('../views/Home/ShowHomePolicy.vue')
              },
              {
                path: '/app/dashboard/buyhome/1',
                name: 'BuyHome1',
                component: () => import('../views/Home/FormStep1.vue')
              },
              {
                path: '/app/dashboard/buyhome/2',
                name: 'BuyHome2',
                component: () => import('../views/Home/FormStep2.vue')
              },
              {
                path: '/app/dashboard/buyhome/3',
                name: 'BuyHome3',
                component: () => import('../views/Home/FormStep3.vue')
              },
              {
                path: '/app/dashboard/buyhome/4',
                name: 'BuyHome4',
                component: () => import('../views/Home/FormStep4.vue')
              },
              {
                path: '/app/dashboard/buyhome/5',
                name: 'BuyHome5',
                component: () => import('../views/Home/FormStep5.vue')
              },
            ]
          },
          {
            path: '/app/dashboard/home/viewrepayment',
            component:() => import ('@/views/Home/ViewRepayment.vue')
          },
          {
            path: '/app/dashboard/managehome',
            name: 'ManageHome',
            component: () => import('../views/Home/ManageHome.vue')
          },
          {
            path: '/app/dashboard/homeclaim/:id',
            component: () => import('../views/Home/HomeClaim.vue'),
            props: true
          },
          // =====HOMECONTENT POLICY VIEWS=====
          // =====HOMECONTENT POLICY VIEWS=====
          // =====HOMECONTENT POLICY VIEWS=====
          
          // =====TRAVEL POLICY VIEWS=====
          // =====TRAVEL POLICY VIEWS=====
          // =====TRAVEL POLICY VIEWS=====
          {
            path: '/app/dashboard/buytravel',
            redirect: '/app/dashboard/buytravel/show',
            component: () => import ('../views/Travel/BuyTravel.vue'),
            children: [
              {
                path: '/app/dashboard/buytravel/show',
                name: 'ShowTravel',
                component: () => import('../views/Travel/ShowTravelPolicy.vue')
              },
              {
                path: '/app/dashboard/buytravel/1',
                name: 'BuyTravel1',
                component: () => import('../views/Travel/FormStep1.vue')
              },
              {
                path: '/app/dashboard/buytravel/2',
                name: 'BuyTravel2',
                component: () => import('../views/Travel/FormStep2.vue')
              },
              {
                path: '/app/dashboard/buytravel/choose',
                name: 'BuyTravelChoose',
                component: () => import('../views/Travel/ChoosePlan.vue')
              },
              {
                path: '/app/dashboard/buytravel/3',
                name: 'BuyTravel3',
                component: () => import('../views/Travel/FormStep3.vue')
              },
              {
                path: '/app/dashboard/buytravel/allianz',
                name: 'ManageTravel',
                component: () => import('../views/Travel/AllianzForm.vue')
              },
              {
                path: '/app/dashboard/buytravel/4',
                name: 'BuyTravel4',
                component: () => import('../views/Travel/FormStep4.vue')
              },
              // {
              //   path: '/app/dashboard/buyhome/5',
              //   name: 'BuyHome5',
              //   component: () => import('../views/Home/FormStep5.vue')
              // },
            ]
          },
            {
              path: '/app/dashboard/managetravel',
              name: 'ManageTravel',
              component: () => import('../views/Travel/ManageTravel.vue')
            },
          
        
        

          // =====GADGET POLICY VIEWS=====
          // =====GADGET POLICY VIEWS=====
          // =====GADGET POLICY VIEWS=====
          {
            path: '/app/dashboard/buydevice',
            redirect: '/app/dashboard/buydevice/show',
            component: () => import ('../views/Device/BuyDevice.vue'),
            children: [
              {
                path: '/app/dashboard/buydevice/show',
                name: 'ShowDevice',
                component: () => import('../views/Device/ShowDevicePolicy.vue')
              },
              {
                path: '/app/dashboard/buydevice/1',
                name: 'BuyDevice1',
                component: () => import('../views/Device/FormStep1.vue')
              },
              {
                path: '/app/dashboard/buydevice/2',
                name: 'BuyDevice2',
                component: () => import('../views/Device/FormStep2.vue')
              },
              {
                path: '/app/dashboard/buydevice/3',
                name: 'BuyDevice3',
                component: () => import('../views/Device/FormStep3.vue')
              },
              {
                path: '/app/dashboard/buydevice/4',
                name: 'BuyDevice4',
                component: () => import('../views/Device/FormStep4.vue')
              },
            ]
          },
          {
            path: '/app/dashboard/device/viewrepayment',
            component:() => import ('@/views/Device/ViewRepayment.vue')
          },
          {
            path: '/app/dashboard/managedevice',
            name: 'ManageDevice',
            component: () => import('../views/Device/ManageDevice.vue')
          },
          {
            path: '/app/dashboard/deviceclaim/:id',
            component: () => import('../views/Device/DeviceClaim.vue'),
            props: true
          },
          // =====GADGET POLICY VIEWS=====
          // =====GADGET POLICY VIEWS=====
          // =====GADGET POLICY VIEWS=====


          {
            path: '/app/dashboard/transactionhistory',
            name: 'Transaction',
            component:() => import ('@/views/TransactionHistory.vue')
          },
          {
            path: '/app/dashboard/claimhistory',
            name: 'ClaimHistory',
            component:() => import ('@/views/ClaimHistory.vue')
          },
          {
            path: '/app/dashboard/viewdependants',
            component:() => import ('@/views/ViewDependants.vue')
          },
        ]
      },
      {
        path:'/app/dashboard/settings',
        name: 'AccountSettings',
        component: () => import('../views/AccountSettings')
      },
      {
        path:'/app/dashboard/adduser',
        name: 'AddUser',
        component: () => import('../views/AddUser')
      }
    ]
  },
  // {
  //   path: '/'
  // },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/Signup/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/changepassword',
    name: 'ChangePassword',
    component: () => import('../views/newChangePassword.vue')
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/verifyotp',
    name: 'Verify',
    component: () => import('../views/VerifyOTP.vue')
  },
  {
    path: '/resendotp',
    name: 'Resend',
    component: () => import('../views/ResendOTP.vue')
  },
  {
    path: '/products',
    redirect: '/products/homecontent',
    component: () => import('../views/Products/Products.vue'),
    children: [
      {
        path: "/products/health",
        component : () => import('../views/Products/Health.vue')
      },
      {
        path: "/products/vehicle",
        component : () => import('../views/Products/Vehicle.vue')
      },
      {
        path: "/products/homecontent",
        component : () => import('../views/Products/HomeContent.vue')
      },
      {
        path: "/products/gadget",
        component : () => import('../views/Products/Gadget.vue')
      },
    ]
  },
  {
    path: '/faq',
    name : 'FAQs',
    component : () => import('../views/Faq.vue')
  },
  {
    path: '/impact',
    name : 'Impact',
    component : () => import('../views/Impact.vue')
  },
  {
    path: '/about',
    name : 'About',
    component : () => import('../views/About.vue')
  },
  {
    path: '/careers',
    name : 'Careers',
    component : () => import('../views/Careers.vue')
  },
  {
    path: '/terms',
    name : 'Terms',
    component : () => import('../views/Terms.vue')
  },
  {
    path: '/privacy',
    name : 'Privacy',
    component : () => import('../views/Privacy.vue')
  },
  {
    path: '/pay/:id',
    name: 'Pay',
    component: HomePage
  },
  {
    path: '*',
    name: 'catchAll',
    component: HomePage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})
router.beforeEach((to, from, next) => {
  store.commit('setHomeCollapse', false)
  if (!to.hash) {
    window.scrollTo(0, 0);
  }
  next();
})
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('user-token')
//   if (to.name !== 'Login'  && !token) next({ name: 'Login' })
//   else next()
// })

export default router
