<template>
  <div class="container">
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line"></div>
      <div>{{ workData.baseMap?.bigname }}</div>
      <span class="dot">.</span>
      <div class="hosdeparment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h1 class="time">{{ workData.baseMap?.workDateString }}</h1>
      <div class="item-box">
        <div
          class="item"
          v-for="i in workData.bookingScheduleList"
          :class="{
            active: i.status == -1 || i.availableNumber == -1,
            cur: i.workDate == workTime.workDate,
          }"
          @click="changeTime(i)"
          :key="i">
          <div class="top1">{{ i.workDate }}-{{ i.dayOfWeek }}</div>
          <div class="bottom">
            <div v-if="i.status == -1">停止挂号</div>
            <div v-if="i.status == 0">
              {{
                i.availableNumber == -1
                  ? "约满了"
                  : `有号(${i.availableNumber})`
              }}
            </div>
            <div v-if="i.status == 1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination
        v-model:current-page="currentPage"
        layout="prev, pager, next"
        :total="workData.total"
        @current-change="onCurrentChange" />
    </div>
    <div class="bottom">
      <div
        class="will"
        v-if="workTime.status == 1">
        <span class="time">234567432</span>
        <span class="will-text">放号</span>
      </div>
      <div
        class="doctor"
        v-else>
        <div class="morning">
          <div class="tip">
            <svg
              t="1720703792006"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2602"
              width="16"
              height="16">
              <path
                d="M512 768a256 256 0 1 1 0-512 256 256 0 0 1 0 512z m0-85.333a170.667 170.667 0 1 0 0-341.334 170.667 170.667 0 0 0 0 341.334z m-42.667-640h85.334v128h-85.334v-128z m0 810.666h85.334v128h-85.334v-128z m-319.36-643.029l60.331-60.33 90.496 90.495-60.33 60.331-90.497-90.453zM723.2 783.531l60.33-60.331 90.497 90.496-60.331 60.33-90.496-90.495z m90.496-633.6l60.33 60.373-90.495 90.496-60.331-60.33 90.496-90.497zM240.469 723.2l60.331 60.33-90.496 90.497-60.33-60.331 90.495-90.496z m740.864-253.867v85.334h-128v-85.334h128z m-810.666 0v85.334h-128v-85.334h128z"
                fill="#CDCDCD"
                p-id="2603"></path>
            </svg>
            <span class="text">上午号源</span>
          </div>
          <div
            class="doc-info"
            v-for="d in morningArr"
            :key="d.id">
            <div class="left">
              <div class="info">
                <span>{{ d.title }}</span>
                <span>|</span>
                <span>{{ d.docname }}</span>
              </div>
              <div class="skill">{{ d.skill }}</div>
            </div>
            <div class="right">
              <div class="money">￥{{ d.amount }}</div>
              <el-button
                type="primary"
                size="default"
                >{{ d.availableNumber }}</el-button
              >
            </div>
          </div>
        </div>
        <div class="morning">
          <div class="tip">
            <svg
              t="1720704788973"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3866"
              width="16"
              height="16">
              <path
                d="M152.746667 676.437333h697.813333a24.405333 24.405333 0 1 1 0 48.810667H152.704a24.405333 24.405333 0 1 1 0-48.810667z"
                fill="#999999"
                p-id="3867"></path>
              <path
                d="M776.533333 699.861333h-48.810666a168.362667 168.362667 0 1 0-336.768 0H342.229333a217.173333 217.173333 0 1 1 434.346667 0zM559.402667 299.093333c13.482667 0 24.448 10.965333 24.448 24.448v73.216a24.405333 24.405333 0 1 1-48.853334 0V323.498667c0-13.482667 10.922667-24.448 24.405334-24.448zM283.221333 395.178667a24.405333 24.405333 0 0 1 34.56 0l58.538667 58.581333a24.405333 24.405333 0 0 1-34.56 34.517333L283.264 429.653333a24.405333 24.405333 0 0 1 0-34.517333z m459.306667 54.485333l52.437333-52.394667a24.405333 24.405333 0 0 1 34.517334 34.517334l-52.437334 52.437333a24.405333 24.405333 0 0 1-34.56-34.56z"
                fill="#999999"
                p-id="3868"></path>
            </svg>
            <span class="text">下午号源</span>
          </div>
          <div
            class="doc-info"
            v-for="d in afterArr"
            :key="d.id">
            <div class="left">
              <div class="info">
                <span>{{ d.title }}</span>
                <span>|</span>
                <span>{{ d.docname }}</span>
              </div>
              <div class="skill">{{ d.skill }}</div>
            </div>
            <div class="right">
              <div class="money">￥{{ d.amount }}</div>
              <el-button
                type="primary"
                size="default"
                >{{ d.availableNumber }}</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, computed } from "vue"
  import { reqHospitalWork, reqHospitalDoctor } from "@/api/hospital/index"
  import type {
    HospitalWordData,
    DoctorResponseData,
    DocArr,
    Doctor,
  } from "@/api/hospital/type"
  import { useRoute } from "vue-router"

  let $route = useRoute()

  let morningArr = computed(() => {
    return docArr.value.filter((i: Doctor) => {
      return i.workTime == 0
    })
  })

  let afterArr = computed(() => {
    return docArr.value.filter((i: Doctor) => {
      return i.workTime == 1
    })
  })

  let currentPage = ref<number>(1)
  let limit = ref<number>(6)
  let workData = ref<any>({})
  let workTime = ref<any>({})
  let docArr = ref<DocArr>([])

  const getHospitalWork = async () => {
    const result: HospitalWordData = await reqHospitalWork(
      currentPage.value,
      limit.value,
      $route.query.hoscode as string,
      $route.query.depcode as string
    )
    if (result.code === 200) {
      workData.value = result.data
      workTime.value = workData.value.bookingScheduleList[0]

      getDoctorWorkData()
    }
  }

  const onCurrentChange = () => {
    getHospitalWork()
  }

  const getDoctorWorkData = async () => {
    let hoscode: string = $route.query.hoscode as string
    let depcode: string = $route.query.depcode as string
    let workDate: string = workTime.value.workDate
    const result: DoctorResponseData = await reqHospitalDoctor(
      hoscode,
      depcode,
      workDate
    )

    if (result.code === 200) {
      docArr.value = result.data
    }
  }

  const changeTime = (item: any) => {
    workTime.value = item
    getDoctorWorkData()
  }

  onMounted(() => {
    getHospitalWork()
  })
