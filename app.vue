<template>
  <div v-if="currentDictionary && user">
    <AppHeader
      :user="user"
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
    const user = ref({})

    const getUser = async () => {
      await $fetch('https://reqres.in/api/users/1').then((response) => (user.value = response.data))
    }

    onBeforeMount(() => {
      getUser()
      currentLanguage.value = localStorage.getItem(`currentLanguage`) || 'ru'
      useLocalStorage(currentLanguage.value)
      currentDictionary.value = JSON.parse(localStorage.getItem(`dictionary-${currentLanguage.value}`))
    })

    const onChangeLanguage = (language) => {
      useLocalStorage(language.value)
      currentLanguage.value = language.value
      currentDictionary.value = JSON.parse(localStorage.getItem(`dictionary-${language.value}`))
    }

    return { currentDictionary, currentLanguage, user, onChangeLanguage }
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
