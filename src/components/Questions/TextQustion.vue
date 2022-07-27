<template>
  <form class="text-block" @submit.prevent="$emit('next', dontAsk ? null : text)">
    <textarea v-model="text"></textarea>

    <div>
      <div class="item">
        <input v-model="dontAsk" type="checkbox">
        <div @click="dontAsk = !dontAsk">I do not want to answer</div>
      </div>
    </div>
    <button :disabled="!dontAsk && !text" :class="{ 'disable': !dontAsk && !text }" type="submit">{{ finallyPage ? 'Submit' : 'Next' }}</button>
  </form>
</template>

<script>
export default {
  props: {
    title: String,
    finallyPage: Boolean
  },
  data () {
    return {
      text: null,
      dontAsk: false
    }
  },
  watch: {
    title () {
      this.text = null,
      this.dontAsk = false
    }
  }
}
</script>

<style lang="scss">
.text-block {
  display: grid;

  textarea {
    width: 259px;
    margin-bottom: 12px;
  }
  
  .item {
    display: flex;
    margin-bottom: 30px;
  }
}
</style>