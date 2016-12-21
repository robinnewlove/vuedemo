import banner from './components/banner.vue';
import home from './views/home.vue';
module.exports =[
        { path: '/', 
          component: home 
        },{
          path: '/bar', 
          component: banner 
        }
]