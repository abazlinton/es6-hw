<template>
  <div>
    <ul v-for="(feature, index) in features" :key="index">
      <li>
        <h3>{{ feature.name }}</h3>
        <p>{{ feature.description }}</p>
        <a :href="feature.MDNLink">📖 Documentation</a>
        <h5>Implemented? {{ feature.isImplemented ? "✅": "❌"}}</h5>
        <p>Implementations:</p> 
        <p><code>{{ feature.implementations }}</code></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FeaturesList',
  props: ['features']
}
</script>

<style scoped>
  ul {
    list-style: none;
    border: 1px solid black;
  }
</style>
