<template>
      <div>
      <h1>Pokedex</h1>
      </div>
</template>

<script>

export default {
      name: 'Header',
      props:{
      },
      watch: {
            search: function(new_search){
                  localStorage.setItem("search", new_search)
            },
            pokemon_sort_type: function(new_pokemon_sort_type){
                  localStorage.setItem("pokemon_sort_type", new_pokemon_sort_type)
            }
      },
      methods: {
            clean_search: function() {
                  this.$emit('update:search',"")
            },
            on_search_changed(event){
                  this.$emit('update:search', event.target.value)
            },
            on_pokemon_sort_type_changed(event){
                  this.$emit('update:pokemon_sort_type', event.target.value)
            }
      }
}
</script>

<style>
      h1{
            color:#303042;
            text-align: center;
            font-size: 4vw;
            font-family: 'Montserrat';
            font-weight: 800;
      }

      .search_bar{
            font-family: 'Montserrat';
            border-radius: 40px;
            border: 1px solid grey;
            padding-left: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
            margin-right: 20px;
      }

      
      .select_filter{
            font-family: 'Montserrat';
            border-radius: 40px;
            border: 1px solid grey;
            margin-left: 5px;
            padding-left: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
      }

      @media screen and (max-width: 586px) {
            h1{
                  font-size: 30px !important;
            }
      }


</style>