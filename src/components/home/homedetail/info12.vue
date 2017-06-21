<template>
	<div>
		<div>
			<mu-list>
			  <mu-list-item title="图片" subTitle="nihao">
			    <mu-avatar slot="left" src="https://cdn.sspai.com/user/725653_1488337112561.png"/>
			  </mu-list-item>
  			<mu-list>
		</div>


		<mu-icon-menu icon="more_vert" slot="right">
	    	<mu-menu-item title="收藏"/>
	    	<mu-menu-item title="举报"/>
		</mu-icon-menu>
		

		<!-- 这是喜欢按钮 -->
		<mu-radio label="自定义icon" name="group" nativeValue="simple3" v-model="value"  class="demo-radio" uncheckIcon="favorite_border" checkedIcon="favorite"/>


	</div>
</template>

<script>
	export default {
    data(){
      return {
        infodata:[]
      }
    },
    methods:{
      request(){
        this.$http({
          url:'https://sspai.com/api/v1/articles?offset=0&limit=10&type=recommend_to_home&sort=recommend_to_home_at',
          method: 'GET'
          
        }).then(function(req){
          // console.log(req);
          this.infodata = req.data.list;
        })
      }
    },
    mounted(){
      this.request();
    }
  }
</script>

<style scope>
	
</style>