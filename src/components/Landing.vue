<template>
	<div class="maincontent">
		<meta name="viewport" content="width=device-width, initial-scale=1" /> 
		<div class="topnav">
			 <img class="bitesizelogo" src="@/assets/bitesize.png">
		
			 	<div class="menutoggle">
					<img @click="btnactive(activengaba)" src="@/assets/menu.png">
				</div>
			
			<div class="items" v-bind:class="isActive" id="myTopnav">
					<img @click="btnclose(close)" class="btnclosedt" src="@/assets/close.png">
						
					
					<router-link to="/"> 			 <a class="active">Home</a> 	</router-link>
					<router-link to="/portfolio">  	 <a >Portfolio</a>				</router-link>
					<router-link to="/service">   	 <a>Service</a>				</router-link>
					<router-link to="/about">  		 <a >About</a>					</router-link>
					<router-link to="/contact"> 	 <a >Contact</a>				</router-link>
		
			</div>
			
		</div>
		<div class="content">
				<a class="bite">BITE</a> 
				<a class="size">SIZE</a>
				<br> <a class="bs">BITESIZE DIGITAL GROUP INC.</a>	
		</div>
		<div class="content2">
				<a class="bite2">BITE</a> 
				<a class="size2">SIZE</a>
				<br> <a class="bs2">BITESIZE DIGITAL GROUP INC.</a>	
		</div>
			<div class="footer1">
			 <img class="addr" src="@/assets/addr.png">	<a class="addrtxt">Cebu City,Cebu, Philippines</a>
			 </div> 
			 <div class="footer2">
			 <img class="phone" src="@/assets/phone.png">	<a class="phonetxt">+639-17-325-6639</a>
			 </div> 	
			 <div class="footer3">
			 <img class="email" src="@/assets/email.png">	<a class="emailtxt"> bitesizedigitalgroup@gmail.com </a>
			 </div> 	
	
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
.formenu{
	display: none;
}
.footer{

}
.footer1{
	 	position: fixed;
 	bottom: 50px;
 	  display: inline-block;
	margin-left: 100px;
}
.footer2{
	 	position: fixed;
 	bottom: 50px;
 	  display: inline-block;
	margin-left: 570px;
}
.footer3{
	 	position: fixed;
 	bottom: 50px;
 	  display: inline-block;
	margin-left: 950px;
}
.addr{
	height: 30px;
	width: 30px;
margin-bottom: -5px;
}
.addrtxt{
	font-family: Corbel;
	font-size: 20px;

	color: #fff;
}
.phone{
	height: 30px;
	width: 30px;
	margin-bottom: -5px;
}
.phonetxt{
	font-family: Montserrat;
	font-size: 20px;
	
	color: #fff;
}
.email{
	height: 30px;
	width: 30px;
	margin-bottom: -10px;
}
.emailtxt{
	font-family: Corbel;
	font-size: 20px;

	color: #fff;
	bottom: 10px;
}
.bs{
	margin-left:400px;
	font-family: Corbel;
	font-size: 30px;
		font-weight: bold;
		color: #03597A;
}
.content{
	margin-top: 50px;
	text-align: center;

}
.bite{
	font-family: Corbel;
	font-size: 200px;
	font-weight: bold;
	color: #fff;
}
.size{
	font-family: Corbel;
	font-size: 200px;
	font-weight: bold;
	color: #fff;
	  -webkit-text-fill-color: #34A1CB;
	-webkit-text-stroke: 5px white;
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
.content{
	margin-left: -25px;
	margin-top: -70px !important; 
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

.items{
	position: absolute;
	width: 70%;
	height: 100%;
	top: -30px;
	left: -100%;
	background-color: #0079a8;
	transition: 0.5s;
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
.content2{
	display: block;
	margin-top: 50px !important;
}
.bite2{
	font-family: Corbel;
	font-size: 150px;
	font-weight: bold;
	color: #fff;
	margin-left: 65px;
	
}
.size2{
	margin-left: 65px;
	font-family: Corbel;
	font-size: 150px;
	font-weight: bold;
	color: #fff;
	margin-top: -20px !important;
	  -webkit-text-fill-color: #34A1CB;
	-webkit-text-stroke: 1px white;
}
.bs2{
		margin-left:80px;
	font-family: Corbel;
	font-size: 20px;
		font-weight: bold;
		color: #03597A;
}
}
</style>