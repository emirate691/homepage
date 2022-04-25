<template>
    <b-container fluid class="talk__container p-0 m-0">
        <div>
            <div>
                <Navbar />
            </div>
            <div class="h-100 flex-1 p-5">
                <Talkpage />
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
import Talkpage from '../components/pages/Talkpage.vue';

export default {
    name: "Talk",
    components: { Navbar, Footer, Talkpage },

    data() {
      return {

      };
    },
}
</script>
<style lang="scss">
.talk__container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    .footer__container {
        margin-top: auto;
    }
}
</style>