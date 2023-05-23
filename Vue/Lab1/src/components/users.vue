<template>
    <div>
        <h2>users table</h2>
        <table>
            <thead>
                <tr>
                <th>first name</th>
                <th>last name</th>
                <th>actions</th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="user in users" :key="user.firstName">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td><button @click="delUser(user)">delete</button></td>
                </tr>
            </tbody>
       </table> 
    </div>
</template>

<script>
    export default {
        name:"usersComponent",
        data(){
            return {
                userList:this.users
            }
        },
        props:["users"],
        methods:{
            delUser(user){
                console.log(user)
                const index = this.userList.findIndex((u) => u.firstName === user.firstName);
                if (index !== -1) {
                this.userList.splice(index, 1);
            }
        }
        }
    }
</script>

<style scoped>

</style>