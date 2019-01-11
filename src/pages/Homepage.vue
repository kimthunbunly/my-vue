<template>
    <div class="home" @scroll="handleScroll">
        <Navbar/>
        <!-- <Carousel/> -->
        <div class="my-bg">
            <div class="my-bg-transparent-dark">
                    <NavbarScroll/>
                <div class="d-flex flex-column bd-highlight mb-3 text-center">
                    <div :class="isTop? 'my-top':''">
                        <br>
                    </div>
                    <h1 class="title-content">
                        Trucking.
                        <span>Simplified.</span>
                    </h1>
                    <p
                        class="title-content-sm d-none d-lg-block"
                    >Technology serving the best carriers & the best shippers.</p>
                </div>
                <div class="row text-center mx-0">
                    <div class="col-lg-6 py-2">
                        <button
                            class="btn font-weight-bold btn-primary p-2 rounded-0 w-50"
                        >Ship with Everoad</button>
                    </div>
                    <div class="col-lg-6 py-2">
                        <button
                            class="btn font-weight-bold btn-primary p-2 rounded-0 w-50"
                        >Hual with Everoad</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-body text-center">
            <h3 class="card-title p-4">
                Innovative digital solution matching Shippers with
                <span
                    class="text-warning"
                >Carriers</span>
            </h3>
            <img class="img-fluid p-4" src="../assets/content.svg" alt="bg-content">
        </div>
        <div class="bg-light">
            <div class="row mx-0">
                <div class="col-lg p-4">
                    <div class="card-group">
                        <div class="card rounded-0">
                            <img src="../assets/for-carrier.jpg" class="img-fluid w-100" alt>
                            <div class="card-body">
                                <p class="card-text">For Carriers</p>
                                <h2 class="card-title">
                                    Reliability. Service.
                                    <span class="text-warning">Accuracy</span>
                                </h2>
                                <p>Everoad's digital solution enables every kind of shipper - from large multinational companies to local SMB's - to find the best carrier for all their shipment needs accross Europe - from FTL to a few pallets - at the best price - for spot and regular.</p>
                                <div class="text-center">
                                    <button
                                        class="btn font-weight-bold btn-primary rounded-0 w-50"
                                    >Ship with Everoad</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg p-4">
                    <div class="card-group">
                        <div class="card rounded-0">
                            <img src="../assets/for-shipper.jpg" class="img-fluid w-100" alt>
                            <div class="card-body">
                                <p class="card-text">For Carriers</p>
                                <h2 class="card-title">
                                    More business. Less hassle. Payment in
                                    <span
                                        class="text-warning"
                                    >3 days.</span>
                                </h2>
                                <p>Everoad's tech-powered solution allows carriers to reduce empty kilometers, find the freight they want across Europe, in spot and regular on the routes they operate, with upfront prices, and to be paid in 72h if they leverage our platform to its full potential.</p>
                                <div class="text-center">
                                    <button
                                        class="btn font-weight-bold btn-primary rounded-0 w-50"
                                    >Ship with Everoad</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="javaScript">
import Navbar from "../layout/Navbar.vue";
// import Carousel from "../components/carousel/HomeCarousel.vue";
import Footer from "../layout/Footer.vue";
import NavbarScroll from "../layout/navbarscroll/NavbarScroll.vue"
export default {
  components: {
    Navbar,
    // Carousel,
    Footer,
    NavbarScroll
  }
};
</script>

<style scoped>
.my-bg {
    background: url(../assets/bg-home.jpg) no-repeat center center;
    height: 100vh;
    background-size: cover;
}

.title-content {
    color: #fff;
    font-weight: bold;
    font-size: 55px;
    margin-top: 30px;
}
.title-content span {
    color: rgb(255, 183, 50);
}
.title-content-sm {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
}
.my-top {
    height: 100px;
}
@media (min-width: 0px) and (max-width: 767.98px) {
    .my-top {
        height: 22px;
    }
}
.my-style-animation:hover {
    border-top: 5px solid rgb(32, 176, 246);
    transition: 0.31s;
    /* border-top: #fff; */
}
</style>

