(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-237d168b"],{"0514":function(t,e,n){},"1c67":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{style:{height:e.listHeight+"px"}},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],ref:"infinite-list",staticClass:"infinite-list list-content",style:{height:e.listContentHeight+"px","padding-top":e.$config.headerHeight+"px"},attrs:{"infinite-scroll-delay":"1000","infinite-scroll-disabled":"busy","infinite-scroll-distance":"220","infinite-scroll-immediate-check":"true"}},[i("a-affix",{staticClass:"affix",attrs:{"offset-top":e.offsetTop,target:function(){return t.$refs["infinite-list"]}}},[i("div",{staticClass:"nav-bar"},[i("a-space",e._l(e.types,(function(t){return i("span",{key:t.type,staticClass:"nav-item",class:{active:e.type===t.type},on:{click:function(n){return e.changeType(t.type)}}},[e._v(" "+e._s(t.value)+" "+e._s(t.total)+" ")])})),0)],1)]),e.items.length?[e._l(e.items,(function(t){return[i("div",{key:t.id,staticClass:"list-item"},[i("div",{staticClass:"pic"},[i("img",{attrs:{referrerpolicy:"no-referrer",src:t.content_origin.pic}})]),i("div",{staticClass:"title"},[i("a",{attrs:{href:t.content_origin.link,target:"_blank"}},[e._v(e._s(t.content))])]),i("div",{staticClass:"intro"},[e._v(" "+e._s(t.content_origin.author+" / "+t.content_origin.publisher+" / "+t.content_origin.publishDate)+" ")]),i("div",{staticClass:"rate"},[t.content_origin.rate?i("a-rate",{attrs:{disabled:""},model:{value:t.content_origin.rate,callback:function(n){e.$set(t.content_origin,"rate",n)},expression:"item.content_origin.rate"}}):e._e()],1),t.content_origin.comment?i("div",{staticClass:"comment"},[e._v(" "+e._s(t.content_origin.comment)+" ")]):e._e(),i("div",{staticClass:"info"},[i("span",{staticClass:"time"},[e._v(" "+e._s(e.$dayjs(t.info_at).format("YYYY-MM-DD"))+" ")])])])]}))]:e._e()],2)])},r=[],o=n("1da1"),a=(n("99af"),n("96cf"),n("ac0d")),s=n("487a"),c=n.n(s),l=n("d354"),u=n("a417"),f={baseUrl:u["a"].e_isconte+"/api/books",index:function(t){var e=t.type,n=t.offset,i=t.limit;return Object(l["a"])({url:this.baseUrl,method:"get",params:{type:e,offset:n,limit:i}})},types:function(){return Object(l["a"])({url:this.baseUrl+"/types",method:"get"})}},d=f,h={name:"Book",directives:{infiniteScroll:c.a},mixins:[a["d"]],data:function(){return{loading:!0,items:[],offset:0,type:"",limit:20,busy:!1,total:0,types:[]}},computed:{listHeight:function(){return this.contentHeight},listContentHeight:function(){return this.contentHeight},offsetTop:function(){return this.headerHeight+1}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTypes();case 2:return e.next=4,t.index();case 4:setTimeout((function(){t.loading=!1}),300);case 5:case"end":return e.stop()}}),e)})))()},methods:{init:function(){this.loading=!0,this.items=[],this.offset=0,this.busy=!1,this.total=0},index:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i,r,o,a,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.offset,i=t.limit,r=t.type,e.next=3,d.index({offset:n,limit:i,type:r});case 3:o=e.sent,0===o.data.code&&(a=o.data.data,s=a.hasMore,c=a.items,l=a.totalCount,t.total=l,t.busy=!s,c.length>0&&(t.items=t._.concat(t.items,c)));case 5:case"end":return e.stop()}}),e)})))()},loadMore:function(){this.offset+=this.limit,this.index()},getTypes:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.types();case 2:n=e.sent,0===n.data.code&&(i=n.data.data.items,t.types=i,t.type=i[0].type);case 4:case"end":return e.stop()}}),e)})))()},changeType:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.type!==t){n.next=2;break}return n.abrupt("return",!1);case 2:return e.type=t,e.init(),n.next=6,e.index();case 6:e.loading=!1;case 7:case"end":return n.stop()}}),n)})))()}}},m=h,p=(n("295d"),n("2877")),v=Object(p["a"])(m,i,r,!1,null,"7832765a",null);e["default"]=v.exports},"295d":function(t,e,n){"use strict";n("0514")},"487a":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var n,i,r,o,a,s=function(){t.apply(o,a),i=n};return function(){if(o=this,a=arguments,n=Date.now(),r&&(clearTimeout(r),r=null),i){var t=e-(n-i);t<0?s():r=setTimeout((function(){s()}),t)}else s()}},n=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},i=document.defaultView.getComputedStyle,r=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var n=i(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},o=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},a=function(t){return t===window?n(window):t.getBoundingClientRect().top+n(window)},s=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},c=function(){if(!this.binded){this.binded=!0;var t=this,n=t.el,i=n.getAttribute("infinite-scroll-throttle-delay"),o=200;i&&(o=Number(t.vm[i]||i),(isNaN(o)||o<0)&&(o=200)),t.throttleDelay=o,t.scrollEventTarget=r(n),t.scrollListener=e(l.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var a=n.getAttribute("infinite-scroll-disabled"),s=!1;a&&(this.vm.$watch(a,(function(e){t.disabled=e,!e&&t.immediateCheck&&l.call(t)})),s=Boolean(t.vm[a])),t.disabled=s;var c=n.getAttribute("infinite-scroll-distance"),u=0;c&&(u=Number(t.vm[c]||c),isNaN(u)&&(u=0)),t.distance=u;var f=n.getAttribute("infinite-scroll-immediate-check"),d=!0;f&&(d=Boolean(t.vm[f])),t.immediateCheck=d,d&&l.call(t);var h=n.getAttribute("infinite-scroll-listen-for-event");h&&t.vm.$on(h,(function(){l.call(t)}))}},l=function(t){var e=this.scrollEventTarget,i=this.el,r=this.distance;if(!0===t||!this.disabled){var s=n(e),c=s+o(e),l=!1;if(e===i)l=e.scrollHeight-c<=r;else{var u=a(i)-a(e)+i.offsetHeight+s;l=c+r>=u}l&&this.expression&&this.expression()}},u={bind:function(e,n,i){e[t]={el:e,vm:i.context,expression:n.value};var r=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){s(e)&&c.call(e[t],r),e[t].bindTryCount=0;var n=function n(){e[t].bindTryCount>10||(e[t].bindTryCount++,s(e)?c.call(e[t],r):setTimeout(n,50))};n()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},f=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(f)),u.install=f,u}))},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),f=n("1dde"),d=n("b622"),h=n("2d00"),m=d("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",g=h>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},w=!g||!b;i({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,i,r,o,a=s(this),f=u(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?a:arguments[e],y(o)){if(r=c(o.length),d+r>p)throw TypeError(v);for(n=0;n<r;n++,d++)n in o&&l(f,d,o[n])}else{if(d>=p)throw TypeError(v);l(f,d++,o)}return f.length=d,f}})}}]);