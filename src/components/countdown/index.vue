<template>
  <div>
    <span>获取验证码({{ count }}s)</span>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue"

  let props = defineProps(["flag"])
  let $emit = defineEmits(["getFlag"])

  let count = ref<number>(5)

  watch(
    () => props.flag,
    () => {
      let timer = setInterval(() => {
        count.value--
        if (count.value === 0) {
          clearInterval(timer)
          $emit("getFlag", false)
        }
      }, 1000)
    },
    {
      immediate: true,
    }
  )
</script>

<style scoped lang="scss"></style>
