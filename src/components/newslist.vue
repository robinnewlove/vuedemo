<template>
    <div>
        <ul>
        <li v-for="item in listData.list">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            listData: [],
            apiUrl: 'http://127.0.0.1/vuedemo/vuedemo/data.php'

        }
    },
    created:function(){
         axios.get(this.apiUrl).then((response) => {
    this.listData = response.data.result;
  })
  .catch(function (error) {
    console.log(error);
  });
        
        
    }
}
</script>