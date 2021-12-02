<template>
  <div class="works">
    <WorkCell v-for="work in works" :key="work" :title="work.title" />
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
    return { works: [{ title: "移动端电子图书商城" }] };
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
