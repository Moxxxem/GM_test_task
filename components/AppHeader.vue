<template>
  <header class="header container">
    <span class="header__title">My amazing website</span>
    <div class="actions header__actions">
      <div class="actions__buttons-group buttons-group">
        <a href="#first-section" class="buttons-group__anchor">1</a>
        <a href="#second-section" class="buttons-group__anchor">2</a>
      </div>
      <select class="actions__select">
        <option>RU</option>
        <option>EN</option>
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
