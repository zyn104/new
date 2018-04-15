<template>		
	<div class="mebody">
		<mt-header fixed title="账户设置">		  	
		    	<mt-button icon="back" slot="left" @click="returns"></mt-button>
		    	<mt-button icon="more" slot="right"></mt-button>		  	
		</mt-header>
		<div class="tuijian">
			<div class="img"><img src="../img/tuijian_03.png"/></div>
			<p class="number">邀请码:<span>2345</span></p>
			<div class="address">
				<img src="../img/merlogo_03.png"/>
				<p>推荐地址</p>				
			</div>
			<div class="url">http://123.56.102.141/hlc/webapp/index</div>
			<div class="TJ">推荐</div>
		</div>
		
		
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
		.tuijian{
			background: #f5f4f9;
			.img{				
				padding:100px 50px 50px;
				img{
					width:100%;
				}
			}
			.number{
				width: 100%;
				text-align: center;
				color:#333;
				font-size:16px;
			}
			.address{
				display: -webkit-flex;
				display:flex;
				padding:0 20px;
				margin-bottom: 10px;
				img{
					width: 5%;
					height: 5%;
				}
				p{
					margin:0;
					font-size:14px;
					color:#999;
					padding-left:5px;
				}				
			}
			.url{
				line-height: 3;
				border:1px #dcdcdc solid;
				background: #eee;
				width: 85%;
				margin-right: auto;
				margin-left: auto;
				font-size:12px;
				padding:0 5px;
				text-align: center;
				color:#118df0;
				margin-bottom: 30px;
			}
			.TJ{
				line-height: 3;
				border:1px #dcdcdc solid;
				background: #f08c34;
				width: 80%;
				margin-right: auto;
				margin-left: auto;
				font-size:14px;
				text-align: center;
				color:#fff;
				border-radius: 8px;
				margin-bottom: 100px;
			}
		}
		
	}
	
</style>














