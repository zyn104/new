<template>
		
	<div class="mebody">
		<mt-header title="账户设置">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		</mt-header>
		
		<div class="mynews">
			<div class="myphoto">
				<router-link to="/MyMachineView">
					<img src="../img/me_03.png"/>
				</router-link>
			</div>
			<div class="number">
				<p>13920484929</p>
				<p>三聚药业</p>
			</div>
			<div class="QR-Code">
				<router-link to="/MyScanCodeView">
					<img src="../img/me_06.png"/>
				</router-link>	
			</div>
		</div>
		
		<div class="myall">	
			<ul class="ul-one ul-bottom">
				<router-link to='/MyNewsView'>
					<li class="liebiao">					
						<div class="menews-logo"><img src="../img/melogo_03.png"/></div>
						<div class="menews-fonts"><p>个人信息</p></div>
						<div class="more">&gt;</div>
					</li>
				</router-link>
				<router-link to='/MyAttentionView'>
					<li class="liebiao follow">					
						<div class="menews-logo"><img src="../img/melogo_06.png"/></div>
						<div class="menews-fonts"><p>我的关注</p></div>
						<div class="more">&gt;</div>					
					</li>
				</router-link>
				<router-link to='/MyRecommendView'>
					<li class="liebiao recommended-drugstore">
						<div class="menews-logo"><img src="../img/melogo_08.png"/></div>
						<div class="menews-fonts"><p>推荐药店</p></div>
						<div class="more">&gt;</div>
					</li>
				</router-link>
			</ul>
			<ul class="ul-one ul-two">
				<router-link to='/MyDrugView'>
					<li class="liebiao apply">
						<div class="menews-logo"><img src="../img/melogo_10.png"/></div>
						<div class="menews-fonts"><p>进药申请</p></div>
						<div class="more">&gt;</div>
					</li>
				</router-link>
				<li class="liebiao follow">
					<div class="menews-logo"><img src="../img/melogo_12.png"/></div>
					<div class="menews-fonts"><p>设置</p></div>
					<div class="more">&gt;</div>
				</li>
			</ul>
		</div>
		
	</div>
	
</template>

<script>

</script>

<style lang="less">
	.mebody{
		background: #f5f4f9;
		.mynews{
			margin:15px 0 15px;
			border-top:1px #e5e5e5 solid;
			border-bottom:1px #e5e5e5 solid;
			padding:10px 15px 15px;
			background:#fff;
			display: -webkit-flex; /* Safari */
		  	display: flex;
		  	.myphoto{
				width: 20%;
				img{
					width: 100%;
				}
			}	
			.number{
				width: 65%;
				text-indent: 20px;
				p{
					margin:5px 0;
					font-size:14px;
				}
			}
			.QR-Code{
				width: 15%;
				img{
					width: 100%;
				}
			}
		}
		.myall{
			border-top:1px #e5e5e5 solid;		
			background:#f5f4f9;
			ul{
				padding-left:0;
		  		margin:0;
		  		background: #fff;
		  		padding:10px 15px;
		  		li{
		  			list-style:none;
		  			border-bottom: 1px #e5e5e5 solid;
		  			padding-bottom: 5px;
		  		}
			}
		  	.ul-one{
		  		margin-bottom: 15px;
		  		a{
		  			text-decoration: none;
		  		}
		  		.liebiao{		  			
					display: -webkit-flex; /* Safari */
				  	display: flex;
				  	.menews-logo{
				  		width: 10%;
				  		img{
				  			width:100%;
				  		}				  		
				  	}
				  	.menews-fonts{
				  		width: 80%;
				  		p{
				  			margin:0;
				  			line-height: 2;
				  			font-size:14px;
				  			text-indent:10px;
				  			color:#000;
				  		}
				  	}
				  	.more{
				  		width: 10%;
				  		text-align: right;
				  		font-size:20px;
				  		color:#cacaca;
				  	}
		  		}
		  		.follow{
		  			padding-top:10px;
		  		}
		  		.recommended-drugstore{
		  			padding-top:10px;
		  			border-bottom: none;
		  		}		  			  		
		  	}
		  	.ul-two{
		  		border-top:1px #e5e5e5 solid;
		  	}
		  	.ul-bottom{
		  		margin-bottom: 15px;
		  		border-bottom:1px #e5e5e5 solid;
		  	}
		}
	}
	
	
</style>














