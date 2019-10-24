<template>
  <div class="hello">
    <ul v-for="(feature, index) in features" :key="index">
      <li>
        <h3>{{feature.name}}</h3>
        <p>{{feature.description}}</p>
        <a href="feature.MDNLink">Documentation 📖</a>
        <h5>{{feature.isFullyImplemented ? "Fully Implemented ✅": "Please implement me here 👇"}}</h5>
        <code>{{feature.implementations}}</code>
        <p></p>
      <li/>
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
