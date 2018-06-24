<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './view/Navber'
import Home from './view/Home'
import Order from './view/Order'
import Product from './view/Product'

export default {
    components:{
        Navbar,
        Home,
        Order,
        Product
    }
}
</script>

<style>

</style>
