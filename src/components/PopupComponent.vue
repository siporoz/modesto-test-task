<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div v-if="loading">
            loading...
          </div>

          <div style="display: grid;" v-else>
            <img @click="$emit('close')" class="close" src="../assets/close.svg">

            <div class="title">Please answer a few questions</div>

            <stepper-component class="stepper" :length="pages.length" :page="currentPage + 1" />

            <div class="qustion">{{ pages[currentPage] }}</div>

            <radio-qustion
              @next="saveData"
              @transferPage="page => currentPage = page"
              v-if="list[currentPage].type === 'radio'"
              :selects="list[currentPage].qustions" />

            <text-qustion
              @next="saveData"
              v-if="list[currentPage].type === 'text'"
              :title="list[currentPage].title"
              :finallyPage="list.length === currentPage + 1"
              :loading="loadingSave"
            />

            <text-checkBox-qustion
              @next="saveData"
              v-if="list[currentPage].type === 'text-checkbox'"
              :checkbox="list[currentPage].checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { RadioQustion, TextQustion, TextCheckBoxQustion } from './Questions'
import StepperComponent from './StepperComponent'
import api from '../api/index'

export default {
  data () {
    return {
      pages: null,
      currentPage: 0,
      loading: true,
      list: null,
      data: [],
      loadingSave: false
    }
  },
  methods: {
    saveData (prop) {
      if (prop) {
        this.data.push({
          qustion: this.pages[this.currentPage],
          answer: prop
        })
      }
      if (this.currentPage + 1 === this.list.length) {
        this.sendData()
      } else {
        this.currentPage = ++this.currentPage
      }
    },
    sendData () {
      this.loadingSave = true
      api.saveData(this.data).then(() => {
        this.$emit('close')
      }).finally(() => {
        this.loadingSave = false
      })
    }
  },
  mounted () {
    api.getData().then(res => {
      this.pages = res.map(el => el.title)
      this.list = res
    }).finally(() => {
      this.loading = false
    })
  },
  components: {
    RadioQustion,
    StepperComponent,
    TextQustion,
    TextCheckBoxQustion
  }
}
</script>

<style lang="scss">
textarea {
  width: 259px;
  height: 74px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      width: 600px;
      margin: 0px auto;
      padding: 10px 40px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
      display: grid;

      .close {
        justify-self: end;
        margin-bottom: 8px;
      }

      .title {
        font-size: 18px;
        font-weight: bold;
        justify-self: center;
        margin-bottom: 51px;
      }

      .qustion {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 30px;
      }

      .stepper {
        margin-bottom: 22px;
      }

      .list {
        margin-bottom: 30px;
        .item {
          margin-bottom: 12px;
          display: flex;

          div {
            padding-left: 16px;
          }
        }
      }

      button {
        background: #4BBDFD;
        border-radius: 5px;
        border: none;
        color: white;
        width: 133px;
        height: 40px;
        margin-bottom: 40px;
      }

      button.disable {
        background: #a6a6a6;
      }
    }
  }
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>