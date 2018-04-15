<template>
	
	<div>
		<mt-header fixed title="销售记录">
			<mt-button slot="right"><span class="details">+</span></mt-button>
		</mt-header>
		
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../img/banner_02.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../img/lu.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../img/mg.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div>
			<mt-navbar v-model="selected">
			  	<mt-tab-item id="1" class="tabweek">本周</mt-tab-item>
			  	<mt-tab-item id="2" class="history tabweek">历史</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<!--本周-->
			  	<mt-tab-container-item id="1">
			    	<ul class="week">
			    		<li>
			    			<div class="img"><img src="../img/tab_03.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周四</span>2015.6.23</p>
			    				<p class="line"></p>
			    			</div>
			    			<div class="shu">30盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周三</span>2015.6.22</p>
			    				<p class="line3"></p>
			    			</div>
			    			<div class="shu changecolor">65盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周二</span>2015.6.21</p>
			    				<p class="line3 line2"></p>
			    			</div>
			    			<div class="shu changecolor">58盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周一</span>2015.6.20</p>
			    				<p class="line3 line1"></p>
			    			</div>
			    			<div class="shu changecolor">87盒<span>&gt;</span></div>
			    		</li>
			    	</ul>
			  	</mt-tab-container-item>
			  	<!---->
			  	
			  	
			  	<!--历史-->
			  	<mt-tab-container-item id="2">
			    	<ul class="week">			    		
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周日</span>2015.6.22</p>
			    				<p class="line3 history1"></p>
			    			</div>
			    			<div class="shu changecolor">30盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周六</span>2015.6.22</p>
			    				<p class="line3 history2"></p>
			    			</div>
			    			<div class="shu changecolor">65盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周五</span>2015.6.21</p>
			    				<p class="line3 history3"></p>
			    			</div>
			    			<div class="shu changecolor">58盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周四</span>2015.6.20</p>
			    				<p class="line3 history4"></p>
			    			</div>
			    			<div class="shu changecolor">87盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周三</span>2015.6.20</p>
			    				<p class="line3 history5"></p>
			    			</div>
			    			<div class="shu changecolor">105盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周二</span>2015.6.20</p>
			    				<p class="line3 history6"></p>
			    			</div>
			    			<div class="shu changecolor">87盒<span>&gt;</span></div>
			    		</li>
			    		<li>
			    			<div class="img"><img src="../img/tab_06.png"/></div>
			    			<div class="times">
			    				<p class="four"><span>周一</span>2015.6.20</p>
			    				<p class="line3 history6"></p>
			    			</div>
			    			<div class="shu changecolor">36盒<span>&gt;</span></div>
			    		</li>
			    	</ul>
			  	</mt-tab-container-item>
			  	<!---->
			  	
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
	
	.details{
		font-size:22px;
	}
	.banner{
		height: 180px;
		margin-top:50px;
	}
	.mint-header-title{
		font-size:16px;
	}
	.mint-swipe-items-wrap > div img{
		width:100%;
		height: 100%;
	}
	.mint-navbar{
		display: -webkit-flex; /* Safari */
	  	display: flex;
	  	justify-content: center;
	  	border-bottom: 1px #e1e1e1 solid;
	  	margin-bottom: 10px;
	  	.tabweek{
			color:#000;
			width:50%;
		    margin-left:55px;	    
		    text-decoration: none;		
		}
		.history{
			margin-right:55px;
		}
	}
	.mint-tab-item-label{
		font-size:14px;
		font-family: "微软雅黑";
		padding:0 10px;
	}
	.mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 2px solid #6dba42; 
	    color: #6dba42;
	    margin-bottom: 0px;
	}
	.mint-tab-container-item .week{
		padding:0 1.5rem;
	}
	.mint-tab-container-item .week li{
		list-style:none;
		display: -webkit-flex; /* Safari */
	  	display: flex;
	  	border-bottom: 1px #e1e1e1 solid;
	  	margin-bottom: 10px;
	}
	.mint-tab-container-item .week li .img{
		width: 15%;
	}
	.mint-tab-container-item .week li .times{
		width:65%;
		text-indent: 16px;
	}
	.mint-tab-container-item .week li .times .four{
		margin:0;
		color:#666;
		font-size:12px;
		margin-bottom: 10px;
	}
	.mint-tab-container-item .week li .times .four span{
		font-size:16px;
		color:#333;
		margin-right:16px;
	}
	.mint-tab-container-item .week li .times .line{
		width: 30%;
		height: 6px;
		background: #ff6b3d;
		margin-left:16px;
		border-radius: 20px;
	}
	.mint-tab-container-item .week li .times .line3{
		width: 50%;
		height: 6px;
		background: #cdcdcd;
		margin-left:16px;
		border-radius: 20px;
	}
	.mint-tab-container-item .week li .times .line2{
		width: 40%;
	}
	.mint-tab-container-item .week li .times .line1{
		width: 40%;
	}
	.mint-tab-container-item .week li .shu{
		width:25%;
		text-align: right;
		font-size:14px;
		color:#f08c34;
	}
	.mint-tab-container-item .week li .shu span{
		font-size:22px;
		color:#ccc9c9;
		margin-left:5px;
	}
	.mint-tab-container-item .week li .changecolor{
		color:#666;
	}
	.mint-tab-container-item .week li .img img{
		width: 100%;
	}
	.mint-tab-container-item .week li .times .history1{
		width: 30%;
	}
	.mint-tab-container-item .week li .times .history2{
		width: 50%;
	}
	.mint-tab-container-item .week li .times .history3{
		width: 40%;
	}
	.mint-tab-container-item .week li .times .history4{
		width: 70%;
	}
	.mint-tab-container-item .week li .times .history5{
		width: 85%;
	}
	.mint-tab-container-item .week li .times .history6{
		width: 70%;
	}
	
	
	
	
	
	
	
	
	
	
	
	
</style>