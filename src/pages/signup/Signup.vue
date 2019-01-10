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
            <form class="w-50 mx-auto my-3">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    >
                    <small
                        id="emailHelp"
                        class="form-text text-muted"
                    >We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    >
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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

