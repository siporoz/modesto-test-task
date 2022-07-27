<template>
  <form @submit.prevent="save">
    <div class="list">
      <div v-for="item in selects" :key="item.value" class="item">
        <input required v-model="selectItem" type="radio" :value="item.value">
        <div @click="selectItem = item.value">{{ item.label }}</div>
      </div>
    </div>

    <button type="submit">Next</button>
  </form>
</template>

<script>
export default {
  props: {
    selects: Array
  },
  data () {
    return {
      selectItem: this.selects[0].value
    }
  },
  methods: {
    save () {
      if (this.selects.find(el => el.value === this.selectItem).transferPage) {
        this.$emit('transferPage', 4)
      } else {
        this.$emit('next', this.selectItem)
      }
    }
  },
  watch: {
    selects () {
      this.selectItem = this.selects[0].value
    }
  }
}
</script>