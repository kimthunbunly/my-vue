<template>
    <div>
        <Navbar/>
        <div class="my-bg">
            <div class="my-bg-transparent-dark">
                <div class="my-bg-transparent-dark-rotate">
                    <NavbarScroll/>
                    <div class>
                        <div class="p-5 mt-3 w-50">
                            <h1 class="text-light">Ship your goods
                                <br>
                                <span class="text-warning">seamlessly</span>
                            </h1>
                            <div class="w-75">
                                <p
                                    class="text-light font-weight-bold d-none d-lg-block"
                                >Manage your spot & regular shipments easily and with peace of mind, using the largest European network of carriers and the best prices. From identifying the right carrier to following your shipment across roads, Everoad is your unique contact.</p>
                            </div>
                        </div>
                        <router-link to="/signup">
                            <div class="pl-5">
                                <button class="btn btn-primary rounded-0 w-25">I want to ship</button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none d-lg-block">
            <div class="row bg-dark m-0">
                <div class="col-lg-2 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/co-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-2 d-flex algin-items-center">
                    <div class="mx-auto pt-3">
                        <img src="../../assets/dsv-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-2 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/po-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-2 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/po-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-2 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/po-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-2 d-flex algin-items-center">
                    <div class="mx-auto">
                        <img src="../../assets/po-logo.svg" alt="logo" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light">
            <div class="title-text p-5">
                <h2 class="font-weight-bold text-center">
                    A digital freight forwarder serving
                    <span class="text-warning">carriers</span>
                </h2>
                <div class="p-5 mx-auto">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 p-4">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>You can access loads from 3,000 industrial Shippers registered on our platform. Find back the time to focus on what matters for you while using the best tools on the market.</small>
                        </div>
                        <div class="col-lg-6 p-4">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>A few clicks to find the best spot loads or to bid on tenders. Prices are transparent, you can focus back on margins</small>
                        </div>
                        <div class="col-lg-6 p-4">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>You can access loads from 3,000 industrial Shippers registered on our platform. Find back the time to focus on what matters for you while using the best tools on the market.</small>
                        </div>
                        <div class="col-lg-6 p-4">
                            <h4>Thousands of national & international shippers.</h4>
                            <small>A few clicks to find the best spot loads or to bid on tenders. Prices are transparent, you can focus back on margins</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4">
            <h2 class="font-weight-bold text-center p-3">
                Innovative digital solution matching Shippers with
                <span
                    class="text-warning"
                >carriers</span>
            </h2>
            <img src="../../assets/content.svg" alt="img-content" class="img-fluid p-4">
        </div>
        <div class="bg-secondary d-none d-lg-block">
            <div class="row m-0">
                <div class="col-lg-6 p-5">
                    <h2 class="text-light">
                        Ship everywhere in
                        <span class="text-warning">Europe</span>
                    </h2>
                    <p
                        class="text-light"
                    >Whether you need to ship goods from Spain to Germany or from Lyon to Paris, Everoad's platform allows you to find an available truck among a unique network of 3,000 certified professional carriers owning 200,000 trucks throughout Europe.</p>
                </div>
                <div class="col-lg-6 p-0">
                    <img src="../../assets/map.svg" alt="map" class>
                </div>
            </div>
        </div>
        <div class="p-5 mx-auto">
            <h1 class>
                They
                <span class="text-warning">talk</span> about us
            </h1>
            <div class="row justify-content-center">
                <div class="col-lg mx-3">
                    <div class="card rounded-0 shadow-lg border-0 h-100">
                        <div class="card-group p-3">
                            <small>Everoad has become the main transportation partner of Brand Alley. The platform helps me save time and I love the responsiveness of the team.</small>
                            <p class="pt-3 font-weight-bold">Stéphane, Supply chain Director</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg mx-3">
                    <div class="card rounded-0 shadow-lg border-0 h-100">
                        <div class="card-group p-3">
                            <small>Everoad has integrated seamlessly in our Supply chain scheme and has helped us make it more reliable in a complex context.</small>
                            <p
                                class="pt-3 font-weight-bold"
                            >Hugues, Supply chain Manager, Southern Europe</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg mx-3">
                    <div class="card rounded-0 shadow-lg border-0 h-100">
                        <div class="card-group p-3">
                            <small>We've been working closely with everoad for 6 months on our Spot transport and are now also counting on them for our Regular lanes to help simplify shipments management.</small>
                            <p class="pt-3 font-weight-bold">Augustin, Flow Manager</p>
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
    background: url(../../assets/bg-shipper.jpg) no-repeat center center;
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


