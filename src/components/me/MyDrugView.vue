<template>		
	<div class="mebody">
		<mt-header fixed title="进药申请">		  	
		    	<mt-button icon="back" slot="left" @click="returns"></mt-button>
		    	<mt-button icon="more" slot="right"></mt-button>		  	
		</mt-header>
		<div class="tuijian">
			<ul>
				<li>
					<div class="drug"><img src="../img/drug_03.png"/></div>
					<div class="fonts">
						<h6>白云山伤风感冒胶囊</h6>
						<p class="mtimer">购买时间：<span>2015-12-15</span>两个疗程</p>
						<div class="dtimer">药品疗程：
							<div class="car">
								<span>-</span>
								<input type="text" value="2">		
								<span class="green">+</span>
							</div>
						</div>
					</div>
				</li>
				<li class="merry">
					<div>总价：<span>￥800.45</span></div>
					<router-link to="/MybuysuccessView">
						<button>确认</button>
					</router-link>
				</li>
			</ul>
			<ul>
				<li>
					<div class="drug"><img src="../img/drug_03.png"/></div>
					<div class="fonts">
						<h6>白云山伤风感冒胶囊</h6>
						<p class="mtimer">购买时间：<span>2015-12-15</span>两个疗程</p>
						<div class="dtimer">药品疗程：
							<div class="car">
								<span>-</span>
								<input type="text" value="2">		
								<span class="green">+</span>
							</div>
						</div>
					</div>
				</li>
				<li class="merry">
					<div>总价：<span>￥800.45</span></div>
					<router-link to="/MybuysuccessView">
						<button>确认</button>
					</router-link>
				</li>
			</ul>
			<ul>
				<li>
					<div class="drug"><img src="../img/drug_03.png"/></div>
					<div class="fonts">
						<h6>白云山伤风感冒胶囊</h6>
						<p class="mtimer">购买时间：<span>2015-12-15</span>两个疗程</p>
						<div class="dtimer">药品疗程：
							<div class="car">
								<span>-</span>
								<input type="text" value="2">		
								<span class="green">+</span>
							</div>
						</div>
					</div>
				</li>
				<li class="merry">
					<div>总价：<span>￥800.45</span></div>
					<router-link to="/MybuysuccessView">
						<button>确认</button>
					</router-link>
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
		.tuijian{
			background: #f5f4f9;
			padding-top:50px;
			ul{
				margin:0;
				padding-left:10px;
				background: #fff;
				border-top:1px #e1e1e1 solid;
				border-bottom: 1px #e1e1e1 solid;
				margin-bottom: 10px;
				.merry{
					border-bottom: none;
					position: relative;
					margin-bottom: 15px;
					padding-bottom: 0;
					div{
						font-size:16px;
						color:#000;
						line-height: 2.5;
						span{
							color:red;
							font-size:18px;
						}
					}
					button{
						position: absolute;
						right:15px;
						top:15px;
						border:none;
						outline:none;
						background: #f08c34;
						border-radius: 20px;
						color:#fff;
						font-size:14px;
						padding:8px 20px;
					}
				}
				li{
					margin:0;
					display: -webkit-flex;
					display: flex;
					padding:10px 0 15px 0;
					border-bottom: 1px #e1e1e1 solid;
					background: #fff;
					.drug{
						width: 30%;
						img{
							width: 100%;
						}
					}
					.fonts{
						width: 70%;
						padding-left:10px;
						h6{
							margin:0;
							font-size:14px;
							color:#333;
							line-height: 2;
						}
						.mtimer{
							margin:0;
							margin-bottom: 10px;
							font-size: 12px;
							color:#666;
						}
						.dtimer{
							font-size:12px;
							display: -webkit-flex;
							display:flex;
							.car{
								display: -webkit-flex;
								display:flex;
								border:1px #ccc solid;
								font-weight: 600;
								span{
									padding:0 5px;
									font-size:16px;
								}
								.green{
									color:#089808;
								}
								input{
									width: 20px;
									border:none;
									outline: none;
									border-left:1px #ccc solid;
									border-right:1px #ccc solid;
									text-align: center;
									
								}
							}
						}
					}
				}
			}
		}
		
	}
	
</style>














