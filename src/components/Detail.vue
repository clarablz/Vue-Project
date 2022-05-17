<template>
      <div class="poke_detail">
            <div class="detail_div" v-if="show">
                  <button class="close" @click="close_detail">x</button>
                  <div v-if="pokemon" class="image_div">
                        <img class="pokemon_img" :src="image_url + pokemon.id + '.gif'">
                  </div>           

                  <div class="data_div" v-if="pokemon">
                        <h3> {{pokemon.name}}</h3>
                        <div class="type_div">
                              <div class="type" v-for="(value, index) in pokemon.types"
                                    :key="'value'+index"
                                    :class="value.type.name">
                                    <h6 class="type_name">{{value.type.name}}</h6>  
                              </div>
                        </div>

                        <h6> Weight : {{pokemon.weight/10}} kg</h6>
                        <h6> Height : {{pokemon.height/10}} m </h6>
                        
                        <div class="abilities_div">
                              <div class="ability" v-for="(value, index) in pokemon.abilities"
                                    :key="'value'+index">
                                    <h6 class="type_name">{{value.ability.name}}</h6>  
                              </div>
                        </div>

                        <div class="shiny">
                              <h5>Shiny form</h5>
                              <img class="pokemon_img" :src="shiny_image_url + pokemon.id + '.png'">
                        </div>
                  </div>
            </div>
      </div>
            
</template>


<script>
export default {
  name: 'Detail',
  props: {
        pokemon_url: String,
        image_url: String,
        shiny_image_url: String
  },
  data:() =>{
        return{
            show: true,
            pokemon:{}
      }   
  },
  methods: {
        retrieve_poke_data() {
                  let req = new Request(this.pokemon_url);
                  fetch(req)
                        .then((resp)=> {
                              if(resp.status ===200)
                                    return resp.json()
                        })
                        .then((data)=>{
                             this.pokemon=data;
                             this.show=true;
                        })
                  
            },
            close_detail(){
                  this.$emit('close_detail');
            }
  },
  created: function(){
      this.retrieve_poke_data();
      }


}


</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.poke_detail{
            font-family: 'Montserrat', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            padding : 0px 10px 10px;
            width: calc(100% - 20px);
            height: calc(100vh - 20px);
            background-color: rgba(255, 255, 255, 0.778);
      }

.detail_div{
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      position: relative;
      width: 100%;
      max-width: 412px;
      background-color: rgb(255, 255, 255);
      filter: drop-shadow(5px 15px 15px #dddddd);
      border-radius: 10px;
      margin: 10%;
      padding-top:2%;
      padding-bottom:2%;
      font-family: 'Montserrat', sans-serif;
      color: #303042;

}
h2{
      text-transform: capitalize;

}

h3{
      text-transform: capitalize;

}

h6{
      margin:10px;
}

.pokemon_img{
      width:62px;
      height:62px;
}

.data_div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
}

.close{
      position: inherit;
      left:150px;
      text-decoration: none;
      color: #303042;
      background-color:#ffffff;
      border: 2px solid #303042;
      border-radius: 100%;
      transition-duration: 0.4s;
      font-family: 'Varela Round', sans-serif;      
      font-size: 120%;
      font-weight: 600;
      cursor: pointer;
      height:30px;
      width:30px;
      display:flex;
      justify-content: center;
}

.close:hover{
      background-color: #303042;
      color:#ffffff;
}

.type_div{
      text-transform: capitalize;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 20px;
}
.type, .ability{
      margin-left: 10px;
      margin-right: 10px;
      padding-left:10px;
      padding-right:10px;
      background-color: #777795;
      color: white;
      border-radius:7px;
      height: 20px;
      display:flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      justify-content: center;


}

.ability{
      flex-direction: column;
	justify-content: space-around;
      margin-top:10px;
      margin-bottom: 10px;
      border: solid 1px #303042;
      background-color: #ffffff00;
      color:#303042;
}

.type_name{
      font-weight: 600;
      font-size: 14px;
}

.shiny{
      background-color: #efeff6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height:100px;
      width:100px;
      border-radius: 12px;
      margin-top:20px;
}

.shiny img{
      height: 60px;
      height: 60px;
}

.shiny h5{
      margin:0;
      padding-top:10px;
      font-weight: 500;
      font-size: 90%;
}

</style>