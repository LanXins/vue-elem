import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'comp/header-detail/header-detail'
import ShopCartList from 'comp/shop-cart-list/shop-cart-list'
import ShopCartSticky from 'comp/shop-cart-sticky/shop-cart-sticky'
import Food from 'comp/food/food'

createAPI(Vue, HeaderDetail)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartSticky)
createAPI(Vue, Food)
