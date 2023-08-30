<template>
    <v-app>
     <v-container>
        <v-data-table
            no-data-text="No hay datos disponiles"
            :footer-props="{itemsPerPageText:'Categorías por páginas'}"
            :items-per-page="10"
            :headers="headers"
            :items="desserts"
        >

        </v-data-table>
     </v-container>
    </v-app>
</template>
<script>
import API from '@/API'
export default {
    data() {
        return {
            headers:
            [
                {text:'Categoría', value:'categoria'}
            ],

            desserts:[]
        }
    },

    mounted() {
        this.mostrarCategoria()
    },

    methods: {
        mostrarCategoria() {
            API.get('categorias')
            .then(respuesta=>{
                this.desserts = respuesta.data.data
            })
        }
    },
}
</script>