<template>
  <div>
    <AppHeader
      :currentDictionary="currentDictionary"
      :currentLanguage="currentLanguage"
      @change-language="onChangeLanguage"
    />
    <MainSection :currentDictionary="currentDictionary" />
  </div>
</template>

<script>
export default {
  setup() {
    const currentDictionary = ref({})
    const currentLanguage = ref('ru')

    onBeforeMount(() => {
      currentLanguage.value = localStorage.getItem(`currentLanguage`) || 'ru'
      useLocalStorage(currentLanguage.value)
      currentDictionary.value = JSON.parse(localStorage.getItem(`dictionary-${currentLanguage.value}`))
    })

    const onChangeLanguage = (language) => {
      useLocalStorage(language.value)
      currentLanguage.value = language.value
      currentDictionary.value = JSON.parse(localStorage.getItem(`dictionary-${language.value}`))
    }

    return { currentDictionary, currentLanguage, onChangeLanguage }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f9f8f8;
}
.container {
  padding: 0 8px;
}
</style>
