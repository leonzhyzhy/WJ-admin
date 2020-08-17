<template>
  <div>
    <topBar></topBar>
    <siderBar></siderBar>
    <div class="roles">
      <div class="roles-manage">
        <div class="search-column">
          <div class="demo-input-suffix">
            <span class="rolesName">角色名称</span>
            <el-input
              placeholder="请输入角色名称"
              v-model="input"
              :clearable="true"
              >
            </el-input>
          </div>
          <div class="demo-input-suffix">
            <span class="rolesName">权限</span>
            <el-input
              placeholder="请输入权限字符"
              v-model="input"
              :clearable="true"
              >
            </el-input>
          </div>
          <div class="demo-input-suffix">
            <span class="rolesName">状态</span>
            <el-input
              placeholder="角色状态"
              v-model="input"
              :clearable="true"
              >
            </el-input>
          </div>
          <div class="date-block">
            <span class="demonstration">创建时间</span>
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button icon="el-icon-refresh">重置</el-button>
        </div>
        <div class="roles-infor">
          <div class="roles-header">
            <el-button type="primary" icon="el-icon-plus">新增</el-button>
            <el-button type="success" icon="el-icon-edit">编辑</el-button>
            <el-button type="warning" disabled icon="el-icon-s-open">导出</el-button>
            <el-button type="danger" disabled icon="el-icon-download">删除</el-button>
          </div>
          <div class="rloes-table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="角色编号"
                width="120"
                >
                <template slot-scope="scope">{{ scope.row.serial }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="角色名称"
                width="120">
              </el-table-column>
              <el-table-column
                prop="auth"
                label="权限字符"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="order"
                label="显示顺序"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                show-overflow-tooltip>
                <template>
                  <el-switch
                    v-model="value1"
                    >
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column
                prop="dates"
                label="创建时间"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from '../../components/topBar/index'
import siderBar from '../../components/siderBar/index'
export default {
  data () {
    return {
      input: '',
      value1: true,
      value2: '',

      tableData: [{
        serial: 1,
        name: '超级管理员',
        auth: 'admin',
        order: 1,
        dates: '2016-05-02'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  components: {
    topBar,
    siderBar
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="less" scoped>
.roles {
  background-color: #ffffff;
  margin:5px 0 0 200px;
  .roles-manage {
    padding: 20px;
    .roles-infor {
      margin-top: 20px;
      .rloes-table {
        margin-top: 10px;
      }
    }
    .search-column {
      display: flex;
      flex-wrap: wrap;
      .demo-input-suffix {
        margin-right: 10px;
        margin-bottom: 20px;
        .rolesName {
          color: #606266;
          font-weight: 600;
        }
      }
    }
    .demonstration {
      color: #606266;
      font-weight: 600;
      margin-right: 10px;
    }
  }
}
</style>
<style>
.roles /deep/ .el-input {
  width: 240px;
  height: 32px;
  line-height: 32px;
  margin-left: 10px;
}
.roles /deep/ .el-input__inner {
  height: 100%;
  line-height: inherit;
}
.roles /deep/ .el-date-editor .el-range-separator {
  display: inline-block;
  width: 10%;
}
.roles /deep/ .el-range-editor.el-input__inner {
  padding: 0 10px;
  width: 240px;
  height: 32px;
}
.roles /deep/ .el-button {
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  font-size: 12px;
  margin-left: 10px;
}
.roles /deep/ .el-table-column--selection .cell {
  /* padding: 0 10px; */
}
</style>
