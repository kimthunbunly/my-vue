<template>
    <div>
        <Navbar/>
        <div class="my-bg">
            <NavbarScroll/>
        </div>
    </div>
</template>

<script>
import Navbar from "../../layout/Navbar.vue";
import NavbarScroll from "../../layout/navbarscroll/NavbarScroll.vue";
export default {
    components: {
        Navbar,
        NavbarScroll
    }
};
</script>

<style scoped>
.my-bg {
    background: url(../../assets/bg-shipper.jpg) no-repeat center center;
    height: 100vh;
    background-size: cover;
}
</style>


