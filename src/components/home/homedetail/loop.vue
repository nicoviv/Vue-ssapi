<template>
   <yd-slider autoplay="3000">
        <yd-slider-item v-for="item in loopdata" :key="item">
                <img :src="'https://cdn.sspai.com/'+item.image">
        </yd-slider-item>
        
    </yd-slider>
 
   
    
</template>

<script>
  export default {
    data(){
      return {
        loopdata:[]
      }
    },
    methods:{
      request(){
        this.$http({
          url:'https://sspai.com/api/v1/advertisements?type=home_1,home_2,home_3,home_4,home_5&status=released',
          method: 'GET'
          
        }).then(function(req){
          // console.log(req);
          this.loopdata = req.data.list
        })
      }
    },
    mounted(){
      this.request();
    }
  }
</script>

<style>
  
   
</style>
