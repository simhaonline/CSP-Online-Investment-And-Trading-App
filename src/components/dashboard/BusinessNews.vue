<!--
  Displays a business news feed curated from google news

  @author Omadoye Abraham <omadoyeabraham@gmail.com>
-->
<template>

    <v-card class="white lighten-2 card h-100 height-250px"
       dark>

    <div class="w100p bg-csp-light-blue p10">
      <div class="text-uppercase">BUSINESS NEWS </div>
    </div>

    <!-- Card body -->
    <div class="card-block p0" style="overflow-y: auto">
      <!-- <ul class="list-group list-group-flush black--text">
        <li class="list-group-item" v-for="(newsItem, index) in newsFeed" :key="index">
          <a :href="newsItem.link" target="_blank">{{newsItem.title}}</a>
        </li>
      </ul> -->
      <table class="table table-striped mb0">
        <tbody>
          <tr v-for="(newsItem, index) in newsFeed" :key="index">
            <td class="pt1 pb1">
              <a :href="newsItem.link" target="_blank"
                class="font-size-11 black--text">
                {{newsItem.title}}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </v-card>

</template>

<script>
  export default
  {
    props: ['newsFeed']
  }

</script>

<style>

</style>
