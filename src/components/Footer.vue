<template>
    <footer class="footer__container p-5">
        <b-row>
            <b-col cols-sm="12">
                <div class="footer__container-logo">
                    <b-navbar-brand href="/" class="text-white d-flex align-items-center justify-content-center">
                        <img class="brand-logo" style="height: 40px;" src="@/assets/tronagency_logo_white.svg">
                        <span class="m-2 pt-2">Brander</span>
                    </b-navbar-brand>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <h6 class="font-weight-bold">What we do</h6>
                <div class="my-3">
                    <b-navbar-nav>
                        <b-nav-item href="/" class="mx-2 nav-item">Home</b-nav-item>
                        <b-nav-item href="/work" class="mx-2 nav-item">Work</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Services</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Contact Us</b-nav-item>
                    </b-navbar-nav>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <h6 class="font-weight-bold">Who we are</h6>
                <div class="my-3">
                    <b-navbar-nav>
                        <b-nav-item href="/about" class="mx-2 nav-item">About Us</b-nav-item>
                        <b-nav-item href="/insight" class="mx-2 nav-item">Insight</b-nav-item>
                        <b-nav-item href="/talk" class="mx-2 nav-item">Join Us</b-nav-item>
                    </b-navbar-nav>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <h6 class="font-weight-bold">Work</h6>
                <div class="my-3">
                    <b-navbar-nav>
                        <b-nav-item href="#" class="mx-2 nav-item">Sendlane</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Teachable</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Shipbob</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Justuno</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Haystack</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">See all</b-nav-item>
                    </b-navbar-nav>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <h6 class="font-weight-bold">Follow Us</h6>
                <div class="my-3">
                    <b-navbar-nav>
                        <b-nav-item href="#" class="mx-2 nav-item">Dribbble</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Instagram</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Behance</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Facebook</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Clutch</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Twitter</b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">Medium</b-nav-item>
                    </b-navbar-nav>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <h6 class="font-weight-bold">Social</h6>
                <div class="my-3">
                    <b-navbar-nav class="d-flex flex-row">
                        <b-nav-item href="#" class="mx-2 nav-item">
                            <img id="facebook-icon" height="20px" src="@/assets/facebook.svg">
                        </b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">
                            <img id="instagram-icon" height="20px" src="@/assets/instagram.svg">
                        </b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">
                            <img id="twitter-icon" height="20px" src="@/assets/twitterlogo.svg">
                        </b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">
                            <img id="youtube-icon" height="20px" src="@/assets/youtube.svg">
                        </b-nav-item>
                        <b-nav-item href="#" class="mx-2 nav-item">
                            <img id="wordpress-icon" height="20px" src="@/assets/wordpress.svg">
                        </b-nav-item>
                    </b-navbar-nav>
                </div>
            </b-col>
        </b-row>
        <hr>
        <div class="text-center mx-auto p-3">
            © {{ currentYear }} Brander Media | All Rights Reserved
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(), // 2020
        };
    }
}
</script>

<style lang="scss" scoped>
.footer__container {
    position: sticky;
    bottom: 0;
    color: white;
    background: #11271F;
    .nav-item {
        a {
            color: #ffffff !important;
            &:hover {
                color: #f0eeee !important;
            }
        }
    }
}
</style>
