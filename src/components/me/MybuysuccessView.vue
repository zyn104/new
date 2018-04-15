<template>		
	<div class="mebody">
		<mt-header fixed title="药品统计">		  	
		    <mt-button icon="back" slot="left" @click="returns"></mt-button>		    			  	
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="AllDurg">
			<div class="mailogo"><img src="../img/sucess_03.png"/></div>
			<div class="success">购买成功</div>
		</div>
		<div class="share">分享</div>
		
		
	</div>
	
</template>

<script>
export default{
	methods:{
		returns(){
			window.history.go(-1)
		}
	}
}	
</script>

<style lang="less">
	.mebody{
		background: #f5f4f9;
		.AllDurg{
			background: #f5f4f9;
			.mailogo{
				padding:150px 110px 30px;
				img{
					width: 100%;
				}
			}
			.success{
				width: 100%;
				text-align: center;
				padding-bottom: 30px;
				font-size:16px;
				color:#666;
			}			
		}
		.share{
			width: 90%;
			padding:10px 0;
			background: #f08c34;
			margin-left: auto;
			margin-right: auto;
			border-radius: 10px;
			text-align: center;
			font-size:16px;
			color:#fff;
			margin-bottom: 100px;
		}
		
	}
	
</style>





8873 2938 3605 2669 04








