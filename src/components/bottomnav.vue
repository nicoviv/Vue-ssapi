<template>
  <mu-paper style="max-width: 376px; ">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video" to="home"/>
      <mu-bottom-nav-item value="music" title="Music" icon="music_note" to=""/>
      <mu-bottom-nav-item value="books" title="Books" icon="books" to=""/>
      <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo" to=""/>
    </mu-bottom-nav>
  </mu-paper>

</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>