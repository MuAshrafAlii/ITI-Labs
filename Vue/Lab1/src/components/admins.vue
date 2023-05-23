<template>
    <div>
        <h2>admins table</h2>
       <table>
            <thead>
                <tr>
                <th>first name</th>
                <th>last name</th>
                <th>actions</th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="admin in admins" :key="admin.firstName">
                    <td>{{ admin.firstName }}</td>
                    <td>{{ admin.lastName }}</td>
                    <td><button @click="delAdmin(admin)">delete</button></td>
                </tr>
            </tbody>
       </table> 
    </div>
</template>

<script>
    export default {
        name:"usersComponent",
        data(){
            return{
                adminList:this.admins
            }
          
        },
        props:["admins"],
        methods:{
            delAdmin(admin){
                console.log(admin)
                const index = this.adminList.findIndex((a) => a.firstName === admin.firstName);
                if (index !== -1) {
                this.adminList.splice(index, 1);
            }
        }
    }
    }
</script>

<style scoped>

</style>
