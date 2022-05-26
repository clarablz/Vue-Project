<template>
      <div class="Pokedex">
            <Header/>
            <Gallery 
            :image_url="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'"
            @set_pokemon_url="set_pokemon_url"
            />

            <Detail
            v-if="display_detail"
            :pokemon_url="pokemon_url"
            :image_url="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'"
            :shiny_image_url="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'"
            @close_detail="close_detail"
            />

            <Footer/>
      </div>
</template>

<script>
import Header from "../components/Header.vue"
import Gallery from "../components/Gallery.vue"
import Detail from "../components/Detail.vue"
import Footer from "../components/Footer.vue"

export default {
      data:() =>{
            return{
                  pokemon_url:'',
                  display_detail: false,
                  search: localStorage.getItem("search") || "",
                  pokemon_sort_type: localStorage.getItem("pokemon_sort_type") || "increasing_id",
            }
      },
      components:{
            Header,
            Gallery,
            Detail,
            Footer
            },
      methods: {
            set_pokemon_url(url){
                  this.pokemon_url = url;
                  this.display_detail = true;
            },
            close_detail(){
                  this.pokemon_url='';
                  this.display_detail = false
            }
      },

}
</script>
