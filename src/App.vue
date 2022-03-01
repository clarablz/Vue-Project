<template>
  <div id="app">
    <p>Pokedex</p>
    <Gallery></Gallery>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'


export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>

<style>
p {
  text-align: center;
  font-size: 18px;
}

#app{
  display: flex;
  flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
  background-color: #f6f8fc;
}
</style>
