<template>
    <div>
        <h3>form component</h3>
        <button @click="page='form'">form</button>
        <button @click="page='users'">users</button>
        <button @click="page='admins'">admins</button>
        <hr>

       
        <div v-if="page=='form'">
            <form action="" @submit.prevent="formHandling">
            first name: <input type="text" v-model="formValues.firstName">
            last name : <input type="text" v-model="formValues.lastName">
            role: <select v-model="formValues.role" required>
                <option value="" >Select a role</option>
                <option value="users">user</option>
                <option value="admins">admin</option>
            </select>
            <br>
            <br>
            <input type="submit">
            </form>
        </div>
        <div v-else-if="page=='users'">
            <usersComponent :users="allUsers"/>
        </div>
        <div v-else-if="page=='admins'">
            <adminsComponent :admins="allAdmins"/>
        </div>
       
    </div>
</template>

<script>
import usersComponent from './users.vue'
import adminsComponent from './admins.vue'
    export default {
        name:"formComponent",
        data(){
            return{
                page:'form',
                formValues:{
                    firstName:"",
                    lastName:"",
                    role:""
                },
                allUsers:[
             
                ],
                allAdmins:[
             
                ]
            }
            
        },
        components:{
            usersComponent,
            adminsComponent
        },
        methods:{
            formHandling(){
                if(this.formValues.role=="users")
                {
                    this.allUsers.push(this.formValues);
                }
                else if(this.formValues.role=="admins")
                {
                    this.allAdmins.push(this.formValues);
                }
                // this.formValues.firstName="";
                // this.formValues.lastName="";
                // this.formValues.role="";
            }
        }
    }
</script>

<style scoped>

</style>