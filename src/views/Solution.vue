<template>
    <b-container fluid class="homepage__container p-0 m-0">
        <div>
            <div>
                <Navbar />
            </div>
            <div class="h-100 flex-1 p-5">
                <Solutionpage />
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
import Solutionpage from '../components/pages/Solutionpage.vue';

export default {
    name: "Solution",
    components: { Navbar, Footer, Solutionpage },

    data() {
      return {

      };
    },
}
</script>
<style lang="scss">
.homepage__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    .footer__container {
        margin-top: auto;
    }
}
</style>