<template>
      <div class="poke_details">
            <h3>Poke Name</h3>
            <h4>Types</h4>
            <h4>Size</h4>
            <h4>Weight</h4>
      </div>
            
</template>


<script>
export default {
  name: 'Details',
  props: {
        name: {type: String, default:"Pokemon"},
        number: String,
        type: String,
        pictureUrl: {type: String, default:"https://img.icons8.com/clouds/2x/fa314a/pokemon-go.png"}
  },

}


</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

.poke_details{
            position: absolute;
            z-index: 1;
            
            width: 50vh;
            height:50vh;
            background-color: white;
            border-radius: 10px;
            margin: 10%;
            filter: drop-shadow(5px 15px 15px #dddddd);
            font-family: 'Montserrat', sans-serif;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
            align-content: space-around;
      }

</style>