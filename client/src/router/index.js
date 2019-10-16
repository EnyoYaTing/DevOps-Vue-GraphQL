import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Club from '@/components/Club'
import Player from '@/components/Player'
import Chelsea from '@/components/Chelsea'
import Liverpool from '@/components/Liverpool'
import ManCity from '@/components/ManCity'
import ManUtd from '@/components/ManUtd'
import Stats from '@/components/Stats'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/club',
      name: 'Club',
      component: Club
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    {
      path: '/chelsea',
      name: 'Chelsea',
      component: Chelsea
    },
    {
      path: '/liverpool',
      name: 'Liverpool',
      component: Liverpool
    },
    {
      path: '/mancity',
      name: 'ManCity',
      component: ManCity
    },
    {
      path: '/manutd',
      name: 'ManUtd',
      component: ManUtd
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
