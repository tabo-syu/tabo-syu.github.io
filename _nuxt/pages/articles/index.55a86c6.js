(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(t,e,r){var content=r(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("3165a04e",content,!0,{sourceMap:!1})},178:function(t,e,r){"use strict";var n=r(174);r.n(n).a},179:function(t,e,r){(e=r(9)(!1)).push([t.i,"h1[data-v-fb82ba72]{margin-bottom:1.5em}.articleItem[data-v-fb82ba72]{border-top:1px solid var(--grey)}.articleItem[data-v-fb82ba72]:last-child{border-bottom:1px solid var(--grey)}.articleItem a[data-v-fb82ba72]{display:block;padding:40px 0;text-decoration:none;color:var(--black)}.articleItem a[data-v-fb82ba72]:hover{text-decoration:underline}",""]),t.exports=e},196:function(t,e,r){"use strict";r.r(e);r(23);var n=r(2),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("articles").only(["path","title","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,c=n.map((function(article){var t=new Date(article.createdAt),e=t.getFullYear(),r=("00"+(t.getMonth()+1)).slice(-2),dd=("00"+t.getDate()).slice(-2);return"".concat(e,"/").concat(r,"/").concat(dd)})),e.abrupt("return",{articles:n,formatedCreatedAtList:c});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{meta:{description:"記事一覧ページ"}}},head:function(){return{meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:description",property:"og:description",content:this.meta.description}]}}},o=(r(178),r(15)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("記事一覧")]),t._v(" "),r("ul",{staticClass:"articleList"},t._l(t.articles,(function(article,e){return r("li",{key:e,staticClass:"articleItem"},[r("nuxt-link",{attrs:{to:""+article.path}},[r("time",[t._v(t._s(t.formatedCreatedAtList[e]))]),t._v(" "),r("h2",[t._v(t._s(article.title))])])],1)})),0)])}),[],!1,null,"fb82ba72",null);e.default=component.exports}}]);