<template>
	<div id="app">
    	<mt-tabbar v-model="selected" fixed>
		  	<mt-tab-item id="首页">
		    	<router-link to='/home'>
					<img slot="icon" src="../assets/logo.png">
					首页
				</router-link>
		  	</mt-tab-item>
		  	<mt-tab-item id="讲堂">	
		    	<router-link to='/classroom'>
					<img slot="icon" src="../assets/logo.png">
					讲堂
				</router-link>
		  	</mt-tab-item>
		  	<mt-tab-item id="我的">
		   		<router-link to='/me'>
					<img slot="icon" src="../assets/logo.png">
					我的
				</router-link>
		  	</mt-tab-item>
		</mt-tabbar>
  	</div>
</template>

<script>
export default {
  data(){
		return {
			selected:""
		}
	}
}
</script>















