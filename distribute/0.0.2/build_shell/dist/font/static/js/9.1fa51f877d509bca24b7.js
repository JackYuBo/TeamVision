webpackJsonp([9],{XVa1:function(t,e){},lIxK:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Dd8w"),a=o.n(r),i=(o("IcnI"),o("NYxO")),s={PBTitle:[{type:"string",min:1,max:50,required:!0,message:"标题长度必须在1-50个字符！！"}],PBKey:[{type:"string",required:!0,min:1,max:10,pattern:/^[A-Z]+$/,message:"Key必须是10个以内的大写英文字符！",trigger:"blur"}],PBPlatform:[{type:"integer",required:!0,message:"请选择项目平台"}],PBLead:[{type:"integer",required:!0,message:"请选择项目负责人"}],Product:[{type:"integer",required:!0,message:"请选择产品线"}]},c=o("h/Zt"),l={name:"ProjectCreateDialog",data:function(){return{userList:[],platforms:[],products:[],formItem:{PBTitle:"",PBKey:"",PBLead:1,PBPlatform:1,Product:1,PBVisiableLevel:1,PBCreator:0},ruleCustom:a()({},s)}},computed:a()({},Object(i.c)("project",["projectCreateDialogShow"])),methods:a()({},Object(i.d)("project",["setProjectCreateDialogShow","setProjectAdded"]),{addProject:function(t){var e=this;this.$refs[t].validate(function(t){t&&e.$axios.post("/api/project/list",e.formItem).then(function(t){e.setProjectCreateDialogShow(!1),e.setProjectAdded(!0)},function(t){e.setProjectCreateDialogShow(!1),e.$Message.error({content:"创建项目失败，请联系管理员或者重试",duration:10})})})},cancel:function(){this.setProjectCreateDialogShow(!1)}}),created:function(){var t=this;this.$axios.get("/api/common/dicconfig/5/dicconfigs").then(function(e){t.platforms=e.data.result},function(t){}),this.$axios.get("/api/common/users/list").then(function(e){t.userList=e.data.result},function(t){}),this.$axios.get("/api/project/products").then(function(e){t.products=e.data.result},function(t){})},mounted:function(){},watch:{},components:{FormItem:c.a}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{attrs:{value:t.projectCreateDialogShow,title:"添加新项目",width:600,styles:{bottom:"20px",top:"50px"}},on:{"on-ok":t.addProject,"on-cancel":t.cancel}},[o("div",{staticStyle:{height:"600px","overflow-y":"scroll","overflow-x":"hidden"}},[o("Form",{ref:"projectCreate",attrs:{model:t.formItem,"label-width":80,rules:t.ruleCustom}},[o("FormItem",{attrs:{label:"项目名称",prop:"PBTitle"}},[o("Input",{attrs:{placeholder:"项目名称1-50个字符"},model:{value:t.formItem.PBTitle,callback:function(e){t.$set(t.formItem,"PBTitle",e)},expression:"formItem.PBTitle"}})],1),t._v(" "),o("FormItem",{attrs:{label:"项目Key",prop:"PBKey"}},[o("Input",{attrs:{placeholder:"项目唯一标示，1-10英文字符"},model:{value:t.formItem.PBKey,callback:function(e){t.$set(t.formItem,"PBKey",e)},expression:"formItem.PBKey"}})],1),t._v(" "),o("FormItem",{attrs:{label:"平台",prop:"PBPlatform"}},[o("Select",{attrs:{filterable:!0,placeholder:"项目平台"},model:{value:t.formItem.PBPlatform,callback:function(e){t.$set(t.formItem,"PBPlatform",e)},expression:"formItem.PBPlatform"}},t._l(t.platforms,function(e){return o("Option",{key:e.id,attrs:{value:e.DicDataValue}},[t._v(t._s(e.DicDataName))])}))],1),t._v(" "),o("FormItem",{attrs:{label:"负责人",prop:"PBLead"}},[o("Select",{attrs:{filterable:!0,placeholder:"项目负责人"},model:{value:t.formItem.PBLead,callback:function(e){t.$set(t.formItem,"PBLead",e)},expression:"formItem.PBLead"}},t._l(t.userList,function(e){return o("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.last_name)+t._s(e.first_name)+" ("+t._s(e.email)+")")])}))],1),t._v(" "),o("FormItem",{attrs:{label:"产品线",prop:"Product"}},[o("Select",{attrs:{filterable:!0,placeholder:"任务类型"},model:{value:t.formItem.Product,callback:function(e){t.$set(t.formItem,"Product",e)},expression:"formItem.Product"}},t._l(t.products,function(e){return o("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.PTitle))])}))],1),t._v(" "),o("FormItem",{attrs:{label:"可见性",prop:"PBVisiableLevel"}},[o("Row",[o("Col",{attrs:{span:"8",offset:"0"}},[o("RadioGroup",{attrs:{vertical:""},model:{value:t.formItem.PBVisiableLevel,callback:function(e){t.$set(t.formItem,"PBVisiableLevel",e)},expression:"formItem.PBVisiableLevel"}},[o("Radio",{attrs:{label:1}},[o("Icon",{attrs:{type:"locked",size:20}}),t._v(" "),o("span",[t._v("私有")]),t._v(" "),o("span",{staticStyle:{color:"#737373","padding-left":"20px"}},[t._v("项目仅自己可见")])],1),t._v(" "),o("Radio",{attrs:{label:2}},[o("Icon",{attrs:{type:"contrast",size:20}}),t._v(" "),o("span",[t._v("内部")]),t._v(" "),o("span",{staticStyle:{color:"#737373","padding-left":"20px"}},[t._v("项目可以被同组成员看到")])],1),t._v(" "),o("Radio",{attrs:{label:3}},[o("Icon",{attrs:{type:"ios-world",size:20}}),t._v(" "),o("span",[t._v("公开")]),t._v(" "),o("span",{staticStyle:{color:"#737373","padding-left":"20px"}},[t._v("项目对所有人员可见")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[t.projectCreateDialogShow?o("Button",{staticStyle:{width:"80px",height:"30px"},attrs:{type:"success",shape:"circle"},on:{click:function(e){t.addProject("projectCreate")}}},[t._v("添加")]):t._e()],1)])},staticRenderFns:[]};var d=o("VU/8")(l,n,!1,function(t){o("XVa1")},"data-v-3f194a2b",null).exports,p={name:"projectList",data:function(){return{myProject:[]}},computed:a()({},Object(i.c)(["appBodyHeight"]),Object(i.c)("project",["projectSearchKey","projectAdded"]),{projectContainerHeight:function(){return this.appBodyHeight-20},myProjectList:function(){return""===this.projectSearchKey?this.initProjectDisplayStatus():this.filterProjectList(this.projectSearchKey),this.projectAdded&&(this.loadProjectList(),this.setProjectAdded(!1)),this.myProject}}),methods:a()({},Object(i.d)("project",["setProjectAdded"]),{filterProjectList:function(t){this.initProjectDisplayStatus();for(var e=0;e<this.myProject.length;e++){var o=this.myProject[e];o.PBTitle.toUpperCase().indexOf(t.toUpperCase())<0&&(o.Display=!1)}},initProjectDisplayStatus:function(){for(var t=0;t<this.myProject.length;t++)this.myProject[t].Display=!0},loadProjectList:function(){var t=this;this.$axios.get("/api/project/list?extinfo=0&my=1").then(function(e){t.myProject=e.data.result},function(e){t.setTaskChange(!0)})}}),created:function(){this.loadProjectList()},components:{ProjectCreateDialog:d}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout-content portal-list-container",style:"height:"+t.projectContainerHeight+"px; overflow-y: scroll"},[t._l(t.myProjectList,function(e){return e.Display?o("Card",{key:e.id,staticStyle:{width:"230px",height:"180px",float:"left",margin:"20px"},attrs:{bordered:!1}},[o("div",{staticStyle:{"text-align":"center",height:"110px"}},[o("a",{attrs:{href:"/project/"+e.id+"/issue/all"}},[o("img",{staticClass:"project_icon",attrs:{src:""+e.PBAvatar}})])]),t._v(" "),o("div",[o("div",{staticStyle:{"padding-top":"10px",color:"#333","text-align":"center"}},[t._v(t._s(e.PBTitle))])])]):t._e()}),t._v(" "),o("project-create-dialog")],2)},staticRenderFns:[]};var u=o("VU/8")(p,m,!1,function(t){o("ug+l")},"data-v-83c89bf4",null);e.default=u.exports},"ug+l":function(t,e){}});
//# sourceMappingURL=9.1fa51f877d509bca24b7.js.map