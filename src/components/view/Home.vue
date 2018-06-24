<template>
    <div class="container">
        <Total/>
        <div class="box">
            <div class="box_50">
                <Website/>
            </div>
            <div class="box_50">
                <Orders/>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Total from './Home/Total' 
import Orders from './Home/Latest_Orders'
import Website from './Home/Transaction_Website'

export default{
    components:{
        Total,
        Orders,
        Website
    }
}
</script>

<style>

</style>
