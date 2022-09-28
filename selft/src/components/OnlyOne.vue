<script setup>
import { ref, reactive } from 'vue'
import moment from 'moment'
const list = reactive({
  data: []
})
const timer = ref(null)
console.log(timer)
timer.value = moment(new Date()).format('YYYY年MM月DD')

</script>

<template>
  <div class="container">
    <div class="header">
      懒人必备每日热点查看器
    </div>
    <div class="hot-title">
      <h3>最新热点</h3>
      <div class="iconList">
        <img src="../assets/baidu.svg" alt="">
        <img src="../assets/weibo.svg" alt="">
      </div>
    </div>
    <div class="hotList">
      <div v-for="i in 10" :key="i" class="list">
        <div>
          {{ timer }}[网易]
        </div>
        <div>
          »{{ '这个ask来得及ask了解可垃圾啊工卡数据库里就发绿卡数据库来得及ask连接断开连接阿萨空间的可怜见立刻加快了打赏' }}
        </div>
        <img src="../assets/logo.png" alt="" class="list-img">
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 12px;
  color: #567;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d3d3d3;
}
.hot-title {
  font-size: 28px;
  font-weight: 500;
  border-bottom: 1px solid #d3d3d3;
  padding: 15px;
  margin-left: 15px;
  margin: 10px;
}
h3 {
  margin: 0;
  padding: 0;
display: inline-block;
}
.hotList {
  padding: 20px;
}
.hotList .list {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
.hotList .list::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: translateY(10px);
  background: #223472;
  margin-right: 15px;
}
.hotList .list > div:first-of-type {
  font-size: 18px;
  color: #223472;
  margin-right: 8px;
  padding-bottom: 10px;
}
.hotList .list > div:last-of-type {
  font-size: 18px;
  color: #111;
  margin-bottom: 15px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.list-img {
  width: 100%;
  height: 200px;
  border: 4.8px solid #e0dfcc;
  border-radius: 6px;
}
.iconList {
  display: inline-block;
}
.iconList img {
  width: 50px;
  height: 50px;
  cursor: pointer;
  vertical-align: middle;
  margin: 0 10px;
}
</style>
