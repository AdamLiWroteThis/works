<template>
  <div class="header">
    <span class="title">{{ helloWord }}<em></em></span>
    <span class="slogan"> 用技术做点取悦自己的事 </span>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return { helloWord: "李骏同学的作品集" };
  },
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;

  .title {
    color: #f5f5f7;
    font-size: 14px;
  }
  .slogan {
    color: #f5f5f7;
    font-size: 10px;
    margin-left: 12px;
  }
}
</style>
