"use strict";(self.webpackChunkhpcdocs=self.webpackChunkhpcdocs||[]).push([[4013],{439:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7294),s=a(6010),r=a(9960);const n="sidebar_a9qW",c="sidebarItemTitle_uKok",i="sidebarItemList_Kvuv",m="sidebarItem_CF0Q",o="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD";function g(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("div",{className:(0,s.Z)(n,"thin-scrollbar")},l.createElement("h3",{className:c},t.title),l.createElement("ul",{className:i},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m},l.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))))))}},94:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(7294),s=a(2010),r=a(9960),n=a(439),c=a(5999),i=a(6700);const m=function(e){const{tags:t,sidebar:a}=e,m={};Object.keys(t).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e);m[t]=m[t]||[],m[t].push(e)}));const o=Object.entries(m).sort(((e,t)=>{let[a]=e,[l]=t;return a===l?0:a>l?1:-1})).map((e=>{let[a,s]=e;return l.createElement("div",{key:a},l.createElement("h3",null,a),s.map((e=>l.createElement(r.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")"))),l.createElement("hr",null))})).filter((e=>null!=e));return l.createElement(s.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--3"},l.createElement(n.Z,{sidebar:a})),l.createElement("main",{className:"col col--7"},l.createElement("h1",null,l.createElement(c.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),l.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);