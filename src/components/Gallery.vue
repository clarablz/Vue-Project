<template>
<div class = "gallery">

      <Card 
            v-for="(pokemon, index) in pokeData"
            :key="'poke'+index" 
            :name="pokemon.name"
            :pictureUrl="imageUrl + pokemon.id + '.png'" 
            />
            


</div>
</template>


<script>
import Card from '../components/Card.vue'
import getPokeData from '@/services/api/pokeAPI'
getPokeData()


export default {
  name: 'Gallery',
  props: {
        imageUrl: String
  },
  components: {
        Card
  },
  data(){
        return{
              pokeData: [],
              nextUrl: ''
        }
  },
  created: function(){
        this.retrievePokeData()
        console.log(this.pokeData)
  },
  methods: {
		retrievePokeData() {
                  let req = new Request("https://pokeapi.co/api/v2/pokemon?offset=0")
                  fetch(req)
                        .then((resp)=> {
                              if(resp.status ===200)
                                    return resp.json()
                        })
                        .then((data)=>{
                              this.nextUrl = data.next 
                              data.results.forEach(pokemon => {
                                    pokemon.id=pokemon.url.split('/')
                                          .filter(function(part) {return !!part}).pop()
                                    this.pokeData.push(pokemon)                                   
                              });
                        })
                  
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