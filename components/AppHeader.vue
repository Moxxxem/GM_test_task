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
      <div class="actions__user user" v-if="user.first_name" @click="changeUserAvatar">
        <img v-if="userAvatar" class="user__image" :src="user.avatar" />
        <span v-else class="user__name">{{ user.first_name[0] }} {{ user.last_name[0] }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    user: Object,
    currentLanguage: String,
    currentDictionary: Object
  },
  setup(props, context) {
    let userAvatar = ref(false) // false === text
    const selectedLanguage = ref(props.currentLanguage)
    const onLanguageChange = () => {
      context.emit('change-language', selectedLanguage)
    }

    const changeUserAvatar = () => {
      userAvatar.value = !userAvatar.value
    }

    return { selectedLanguage, userAvatar, onLanguageChange, changeUserAvatar }
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
  align-items: center;
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

.user {
  cursor: pointer;
  background-color: #03b5aa;
  color: #f9f8f8;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  border-radius: 28px;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &__image {
    height: 35px;
    width: 35px;
    border-radius: 28px;
  }
}
</style>
