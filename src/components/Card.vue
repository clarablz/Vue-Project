<template>
      <div class="card">
            <img class="picture" v-bind:src="pictureUrl"/>
            <p class="name">{{name}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{type}}</p>
      </div>
</template>


<script>
export default {
  name: 'Card',
  props: {
        name: {type: String, default:"Pokemon"},
        number: String,
        type: String,
        pictureUrl: {type: String, default:"https://img.icons8.com/clouds/2x/fa314a/pokemon-go.png"}
  }

}



</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
.card{
      background-color: white;
      filter: drop-shadow(5px 15px 15px #dddddd);
      border-radius: 10px;
      margin: 10%;
      font-family: 'Montserrat', sans-serif;
      display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: space-around;
      text-transform: capitalize;
      cursor: pointer;
}
</style>