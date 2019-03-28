<template>
 <center>
   First Application Made By nishantwrp Using vue.js Framework
     <br>
     <br>
    <router-link to = '/'><button> Go To App</button></router-link>
 </center>
</template>
<script>
export default {
  name: 'about',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
button 
  border-radius: 0px;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
  cursor pointer  
  &:hover
    border-color green
    color green
</style>
