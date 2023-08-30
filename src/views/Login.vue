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
                                :loading="btnCargar"
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
<script src="sweetalert2.min.js"></script>
<script>
import LoginSistema from '../components/LoginSistema.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import API from '@/API'
export default {
    components:{
        LoginSistema,
    },
    data() {
        return {
            titulo:-1,
            btnCargar:false,
            loader:null,
            editedItem:{
                usuario:'',
                password:''
            },
            campoObligatorio:[
                v => !!v || 'Campo obligatotio'
            ]
        }
    },

    watch:{ 
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() =>(this[l] = false), 1000)
            this.loader = null
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
       async acceder(){
        try {

            if (this.$refs.validacion.validate()) {
                this.loader = 'btnCargar'
                const loguear = await API.post('iniciar_sesion', this.editedItem) 
                .then(respuesta=>{
                    // eslint-disable-next-line no-empty
                    if (respuesta.data.ok == true) {
                        const token  = respuesta.data.token
                        const user   = respuesta.data.data.name
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))
                        API.defaults.headers.common['Authorization'] = "Bearer" +token
                        this.$router.push({path:'/inicio'})
                        this.mensajeUsuarioExitoso(respuesta.data.exitoso)
                    // eslint-disable-next-line no-empty
                    } else if (respuesta.data.ok == false){
                        this.mensajeError(respuesta.data.error)
                    } else {
                        this.mensajeErrorUsuarioIncorrecto(respuesta.data.message)
                    }
                }) 
                return loguear
            }
           
        } catch (error) {
          if (error) {
            Swal.fire({
                icon:'error',
                title:'Hubo un error consulte con el administrador del sistema',
                showConfirmButton:false,
                timer:2000
            })
          }
        }
           
        },

        mensajeErrorUsuarioIncorrecto(message){
            Swal.fire({
                icon:'error',
                title: message,
                showConfirmButton: false,
                timer:2000
            })
        },

        mensajeError(error){
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: error,
                showConfirmButton:false,
                timer:2000
            })
        },

        mensajeUsuarioExitoso(exitoso){
            Swal.fire({
                icon:'success',
                title:'!Genial',
                text: exitoso,
                showConfirmButton:false,
                timer:2000
            })
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