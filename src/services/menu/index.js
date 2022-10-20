import { FormattedMessage } from 'react-intl'
import React, { Component } from 'react'

export default function getMenuData(role) {
  if (role === 'user') {
    return [
      {
        category: true,
        title: <FormattedMessage id="sideBar.general" />,
        // title: 'General',
      },

      {
        title: <FormattedMessage id="sideBar.general.home" />,
        key: 'home',
        icon: 'fe fe-home',
        url: '/main-page',
      },
      {
        title: <FormattedMessage id="sideBar.general.categories" />,
        key: 'categories',
        icon: 'fe fe-layout',
        url: '/category',
      },
      {
        title: <FormattedMessage id="sideBar.general.chat" />,

        key: 'chat',
        icon: 'fe fe-message-square',
        url: '/chat',
      },
      {
        title: <FormattedMessage id="search" />,

        key: 'search',
        icon: 'fe fe-search',
        url: '/search',
      },
      {
        category: true,
        // title: 'PRODUCTS',
        title: <FormattedMessage id="sideBar.products" />,
      },
      {
        title: <FormattedMessage id="sideBar.general.lisitngs" />,

        key: 'listings',
        icon: 'fe fe-server',
        url: '/listings',
      },
      {
        title: <FormattedMessage id="sideBar.general.purchaseHistory" />,

        key: 'purchase_history',
        icon: 'fe fe-gift',
        url: '/purchaseHistory',
      },
      {
        title: <FormattedMessage id="sideBar.general.Favorites" />,

        key: 'favorites',
        icon: 'fe fe-heart',
        url: '/favorites',
      },
      {
        isSellButton: true,
        // title: 'Sell now',
        title: <FormattedMessage id="sideBar.sellNow" />,
        url: '/sell',
      },
      {
        category: true,
        // title: 'UTILITIS',
        title: <FormattedMessage id="sideBar.utilities" />,
      },
      {
        // title: 'My Profile',
        title: <FormattedMessage id="sideBar.utilities.myProfile" />,
        key: 'myprofile',
        icon: 'fe fe-user',
        url: '/apps/profile',
      },
      {
        // title: 'Settings',
        title: <FormattedMessage id="sideBar.utilities.settings" />,
        key: 'settings',
        icon: 'fe fe-settings',
        url: '/settings',
      },
      {
        category: true,
        // title: 'Action',
        title: <FormattedMessage id="topBar.actions" />,
      },
      {
        // title: 'Logout',
        title: <FormattedMessage id="topBar.profileMenu.logout" />,
        key: 'logout',
        icon: 'fe fe-log-out',
        url: '/auth/Login',
      },
    ]
  }
  if (role === 'admin') {
    return [
      {
        category: true,
        title: <FormattedMessage id="sideBar.general" />,
      },
      {
        title: <FormattedMessage id="sideBar.orderList" />,
        key: 'home',
        icon: 'fe fe-home',
        url: '/purchaseHistory',
      },

      {
        title: <FormattedMessage id="sideBar.createCategory" />,
        key: 'create',
        icon: 'fe fe-layout',
        url: '/category',
      },

      // {
      //   title: 'Create Product',
      //   key: 'Create Product',
      //   icon: 'fe fe-home',
      //   url: '/create/product',
      // },

      {
        title: <FormattedMessage id="sideBar.userList" />,
        key: 'categories',
        icon: 'fe fe-layout',
        url: '/user-list',
      },
      {
        title: <FormattedMessage id="sideBar.adsManager" />,
        key: 'chat',
        icon: 'fe fe-message-square',
        url: '/ads-manager',
      },
      {
        category: true,
        title: <FormattedMessage id="topBar.actions" />,
      },
      {
        title: <FormattedMessage id="topBar.profileMenu.logout" />,
        key: 'logout',
        icon: 'fe fe-log-out',
        url: '/auth/Login',
      },
    ]
  }
  return []
}
