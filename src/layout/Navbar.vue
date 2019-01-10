<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" :class="lengthScreen? 'sticky-top':''">
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <img src="../assets/everoad-logo.png" class="img-fluid mx-auto w-25 d-lg-none" alt="logo">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="p-2 bd-highlight text-light nav-link">
                        <span class="text-warning">Tel:</span> 33 (0) 1 76 44 01 03
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="p-2 bd-highlight text-light nav-link">
                        <span class="text-warning">Email:</span> contact@everoad.com
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#" class="p-2 bd-highlight text-light nav-link">Help & FAQ</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="p-2 bd-highlight text-light nav-link">Profile</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="javaScript">
export default {
  data(){
    return{
      windowWidth: 0,
      lengthScreen: false
    }
  },
 watch: {
    windowWidth() {
     if (this.windowWidth < 992) {
       this.lengthScreen = true;
     } else {
       this.lengthScreen = false;      
     }
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
}
</script>


<style lang="scss" scoped>
</style>


