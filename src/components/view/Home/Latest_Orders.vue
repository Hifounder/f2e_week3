<template>
    <div class="card">
        <div>
            <span class="card_title">Latest Orders</span>
        </div>
        <div>
            <ul class="order_ul">
                <li class="order_li">
                    <div class="order_left">
                        <img src="https://c.pxhere.com/photos/64/e3/bw_fuji_market_candid_streetphotography_explore_squareformat_fujifilm-308853.jpg!d" width="100px" height="100px">
                    </div>
                    <div class="order_right">
                        <p class="order_title">Vintage T-shirt</p>
                        <div class="order_down">
                            <div class="order_main">
                                <p class="order_time color_font_w"><font-awesome-icon icon="clock" class="order_icon" />2018/6/13  13:42</p>
                                <p class="order_name color_font_w"><font-awesome-icon icon="male" class="order_icon" />Belle Willis</p>
                            </div>
                            <div class="order_total">
                                <p class="order_font">Total</p>
                                <p class="order_money">3,200</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="order_li">
                    <div class="order_left">
                        <img src="https://c.pxhere.com/photos/64/e3/bw_fuji_market_candid_streetphotography_explore_squareformat_fujifilm-308853.jpg!d" width="100px" height="100px">
                    </div>
                    <div class="order_right">
                        <p class="order_title">Vintage T-shirt</p>
                        <div class="order_down">
                            <div class="order_main">
                                <p class="order_time color_font_w"><font-awesome-icon icon="clock" class="order_icon" />2018/6/13  13:42</p>
                                <p class="order_name color_font_w"><font-awesome-icon icon="male" class="order_icon" />Belle Willis</p>
                            </div>
                            <div class="order_total">
                                <p class="order_font">Total</p>
                                <p class="order_money">3,200</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="order_li">
                    <div class="order_left">
                        <img src="https://c.pxhere.com/photos/64/e3/bw_fuji_market_candid_streetphotography_explore_squareformat_fujifilm-308853.jpg!d" width="100px" height="100px">
                    </div>
                    <div class="order_right">
                        <p class="order_title">Vintage T-shirt</p>
                        <div class="order_down">
                            <div class="order_main">
                                <p class="order_time color_font_w"><font-awesome-icon icon="clock" class="order_icon" />2018/6/13  13:42</p>
                                <p class="order_name color_font_w"><font-awesome-icon icon="male" class="order_icon" />Belle Willis</p>
                            </div>
                            <div class="order_total">
                                <p class="order_font">Total</p>
                                <p class="order_money">3,200</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default{
}
</script>

<style>
.order_ul{
    padding: 0;
}
.order_li{
    list-style-type: none;
    border-bottom: 1px solid #EBEBEB;
    display: flex;
    align-items: center;
}
.order_down{
    display: flex;
}
.order_lift{
    width: 20%
}
.order_right{
    width: 80%;
    padding: 0 15px;
}
.order_title{
    font-family: HelveticaNeue-Bold;
    font-size: 20px;
    color: #000000;
}
.order_icon{
    width: 25px!important;
}
.order_total{
    text-align: right;
}
.order_font{
    font-family: HelveticaNeue;
    font-size: 14px;
}
.order_money{
    font-family: HelveticaNeue-Bold;
    font-size: 20px;
}
.order_title,
.order_time,
.order_name,
.order_font,
.order_money{
    margin: 3px 0;
}
.order_main,
.order_total{
    width: 50%;
}
</style>