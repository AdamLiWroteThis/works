<template>
  <div class="header">
    <span class="title">{{ helloWord }}<em></em></span>
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
  height: 44px;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 2px;

  .title {
    color: #f5f5f7;
    font-size: 14px;
  }
}
</style>
