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
				<router-link to="/service">   	 <a >Service</a>				</router-link>
				<router-link to="/about">  		 <a class="active" >About</a>					</router-link>
				<router-link to="/contact"> 	 <a >Contact</a>				</router-link>
			</div>
		</div>
		<div class="content2">
				<a class="bite">BITE</a> 
				<a class="size">SIZE</a>
				<br> <a class="bs">BITESIZE DIGITAL GROUP INC.</a>	
		</div>
			<div class="content" id="contentdiv">
				 <img class="bslogo" src="@/assets/biglogo.png">
				 <!-- <a class="title"> BITESIZE DIGIAL GROUP INC.</a>	 -->
				 <a class="title">{{ title }}</a>
				 <a class="lorem1"> {{ message }}</a>
			<!-- 	 <a class="lorem1"> At Bite Size we start every project with an understanding of your brand’s mission,</a> <br>
				 <a class="lorem1"> story, market positioning, and value proposition. We get to know your customers</a> <br>
				 <a class="lorem1"> and practice radical empathy for them. We obsess over their needs and states of</a> <br>
				 <a class="lorem1"> mind and the kinds of images and words and shapes and colors that will resonate </a> <br>
				 <a class="lorem2"> with them on a deep, even unconscious level. We then combine all our research </a> <br>
				 <a class="lorem2"> and discoveries into stunningly beautiful websites or mobile applications that </a> <br>
				 <a class="lorem2"> balance the needs for aesthetics, original storytelling, brand building, </a> <br>
				 <a class="lorem2"> and lead generation. </a> <br> -->
			<!-- 	 <p class="lorem2last">
				 	
				 </p> -->
				 <button class="btn1" @click="btncp(sad)" >Company Profile</button>
				 	<button class="btn2"  @click="btnv(sad)" >Our Vision</button>
				 		<button class="btn3"  @click="btncomp(sad)" >Our Competencies</button>
				 		<button class="btn4"  @click="btncv(sad)">Our Core Values</button>
				 	
				 		
				 				
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
		el: 'contentdiv',
		data() {
			return{
				title: 'BITESIZE DIGITAL GROUP INC.',
				message: ' At Bite Size we start every project with an understanding of your brand’s mission, story, market positioning, and value proposition. We get to know your customers and practice radical empathy for them. We obsess over their needs and states of mind and the kinds of images and words and shapes and colors that will resonate with them on a deep, even unconscious level. We then combine all our research and discoveries into stunningly beautiful websites or mobile applications that balance the needs for aesthetics, original storytelling, brand building, and lead generation.',
			}
		},
		
		methods:{
			btnactive(activengaba){
				this.isActive= 'isActive'
		
			},
			btnclose(close){
				this.isActive = ''
			},
			btncp(sad){
				this.title = 'BITESIZE DIGITAL GROUP INC.',
				this.message = 'At Bite Size we start every project with an understanding of your brand’s mission, story, market positioning, and value proposition. We get to know your customers and practice radical empathy for them. We obsess over their needs and states of mind and the kinds of images and words and shapes and colors that will resonate with them on a deep, even unconscious level. We then combine all our research and discoveries into stunningly beautiful websites or mobile applications that balance the needs for aesthetics, original storytelling, brand building, and lead generation.'
			},
			btnv(sad){
				this.title = 'OUR VISION',
				this.message ='We will always evolve and adapt to latest best practices to be on the cutting edge of innovation; We take a business-centric approach and ask “does this really help the client?” ; We cherish distribution of knowledge and use it to fuel our desire to be on top of the game.'
			},
			btncv(sad){
				this.title = 'OUR CORE VALUES'
				this.message ='DEDICATION – showing our commitment to client service, relationship well-being and spreading knowledge via thought leadership.EXPERIENCE – with over 45 years of combined experience developing and implementing digital projects, our team knows what it takes to get the job done whether you’re a start-up or a Fortune 100 corporation.TRANSPARENCY – we’re the kind of crew that tells it how it is, sometimes to a fault. Our estimates are 100% customized to how we feel the team would add value to your business.ENERGY – we’re passionate about what we do at Bite Size. Some could even call us “geeks” when it comes to our enthusiasm for helping our clients succeed.'
			},
			btncomp(sad){
				this.title = 'OUR COMPETENCIES'
				this.message = 'Android, Angular, ASP.NET, Bootstrap, CSS, D3JS, Git, HTML, Ionic, iOS, JavaScript, C++,  jQuery, Kendo-UI, KrakenJS, Laravel, Linux, MongoDB/Mongoose, MySQL, Node, NPM, OSX, PHP, PostGresSQL, Python, React, SQLite, VB.Net, VUE, WebPack, Windows, WordPress, Xcode, Magento, WooCommerce, XAMPP, WAMP'
			}
		}
	};
