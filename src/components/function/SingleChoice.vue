<template>
  <div class="max_box">
    <h4 style="font-size: 12px; padding: 0 20px; color: #ABAFB2">*标题</h4>
    <van-field v-model="message" rows="1" type="textarea" placeholder="请输入标题" />
    <div class="con">
      <h4 class="a1" style="font-size: 12px; padding: 0 20px; color: #ABAFB2">*选项</h4>
      <div class="choice-first">
        <div class="item-one">
          <i class="caret-del"></i>
          <input type="text" placeholder="输入选项" />
        </div>
      </div>
      <div class="choice-first">
        <div class="item-one">
          <i class="caret-del"></i>
          <input type="text" placeholder="输入选项" />
        </div>
      </div>
    </div>
    <div class="add">
      <div class="add_box">
        <i class="icon"></i>
        添加选项
      </div>
    </div>
    <div class="btn_warp">
      <div class="btn_conf" @click="sure">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      itemone: "",
    };
  },
  methods: {
    sure() {
      //请求
      // axios({
      //   method: "",
      //   url: "http://ralphgodzilla.com:9003/api/v1/account/",
      //   data:{

      //   }
      // })
      setTimeout(function () {
        console.log(1);
      }, 100);
    },
  },
};
</script>

<style>
.max_box {
  padding: 0px 25px;
}
.btn_conf {
  font-size: 18px;
  color: #fff;
  text-align: center;
  display: block;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #1ea0fa;
  flex: 1 1 auto;
}
.btn_warp {
  background: #f3f4f5;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.add i {
  position: relative;
  top: 0;
  left: 0;
  width: 19px;
  height: 19px;
  margin-right: 4px;
  align-self: center;
  background-image: url("../../assets/images/add@3x.png");
  background-repeat: no-repeat;
  background-size: 19px 19px;
  background-position: center;
  display: block;
}
.add_box {
  display: -webkit-flex;
  justify-content: flex-start;
}
.add {
  background-color: #ffffff;
  display: -webkit-flex;
  justify-content: space-between;
  width: 90%;
  height: 54px;
  font-size: 16px;
  color: #1ea0fa;
  line-height: 54px;
  margin: 0;
  padding: 0 20px;
  border-top: 1px solid #dcdee0;
  margin-top: -1px;
  position: relative;
  text-align: left;
}
.caret-del {
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  color: #ccc;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-image: url("../../assets/images/delete-img@2x.png");
  position: relative;
  width: 19px;
  height: 19px;
  top: 0;
  right: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: 19px 19px;
  background-position: center;
}
.a1 {
  font-size: 12px;
  color: #ababab;
  padding: 0 20px;
  line-height: 28px;
  background-color: #f3f3f3;
}
.con {
  background-color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.choice-first {
  display: flex;
  display: -webkit-flex;
  height: auto;
  min-height: 54px;
  padding: 0 20px 0 20px;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.item-one {
  padding-left: 8px;
  padding-right: 10px;
  height: auto;
  min-height: 35px;
  font-size: 1em;
  outline: 0;
  overflow: hidden;
  width: 100%;
  border: 0;
}
.item-one > input {
  padding-left: 8px;
  padding-right: 10px;
  height: auto;
  min-height: 35px;
  font-size: 1em;
  outline: 0;
  overflow: hidden;
  width: 80%;
  border: 0;
}
</style>