  <template>
    <div id="app">
       

      <v-header></v-header>
      <v-test></v-test>
      <v-content></v-content>
      <v-propup></v-propup>

    </div>
  </template>

    <script>
    import header from './components/header';
    import test from './components/test';
    import vContent from './components/content/content';
    import vPropup from './components/propup';

    export default {
      data(){
        return {
         
        }
      },
     
      components:{
          vHeader:header,
          vTest:test,
          vPropup,
          vContent
      }
    }
    </script>

    <style>
     
    </style>