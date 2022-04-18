<template>
  <div class="home">
     <Header />
         <div class="app-detail"></div>
               <div class="container">

            
                  <b-row>
                   <b-col sm="12" md="12">
                      <div class="app-content">
                      <h3>Create<span class="dot">.</span></h3>
                      <h2>Digital Spaces</h2>
              
                      <p class="with"> with us</p>
                      <p class="digital">Digital agency helping saas brands<br/> build amazing websites</p>
                      </div>
                  </b-col>
                </b-row>
                     
            

               </div>

 </div>

       
  



</template>


<script>
/*import { defineComponent } from '@vue/composition-api'*/
import Header from '@/components/Header.vue'

export default {
    name: "Home",
    data() {
        
      return {

      };
    },

     components: {
    Header,
    //Footer
   // Form
  }
}
</script>



<style scoped>

.home{
  background: #023020;
  height:920px;
  
  
}

.app-detail{
  position:absolute;
  
  background-image:url('~@/assets/spot.svg');
  position: absolute;
width: 690px;
height: 774px;
left: 200px;
top: 153px;
mix-blend-mode: soft-light;




}


.app-content{
  position: absolute;
  top:200px;
  left:120px;
}
.app-content h2 {

height: 129px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 144px;
line-height: 128px;
  color:white;
  opacity:0.1px;
}
.app-content h3{
 
  font-family: 'Quando';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 74px;
/* identical to box height, or 115% */


color: #FFFFFF;
}
.dot{
  color:#fdca55;
}

.app-content .with {


font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 43px;
/* or 179% */

text-align: center;
margin-top:70px;

color: #FFFFFF;
}

.app-content .digital {


font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 43px;
/* or 179% */

text-align: center;

color: #FFFFFF;
}


@media screen and (max-width: 480px) {
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
.container{
  display: grid;
    grid-template-columns: auto;
    align-items: left;
    justify-self: center;
    width: 100%;
    margin: 0 auto;
    

}
  .app-detail {
     position: absolute;
     left:0px;
     width:50px;
     height: 40px;

  }
  .app-content {
    
    
  }

  .app-content h3 {
    font-size: 2.5rem;
  
    margin-left: 0px
  }

  .app-content h2 {
    font-size: 3.5rem;
    margin-left: 0px;
    margin-top:0px;
    
  }

  .app-content .digital {
    font-size: 1.0rem;
    
    margin-left: 0px;
  }

   .app-content .with {
    font-size: 1.0rem;
    margin-top: 30px;
    margin-left:0px;
  }
}

</style>

