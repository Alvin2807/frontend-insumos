<template>
    <div>
        <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <template v-slot:prepend>
                
            </template>

        </v-navigation-drawer>

        <v-app-bar app id="toolbar" dark>
            <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>{{ tituloToolbar }}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>
        </v-app>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer:null,
            titulo:-1
        }
    },

    computed: {
        tituloToolbar(){
            return this.titulo === -1 ? 'Sistema de Control de Insumos' : ''
        }
    },
}
</script>

<style>
#toolbar{
    background-color:#053565;
}
</style>