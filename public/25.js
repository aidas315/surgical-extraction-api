(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{97:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{name:null,parent:"none",categories:null,images:null,category_id:null,form_type:"new",form_errors:[]}},created:function(){this.$route.query.id&&this.editCategory(this.$route.query.id),this.loadCategories()},beforeRouteUpdate:function(t,e,a){t.query.id&&this.editCategory(t.query.id),a()},methods:{loadCategories:function(){var t=this;this.$store.dispatch("get_all_categories").then(function(e){t.categories=e.data.data}).catch(function(t){return console.log(t)})},submitCategoryForm:function(){var t=this,e={name:this.name,parent:"none"==this.parent?null:this.parent,category_id:this.category_id};this.$store.dispatch("new"==this.form_type?"add_new_category":"edit_category",e).then(function(e){t.$toastr("info","Success! Category was "+("new"==t.form_type?"added.":"updated."),"Information"),t.handleOtherEvents(e),t.name=null,t.parent="none",t.category_id=null,t.images=null,"edit"==t.form_type&&t.$router.replace({name:"manage-categories"}),t.form_type="new",t.loadCategories()}).catch(function(e){if(t.form_errors=[],e.response&&e.response.data&&e.response.data.errors)for(var a in e.response.data.errors)a&&a.length&&t.form_errors.push(e.response.data.errors[a][0])})},handleOtherEvents:function(t){var e=this;if(t.data.data.id&&this.images&&this.images.length){console.log(this.images);var a=!0;Array.from(this.images).forEach(function(s){var i=new FormData;i.append("image",s),i.append("imageable_type","category"),i.append("imageable_id",t.data.data.id),e.$store.dispatch("addImage",i).catch(function(t){return a=!1})}),a?this.$toastr("info","Success! Images were uploaded.","Information"):this.$toastr("danger","Aaah! Something went wrong while uploading Images.","Error")}},editCategory:function(t){var e=this;this.$store.dispatch("get_category_data",t).then(function(t){t.data.data?(e.name=t.data.data.name,e.category_id=t.data.data.id,e.parent=t.data.data.parent?t.data.data.parent.id:"none",e.form_type="edit",window.scrollTo(0,0)):e.$toastr("error","Success! Something is not right.","Error")})},handleFileChange:function(t){this.images=t.target.files},deleteCategory:function(t,e){var a=this;0==e.products.length&&0==e.subcategories.length?this.$store.dispatch("delete_category",e.id).then(function(t){a.$toastr("info","Success! Category was deleted.","Information"),a.loadCategories()}).catch(function(t){return a.$toastr("error","Aah! Category wasn't deleted.","Error")}):this.$toastr("info","Category contains subcategories or products and cannot be deleted.","Information")}}},i=a(0),r=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{margin:"100px auto"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(t._s("new"==t.form_type?"Add Category":"Edit Category"))])]),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g Surgical",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),t.categories&&t.categories.length?a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Category")]),t._v(" "),a("div",{staticClass:"control is-fullwidth"},[a("div",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.parent,expression:"parent"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.parent=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"none"}},[t._v("None")]),t._v(" "),t._l(t.categories,function(e){return a("option",{key:e.id,style:{display:e.id==t.category_id||e.parent&&e.parent.id==t.category_id?"none":"initial"},domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)])])]):t._e(),t._v(" "),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Images")]),t._v(" "),a("div",{staticClass:"file has-name is-fullwidth"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function(e){return t.handleFileChange(e)}}}),t._v(" "),t._m(0)])]),t._v(" "),"edit"==t.form_type?a("div",{staticClass:"help"},[t._v("This will add images to category and won't delete previous ones.")]):t._e()]),t._v(" "),t.form_errors&&t.form_errors.length?a("div",{staticClass:"field has-text-danger"},t._l(t.form_errors,function(e,s){return a("p",{key:s,staticClass:"help"},[t._v(t._s(e))])}),0):t._e()])])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"card-footer-item"},[a("button",{staticClass:"button is-fullwidth",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitCategoryForm(e)}}},[t._v("Save")])])])]),t._v(" "),a("br"),a("br"),t._v(" "),a("div",{staticClass:"card"},[t._m(1),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content",staticStyle:{"overflow-x":"auto"}},[a("table",{staticClass:"table"},[t._m(2),t._v(" "),t.categories&&t.categories.length?a("tbody",t._l(t.categories,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.parent?e.parent.name:"None"))]),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"category",params:{id:e.id}}}},[t._v("View")])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"manage-categories",query:{id:e.id}}}},[t._v("Edit")])],1),t._v(" "),a("td",[a("a",{on:{click:function(a){return a.preventDefault(),t.deleteCategory(a,e)}}},[t._v("Delete")])])])}),0):t._e()])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fas fa-upload"})]),this._v(" "),e("span",{staticClass:"file-label"},[this._v("\n                                            Choose a file…\n                                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("Categories")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Parent")]),this._v(" "),e("th",{attrs:{colspan:"3"}},[this._v("Actions")])])])}],!1,null,null,null);e.default=r.exports}}]);