</script>
<style scoped>
body{
	font-family: Montserrat;
	margin:0;

}
.btn1{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 35px;
	float: left;
	color: #fff;
	margin-top: 0px;
	margin-left: 620px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.btn2{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 35px;
	padding-right: 35px;
	margin-top: 35px;
	float: left;
	color: #fff;
	margin-top: 0px;
	margin-left: 15px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.btn3{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 35px;
	float: right;
	color: #fff;
	margin-top: 0px;
	margin-right: 150px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.btn4{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 35px;
	float: right;
	color: #fff;
	margin-top: 00px;
	margin-right: 10px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.content{
	margin-top: 100px;
}
.lorem1{
	font-family: Montserrat;
	color: #fff;
	
	font-size: 15px;
	float: right;
	margin-right: 150px;
	margin-left: 620px;
	margin-top: -320px;


}
.lorem1last{
	margin-bottom: 10px;
	color: #fff;
	font-family: Montserrat !important;
	font-size: 15px;
	float: left;
	margin-left: 150px;


}
.content2{
	display: none;
}
.lorem2{
font-family: Montserrat;
	color: #03597A;

	font-size: 15px;
	float: left;
	margin-left: 150px;


}
.title{
	margin-top: 0px !important;
	text-align: center;
	float: left;
	margin-left: 120px;
	font-weight: bold;
	color: #fff;
	font-family: Segoe UI;
	font-size: 40px;
	margin-bottom: 20px;
}
.bslogo{
	text-align: center;

	float:left;
	margin-left: 200px;
	height: 412px;
	width: 301px; 
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
/*-------------------------------------------------------------------------------------------------------------------------*/
@media screen and (max-width: 430px){
.bslogo{
	margin-top: 50px;
	margin-left: 150px !important;
	width: 150px !important;
	height: 200px !important;
}
.btn1{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 25px;
	padding-right: 28px;

	float: left;
	color: #fff;
	margin-top: 30px;
	margin-left: 60px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.btn2{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 40px;
	padding-right: 40px;

	float: left;
	color: #fff;
	margin-top: 30px;
	margin-left: 20px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.btn3{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 20px;
	padding-right: 20px;

	float: left;
	color: #fff;
	margin-top: 20px;
	margin-left: 60px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.btn4{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 20px;
	padding-right: 20px;

	float: left;
	color: #fff;
	margin-top: -45px;
	margin-left: 230px;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
.content{
	margin: 0px;
}
.title{
	margin-top: 30px !important;
	font-size: 30px;
	margin-left: 80px;
	margin-right: 65px;
	text-align: center !important;
}
.lorem2last{
	margin-bottom: 50px;
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
.content2{
	display: block;
	text-align: center;
	margin-top: -70px !important; 
}
.footer1{
	display: none;
}
.lorem1{
	font-family: Montserrat;
	color: #fff;
	text-align: justify;
	font-size: 15px;
	float: left;
	margin-left: 60px;
	margin-right: 50px;
	margin-top: 10px !important;


}
.lorem2{
font-family: Montserrat;
	color: #03597A;
	text-align: justify;
	font-size: 15px;
	margin-left: 60px;
	margin-right: 50px;


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
}
</style>