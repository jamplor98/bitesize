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
				<router-link to="/portfolio">  	 <a class="active">Portfolio</a>				</router-link>
				<router-link to="/service">   	 <a >Service</a>				</router-link>
				<router-link to="/about">  		 <a >About</a>					</router-link>
				<router-link to="/contact"> 	 <a >Contact</a>				</router-link>
			</div>
		</div>
				<div class="content">
				<a class="bite">BITE</a> 
				<a class="size">SIZE</a>
				<br> <a class="bs">BITESIZE DIGITAL GROUP INC.</a>	
		</div>
		<div class="title">
				<h1 class="titlep">PORTFOLIO</h1> 
				<div class="catnav"> <p class="catnavinside"> </p></div>
				</div>
			<div class="category">
				<ul class="nav" >
						<router-link to="/portfolio">	<li>Show All</li> </router-link>
				<router-link to="/web">	<li>Web Applications</li> </router-link>
				<router-link to="/mobile"><li>Mobile Applications</li> </router-link>
				<router-link to="/game">	<li>Games</li> </router-link>
					
				</ul>
			

		</div>
		<div class="pics">
				<div class="slidecontainer">
				<div class="imagecontainer">
							
								 <carousel-3d>
								    <slide :index="0" class="carousel">
								      <img  class="mc" src="@/assets/mobile2.png">
								    </slide>
								    <slide :index="1" class="carousel ">
								       <img  class="mc"  src="@/assets/mobile3.png">
								    </slide>
								     
								     <slide :index="2" class="carousel">
								     	  <img  class="mc" src="@/assets/mobile4.png">	
								    </slide>

								     <slide :index="3" class="carousel">
								     	  <img   class="mc"src="@/assets/mobile5.png">	
								    </slide>
							   
								  </carousel-3d>

						</div>
				</div>
		</div>
	
 </div>
</template>
<script type="text/javascript"></script>
<style scoped>
body{
	font-family: Montserrat;
	margin:0;
	width: 100%;

}
.mc{
		height: 300px;
		width: 250px;
		margin-left: 50px;
}

.slidecontainer{
	display: block;
	width: 1200px;
	height: 410px;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	text-align: center;
	/*background-color: #000;
	z-index: -1;*/
}
.imagecontainer{
	margin-top: 50px;
	width: 1200px;
	height: 400px;	
	position: relative;	
	transition: left 2s;
	-webkit-transition: left 2s;
	-moz-transition: left 2s;
	-o-transition: left 2s;
	margin-left: 
	/*background-color: red;
		z-index: -1;*/
}
.carousel{
	background-color: #fff;
	border-style: none;
	width: 500px  !important;
	height: 400px !important;
	margin-left: -50px;

	/*z-index: 0;*/

}
.catnav{
	margin-top: -20px;
	margin-left: 130px;
	width: 830px;
	height: 3px;
	background-color: #fff;
}
.catnavinside{
	margin-left: 400px;
	width: 250px;
	height: 3px;
	background-color: #707070;
}
hr{
	width: 60%;
	float: left;
	margin-left: 130px;
}
.nav{
	margin-left: 30px;
	 text-align: center;
	list-style-type: none !important;

}
.nav li{
	font-family: Montserrat;
	 display: inline-block;
  font-size: 15px;
  margin-left: 100px;
  color: white;
}
.category{
	display: inline-block ;
}
.titlep{
	font-family: Montserrat;
	font-size: 50px;
	font-weight: normal !important;
	margin-left: 130px;
	color: #fff;
}
.pics{
	background-color: #fff !important;
	height: 415px;

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
.content{
	display: none;
}
/*--------------------------------------------------------------------------------------------------*/
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
	display: block !important;
	text-align: center;
	margin-top: -70px !important; 
}
.footer1{
	display: none;
}

/*navbar pls dont touch*/
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

.category{
	display: block;
	margin-left: -60px;
}
.nav li{
		font-size: 10px;
		margin-left: 10px;
	
}
.catnav{
	margin-top: 20px;
	display: block;
	width: 80%;
	margin-left: 50px;
}
.catnavinside{
	margin-left: 170px;
	width: 110px;
	height: 3px;
	background-color: #707070;
}
.pics{
	display:block;
	width: 100%;
	height: 150px;
	margin-top: 50px;
}
.slidecontainer{
	width: 100%;
	height: 150px;
	

}
.imagecontainer{
	width: 100%;
	height: 150px;
	margin-top: -20px;

	background-color: #34A1CB;
}
.carousel{
	background-color: #34A1CB;
	border-style: none;
	width: 200px  !important;
	height: 150px !important;
	margin-left: 85px;
		display: block;

}
.mc{
		height: 150px;
		width: 100px;
		margin-left: 50px !important;

}
.titlep{
	text-align: center !important;
	font-size: 30px;
	margin-right: 160px;
	margin-top: 40px !important;

}
}
</style>