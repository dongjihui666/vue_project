<template>
  <div>
    <!--按钮-->
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px"
      >添加</el-button
    >
    <!--表格组件
   data:表格组件将来需要展示的数据数组类型
   border:是给表格增加边框
   column属性
   label:显示标题
   width:对应列的宽度
   align:对齐方式
   注意1:elementui当中的table组件,展示的数据是1列1列进行展示数据
   -->

    <el-table :data="list" style="width: 100%" border>
      <!--全选未实现-->
      <el-table-column type="index" width="55"> </el-table-column>
      <el-table-column label="序号" prop="label" width="80px" align="center">
      </el-table-column>
      <el-table-column label="品牌名称" prop="label" width="width">
      </el-table-column>
      <el-table-column label="品牌logo" prop="label" width="width">
      </el-table-column>
      <el-table-column label="操作" prop="label" width="width">
      </el-table-column>
    </el-table>
    <!--
      分页器
      当前第几页,数据总条数,每一页展示的条数 连续页码数
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      text-align 样式居中

      current-page代表的是当前第几页
      total:代表分页器一共需要展示数据条数
      page-size:代表的是每一页需要展示多少条数据
      page-sizes:代表可以设置每一页展示多少条数据
      layout:可以实现分页器布局
      page-count:按钮的数量 如果 9 连续页码是7
      -->
    <el-pagination
    style="margin-top: 20px;text-align: center;"
      :current-page="6"
      :total="99"
      :page-size="3"
      :page-count="7"
      :page-sizes="[3, 5, 10]"
      layout="prev, pager, next, jumper ,->, sizes,total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "tradeMark",

  data() {
   return{
      //代表分页第几页
      page:1,
      //当前页数展示数据条数
      limit:3,
      //总共数据条数
      total:0,
      //列表展示的数据
      list:[

      ]
   }
  },
  //组件挂载完毕发送请求
  mounted() {
  //获取列表数据方法 
  this.getPageList();
  },
  methods: {
   //获取品牌列表的数据
  async getPageList(){
      //解构出参数
      const {page,limit} = this;
      //获取品牌列表的接口
      //当你向服务器发送请求的时候,这个函数需要带参数,data当中初始化两个字段,代表给服务器传递参数
    let result = await  this.$API.tradeMark.reqTredMarkList(page,limit);
    if(result.code=200){
      //分别是展示数据的总条数和总数据
      this.total=result.data.total;
      this.list = result.data.records;
    }

   }
  }
};
</script>

<style scoped lang="less">
</style>
