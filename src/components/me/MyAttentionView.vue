<template>		
	<div class="mebody">
		<mt-header fixed title="我的关注">		  	
		    	<mt-button icon="back" slot="left" @click="returns"></mt-button>
		    	<mt-button icon="more" slot="right"></mt-button>		  	
		</mt-header>
		<div class="myself-news">
			<ul>
				<li>
					<div class="img"><img src="../img/mythree_03.png"/></div>
					<div class="fonts">
						<h6>老吃太饱真会撑出十种甲方姜</h6>
						<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
						<span>2015.05.01</span>
					</div>										
				</li>
				<li>
					<div class="img"><img src="../img/mythree_06.png"/></div>
					<div class="fonts">
						<h6>老吃太饱真会撑出十种甲方姜</h6>
						<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
						<span>2015.05.01</span>
					</div>										
				</li>
				<li>
					<div class="img"><img src="../img/mythree_09.png"/></div>
					<div class="fonts">
						<h6>老吃太饱真会撑出十种甲方姜</h6>
						<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
						<span>2015.05.01</span>
					</div>										
				</li>
				<li>
					<div class="img"><img src="../img/mythree_13.png"/></div>
					<div class="fonts">
						<h6>老吃太饱真会撑出十种甲方姜</h6>
						<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方...</p>
						<span>2015.05.01</span>
					</div>										
				</li>
			</ul>
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
		.myself-news{
			background: #f5f4f9;
			padding-top:55px;
			ul{
				margin:0;
				padding:0;
				li{
					display: -webkit-flex;
					display:flex;
					list-style:none;
					background: #fff;
					padding:10px;
					border-top:1px #e5e5e5 solid;
					border-bottom:1px #e5e5e5 solid;
					margin-bottom: 15px;
					.img{
						width: 30%;
						img{
							width: 100%;
						}
					}
					.fonts{
						width: 70%;
						padding-left: 10px;
						position: relative;
						h6{
							margin:0;
							font-size:15px;
							color:#222;
							line-height: 1.5;
						}
						p{
							margin:0;
							color:#626368;
							line-height: 1.3;
							font-size:14px;
						}
						span{
							position: absolute;
							bottom:0;
							right:2px;
							font-size:12px;
							color:#999;
						}
					}
				}
			}
		}
		
	}
	
</style>














