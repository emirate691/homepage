<template>
    <b-container fluid class="homepage__container p-0 m-0">
        <div>
            <div>
                <Navbar />
            </div>
            <div class="h-100 flex-1">
                <div class="h-100 p-5">
                    <h1>
                        Work
                    </h1> 
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                        Homepage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                        Homepage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                        Homepage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                    </div>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                        Homepage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                        Homepage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                        Homepage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias vero necessitatibus?
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti id exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias
                         exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias exercitationem modi ea eius voluptatibus excepturi similique corporis debitis architecto rerum sapiente, aut veniam vel saepe placeat alias
                    </p>
                </div>
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

export default {
    name: "Work",
    components: { Navbar, Footer },

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