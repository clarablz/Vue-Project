const getPokeData = async function(){
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
      if (response.status == 200) {
            return response.json()
      } else {
      new Error(response.statusText)
      }
      
}


export default getPokeData