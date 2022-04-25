<template>
    <b-container fluid class="join__container p-0 m-0">
        <div>
            <div>
                <Navbar />
            </div>
            <div class="h-100 flex-1 p-5">
                <Joinpage />
            </div>
        </div>
        <div class="footer__container">
            <Footer />
        </div>
    </b-container>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Joinpage from '../components/pages/Joinpage.vue';

export default {
    name: "Join",
    components: { Navbar, Footer, Joinpage },

    data() {
      return {

      };
    },
}
</script>
<style lang="scss">
.join__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    .footer__container {
        margin-top: auto;
    }
}
</style>