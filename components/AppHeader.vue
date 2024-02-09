<template>
  <header class="header container">
    <span class="header__title">My amazing website</span>
    <div class="actions header__actions">
      <div class="actions__buttons-group buttons-group">
        <button class="buttons-group__anchor">1</button>
        <button class="buttons-group__anchor">2</button>
      </div>
      <select class="actions__select">
        <option>EN</option>
        <option>RU</option>
        <option>LV</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {}
</script>
<style lang="scss">
.header {
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
