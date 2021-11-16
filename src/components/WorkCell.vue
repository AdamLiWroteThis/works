<template>
  <div class="work">
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
  },
  data() {
    return {
      name: "Work",
    };
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
