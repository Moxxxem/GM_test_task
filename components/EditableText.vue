<template>
  <component
    :is="tag"
    ref="text"
    :contenteditable="isEdit"
    @dblclick="onEditStart"
    @keydown.enter="onEditEnd"
    @blur="onEditEnd"
    @keydown.esc="onEditAbort"
  >
    {{ modelValue }}
  </component>
</template>
<script>
export default {
  name: 'EditableText',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    modelValue: {
      type: String,
      default: ''
    },
    currentLanguage: {
      type: String,
      default: 'ru'
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const isEdit = ref(false)
    const text = ref(null)

    const onEditStart = () => {
      isEdit.value = true
      nextTick(() => {
        text.value.focus()
      })
    }

    const onEditEnd = (event) => {
      isEdit.value = false
      context.emit('update:modelValue', event.target.innerText)
    }

    const onEditAbort = (event) => {
      isEdit.value = false
      event.target.innerText = props.modelValue
    }

    return { isEdit, text, onEditStart, onEditEnd, onEditAbort }
  }
}
</script>
