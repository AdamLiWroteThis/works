<!--
 * @Description: chinasoft.inc
 * @Version: 0.1
 * @Author: lijun
 * @LastEditors: lijun
 * Copyright (C) 2022 lshm. All rights reserved.
-->
<template>
  <div class="work" @click="handleGoToDetails">
    <div class="title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    title: String,
    workData: Object,
  },
  data() {
    return {
      name: "Work",
    };
  },
  methods: {
    handleGoToDetails() {
      if (!this.workData.route) this.$router.push("/details");
      this.$router.push(this.workData.route.path);
    },
  },
  mounted() {
    if (this.workData.route) this.$router.addRoute(this.workData.route);
  },
};
</script>

<style scoped lang="less">
.work {
  width: 100%;
  height: 146.672px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
}
</style>
