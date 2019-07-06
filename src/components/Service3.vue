<template>
	<div class="maincontent">
		<div class="topnav">
			 <img class="bitesizelogo" src="@/assets/bitesize.png">
			  	<div class="menutoggle">
					<img @click="btnactive(activengaba)" src="@/assets/menu.png">
				</div>
			<div class="items" v-bind:class="isActive" id="myTopnav">
					<img @click="btnclose(close)" class="btnclosedt" src="@/assets/close.png">
				<router-link to="/"> 			 <a >Home</a> 					</router-link>
				<router-link to="/portfolio">  	 <a >Portfolio</a>				</router-link>
				<router-link to="/service">   	 <a   class="active"	>Service</a>				</router-link>
				<router-link to="/about">  		 <a >About</a>					</router-link>
				<router-link to="/contact"> 	 <a >Contact</a>				</router-link>
			</div>
		</div>
		<div class="content2">
				<a class="bite">BITE</a> 
				<a class="size">SIZE</a>
				<br> <a class="bs">BITESIZE DIGITAL GROUP INC.</a>	
		</div>
		<div class="content">
			 	
			 <img class="gamelogo" src="@/assets/game.png">
				 <h1 class="one">Game</h1>
			 <h1 class="two">Development</h1>
			<p class="three">Your game idea could be the next <br> most addictive  and highest income producing  <br> game in Android and IOS. Let us help you make <br> it a reality.  All we ask in return is a little credit for <br>  helping you build it.</p>

		</div>
		 <router-link to="/service2">
			<img class="nextleft" src="@/assets/next.png">
		</router-link>
		<router-link to="/service">
			<img class="nextright" src="@/assets/next.png">
		</router-link>
 </div>
</template>
<script type="text/javascript">
	export default{
		el: 'myTopnav', 
		data() {
			return{
			 isActive: '',
			}
 		
		},
		methods:{
			btnactive(activengaba){
				this.isActive= 'isActive'
		
			},
			btnclose(close){
				this.isActive = ''
			}
		}
	};
</script>
<style scoped>
body{
	font-family: Montserrat;
	margin:0;

}
.one{
	font-family: Montserrat;
	font-size: 50px;
	color: #fff;
	float: right;
	margin-right: 200px;
	margin-top: 110px;
}
.nextleft{
	transform: rotateY(180deg);
	float: left;
	margin-top: -240px;
	margin-right: 700px;
	margin-left: 120px;
}
.nextright{

	margin-top: -240px;
	float: right;
	margin-right: 100px;
}
.three{
	text-align: right !important;
	font-family: Montserrat;
	font-size: 15px;
	color: #fff;
	float: right;
	margin-right: 200px;
	margin-top: 0px;
}
.two{
	font-family: Montserrat;
	font-size: 50px;
	color: #fff;
	float: right;
	margin-right: 200px;
	margin-top: -20px;
}

.content{
	text-align: center;
}
.gamelogo{
	height: 300px;
	width: 400px;
	float: left;
	margin-left: 200px;
	margin-top: 150px;
}
.topnav {
	margin: 0px;
 	overflow: hidden;
  	background-color: #01AEF0	;
  	height: 80px;
    width: 100%;
 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.bitesizelogo{
	margin-top: 3px;
	margin-left: 100px;
	width: 70px;
	height: 75px;
}
.topnav a {
 color: #f2f2f2;
 text-transform: uppercase;
 font-size: 12px;
 font-family: Montserrat;
 margin-left: 20px;
 padding-top: 50px;
 padding-left: 10px;
 padding-bottom: 50px;
 text-decoration: none;
}
	
.topnav a:hover {

   text-decoration: underline;

}
.items{
	float:right;
	margin-top: 30px;
	margin-right: 80px;
	font-weight: bold;

}
.active{
	font-weight: bolder;
	 text-decoration: underline !important;
}

.menutoggle{
	display: none;
}
.btnclosedt{
	display: none;
}
.content2{
	display: none;
}

@media screen and (max-width: 430px){
.topnav {
	margin: 0px;
 	overflow: hidden;
  	background-color: #01AEF0	;
  	height: 80px;
    width: 100%;
 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.bitesizelogo{
	display: none;
}
.one{
	text-align: center;
	margin-top: -15px;
	font-size: 30px;
	margin-left: 20px !important;
	margin-right: 160px;
}

.bite{
	
	font-family: Corbel;
	font-size: 30px;
	font-weight: bold;
	color: #fff;
}
.size{
	
	font-family: Corbel;
	font-size: 30px;
	font-weight: bold;
	color: #fff;
	  -webkit-text-fill-color: #01AEF0;
	-webkit-text-stroke: 1px white;
}
.bs{
	margin-left:10px;
	font-family: Corbel;
	font-size: 12px;
		font-weight: bold;
		color: #03597A;
}

.two{
	text-align: center;
	font-size: 30px;
	margin-left: 30px;
	margin-right: 100px;
	margin-top: -20px;
}
.three{
	text-align: center !important;
	margin-left: 30px;
	margin-right: 30px;
}
.content2{
	display: block;
	text-align: center;	

	margin-top: -70px !important; 
}
.content{
	text-align: center;
	margin: 0px !important;
}
.footer1{
	display: none;
}
.menutoggle{
	
	float: left;
	margin-top: 20px;
	margin-left: 20px;
	cursor: pointer;
	display: block !important;
}
.menutoggle img{
	width: 30px !important;
	height: 30px !important;
	cursor: pointer;

}
.gamelogo{
	margin-top: 50px;
	width: 250px;
	height: 200px;
	float: left !important;
	margin-left: 90px;

}
.items{
	position: absolute;
	width: 70%;
	height: 100%;
	top: -30px;
	left: -100%;
	background-color: #0079a8;
	transition: 0.5s;
		z-index: 5;
}
.items.isActive{
	left:0;
}
.items a{

	display: block;
	padding: 10px !important;
}
.btnclosedt{
	width: 20px;
	height: 20px;
	margin-bottom: 10px !important;
	float: right;
	margin-right: 20px;
	margin-top: 10px;
	display: block !important;
}
.nextleft{
	margin-top: -350px;
	float: left;
	margin-left: 20px;
	width: 70px;
	height: 70px;
	z-index: -1;
}
.nextright{
	margin-top: -350px;
	float: right;
	margin-right: 20px;
	width: 70px;
	height: 70px;
}
}
</style>