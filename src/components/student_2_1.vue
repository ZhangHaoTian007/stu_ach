<template>
  <div>
    <el-row style="margin-left: 210px">
      <el-col :span="24">
      <div class="grid-content bg-purple-dark">
    <h1 align="center" style="color: #eaeaea">成绩查看</h1>
      </div>
      </el-col>
      <el-row type="flex" class="row-bg" justify="space-around" >
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span style="margin-right: 3px;margin-left: 13px;font-weight: bold">时间区间</span>
            <el-select v-model="value1" multiple placeholder="请选择" style="margin-left: 10px">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <span style="margin-right: 3px;margin-left: 13px;font-weight: bold">课程类型</span>
            <el-select
                v-model="value2"
                multiple
                collapse-tags
                style="margin-left: 10px;"
                placeholder="请选择">
              <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">
            <el-button type="info" icon="el-icon-search" @click="loadTable(1)">查询</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div>
            <el-table
                :data="page.data"
                stripe
                border
                style="width: 100%;min-height: 670px">
              <el-table-column
                  prop="AcademicYear"
                  label="学期学年"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="CourseNumber"
                  label="课程编号"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="CourseName"
                  label="课程名"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="CourseInstitution"
                  label="开课院系"
                  width="300">
              </el-table-column>
              <el-table-column
                  prop="Achievement"
                  label="分数"
                  width="200">
              </el-table-column>
              <el-table-column
                  prop="Achievement"
                  label="学分"
                  width="190">
              </el-table-column>
              <el-table-column
                  fixed="CourseType"
                  label="课程类型"
                  width="100">
              </el-table-column>
            </el-table>
            <el-row type="flex" justify="center" style="margin-top: 10px">
              <el-pagination
                  layout="prev, pager, next"
                  :page-size="pageSize"
                  :current-page="pageNum"
                  @prev-click="loadTable"
                  @current-change="loadTable"
                  @next-click="loadTable"
                  :total="page.totalElements">
              </el-pagination>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "student_2_1",
  data() {
    return {
      page: {},
      name: '',
      pageNum: 1,
      pageSize: 8,
      form: {},
      options: [{
        value: '选项1',
        label: '2020-2021-1'
      }, {
        value: '选项2',
        label: '2019-2020-3'
      }, {
        value: '选项3',
        label: '2019-2020-2'
      }, {
        value: '选项4',
        label: '2019-2020-1'
      }, {
        value: '选项5',
        label: '2018-2019-3'
      },{
        value: '选项6',
        label: '2018-2019-2'
      },{
        value: '选项7',
        label: '2018-2019-1'
      }],
      types: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '必修'
      },{
        value: '选项3',
        label: '选修'
      }],
      value1: [],
      value2: []
    }
  },
  /*
  created() {
    this.loadTable(this.pageNum);
  },
  */
  methods: {
    loadTable(num) {
      this.pageNum = num;
      axios.get("/student/achievement/page?pageNum=" + this.pageNum + "&pageSize=" + this.pageSize + "&name=" + this.name +
      "&time=" + this.value1 + "&type=" + this.value2).then(res => {
        this.page = res.data;  //不知道为什么这里page等于了res，而不是res.data
        console.log(this.page);
        console.log(this.page.data);
      });
    }
  }
}
</script>

<style scoped>

.bg-purple {
  background: #e5e9f2;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px;
  background-color: #505458;
}
.bg-purple-dark {
  background: #505458;
}
</style>