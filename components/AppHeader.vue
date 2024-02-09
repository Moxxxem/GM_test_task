<template>
  <header class="header container">
    <span class="header__title">{{ currentDictionary.header.title }}</span>
    <div class="actions header__actions">
      <div class="actions__buttons-group buttons-group">
        <a href="#first-section" class="buttons-group__anchor">
          {{ currentDictionary.mainContent.firstSection.title }}
        </a>
        <a href="#second-section" class="buttons-group__anchor">
          {{ currentDictionary.mainContent.secondSection.title }}
        </a>
      </div>
      <select v-model="selectedLanguage" @change="onLanguageChange" class="actions__select">
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    currentLanguage: String,
    currentDictionary: Object
  },
  setup(props, context) {
    const selectedLanguage = ref(props.currentLanguage)
    const onLanguageChange = () => {
      context.emit('change-language', selectedLanguage)
    }

    return { selectedLanguage, onLanguageChange }
  }
}
</script>
<style lang="scss">
.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #2f4b26;

  &__title {
    color: #f9f8f8;
  }
}

.actions {
  display: flex;
  gap: 12px;
}

.buttons-group {
  display: flex;
  gap: 4px;
  &__anchor {
    cursor: pointer;
    background-color: #03b5aa;
    color: #f9f8f8;
    border: none;
    border-radius: 4px;
  }
}
</style>
