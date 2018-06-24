<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  background: #F2F2F2;
}
.container{
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}
.color_font_g{
  color: #7ED321;
}
.color_font_r{
  color: #D0021B;
}
.color_font_b{
  color: #4A90E2;
}
.color_font_w{
  color: #9B9B9B;
}
.box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.box_50{
  width: 49%;
}
.card{
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px #EBEBEB;
  padding: 30px 40px;
  margin-bottom: 18px;
}
.card_title{
  font-family: HelveticaNeue-Bold;
  font-size: 24px;
  color: #000000;
}
</style>
