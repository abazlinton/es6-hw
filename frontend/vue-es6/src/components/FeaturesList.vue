<template>
  <div class="hello">
    <ul v-for="({name, description, isFullyImplemented, implementations}, index) in features" :key="index">
      <li>
        <h3>{{name}}</h3>
        <p>{{description}}</p>
        <a href="MDNLink">Documentation 📖</a>
        <h5>{{isFullyImplemented ? "Fully Implemented ✅": "Please implement me here 👇"}}</h5>
        <p><code>{{implementations}}</code></p>
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