</script>

<style scoped lang="scss">
  .container {
    .top {
      display: flex;
      align-items: center;
      color: #7f7f7f;

      .line {
        width: 5px;
        height: 20px;
        background: tomato;
        margin: 0px 5px;
      }

      .dot {
        margin: 0px 5px;
      }
    }

    .center {
      margin: 20px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .time {
        font-weight: 900;
      }

      .item-box {
        width: 100%;
        margin: 40px 0px;
        display: flex;

        .item {
          flex: 1;
          border: 1px solid skyblue;
          margin: 0px 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 340ms;

          &.active {
            border: 1px solid #7f7f7f;
            color: #7f7f7f;
            .top1 {
              background: #ccc;
            }
          }

          &.cur {
            transform: scale(1.1);
          }

          .top1 {
            width: 100%;
            background: #e8f2ff;
            height: 30px;
            line-height: 30px;
            text-align: center;
          }
          .bottom {
            width: 100%;
            line-height: 60px;
            height: 60px;
            text-align: center;
          }
        }
      }
    }

    .bottom {
      .will {
        text-align: center;
        font-size: 28px;
        font-weight: 900;

        .time {
          color: tomato;
        }

        .will-text {
          color: skyblue;
        }
      }

      .doctor {
        .morning {
          .tip {
            display: flex;
            align-items: center;

            .text {
              color: #7f7f7f;
              font-weight: 900;
            }
          }

          .doc-info {
            display: flex;
            justify-content: space-between;
            margin: 10px 0px;
            border-bottom: 1px solid #ccc;

            .left {
              .info {
                margin: 10px 0px;
                color: skyblue;
                span {
                  margin: 0px 5px;
                  font-size: 18px;
                  font-weight: 900;
                }
              }

              .skill {
                margin: 10px 0px;
                color: #7f7f7f;
              }
            }

            .right {
              width: 150px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              .money {
                color: #7f7f7f;
                font-weight: 900;
              }
            }
          }
        }
      }
    }
  }
</style>
