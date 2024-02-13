<template>
  <div v-if="currentDictionary && user">
    <AppHeader
      :user="user"
      :current-dictionary="currentDictionary"
      :current-language="currentLanguage"
      @change-language="onChangeLanguage"
      @update="onUpdate"
    />
    <MainSection :current-dictionary="currentDictionary" @update="onUpdate" />
  </div>
</template>

<script>
export default {
  setup() {
    const currentDictionary = ref({})
    const currentLanguage = ref('ru')
    const user = ref({})

    const getUser = async () => {
      await $fetch('https://reqres.in/api/users/1')
        .then((response) => (user.value = response.data))
        .catch((error) => {
          console.log(error.message)
        })
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

    const onUpdate = () => {
      localStorage.setItem(`dictionary-${currentLanguage.value}`, JSON.stringify(currentDictionary.value))
    }

    return { currentDictionary, currentLanguage, user, onChangeLanguage, onUpdate }
  }
}
</script>

<style>
* {
  box-sizing: content-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: #f9f8f8;
}

.container {
  padding: 0 8px;
}
</style>
