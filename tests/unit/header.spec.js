import { shallowMount } from "@vue/test-utils";
import SiteHeader from "@/components/SiteHeader.vue";

describe("Header.vue", () => {
  it("初始化加载", () => {
    const wrapper = shallowMount(SiteHeader, {});
    expect(wrapper.find(".title").text()).toMatch("李骏同学的作品集");
  });
});
