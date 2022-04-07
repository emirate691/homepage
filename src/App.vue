<template>
  <div id="app">
 <Header />

   <div class="app-detail">
    <h3>Create<span class="dot">.</span></h3>
    <h2>Digital Spaces</h2>
    <p> with us</p>
    <p>Digital agency helping saas brands<br/> build amazing websites</p>
  </div>
      
  </div>
  
</template>
<script>

import Header from './components/Header.vue'


export default {
  name: "App",
  data() {
    return {
      counter: 0
      
    };
  },
  /*computed: {
    Details() {
      return this.$store.state.Login;
    }
  },*/
  
  components: {
    Header,
    //Footer
   // Form
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: #023020;
  height:1220px;
  
  font-size:
}
.app-detail{
  margin: 150px;
  background-image:url('~@/assets/spot.svg');
  position: absolute;
width: 690px;
height: 774px;
left: 51px;
top: 53px;
mix-blend-mode: soft-light;




}
.app-detail h2 {
  width: 1057px;
height: 129px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 144px;
line-height: 128px;
  color:white;
  opacity:100%
}
.app-detail h3{
 
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

.app-detail p {
  font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 43px;
/* or 179% */

text-align: center;

color: #FFFFFF;
}
</style>
