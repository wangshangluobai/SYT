<template>
  <div class="leval">
    <h1>医院</h1>
    <div class="content">
      <div class="left">登记：</div>
      <ul class="hospital-leval">
        <li
          :class="{ active: activeLevel === '' }"
          @click="onLevelChange('')">
          全部
        </li>
        <li
          :class="{ active: activeLevel === item.value }"
          v-for="item in hospitalLevel"
          @click="onLevelChange(item.value)"
          :key="item.value">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import { reqHospitalLevelAndRegion } from "@/api/home/index"
  import type { HospitalLevelAndRegionContent } from "@api/home/type"

  let $emit = defineEmits(["transmitLeval"])

  let hospitalLevel = ref<HospitalLevelAndRegionContent>([])
  let activeLevel = ref<string>("")

  onMounted(() => {
    getHospitalDict()
  })

  const getHospitalDict = async () => {
    const result: HospitalDict = await reqHospitalLevelAndRegion("HosType")
    if (result.code === 200) {
      hospitalLevel.value = result.data
    }
  }

  const onLevelChange = (value: string) => {
    activeLevel.value = value
    $emit("transmitLeval", value)
  }
</script>

<style scoped lang="scss">
  .leval {
    color: #7f7f7f;

    h1 {
      font-weight: 900;
      margin: 10px 0;
    }

    .content {
      display: flex;

      .left {
        margin-right: 10px;
        width: 48px;
      }

      .hospital-leval {
        display: flex;

        li {
          margin-right: 10px;
          margin-bottom: 5px;
          &.active {
            color: #55a6fe;
          }
          &:hover {
            color: #55a6fe;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
