webpackJsonp([1],{"0kvj":function(t,e){},Ag7G:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("mtWM"),r=a.n(i),o=a("Rf8U"),n=a.n(o),l=(a("K3J8"),a("ZZvs")),c=a.n(l);a("SYh3");s.a.prototype.$bus=new s.a;var d=a("sUu7"),u=a("TXmL"),m=a("1SbN"),p=a.n(m),v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var h=a("VU/8")({name:"App"},v,!1,function(t){a("0kvj")},null,null).exports,_=a("/ocq"),f={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{signout:function(){var t=this;this.$http.post("https://vue-course-api.hexschool.io/logout").then(function(e){console.log(e.data),e.data.success&&t.$router.push("/login")})}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("a",{attrs:{href:"#"},on:{click:this.signout}},[this._v("登出")])])},staticRenderFns:[]};a("VU/8")(f,g,!1,function(t){a("Ag7G")},"data-v-5c42ba64",null).exports;var b={name:"Navbar",data:function(){return{}},methods:{signout:function(){var t=this;this.$http.post("https://vue-course-api.hexschool.io/logout").then(function(e){console.log(e.data),e.data.success&&t.$router.push("/login")})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("Company name")]),t._v(" "),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),t._v(" "),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("Sign out")])])])])},staticRenderFns:[]},x=a("VU/8")(b,C,!1,null,null,null).exports,y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),t._v(" "),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item",on:{click:function(e){t.clickList="a"}}},[a("router-link",{staticClass:"nav-link",class:{active:"a"===t.clickList},attrs:{to:"/admin/products"}},[a("i",{staticClass:"fas fa-box-open"}),t._v("\n          產品列表\n        ")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"b"===t.clickList},attrs:{href:"#"},on:{click:function(e){t.clickList="b"}}},[a("span",{attrs:{"data-feather":"file-text"}}),t._v(" "),a("i",{staticClass:"fas fa-address-book"}),t._v("\n          訂單列表\n        ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"c"===t.clickList},attrs:{href:"#"},on:{click:function(e){t.clickList="c"}}},[a("span",{attrs:{"data-feather":"file-text"}}),t._v(" "),a("i",{staticClass:"fas fa-ticket-alt"}),t._v("\n          優惠券\n        ")])])]),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item",on:{click:function(e){t.clickList="d"}}},[a("router-link",{staticClass:"nav-link",class:{active:"d"===t.clickList},attrs:{to:"/customer_order"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v("\n          模擬訂單\n        ")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("管理員")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("模擬功能")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])}]},P={name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout(function(){e.messages.forEach(function(a,s){a.timestamp===t&&e.messages.splice(s,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("message:push",function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)})}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},staticRenderFns:[]};var k={components:{Sidebar:a("VU/8")({data:function(){return{clickList:"a"}},methods:{getPath:function(){}}},y,!1,null,null,null).exports,Navbar:x,Alert:a("VU/8")(P,w,!1,function(t){a("glht")},"data-v-0c53cf4e",null).exports}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("Alert"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("Sidebar"),this._v(" "),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[e("router-view")],1)],1)])],1)},staticRenderFns:[]},L=a("VU/8")(k,$,!1,null,null,null).exports,M={name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this;this.$http.post("https://vue-course-api.hexschool.io/admin/signin",t.user).then(function(e){console.log(e.data),e.data.success&&t.$router.push("/admin/products")})}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2018")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),this._v(" Remember me\n      ")])])}]};var E=a("VU/8")(M,N,!1,function(t){a("oM5Y")},"data-v-f20f2c5e",null).exports,F=a("woOf"),U=a.n(F),q=a("7t+N"),O=a.n(q),A={data:function(){return{products:[],tempProduct:{},isNew:!1,isLoading:!1,uploadFileLoading:!1,pagination:{}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;console.log("https://vue-course-api.hexschool.io","youfuhe");var e=this,a="https://vue-course-api.hexschool.io/api/youfuhe/products?page="+t;e.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1})},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=U()({},e),this.isNew=!1),O()("#productModal").modal("show")},updateProduct:function(){var t=this;console.log(t.tempProduct);var e="https://vue-course-api.hexschool.io/api/youfuhe/admin/product",a="post";t.isNew||(e="https://vue-course-api.hexschool.io/api/youfuhe/admin/product/"+t.tempProduct.id,a="put"),this.$http[a](e,{data:t.tempProduct}).then(function(e){console.log(e.data),e.data.success?(O()("#productModal").modal("hide"),t.getProducts()):(O()("#productModal").modal("hide"),t.getProducts(),console.log("新增失敗"))})},deleteModal:function(t){O()("#delProductModal").modal("show"),this.tempProduct=t},deleteList:function(){var t=this;console.log(t.tempProduct);var e="https://vue-course-api.hexschool.io/api/youfuhe/admin/product/"+t.tempProduct;this.$http.delete(e).then(function(e){console.log(e.data),e.data.success?(O()("#delProductModal").modal("hide"),t.getProducts()):(O()("#delProductModal").modal("hide"),t.getProducts(),console.log("找不到產品"))})},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=new FormData;a.append("file-to-upload",e);this.uploadFileLoading=!0,this.$http.post("https://vue-course-api.hexschool.io/api/youfuhe/admin/upload",a,{headers:{"Content-type":"multipart/form-data"}}).then(function(e){console.log(e.data),e.data.success?(t.$set(t.tempProduct,"imageUrl",e.data.imageUrl),t.uploadFileLoading=!1):t.$bus.$emit("message:push",e.data.message,"danger")})}},created:function(){this.getProducts()}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary mt-4",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新產品")])]),t._v(" "),a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),t._v(" "),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.deleteModal(e.id)}}},[t._v("刪除")])])])}),0)]),t._v(" "),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Previous")])]),t._v(" "),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])],2)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0 "},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上傳圖片\n                  "),t.uploadFileLoading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),t._v(" "),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",alt:"",src:t.tempProduct.imageUrl}})]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{"true-value":1,"false-value":0,type:"checkbox",id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([null])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteList}},[t._v("確認刪除")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",{attrs:{width:"120"}},[t._v("分類")]),t._v(" "),a("td",[t._v("名稱")]),t._v(" "),a("td",{attrs:{width:"120"}},[t._v("原價")]),t._v(" "),a("td",{attrs:{width:"120"}},[t._v("售價")]),t._v(" "),a("td",{attrs:{width:"100"}},[t._v("是否啟用")]),t._v(" "),a("td",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("新增產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("刪除產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},j=a("VU/8")(A,I,!1,null,null,null).exports,S={data:function(){return{product:{},products:[],isLoading:!1,lodingItme:"",pagination:{},cartNum:"",cart:[],form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){console.log("https://vue-course-api.hexschool.io","youfuhe");var t=this;t.isLoading=!0,this.$http.get("https://vue-course-api.hexschool.io/api/youfuhe/products/all").then(function(e){console.log(e.data),t.products=e.data.products,t.pagination=e.data.pagination,t.isLoading=!1})},openListModal:function(t){var e=this,a="https://vue-course-api.hexschool.io/api/youfuhe/product/"+t;e.lodingItme=t,this.$http.get(a).then(function(t){O()("#listModal").modal("show"),console.log(t.data),e.product=t.data.product,e.product.num=1,e.lodingItme=""})},addtoCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this;s.lodingItme=t;var i={product_id:t,qty:a};this.$http.post("https://vue-course-api.hexschool.io/api/youfuhe/cart",{data:i}).then(function(t){console.log(t.data),e.getCart(),s.lodingItme="",O()("#listModal").modal("hide")})},getCart:function(){var t=this;this.$http.get("https://vue-course-api.hexschool.io/api/youfuhe/cart").then(function(e){console.log(e.data),e.data.success&&(t.cart=e.data.data,console.log(t.cart.total))})},deleteCart:function(t){var e=this,a=this;a.isLoading=!0;var s="https://vue-course-api.hexschool.io/api/youfuhe/cart/"+t;this.$http.delete(s).then(function(t){console.log(t.data),t.data.success&&(a.isLoading=!1,e.getCart())})},creatOrder:function(){var t=this,e=this,a=e.form;this.$validator.validate().then(function(s){s?t.$http.post("https://vue-course-api.hexschool.io/api/youfuhe/order",{data:a}).then(function(t){console.log(t.data),t.data.success&&e.$router.push("/CustomerOrderOut/"+t.data.orderId)}):console.log("欄位不完整")})}},created:function(){this.getProducts(),this.getCart()}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"row mt-4"},t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card border-0 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),t._v(" "),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.category))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.category))]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():a("div",{staticClass:"h5"},[t._v(t._s(e.origin_price)+" 元")]),t._v(" "),e.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(e.origin_price)+" 元")]):t._e(),t._v(" "),e.price?a("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(e.price)+" 元")]):t._e()])]),t._v(" "),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openListModal(e.id)}}},[t.lodingItme===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            查看更多\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(e.id)}}},[t.lodingItme===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到購物車\n          ")])])])])}),0),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"listModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",staticStyle:{width:"500px"},attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(t._s(t.product.title))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid",attrs:{src:t.product.image,alt:""}}),t._v(" "),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),t._v(" "),a("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.decription))])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():a("div",{staticClass:"h5"},[t._v(t._s(t.product.origin_price)+"元")]),t._v(" "),t.product.price?a("del",{staticClass:"h6"},[t._v("原價"+t._s(t.product.origin_price)+"元")]):t._e(),t._v(" "),t.product.price?a("div",{staticClass:"h5"},[t._v("現在只要"+t._s(t.product.price)+"元")]):t._e()]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"num",e.target.multiple?a:a[0])}}},t._l(10,function(e){return a("option",{key:e,domProps:{value:e}},[t._v("選購 "+t._s(e)+" "+t._s(t.product.unit))])}),0)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("小計"+t._s(t.product.price*t.product.num)+"元")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.product.num)}}},[t._v("加到購物車")])])])])]),t._v(" "),a("div",{staticClass:"my-5 d-flex justify-content-center"},[0!==t.cart.total?a("table",{staticClass:"table",staticStyle:{width:"600px"}},[t._m(1),t._v(" "),a("tbody",t._l(t.cart.carts,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.deleteCart(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v("\n            "+t._s(e.product.title)+"\n            ")]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),t._v(" "),a("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])])])]):t._e()]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.creatOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t._v(" "),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t._v(" "),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),t._m(3)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th"),this._v(" "),e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"input-group mb-3 input-group-sm",staticStyle:{width:"600px"}},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"}},[this._v("套用優惠碼")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[this._v("送出訂單")])])}]},R=a("VU/8")(S,D,!1,null,null,null).exports,V={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e="https://vue-course-api.hexschool.io/api/youfuhe/order/"+t.orderId;t.isLoading=!0,this.$http.get(e).then(function(e){console.log(e.data),t.order=e.data.order,t.isLoading=!1})},payOrder:function(){var t=this,e="https://vue-course-api.hexschool.io/api/youfuhe/pay/"+t.orderId;t.isLoading=!0,this.$http.post(e).then(function(e){console.log(e.data),e.data.success&&t.getOrder(),t.isLoading=!1})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.order.products,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),a("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),a("tr",[a("th",[t._v("姓名")]),t._v(" "),a("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),a("tr",[a("th",[t._v("收件人電話")]),t._v(" "),a("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),a("tr",[a("th",[t._v("收件人地址")]),t._v(" "),a("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),a("tr",[a("th",[t._v("付款狀態")]),t._v(" "),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),t._v(" "),!1===t.order.is_paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])}]},T=a("VU/8")(V,W,!1,null,null,null).exports;s.a.use(_.a);var H=new _.a({routes:[{path:"*",redirect:"/login"},{path:"/login",name:"Login",component:E},{path:"/admin",name:"Dashborad",component:L,children:[{path:"products",name:"Products",component:j,meta:{requiresAuth:!0}}]},{path:"/",name:"Dashborad",component:L,children:[{path:"customer_order",name:"CustomerOrder",component:R},{path:"CustomerOrderOut/:orderId",name:"CustomerOrderOut",component:T}]}]});s.a.config.productionTip=!1,r.a.defaults.withCredentials=!0,s.a.use(n.a,r.a),s.a.use(u.a);var Y=new u.a({locale:"zhTW"});s.a.use(d.a,{i18n:Y,dictionary:{zhTW:p.a}}),s.a.component("Loading",c.a),s.a.filter("currency",function(t){return"$"+Number(t).toFixed(0).replace(/./g,function(t,e,a){return e&&"."!==t&&(a.length-e)%3==0?(", "+t).replace(/\s/g,""):t})}),new s.a({i18n:Y,el:"#app",router:H,components:{App:h},template:"<App/>"}),H.beforeEach(function(t,e,a){if(console.log("to",t,"from",e,"next",a),t.meta.requiresAuth){console.log("這裡需要驗證");r.a.post("https://vue-course-api.hexschool.io/api/user/check").then(function(t){console.log(t.data),t.data.success?a():a({path:"/login"})})}else a()})},SYh3:function(t,e){},glht:function(t,e){},oM5Y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0236f41f75aa524308ac.js.map