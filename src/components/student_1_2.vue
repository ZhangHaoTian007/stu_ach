<template>
  <div>
    <el-row style="margin-left: 210px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1 align="center" style="color: #eaeaea">选课情况</h1>
        </div>
      </el-col>
      <el-table
          :data="page.data"
          stripe
          border>
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
            prop="CourseTime"
            label="课时"
            width="200">
        </el-table-column>
        <el-table-column
            prop="CourseCapacity"
            label="课程容量"
            width="200">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="退选"
            width="100">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-delete" size="small" circle @click="isdel(scope.row)"></el-button>
          </template>
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
    </el-row>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>确定退选{{ this.form.CourseName }}吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="del()">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "student_1_2",
  data() {
    return {
      page: {},
      name: '',
      pageNum: 1,
      dialogVisible: false,
      pageSize: 8,
      form: {}
    }
  },
  created() {
    this.loadTable(this.pageNum);
  },
  methods: {
    loadTable(num) {
      this.pageNum = num;
      axios.get("/student/page?pageNum=" + this.pageNum + "&pageSize=" + this.pageSize + "&name=" + this.name).then(res => {
        this.page = res.data;  //不知道为什么这里page等于了res，而不是res.data
        console.log(this.page);
        console.log(this.page.data);
      });
    },
    isdel(row) {
      this.form = row;
      this.dialogVisible = true;
    },
    del(){
      axios.delete("/student/student_1_2" + this.form.CourseNumber + sessionStorage.getItem('user')).then(res => {
        console.log(res.data);
        this.loadTable(1);
      })
    }
  }
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