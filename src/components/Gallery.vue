<template>
<div class = "gallery">
      <Card :name="pokeData[0].name" number="001" type="Plante et Poison" id="card_1"></Card>
      <Card :name="pokeData[1].name" number="002" type="Plante et Poison" id="card_2"></Card>
      <Card :name="pokeData[2].name" number="003" type="Plante et Poison" id="card_3"></Card>
      <Card :name="pokeData[3].name" number="004" type="Feu" id="card_4"></Card>
      <Card :name="pokeData[4].name" number="005" type="Feu" id="card_5"></Card>
      <Card :name="pokeData[5].name" number="006" type="Feu et vol" id="card_6"></Card>
      
</div>
</template>


<script>
import Card from '../components/Card.vue'
import getPokeData from '@/services/api/pokeAPI'
getPokeData()


export default {
  name: 'Gallery',
  components: {
        Card
  },
  data(){
        return{
              pokeData: []
        }
  },
  created: function(){
        this.retrievePokeData()
  },
  methods: {
		async retrievePokeData() {
			this.pokeData = await getPokeData()
                  this.pokeData = this.pokeData["results"]
                  console.log(this.pokeData)
            }
	}

}
</script>


<style>
      .gallery{
            display: grid;
            grid-template-columns: 20vw 20vw 20vw;
      }
</style>