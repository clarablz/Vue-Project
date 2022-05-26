<template>
      <div>
      <h1>Pokedex</h1>
      </div>
</template>

<script>

export default {
      name: 'Header'
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