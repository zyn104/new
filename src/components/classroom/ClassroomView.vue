<template>
		
	<div class="body">
		<mt-header fixed title="健康百科">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		</mt-header>
		
		<!--tab-->
		<div>
			<mt-navbar v-model="selected">
			  	<mt-tab-item id="1">最新资讯</mt-tab-item>
			  	<mt-tab-item id="2">健康专题</mt-tab-item>
			  	<mt-tab-item id="3">个人收藏</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<!--最新资讯-->
			  	<mt-tab-container-item id="1" class="News">
			    	<ul>
			    		<li>
			    			<h3>乙肝的共识和误区（上）</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special">专题</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>乙肝的共识和误区（上）</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special">专题</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>乙肝的共识和误区（上）</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special green">专题</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>乙肝的共识和误区（上）</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special">专题</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>乙肝的共识和误区（上）</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special">专题</p>
			    				</div>
			    			</div>
			    		</li>
			    	</ul>
			  	</mt-tab-container-item>
			  	
			  	
			  	<!--健康专题-->
			  	<mt-tab-container-item id="2" class='News health'>
			    	<ul>
			    		<li>
			    			<h3>【专题】男性&女性</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special timer">2014-08-13</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>【专题】男性&女性</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special timer">2014-08-13</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>【专题】男性&女性</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special timer">2014-08-13</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>【专题】男性&女性</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special timer">2014-08-13</p>
			    				</div>
			    			</div>
			    		</li>
			    		<li>
			    			<h3>【专题】男性&女性</h3>
			    			<div class="newconsult">
			    				<div class="newconsult-logo"><img src="../img/apply_03.png" alt="乙肝的共识和误区（上）"/></div>
			    				<div class="newconsult-fonts">
			    					<p class="duo">两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    					<p class="special timer">2014-08-13</p>
			    				</div>
			    			</div>
			    		</li>
			    	</ul>
			  	</mt-tab-container-item>
			  	
			  	
			  	<!--个人收藏-->
			  	<mt-tab-container-item id="3" class="personal-collection">
			    	<div>
			    		<img src="../img/shou_03.png"/>
			    	</div>
			  	</mt-tab-container-item>
			</mt-tab-container>
		</div>
		
	</div>
	
</template>

<script>
	export default {
	  data(){
			return {
				selected:"1"
			}
		}
	}
</script>

<style lang="less">
	.body{		
		background: #ecf1f0;
	}
	.mint-navbar{
		background: #fff;
		border-bottom: 1px #c4c9cc solid;
		.mint-tab-item{
			margin-left:0;			
			color:#6e7b86;
			padding:10px 0;
			.mint-tab-item-label{
				font-size:16px;
				line-height: 2;
				font-weight: 600;
				font-family: verdana;
			}
		}
		.mint-tab-item.is-selected{
			color:#f08c34;
			border-bottom: none;
		}
	}
	.News{
		ul{
			padding-left: 0;
			padding:0 10px;
			margin:0;
			li{
				list-style:none;
				padding-bottom: 15px;
				border-bottom: 1px #d4dadc solid;
			}
			li{
				h3{
					font-size:16px;
					color:#333;
					font-weight: 600;
					line-height: 1.5;
				}
				.newconsult{
					display:-webkit-flex;
					display:flex;
					.newconsult-logo{
						width:30% ;
						img{
							width: 100%;
						}
					}
					.newconsult-fonts{
						width: 70%;
						position: relative;
						p{
							margin:0;
							font-size:14px;
						}
						.duo{
							padding-left: 10px;
							line-height: 1.4;
						}
						.special{
							position: absolute;
							bottom: 0;
							right:0;
							font-size:12px;
							background: #f08c34;
							color:#fff;
							padding:2px 10px;
						}
						.green{
							background: limegreen;
						}
					}
				}
			}
		}
	}
	.health{
		background: #F5F5F5;
		ul{
			padding:0;
			li{
				padding:0 10px 15px;
				background: #fff;
				margin-top:15px;
				margin-bottom: 15px;
				border-top:1px #d4dadc solid;
				h3{
					padding:10px 0 5px;
					margin:0;
					color:#333;
				}
				.newconsult{
					.newconsult-fonts{
						.duo{
							color:#4c504f;
						}
						.timer{
							background: #fff;
							color:#8c8c8c;
						}
					}
				}
				
			}
		}
	}
	.personal-collection{
		background: #f5f5f5;
		height: 800px;
		div{
			width: 50%;
			margin-top:50px;
			margin-left: auto;
			margin-right:auto;
			img{
				width: 100%;
			}
		}
	}


















</style>