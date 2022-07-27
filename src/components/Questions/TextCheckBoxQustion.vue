<template>
  <form @submit.prevent="save">
    <div class="list">
      <div v-for="item in customCheckbox" :key="item.value" class="item">
        <input v-model="item.check" :name="item.name" type="checkbox" :value="item.value">
        <div>{{ item.label }}</div>
      </div>

      <textarea name="text" v-model="text"></textarea>
    </div>

    <button type="submit">Next</button>
  </form>
</template>

<script>
export default {
  props: {
    checkbox: Array
  },
  methods: {
    save () {
      this.$emit('next', { text: this.text, checkbox: this.customCheckbox.filter(el => el.check).map(el => el.label) } )
    }
  },
  watch: {
    text (val) {
      if (val?.length === 1) {
        this.customCheckbox.find(el => el.value === 'your_answer').check = true
      }
      if (!val) {
        this.customCheckbox.find(el => el.value === 'your_answer').check = false
      }
    }
  },
  data () {
    return {
      customCheckbox: this.checkbox.map(el => {
        return { ...el, check: false }
      }),
      text: null
    }
  }
}
</script>