(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{107:function(t,e,a){"use strict";a.r(e);var r=a(25),s=a.n(r),i={data:function(){return{editor:s.a,title:null,category:null,categories:null,description:null,products:null,images:null,featured:!1,paginator:null,product_id:null,product_form_type:"new",formErrors:null}},created:function(){this.$route.query.id&&this.editProduct(this.$route.query.id),this.loadCategories(),this.loadProducts()},beforeRouteUpdate:function(t,e,a){this.loadCategories(),this.loadProducts(t.query.page),t.query.id&&this.editProduct(t.query.id),a()},methods:{loadCategories:function(){var t=this;this.$store.dispatch("get_all_categories").then(function(e){t.categories=e.data.data}).catch(function(t){return console.log(t)})},loadProducts:function(t){var e=this;this.$store.dispatch("get_products",{page:t||this.$route.query.page||1,category:null}).then(function(t){e.products=t.data.data,e.paginator=t.data.meta}).catch(function(t){return console.log(t)})},submitProductForm:function(){var t=this;this.formErrors=[];var e={name:this.title,price:20,category:this.category,description:this.description,product_id:this.product_id};"new"==this.product_form_type?this.$store.dispatch("add_product",e).then(function(e){t.$toastr("info","Success! Product was added.","Information"),t.handleOtherEvents(e),t.title=null,t.category=null,t.product_id=null,t.images=null,t.description="",t.featured=!1,t.product_form_type="new"}).catch(function(e){if(e.response.data.errors)for(var a in e.response.data.errors)a&&a.length&&t.formErrors.push(e.response.data.errors[a][0]);t.$toastr("danger","Aaah! Something went wrong while creating product.","Error")}):this.$store.dispatch("update_product",e).then(function(e){t.$toastr("info","Success! Product was updated.","Information"),t.handleOtherEvents(e),t.title=null,t.category=null,t.product_id=null,t.images=null,t.description="",t.featured=!1,t.product_form_type="new"}).catch(function(e){if(e.response&&e.response.data&&e.response.data.errors)for(var a in e.response.data.errors)a&&a.length&&t.formErrors.push(e.response.data.errors[a][0]);t.$toastr("danger","Aaah! Something went wrong while updating product.","Error")}),this.loadCategories(),this.loadProducts(),this.$route.query.page?this.$router.push({name:"manage-products",query:{page:this.$route.query.page}}):this.$router.push({name:"manage-products"})},handleOtherEvents:function(t){var e=this;if(t.data.data.id){if(this.images&&this.images.length){var a=!0;Array.from(this.images).forEach(function(r){console.log(r);var s=new FormData;s.append("image",r),s.append("imageable_type","product"),s.append("imageable_id",t.data.data.id),e.$store.dispatch("addImage",s).catch(function(t){return a=!1})}),a?this.$toastr("info","Success! Images were uploaded.","Information"):this.$toastr("danger","Aaah! Something went wrong while uploading Images.","Error")}this.featured&&this.makeProductFeatured(null,t.data.data.id),"edit"!=this.product_form_type||this.featured||this.makeProductUnFeatured(null,this.product_id)}},makeProductFeatured:function(t,e){var a=this,r={product:e};this.$store.dispatch("set_featured_product",r).then(function(t){a.$toastr("info","Success! Product was set as featured.","Information")}).catch(function(t){a.$toastr("danger","Aaah! Product couldn't be set as featured.","Error")}),this.loadProducts()},makeProductUnFeatured:function(t,e){var a=this,r={product:e};this.$store.dispatch("remove_featured_product",r).then(function(t){a.$toastr("info","Success! Product was removed from featured.","Information")}).catch(function(t){a.$toastr("danger","Aaah! Product couldn't be removed from featured.","Error")}),this.loadProducts()},editProduct:function(t){var e=this;this.$store.dispatch("get_product",t).then(function(t){var a=t.data.data;e.title=a.name,e.product_id=a.id,e.featured=a.featured||!1,e.category=a.category.id,e.description=a.description,e.product_form_type="edit",e.images=null,e.formErrors=null,window.scrollTo(0,0)}).catch(function(t){e.$toastr("danger","Sorry, Something went wrong.","Error"),e.$route.query.page?e.$router.push({name:"manage-products",query:{page:e.$route.query.page}}):e.$router.push({name:"manage-products"})})},deleteProduct:function(t,e){var a=this;this.$store.dispatch("delete_product",e).then(function(t){a.$toastr("info","Success! Product was deleted.","Information")}).catch(function(t){a.$toastr("error","Aah! Something went wrong.","Error")}),this.loadProducts()},handleFileChange:function(t){this.images=t.target.files}}},o=a(0),n=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{margin:"100px auto"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(t._s("new"==t.product_form_type?"Add Product":"Edit Product"))])]),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Title")]),t._v(" "),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g Blade",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),t.categories&&t.categories.length?a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Category")]),t._v(" "),a("div",{staticClass:"control is-fullwidth"},[a("div",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.category=e.target.multiple?a:a[0]}}},t._l(t.categories,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}),0)])])]):a("div",{staticClass:"field has-text-danger"},[a("p",{staticClass:"help"},[t._v("Please add category before product.")])]),t._v(" "),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Images")]),t._v(" "),a("div",{staticClass:"file has-name is-fullwidth"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function(e){return t.handleFileChange(e)}}}),t._v(" "),t._m(0)])]),t._v(" "),"edit"==t.product_form_type?a("div",{staticClass:"help"},[t._v("This will add images to product and won't delete previous ones.")]):t._e()]),t._v(" "),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Description")]),t._v(" "),a("ckeditor",{staticStyle:{"min-height":"400px"},attrs:{editor:t.editor},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("div",{staticClass:"field"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.featured,expression:"featured"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.featured)?t._i(t.featured,null)>-1:t.featured},on:{change:function(e){var a=t.featured,r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=t._i(a,null);r.checked?i<0&&(t.featured=a.concat([null])):i>-1&&(t.featured=a.slice(0,i).concat(a.slice(i+1)))}else t.featured=s}}}),t._v("\n                                    Set as featured\n                                ")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product_id,expression:"product_id"}],attrs:{type:"hidden"},domProps:{value:t.product_id},on:{input:function(e){e.target.composing||(t.product_id=e.target.value)}}}),t._v(" "),t.formErrors&&t.formErrors.length?a("div",{staticClass:"field has-text-danger"},t._l(t.formErrors,function(e,r){return a("p",{key:r,staticClass:"help"},[t._v(t._s(e))])}),0):t._e()])])]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"card-footer-item"},[a("button",{staticClass:"button is-fullwidth",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitProductForm(e)}}},[t._v("Save")])])])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"card"},[t._m(1),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content",staticStyle:{"overflow-x":"auto"}},[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",t._l(t.products,function(e,r){return a("tr",{key:e.id},[a("td",[t._v(t._s(++r))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.featured?"Featured":"Not Featured"))]),t._v(" "),a("td",[t._v("@"),a("router-link",{attrs:{to:{name:"category",params:{id:e.category.id}}}},[t._v(t._s(e.category.name))])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"product",params:{id:e.id}}}},[t._v("View")])],1),t._v(" "),a("td",[t.$route.query.page?a("router-link",{attrs:{to:{name:"manage-products",query:{id:e.id,page:t.$route.query.page}}}},[t._v("Edit")]):a("router-link",{attrs:{to:{name:"manage-products",query:{id:e.id}}}},[t._v("Edit")])],1),t._v(" "),a("td",[a("a",{on:{click:function(a){return a.preventDefault(),t.deleteProduct(a,e.id)}}},[t._v("Delete")])]),t._v(" "),e.featured?a("td",[a("a",{on:{click:function(a){return a.preventDefault(),t.makeProductUnFeatured(a,e.id)}}},[t._v("Remove Featured")])]):a("td",[a("a",{on:{click:function(a){return a.preventDefault(),t.makeProductFeatured(a,e.id)}}},[t._v("Make Featured")])])])}),0)])])]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"card-footer-item"},[t.products&&t.paginator?a("nav",{staticClass:"pagination is-rounded",attrs:{role:"navigation"}},[a("router-link",{staticClass:"pagination-previous",class:{disabled:t.paginator.current_page<=1},attrs:{to:{name:"manage-products",query:{page:t.paginator.current_page-1}}}},[t._v("Previous")]),t._v(" "),a("router-link",{staticClass:"pagination-next",class:{disabled:t.paginator.current_page>=t.paginator.last_page},attrs:{to:{name:"manage-products",query:{page:t.paginator.current_page+1}}}},[t._v("Next page")]),t._v(" "),a("ul",{staticClass:"pagination-list"},t._l(t.paginator.last_page,function(e){return a("li",{key:e},[a("router-link",{staticClass:"pagination-link",class:{disabled:e==t.paginator.current_page},attrs:{to:{name:"manage-products",query:{page:e}}}},[t._v("\n                                        "+t._s(e)+"\n                                    ")])],1)}),0)],1):t._e()])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fas fa-upload"})]),this._v(" "),e("span",{staticClass:"file-label"},[this._v("\n                                            Choose a file…\n                                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("Products")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Title")]),t._v(" "),a("th",[t._v("Featured")]),t._v(" "),a("th",[t._v("Category")]),t._v(" "),a("th",{attrs:{colspan:"4"}},[t._v("Actions")])])])}],!1,null,null,null);e.default=n.exports}}]);