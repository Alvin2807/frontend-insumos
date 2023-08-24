<template>
    <div>
       <v-toolbar flat id="fondoToolbar" height="138px">
        <v-spacer></v-spacer>
        <img height="90px" :src="require('../assets/mp.png')" />
        <h3 class="mx-3">{{ tituloToolbar }}</h3>
        <img height="80px" :src="require('../assets/sistema.png')"/>
        <v-spacer></v-spacer>
       </v-toolbar>
    </div>
</template>
<script>
export default {
    data() {
      return {
        titulo:-1
      }
    },

    computed: {
      tituloToolbar(){
        return this.titulo === -1 ? 'Sistema de Control de Insumos': ''
      }
    },
}
</script>
<style>
#fondoToolbar{
  background-color: #011258;
  color:white;
  border-bottom: yellow solid 5px;
}

</style>