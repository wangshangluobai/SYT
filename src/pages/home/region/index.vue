<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul class="region-type">
        <li
          :class="{ active: activeRegion === '' }"
          @click="onRegionChange('')">
          全部
        </li>
        <li
          :class="{ active: activeRegion === item.value }"
          v-for="item in hospitalRegion"
          @click="onRegionChange(item.value)"
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

  let $emit = defineEmits(["transmitRegion"])

  let hospitalRegion = ref<HospitalLevelAndRegionContent>([])
  let activeRegion = ref<string>("")

  onMounted(() => {
    getHospitalDict()
  })

  const getHospitalDict = async () => {
    const resoult: HospitalDict = await reqHospitalLevelAndRegion("Beijin")
    console.log(
      "%c [ resoult ]-33",
      "font-size:13px; background:#658039; color:#a9c47d;",
      resoult
    )
    if (resoult.code === 200) {
      hospitalRegion.value = resoult.data
    }
  }

  const onRegionChange = (value: string) => {
    activeRegion.value = value
    $emit("transmitRegion", value)
  }
</script>

<style scoped lang="scss">
  .region {
    color: #7f7f7f;
    margin-top: 10px;

    .content {
      display: flex;

      .left {
        margin-right: 10px;
        width: 52px;
      }

      .region-type {
        display: flex;
        flex-wrap: wrap;

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
