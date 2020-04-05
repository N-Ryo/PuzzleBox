(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{365:function(t,e,o){"use strict";o(15);var n=o(85),r=o.n(n),c=o(84),l={props:["value","post"],data:function(){return{body:""}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},mounted:function(){this.body=this.post.body},methods:{updatePost:function(){var t=this;if(this.body.length>0&&this.post.body!==this.body){var e=new FormData;e.append("post[body]",this.body),e.append("post[user_id]",parseInt(this.$route.params.id)),r.a.patch("".concat(c.a,"/posts/").concat(this.post.id,".json"),e).then((function(e){"success"===e.data.message&&(t.$emit("reload"),t.dialog=!1)}))}}}},d=o(55),v=o(102),f=o.n(v),h=o(362),m=o(152),_=o(66),y=o(352),V=o(363),x=o(360),w=o(153),k=o(356),C=o(357),P=o(358),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:""}},n),[o("v-icon",{attrs:{color:"cyan"}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("編集")])]),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",{attrs:{"justify-center":""}},[o("v-col",[o("v-textarea",{attrs:{outlined:"",label:"Default style"},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"cyan",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("cancel")]),t._v(" "),o("v-btn",{attrs:{color:"cyan",text:"",disabled:0===t.body.length||t.post.body===t.body},on:{click:t.updatePost}},[t._v("Update")])],1)],1)],1)}),[],!1,null,null,null),$=component.exports;f()(component,{VBtn:h.a,VCard:m.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCol:y.a,VContainer:V.a,VDialog:x.a,VIcon:w.a,VRow:k.a,VSpacer:C.a,VTextarea:P.a});var I={props:["value","postId"],data:function(){return{message:"Are you sure?",title:"Delete",options:{color:"error",width:290}}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{agree:function(){var t=this;r.a.delete("".concat(c.a,"/posts/").concat(this.postId,".json")).then((function(e){"success"===e.data.message&&(t.$emit("reload"),t.dialog=!1)}))}}},S=o(41),T=o(161),j=Object(d.a)(I,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":t.options.width},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{icon:"",color:"error"}},n),[o("v-icon",[t._v("mdi-delete")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:""}},[o("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.title))])],1),t._v(" "),o("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}]},[t._v(t._s(t.message))]),t._v(" "),o("v-card-actions",{staticClass:"pt-0"},[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"primary darken-1"},nativeOn:{click:function(e){return t.agree(e)}}},[t._v("Yes")]),t._v(" "),o("v-btn",{attrs:{color:"grey"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)}),[],!1,null,null,null),M=j.exports;f()(j,{VBtn:h.a,VCard:m.a,VCardActions:_.a,VCardText:_.c,VDialog:x.a,VIcon:w.a,VSpacer:C.a,VToolbar:S.a,VToolbarTitle:T.a});var O={components:{EditModal:$,DeleteModal:M},props:["post"],data:function(){return{editModal:!1,deleteModal:!1}}},E=o(154),D=Object(d.a)(O,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list-item-action",[o("edit-modal",{attrs:{post:t.post},on:{reload:function(e){return t.$emit("reload")}},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}}),t._v(" "),o("delete-modal",{attrs:{postId:t.post.id},on:{reload:function(e){return t.$emit("reload")}},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}})],1)}),[],!1,null,null,null),L=D.exports;f()(D,{VListItemAction:E.a});var A={components:{PostActions:L},props:{post:{type:Object,default:function(){return{body:""}}},index:{type:Number,default:0},isTopPage:{type:Boolean,default:!0},isPostShowPage:{type:Boolean,default:!1}},methods:{accessPostShow:function(t){this.isPostShowPage||this.$router.push({path:"/posts/".concat(t),prefetch:!0})}}},B=o(155),U=o(96),J=o(133),N=Object(d.a)(A,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[0!==t.index?o("v-divider"):t._e(),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",[o("span",{class:t.isPostShowPage?"":"link",on:{click:function(e){return t.accessPostShow(t.post.id)}}},[t._v(t._s(t.post.body))])])],1),t._v(" "),t.isTopPage?t._e():o("post-actions",{attrs:{post:t.post},on:{reload:function(e){return t.$emit("reload")}}})],1)],1)}),[],!1,null,null,null);e.a=N.exports;f()(N,{VDivider:B.a,VListItem:U.a,VListItemContent:J.a,VListItemTitle:J.b})},373:function(t,e,o){"use strict";o.r(e);var n=o(85),r=o.n(n),c=o(84),l={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},components:{PostList:o(365).a},data:function(){return{postId:0,user:void 0,post:void 0}},mounted:function(){var t=this;this.postId=this.$route.params.id,r.a.get("".concat(c.a,"/posts/").concat(this.postId,".json")).then((function(e){t.user=e.data.user,t.post=e.data.post}))},methods:{accessUserShow:function(t){this.$router.push({path:"/users/".concat(t),prefetch:!0})}}},d=o(55),v=o(102),f=o.n(v),h=o(152),m=o(66),_=o(352),y=o(363),V=o(156),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{"max-width":"80vw"}},[o("v-col",{attrs:{"justify-center":""}},[o("v-card",[t.user?o("v-card-subtitle",[o("span",{staticClass:"link",on:{click:function(e){return t.accessUserShow(t.user.id)}}},[t._v(t._s(t.user.name))])]):t._e(),t._v(" "),t.post?o("v-card-text",[o("v-list",{staticClass:"list"},[o("post-list",{attrs:{post:t.post,index:0,isTopPage:!1,isPostShowPage:!0}})],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:h.a,VCardSubtitle:m.b,VCardText:m.c,VCol:_.a,VContainer:y.a,VList:V.a})}}]);