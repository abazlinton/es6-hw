<template>
  <div id="app">
    <features-list :features="features"/>
  </div>
</template>

<script>
import FeaturesList from './components/FeaturesList.vue'
import FeaturesData from './assets/FeaturesData'

export default {
  name: 'app',
  components: {
    'features-list': FeaturesList
  },
  data(){
    return {
      features: []
    }
  },
  mounted(){
    this.features = FeaturesData
  }
}
</script>

<style>
  body {
    margin: 2rem;
    padding: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.8rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
    font-size: 0.8em;
  }
</style>
