import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/home/HomeView'
import ClassroomView from '../components/classroom/ClassroomView'
import MeView from '../components/me/MeView'
import MyNewsView from '../components/me/MyNewsView'
import MyAttentionView from '../components/me/MyAttentionView'
import MyRecommendView from '../components/me/MyRecommendView'
import MyDrugView from '../components/me/MyDrugView'
import MyScanCodeView from '../components/me/MyScanCodeView'
import MyAlldurgView from '../components/me/MyAlldurgView'
import MybuysuccessView from '../components/me/MybuysuccessView'
import MyMachineView from '../components/me/MyMachineView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"首页",
      component: HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
    	 path: '/classroom',
      component: ClassroomView
    },
    {
    	 path: '/me',
      component: MeView
    },
    {
    	 path: '/MyNewsView',
      component: MyNewsView
    },
    {
    	 path: '/MyAttentionView',
      component: MyAttentionView
    },
    {
    	 path: '/MyRecommendView',
      component: MyRecommendView
    },
    {
    	 path: '/MyDrugView',
      component: MyDrugView
    },
    {
    	 path: '/MyScanCodeView',
      component: MyScanCodeView
    },
    {
    	 path: '/MyAlldurgView',
      component: MyAlldurgView
    },
    {
    	 path: '/MybuysuccessView',
      component: MybuysuccessView
    },
    {
    	 path: '/MyMachineView',
      component: MyMachineView
    }
    
  ]
})
