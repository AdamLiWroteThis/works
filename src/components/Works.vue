<!--
 * @Description: chinasoft.inc
 * @Version: 0.1
 * @Author: lijun
 * @LastEditors: lijun
 * Copyright (C) 2022 lshm. All rights reserved.
-->
<template>
  <div class="works">
    <WorkCell
      v-for="(aWork, workIndex) in works"
      :key="workIndex"
      :title="aWork.title"
      :work-data="aWork"
    />
  </div>
</template>

<script>
import WorkCell from "@/components/WorkCell.vue";
export default {
  name: "Works",
  components: {
    WorkCell,
  },
  data() {
    return {
      works: [
        { title: "移动端电子图书商城" },
        {
          title: "渐变背景登录页",
          route: {
            name: "login_1",
            path: "/login_1",
            component: () => import("@/components/login_1.vue"),
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.works {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2px;
}
</style>
