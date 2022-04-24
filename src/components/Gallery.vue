<template>
<div class = "pokemon-gallery">
      <Details v-show="isVisible == true"/>
      <div class="gallery-options">        
		<input type="text" class="search-bar" v-model="search" placeholder="Look for a pokemon">
            <button v-if="search" @click="cleanSearch" class="erase-button">X</button>
            <label for="pokemon-sort" class="sort-by">Sort by: </label>
				<select v-model="pokemonSortType" id="pokemon-sort" class="select-filter">
                              <option value="IncreasingId">Id (increasing)</option>
                              <option value="DecreasingId">Id (decresing)</option>
                              <option value="AZName">Names from A to Z</option>
                              <option value="ZAName">Names from Z to A</option>
				</select>
	</div>

      <div class="gallery">
            <Card @click.native="displayDetails"
                  v-for="(pokemon, index) in pokemonsOrganizedData"
                  :key="'poke'+index" 
                  :name="pokemon.name"
                  :number="pokemon.id"
                  :pictureUrl="imageUrl + pokemon.id + '.png'" 
            /> 
      </div>
      
</div>
</template>


<script>
import Card from '../components/Card.vue'
import getPokeData from '@/services/api/pokeAPI'
import Details from '../components/Details.vue'

getPokeData()


export default {
  name: 'Gallery',
  computed: {
      pokemonsOrganizedData: function() {
	const field = ["AZName", "ZAName"].includes(this.pokemonSortType) ? "name" : "id"
			const reversed = ["ZAName", "DecreasingId"].includes(this.pokemonSortType)
			const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
			const comparator = (a, b) => a[field].localeCompare(b[field]) 
			let data = this.pokeData.filter(filterFunc)
                  if(field=="name"){
                        data = data.sort(comparator)
                  }
			if(field=="id"){
                        data=data.sort()
                  }
			if (reversed) data = data.reverse()
			return data
      }
},
  props: {
        imageUrl: String
  },
  components: {
        Card,
    Details
  },
  data(){
        return{
              pokeData: [],
              nextUrl: '',
              search: "",
              pokemonSortType: "IncreasingId",
              isVisible: false
              
        }
  },
  created: function(){
        this.retrievePokeData()
        console.log(this.pokeData)
  },
  methods: {
		retrievePokeData() {
                  let req = new Request("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
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
                  
            },
            cleanSearch: function() {
                  this.search=""
            },
            displayDetails : function() {
			this.isVisible=!this.isVisible
                  
		}
            
		
	}

}
</script>


<style>

      .pokemon-gallery{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
      }
      .gallery{
            display: grid;
            grid-template-columns: 20vw 20vw 20vw;
      }

      .search-bar{
            font-family: 'Montserrat';
            border-radius: 40px;
            border: 1px solid grey;
            padding-left: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
            margin-right: 20px;
      }

      .sort-by{
            font-family: 'Montserrat';
      }

      .select-filter{
            font-family: 'Montserrat';
            border-radius: 40px;
            border: 1px solid grey;
            margin-left: 5px;
            padding-left: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
      }

      
</style>