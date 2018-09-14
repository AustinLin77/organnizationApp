import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Activity from '@/components/Activity'
import Index from '@/components/Index'
import OrganizationDetails from '@/components/OrganizationDetails'
import AllOrganizations from '@/components/AllOrganizations'
import Introduce from '@/components/Introduce'
import Member from '@/components/Member'
import OrganizationActivity from '@/components/OrganizationActivity'
import MyProfile from '@/components/MyProfile'
import MyOrganization from '@/components/MyOrganization'
import Profile from '@/components/Profile'
import Message from '@/components/Message'
import MessageDetails from '@/components/MessageDetails'
import NewMessage from '@/components/NewMessage'
import ApplyForEnrollIn from '@/components/ApplyForEnrollIn'
import ActivityDetails from '@/components/ActivityDetails'
import Check from '@/components/Check'
import CheckDetails from '@/components/CheckDetails'
import JoinIn from '@/components/JoinIn'
import ApplyFor from '@/components/ApplyFor'
import AllPeople from '@/components/AllPeople'
import PastActivities from '@/components/PastActivities'
import UserProfile from '@/components/UserProfile'
import MyApply from '@/components/MyApply'
import ApplyDetails from '@/components/ApplyDetails'
import PastActivityDetails from '@/components/PastActivityDetails'
import MyActivity from '@/components/MyActivity'
import ApplyDetailsU from '@/components/ApplyDetailsU'
import ApplyDetailsA from '@/components/ApplyDetailsA'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'index',
          component: Index,
        },
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/activity',
          name: 'activity',
          component: Activity,
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine,
        },
        {
          path: '/check',
          name: 'check',
          component: Check,
        }
      ]
    },
    {
      path: '/allOrganizations',
      name: 'allOrganizations',
      component: AllOrganizations,
    },
    {
      path: '/applyDetailsU',
      name: 'applyDetailsU',
      component: ApplyDetailsU,
    },
    {
      path: '/applyDetailsA',
      name: 'applyDetailsA',
      component: ApplyDetailsA,
    },
    {
      path: '/organizationDetails',
      name: 'organizationDetails',
      component: OrganizationDetails,
      children:[
        {
          path: '/introduce',
          name: 'introduce',
          component: Introduce,
        },
        {
          path: '/member',
          name: 'member',
          component: Member,
        },
        {
          path: '/organizationActivity',
          name: 'organizationActivity',
          component: OrganizationActivity,
        }
      ]
    },
    {
      path:'/myProfile',
      name:'myProfile',
      component:MyProfile,
    },
    {
      path:'/myOrganization',
      name:'myOrganization',
      component:MyOrganization,
    },
    {
      path:'/pastActivityDetails',
      name:'pastActivityDetails',
      component:PastActivityDetails,
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile,
    },
    {
      path:'/message',
      name:'message',
      component:Message,
    },
    {
      path:'/myApply',
      name:'myApply',
      component:MyApply,
    },
    {
      path:'/applyDetails',
      name:'applyDetails',
      component:ApplyDetails,
    },
    {
      path:'/messageDetails',
      name:'messageDetails',
      component:MessageDetails,
    },
    {
      path:'/newMessage',
      name:'newMessage',
      component:NewMessage,
    },
    {
      path:'/apply',
      name:'apply',
      component:ApplyForEnrollIn,
    },
    {
      path:'/activityDetails',
      name:'activityDetails',
      component:ActivityDetails,
    },
    {
      path:'/checkDetails',
      name:'checkDetails',
      component:CheckDetails,
      children:[
        {
          path:'/joinIn',
          name:'joinIn',
          component:JoinIn,
        },
        {
          path:'/applyFor',
          name:'applyFor',
          component:ApplyFor,
        },
      ]
    },
    {
      path:'/allPeople',
      name:'allPeople',
      component:AllPeople,
    },
    {
      path:'/pastActivities',
      name:'pastActivities',
      component:PastActivities,
    },
    {
      path:'/userProfile',
      name:'userProfile',
      component:UserProfile,
    },
    {
      path:'/myActivity',
      name:'myActivity',
      component:MyActivity,
      children:[
        {path: '/myActivitiesList', component: resolve => require(['@/components/MyActivitiesList'], resolve),},

      ]
    }
  ]
})
