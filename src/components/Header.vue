<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="">
    <b-navbar-brand href="#">
      <a class="navbar-brand" href="#">
          
            
            <img src="@/assets/Vector 21.svg">
            Brander
          
          </a>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <ul class="navbar-nav mx-auto">
              <li class="nav__item">
                 <a href="/Solution" class="nav__item-link" @click="gotoSolution()">Solution</a>
              
              </li>
              <!-- /.nav-item -->
              <!-- /.nav-item -->
              <li class="nav__item">
                <a href="/Work" class="nav__item-link" @click="gotoWork()">Work</a>
              </li>
              <!-- /.nav-item -->
              <li class="nav__item">
                <a href="#" class="nav__item-link  active" @click="gotoAbout()">About Us</a>
              </li>
              <!-- /.nav-item -->
             
              <li class="nav__item">
                <a href="/Join" class="nav__item-link" @click="gotoJoin()">Join Us</a>
              </li>
              <!-- /.nav-item -->
               <li class="nav__item">
                <a href="/Insight" class="nav__item-link" @click="gotoInsight()">Insight</a>
              </li>
              <!-- /.nav-item -->

            </ul>
  
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
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
.nav__item-link{
  text-decoration: none;
}
#chat{
  background:  #fdca55;
  color:black;
  margin-right: 50px;
}

</style>