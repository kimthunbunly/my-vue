<template>
    <div class="bg-light">
        <div class="navbar bg-dark">
            <router-link to="/">
                <div class="navbar-brand">
                    <img class="img-fluid w-25" src="../../assets/everoad-logo.png" alt="logo">
                </div>
            </router-link>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="mx-auto mt-45">
                    <div class="card-tile p-2 text-center">
                        <h2>Sign In</h2>
                        <small>Please log into your account with your username and password.</small>
                    </div>
                </div>
                <div class="mx-auto pb-5">
                    <form class="bg-white p-3">
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email">
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
                        <div class="text-center">
                            <button
                                type="submit"
                                class="btn btn-primary w-50 m-3 font-weight-bold"
                            >Login</button>
                        </div>
                        <div class="text-center">
                            <small>
                                <a href="#">Forget Password?</a>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
