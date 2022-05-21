<template>
<div class="gallery_options">
		<input type="text" :value="search" @input="on_search_changed" class="search_bar" placeholder="Look for a pokemon">
        <button v-if="search" @click="clean_search" class="erase_button">X</button>
		<select :value="pokemon_sort_type" @input="on_pokemon_sort_type_changed" id="pokemon_sort" class="select_filter">
                        <option value="">sort by...</option>
                        <option value="IncreasingId">Id</option>
                        <option value="AZName">Names</option>
		</select>
	</div>

</template>

<script>

export default{
    name: 'GalleryOptions',
    props: {
        search: String,
        pokemon_sort_type: String
    },
    watch: {
        search: function(new_search){
            localStorage.setItem("search",new_search)
        },
        pokemon_sort_type: function(new_pokemon_sort_type){
            localStorage.setItem("pokemon_sort_type", new_pokemon_sort_type)
        }
    },
    methods: {
        clean_search: function() {
            this.$emit('update:search', "")
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