<template>
    <div class="home" @scroll="handleScroll">
        <Navbar/>
        <!-- <Carousel/> -->
        <div class="my-bg">
            <div class="my-bg-transparent-dark">
                <nav
                    class="navbar navbar-expand-lg d-none d-lg-block my-transition"
                    style="z-index:999"
                    :class="isTop? 'white':'bg-transparent'"
                >
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="container">
                            <div class="d-flex bd-highlight">
                                <div class="p-2 flex-grow-1 bd-highlight align-self-center">
                                    <img
                                        src="../assets/everoad-logo.png"
                                        class="img-fluid w-25"
                                        :class="isTop? 'd-none':''"
                                        alt="logo"
                                    >
                                    <img
                                        src="../assets/everoad-logo-white.png"
                                        class="img-fluid w-25 d-none"
                                        :class="isTop? 'd-block  ':''"
                                        alt="logo"
                                    >
                                </div>
                                <!-- <router-link to="/"> -->
                                <a
                                    :class="isTop? 'text-dark':''"
                                    class="p-2 nav-link align-self-center text-light font-weight-bold my-style-animation"
                                >Home</a>
                                <!-- </router-link> -->
                                <a
                                    :class="isTop? 'text-dark':''"
                                    href="#"
                                    class="p-2 nav-link align-self-center text-light font-weight-bold my-style-animation"
                                >Shippers</a>
                                <a
                                    :class="isTop? 'text-dark':''"
                                    href="/"
                                    class="p-2 nav-link align-self-center text-light font-weight-bold my-style-animation"
                                >Carriers</a>
                                <div class="p-2 bd-highlight align-self-center nav-item">
                                    <router-link to="/login">
                                        <button
                                            class="btn font-weight-bold btn-outline-dark rounded-0"
                                        >Login</button>
                                    </router-link>
                                </div>
                                <div class="p-2 bd-highlight align-self-center">
                                    <router-link to="/signup">
                                        <button
                                            class="btn font-weight-bold btn-primary rounded-0"
                                        >Signup</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
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
export default {
  components: {
    Navbar,
    // Carousel,
    Footer
  },
  data(){
    return{
      bgChangeColor:"",
      isTop: false
    }
  },
  methods:{
    handleScroll (){
      const x = window.scrollY
      if (x > 55) {
         this.bgChangeColor = "white"
         this.isTop= true
      } else {
        this.bgChangeColor = ""
        this.isTop= false
      }
      console.log(window.scrollY);
      
    }
  },
  created () {
  window.addEventListener('scroll', this.handleScroll );
  },
destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
}
};
</script>

<style scoped>
.my-bg {
    background: url(../assets/bg-home.jpg) no-repeat center center;
    height: 100vh;
    background-size: cover;
}
.my-bg-transparent-dark {
    background: rgba(46, 59, 76, 0.6);
    height: 100vh;
    background-size: cover;
}
.white {
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    transition: background-color 0.8s ease;
}
.my-transition {
    transition: background-color 0.8s ease;
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

