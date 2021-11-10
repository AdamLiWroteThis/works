<template>
  <div class="works">
    <Work v-for="work in works" :key="work" />
  </div>
</template>

<script>
import Work from "@/components/Work.vue";
export default {
  name: "Works",
  components: {
    Work,
  },
  data() {
    return { works: 45 };
  },
};
</script>

<style scoped lang="less">
.works {
  display: flex;
  flex-wrap: wrap;
}
</style>
