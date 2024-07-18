<template>
  <div class="login-container">
    <el-dialog
      v-model="userStore.visiable"
      title="用户登录"
      @close="handleCloseDialog">
      <div class="content">
        <el-row>
          <el-col :span="12">
            <div class="login-info">
              <div v-show="scene === 0">
                <el-form
                  ref="form"
                  :model="loginParams"
                  :rules="rules">
                  <el-form-item prop="phone">
                    <el-input
                      v-model="loginParams.phone"
                      placeholder="请输入手机号"
                      :prefix-icon="User"></el-input>
                  </el-form-item>
                  <el-form-item prop="code">
                    <el-input
                      v-model="loginParams.code"
                      :prefix-icon="Lock"
                      placeholder="请输入验证码"
                      disabled></el-input
                  ></el-form-item>
                  <el-form-item>
                    <el-button
                      :disabled="!isPhone || flag"
                      @click="getCode">
                      <CountDown
                        v-if="flag"
                        :flag="flag"
                        @getFlag="getFlag" />
                      <span v-else>获取验证码</span>
                    </el-button>
                  </el-form-item>
                </el-form>
                <el-button
                  style="width: 100%"
                  type="primary"
                  size="default"
                  :disabled="!isPhone || loginParams.code.length !== 6"
                  @click="login"
                  >用户登录</el-button
                >
                <div
                  class="bottom"
                  @click="changeScene">
                  <p>微信扫码登录</p>
                  <svg
                    t="1720534874879"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3443"
                    width="16"
                    height="16">
                    <path
                      d="M867.265306 867.265306c-3.134694 0-6.791837-1.044898-9.92653-2.612245l-54.857143-28.734694c-39.183673 20.37551-83.069388 31.346939-128.522449 31.346939-141.061224 0-256-102.922449-256-229.877551s114.938776-229.877551 256-229.877551 256 102.922449 256 229.877551c0 50.677551-18.808163 100.310204-53.289796 140.538776l10.971428 65.306122c1.567347 7.836735-2.089796 15.673469-8.359183 20.37551-3.657143 2.089796-7.836735 3.657143-12.016327 3.657143z m-193.306122-417.959184c-118.073469 0-214.204082 84.114286-214.204082 188.081633s96.130612 188.081633 214.204082 188.081633c42.318367 0 83.069388-10.971429 118.073469-31.346939 6.269388-3.657143 14.106122-3.657143 20.37551-0.522449l27.167347 14.106122-5.746939-33.436734c-1.044898-6.269388 1.044898-13.061224 5.22449-17.763266 31.346939-33.436735 49.110204-76.277551 49.110204-119.640816 0-103.444898-96.130612-187.559184-214.204081-187.559184z"
                      fill="#333333"
                      p-id="3444"></path>
                    <path
                      d="M579.918367 579.395918m-31.346938 0a31.346939 31.346939 0 1 0 62.693877 0 31.346939 31.346939 0 1 0-62.693877 0Z"
                      fill="#333333"
                      p-id="3445"></path>
                    <path
                      d="M768 579.395918m-31.346939 0a31.346939 31.346939 0 1 0 62.693878 0 31.346939 31.346939 0 1 0-62.693878 0Z"
                      fill="#333333"
                      p-id="3446"></path>
                    <path
                      d="M292.571429 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z"
                      fill="#333333"
                      p-id="3447"></path>
                    <path
                      d="M512 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z"
                      fill="#333333"
                      p-id="3448"></path>
                    <path
                      d="M166.138776 709.485714c-4.179592 0-8.881633-1.567347-12.538776-4.179592-6.269388-4.702041-9.404082-12.538776-8.359184-20.37551l14.106123-81.502041C117.028571 554.840816 94.040816 494.759184 94.040816 433.110204 94.040816 280.555102 232.489796 156.734694 402.285714 156.734694c80.979592 0 157.257143 27.689796 215.24898 78.889796 58.514286 51.2 91.428571 119.640816 92.995918 193.306122 0 5.746939-2.089796 11.493878-6.269388 15.67347s-9.926531 6.269388-15.673469 5.746938c-5.22449-0.522449-9.926531-0.522449-14.106122-0.522449-118.073469 0-214.204082 84.114286-214.204082 188.081633 0 14.106122 2.089796 28.734694 5.746939 42.840816 1.567347 5.746939 0.522449 12.016327-2.612245 17.240817s-8.881633 8.359184-14.628572 8.881632c-15.15102 2.089796-30.302041 3.134694-45.453061 3.134694-55.902041 0-109.714286-13.583673-157.257143-38.661224l-68.963265 36.571428c-4.179592 0.522449-7.836735 1.567347-10.971428 1.567347z m78.889795-83.591836c3.657143 0 7.314286 1.044898 10.44898 2.612244 48.587755 28.212245 106.057143 41.795918 164.571429 38.138776-1.567347-9.926531-2.089796-19.853061-2.089796-29.779592 0-124.865306 111.281633-226.742857 249.208163-229.877551-14.628571-117.028571-128.522449-208.979592-264.881633-208.979592-146.808163 0-266.44898 105.012245-266.448979 234.579592 0 54.334694 21.942857 107.62449 61.12653 149.420408 4.702041 4.702041 6.269388 11.493878 5.22449 17.763266l-8.359184 50.155102 41.795919-21.942858c3.134694-1.044898 6.269388-2.089796 9.404081-2.089795z"
                      fill="#333333"
                      p-id="3449"></path>
                  </svg>
                </div>
              </div>
              <div
                class="wechat"
                v-show="scene === 1">
                微信扫码登录
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="left-content">
              <div class="top">
                <div class="item">
                  <img
                    :src="`https://picsum.photos/1300/1300`"
                    alt="二维码" />
                  <svg
                    t="1720534874879"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3443"
                    width="16"
                    height="16">
                    <path
                      d="M867.265306 867.265306c-3.134694 0-6.791837-1.044898-9.92653-2.612245l-54.857143-28.734694c-39.183673 20.37551-83.069388 31.346939-128.522449 31.346939-141.061224 0-256-102.922449-256-229.877551s114.938776-229.877551 256-229.877551 256 102.922449 256 229.877551c0 50.677551-18.808163 100.310204-53.289796 140.538776l10.971428 65.306122c1.567347 7.836735-2.089796 15.673469-8.359183 20.37551-3.657143 2.089796-7.836735 3.657143-12.016327 3.657143z m-193.306122-417.959184c-118.073469 0-214.204082 84.114286-214.204082 188.081633s96.130612 188.081633 214.204082 188.081633c42.318367 0 83.069388-10.971429 118.073469-31.346939 6.269388-3.657143 14.106122-3.657143 20.37551-0.522449l27.167347 14.106122-5.746939-33.436734c-1.044898-6.269388 1.044898-13.061224 5.22449-17.763266 31.346939-33.436735 49.110204-76.277551 49.110204-119.640816 0-103.444898-96.130612-187.559184-214.204081-187.559184z"
                      fill="#333333"
                      p-id="3444"></path>
                    <path
                      d="M579.918367 579.395918m-31.346938 0a31.346939 31.346939 0 1 0 62.693877 0 31.346939 31.346939 0 1 0-62.693877 0Z"
                      fill="#333333"
                      p-id="3445"></path>
                    <path
                      d="M768 579.395918m-31.346939 0a31.346939 31.346939 0 1 0 62.693878 0 31.346939 31.346939 0 1 0-62.693878 0Z"
                      fill="#333333"
                      p-id="3446"></path>
                    <path
                      d="M292.571429 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z"
                      fill="#333333"
                      p-id="3447"></path>
                    <path
                      d="M512 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z"
                      fill="#333333"
                      p-id="3448"></path>
                    <path
                      d="M166.138776 709.485714c-4.179592 0-8.881633-1.567347-12.538776-4.179592-6.269388-4.702041-9.404082-12.538776-8.359184-20.37551l14.106123-81.502041C117.028571 554.840816 94.040816 494.759184 94.040816 433.110204 94.040816 280.555102 232.489796 156.734694 402.285714 156.734694c80.979592 0 157.257143 27.689796 215.24898 78.889796 58.514286 51.2 91.428571 119.640816 92.995918 193.306122 0 5.746939-2.089796 11.493878-6.269388 15.67347s-9.926531 6.269388-15.673469 5.746938c-5.22449-0.522449-9.926531-0.522449-14.106122-0.522449-118.073469 0-214.204082 84.114286-214.204082 188.081633 0 14.106122 2.089796 28.734694 5.746939 42.840816 1.567347 5.746939 0.522449 12.016327-2.612245 17.240817s-8.881633 8.359184-14.628572 8.881632c-15.15102 2.089796-30.302041 3.134694-45.453061 3.134694-55.902041 0-109.714286-13.583673-157.257143-38.661224l-68.963265 36.571428c-4.179592 0.522449-7.836735 1.567347-10.971428 1.567347z m78.889795-83.591836c3.657143 0 7.314286 1.044898 10.44898 2.612244 48.587755 28.212245 106.057143 41.795918 164.571429 38.138776-1.567347-9.926531-2.089796-19.853061-2.089796-29.779592 0-124.865306 111.281633-226.742857 249.208163-229.877551-14.628571-117.028571-128.522449-208.979592-264.881633-208.979592-146.808163 0-266.44898 105.012245-266.448979 234.579592 0 54.334694 21.942857 107.62449 61.12653 149.420408 4.702041 4.702041 6.269388 11.493878 5.22449 17.763266l-8.359184 50.155102 41.795919-21.942858c3.134694-1.044898 6.269388-2.089796 9.404081-2.089795z"
                      fill="#333333"
                      p-id="3449"></path>
                  </svg>
                  <p>微信扫一扫关注</p>
                  <p>快速预约挂号</p>
                </div>
                <div class="item">
                  <img
                    :src="`https://picsum.photos/1300/1300`"
                    alt="二维码" />
                  <svg
                    t="1720535224628"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4542"
                    width="16"
                    height="16">
                    <path
                      d="M341.333333 896H256V128h512v768H341.333333z m0-85.333333h341.333334V213.333333H341.333333v597.333334z m85.333334-42.666667v-85.333333h170.666666v85.333333h-170.666666z"
                      fill="#444444"
                      p-id="4543"></path>
                  </svg>
                  <p>扫一扫下载</p>
                  <p>"预约挂号"APP</p>
                </div>
              </div>
              <p class="tip">尚医通官方指定平台</p>
              <p class="tip">快速挂号 安全放心</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <template #footer>
        <el-button @click="handleCloseDialog">关闭窗口</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, computed, watch } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import useUserStore from "@/store/modules/user"
  import { User, Lock } from "@element-plus/icons-vue"
  import { ElMessage } from "element-plus"
  import type { FormInstance } from "element-plus"

  let $route = useRoute()
  let $router = useRouter()

  const form = ref<FormInstance>()

  let isPhone = computed(() => {
    const phoneReg =
      /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    return phoneReg.test(loginParams.phone)
  })

  const validatorPhone = (rule: any, value: any, callback: any) => {
    const phoneReg =
      /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if (phoneReg.test(loginParams.phone)) {
      callback()
    } else {
      callback(new Error("请输入正确的手机号"))
    }
  }

  const validatorCode = (rule: any, value: any, callback: any) => {
    if (/^\d{6}$/.test(loginParams.code)) {
      callback()
    } else {
      callback(new Error("请输入正确的验证码  "))
    }
  }

  const rules = {
    // phone: [
    //   {
    //     require: true,
    //     message: "手机号必须存在",
    //     trigger: "change",
    //     min: 11,
    //   },
    // ],
    // code: [
    //   {
    //     require: true,
    //     message: "验证码必须五位",
    //     trigger: "blue",
    //     min: 6,
    //   },
    // ],
    phone: [
      {
        trigger: "change",
        validator: validatorPhone,
      },
    ],
    code: [
      {
        trigger: "change",
        validator: validatorCode,
      },
    ],
  }
  let userStore = useUserStore()
  // 0 代表号码登录 1代表二维码登录
  let scene = ref<number>(0)
  let flag = ref<boolean>(false)

  let loginParams = reactive({
    phone: "",
    code: "",
  })

  const changeScene = () => {
    scene.value = 1
  }

  // Tips: 验证码接口异常
  const getCode = async () => {
    try {
      loginParams.code = await userStore.getCode(loginParams.phone)
    } catch (error) {
      loginParams.code = ""
    }
    flag.value = true
  }

  const getFlag = (value: boolean) => {
    flag.value = value
  }

  const login = async () => {
    // Tips
    // await form.value.validate()
    try {
      await userStore.userLogin(loginParams)
      userStore.visiable = false
      let redirect = $route.query.redirect
      if (redirect) {
        $router.push(redirect as string)
      } else {
        $router.push("/home")
      }
    } catch (error) {
      ElMessage({
        type: "error",
        message: (error as Error).message,
      })
    }
  }

  // const onCloseDialog = () => {
  //   Object.assign(loginParams, { phone: "", code: "" })
  //     form.value.resetFields()
  // }

  const handleCloseDialog = () => {
    // onCloseDialog()
    userStore.visiable = false
  }
</script>

<style scoped lang="scss">
  .login-container {
    ::v-deep(.el-dialog__body) {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }

    .content {
      margin-top: 20px;
    }

    .login-info {
      padding: 20px;
      border: 1px solid #eee;
    }

    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin: 10px 0px;
      }
    }

    .left-content {
      .top {
        display: flex;
        justify-content: space-around;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 130px;
            height: 130px;
            margin-bottom: 5px;
          }

          p {
            margin: 5px 0px;
          }
        }
      }
    }

    .tip {
      text-align: center;
      margin: 20px 0px;
      font-size: 20px;
      // font-weight: 600;
      font-style: italic;
    }
  }
</style>
