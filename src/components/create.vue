<template>
 <center>
   <form @submit.prevent="addtask">
   <input name = "todo" placeholder = "Add a Task" v-model="todo">
   </form>
   <br>
   <br>
   <div class="container">
         <div class = "item" v-for="todo in todos">
                {{todo.todo}}
     </div>
     </div>
     <br>
     <br>
    <router-link to = '/about'><button> About</button></router-link>
 </center>
</template>
<script>
export default {
  
  name: 'create',
  props: {
  },
  data : function() {
return {
       todos : [
      {'todo': "Test this awesome app"},
      ],
      todo : ''
  
  
};
},
  methods: {
    addtask()  {
      this.todos.push({'todo' : this.todo})
      this.todo = ""
    } 
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
input 
  padding: 10px;
  border 1px solid black;
  width : 300px;
  &:focus
    transition border-color 0.3s ease-in-out
    border 1px solid green
button 
  border-radius: 0px;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
  cursor pointer  
  &:hover
    border-color green
    color green
.container 
    width 50vw
    min-height 300px
    background-color black
    max-height 450px;
    overflow auto
    .item 
        height 50px;
        font-size 20px;
        width 100%
        padding-top 18px;
        color white
        &:hover
            background-color skyblue
</style>
