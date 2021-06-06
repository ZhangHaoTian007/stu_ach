<template>
  <div>
    <el-row style="margin-left: 210px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1 align="center" style="color: #eaeaea">课程表</h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "student_1_1",
}
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #505458;
}
</style>
