<template>
    <section class="pt-10 pb-6 px-4 lg:pt-16 lg:px-16">
        <div class="flex justify-between items-center">
            <h2 class="text-darker font-bold text-2xl lg:text-center lg:flex-grow">Explore our Products</h2>
            <div class="flex gap-2 items-center">
                <button @click="scrollLeft">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.996 12.5534 27.6251 9.24912 25.188 6.81201C22.7509 4.3749 19.4466 3.00398 16 3ZM18.669 19.7568C18.7666 19.8447 18.846 19.9509 18.9026 20.0694C18.9592 20.1879 18.9919 20.3164 18.9989 20.4476C19.0058 20.5788 18.9868 20.71 18.943 20.8338C18.8992 20.9577 18.8314 21.0716 18.7435 21.1693C18.6557 21.2669 18.5494 21.3463 18.4309 21.4028C18.3123 21.4594 18.1838 21.492 18.0526 21.4989C17.9214 21.5057 17.7902 21.4867 17.6664 21.4428C17.5426 21.3989 17.4286 21.3311 17.3311 21.2432L12.3311 16.7432C12.2269 16.6494 12.1435 16.5348 12.0865 16.4068C12.0295 16.2788 12 16.1402 12 16C12 15.8598 12.0295 15.7212 12.0865 15.5932C12.1435 15.4652 12.2269 15.3506 12.3311 15.2568L17.3311 10.7568C17.4286 10.6689 17.5426 10.6011 17.6664 10.5572C17.7902 10.5133 17.9214 10.4943 18.0526 10.5011C18.1838 10.508 18.3123 10.5406 18.4309 10.5972C18.5494 10.6537 18.6557 10.7331 18.7435 10.8307C18.8314 10.9284 18.8992 11.0423 18.943 11.1662C18.9868 11.29 19.0058 11.4212 18.9989 11.5524C18.9919 11.6836 18.9592 11.8121 18.9026 11.9306C18.846 12.0491 18.7666 12.1553 18.669 12.2432L14.4951 16L18.669 19.7568Z"
                            fill="#219653" />
                    </svg>
                </button>
                <button @click="scrollRight">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.996 12.5534 27.6251 9.24912 25.188 6.81201C22.7509 4.3749 19.4466 3.00398 16 3ZM20.169 16.7432L15.169 21.2432C15.0714 21.3311 14.9574 21.3989 14.8336 21.4428C14.7098 21.4867 14.5786 21.5057 14.4474 21.4989C14.3162 21.492 14.1877 21.4594 14.0692 21.4028C13.9506 21.3463 13.8444 21.2669 13.7565 21.1693C13.6686 21.0716 13.6008 20.9577 13.557 20.8338C13.5132 20.71 13.4942 20.5788 13.5011 20.4476C13.5081 20.3164 13.5408 20.1879 13.5974 20.0694C13.654 19.9509 13.7334 19.8447 13.8311 19.7568L18.0049 16L13.8311 12.2432C13.6341 12.0657 13.5157 11.8173 13.5018 11.5526C13.488 11.2878 13.5798 11.0284 13.7572 10.8314C13.9346 10.6343 14.1829 10.5158 14.4476 10.5018C14.7124 10.4879 14.9718 10.5796 15.169 10.7568L20.169 15.2568C20.2731 15.3506 20.3565 15.4652 20.4135 15.5932C20.4705 15.7212 20.5 15.8598 20.5 16C20.5 16.1402 20.4705 16.2788 20.4135 16.4068C20.3565 16.5348 20.2731 16.6494 20.169 16.7432Z"
                            fill="#219653" />
                    </svg>
                </button>
            </div>
        </div>
        <ul class="mt-10 flex overflow-x-scroll gap-8 w-full lg:overflow-x-auto lg:mx-auto lg:gap-4"
            ref="horizontalmenu">
            <li class="ex-prod">
                <router-link to="/products/homecontent" class="w-full block p-4 bg-army rounded-lg">
                    <p class="text-white text-sm">Home Content Insurance</p>
                    <div class="flex justify-end mt-6">
                        <button>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="36" cy="36" r="36" fill="#FDFDFD" />
                                <g opacity="0.5">
                                    <path
                                        d="M48.0135 33.1891L36.9357 23.118C36.5288 22.7454 35.9971 22.5388 35.4453 22.5388C34.8936 22.5389 34.3619 22.7456 33.9551 23.1182L22.8791 33.1891C22.6509 33.3969 22.4686 33.65 22.3437 33.9322C22.2189 34.2145 22.1542 34.5197 22.154 34.8283V47.5799C22.1476 48.1367 22.3451 48.6765 22.7093 49.0977C22.9167 49.3335 23.1722 49.5223 23.4586 49.6513C23.7449 49.7803 24.0555 49.8467 24.3696 49.8459H31.0106C31.3044 49.8459 31.5862 49.7292 31.7939 49.5214C32.0016 49.3137 32.1183 49.032 32.1183 48.7382V42.091C32.1183 41.7972 32.235 41.5155 32.4428 41.3078C32.6505 41.1 32.9322 40.9833 33.226 40.9833H37.6568C37.9506 40.9833 38.2323 41.1 38.44 41.3078C38.6478 41.5155 38.7645 41.7972 38.7645 42.091V48.7382C38.7645 49.032 38.8812 49.3137 39.0889 49.5214C39.2966 49.7292 39.5784 49.8459 39.8722 49.8459H46.5263C46.8902 49.8506 47.2493 49.7622 47.5694 49.5889C47.9228 49.3982 48.2179 49.1155 48.4237 48.7707C48.6296 48.426 48.7383 48.032 48.7386 47.6305V34.8283C48.7383 34.5197 48.6737 34.2146 48.5488 33.9323C48.424 33.6501 48.2417 33.397 48.0135 33.1891Z"
                                        fill="#FDFDFD" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </router-link>
            </li>
            <li class="ex-prod">
                <router-link to="/products/health" class="block w-full p-4 bg-fuschia rounded-lg">
                    <p class="text-white text-sm">Health & Accident Insurance</p>
                    <div class="flex justify-end mt-6">
                        <button>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="36" cy="36" r="36" fill="white" />
                                <g opacity="0.5">
                                    <path
                                        d="M42.0922 23.2615C40.8027 23.2593 39.5304 23.558 38.3766 24.1339C37.2228 24.7098 36.2194 25.547 35.446 26.579C34.3987 25.1854 32.9396 24.1565 31.2753 23.6378C29.6109 23.1192 27.8256 23.137 26.172 23.6888C24.5184 24.2407 23.0802 25.2985 22.0609 26.7128C21.0416 28.127 20.4928 29.8259 20.4922 31.5692C20.501 32.8906 20.7317 34.2011 21.1748 35.4461H27.0994L28.9859 32.6163C29.0871 32.4646 29.2241 32.3401 29.3849 32.2541C29.5457 32.168 29.7252 32.123 29.9076 32.123C30.0899 32.123 30.2695 32.168 30.4302 32.2541C30.591 32.3401 30.7281 32.4646 30.8292 32.6163L34.3383 37.8799L35.6321 35.9394C35.7332 35.7876 35.8703 35.6632 36.0311 35.5772C36.1918 35.4911 36.3714 35.4461 36.5537 35.4461H39.8768C40.1706 35.4461 40.4523 35.5628 40.6601 35.7705C40.8678 35.9783 40.9845 36.26 40.9845 36.5538C40.9845 36.8476 40.8678 37.1293 40.6601 37.3371C40.4523 37.5448 40.1706 37.6615 39.8768 37.6615H37.1465L35.26 40.4913C35.1588 40.643 35.0218 40.7674 34.861 40.8535C34.7002 40.9395 34.5207 40.9846 34.3383 40.9846C34.156 40.9846 33.9765 40.9395 33.8157 40.8535C33.6549 40.7674 33.5179 40.643 33.4167 40.4913L29.9076 35.2277L28.6138 37.1682C28.5127 37.32 28.3756 37.4444 28.2149 37.5304C28.0541 37.6165 27.8745 37.6615 27.6922 37.6615H22.1515C25.8416 44.5583 34.4433 49.4464 34.9048 49.7049C35.0701 49.7975 35.2565 49.8461 35.446 49.8461C35.6356 49.8461 35.8219 49.7975 35.9873 49.7049C38.5298 48.2157 40.9161 46.4747 43.1101 44.5079C47.9472 40.1545 50.3999 35.8012 50.3999 31.5692C50.3974 29.3666 49.5213 27.255 47.9639 25.6975C46.4064 24.1401 44.2948 23.264 42.0922 23.2615Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </router-link>
            </li>
            <li class="ex-prod">
                <router-link to="/products/vehicle" class="block w-full p-4 bg-violet rounded-lg">
                    <p class="text-white text-sm">Vehicle & Motorcycle Insurance</p>
                    <div class="flex justify-end mt-6">
                        <button>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="36" cy="36" r="36" fill="white" />
                                <g opacity="0.5">
                                    <path
                                        d="M50.9541 33.231H49.4586L45.6125 24.5772C45.4382 24.1858 45.1543 23.8533 44.795 23.6198C44.4358 23.3864 44.0165 23.262 43.5881 23.2617H27.3048C26.8763 23.262 26.4571 23.3864 26.0978 23.6199C25.7385 23.8534 25.4546 24.1859 25.2803 24.5774L21.4343 33.231H19.9387C19.645 33.231 19.3632 33.3477 19.1555 33.5554C18.9478 33.7631 18.8311 34.0449 18.8311 34.3386C18.8311 34.6324 18.9478 34.9142 19.1555 35.1219C19.3632 35.3296 19.645 35.4463 19.9387 35.4463H21.0464V46.5233C21.0471 47.1106 21.2807 47.6737 21.6961 48.089C22.1114 48.5043 22.6745 48.738 23.2618 48.7386H26.5849C27.1723 48.738 27.7354 48.5043 28.1507 48.089C28.566 47.6737 28.7996 47.1106 28.8003 46.5233V44.3079H42.0926V46.5233C42.0933 47.1106 42.3269 47.6737 42.7422 48.089C43.1575 48.5043 43.7206 48.738 44.308 48.7386H47.6311C48.2184 48.738 48.7815 48.5043 49.1968 48.089C49.6121 47.6737 49.8458 47.1106 49.8464 46.5233V35.4463H50.9541C51.2479 35.4463 51.5297 35.3296 51.7374 35.1219C51.9451 34.9142 52.0618 34.6324 52.0618 34.3386C52.0618 34.0449 51.9451 33.7631 51.7374 33.5554C51.5297 33.3477 51.2479 33.231 50.9541 33.231ZM28.8003 39.8771H26.5849C26.2911 39.8771 26.0094 39.7604 25.8016 39.5527C25.5939 39.3449 25.4772 39.0632 25.4772 38.7694C25.4772 38.4756 25.5939 38.1939 25.8016 37.9862C26.0094 37.7784 26.2911 37.6617 26.5849 37.6617H28.8003C29.0941 37.6617 29.3758 37.7784 29.5835 37.9862C29.7913 38.1939 29.908 38.4756 29.908 38.7694C29.908 39.0632 29.7913 39.3449 29.5835 39.5527C29.3758 39.7604 29.0941 39.8771 28.8003 39.8771ZM42.0926 39.8771C41.7988 39.8771 41.5171 39.7604 41.3093 39.5527C41.1016 39.3449 40.9849 39.0632 40.9849 38.7694C40.9849 38.4756 41.1016 38.1939 41.3093 37.9862C41.5171 37.7784 41.7988 37.6617 42.0926 37.6617H44.308C44.6018 37.6617 44.8835 37.7784 45.0912 37.9862C45.299 38.1939 45.4157 38.4756 45.4157 38.7694C45.4157 39.0632 45.299 39.3449 45.0912 39.5527C44.8835 39.7604 44.6018 39.8771 44.308 39.8771H42.0926Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </router-link>
            </li>
            <li class="ex-prod">
                <div @click="opengadget" class="w-full block p-4 bg-navy rounded-lg">
                    <p class="text-white text-sm">Gadgets & POS Insurance</p>
                    <div class="flex justify-end mt-6">
                        <button>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="36" cy="36" r="36" fill="white" />
                                <g opacity="0.5">
                                    <path
                                        d="M46.5233 23.2617H24.3695C23.4884 23.2627 22.6438 23.6132 22.0208 24.2361C21.3978 24.8591 21.0474 25.7038 21.0464 26.5848V42.0925C21.0474 42.9735 21.3978 43.8182 22.0208 44.4411C22.6438 45.0641 23.4884 45.4146 24.3695 45.4156H34.3387V47.631H31.0156C30.7218 47.631 30.4401 47.7477 30.2324 47.9554C30.0246 48.1631 29.9079 48.4449 29.9079 48.7386C29.9079 49.0324 30.0246 49.3142 30.2324 49.5219C30.4401 49.7296 30.7218 49.8463 31.0156 49.8463H39.8772C40.1709 49.8463 40.4527 49.7296 40.6604 49.5219C40.8681 49.3142 40.9848 49.0324 40.9848 48.7386C40.9848 48.4449 40.8681 48.1631 40.6604 47.9554C40.4527 47.7477 40.1709 47.631 39.8772 47.631H36.5541V45.4156H46.5233C47.4043 45.4146 48.249 45.0641 48.872 44.4411C49.4949 43.8182 49.8454 42.9735 49.8464 42.0925V26.5848C49.8454 25.7038 49.4949 24.8591 48.872 24.2361C48.249 23.6132 47.4043 23.2627 46.5233 23.2617ZM46.5233 43.2002H24.3695C24.0758 43.1998 23.7942 43.083 23.5866 42.8754C23.3789 42.6677 23.2621 42.3862 23.2618 42.0925V39.8771H47.631V42.0925C47.6307 42.3862 47.5139 42.6677 47.3062 42.8754C47.0985 43.083 46.817 43.1998 46.5233 43.2002Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </li>

            <li class="ex-prod">
                <router-link to="/login" class="w-full p-4 block lg:pl-20 bg-yellow-400 rounded-lg">
                    <p class="text-white text-sm">Travel Insurance</p>
                    <div class="flex justify-end mt-8">

                        <div class="bg-white px-4 rounded-full opacity-30">
                            <button class="rounded-full bg-white flex items-center justify-center active pt-4 pb-4"
                                data-v-25aec9f1="">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="33" height="32"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                                    </metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path
                                            d="M2391 5109 c-100 -20 -220 -70 -311 -132 -25 -17 -115 -100 -201 -184 -85 -84 -159 -153 -163 -153 -5 0 -224 104 -488 230 -389 187 -487 230 -521 230 -40 0 -46 -5 -169 -129 -118 -118 -128 -131 -128 -166 0 -20 7 -49 16 -63 13 -23 508 -407 732 -569 l64 -46 -244 -244 c-151 -151 -248 -241 -257 -238 -28 11 -380 37 -407 31 -30 -8 -277 -245 -300 -288 -8 -15 -14 -43 -14 -63 0 -63 34 -85 198 -129 78 -22 142 -44 142 -50 0 -6 -5 -27 -10 -46 -53 -185 -77 -601 -46 -822 l17 -117 -47 -103 c-104 -231 -182 -475 -227 -708 -18 -96 -22 -150 -22 -330 0 -189 3 -226 23 -303 92 -364 310 -588 667 -684 93 -25 115 -26 320 -27 174 -1 241 3 320 18 229 42 449 111 693 217 l136 59 116 -16 c164 -23 508 -15 675 15 303 55 556 152 817 313 111 68 138 96 138 145 0 45 -14 69 -52 89 -46 24 -81 13 -193 -57 -173 -109 -388 -202 -578 -249 -45 -12 -90 -23 -99 -26 -17 -5 -18 5 -18 123 0 187 -28 278 -113 370 -44 48 -97 83 -167 109 -37 14 -98 18 -356 23 l-311 6 -41 29 c-51 35 -92 112 -92 173 0 101 -74 213 -168 256 -38 17 -75 22 -192 27 -130 6 -150 9 -196 33 -161 82 -192 299 -62 424 44 42 98 64 182 73 104 12 150 54 166 155 11 69 33 103 81 127 30 16 69 18 345 18 351 0 387 -5 454 -67 85 -76 84 -73 91 -393 6 -314 9 -332 72 -399 51 -54 103 -71 236 -80 135 -8 168 -22 216 -90 30 -43 30 -43 35 -214 3 -112 10 -180 18 -194 30 -53 107 -61 153 -17 l29 28 0 175 c0 226 -21 297 -112 390 -82 85 -167 118 -324 129 l-109 7 -6 275 c-5 245 -8 281 -27 332 -58 159 -189 275 -348 308 -32 7 -182 10 -400 8 l-349 -3 -55 -26 c-89 -41 -163 -128 -185 -216 l-12 -46 -72 -18 c-218 -55 -361 -233 -361 -449 0 -167 76 -306 218 -397 79 -51 131 -64 289 -71 175 -9 180 -12 194 -122 16 -131 84 -243 188 -309 91 -59 118 -63 451 -70 297 -6 306 -7 343 -29 20 -13 50 -45 65 -70 26 -45 27 -55 31 -198 l3 -152 -91 -7 c-103 -8 -267 0 -416 20 -825 113 -1519 733 -1725 1541 l-23 91 53 99 c64 122 230 394 239 394 4 0 18 -41 31 -91 33 -129 74 -172 144 -149 41 13 304 276 314 314 4 15 0 114 -10 219 l-17 192 243 243 242 243 299 -392 c313 -409 326 -423 390 -412 44 8 270 236 280 281 6 30 -19 88 -231 529 l-238 495 110 107 c115 112 251 204 504 341 l115 62 60 -12 c232 -46 549 -195 773 -364 102 -78 282 -241 282 -257 0 -5 -60 -9 -136 -9 -154 0 -226 -14 -315 -62 -167 -88 -276 -253 -298 -450 -5 -46 -15 -87 -24 -95 -8 -8 -43 -18 -78 -23 -82 -11 -120 -23 -172 -54 -108 -62 -181 -177 -199 -309 -31 -233 86 -430 291 -491 47 -14 119 -16 483 -16 297 0 436 3 451 11 54 28 71 83 43 138 -26 50 -36 51 -484 51 l-417 0 -52 24 c-36 17 -60 38 -80 67 -25 37 -28 53 -31 133 -3 79 0 97 20 136 33 65 89 100 174 110 87 9 139 31 187 78 55 53 76 101 88 200 17 140 71 235 173 299 70 45 118 53 308 53 97 0 188 4 202 10 23 9 28 4 81 -78 31 -48 84 -145 119 -217 280 -570 284 -1226 11 -1813 -30 -65 -55 -129 -55 -141 0 -77 96 -129 158 -85 44 30 166 308 221 499 29 102 58 256 70 367 16 142 14 419 -4 546 l-15 109 50 114 c101 227 176 458 222 689 20 100 23 144 22 340 0 212 -2 231 -27 325 -86 317 -286 537 -577 635 -238 81 -552 82 -885 3 -217 -51 -591 -195 -764 -294 -37 -21 -84 -48 -105 -59 l-39 -22 8 34 c4 18 11 51 16 73 14 65 11 222 -5 260 -23 53 -57 65 -188 64 -62 -1 -133 -5 -157 -10z m154 -241 c-9 -76 -32 -153 -68 -227 -27 -55 -65 -100 -233 -271 -126 -129 -203 -215 -208 -233 -8 -35 2 -58 263 -600 110 -230 201 -422 201 -426 0 -4 -15 -22 -34 -40 l-33 -32 -65 83 c-35 46 -160 209 -278 363 -268 352 -271 355 -329 355 l-45 0 -323 -323 -323 -323 0 -53 c0 -29 7 -128 16 -219 l15 -165 -42 -43 c-30 -30 -45 -40 -50 -32 -4 7 -37 123 -74 258 -37 135 -71 253 -76 262 -15 28 -40 37 -302 109 -138 38 -251 70 -253 72 -2 2 16 23 41 47 l44 43 195 -18 c108 -9 206 -15 219 -11 12 3 167 151 345 328 308 310 322 325 322 361 0 30 -8 46 -37 77 -21 21 -201 163 -401 315 -199 152 -362 279 -362 284 0 4 15 21 33 38 l32 32 488 -235 c359 -172 497 -234 523 -234 34 0 51 14 238 198 184 182 208 202 286 241 83 40 182 69 248 70 l33 1 -6 -52z m1766 26 c298 -56 478 -216 566 -501 26 -84 27 -99 27 -298 1 -193 -2 -221 -27 -340 -16 -71 -53 -205 -85 -297 l-56 -168 -28 77 c-160 438 -490 850 -893 1116 -105 69 -357 196 -451 227 -36 12 -64 24 -62 26 2 2 60 23 129 48 139 49 299 91 428 111 123 19 350 19 452 -1z m-3677 -1812 l59 -17 24 -88 24 -88 -104 -157 c-58 -86 -117 -178 -132 -204 -15 -27 -29 -48 -32 -48 -10 0 7 281 22 382 8 52 21 127 30 166 19 81 16 80 109 54z m-224 -1327 c31 -93 158 -345 227 -450 184 -279 442 -529 723 -701 112 -68 286 -153 393 -192 l77 -28 -168 -56 c-238 -81 -379 -109 -582 -115 -188 -6 -275 4 -398 46 -210 73 -357 220 -427 429 -73 216 -57 561 41 881 30 97 84 251 89 251 2 0 13 -29 25 -65z" />
                                        <path
                                            d="M4148 1193 c-95 -59 -37 -208 72 -186 95 19 114 159 26 191 -43 16 -66 15 -98 -5z" />
                                    </g>
                                </svg>
                            </button>
                        </div>

                    </div>
                </router-link>
            </li>

            <li class="ex-prod">
                <router-link to="/login"  class="w-full block p-4 lg:pl-20 bg-gray-900 rounded-lg">
                    <p class="text-white text-sm">Pet Insurance</p>
                    <div class="flex justify-end mt-8">
                        <!-- <button>
                           <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="36" cy="36" r="36" fill="white"/>
                                <g opacity="0.5">
                                    <path d="M30.1708 16.9999V90.9999C30.1708 21.1479 30.1379 21.294 30.0746 21.4277C30.0114 21.5615 29.9192 21.6795 29.8047 21.7733C29.6903 21.8671 29.5565 21.9343 29.413 21.9702C29.2694 22.006 29.1197 22.0096 28.9746 21.9805L20.1708 20.2197V23.5899L21.8547 25.2979C22.0392 25.485 22.1426 25.7372 22.1426 25.9999V28.9999C22.1426 29.1634 22.1025 29.3243 22.026 29.4686C21.9494 29.613 21.8386 29.7364 21.7032 29.828C21.5679 29.9196 21.4122 29.9767 21.2497 29.9942C21.0873 30.0117 20.923 29.9891 20.7712 29.9284L16.1426 28.077L11.5139 29.9284C11.3622 29.9891 11.1979 30.0117 11.0354 29.9942C10.8729 29.9767 10.7172 29.9196 10.5819 29.828C10.4466 29.7364 10.3358 29.613 10.2592 29.4686C10.1826 29.3243 10.1426 29.1634 10.1426 28.9999V25.9999C10.1426 25.7347 10.2479 25.4804 10.4354 25.2928L12.1426 23.5857V20.2197L3.33875 21.9805C3.19366 22.0096 3.04395 22.006 2.90039 21.9702C2.75684 21.9343 2.62303 21.8671 2.50861 21.7733C2.39418 21.6795 2.302 21.5615 2.2387 21.4277C2.17541 21.294 2.14258 21.1479 2.14258 20.9999V16.9999C2.14257 16.8142 2.19428 16.6322 2.2919 16.4742C2.38953 16.3163 2.52922 16.1886 2.69531 16.1055L12.144 11.3812L12.1566 5.99762C12.1569 4.93675 12.5786 3.91946 13.329 3.16953C14.0794 2.4196 15.0969 1.99847 16.1578 1.99878C17.2186 1.99909 18.2359 2.42081 18.9859 3.17117C19.7358 3.92154 20.1569 4.93907 20.1566 5.99994L20.1693 11.3812L29.618 16.1055C29.7841 16.1886 29.9238 16.3163 30.0215 16.4742C30.1191 16.6322 30.1708 16.8142 30.1708 16.9999Z" fill="white"></path>
                                </g>
                            </svg>
                       
                      </button> -->
                        <div class="bg-white px-4 rounded-full opacity-30">
                            <button class="rounded-full bg-white flex items-center justify-center active pt-4 pb-4"
                                data-v-25aec9f1="">
                                <!-- <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-25aec9f1="">
                            <path d="M30.1708 16.9999V20.9999C30.1708 21.1479 30.1379 21.294 30.0746 21.4277C30.0114 21.5615 29.9192 21.6795 29.8047 21.7733C29.6903 21.8671 29.5565 21.9343 29.413 21.9702C29.2694 22.006 29.1197 22.0096 28.9746 21.9805L20.1708 20.2197V23.5899L21.8547 25.2979C22.0392 25.485 22.1426 25.7372 22.1426 25.9999V28.9999C22.1426 29.1634 22.1025 29.3243 22.026 29.4686C21.9494 29.613 21.8386 29.7364 21.7032 29.828C21.5679 29.9196 21.4122 29.9767 21.2497 29.9942C21.0873 30.0117 20.923 29.9891 20.7712 29.9284L16.1426 28.077L11.5139 29.9284C11.3622 29.9891 11.1979 30.0117 11.0354 29.9942C10.8729 29.9767 10.7172 29.9196 10.5819 29.828C10.4466 29.7364 10.3358 29.613 10.2592 29.4686C10.1826 29.3243 10.1426 29.1634 10.1426 28.9999V25.9999C10.1426 25.7347 10.2479 25.4804 10.4354 25.2928L12.1426 23.5857V20.2197L3.33875 21.9805C3.19366 22.0096 3.04395 22.006 2.90039 21.9702C2.75684 21.9343 2.62303 21.8671 2.50861 21.7733C2.39418 21.6795 2.302 21.5615 2.2387 21.4277C2.17541 21.294 2.14258 21.1479 2.14258 20.9999V16.9999C2.14257 16.8142 2.19428 16.6322 2.2919 16.4742C2.38953 16.3163 2.52922 16.1886 2.69531 16.1055L12.144 11.3812L12.1566 5.99762C12.1569 4.93675 12.5786 3.91946 13.329 3.16953C14.0794 2.4196 15.0969 1.99847 16.1578 1.99878C17.2186 1.99909 18.2359 2.42081 18.9859 3.17117C19.7358 3.92154 20.1569 4.93907 20.1566 5.99994L20.1693 11.3812L29.618 16.1055C29.7841 16.1886 29.9238 16.3163 30.0215 16.4742C30.1191 16.6322 30.1708 16.8142 30.1708 16.9999Z" fill="#022E64">

                            </path>
                        </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="33" height="32"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                                    </metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path
                                            d="M2020 5106 c-119 -34 -226 -107 -297 -201 -56 -75 -76 -112 -102 -200 l-22 -71 -57 -11 c-286 -54 -459 -379 -376 -707 l6 -26 -405 0 c-394 0 -405 -1 -431 -21 l-26 -20 0 -368 c0 -405 2 -420 61 -512 42 -66 114 -122 189 -150 l60 -22 0 -1163 0 -1162 -134 -4 c-187 -4 -176 10 -176 -232 0 -157 3 -196 16 -214 l15 -22 1209 0 1209 0 21 27 c25 31 20 65 -12 101 l-21 22 -1144 0 -1143 0 0 80 0 80 2100 0 2100 0 0 -80 0 -80 -820 0 -821 0 -24 -25 c-29 -28 -32 -70 -9 -103 l15 -22 889 0 889 0 15 22 c13 18 16 57 16 214 0 242 11 228 -176 232 l-134 4 0 554 c0 541 0 554 -20 574 -28 28 -81 26 -108 -3 l-22 -23 0 -557 0 -557 -1010 0 -1010 0 0 906 0 906 -29 29 -29 29 -251 0 c-245 0 -250 0 -275 -22 -36 -33 -39 -75 -6 -108 19 -19 33 -20 225 -20 l205 0 0 -860 0 -860 -542 2 -543 3 -3 851 -2 851 207 7 c192 7 210 9 231 29 30 28 29 71 -3 102 l-24 25 -256 0 -256 0 -24 -25 -25 -24 0 -906 0 -905 -75 0 -75 0 0 1168 0 1168 45 13 c50 15 149 82 165 112 11 19 13 18 58 -22 123 -108 291 -137 430 -74 l55 25 15 -22 c32 -49 137 -138 202 -172 143 -75 151 -76 807 -76 502 0 594 2 656 16 128 29 254 105 337 203 l42 49 53 -24 c135 -62 305 -32 426 74 l46 41 39 -40 c34 -35 118 -84 177 -103 16 -5 17 -37 17 -481 0 -296 4 -483 10 -495 5 -10 26 -24 46 -30 32 -11 39 -10 63 7 l26 20 3 485 2 485 60 22 c75 28 147 84 189 150 59 92 61 107 61 512 l0 368 -26 20 c-26 20 -37 21 -431 21 l-405 0 6 25 c27 105 25 238 -4 345 -20 74 -82 181 -136 236 -61 60 -174 121 -244 130 l-48 6 -26 82 c-42 137 -127 248 -246 325 -92 60 -156 76 -295 76 -148 0 -208 -17 -317 -92 l-78 -52 -77 52 c-43 29 -103 61 -133 71 -70 24 -264 31 -330 12z m244 -151 c75 -20 131 -53 211 -126 36 -32 74 -59 85 -59 10 0 52 29 92 64 86 77 152 112 237 128 126 24 247 -17 347 -117 71 -70 106 -138 129 -250 9 -44 23 -87 31 -95 8 -9 45 -17 94 -21 135 -12 225 -71 283 -186 93 -183 45 -408 -122 -573 -42 -41 -91 -88 -109 -103 -38 -34 -39 -53 -11 -133 30 -82 37 -245 15 -338 -35 -150 -138 -291 -253 -350 -108 -54 -131 -56 -733 -56 -595 0 -613 1 -720 52 -69 33 -181 151 -218 229 -68 143 -81 327 -32 471 12 37 20 77 17 90 -4 13 -33 43 -66 67 -103 74 -180 196 -217 340 -24 97 -16 238 18 312 52 113 138 168 276 177 107 6 117 15 138 117 22 112 57 180 128 250 111 110 238 147 380 110z m-1004 -1233 c0 -5 27 -41 60 -80 l61 -72 -294 0 c-162 0 -369 3 -460 7 l-167 6 0 74 0 73 400 0 c220 0 400 -4 400 -8z m3400 -72 l0 -80 -460 0 -461 0 61 72 c33 39 60 75 60 80 0 4 180 8 400 8 l400 0 0 -80z m-3732 -383 c-3 -151 -4 -155 -33 -203 -84 -135 -263 -151 -368 -34 -56 63 -67 105 -67 264 l0 126 236 0 236 0 -4 -153z m482 30 c0 -89 5 -145 19 -198 11 -41 21 -80 23 -88 6 -27 -62 -56 -132 -56 -73 1 -126 23 -171 72 -54 58 -62 87 -67 246 l-4 147 166 0 166 0 0 -123z m2628 -24 c-3 -128 -7 -154 -26 -189 -28 -55 -92 -109 -148 -124 -83 -23 -201 10 -191 53 34 146 38 179 35 290 l-3 117 169 0 168 0 -4 -147z m620 0 c-5 -170 -16 -204 -89 -266 -107 -92 -273 -63 -346 60 -27 46 -28 54 -31 201 l-4 152 237 0 237 0 -4 -147z" />
                                        <path
                                            d="M2095 4796 c-57 -18 -92 -43 -125 -90 -110 -161 -67 -434 92 -581 111 -103 226 -109 327 -19 71 64 94 128 94 259 0 82 -4 113 -25 173 -74 206 -213 305 -363 258z m149 -192 c13 -15 37 -52 52 -83 37 -74 46 -216 17 -271 -10 -19 -25 -35 -33 -35 -9 0 -31 32 -53 75 -32 63 -40 89 -44 157 -6 80 10 183 28 183 4 0 19 -12 33 -26z" />
                                        <path
                                            d="M2899 4796 c-117 -31 -229 -175 -260 -334 -27 -141 15 -306 94 -366 143 -109 325 -36 423 169 106 221 43 479 -129 530 -59 18 -67 18 -128 1z m136 -196 c25 -43 25 -155 0 -232 -19 -60 -69 -144 -90 -151 -40 -16 -56 202 -21 293 25 66 66 132 79 127 7 -2 21 -19 32 -37z" />
                                        <path
                                            d="M1562 4289 c-28 -14 -52 -37 -70 -68 -24 -40 -27 -56 -27 -131 0 -74 4 -93 32 -152 67 -143 218 -234 328 -198 135 45 174 206 91 375 -58 117 -149 185 -256 192 -42 3 -65 -1 -98 -18z" />
                                        <path
                                            d="M3363 4285 c-174 -87 -262 -339 -167 -477 30 -42 95 -78 142 -78 105 0 248 110 291 225 32 83 38 160 17 222 -40 120 -163 167 -283 108z" />
                                        <path
                                            d="M2427 3970 c-284 -51 -542 -242 -658 -485 -47 -99 -63 -186 -48 -274 35 -217 200 -339 411 -303 87 15 143 39 228 97 130 89 246 93 372 14 201 -126 341 -149 485 -79 72 36 105 71 146 159 89 189 17 424 -190 622 -125 119 -239 185 -395 229 -83 24 -272 35 -351 20z m219 -141 c146 -20 297 -89 404 -186 66 -59 143 -169 171 -242 57 -150 -3 -304 -132 -342 -59 -18 -138 1 -207 48 -30 21 -75 50 -101 65 -148 85 -359 72 -495 -30 -70 -53 -127 -81 -179 -88 -42 -6 -45 -5 -65 27 -47 78 -64 200 -41 299 17 77 85 178 188 281 164 164 253 197 457 168z" />
                                        <path
                                            d="M2524 2318 c-12 -5 -27 -21 -33 -34 -16 -35 -16 -1273 0 -1307 6 -14 22 -30 36 -36 17 -8 258 -11 819 -11 l795 0 24 25 25 24 0 651 0 651 -25 24 -24 25 -798 -1 c-528 0 -805 -4 -819 -11z m1514 -530 l-3 -393 -697 -3 -698 -2 0 395 0 395 700 0 700 0 -2 -392z m0 -625 l-3 -78 -475 -3 c-261 -2 -575 0 -697 3 l-223 7 0 74 0 74 700 0 701 0 -3 -77z" />
                                        <path
                                            d="M1293 1389 c-42 -15 -53 -47 -53 -150 0 -82 3 -100 21 -123 26 -33 79 -36 109 -6 18 18 20 33 20 128 0 78 -4 113 -15 129 -16 23 -52 33 -82 22z" />
                                    </g>
                                </svg>
                            </button>
                        </div>

                    </div>
                </router-link>
            </li>

            <li class="ex-prod">
                <router-link to="/login"  class="w-full p-4 block lg:pl-20 bg-purple-500 rounded-lg">
                    <p class="text-white text-sm">Welfare Insurance</p>
                    <div class="flex justify-end mt-8">
                        <!-- <button>
                           <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.1" cx="36" cy="36" r="36" fill="white"/>
                                <g opacity="0.5">
                                    <path d="M30.1708 16.9999V90.9999C30.1708 21.1479 30.1379 21.294 30.0746 21.4277C30.0114 21.5615 29.9192 21.6795 29.8047 21.7733C29.6903 21.8671 29.5565 21.9343 29.413 21.9702C29.2694 22.006 29.1197 22.0096 28.9746 21.9805L20.1708 20.2197V23.5899L21.8547 25.2979C22.0392 25.485 22.1426 25.7372 22.1426 25.9999V28.9999C22.1426 29.1634 22.1025 29.3243 22.026 29.4686C21.9494 29.613 21.8386 29.7364 21.7032 29.828C21.5679 29.9196 21.4122 29.9767 21.2497 29.9942C21.0873 30.0117 20.923 29.9891 20.7712 29.9284L16.1426 28.077L11.5139 29.9284C11.3622 29.9891 11.1979 30.0117 11.0354 29.9942C10.8729 29.9767 10.7172 29.9196 10.5819 29.828C10.4466 29.7364 10.3358 29.613 10.2592 29.4686C10.1826 29.3243 10.1426 29.1634 10.1426 28.9999V25.9999C10.1426 25.7347 10.2479 25.4804 10.4354 25.2928L12.1426 23.5857V20.2197L3.33875 21.9805C3.19366 22.0096 3.04395 22.006 2.90039 21.9702C2.75684 21.9343 2.62303 21.8671 2.50861 21.7733C2.39418 21.6795 2.302 21.5615 2.2387 21.4277C2.17541 21.294 2.14258 21.1479 2.14258 20.9999V16.9999C2.14257 16.8142 2.19428 16.6322 2.2919 16.4742C2.38953 16.3163 2.52922 16.1886 2.69531 16.1055L12.144 11.3812L12.1566 5.99762C12.1569 4.93675 12.5786 3.91946 13.329 3.16953C14.0794 2.4196 15.0969 1.99847 16.1578 1.99878C17.2186 1.99909 18.2359 2.42081 18.9859 3.17117C19.7358 3.92154 20.1569 4.93907 20.1566 5.99994L20.1693 11.3812L29.618 16.1055C29.7841 16.1886 29.9238 16.3163 30.0215 16.4742C30.1191 16.6322 30.1708 16.8142 30.1708 16.9999Z" fill="white"></path>
                                </g>
                            </svg>
                       
                      </button> -->
                        <div class="bg-white px-4 rounded-full opacity-30">
                            <button class="rounded-full bg-white flex items-center justify-center active pt-4 pb-4"
                                data-v-25aec9f1="">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="33" height="32"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                                    </metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path
                                            d="M2500 4860 c-18 -18 -20 -33 -20 -140 0 -140 10 -160 80 -160 70 0 80 20 80 160 0 140 -10 160 -80 160 -27 0 -47 -7 -60 -20z" />
                                        <path
                                            d="M2004 4736 c-57 -25 -59 -81 -8 -173 57 -100 79 -123 123 -123 27 0 44 7 60 24 36 39 30 79 -28 178 -40 67 -58 88 -82 97 -18 6 -32 11 -33 11 -1 -1 -15 -7 -32 -14z" />
                                        <path
                                            d="M3048 4738 c-37 -13 -130 -168 -130 -216 0 -48 35 -82 83 -82 44 0 66 23 123 123 50 90 49 145 -5 172 -32 17 -34 17 -71 3z" />
                                        <path
                                            d="M1607 4348 c-26 -20 -37 -70 -22 -104 16 -38 166 -124 217 -124 45 0 78 34 78 81 0 47 -11 59 -105 113 -83 48 -135 58 -168 34z" />
                                        <path
                                            d="M3341 4311 c-46 -27 -87 -55 -92 -62 -5 -8 -9 -30 -9 -50 0 -46 33 -79 79 -79 35 0 168 67 203 102 25 25 24 92 -2 118 -34 34 -84 26 -179 -29z" />
                                        <path
                                            d="M2410 4221 c-82 -26 -118 -48 -183 -109 -110 -105 -151 -213 -145 -376 3 -91 7 -108 39 -176 20 -41 55 -97 79 -123 23 -26 41 -49 39 -51 -2 -2 -25 -13 -51 -24 -78 -34 -184 -108 -251 -175 -156 -156 -244 -348 -254 -558 -5 -99 -4 -108 16 -128 l21 -21 840 0 840 0 21 21 c20 20 21 29 16 128 -10 210 -98 402 -254 558 -67 67 -173 141 -251 175 -26 11 -49 22 -51 24 -2 2 16 25 39 51 24 26 59 82 79 123 32 67 36 85 39 173 7 165 -39 281 -155 389 -91 84 -187 118 -327 117 -58 0 -111 -6 -146 -18z m275 -176 c68 -30 115 -73 151 -137 26 -48 29 -62 29 -148 0 -109 -17 -152 -85 -220 -61 -61 -112 -83 -206 -88 -72 -4 -89 -1 -136 20 -75 35 -122 79 -158 150 -26 52 -30 72 -30 138 0 66 4 86 30 138 77 154 250 216 405 147z m-23 -780 c126 -12 278 -86 387 -189 71 -68 109 -119 151 -205 27 -54 70 -189 70 -218 0 -10 -143 -13 -711 -13 l-711 0 7 38 c46 251 227 466 469 554 75 28 200 48 256 42 14 -2 51 -6 82 -9z" />
                                        <path
                                            d="M1484 3836 c-35 -15 -44 -32 -44 -82 0 -63 23 -74 156 -74 63 0 124 4 134 10 52 28 42 122 -16 146 -43 18 -189 18 -230 0z" />
                                        <path
                                            d="M3404 3836 c-56 -25 -65 -119 -14 -146 10 -6 71 -10 134 -10 134 0 156 11 156 76 0 48 -14 70 -51 83 -44 15 -187 13 -225 -3z" />
                                        <path
                                            d="M901 2941 c-20 -20 -21 -31 -21 -221 0 -187 1 -201 20 -220 13 -13 33 -20 60 -20 27 0 47 7 60 20 18 18 20 33 20 150 l0 131 28 -15 c39 -21 88 -75 109 -121 16 -35 18 -79 21 -380 l3 -340 442 -442 c442 -443 442 -443 484 -443 33 0 46 5 62 26 46 58 39 70 -178 288 -109 111 -204 211 -210 223 -24 46 14 103 68 103 19 0 88 -62 299 -272 150 -150 281 -286 290 -303 15 -26 17 -74 20 -367 l3 -338 -400 0 -401 0 0 138 0 137 -320 480 -320 480 0 163 c0 149 -2 164 -20 182 -13 13 -33 20 -60 20 -27 0 -47 -7 -60 -20 -19 -19 -20 -33 -20 -217 l0 -198 320 -480 320 -480 0 -102 0 -103 -60 0 c-47 0 -64 -4 -80 -20 -27 -27 -27 -93 0 -120 20 -20 33 -20 1180 -20 1147 0 1160 0 1180 20 27 27 27 93 0 120 -16 16 -33 20 -80 20 l-60 0 0 103 0 102 320 480 320 480 0 678 c0 796 12 723 -120 715 -138 -8 -262 -93 -326 -223 l-29 -60 -3 -336 -3 -335 -142 -143 -143 -142 -33 41 c-63 78 -171 108 -272 75 -49 -16 -78 -41 -332 -294 l-277 -276 -278 276 c-254 253 -282 278 -331 294 -101 33 -209 3 -272 -75 l-33 -41 -143 142 -142 143 -3 335 -3 336 -29 60 c-64 130 -189 215 -327 223 -68 4 -79 2 -98 -17z m2859 -1786 l-320 -480 0 -138 0 -137 -401 0 -400 0 3 338 c3 293 5 341 20 367 24 44 561 575 580 575 56 0 100 -58 78 -102 -7 -12 -102 -113 -211 -224 -183 -184 -199 -203 -199 -235 0 -48 35 -81 86 -81 35 0 55 18 480 443 l443 443 3 340 c3 302 5 346 21 381 21 46 59 89 102 116 l30 19 3 -572 2 -573 -320 -480z" />
                                        <path
                                            d="M900 2300 c-13 -13 -20 -33 -20 -60 0 -53 27 -80 80 -80 27 0 47 7 60 20 13 13 20 33 20 60 0 53 -27 80 -80 80 -27 0 -47 -7 -60 -20z" />
                                    </g>
                                </svg>
                            </button>
                        </div>

                    </div>
            </router-link>
        </li>
    </ul>
    <transition name="scale">
        <gadgetmodal v-if="comingsoon"  :close="closeReview" tett="managevehicle" :notification="opennotification" />
      </transition>
      <transition name="scale">
        <Gadgetnotification v-if="notification"  :close="closeReview" tett="managevehicle" />
      </transition>
