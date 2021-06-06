<template>
  <div class="header-box">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <button class="btn-tool" title="刷新" @click="refresh">
          <i class="el-icon-refresh"></i>
        </button>
        <button class="btn-tool" title="全屏" @click="fullScreenhere()">
          <i class="el-icon-rank"></i>
        </button>
        <button class="btn-tool" title="便签" @click="dialogVisible = true" >
          <i class="el-icon-edit"></i>
        </button>
      </el-col>
      <el-col :span="6" align="right">
        <span>{{ todayDatehere() }}</span>
        <el-dropdown trigger="click" class="user-name" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="updatepwd" disabled>修改密码</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-dialog title="便签" width="400px"
               :close-on-click-modal="false"
               :visible.sync="dialogVisible"
               @closed="saveNotes">
      <el-input
          type="textarea"
          :rows="7"
          placeholder="请输入内容"
          v-model="notes">
      </el-input>
    </el-dialog>
  </div>
</template>

<script>
import Utils from "./utils";

export default {
  inject: ['reload'],
  data () {
    return {
      dialogVisible: false,
      notes: localStorage.getItem('notes') || '便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录'
    }
  },
  methods: {
    todayDatehere () {
      return Utils.todayDate()
    },
    fullScreenhere () {
     return Utils.fullScreen()
    },
    refresh () {
      this.reload()
    },
    saveNotes () {
      localStorage.setItem('notes', this.notes)
    },
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.$router.replace({ path: '/login' })
          break
        //case 'updatepwd'
      }
    }
  },
  computed: {
    username () {
      //let { username } = JSON.parse(sessionStorage.getItem('user'))
      //return username
      return "张皓天"
    }
  }
}
</script>

<style lang="scss" scoped>
.header-box{
  color: #eaeaea;
  background: dimgray;
}
.btn-tool {
  border: none;
  color: #eaeaea;
  background: transparent;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  text-align: left;
}
.user-name {
  color: #eaeaea;
  margin-left: 20px;
}
.el-dropdown-link{
  color : #eaeaea;
}
</style>