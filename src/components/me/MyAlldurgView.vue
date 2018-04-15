<template>		
	<div class="mebody">
		<mt-header fixed title="药品统计">		  	
		    	<mt-button icon="back" slot="left" @click="returns"></mt-button>		    			  	
		</mt-header>
		<div class="AllDurg">
			<ul>
				<li class="allname">
					<div class="DurgName">云南白药 创可贴 轻巧透气型</div>
					<div class="DurgNumber">50盒<span>^</span></div>
				</li>
				<li class="photoname">
					<div class="photo"><img src="../img/alldrug_03.png"/></div>
					<div class="DurgName">薛景轩</div>
					<div class="DurgNumber">10盒</div>
				</li>
				<li class="photoname">
					<div class="photo"><img src="../img/alldrug_06.png"/></div>
					<div class="DurgName">艾伊</div>
					<div class="DurgNumber">5盒</div>
				</li>
				<li class="photoname">
					<div class="photo"><img src="../img/alldrug_03.png"/></div>
					<div class="DurgName">薛景轩</div>
					<div class="DurgNumber">10盒</div>
				</li>
				<li class="photoname">
					<div class="photo"><img src="../img/alldrug_03.png"/></div>
					<div class="DurgName">景轩</div>
					<div class="DurgNumber">15盒</div>
				</li>
				<li class="allname">
					<div class="DurgName hui">云南白药 创可贴 轻巧透气型</div>
					<div class="DurgNumber">50盒<span>^</span></div>
				</li>
				<li class="allname">
					<div class="DurgName hui">云南白药 创可贴 轻巧透气型</div>
					<div class="DurgNumber">50盒<span>^</span></div>
				</li>
				<li class="allname">
					<div class="DurgName hui">云南白药 创可贴 轻巧透气型</div>
					<div class="DurgNumber">50盒<span>^</span></div>
				</li>
				<li class="allname">
					<div class="DurgName hui">云南白药 创可贴 轻巧透气型</div>
					<div class="DurgNumber">50盒<span>^</span></div>
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
		.AllDurg{
			background: #f5f4f9;
			padding-top:50px;
			ul{
				margin:0;
				padding:0;
				background: #fff;
				border-top:1px #e1e1e1 solid;
				border-bottom: 1px #e1e1e1 solid;
				li{
					background: #fff;
					margin:0;
					list-style:none;
					display: -webkit-flex;
					display: flex;
					padding:0 10px;
					border-bottom: 1px #e1e1e1 solid;
					
				}
				.photoname{
					margin:0 10px;
					padding:10px 0;
					.photo{
						width: 20%;
						img{
							width: 70%;
						}
					}
					.DurgName{
						width:50%;
						line-height: 2.5;
					}
					.DurgNumber{
						width: 30%;
						text-align: right;
						line-height: 2.5;
						color:#666;
					}
				}
				.allname{
					padding:20px 10px;
					.DurgName{
						width:70%
					}
					.hui{
						color:#666;
					}
					.DurgNumber{
						position: relative;
						text-indent: 40px;
						span{
							color:#ccc;
							font-size:20px;
							position: absolute;
							top:0;
							right:0;
						}
					}
					.DurgNumber{
						width: 30%;
						/*text-align: right;*/
						color:#f08c34
					}
				}
			}
		}
		
	}
	
</style>














