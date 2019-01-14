<template>
    <div>
        <nav
            @scroll="handleScroll"
            class="navbar navbar-expand-lg d-none d-lg-block my-transition"
            style="z-index:999"
            :class="isTop? 'white shadow-sm':'bg-transparent'"
        >
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="w-75 mx-auto">
                    <div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight align-self-center">
                            <img
                                src="../../assets/everoad-logo.png"
                                class="img-fluid w-25"
                                :class="isTop? 'd-none':''"
                                alt="logo"
                            >
                            <img
                                src="../../assets/everoad-logo-white.png"
                                class="img-fluid w-25 d-none"
                                :class="isTop? 'd-block  ':''"
                                alt="logo"
                            >
                        </div>
                        <!-- <router-link to="/"> -->
                        <a class="p-2 align-self-center my-style-animation">
                            <router-link
                                :class="isTop? 'text-dark':''"
                                to="/"
                                class="text-light font-weight-bold"
                            >Home</router-link>
                        </a>
                        <a class="p-2 align-self-center my-style-animation">
                            <router-link
                                :class="isTop? 'text-dark':''"
                                to="/shipper"
                                class="text-light font-weight-bold"
                            >Shippers</router-link>
                        </a>
                        <a class="p-2 align-self-center my-style-animation">
                            <router-link
                                :class="isTop? 'text-dark':''"
                                to="/carrier"
                                class="text-light font-weight-bold"
                            >Carriers</router-link>
                        </a>
                        <div class="p-2 bd-highlight align-self-center nav-item">
                            <router-link to="/login">
                                <button
                                    class="btn font-weight-bold btn-outline-dark rounded-0"
                                >Login</button>
                            </router-link>
                        </div>
                        <div class="p-2 bd-highlight align-self-center">
                            <router-link to="/signup">
                                <button class="btn font-weight-bold btn-primary rounded-0">Signup</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>


<script lang="javaScript">

export default {
  components: {

  },
  data(){
    return{
      isTop: false
    }
  },
  methods:{
    handleScroll (){
      const x = window.scrollY
      if (x > 55) {
         this.isTop= true
      } else {
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
.my-style-animation:hover {
    border-top: 5px solid rgb(32, 176, 246);
    transition: 0.31s;
    text-decoration: none;
    /* border-top: #fff; */
}
</style>

