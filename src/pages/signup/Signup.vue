<template>
    <div class="row mx-0 bg-light">
        <div class="col-lg-6">
            <div class="bg-primary fixed-top pt-3">
                <div class="w-100 d-lg-none">
                    <p
                        class="text-center text-light font-weight-bold"
                    >Get a 10% discount for your 1st shipment with the code HAPPY10</p>
                </div>
                <div class="w-50 d-none d-lg-block">
                    <p
                        class="text-center text-light font-weight-bold"
                    >Get a 10% discount for your 1st shipment with the code HAPPY10</p>
                </div>
            </div>
            <div class="mt-5 pt-5 text-center">
                <img src="../../assets/everoad-logo-white.png" class="img-fluid p-2 w-50" alt>
                <h2 class="text-title">Customer registration</h2>
                <p class="text-title">You will soon be able to ship easily and at the right price.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form class="my-3">
                        <div class="w-75 mx-auto">
                            <div class="form-group">
                                <label for="firm">Firm</label>
                                <input
                                    type="text"
                                    class="form-control shadow-none"
                                    id="firm"
                                    placeholder="Company Name"
                                    required="required"
                                >
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label for="country">Billing country</label>
                                        <input
                                            type="text"
                                            class="form-control shadow-none"
                                            required="required"
                                        >
                                    </div>
                                    <div class="col-lg-6">
                                        <label for="country">SIRET</label>
                                        <input
                                            type="text"
                                            class="form-control shadow-none"
                                            required="required"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label for="firstname">First name</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            class="form-control shadow-none"
                                            placeholder="First name"
                                            required="required"
                                        >
                                    </div>
                                    <div class="col-lg-6">
                                        <label for="lastname">Last name</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            class="form-control shadow-none"
                                            placeholder="Last name"
                                            required="required"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email"></label>
                                <input
                                    type="email"
                                    name="email"
                                    class="form-control shadow-none"
                                    placeholder="Enter Your Email"
                                    required="required"
                                >
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label for="language">Language</label>
                                        <input
                                            type="text"
                                            name="language"
                                            class="form-control shadow-none"
                                            placeholder="Language"
                                            required="required"
                                        >
                                    </div>
                                    <div class="col-lg-6">
                                        <label for="phone">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            class="form-control shadow-none"
                                            placeholder="Phone Number"
                                            required="required"
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    class="form-control shadow-none"
                                    placeholder="*********"
                                    required="required"
                                >
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <small>
                                By clicking on “Create my account”, I accept the
                                <a
                                    href="#"
                                >Terms of Service</a>
                            </small>
                        </div>
                        <div class="text-center">
                            <button
                                type="submit"
                                class="btn btn-success rounded-0 font-weight-bold"
                            >Create my account</button>
                        </div>
                        <div class="form-group text-center p-2">
                            <small>Already registered?
                                <router-link to="/login">
                                    <a href="#">Connect</a>
                                </router-link>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-6 my-bg fixed-top ml-auto d-none d-lg-block">
            <!-- <h3>Hello Column One</h3> -->
        </div>
    </div>
</template>


<style scoped>
.my-bg {
    background: url("../../assets/women.jpg");
    height: 100vh;
    background-size: cover;
    background-position: center;
}
</style>