</section></template>

<script>
import gadgetmodal from '../Gadgetmodal.vue';
import Gadgetnotification from '../Gadgetnotification.vue';
export default {
    components: { gadgetmodal, Gadgetnotification },
    data() {
        return {
            showProduct: false,
            comingsoon: false, 
            notification: false
        };
    },
    methods: {
        opengadget() {
        this.showProduct = false
        this.comingsoon = true
      },
      closeReview() {
        this.comingsoon = false
        this.notification = false
      },
      opennotification() {
        this.comingsoon = false
        this.notification = true
      },
        scrollRight() {
            this.$refs.horizontalmenu.scrollLeft += 250
        },
        scrollLeft() {
            this.$refs.horizontalmenu.scrollLeft -= 250
        },
    }
}
</script>

<style scoped>ul::-webkit-scrollbar {
    height: 0;
    display: none
}

.horizontalmenu::-webkit-scrollbar {
    height: 0
}

.horizontalmenu {
    scroll-behavior: smooth;
}

.ex-prod {
    width: 215px;
    height: 167px;
}

.ex-prod > a, .ex-prod > div {
    width: inherit;
    height: inherit;
}

@media only screen and (min-width: 1024px) {
    h2 {
        font-size: 40px
    }

    ul {
        max-width: 1500px
    }
}</style>