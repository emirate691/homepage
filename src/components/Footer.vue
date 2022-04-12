<template>
 <b-container fluid="sm">
    <div class="footer">
       
  <b-container class="bv-example-row">
  <b-row>
      <b-col sm="12" md="2" lg="2">
          
        <img id="footer-logo" src="@/assets/Vector 21.svg">
           
          <span class="footer-brand">Brand</span>
      </b-col>

    <b-col sm="12" md="2" lg="2">
       <h3>What we do </h3>
        <div class="what-we-do-detail">
            Home
            Work
            Services
            Contact us
            
        </div>
    </b-col>
    <b-col sm="12" md="2" lg="2">
        <h3 class="who-we-are">
            Who we are
        </h3>
       <div class="who-we-are-detail">
           About us
           Insights
            Join us
           </div>
    </b-col>
    <b-col sm="12" md="2" lg="2">
        <h3 class="work"> 
            Work
        </h3>
        <div class="work-detail">
          Sendlane
          Teachable
          ShipBob
          Justuno
          Haystack
          See all
            </div>
    </b-col>
    <b-col sm="12" md="2" lg="2">
        <h3 class="follow">
        Follow Us
        </h3>
      
       <div class="follow-us">
        Dribbble
        Instagram
        Behance
      Facebook
      Clutch
      Twitter
      Medium
       </div>
        
       
    </b-col>
    <b-col sm="12" md="2" lg="2">
        <h3>
            Social
        </h3>
        <div class="footer-icon">
            <img id="facebook-icon" src="@/assets/facebook.svg">

            <img id="instergram-icon" src="@/assets/intergram.svg">

            <img id="twitter-icon" src="@/assets/twitterlogo.svg">

            <img id="youtube-icon" src="@/assets/twitter.svg">
            <img id="bitmap-icon" src="@/assets/Bitmap.svg">
            

            
            
        </div>
    </b-col>
    
    
    
  </b-row>
  <hr class="footer-bottom">
  <b-row>
      <b-col sm="12" md="12" lg="12">
          <p class="footer-bottom-content">© 2024 Brander Media | All Rights Reserved</p>
      </b-col>
      </b-row>
   
</b-container>
    </div>
    </b-container> 
</template>

<script>


export default{
    name: "Footer",
    data() {
        
    },
}
</script>


<style scoped>
.footer{
position: absolute;
width: 1265px;
height: 722px;
left: -2px;
top: 14898px;

background: #11271F;
backdrop-filter: blur(80px);
/* Note: backdrop-filter has minimal browser supp*/
}

.footer-bottom{
    position: absolute;
width: 90%;
height: 0px;
left: 79px;
top:500px;


border: 1px solid #193F31;
}
.what-we-do{
position: absolute;
height: 16px;
left: 25.75%;
right: 65.91%;
top: calc(50% - 36px/2 + 5.5px);

font-family: 'Poppins';
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 36px;
/* identical to box height */


/* White */

color: #FFFFFF;

}
.what-we-do-detail{
   position: absolute;
height: 182px;
left: 7.75%;
right: 92.25%;
top: calc(50% - 82px/2 + 209.39px);

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 21.1273px;
line-height: 45px;
/* or 214% */


/* White */

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.8;

}

.who-we-are-detail{
position: absolute;
height: 136px;
left: 9.81%;
right: 90.10%;
top: calc(50% - 136px/2 + 234.39px);

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 21.1273px;
line-height: 45px;
/* or 214% */


/* White */

color: #FFFFFF;
}
.work-detail{
position: absolute;
height: 192px;
left: 10.88%;
right: 89.12%;
top: calc(50% - 192px/2 + 270.45px);

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 21.1273px;
line-height: 32px;

/* White */

color: #FFFFFF;

}
.follow-us{
position: absolute;
height: 224px;
left: 5.86%;
right: 94.14%;
top: calc(50% - 224px/2 + 289.45px);

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 21.1273px;
line-height: 32px;

/* White */

color: #FFFFFF;

}

h3{
    position:absolute;
    top:100px;

    color:#ffff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
   line-height: 36px;
   
}

.footer-brand{
    position: absolute;
width: 168.52px;
height: 42.71px;
left: 20.16px;
top: 128.23px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 41.9518px;
line-height: 42px;
/* or 100% */

letter-spacing: -0.005em;

color: #FFFFFF;

}
#footer-logo{
    
position: absolute;
width: 32.98px;
height: 32.98px;
left: 6.32px;
top: 128.92px;

/*border: 4.61701px solid #FFFFFF;*/
/*transform: matrix(0.71, 0.71, 0.71, 0.71, 0, 0);*/

}
#facebook-icon{
position: absolute;
left: 0.17%;
right: 94.99%;
top: 180px;
bottom: 1.39%;

/* White */


}

#instergram-icon {
position: absolute;
width: 27.16px;
height: 27.16px;
left: 32.82px;
top: 180.98px;

}
#twitter-icon{
position: absolute;
left: 40.93%;
right: 48.89%;
top: 180.03px;
bottom: 2.8%;

/* White */


}
#bitmap-icon {
position: absolute;
left: 84.25%;
right: 24.21%;
top: 180.26px;
bottom: 2.83%;

/* White */

background: #FFFFFF;
border-radius:100px;

    
}
#youtube-icon{
position: absolute;
left: 64.25%;
right: 24.21%;
top: 180.26px;
bottom: 2.83%;

/* White */




}

.footer-bottom-content{
    position: absolute;
height: 32px;
right: 27.09%;
top: calc(50% - 32px/2 + 582.31px);

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 21.1273px;
line-height: 32px;
/* identical to box height */

text-align: center;

/* White */

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.75;

}

</style>