<template>
    <header class="header header-transparent header-layout3">
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            
            <img src="@/assets/Vector 21.png">
            Brander
          
          </a>
          <button class="navbar-toggler" type="button">
            <span class="menu-lines"><span></span></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav mx-auto">
              <li class="nav__item with-dropdown">
                <a href="#" class="nav__item-link" @click="gotoSolution()">Solutions</a>
              </li>
              <!-- /.nav-item -->
              <!-- /.nav-item -->
              <li class="nav__item">
                <a href="#" class="nav__item-link" @click="gotoWork()">Work</a>
              </li>
              <!-- /.nav-item -->
              <li class="nav__item">
                <a href="#" class="nav__item-link  active" @click="gotoAbout()">About Us</a>
              </li>
              <!-- /.nav-item -->
             
              <li class="nav__item">
                <a href="#" class="nav__item-link" @click="gotoJoin()">Join Us</a>
              </li>
              <!-- /.nav-item -->
               <li class="nav__item">
                <a href="#" class="nav__item-link" @click="gotoInsight()">Insight</a>
              </li>
              <!-- /.nav-item -->

            </ul>
            <!-- /.navbar-nav -->
          </div>
          <!-- /.navbar-collapse -->
          <ul class="header-actions__list list-unstyled d-flex align-items-center mb-0">
            <li>
              <a href="#" class="btn btn__ header__btn__sm" id="chat"  v-b-modal.modal-sm>Lets Talk</a>
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
          <!-- /.actions__list -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navabr -->
    </header>

</template>
<script>
//import Demo from "@/views/Demo.vue";
//import { component } from "vue/types/umd";
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
.nav__item-link{
  text-decoration: none;
}
#chat{
  background:  #fdca55;
  color:black;
}


 
 
</style>