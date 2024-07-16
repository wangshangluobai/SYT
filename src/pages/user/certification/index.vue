<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h1>实名信息</h1>
      </div>
    </template>
    <div
      class="tip"
      style="color: #7f7f7f">
      <p>
        <el-icon><InfoFilled /></el-icon
        >完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。
      </p>
    </div>
    <el-descriptions
      v-if="userInfo.authStatus == 1"
      size="small"
      class="margin-top"
      :column="1"
      border
      style="margin: 20px auto">
      <el-descriptions-item
        label-align="center"
        :width="20">
        <template #label>
          <div class="cell-item">用户姓名</div>
        </template>
        {{ userInfo.name }}
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        :width="20">
        <template #label>
          <div class="cell-item">证件类型</div>
        </template>
        {{ userInfo.certificatesType == "10" ? "身份证" : "户口本" }}
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        width="20px">
        <template #label>
          <div class="cell-item">证件号码</div>
        </template>
        {{ userInfo.certificatesNo }}
      </el-descriptions-item>
    </el-descriptions>
    <el-form
      v-if="userInfo.authStatus == 0"
      style="width: 60%; margin: 20px auto"
      label-width="80"
      :model="params"
      :rules="rules"
      ref="form">
      <el-form-item
        label="用户姓名"
        prop="name">
        <el-input
          placeholder="请输入用户姓名"
          v-model="params.name"></el-input>
      </el-form-item>
      <el-form-item
        label="证件类型"
        prop="certificatesType">
        <el-select
          style="width: 100%"
          placeholder="请选择证件类型"
          v-model="params.certificatesType">
          <el-option
            :label="item.name"
            :value="item.value"
            v-for="(item, index) in arrType"
            :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="证件号码"
        prop="certificatesNo">
        <el-input
          placeholder="请输入证件号码"
          v-model="params.certificatesNo"></el-input>
      </el-form-item>
      <el-form-item
        label="上传证件"
        prop="certificatesUrl">
        <!-- action:upload组件向服务器提交图片路径
             limit:照片墙约束图片个数
             on-exceed:超出约束数量的钩子
        -->
        <el-upload
          ref="upload"
          list-type="picture-card"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          :on-success="successhandler"
          :on-exceed="exceedhandler"
          :limit="1"
          action="/api/oss/file/fileUpload?fileHost=userAuah">
          <img
            style="width: 100%; height: 100%"
            src="../../../assets/images/auth_example.png"
            alt="" />
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img
            w-full
            v-if="params.certificatesUrl"
            style="width: 100%; height: 100%"
            :src="params.certificatesUrl"
            alt="Preview Image" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="default"
          @click="submit"
          >提交</el-button
        >
        <el-button
          type="primary"
          size="default"
          @click="reset"
          >重写</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
  import { InfoFilled } from "@element-plus/icons-vue"
  import {
    reqUserInfo,
    reqCertationType,
    reqUserCertation,
  } from "@/api/user/index"
  import { onMounted, ref, reactive } from "vue"
  import type {
    CertationTypeResponseData,
    CertationArr,
    UseringoResponseData,
    UserParams,
  } from "@/api/user/type"
  import { ElMessage } from "element-plus"
  let form = ref()
  let upload = ref()
  let userInfo: any = ref<any>({})
  let arrType = ref<CertationArr>([])
  let dialogVisible = ref<boolean>(false)
  let params = reactive<UserParams>({
    certificatesNo: "",
    certificatesType: "",
    certificatesUrl: "",
    name: "",
  })
  onMounted(() => {
    getUserInfo()
    getType()
  })
  const getUserInfo = async () => {
    let result: UseringoResponseData = await reqUserInfo()
    if (result.code == 200) {
      userInfo.value = result.data
    }
  }
  const getType = async () => {
    let result: CertationTypeResponseData = await reqCertationType()
    if (result.code == 200) {
      arrType.value = result.data
    }
  }

  const exceedhandler = () => {
    ElMessage({
      type: "error",
      message: "图片只能上传一张图片",
    })
  }
  const successhandler = (response: any) => {
    form.value.clearValidate("certificatesUrl")
    params.certificatesUrl = response.data
  }

  const handlePictureCardPreview = () => {
    dialogVisible.value = true
  }

  const handleRemove = () => {
    params.certificatesUrl = ""
  }

  const reset = () => {
    upload.value.clearFiles()
    Object.assign(params, {
      certificatesNo: "",
      certificatesType: "",
      certificatesUrl: "",
      name: "",
    })
  }

  const submit = async () => {
    await form.value.validate()
    try {
      await reqUserCertation(params)
      ElMessage({
        type: "success",
        message: "认证成功",
      })
      getUserInfo()
    } catch (error) {
      ElMessage({
        type: "error",
        message: "认证失败",
      })
    }
  }

  const validatorName = (rule: any, value: any, callBack: any) => {
    const reg =
      /^[\u00B7\u3007\u3400-\u4DBF\u4E00-\u9FFF\uE000-\uF8FF\uD840-\uD8C0\uDC00-\uDFFF\uF900-\uFAFF]+$/
    if (reg.test(value)) {
      callBack()
    } else {
      callBack(new Error("请输入正确中国人的名字"))
    }
  }

  const validatorType = (rule: any, value: any, callBack: any) => {
    if (value == "10" || value == "20") {
      callBack()
    } else {
      callBack(new Error("请选择证件的类型"))
    }
  }

  const validatorNo = (rule: any, value: any, callBack: any) => {
    let sfz = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/
    let hkb = /^\d{9}$/
    if (sfz.test(value) || hkb.test(value)) {
      callBack()
    } else {
      callBack(new Error("请输入正确的身份证或者户口本的号码"))
    }
  }
  const validatorUrl = (rule: any, value: any, callBack: any) => {
    if (value.length) {
      callBack()
    } else {
      callBack(new Error("请上传证件照图片"))
    }
  }

  const rules = {
    name: [
      {
        required: true,
        validator: validatorName,
      },
    ],
    certificatesType: [
      {
        required: true,
        validator: validatorType,
      },
    ],
    certificatesNo: [
      {
        required: true,
        validator: validatorNo,
      },
    ],
    certificatesUrl: [
      {
        required: true,
        validator: validatorUrl,
      },
    ],
  }
</script>

<style scoped lang="scss">
  .box-card {
    .tip {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
