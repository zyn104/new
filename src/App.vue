<template>
	<div id="app">	
		
		<router-view></router-view>
		
		
		<FootView></FootView>
  </div>
</template>

<script>


import FootView from './components/FootView';
import { Toast,Indicator,MessageBox,Swipe, SwipeItem  } from 'mint-ui'
export default {
  name: 'app',
  
  methods:{
  	/*returns(){
  		window.history.go(-1);
  	}*/
  },
  components:{
  	FootView
  },
  mounted(){
			//console.log(this.$route);
		}
}
</script>















