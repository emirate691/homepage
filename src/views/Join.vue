<template>
    <div class="join"> 
        <Headers />
        <Footer />
        
    </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Join",
    data() {
        return {

        }
        
    },
    
     components: {
    Headers,
    Footer
   // Form
  }
}
</script>

<style scoped>
.join {
     position: absolute;
width: 100%;
height: 2286px;
left: 0px;
top: 0px;


backdrop-filter: blur(80px);
/* Note: backdrop-filter has minimal browser support */

transform: matrix(1, 0, 0, 1, 0, 0);
}


</style>
