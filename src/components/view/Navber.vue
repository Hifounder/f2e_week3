<template>
    <div>
        <div class="Navbar">
            <div class="container">
                <span>Shoptime</span>
                <router-link to="/" exact>Home</router-link>
                <router-link to="/Order" exact>Order</router-link>
                <router-link to="/Product" exact>Product</router-link>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
</script>

<style>
.Navbar{
    background-color: #000;
    color: #fff;
    padding: 21px 0 ;
}
.Navbar span{
    font-family: HelveticaNeue-Bold;
    font-size: 24px;
    color: #FFFFFF;
    margin: 12px 30px 12px 0;
}
.Navbar a{
    color: #fff;
    text-decoration: none;
    padding: 17px 30px;
}
.Navbar .router-link-active{
    border-bottom: 5px solid #fff;
}
</style>
