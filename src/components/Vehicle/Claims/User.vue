<template>
   <div class="l-modal">
      <div class="loading-modal w-full px-4 md:px-0">
          <div class="loader bg-white w-full md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6" v-on-clickaway="close">
            <div class="pt-6">
                <div class="flex justify-between">
                    <div>
                    <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                        Claim info
                    </p>
                    </div>
                    <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl" @click="$emit('close')" />
                </div>
                <div class="mt-8">
                <p class="font-bold">Policy Number</p>
                <p v-if="policy.metadata.policy_number" class="mt-2 lg:mt-4 text-green-500 font-bold">{{policy.metadata.policy_number}}</p>
                <p v-else class="mt-2 lg:mt-4 text-green-500 font-bold">Null</p>
                </div>
                <p class="font-bold mt-6 underline">Claim Details</p>
                <ul class="mt-4">
                    <li>
                        <p>Accident Date</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentDate}}</p>
                    </li>
                    <li>
                        <p>Accident Description: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentDescription}}</p>
                    </li>
                    <li>
                        <p>Accident Place: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentPlace}}</p>
                    </li>
                    <li>
                        <p>Accident Time: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentTime}}</p>
                    </li>
                    <li>
                        <p>Accident Weather Condition: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.AccidentWeatherCondition}}</p>
                    </li>
                    <li>
                        <p>Claim Notice: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ClaimNotice}}</p>
                    </li>
                    <li>
                        <p>Cost Of Repairs: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.CostOfRepairs}}</p>
                    </li>
                    <li>
                        <p>Damaged Parts: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DamagedParts}}</p>
                    </li>
                    <li>
                        <p>Driver Address: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverAddress }}</p>
                    </li>
                    <li>
                        <p>Driver Age: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverAge}}</p>
                    </li>
                    <li>
                        <p>Driver Date Of Expiry </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverDateOfExpiry}}</p>
                    </li>
                    <li>
                        <p>Driver Employment: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmployment}}</p>
                    </li>
                    <li>
                        <p>Driver Employment Capacity: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmploymentCapacity}}</p>
                    </li>
                    <li>
                        <p>Driver Employment Length: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmploymentLength}}</p>
                    </li>
                    <li>
                        <p>Driver License Number: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverLicenseNumber}}</p>
                    </li>
                    <li>
                        <p>Driver Name: </p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverName}}</p>
                    </li>

                </ul>
                <p class="font-bold underline">ThirdParty Info</p>
                <ul class="mt-4">
                    <li>
                        <p>ThirdParty Address</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyAddress}}</p>
                    </li>
                    <li>
                        <p>ThirdParty Injury</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyInjury}}</p>
                    </li>
                    <li>
                        <p>ThirdParty Inspection Address</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyInspectionAddress}}</p>
                    </li>
                    <li>
                        <p>ThirdParty Make</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyMake}}</p>
                    </li>
                    <li>
                        <p>ThirdParty Name</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyName}}</p>
                    </li>
                    <li>
                        <p>ThirdParty Property</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyProperty}}</p>
                    </li>
                    <li>
                        <p>ThirdParty RegNo</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.ThirdPartyRegNo}}</p>
                    </li>
                </ul>

                <p class="font-bold underline">Driver Info</p>
                <ul class="mt-4">
                    <li>
                        <p>Driver Address</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverAddress }}</p>
                    </li>
                    <li>
                        <p>Driver Age</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverAge}}</p>
                    </li>
                    <li>
                        <p>Driver Date Of Expiry</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverDateOfExpiry}}</p>
                    </li>
                    <li>
                        <p>Driver Employment</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmployment}}</p>
                    </li>
                    <li>
                        <p>Driver Employment Capacity</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmploymentCapacity}}</p>
                    </li>
                    <li>
                        <p>Driver Employment Length</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverEmploymentLength}}</p>
                    </li>
                    <li>
                        <p>Driver License Number</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverLicenseNumber}}</p>
                    </li>


                     <li>
                        <p>Driver Name</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverName }}</p>
                    </li>
                    <li>
                        <p>Driver Previous Accident</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverPreviousAccident}}</p>
                    </li>
                    <li>
                        <p>Driver Previous Accident Details</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverPreviousAccidentDetails}}</p>
                    </li>
                    <li>
                        <p>Driver Prosecuted</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverProsecuted}}</p>
                    </li>
                    <li>
                        <p>Driver Prosecuted Details</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverProsecutedDetails}}</p>
                    </li>
                    <li>
                        <p>Driver Warning</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverWarning}}</p>
                    </li>
                    <li>
                        <p>Driver Years Experience</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.DriverYearsExperience}}</p>
                    </li>
                </ul>
                <!-- <hr class="mt-6"> 
                <a :href="policy.metadata.enrollee.means_of_id" v-if="policy.metadata.enrollee.means_of_id" target="_blank" rel="noopener noreferrer" class="mt-6 block text-green-500 underline">View User ID</a>
                <p v-else class="mt-6">Means of Id link not available</p> -->

                <p class="font-bold underline">Other Claim Info</p>
                <ul class="mt-4">
                    <li>
                        <p>Headlamps</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.Headlamps }}</p>
                    </li>
                    <li>
                        <p>Other Driver Warning</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.OtherDriverWarning}}</p>
                    </li>
                    <li>
                        <p>Other Vehicle Insurance</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.OtherVehicleInsurance}}</p>
                    </li>
                    <li>
                        <p>Police Action</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceAction}}</p>
                    </li>
                    <li>
                        <p>Police Report</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReport}}</p>
                    </li>
                    <li>
                        <p>Police Report Officer Name</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReportOfficerName}}</p>
                    </li>
                    <li>
                        <p>Police Report Officer Number</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReportOfficerNumber}}</p>
                    </li>


                     <li>
                        <p>Police Report Station</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PoliceReportStation }}</p>
                    </li>
                    <li>
                        <p>Purpose Of Use At Accident</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PurposeOfUseAtAccident}}</p>
                    </li>
                    <li>
                        <p>Purpose Of Use At Accident Extra</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.PurposeOfUseAtAccidentExtra}}</p>
                    </li>
                    <li>
                        <p>Repairer Address</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RepairerAddress}}</p>
                    </li>
                    <li>
                        <p>Repairer Name</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RepairerName}}</p>
                    </li>
                    <li>
                        <p>Repairer Phone</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RepairerPhone}}</p>
                    </li>
                    <li>
                        <p>Road Width</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.RoadWidth}}</p>
                    </li>



                    <li>
                        <p>Vehicle Location</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VehicleLocation }}</p>
                    </li>
                    <li>
                        <p>Vehicle Speed</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VehicleSpeed}}</p>
                    </li>
                    <li>
                        <p>Victim Hospital</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VictimHospital}}</p>
                    </li>
                    <li>
                        <p>Victim Name</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.VictimName}}</p>
                    </li>
                    <li>
                        <p>Witness Address</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.WitnessAddress}}</p>
                    </li>
                    <li>
                        <p>Witness Name</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.WitnessName}}</p>
                    </li>
                    <li>
                        <p>Plate Number</p>
                        <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.metadata.plate_number}}</p>
                    </li>
                </ul>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
    props:['policy'],
    data(){
        return {
            existing: ''
        }
    },
    methods:{
        close(){
          this.$emit('close')
        // console.log('closeee')
        }
    },
    directives: {
        onClickaway: onClickaway,
    },
    mounted(){
        console.log(this.policy)
    }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 5px;
  max-width: 1000px
}
.img{
  width: 120px
}
li{
    margin-bottom: 20px
}
@media only screen and (min-width: 1024px){
    ul{
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
    }
    ul li{
        /* flex: 0 0 25% */
        width: 20%;
        margin: 0  5% 0 0
    }
}
</style>