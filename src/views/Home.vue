<template>
  <div class="home">
    <SiteHeader />
    <Works />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from "@/components/SiteHeader.vue";
import Works from "@/components/Works.vue";

export default {
  name: "Home",
  components: {
    SiteHeader,
    Works,
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  background-color: #fff;
}
</style>
