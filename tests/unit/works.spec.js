import { shallowMount } from "@vue/test-utils";
import Works from "@/components/Works.vue";

describe("Works.vue", () => {
  it("初始化加载", () => {
    const wrapper = shallowMount(Works);
    expect(wrapper.findAll(".work").length).toBe(4);
  });
});
