<template>
  <div class="root">
     <div class="container">
        <ul class="progressbar">
          <li :class="i <= page ? 'active' : ''" v-for="i in length" :key="i"></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    length: Number,
    page: Number
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.root {
  height: 60px;
}
.container{
  width: 650px;
  position: absolute;
  z-index: 1;
}
ul {
  list-style: none;
}
.progressbar{
  counter-reset: step;
}
.progressbar li{
  float: left;
  width: 14.28%;
  position: relative;
  text-align: center;
}
.progressbar li:before{
  content:'';
  width: 20px;
  height: 20px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}
.progressbar li:after{
  content: '';
  position: absolute;
  width:100%;
  height: 3px;
  background: #979797;
  top: 11px;
  left: -50%;
  z-index: -1;
}
.progressbar li.active:before{
 border-color: #4BBBFA;
 background: #8CD6FF;
 color: white
}
.progressbar li.active:after{
 background: #8CD6FF;
}
.progressbar li.active - li:after{
 background: #8CD6FF;
}
.progressbar li.active - li:before{
border-color: #8CD6FF;
background: #8CD6FF;
color: white
}
.progressbar li:first-child:after{
 content: none;
}
</style>