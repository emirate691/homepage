<template>
    <div class="home__container p-0 m-0">
        <div>
            <div>
                <Navbar />
            </div>
            <div class="h-100 flex-1 p-5">
                <Homepage />
            </div>
        </div>
        <div class="footer__container">
            <Footer />
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Homepage from '../components/pages/Homepage.vue';

export default {
    name: "Home",
    components: { Navbar, Footer, Homepage },

    data() {
      return {

      };
    },
}
</script>
<style lang="scss">
.home__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    .footer__container {
        margin-top: auto;
    }
}
</style>