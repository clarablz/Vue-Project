const getPokeData = async function(){
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/") 
      if (response.status == 200) {
            //console.log(await response.json())
            return response.json()
      } else {
      new Error(response.statusText)
      }
}


export default getPokeData