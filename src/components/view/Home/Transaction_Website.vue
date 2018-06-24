<template>
    <div class="card">
        <div>
            <span class="card_title">Transaction Website</span>
        </div>
        <table class="web_table">
            <tbody>
                <tr>
                    <td class="web_icon"><img src="https://png.icons8.com/metro/1600/facebook.png" alt=""></td>
                    <td class="web_url color_font_w"> google.com</td>
                    <td class="web_people"> 23,582</td>
                    <td class="web_line"><span class="color_font_g"><i class="el-icon-caret-top"></i>20%</span></td>
                </tr>
                <tr>
                    <td class="web_icon"><img src="https://cdn.icon-icons.com/icons2/887/PNG/512/Google_icon-icons.com_68981.png" alt=""></td>
                    <td class="web_url color_font_w"> google.com</td>
                    <td class="web_people"> 23,582</td>
                    <td class="web_line"><span class="color_font_g"><i class="el-icon-caret-top"></i>20%</span></td>
                </tr>
                <tr>
                    <td class="web_icon"><img src="https://cdn.icon-icons.com/icons2/512/PNG/512/shopify_icon-icons.com_50754.png" alt=""></td>
                    <td class="web_url color_font_w"> google.com</td>
                    <td class="web_people"> 23,582</td>
                    <td class="web_line"><span class="color_font_g"><i class="el-icon-caret-top"></i>20%</span></td>
                </tr>
                <tr>
                    <td class="web_icon"><img src="https://image.freepik.com/free-icon/wordpress-logo-of-a-letter-in-a-circle_318-49857.jpg" alt=""></td>
                    <td class="web_url color_font_w"> google.com</td>
                    <td class="web_people"> 23,582</td>
                    <td class="web_line"><span class="color_font_g"><i class="el-icon-caret-top"></i>20%</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
/* eslint-disable */
export default{
}
</script>

<style>
.web_table{
    width: 100%;
}
.web_table tbody tr td{
    border-bottom: 1px solid #EBEBEB;
}
.web_table tbody tr:last-child td{
    border-bottom: none;
}
.web_icon img{
    width: 50px;
    margin: 15px 0;
}
.web_people{
    font-family: HelveticaNeue-Medium;
    font-size: 20px;
    color: #000000;
    text-align: right;
}
.web_line{
    text-align: right;
    font-size: 20px;
}
.web_icon .web_url .web_people .web_line{
    width: 25%
}
</style>