<template>
  <mu-appbar >
    
    <div class="logo"><img src="../assets/img/sspai.png" alt=""></div>
    <mu-icon-menu icon="menu" slot="right" class="demo-menu-divider">
      <router-link to="home"><mu-menu-item title="专题广场" leftIcon="track_changes"/></router-link>
      <router-link to="camera"><mu-menu-item title="摄影" leftIcon="camera_alt"/></router-link>
      <router-link to="tools"><mu-menu-item title="效率工具" leftIcon="access_alarm"/></router-link>
      <router-link to="life"><mu-menu-item title="生活方式" leftIcon="accessibility"/></router-link>
      <router-link to="hard"><mu-menu-item title="硬件" leftIcon="usb"/></router-link>
      <router-link to="set"><mu-menu-item title="设置" leftIcon="settings"/></router-link>
      <mu-menu-item title="登录" leftIcon="account_circle" @click="showState"/>
      <!-- <mu-menu-item title="登录" leftIcon="account_circle" /> -->
    </mu-icon-menu>
  </mu-appbar>
</template>

<script>
   export default {
    methods: {
      showState(){
        this.$store.commit('changeState');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mu-appbar{
    background-color: #90caf9; 
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 1.2rem;
  }
  .logo{
    width: 0.7rem;
    height: 0.7rem;
  }
  .logo img{
    width: 100%;
  }
</style>
