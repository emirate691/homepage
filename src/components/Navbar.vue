<template>
    <div>
        <b-row class="navbar__container">
            <b-col class="col-md-8 mx-auto w-100">
                <b-navbar toggleable="lg" class="mx-auto text-center" type="light" variant="clear">

                    <div class="d-block d-lg-none">
                        <b-navbar-brand href="/" class="d-flex align-items-center justify-content-center">
                            <img class="brand-logo" style="height: 40px;" src="@/assets/tronagency_logo.svg">
                            <span class="m-2 pt-2">Brander</span>
                        </b-navbar-brand>
                    </div>

                    <b-navbar-toggle target="nav-collapse" class="nav-item"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-row class="mx-auto w-100 justify-content-center align-items-center">
                            <b-col class="w-100">
                                <b-navbar-nav>
                                    <b-nav-item href="/solution" class="mx-2 nav-item">Solution</b-nav-item>
                                    <b-nav-item href="/work" class="mx-2 nav-item">Work</b-nav-item>
                                    <b-nav-item href="/about" class="mx-2 nav-item">About Us</b-nav-item>
                                </b-navbar-nav>
                            </b-col>

                            <b-col class="d-none d-lg-block">
                                <b-navbar-brand href="/" class="d-flex align-items-center justify-content-center">
                                    <img class="brand-logo" style="height: 40px;" src="@/assets/tronagency_logo.svg">
                                    <span class="m-2 pt-2">Brander</span>
                                </b-navbar-brand>
                            </b-col>

                            <b-col class="w-100">
                                <b-navbar-nav>
                                    <b-nav-item href="/join" class="mx-2 nav-item">Join Us</b-nav-item>
                                    <b-nav-item href="/insight" class="mx-2 nav-item">Insights</b-nav-item>
                                    <b-nav-item href="/talk" class="nav-item">
                                        <img id="brand-logo" src="@/assets/messages.svg">
                                        <span class="mx-1">Let's Talk</span>
                                    </b-nav-item>
                                </b-navbar-nav>
                            </b-col>
                        </b-row>
                    </b-collapse>
                </b-navbar>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.navbar__container {
    .navbar-brand {
        color: #11271F !important;
    }
    .nav-item {
        color: #11271F !important;
        a {
            color: #11271F !important;
            &:hover {
                color: #19392d !important;
            }
        }
    }
}
</style>