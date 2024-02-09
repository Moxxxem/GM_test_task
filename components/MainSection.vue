<template>
  <div class="container">
    <div id="first-section" class="text-section">
      <h1>{{ currentDictionary.mainContent.firstSection.title }}</h1>
      <span>{{ currentDictionary.mainContent.firstSection.text }}</span>
    </div>
    <div id="second-section" class="text-section">
      <h1>{{ currentDictionary.mainContent.secondSection.title }}</h1>
      <span>{{ currentDictionary.mainContent.secondSection.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainSection',
  props: {
    currentDictionary: Object
  },
  setup(props) {}
}
</script>
<style lang="scss">
.text-section {
  min-height: 100vh;
}
</style>
