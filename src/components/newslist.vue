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
    data ()
{
    return {
        //gridColumns: ['1','2','3','4'],
        listData: [],
        //apiUrl: 'http://v.juhe.cn/weixin/query?key=59803c8d89adc0df0313b4c863edefb6'
        apiUrl: 'http://127.0.0.1/vuedemo/vuedemo/data.php'

    }
}
,
created:function () {
    axios.get(this.apiUrl).then((response) = > {
        //return response;
        this.listData = response.data.result;
    //console.log(this.listData);

    //return this.gridColumns
}
)
.catch(function (error) {
    console.log(error);
});


}
}
</script>