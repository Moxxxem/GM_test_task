<template>
  <div v-if="content" class="container">
    <section id="first-section" class="text-section">
      <EditableText v-model="firstSection.title" tag="h2" />
      <EditableText v-model="firstSection.text" tag="p" />
    </section>
    <section id="second-section" class="text-section">
      <EditableText v-model="secondSection.title" tag="h2" />
      <EditableText v-model="secondSection.text" tag="p" />
    </section>
  </div>
  <div v-else>No data...</div>
</template>
<script>
export default {
  name: 'MainSection',
  props: {
    currentDictionary: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  setup(props, context) {
    const content = computed(() => props.currentDictionary.mainContent)
    const firstSection = computed(() => content.value.firstSection)
    const secondSection = computed(() => content.value.secondSection)

    watch(
      () => content,
      () => {
        context.emit('update')
      },
      { deep: true }
    )

    return { content, firstSection, secondSection }
  }
}
</script>
<style lang="scss">
.text-section {
  min-height: 80vh;
  padding-top: 48px;
  margin-top: -48px;
}
</style>
