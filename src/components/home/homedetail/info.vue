<template>
	<div>
		<mu-card v-for="item in infodata" :key="item">
		  <mu-card-header :title="item.author.nickname" subTitle="sub title">
		    <mu-avatar :src="'https://cdn.sspai.com/'+item.author.avatar" slot="avatar" />
		    
		  </mu-card-header>
		  <mu-card-media >
		    <img :src="'https://cdn.sspai.com/'+item.banner" v-if="item.banner!='' "/>
		  </mu-card-media>
		  <mu-card-title :title="item.title" subTitle="Content Title"/>
		  <mu-card-text>{{item.promote_intro}}</mu-card-text>
		  <mu-card-actions>
		    <mu-flat-button />
		    <mu-flat-button />
		  </mu-card-actions>
		 <!--  <mu-icon-menu icon="more_vert" slot="right">
		      		<mu-menu-item title="菜单 1"/>
		       		<mu-menu-item title="菜单 2"/>
		     		</mu-icon-menu> -->
		</mu-card>

	
		
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
	.mu-card-title-container .mu-card-title{
		font-size: 0.5rem;
		font-weight: 300;
		color: #000;
	}
</style>