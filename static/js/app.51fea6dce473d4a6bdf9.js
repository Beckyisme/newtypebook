webpackJsonp([1],{0:function(t,s){},"0hOc":function(t,s){},"2FB3":function(t,s){},"34KM":function(t,s){},Agol:function(t,s){},C6Nt:function(t,s){},"FTl/":function(t,s){},G4Mk:function(t,s){},"N+48":function(t,s){},NHnr:function(t,s,i){"use strict";function o(t){i("Ynth")}function e(t){i("Agol")}function c(t){i("0hOc")}function a(t){i("G4Mk")}function n(t){i("FTl/")}function r(t){i("2FB3")}function l(t){i("S+t6")}function d(t){i("C6Nt")}function m(t){i("N+48")}function p(t){i("Rmfm")}Object.defineProperty(s,"__esModule",{value:!0});var g=i("7+uW"),u={},v=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box"},[i("div",{staticClass:"boxList"},[i("div",{staticClass:"left"},[i("router-link",{attrs:{to:"/me"}},[i("i",{staticClass:"icon-account"})])],1),t._v(" "),t._m(0,!1,!1),t._v(" "),i("div",{staticClass:"right"},[i("router-link",{attrs:{to:"/shopCart"}},[i("i",{staticClass:"icon-cart"})])],1)]),t._v(" "),i("div",{staticClass:"line border-1px"})])},h=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"center"},[i("input",{staticClass:"find",attrs:{type:"text",placeholder:"请输入产品关键词或用户名"}})])}],f={render:v,staticRenderFns:h},A=f,_=i("VU/8"),C=o,x=_(u,A,!1,C,null,null),w=x.exports,B={name:"app",components:{headerBox:w}},M=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"app"},[i("div",{staticClass:"header"},[i("headerBox")],1),t._v(" "),i("div",{staticClass:"content"},[i("keep-alive",[i("router-view")],1)],1),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"footer-item"},[i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"icon icon-assessed-Badge"}),t._v(" "),i("span",[t._v("文艺精选")])])],1),t._v(" "),i("div",{staticClass:"footer-item"},[i("router-link",{attrs:{to:"/topic"}},[i("span",{staticClass:"icon icon-store"}),t._v(" "),i("span",[t._v("文具专题")])])],1),t._v(" "),i("div",{staticClass:"footer-item"},[i("router-link",{attrs:{to:"/people"}},[i("span",{staticClass:"icon icon-atm"}),t._v(" "),i("span",[t._v("达人推荐")])])],1),t._v(" "),i("div",{staticClass:"footer-item"},[i("router-link",{attrs:{to:"/favourable"}},[i("span",{staticClass:"icon icon-account"}),t._v(" "),i("span",[t._v("限时优惠")])])],1)])])},k=[],K={render:M,staticRenderFns:k},F=K,I=i("VU/8"),b=e,$=I(B,F,!1,b,null,null),V=$.exports,E=i("/ocq"),P=i("GQaK"),W={props:{goodsIn:{type:Object}},methods:{countBtn:function(t,s){console.log("1"),s>0?t.count++:--t.count<1&&(t.count=1)}}},T=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"cartcontrol"},[i("div",{staticClass:"decrease",on:{click:function(s){t.countBtn(t.goodsIn,-1)}}},[t._v("-")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.goodsIn.count,expression:"goodsIn.count"}],staticClass:"count",attrs:{type:"text"},domProps:{value:t.goodsIn.count},on:{input:function(s){s.target.composing||t.$set(t.goodsIn,"count",s.target.value)}}}),t._v(" "),i("div",{staticClass:"add",on:{click:function(s){t.countBtn(t.goodsIn,1)}}},[t._v("+")])])},S=[],y={render:T,staticRenderFns:S},G=y,L=i("VU/8"),R=c,Q=L(W,G,!1,R,null,null),U=Q.exports,q={props:{selectedShop:{type:Object}}},O=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"cart"},[i("div",{staticClass:"cartTitle"},[i("div",{staticClass:"left"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"icon-back"})])],1),t._v(" "),i("div",{staticClass:"center"},[t._v("购物车")]),t._v(" "),i("div",{staticClass:"right"},[t._v("清空")])]),t._v(" "),i("div",{staticClass:"darkLine"}),t._v(" "),t._m(0,!1,!1),t._v(" "),i("div",{staticClass:"line border-1px"}),t._v(" "),t._m(1,!1,!1)])},H=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"cartContent"},[i("ul",{staticClass:"cartBox"},[i("li",[i("div",{staticClass:"cartLeft"}),t._v(" "),i("div",{staticClass:"cartCenter"},[i("p",{staticClass:"cartName"},[t._v("木制文具")]),t._v(" "),i("p",{staticClass:"cartColor"},[t._v("原色")]),t._v(" "),i("p",{staticClass:"cartPrice"},[t._v("￥678")])]),t._v(" "),i("div",{staticClass:"cartRight"},[i("i",{staticClass:"icon-close"})])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"cartFooter"},[i("div",{staticClass:"left"},[t._v("\r\n            合计￥\r\n        ")]),t._v(" "),i("div",{staticClass:"right"},[t._v("\r\n            结算\r\n        ")])])}],Y={render:O,staticRenderFns:H},N=Y,j=i("VU/8"),D=a,X=j(q,N,!1,D,null,null),Z=X.exports,J={data:function(){return{showFlag:!1,cart:!1,addCart:!1,selectedShop:{},currentIndex:1,totalPrice:0}},props:{goodsIn:{type:Object}},components:{cartControl:U,shopCart:Z},methods:{goodShow:function(){this.showFlag=!1,console.log("1")},show:function(){this.showFlag=!0},addPro:function(t){this.goodsIn.isActive?(this.$message({message:"取消收藏",type:"success",customClass:"tip"}),this.goodsIn.isActive=!1):(this.$message({message:"成功收藏",type:"success",customClass:"tip"}),this.goodsIn.isActive=!0)},showCart:function(){this.cart=!0},closeCart:function(){this.cart=!1},darkHide:function(){this.cart=!1},totalMoney:function(t){var s=this;this.totalPrice=t.price*t.count,console.log(this.totalPrice),this.$confirm("请确认是否支付此产品，金额为￥"+this.totalPrice+"元","支付框",{confirmButtonText:"确认支付",cancelButtonText:"取消",type:"success",center:!0}).then(function(){s.$message({type:"success",message:"支付成功!"}),s.cart=!1}).catch(function(){s.$message({type:"info",message:"已取消删除"}),s.cart=!1})}}},z=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"goods"},[i("div",{staticClass:"inHeader"},[i("div",{staticClass:"left",on:{click:t.goodShow}},[i("i",{staticClass:"icon-back"})]),t._v(" "),t._m(0,!1,!1)]),t._v(" "),i("div",{staticClass:"goodsWrapper"},[i("div",{staticClass:"content"},[i("img",{attrs:{src:t.goodsIn.img}}),t._v(" "),i("div",{staticClass:"line border-1px"}),t._v(" "),i("div",{staticClass:"cost"},[i("div",{staticClass:"left"},[i("div",{staticClass:"top"},[t._v("\r\n                            "+t._s(t.goodsIn.name)+"\r\n                        ")]),t._v(" "),i("div",{staticClass:"bottom"},[t._v("￥"+t._s(t.goodsIn.price))])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"icon-favorites remove",class:{add:t.goodsIn.isActive},on:{click:function(s){t.addPro(s)}}}),t._v(" "),i("div",{staticClass:"bottom"},[t._v(t._s(t.goodsIn.add))])])]),t._v(" "),i("div",{staticClass:"darkLine"}),t._v(" "),i("div",{staticClass:"recommend"},[i("ul",t._l(t.goodsIn.recommend,function(s){return i("li",[i("img",{attrs:{src:s.img,width:"48px",height:"71"}}),t._v(" "),i("p",[t._v(t._s(s.color))])])}))]),t._v(" "),i("div",{staticClass:"darkLine"})]),t._v(" "),i("div",{staticClass:"cartFooter"},[i("div",{staticClass:"line border-1px"}),t._v(" "),i("div",{staticClass:"footer"},[t._m(1,!1,!1),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"rLeft"},[t._v("加入购物车")]),t._v(" "),i("div",{staticClass:"rRight",on:{click:t.showCart}},[t._v("立即购买")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cart,expression:"cart"}],staticClass:"dark",on:{click:t.darkHide}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cart,expression:"cart"}],staticClass:"cart"},[i("div",{staticClass:"close",on:{click:t.closeCart}},[i("i",{staticClass:"icon-close"})]),t._v(" "),i("div",{staticClass:"cartContent"},[i("div",{staticClass:"content"},[i("div",{staticClass:"top"},[i("img",{attrs:{src:t.goodsIn.img,width:"79",height:"77"}}),t._v(" "),i("p",{staticClass:"topName"},[t._v(t._s(t.goodsIn.name))]),t._v(" "),i("p",{staticClass:"topPrice"},[t._v("￥"+t._s(t.goodsIn.price))])]),t._v(" "),i("div",{staticClass:"bottom"},[i("p",{staticClass:"bottomTitle"},[t._v("颜色")]),t._v(" "),i("div",{staticClass:"bottomItem"},[i("ul",t._l(t.goodsIn.recommend,function(s,o){return i("li",{class:{check:o==t.currentIndex},on:{click:function(s){t.currentIndex=o}}},[t._v(t._s(s.color))])}))]),t._v(" "),i("p",{staticClass:"bottomCount"},[t._v("数量")]),t._v(" "),i("div",{staticClass:"count"},[i("cartControl",{attrs:{goodsIn:t.goodsIn}})],1),t._v(" "),i("div",{staticClass:"confirm"},[i("button",{on:{click:function(s){t.totalMoney(t.goodsIn)}}},[t._v("确定")])])])])])])])])])},tt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"right"},[i("i",{staticClass:"icon-skip"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"left"},[i("i",{staticClass:"icon-atm"})])}],st={render:z,staticRenderFns:tt},it=st,ot=i("VU/8"),et=n,ct=ot(J,it,!1,et,null,null),at=ct.exports,nt={components:{goods:at},data:function(){return{selectedProduct:{},goods:{banner:[{img:"http://f.cloudadmx.com/group2/M00/00/24/wKgABloO61OAQ44AAAGp4CJlMPE351.png"},{img:"http://f.cloudadmx.com/group1/M00/00/22/wKgABFoCzImAOxP3AAOwYxQHIIs718.png"}],hotList:[{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgABFoAYiWAI89rAAB_nqQxtBQ413.png",name:"简约木质笔筒",price:79,count:1,add:34,recommend:[{color:"蓝色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoHvUCAbNVZAABseQGEMMU827.png"},{color:"黑色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloHug2AKoBgAABTK7W4yyQ025.png"}],isActive:!0},{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgAA1oAYk-AGjEoAACsSovWRc0379.png",name:"手绘卡通纸胶带",price:78,add:34,count:1,recommend:[{color:"白色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoHugWALfQAAABkm9SWO-4383.png"},{color:"蓝色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloHug2AKoBgAABTK7W4yyQ025.png"}],isActive:!0},{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgABFoAYlWAMV3DAABsJ3-QRF8395.png",name:"粉色手账本",price:78,add:34,count:1,recommend:[{color:"白色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoHugWALfQAAABkm9SWO-4383.png"},{color:"蓝色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoHvUCAbNVZAABseQGEMMU827.png"}],isActive:!1},{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgABFoAYiWAI89rAAB_nqQxtBQ413.png",name:"简约木质笔筒",price:79,add:34,count:1,recommend:[{color:"蓝色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoHvUCAbNVZAABseQGEMMU827.png"},{color:"黑色",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloHug2AKoBgAABTK7W4yyQ025.png"}],isActive:!0}],photos:{titleImg:"http://f.cloudadmx.com/group2/M00/00/20/wKgABloCdX6AYwtpAAV7fUKCYdE366.png",list:[{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgAA1oAbaCACs5DAAC9VxL5m3E226.png"},{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgABFoAbZmAbyIqAAFP5LVaXhc946.png"},{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgAA1oAbaCACs5DAAC9VxL5m3E226.png"},{img:"http://f.cloudadmx.com/group1/M00/00/20/wKgABFoAbZmAbyIqAAFP5LVaXhc946.png"}]}}}},watch:{goods:function(){var t=this;this.$nextTick(function(){t._initPics(),t._initScroll()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initPics(),t._initScroll()})},methods:{_initScroll:function(){this.scroll||(this.scroll=new P.a(this.$refs.homeBox,{click:!0}))},_initPics:function(){var t=this;if(this.goods.hotList){var s=111*this.goods.hotList.length-10;this.$refs.contentWrapper.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new P.a(t.$refs.wrapper,{scrollX:!0,eventPassthrough:"vertical"})})}if(this.goods.photos.list){var i=111*this.goods.photos.list.length-10;this.$refs.sImg.style.width=i+"px",this.$nextTick(function(){t.pScroll?t.pScroll.refresh():t.pScroll=new P.a(t.$refs.imgBox,{scrollX:!0,eventPassthrough:"vertical"})})}},selectProduct:function(t,s){this.selectedProduct=t,this.$refs.goodsIn.show()}}},rt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"homeBox",staticClass:"home"},[i("div",{staticClass:"contentBox"},[i("div",{staticClass:"home-banner"},[i("el-carousel",{attrs:{trigger:"click",height:"158px"}},t._l(t.goods.banner,function(t){return i("el-carousel-item",{key:t.img},[i("img",{attrs:{src:t.img,width:"100%",height:"158"}})])}))],1),t._v(" "),i("div",{staticClass:"home-content"},[i("div",{staticClass:"saleList"},[i("h4",[t._v("TOP热卖清单 ")]),t._v(" "),i("div",{ref:"wrapper",staticClass:"sale"},[i("ul",{ref:"contentWrapper"},t._l(t.goods.hotList,function(s){return i("li",{staticClass:"list",on:{click:function(i){t.selectProduct(s,i)}}},[i("div",{staticClass:"list-img"},[i("img",{attrs:{src:s.img}}),t._v(" "),i("p",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),i("p",{staticClass:"price"},[t._v("￥"+t._s(s.price))])])])}))]),t._v(" "),i("div",{staticClass:"all"},[t._v("查看全部 >")])]),t._v(" "),i("div",{staticClass:"blackLine"}),t._v(" "),i("div",{staticClass:"classesTitle"},[i("h4",[t._v("精选专题")]),t._v(" "),i("div",{staticClass:"sTitle"},[i("img",{attrs:{src:t.goods.photos.titleImg,width:"100%",height:"200"}})]),t._v(" "),i("div",{ref:"imgBox",staticClass:"imgBox"},[i("ul",{ref:"sImg"},t._l(t.goods.photos.list,function(t,s){return i("li",{staticClass:"photos"},[i("img",{attrs:{src:t.img,width:"100",height:"100"}})])}))])])])]),t._v(" "),i("goods",{ref:"goodsIn",attrs:{goodsIn:t.selectedProduct}})],1)},lt=[],dt={render:rt,staticRenderFns:lt},mt=dt,pt=i("VU/8"),gt=r,ut=pt(nt,mt,!1,gt,null,null),vt=ut.exports,ht={data:function(){return{topic:[{bannerImg:"http://f.cloudadmx.com/group2/M00/00/1F/wKgABVoCdXWAU6uZAALCjTFI54Q144.png",book:[{img:"http://f.cloudadmx.com/group1/M00/00/22/wKgABFoCdaGAPeWnAAB7Ojr5tTQ792.png",name:"纯色牛皮本",price:26},{img:"http://f.cloudadmx.com/group1/M00/00/21/wKgAA1oCdamAJG01AABu9bN9Xgc917.png",name:"棉麻质感笔记",price:34},{img:"http://f.cloudadmx.com/group1/M00/00/22/wKgABFoCdbWAMCB6AAEM5oX6ZYQ490.png",name:"清新文艺风",price:18},{img:"http://f.cloudadmx.com/group1/M00/00/21/wKgAA1oCdbuAebGrAABFxEuWDcg673.png",name:"蓝色棉麻本",price:23}]},{bannerImg:"http://f.cloudadmx.com/group2/M00/00/20/wKgABloCdX6AYwtpAAV7fUKCYdE366.png",book:[{img:"http://f.cloudadmx.com/group2/M00/00/1F/wKgABVoCdYiAFhQdAADMvuq-_Vg973.png",name:"森林主题贴纸",price:18},{img:"http://f.cloudadmx.com/group2/M00/00/20/wKgABloCdY6AIwtcAAEcOhjwfAo831.png",name:"粉色纹理笔袋",price:18},{img:"http://f.cloudadmx.com/group2/M00/00/1F/wKgABVoCdZSAXKCmAAEjAiAp3EY924.png",name:"木纹纸胶带",price:26},{img:"http://f.cloudadmx.com/group1/M00/00/21/wKgAA1oCdZmAHKRgAADH-ER4kKQ093.png",name:"猫头鹰书架",price:34}]}]}},watch:{topic:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})},methods:{_initScroll:function(){this.scroll||(this.scroll=new P.a(this.$refs.topicBox,{click:!0}))},_initPics:function(){for(var t=this,s=0;s<this.topic.length;s++)if(this.topic[s].book){var i=108*this.topic[s].book.length-8;this.$refs.sImg[s].style.width=i+"px",this.$nextTick(function(){for(var s=0;s<t.topic.length;s++){var i=t.oScroll+s;i?i.refresh():i=new P.a(t.$refs.imgBox[s],{scrollX:!0,scrollY:!1,eventPassthrough:"vertical"})}})}}}},ft=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"topicBox",staticClass:"topic"},[i("div",{staticClass:"topic-content"},t._l(t.topic,function(s){return i("div",{staticClass:"topicT"},[i("img",{attrs:{src:s.bannerImg,width:"100%",height:"200"}}),t._v(" "),i("div",{ref:"imgBox",refInFor:!0,staticClass:"imgBox"},[i("ul",{ref:"sImg",refInFor:!0},t._l(s.book,function(s,o){return i("li",[i("img",{attrs:{src:s.img,width:"100",height:"100"}}),t._v(" "),i("div",{staticClass:"detail"},[i("p",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),i("p",{staticClass:"price"},[t._v("￥"+t._s(s.price))])])])}))])])}))])},At=[],_t={render:ft,staticRenderFns:At},Ct=_t,xt=i("VU/8"),wt=l,Bt=xt(ht,Ct,!1,wt,null,null),Mt=Bt.exports,kt={data:function(){return{people:[{head:"http://f.cloudadmx.com/group1/M00/00/24/wKgABFoFWt6ACO8LAAA2wCW4WlE426.png",name:"Mango-鱼",page:24,video:18,photo:237,share:[{img:"http://f.cloudadmx.com/group1/M00/00/24/wKgAA1oFWuqAei8TAAJwflCzKp8595.png"},{img:"http://f.cloudadmx.com/group1/M00/00/24/wKgABFoFWvOAID-FAAJ3yPDE7FI787.png"}]},{head:"http://f.cloudadmx.com/group1/M00/00/24/wKgABFoFWsqAVGZYAAA3j8Wk7rM335.png",name:"君君",page:46,video:20,photo:129,share:[{img:"http://f.cloudadmx.com/group1/M00/00/24/wKgAA1oFWv2AEhslAAHhrpIu--4028.png"},{img:"http://f.cloudadmx.com/group1/M00/00/24/wKgABFoFWwSAOocUAAH5jmcLVvI910.png"}]},{head:"http://f.cloudadmx.com/group1/M00/00/24/wKgAA1oFWtKAQwjIAAA1L7wagG8683.png",name:"考拉文子",page:34,video:23,photo:35,share:[{img:"http://f.cloudadmx.com/group1/M00/00/24/wKgAA1oFWuqAei8TAAJwflCzKp8595.png"},{img:"http://f.cloudadmx.com/group1/M00/00/24/wKgABFoFWwSAOocUAAH5jmcLVvI910.png"}]}]}},watch:{people:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})},methods:{sight:function(t){for(var s=0;s<this.people.length;s++)console.log(s)},_initScroll:function(){this.scroll||(this.scroll=new P.a(this.$refs.peopleBox,{click:!0}))},_initPics:function(){for(var t=this,s=0;s<this.people.length;s++)if(this.people[s].share){var i=193*this.people[s].share.length-10;this.$refs.imgItem[s].style.width=i+"px",this.$nextTick(function(){for(var s=0;s<t.people.length;s++){var i=t.oScroll+s;i?i.refresh():i=new P.a(t.$refs.imgBox[s],{scrollX:!0,eventPassthrough:"vertical"})}})}},selectedPage:function(t){void 0===t.isActive?(this.$set(t,"isActive",!0),this.$message({showClose:!0,message:"关注成功",type:"success"})):(t.isActive=!t.isActive,this.$message({showClose:!0,message:"取消关注",type:"success"}))}}},Kt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"peopleBox",staticClass:"people"},[i("div",{ref:"people",staticClass:"people-content"},[i("ul",{ref:"peopleContent"},t._l(t.people,function(s){return i("li",[i("div",{staticClass:"pageTitle"},[i("div",{staticClass:"pLeft"},[i("img",{attrs:{src:s.head,width:"40",height:"40"}})]),t._v(" "),i("div",{staticClass:"pCenter"},[i("div",{staticClass:"top"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"bottom"},[i("span",[t._v("文章 "+t._s(s.page))]),t._v(" "),i("span",[t._v("视频 "+t._s(s.video))]),t._v(" "),i("span",[t._v("图片 "+t._s(s.photo))])])]),t._v(" "),i("div",{staticClass:"pRight"},[i("span",{class:{add:s.isActive},on:{click:function(i){t.selectedPage(s)}}},[t._v(" +关注")])])]),t._v(" "),i("div",{ref:"imgBox",refInFor:!0,staticClass:"pageContent"},[i("ul",{ref:"imgItem",refInFor:!0,staticClass:"imgItem"},t._l(s.share,function(t){return i("li",[i("img",{attrs:{src:t.img,width:"183",height:"135"}})])}))])])}))])])},Ft=[],It={render:Kt,staticRenderFns:Ft},bt=It,$t=i("VU/8"),Vt=d,Et=$t(kt,bt,!1,Vt,null,null),Pt=Et.exports,Wt={data:function(){return{favourable:[{img:"http://f.cloudadmx.com/group1/M00/00/21/wKgAA1oCtneAVPK5AAEnj4Z2Hh4425.png"},{img:"http://f.cloudadmx.com/group1/M00/00/22/wKgABFoCtn-AN5I_AADvMfvg558821.png"},{img:"http://f.cloudadmx.com/group1/M00/00/21/wKgAA1oCtoWABpIKAADzgq0V5ZA049.png"}]}},watch:{favourable:function(){var t=this;this.$nextTick(function(){t._initScroll()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},methods:{_initScroll:function(){this.scroll||(this.scroll=new P.a(this.$refs.fav,{click:!0}))}}},Tt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"fav",staticClass:"favourable"},[i("div",{staticClass:"fav-content"},[i("ul",t._l(t.favourable,function(s){return i("li",[i("img",{attrs:{src:s.img,width:"100%",height:"159"}}),t._v(" "),i("div",{staticClass:"darkLine"})])}))])])},St=[],yt={render:Tt,staticRenderFns:St},Gt=yt,Lt=i("VU/8"),Rt=m,Qt=Lt(Wt,Gt,!1,Rt,null,null),Ut=Qt.exports,qt={data:function(){return{me:{head:"http://f.cloudadmx.com/group1/M00/00/24/wKgABFoFWt6ACO8LAAA2wCW4WlE426.png",name:"文艺笑笑",summary:"那是未来人们凝视的眼睛",item:[{name:"售后",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoGqreAQPSuAAAHGxchLfw392.png"},{name:"客服",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloGqqqABDLuAAAGg3Ax68I977.png"},{name:"草稿",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloGqsGAb6GOAAAFUMCnaWI127.png"},{name:"收藏",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoGqpiATRyYAAAGkFJG52U277.png"},{name:"礼券",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoGqsqAE7qEAAAFkK08Rhk728.png"},{name:"地址",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoGrZiANEbfAAAG94ukEdY873.png"}],order:[{name:"待付款",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoGuFaAQ0EWAAAPX5752jw315.png"},{name:"待发货",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloGuFCAWe2wAAAMqVUJj6Y770.png"},{name:"配送中",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABVoGuGOAFQCBAAAMqGeUVT8290.png"},{name:"待评价",img:"http://f.cloudadmx.com/group2/M00/00/23/wKgABloGuVWARqxnAAANo5jhWFE146.png"}]}}},watch:{goods:function(){var t=this;this.$nextTick(function(){t._initScroll()})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},methods:{_initScroll:function(){this.scroll||(this.scroll=new P.a(this.$refs.meBox,{click:!0}))}}},Ot=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"me"},[i("div",{staticClass:"meHeader"},[i("div",{staticClass:"left"},[t._v("\r\n            我\r\n        ")]),t._v(" "),i("div",{staticClass:"right"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"icon-back"})])],1)]),t._v(" "),i("div",{staticClass:"line border-1px"}),t._v(" "),i("div",{ref:"meBox",staticClass:"meBox"},[i("div",{staticClass:"meContent"},[i("div",{staticClass:"meTitle"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:t.me.head,width:"61",height:"61"}})]),t._v(" "),i("div",{staticClass:"center"},[i("div",{staticClass:"top"},[t._v(t._s(t.me.name))]),t._v(" "),i("div",{staticClass:"bottom"},[t._v(t._s(t.me.summary))])]),t._v(" "),i("div",{staticClass:"right"},[t._v(">")])]),t._v(" "),i("div",{staticClass:"lineDark"}),t._v(" "),i("div",{staticClass:"order"},[t._m(0,!1,!1),t._v(" "),i("div",{staticClass:"line border-1px"}),t._v(" "),i("div",{staticClass:"orderContent"},[i("ul",t._l(t.me.order,function(s){return i("li",[i("img",{attrs:{src:s.img,width:"25",height:"25"}}),t._v(" "),i("p",{staticClass:"orderFont"},[t._v(t._s(s.name))])])}))])]),t._v(" "),i("div",{staticClass:"lineDark"}),t._v(" "),i("div",{staticClass:"list"},[i("ul",t._l(t.me.item,function(s){return i("li",[i("div",{staticClass:"listLeft"},[i("img",{attrs:{src:s.img,width:"20",height:"20"}})]),t._v(" "),i("div",{staticClass:"listRight"},[i("div",{staticClass:"innerLeft"},[t._v("\r\n                                "+t._s(s.name)+"\r\n                            ")]),t._v(" "),i("div",{staticClass:"innerRight"},[t._v(">")])])])}))])])])])},Ht=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"orderTitle"},[i("div",{staticClass:"orderLeft"},[t._v("\r\n                        我的订单\r\n                    ")]),t._v(" "),i("div",{staticClass:"orderRight"},[t._v(">")])])}],Yt={render:Ot,staticRenderFns:Ht},Nt=Yt,jt=i("VU/8"),Dt=p,Xt=jt(qt,Nt,!1,Dt,null,null),Zt=Xt.exports;g.default.use(E.a);var Jt=new E.a({routes:[{path:"/",name:"home",component:vt},{path:"/goods",name:"goods",component:at},{path:"/topic",name:"topic",component:Mt},{path:"/people",name:"people",component:Pt},{path:"/favourable",name:"favourable",component:Ut},{path:"/me",name:"me",component:Zt},{path:"/shopCart",name:"shopCart",component:Z}]}),zt=i("ORbq"),ts=(i("34KM"),i("zL8q")),ss=i.n(ts);i("tvR6");g.default.use(zt.a),g.default.use(ss.a),g.default.config.productionTip=!1,new g.default({el:"#app",router:Jt,template:"<App/>",components:{App:V}})},Rmfm:function(t,s){},"S+t6":function(t,s){},Ynth:function(t,s){},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.51fea6dce473d4a6bdf9.js.map