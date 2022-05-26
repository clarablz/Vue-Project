<template>
      <div class = "footer_div">
        <p class="footer_text">done with Vue.js</p>
      </div>
</template>

<script>

export default {
      name: 'Footer'
}
</script>
    
<style>
    .footer_div{
        z-index: 3;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #b0b9c2;
        color: white;
        text-align: center;
    }
    .footer_text{
        font-family: 'Montserrat';
        font-size: 12px;
    }

</style>