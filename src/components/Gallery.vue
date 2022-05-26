<template>
<div class = "pokemon_gallery">
      <GalleryOptions :search.sync="search" :pokemon_sort_type.sync="pokemon_sort_type"/>

      <div class="gallery">
            <Card @click.native="set_pokemon_url(pokemon.url)"
                  v-for="(pokemon, index) in pokemons_organized_data"
                  :key="'poke'+index" 
                  :name="pokemon.name"
                  :number="pokemon.id"
                  :picture_url="image_url + pokemon.id + '.gif'" 
            /> 
            <div class="scroll_trigger" ref="infinite_scroll_trigger"></div>
            
      </div>
      
</div>
</template>


<script>
import Card from '../components/Card.vue'
import GalleryOptions from '../components/GalleryOptions.vue'



export default {
  name: 'Gallery',
  computed: {
      pokemons_organized_data: function() {
            const field = ["AZName", "ZAName"].includes(this.pokemon_sort_type) ? "name" : "id"
            const reversed = ["ZAName", "DecreasingId"].includes(this.pokemon_sort_type)
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
        image_url: String
  },
  components: {
        Card,
        GalleryOptions
  },
  data(){
        return{
              pokeData: [],
              search: localStorage.getItem("search") || "",
              pokemon_sort_type: localStorage.getItem("pokemon_sort_type") || "",
              next_url: '',
              current_url: ''              
        }
  },
  created(){
        this.current_url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
        this.retrieve_poke_data()
  },
  mounted(){
        this.infinite_scroll();
  },
  methods: {
		retrieve_poke_data() {
                  let req = new Request(this.current_url)
                  fetch(req)
                        .then((resp)=> {
                              if(resp.status ===200)
                                    return resp.json()
                        })
                        .then((data)=>{
                              this.next_url = data.next 
                              data.results.forEach(pokemon => {
                                    pokemon.id=pokemon.url.split('/')
                                          .filter(function(part) {return !!part}).pop()
                                    this.pokeData.push(pokemon)                                   
                              });
                        })
                        .catch((error) => {
                              console.log(error);
                        })
                  
            },
            next(){
                  this.current_url = this.next_url;
                  this.retrieve_poke_data();
            },
            set_pokemon_url(url){
                  this.$emit('set_pokemon_url', url);
            },
            infinite_scroll(){
                  const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry =>{
                              if(entry.intersectionRatio > 0  && this.next_url){
                                    this.next();
                              }
                        })
                  })
                  observer.observe(this.$refs.infinite_scroll_trigger);
            }
            
		
	}

}
</script>


<style>

      .pokemon_gallery{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
      }
      .gallery{
            display: grid;
            grid-template-columns: 20vw 20vw 20vw;
            padding-top: 50px;
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

      @media screen and (max-width: 586px) {
            .gallery{
                  grid-template-columns: 60vw;
            }
      }
      
</style>