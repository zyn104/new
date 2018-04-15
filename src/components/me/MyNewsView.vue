<template>
		
	<div class="mebody">
		<mt-header fixed title="医生档案">		  	
		    <mt-button icon="back" slot="left" @click="returns"></mt-button>
		    <mt-button icon="more" slot="right"></mt-button>		  	
		</mt-header>
		<div class="myself-news">
			<ul class="ulone">
				<li>
					<div class="head-photo">头像</div>
					<div class="MHP"><img src="../img/me_03.png"/></div>
					<div class="go">&gt;</div>
				</li>
				<li class="myname">
					<div class="head-photo">姓名</div>
					<div class="MHP name">张大大</div>
					<div class="go">&gt;</div>
				</li>
				<li class="nicheng">
					<div class="head-photo">昵称</div>
					<div class="MHP name">静雅居士</div>
					<div class="go">&gt;</div>
				</li>
				<li>
					<div class="head-photo">性别</div>
					<div class="MHP name">男</div>
					<div class="go">&gt;</div>
				</li>
				<li class="myday">
					<div class="head-photo">出生年月</div>
					<div class="MHP name">1989.12.12</div>
					<div class="go">&gt;</div>
				</li>
				<li class="keep">
					<button>保存</button>
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
		.myself-news{
			background: #f5f4f9;
			padding-top:55px;
			.ulone{
				padding:0;
				margin:0;
				.myname{
					border-top:none;
					border-bottom: none;
				}
				.nicheng{
					margin-bottom: 15px;
				}
				.myday{
					margin-bottom:15px;
				}
				.keep{					
					padding:0 10px;
					button{
						border:none;
						outline: none;
						background: #F08C34;
						width:100% ;
						line-height: 2;
						color:#fff;	
						border-radius: 8px;				
					}
				}
				li{
					display: -webkit-flex;
					display:flex;
					list-style:none;
					background: #fff;
					padding:0 10px;
					border-top:1px #e5e5e5 solid;
					border-bottom:1px #e5e5e5 solid;
					.head-photo{
						width: 65%;
						color:#333;
						line-height: 4.5;
					}
					.MHP{
						width: 25%;
						text-align: right;
						img{
							width: 80%;
							margin:8px 0 10px;
						}
					}
					.name{
						color:#777777;
						font-size:16px;
						line-height: 4.5;
					}
					.go{
						width: 10%;
						line-height: 3;
						text-align: right;
						font-size:24px;
						color:#cacaca;
					}
				}
			}
		}
		
	}
	
</style>














