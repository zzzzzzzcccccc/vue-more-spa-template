import Vue from 'vue'
import Router from 'vue-router'

import {
  Item
} from '../views/detailPages'

Vue.use(Router)

export function createRouter() {
  return new Router({
    routes: [
      { path: '/Item', component: Item }
    ]
  })
}
