<template>
    <v-app>
        <login-sistema/>
        <v-container>
          <v-layout align-center justify-center>
                <v-flex xs12 sm8 md3>
                    <v-card class="elevation-0 mt-16">
                        <v-card-text>
                             <h3 id="tituloIniciar" class="text-center">{{tituloLogin}}</h3>
                            <v-form ref="validacion">
                                <v-row>
                                    <v-col 
                                        cols="12"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="editedItem.usuario"
                                            label="Usuario"
                                            type="text"
                                            color="#011258"
                                            :rules="campoObligatorio"
                                            prepend-inner-icon="person"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model="editedItem.password"
                                            label="Contraseña"
                                            type="password"
                                            color="#011258"
                                            dense
                                            :rules="campoObligatorio"
                                            prepend-inner-icon="password"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="elevation-0"
                                color="#011258"
                                dark
                                @click="acceder()"
                               
                            >
                                <v-icon class="mx-1">login</v-icon>
                                acceder
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-footer
            dark
            padless
            class="mt-16"
            color="white"
        >
        <v-toolbar class="mt-10" id="footer">
            <v-toolbar-title>
                <h3 id="texto">Unidad de Informática Regional de Colón</h3>
            </v-toolbar-title>
        </v-toolbar>
       
        </v-footer> 
    </v-app>
</template>
<script>
import LoginSistema from '../components/LoginSistema.vue'
export default {
    components:{
        LoginSistema,
    },
    data() {
        return {
            titulo:-1,
            editedItem:{
                usuario:'',
                password:''
            },
            campoObligatorio:[
                v => !!v || 'Campo obligatotio'
            ]
        }
    },

    computed: {
        tituloLogin (){
            return this.titulo === -1 ? 'Iniciar Sesion' : ''
        },

        tituloNombreSistema (){
            return this.titulo === -1 ? 'Sistema de Control de Insumos': ''
        }
    },

    methods: {
        acceder(){
            this.$router.push({path:'/inicio'})
        }
    },
}
</script>
<style>
 #footer{
    background-color: yellow;
 }

 #footer{
     background-color:  #011258;
     border-top: yellow solid 5px;
 }

 #texto{
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
 }

 #tituloIniciar{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
 }


</style>