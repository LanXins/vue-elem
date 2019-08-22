<template>
  <div class="tab">
    <cube-tab-bar
      :showSlider="true"
      :useTransition="false"
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px"
    ></cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        ref="slide"
        @change="changePage"
        @scroll="scrollPage"
        :options="options"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.component" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>

export default {
  name: "tab",
  props: {
    tabs:{
      type: Array,
      default(){
        return []
      }
    },
    initIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initIndex,
      options: {
          listenScroll: true,
          probeType: 3,
          directionLockThreshold: 0
      }
    };
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label;
      },
      set(newVal) {
        this.index = this.tabs.findIndex(val => {
          return val.label === newVal;
        });
      }
    }
  },
  mounted(){
    this.changePage(this.index)
  },
  methods: {
    changePage(pageIndex){
      this.index = pageIndex
      const component = this.$refs.component[pageIndex]

      component.fatch && component.fatch()
    },
    scrollPage(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = -pos.x/slideWidth*tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~comm/stylus/variable';

.tab {
  display: flex;
  flex-direction: column;
  height: 100%;

  >>> .cube-tab {
    padding: 10px 0;
  }

  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
</style>
