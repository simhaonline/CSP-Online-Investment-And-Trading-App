<!--
 This component controls the cash overview page.
 The page displays a list of all cash accounts the user owns, with pertinent info about the account and also a link to view details about the account
-->

<template>
<v-container fluid class="p20">
    <cash-accounts-overview-header></cash-accounts-overview-header>

    <table class="table table-striped table-bordered w100p mt15" id="cashOverviewTable">
      <thead>
        <tr>
          <th class="font-weight-bold">CASH ACCOUNT</th>
          <th>CURRENCY</th>
          <th class="text-right">UNCLEARED CASH</th>
          <th class="text-right">CASH AVAILABLE</th>
          <th class="text-right">TOTAL BALANCE</th>
        </tr>
      </thead>
        <tbody>
      <tr v-for="(cashAccount, index) in allCashAccounts" :key="index"
           @click="viewCashAccount(cashAccount.id, cashAccount.currency)" class="link">
        <td style="font-weight: 600">{{ cashAccount.label }} </td>
        <td>{{ cashAccount.currency }}</td>
        <td class="text-right">
          <span v-if="cashAccount.currency === 'NGN'">
            {{cashAccount.cspInitialUnclearedEffects | currency('&#8358;',2)}}
          </span>
          <span v-if="cashAccount.currency === 'USD'">
            {{cashAccount.cspInitialUnclearedEffects | currency('&#36;',2)}}
          </span>
        </td>
        <td class="text-right">
            <span v-if="cashAccount.clearedBalance < 0" class="red--text">
               <span v-if="cashAccount.currency === 'NGN'" >
                 &#8358;({{Math.abs(cashAccount.clearedBalance) | currency('',2)}})
               </span>
              <span v-if="cashAccount.currency === 'USD'" >
                 ({{Math.abs(cashAccount.clearedBalance) | currency('&#36;',2)}})
               </span>
            </span>
            <span v-else>
              <span v-if="cashAccount.currency === 'NGN'">
                {{cashAccount.clearedBalance | currency('&#8358;',2)}}
              </span>
              <span v-if="cashAccount.currency === 'USD'">
                {{cashAccount.clearedBalance | currency('&#36;',2)}}
              </span>
            </span>
        </td>
        <td class="text-right">
          <span v-if="(parseFloat(cashAccount.cspInitialUnclearedEffects) + parseFloat(cashAccount.clearedBalance)) < 0" class="red--text">
            <span v-if="cashAccount.currency === 'NGN'">
               &#8358;({{Math.abs((parseFloat(cashAccount.cspInitialUnclearedEffects) + parseFloat(cashAccount.clearedBalance))) |currency('', 2)}})
            </span>
             <span v-if="cashAccount.currency === 'USD'">
               &#36;({{Math.abs((parseFloat(cashAccount.cspInitialUnclearedEffects) + parseFloat(cashAccount.clearedBalance))) |currency('', 2)}})
            </span>
          </span>
          <span v-else>
            <span v-if="cashAccount.currency === 'NGN'">
              {{ (parseFloat(cashAccount.cspInitialUnclearedEffects) + parseFloat(cashAccount.clearedBalance)) | currency('&#8358;', 2) }}
            </span>
             <span v-if="cashAccount.currency === 'USD'">
              {{ (parseFloat(cashAccount.cspInitialUnclearedEffects) + parseFloat(cashAccount.clearedBalance)) | currency('&#36;', 2) }}
            </span>
          </span>
        </td>
      </tr>
    </tbody>
    </table>

    <hr class="mt18">

    <!-- Naira and Dollar balances -->

    <v-layout class="">
      <v-flex class="text-right d-flex justify-content-end">
        <table>
          <tbody>
            <tr>
              <td class="font-size-14 csp-light-blue-text font-weight-bold">Naira Balance:</td>
              <td class="font-size-14  font-weight-bold text-left pl10">
                <span v-if="totalNairaCashBalance < 0" class="red--text">({{Math.abs(totalNairaCashBalance) | currency('&#8358;',2)}})</span>
                <span v-else class="csp-light-blue-text"> {{totalNairaCashBalance | currency('&#8358;', 2)}} </span>
              </td>
            </tr>
            <tr>
              <td class="font-size-14 csp-light-blue-text font-weight-bold">Dollar Balance:</td>
              <td class="font-size-14  font-weight-bold text-left pl10">
                <span v-if="totalDollarCashBalance < 0" class="red--text">({{Math.abs(totalDollarCashBalance) | currency('&#36;',2)}})</span>
                <span v-else class="csp-light-blue-text"> {{totalDollarCashBalance | currency('&#36;', 2)}} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </v-flex>
    </v-layout>

    <!-- Note -->
    <v-flex xs12 class="height-55px mb6 mt100">
      <p class="red--text font-size-12 mt20"><i>*Note to be added here.</i></p>
    </v-flex>


</v-container>
</template>



<script>
import {mapGetters, mapActions} from 'vuex'
import CashAccountsOverviewHeader from './CashAccountsOverviewHeader'
import CashService from '../../services/CashService'

export default {
  data () {
    return {

    }
  },

  created () {
    this.obtainUpdatedCustomerCashData;

     // Get updated cash data from the server every 1 minute
    // this.getUpdatedCustomerCashData = setInterval(this.obtainUpdatedCustomerCashData, 10000)
  },

  beforeDestroy () {
    clearInterval(this.getUpdatedCustomerData)
  },

  computed: {
    ...mapGetters({
      'allCashAccounts': 'getAllCashAccountsDefaultValues',
      'totalNairaCashBalance': 'getTotalNairaCashBalance',
      'totalDollarCashBalance': 'getTotalDollarCashBalance',
      'userId': 'getUserId'
    })
  },

  components: {
    CashAccountsOverviewHeader
  },

  methods: {

    ...mapActions({
      updateCustomerData: 'updateCustomerData'
    }),

    obtainUpdatedCustomerCashData: function () {
      CashService.setDefaultCashAccountValues()
    },

    /**
     * Set and navigate to the appropriate cash account page with the selected cash account
     */
    viewCashAccount: function ($cashAccountId, $currency = 'NGN') {
      CashService.setDefaultCashAccountValues()
      if ($currency === 'NGN') {
        CashService.changeSelectedNairaCashAccount($cashAccountId)
        this.$router.push('/cash/naira')
      }

      if ($currency === 'USD') {
        CashService.changeSelectedDollarCashAccount($cashAccountId)
        this.$router.push('/cash/dollar')
      }
    }
  }

}
</script>


<style lang="sass" scoped>
  .link
    &:hover
      cursor: pointer;
  #cashOverviewTable
    margin-bottom: 0px !important
    thead
      background: #4c7396
      tr
        height: 25px
        th
          color: #FFFFFF
          padding: 15px 10px !important
          font-size: 12px
    tbody
      td
        padding: 20px 10px !important
        height: 25px
        color: #31708f
        font-size: 13px
</style>
