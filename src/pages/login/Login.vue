<template>
    <div>
        <div class="navbar bg-dark">
            <router-link to="/">
                <div class="navbar-brand">
                    <img class="img-fluid w-25" src="../../assets/everoad-logo.png" alt="logo">
                </div>
            </router-link>
        </div>
        <form class="w-25 mx-auto mt-5">
            <div class="card-tile pb-2">
                <h2>Sign In</h2>
                <small>Please log into your account with your username and password.</small>
            </div>
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
</template>
