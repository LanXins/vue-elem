<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <Tab :tabs="tabs" :initIndex=0></Tab>
    </div>
    
  </div>
</template>

<script>
import VHeader from "comp/v-header/v-header";
import Tab from "comp/tab/tab";
import { getSeller } from "api/index";
import Goods from "comp/goods/goods";
import Seller from "comp/seller/seller";
import Ratings from "comp/ratings/ratings";
import qs from 'query-string'

export default {
  name: "app",
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      },
    }
  },
  computed: {
    tabs() {
      return [
        { 
          label: '商品', 
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        { 
          label: '评论', 
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        { 
          label: '商家', 
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller({
        id: this.seller.id
      }).then(res => {
        this.seller = res
    });
    }
  },
  components: {
    VHeader,
    Tab
  },
}
</script>

<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position fixed
      top 136px
      left 0
      right 0
      bottom 0
</style>
