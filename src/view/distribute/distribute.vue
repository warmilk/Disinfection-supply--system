<template>
  
</template>

<script>
import InquiryOne from "./inquiryOne";
export default {
  data() {
    return {
      value6: "",
      info: {
        name: "李春华",
        sex: "女",
        age: 40,
        tel: "13012345678",
        remark: "无"
      },
      infodata: {
        height: "--",
        weight: "--",
        teper: "--",
        pressure: "--",
        systolic: "--"
      },
      dialogEditVisible: false,
      editinfo: {
        height: "",
        weight: "",
        teper: "",
        pressure: "",
        systolic: ""
      },
      diseaseData: [
        { disname: "急性坏疽性阑尾炎伴穿孔", disdate: "2017-04-25", distime: "11:55:50" },
        { disname: "副伤寒", disdate: "2017-04-12", distime: "10:00:00" }
      ]
    };
  },
  components: {
    inquiryone: InquiryOne
  },
  methods: {
    //编辑界面显示
    handleEdit() {
      this.dialogEditVisible = true;
      this.infodata = JSON.parse(JSON.stringify(this.editinfo));
    },
    //编辑界面里的确定提交按钮
    editSubmit() {
      let that = this;
      that
        .$confirm("确认提交吗？", "提示", {})
        .then(() => {
          that.$message({
            type: "success",
            message: "修改成功"
          });
          that.infodata = that.editinfo;
          that.dialogEditVisible = false;
        })
        .catch(() => {});
    },
    //编辑界面的重置按钮
    editReset() {
      (this.editinfo = {
        height: "",
        weight: "",
        teper: "",
        pressure: "",
        systolic: ""
      }),
        (this.infodata = {
          height: "--",
          weight: "--",
          teper: "--",
          pressure: "--",
          systolic: "--"
        });
    },
    //编辑界面里的取消按钮
    editCancel() {
      this.dialogEditVisible = false;
    }
  }
};
</script>

<style>
.contain {
  margin: 0;
  padding: 0;
  background: #f6f6f6;
}
.contain .color {
  color: #20a0ff;
}
.contain a {
  color: blue;
  text-decoration: none;
}
.in-location h2 {
  font-weight: none;
  font-size: 16px;
  color: #dcdcdc;
  padding: 10px 0 0 10px;
}
.containRow {
  margin: 0 !important;
}
.in-nav {
  padding-top: 20px;
}
.first-nav {
  /*padding: 10px;*/
  line-height: 36px;
  height: 36px;
}
.in-btn {
  display: inline-block;
}
.in-btn button {
  /*color: #cbcbcb;*/
  /*margin: 5px;*/
  padding: 10px 30px;
}
.in-content {
  /*margin-top: 5px;*/
  background: #f6f6f6;
}
.in-content .Info {
  text-align: center;
  margin-top: 10px;
}
.in-con {
  box-shadow: 0 0 10px #dcdcdc;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  background: white;
  padding-top: 25px;
  margin-bottom: 30px;
}
.in-file {
  margin-top: 5px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dcdcdc;
}
.in-file a {
  margin-left: 25px;
}
.in-file i {
  margin-right: 5px;
}
.in-table,
.in-tel {
  height: 45px;
  text-align: left;
  border-bottom: 1px solid #dcdcdc;
}
.in-content h2 {
  font-weight: inherit;
  padding-left: 13px;
  color: #dcdcdc;
  margin: 0;
  font-size: 16px;
  display: inline-block;
}
.in-content h2 span {
  margin-left: 8px;
  color: black;
}
.in-table div {
  line-height: 45px;
  width: 48%;
  display: inline-block;
}
.in-tabOne {
  border-right: 1px solid #dcdcdc;
}
.in-tel h2 {
  line-height: 45px;
}
.in-remark {
  padding: 15px 0;
  text-align: left;
}
.in-remark h2 {
  float: left;
  width: 15%;
  display: inline-block;
}
.in-remark p {
  margin: 0;
  width: 70%;
  display: inline-block;
  white-space: pre-wrap;
}
.in-content .in-conTwo {
  padding-top: 0;
  text-align: left;
}
.in-header {
  height: 70px;
  line-height: 70px;
}
.in-header h2,
.in-text h2,
.in-past h2,
.in-disease p {
  margin-left: 8px;
  color: black;
  font-size: 20px;
}
.in-header span {
  display: inline-block;
  float: right;
  margin-right: 28px;
  cursor: pointer;
}
.in-header span i {
  margin-right: 10px;
}
.in-text {
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #dcdcdc;
}
.in-text h2 {
  font-size: 18px;
  color: #787c7d;
  font-family: inherit;
  /*font-weight: bold;*/
}
.in-text h2 span {
  color: #dadcdb;
}
.in-text span {
  float: right;
  margin-right: 28px;
  color: blue;
  cursor: pointer;
}
.in-conThree {
  text-align: left;
}
.in-past {
  margin-bottom: 12px;
}
.in-date {
  margin: 8px 0 10px 21px;
}
.in-disease {
  padding-bottom: 12px;
  border-top: 1px solid #dcdcdc;
  font-size: 18px;
}
.in-disease p {
  margin: 8px 15px 0 21px;
  display: block;
  white-space: pre-wrap;
}
.in-disDate {
  margin-left: 8px !important;
  color: #b6b6b6 !important;
}
.in-disBtn {
  margin: 8px 15px 0 21px;
}
.in-disBtn span {
  margin-right: 12px;
}
.in-disBtn span i {
  margin-right: 5px;
}
/*.in-disNone{
    padding: 0;
  }*/
.in-disNone h2 {
  color: #b6b6b6;
  margin: 8px 15px 0 21px;
  font-size: 20px;
  display: block;
  padding: 0;
  height: 45px;
  line-height: 45px;
}
</style>