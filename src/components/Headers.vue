<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="">
   

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <ul class="navbar-nav mx-auto">
              <li class="nav__item">
                 <a href="/Solution" class="nav__item-link1" @click="gotoSolution()">Solution</a>
              
              </li>
              <!-- /.nav-item -->
              <!-- /.nav-item -->
              <li class="nav__item">
                <a href="/Work" class="nav__item-link2" @click="gotoWork()">Work</a>
              </li>
              <!-- /.nav-item -->
              <li class="nav__item">
                <a href="#" class="nav__item-link3  active" @click="gotoAbout()">About Us</a>
              </li>
              <!-- /.nav-item -->
               <b-navbar-brand href="#">
                <a class="navbar-brand" href="#">
          
            
            <img id="brand-logo" src="@/assets/Vector 21.svg">
               <span class="brand-name">Brander</span>
          
          </a>
    </b-navbar-brand>
             
              <li class="nav__item">
                <a href="/Join" class="nav__item-link4" @click="gotoJoin()">Join Us</a>
              </li>
              <!-- /.nav-item -->
               <li class="nav__item">
                <a href="/Insight" class="nav__item-link5" @click="gotoInsight()">Insight</a>
              </li>
              <!-- /.nav-item -->

            </ul>
  
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="header-actions__list list-unstyled d-flex align-items-center mb-0">
            <li class="chat-box">
              <a href="#" class="btn btn__ header__btn__sm" id="chat"  v-b-modal.modal-sm>
                  <img src="@/assets/chat1.svg" id="chat1"><img src="@/assets/chat2.svg" id="chat2">
                    <li class="let-talk">Let's Talk</li>
                  
                  </a>
                  

              <right>
        <b-modal id="modal-sm"   
              class="modal-prevent-closing"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk" header-bg-variant="warning" 
              title-tag="h6" 
              ok-variant="warning" 
              size="sm" 
              title="Please fill out the form below and we will get back to as soon"  border-variant="primary" ok-only="yes"  ok-title="Submit" footer-class="p-2 border-top-0" header-class="p-2 border-bottom-0" no-stacking="false">
           <form ref="form" @submit.stop.prevent="handleSubmit">
             <div class="form-group">
            <label for="recipient-name" class="col-form-label">Name</label>
            <input type="text" v-model="name" :states="nameState" class="form-control" id="recipient-name" maxlength="30" required>
          </div>
          <div class="form-group">
            <label for="recipient-email" class="col-form-label">Email:</label>
            <input type="email"  v-model="email" :states="emailState" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
           </form>
        </b-modal>
        </right>
      
            </li>
            
         
          </ul>
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  
  methods: {
    gotoSolution() {
      this.$router.push({ path: "/Solution" });
    },
    gotoAbout() {
      this.$router.push({ path: "/About" });
    },
     gotoWork() {
      this.$router.push({ path: "/Work" });
    },
    gotoJoin() {
      this.$router.push({ path: "/Join" });
    },
    gotoInsight() {
      this.$router.push({ path: "/Insight" });
    }
    
  },
  
  /*components: {
    Demo
  }*/
};
</script>

<style scoped>
.logo{
  border-left:1px solid white;
}
a{
  color:white;
  text-decoration: none;
}
.nav__item{
  padding: 0 20px
  
}
.nav__item-link1{
  position: absolute;
width: 73px;
height: 21px;
left: 420px;
top: 46px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 127% */


color: #11271F;


}

.nav__item-link2{
position: absolute;
width: 41px;
height: 21px;
left: 533px;
top: 46px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 127% */

color: #0000;

}
.nav__item-link3{
    position: absolute;
width: 72px;
height: 21px;
left: 614px;
top: 46px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 127% */


color: #11271F;


}
#brand-logo{
position: absolute;
width: 24.56px;
height: 24.56px;
left: 736.35px;
top: 42.78px;


/*transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);*/
}
.brand-name{
position: absolute;
width: 125.48px;
height: 31.8px;
left: 744.52px;
top: 43.75px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 31.2372px;
line-height: 31px;
/* identical to box height, or 100% */

letter-spacing: -0.005em;

color: #11271F;
}
.nav__item-link4{
    position: absolute;
width: 57px;
height: 21px;
left: 881px;
top: 46px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 127% */


color: #11271F;

}
.nav__item-link5{
    position: absolute;
width: 62px;
height: 21px;
left:978px;
top: 46px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 127% */


color: #11271F;

}
.chat-box{
    position: absolute;
left: 81.89%;
right: 27.72%;
top: 0.41%;
bottom: 99.37%;


}
#chat{
  position: absolute;
left: 75.89%;
right: 27.72%;
top: 45px;
bottom: 99.37%;

opacity: 8;
}
#chat1{
position: absolute;
left: 87.14%;
right: 27.84%;
top: 0.43%;
bottom: 99.4%;

opacity: 0.4;

}
#chat2{
 position: absolute;
left: 103.01%;
right: 28.36%;
height:20px;
top: 0.5%;
bottom: 99.39%;
opacity:0.4;



}
  .let-talk{
  position:"relative";
width: 89px;
height: 21px;


font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 127% */


}

.navbar-brand{}

</style>