<template>
    <div>
        <Navbar style="z-index:8"></Navbar>
        <div class="my-bg">
            <div class="my-bg-transparent-dark">
                <div class="my-bg-transparent-dark-rotate">
                    <NavbarScroll/>
                    <div class="row m-0">
                        <div class="col-lg-6">
                            <div class="p-5 mt-3">
                                <h1 class="text-light">
                                    More opportuntities
                                    <br>in a few
                                    <span class="text-warning">clicks</span>
                                </h1>
                                <div class="w-75">
                                    <p
                                        class="text-light font-weight-bold d-none d-lg-block"
                                    >Receive curated Freight offers from thousands of industrial Shippers, optimize truck utilization with both spot & regular freight, on the lanes that matter to you. You are paid within 30 days and within 3 days if you subscribe to our Express payment program. No fee, no comitment. It's free and it will always be.</p>
                                </div>
                            </div>
                            <router-link to="/signup">
                                <div class="pl-5">
                                    <button class="btn btn-primary rounded-0 w-25">Signup for free</button>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none d-lg-block">
            <div class="row bg-dark m-0">
                <div class="col-lg-4 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/co-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 d-flex algin-items-center">
                    <div class="mx-auto pt-3">
                        <img src="../../assets/dsv-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/po-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light">
            <div class="title-text p-4">
                <h2 class="font-weight-bold text-center">
                    A digital freight forwarder serving
                    <span class="text-warning">carriers</span>
                </h2>
                <div class="w-75 mx-auto">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 p-3">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>You can access loads from 3,000 industrial Shippers registered on our platform. Find back the time to focus on what matters for you while using the best tools on the market.</small>
                        </div>
                        <div class="col-lg-6 p-3">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>A few clicks to find the best spot loads or to bid on tenders. Prices are transparent, you can focus back on margins</small>
                        </div>
                        <div class="col-lg-6 p-3">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>You can access loads from 3,000 industrial Shippers registered on our platform. Find back the time to focus on what matters for you while using the best tools on the market.</small>
                        </div>
                        <div class="col-lg-6 p-3">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>A few clicks to find the best spot loads or to bid on tenders. Prices are transparent, you can focus back on margins</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-secondary d-none d-lg-block">
            <div class="row m-0">
                <div class="col-lg-6 p-5">
                    <h2 class="text-light">
                        Find freight everywhere in
                        <span class="text-warning">Europe</span>
                    </h2>
                    <p
                        class="text-light"
                    >Everoad brings you freight opportunities - pallet distribution, LTL, FTL - throughout Europe. Our shippers publish local, national and international loads that help you better manage your fleet on a daily basis.</p>
                </div>
                <div class="col-lg-6 p-0">
                    <img src="../../assets/map.svg" alt="map" class>
                </div>
            </div>
        </div>
        <div class="p-5 mx-auto">
            <h1 class>
                They
                <span class="text-warning">truse</span> us
            </h1>
            <div class="row justify-content-center">
                <div class="col-lg mx-3">
                    <div class="card rounded-0 shadow-lg border-0 h-100">
                        <div class="card-group p-3">
                            <small>Everoad is a simple and intuitive Freight platform that allows us to find reliable and hassle-free shipments throughout the year while guaranteeing payment.</small>
                            <p class="pt-3 font-weight-bold">Nourédine Ziane, Directeur Général</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg mx-3">
                    <div class="card rounded-0 shadow-lg border-0 h-100">
                        <div class="card-group p-3">
                            <small>We specialize in across-Channel transport. The Everoad's notification system allows us to only focus on loads that matter for us. This means more freight, and less hassle!</small>
                            <p class="pt-3 font-weight-bold">Paul ALBANHAC, Directeur Général France</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg mx-3">
                    <div class="card rounded-0 shadow-lg border-0 h-100">
                        <div class="card-group p-3">
                            <small>Everoad has helped us get rid of cash flow issues thanks to the 72-hour payment, without losing margin, allowing us to buy two new trucks!</small>
                            <p class="pt-3 font-weight-bold">Francis Nickel, Directeur Général</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "../../layout/Navbar.vue";
import NavbarScroll from "../../layout/navbarscroll/NavbarScroll.vue";
import Footer from "../../layout/Footer.vue";
export default {
    components: {
        Navbar,
        Footer,
        NavbarScroll
    }
};
</script>

<style scoped>
.my-bg {
    background: url(../../assets/bg-carrier.jpg) no-repeat center center;
    height: 80vh;
    background-size: cover;
}
.my-bg-transparent-dark {
    background: rgba(46, 59, 76, 0.6);
    height: 80vh;
    background-size: cover;
}
.my-bg-transparent-dark-rotate {
    background: url(../../assets/bg-rotate.svg) no-repeat center center;
    height: 80vh;
    background-size: cover;
}
</style>


