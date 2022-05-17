<template>
  <div id="app">
    <Pokedex/>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue'


export default {
  name: 'App',
  components: {
    Pokedex
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

h1 {
  text-align: center;
  font-size: 4vw;
  font-family: 'Montserrat';
  font-weight: 800;
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
