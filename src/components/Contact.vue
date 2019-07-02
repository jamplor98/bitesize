<template>
	<div class="maincontent">
		<div class="topnav">
			<img class="bitesizelogo" src="@/assets/bitesize.png">
		 		 <vue-recaptcha sitekey="6LeE-qoUAAAAAJH8K2YJIk-bxzIgcYHTUXFTTBbc"></vue-recaptcha>

			 	<div class="menutoggle">
					<img @click="btnactive(activengaba)" src="@/assets/menu.png">
				</div>
			
			<div class="items" v-bind:class="isActive" id="myTopnav">
					<img @click="btnclose(close)" class="btnclosedt" src="@/assets/close.png">
					<router-link to="/"> 			 <a >Home</a> 					</router-link>
				<router-link to="/portfolio">  	 <a >Portfolio</a>				</router-link>
				<router-link to="/service">   	 <a >Service</a>				</router-link>
				<router-link to="/about">  		 <a >About</a>					</router-link>
				<router-link to="/contact"> 	 <a class="active">Contact</a>				</router-link>
			</div>
		</div>
			<div class="content2">
				<a class="bite">BITE</a> 
				<a class="size">SIZE</a>
				<br> <a class="bs">BITESIZE DIGITAL GROUP INC.</a>	
		</div>

		<div class="content">
			<div class="content1">
				 <h1 class="title">CONTACT US</h1> <br> <br>
				 <p class="para">Questions? Comments? Drop us a line and we'll get back you.</p>
			</div>
			<div class="form">
				<input type="text" name="name" placeholder="Name"> <br>
				<input type="text" name="email" placeholder="Email"> <br>
				<input type="text" name="subject" placeholder="Subject"> <br>
				<textarea rows="12" col="10" name="message" placeholder="Message"> </textarea>
				  <vue-recaptcha sitekey="6LeE-qoUAAAAAJH8K2YJIk-bxzIgcYHTUXFTTBbc"></vue-recaptcha>
  			</div>
			
		</div>	
	
 </div>
</template>

<script type="text/javascript">
import VueRecaptcha from 'vue-recaptcha'
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
			},
			recaptcha() {
		      this.$recaptcha('btnsend').then((token) => {
		        console.log(token) // Will print the token
		      })
		    }
		},
    	components: { VueRecaptcha }
	};
</script>
<style scoped>
body{
	font-family: Montserrat;
	margin:0;

}
.btnsend{
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 60px;
	padding-right: 60px;
	margin-top: 35px;
	float: right;
	color: #fff;
	background-color: #03597A;
	border-style: none;
	border-radius: 2px;
}
textarea{
	margin-top: 30px;
	width: 85%;
}
textarea::placeholder {
	padding-left:  5px;
  color: #03597A;
}
input{
	margin-top: 30px;
	padding-top: 12px;
	padding-bottom: 12px;
	width: 85%;
	border-style: none;
	padding-left: 5px;
}
input::placeholder {
	padding-left:  5px;
  color: #03597A;
}
.form{
	float: right;
	margin-right: 200px;
	margin-top: 50px;
	background-color: #03597A;
	height: 450px;
	width: 380px;
	border-radius: 2px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content1{
	float: left;
	margin-top: 100px;
	
}
.para{
	float: left;
	margin-top: -20px;
	margin-left: 150px;
	font-family: Montserrat;
	color: #fff;
	font-size: 15px;
}
.title{
	float: left;
		margin-left: 150px;
	font-family: Montserrat;
	color: #fff;
	font-size: 60px;
}
.content{
	text-align: center;
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
.title{
	font-size: 40px;
	text-align: center;
	float: left !important; 
	margin-left: 90px !important;
	margin-top: -50px;
}
.para{
	font-size: 12px;
	float: left !important;
	margin-left: 75px !important;
	margin-right: 50px;
}
.bitesizelogo{
	display: none;
}
.form{
	margin-top: 10px;
	float: left;
	margin-left: 50px !important;
	height: 450px;
	width: 330px;
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
.btnsend{
	margin-bottom: 20px;
}
.weblogo{
	margin-top: 50px;
	width: 250px;
	height: 250px;
	float: left !important;
	margin-left: 90px;

}
.items{
z-index: 0 !important;
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
.nextleft{
	margin-top: -400px;
	float: left;
	margin-left: 20px;
	width: 70px;
	height: 70px;

		z-index: 0 !important;
}
.nextright{
	margin-top: -400px;
	float: right;
	margin-right: 20px;
	width: 70px;
	height: 70px;
}
}
</style>