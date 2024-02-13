<template>
  <header class="header container">
    <EditableText
      v-model="header.title"
      class="header__title"
      path="header.title"
      :current-language="currentLanguage"
      tag="p"
    />
    <div class="actions header__actions">
      <nav class="actions__nav-group nav-group">
        <a class="nav-group__anchor" href="#first-section">
          {{ firstSectionTitle }}
        </a>
        <a class="nav-group__anchor" href="#second-section">
          {{ secondSectionTitle }}
        </a>
      </nav>
      <button v-if="user" class="actions__user user" @click="changeUserAvatar">
        <img v-if="userAvatar" class="user__image" :src="user.avatar" />
        <span v-else class="user__name">{{ userInitials }}</span>
      </button>
      <select v-model="selectedLanguage" class="actions__select" @change="onLanguageChange">
        <option v-for="(language, index) in languages" :key="index">{{ language }}</option>
      </select>
    </div>
  </header>
</template>

<script>
import EditableText from './EditableText.vue'

export default {
  name: 'AppHeader',
  components: { EditableText },
  props: {
    user: {
      type: Object,
      default: () => {
        return null
      }
    },
    currentLanguage: {
      type: String,
      default: 'ru'
    },
    currentDictionary: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  setup(props, context) {
    const languages = ['ru', 'en', 'pl']
    let userAvatar = ref(false) // false === text
    const selectedLanguage = ref(props.currentLanguage)

    const header = computed(() => props.currentDictionary.header)

    watch(
      () => header,
      () => {
        context.emit('update')
      },
      { deep: true }
    )
    const userInitials = computed(() => {
      return Object.keys(props.user).length ? props.user.first_name[0] + props.user.last_name[0] : null
    })

    const firstSectionTitle = computed(() => props.currentDictionary.mainContent.firstSection.title)
    const secondSectionTitle = computed(() => props.currentDictionary.mainContent.secondSection.title)
    const onLanguageChange = () => {
      context.emit('change-language', selectedLanguage)
    }
    const changeUserAvatar = () => {
      userAvatar.value = !userAvatar.value
    }

    return {
      languages,
      selectedLanguage,
      userAvatar,
      header,
      userInitials,
      firstSectionTitle,
      secondSectionTitle,
      onLanguageChange,
      changeUserAvatar
    }
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

.nav-group {
  display: flex;
  gap: 4px;
  &__anchor {
    cursor: pointer;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #03b5aa;
    color: #f9f8f8;
    border: none;
    border-radius: 4px;
  }
}

.user {
  cursor: pointer;
  border: none;
  padding: 0;
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
