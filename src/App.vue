<template>
  <div id="app">
    <header-component />
    <popup-component v-if="showPopup" @close="hide" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import PopupComponent from './components/PopupComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PopupComponent
  },
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    hide () {
      this.showPopup = false
      this.$cookies.set('popup', 1)
    }
  },
  created () {
    if (!this.$cookies.get('popup')) {
      this.showPopup = true
    }
  }
}
</script>

<style>
body { margin: 0 !important; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
