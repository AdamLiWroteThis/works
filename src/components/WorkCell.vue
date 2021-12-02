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
  },
  data() {
    return {
      name: "Work",
    };
  },
  methods: {
    handleGoToDetails() {
      this.$router.push("/details");
    },
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
