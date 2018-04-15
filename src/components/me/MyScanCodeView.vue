<template>		
	<div class="mebody">
		<mt-header fixed title="扫码进药">		  	
		    	<mt-button icon="back" slot="left" @click="returns"></mt-button>
		    	<mt-button icon="more" slot="right"></mt-button>		  	
		</mt-header>
		<div class="tuijian">
			<ul>
				<li>
					<div class="drug"><img src="../img/scan_03.png"/></div>
					<div class="fonts">
						<h6>范佳盈<span>副主任医师</span></h6>
						<p class="mtimer">中国人民解放军第四--医院</p>						
					</div>
				</li>
				
			</ul>
			
			<ul class="Newss">
				<li>
					<div class="names">姓名：<span>陆远飞</span></div>
					<div class="sex">性别：<span>男</span></div>
				</li>
				<li>
					<div class="names">年龄：<span>35岁</span></div>
					<div class="sex">主治医师：<span>黄柳</span></div>
				</li>
				<li class="zytime">
					住院时间：<span>2015-01-06  15:22:02</span>
				</li>
				<li class="zytime zytnum">
					检查服务号：<span>4389012</span>
				</li>
			</ul>
			<ul class="DBanner">
				<li class="drugBanner">
					<mt-swipe :auto="4000" class="lunbo">
						<mt-swipe-item><img src="../img/scan_03 .png"/></mt-swipe-item>
						<mt-swipe-item><img src="../img/lu.jpg"/></mt-swipe-item>
						<mt-swipe-item><img src="../img/mg.jpg"/></mt-swipe-item>
					</mt-swipe>
				</li>				
			</ul>
			<ul class="Durgs">
				<li class="drugname">
					<div class="name">风热感冒颗粒</div>
					<div class="merrys"><span>￥28.50</span>￥25.00</div>
				</li>
			</ul>
			<ul class="Durgs durgdetails">
				<li class="Ddetails">药品详情</li>
				<li class="DDnames">药品名称：<span>风热感冒颗粒</span></li>
				<li class="DDnames">批准文号：<span>国药准字H20044623</span></li>
				<li class="DDnames">生产企业：<span>桓诚帮药集团有限公司</span></li>
				<li class="DDnames">规格：<span>10g*8袋</span></li>
				<li class="DDnames character">性状：<span>风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
发热，有汗，鼻塞，头痛，咽痛，咳嗽多痰。</span></li>
			</ul>
			<ul class="buydurg">
				<li>
					<img src="../img/scan_11.png"/>
					<span>去附近药店购买</span>
				</li>
				<li>
					<img src="../img/scan_14.png"/>
					<span>去附近药店购买</span>
				</li>
			</ul>
			<ul class="shopcar">
				<li class="shopname">
					<div>药品疗程</div>
					<div class="car">
						<span>-</span>
						<input type="text" value="2">		
						<span class="green">+</span>
					</div>
				</li>
				<li class="AllMerry">
					<div>总价:<span>￥800.45</span></div>
					<div class="dazhe">折扣价:<span>￥600.45</span></div>
					<router-link to="/MyAlldurgView">
						<button>确认购买</button>
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
			.Newss{
				.zytime{
					color:#666;
					padding-bottom:10px;
					margin-bottom: 10px;
				}
						
				li{
					display: -webkit-flex;
					display:flex;
					font-size:16px;
					font-weight: 500;
					border-bottom: none;
					font-family: "微软雅黑";
					.names{
						width: 60%;
						span{
							color:#f08c34;
						}
					}
					.sex{
						width: 40%;
						span{
							color:#f08c34;
						}
					}
				}
			}
			.DBanner{
				padding-left:0;
				.drugBanner{
					padding-bottom: 10px;
					padding:5px 10px 0;
					.lunbo{
						height: 180px;
						overflow: hidden;
						width: 100%;
						img{
							width: 100%;
						}
					}
				}
						
			}
			.Durgs{
				padding-top:15px;
				padding-left:0;
				margin-bottom: 10px;
				padding-bottom: 15px;
				.drugname{
					display: -webkit-flex;
					display: flex;
					padding:0 10px;
					border-bottom: none;
					.name{
						width: 60%;
						font-size:16px;
						color:#333333;
					}
					.merrys{
						width: 40%;
						font-size:16px;
						color:#ff6b3d;
						span{
							color:#c1c1c1;
							font-size:14px;
						}
					}
				}
			}
			.durgdetails{
				padding-top:0;
				.Ddetails{
					font-size:16px;
					color:#333333;
					margin-left:10px;
					padding-bottom: 10px;
					border-color:#E1E1E1;
				}
				.DDnames{
					font-size:14px;
					color:#333;
					border-bottom: none;
					margin-left:10px;
					span{
						color:#666;
					}
				}
				.character{
					padding-right:10px;
					span{
						width: 85%;
					}
				}
			}
			.buydurg{
				padding-left: 0;
				margin-bottom: 10px;
				li{
					padding:10px;
					img{
						width: 8%;
						height: 10%;
					}
					span{
						margin-left:5px;
					}
				}
			}
			.shopcar{
				.shopname{
					display: -webkit-flex;
					display: flex;
					position: relative;
					.car{
						position: absolute;
						right:10px;
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
				.AllMerry{
					border-bottom: none;
					position: relative;
					margin-bottom: 50px;
					padding-bottom: 0;
					div{
						font-size:13px;
						color:#000;
						line-height: 2.5;
						span{
							color:#ff6b3d;
							font-size:16px;
						}
					}
					.dazhe{
						margin-left:5px;
					}
					button{
						position: absolute;
						right:10px;
						top:15px;
						border:none;
						outline:none;
						background: #f08c34;
						border-radius: 20px;
						color:#fff;
						font-size:14px;
						padding:5px 10px;
					}
				}
			}
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
					padding-top:10px;
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
							font-size:18px;
							color:#333;
							line-height: 2;
							margin-bottom: 10px;
							span{
								font-size:16px;
								color:#666;
								margin-left:10px;
							}
						}
						.mtimer{
							margin:0;
							
							font-size: 13px;
							color:#666;
						}						
					}
				}
			}
		}
		
	}
	
</style>














