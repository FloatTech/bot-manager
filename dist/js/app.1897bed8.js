(function(e){function t(t){for(var a,l,r=t[0],u=t[1],i=t[2],b=0,d=[];b<r.length;b++)l=r[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},c=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0017":function(module,__webpack_exports__,__webpack_require__){"use strict";var _http_websocket1__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("41d4"),_http_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("f96b");__webpack_exports__["a"]={name:"msg",data:function(){return{ws:{},messages:[]}},created:function created(){var _this=this;this.messages=window.msgs;var ws=new _http_websocket1__WEBPACK_IMPORTED_MODULE_0__["a"](_http_api__WEBPACK_IMPORTED_MODULE_1__["a"].wsUrl+_http_api__WEBPACK_IMPORTED_MODULE_1__["a"].MsgData.index);this.ws=ws,ws.onOpen((function(e){console.log(e),console.log("ws连接已打开")})),ws.onMessage((function(event){var myDate=new Date,result=eval("("+event.data+")");console.log(result),result.time=myDate.toLocaleString(),console.log(result),_this.messages.unshift(result)})),ws.onClose((function(){console.log("ws连接已关闭")})),ws.onError((function(e){console.log("ws出现错误"+e)}))}}},"41d4":function(e,t,n){"use strict";var a=n("d4ec"),o=n("bee2"),c=function(){function e(t){Object(a["a"])(this,e),this.socket=new WebSocket(t)}return Object(o["a"])(e,[{key:"onMessage",value:function(e){this.socket.onmessage=e}},{key:"onOpen",value:function(e){this.socket.onopen=e}},{key:"onError",value:function(e){this.socket.onerror=e}},{key:"onClose",value:function(e){this.socket.onclose=e}},{key:"send",value:function(e){this.socket.send(JSON.stringify(e))}}]),e}();t["a"]=c},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=(n("9911"),{style:{height:"6%"},class:"label_style bor"}),c=Object(a["p"])(" 消息处理 "),l=Object(a["p"])(" 请求事件 "),r=Object(a["p"])(" 元事件 "),u=Object(a["p"])(" 插件管理 "),i=Object(a["p"])(" 日志中心 "),s=Object(a["p"])(" 配置管理 "),b=Object(a["p"])("意见反馈");function d(e,t,n,d,f,O){var p=Object(a["P"])("el-menu-item"),j=Object(a["P"])("el-menu"),_=Object(a["P"])("el-aside"),g=Object(a["P"])("el-link"),h=Object(a["P"])("el-header"),m=Object(a["P"])("router-view"),v=Object(a["P"])("el-main"),y=Object(a["P"])("foot"),w=Object(a["P"])("el-footer"),q=Object(a["P"])("el-container");return Object(a["I"])(),Object(a["k"])(q,{style:Object(a["z"])(f.container_style)},{default:Object(a["eb"])((function(){return[Object(a["q"])(_,{style:Object(a["z"])(f.aside_width)},{default:Object(a["eb"])((function(){return[Object(a["n"])("div",o,Object(a["T"])(f.label),1),Object(a["q"])(j,{router:"router",class:"el-menu-demo","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:Object(a["eb"])((function(){return[Object(a["q"])(p,{index:"msg"},{default:Object(a["eb"])((function(){return[c]})),_:1}),Object(a["q"])(p,{index:"requests"},{default:Object(a["eb"])((function(){return[l]})),_:1}),Object(a["q"])(p,{index:"meta"},{default:Object(a["eb"])((function(){return[r]})),_:1})]})),_:1})]})),_:1},8,["style"]),Object(a["q"])(q,{style:{padding:"0"}},{default:Object(a["eb"])((function(){return[Object(a["q"])(h,{style:Object(a["z"])(f.header_height)},{default:Object(a["eb"])((function(){return[Object(a["q"])(j,{router:"router",class:"el-menu-demo",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:Object(a["eb"])((function(){return[Object(a["q"])(p,{index:"plugin"},{default:Object(a["eb"])((function(){return[u]})),_:1}),Object(a["q"])(p,{index:"log"},{default:Object(a["eb"])((function(){return[i]})),_:1}),Object(a["q"])(p,{index:"config"},{default:Object(a["eb"])((function(){return[s]})),_:1}),Object(a["q"])(p,{index:"suggest"},{default:Object(a["eb"])((function(){return[Object(a["q"])(g,{type:"info",href:f.link},{default:Object(a["eb"])((function(){return[b]})),_:1},8,["href"])]})),_:1})]})),_:1})]})),_:1},8,["style"]),Object(a["q"])(v,null,{default:Object(a["eb"])((function(){return[Object(a["q"])(m)]})),_:1}),Object(a["q"])(w,{class:"bor"},{default:Object(a["eb"])((function(){return[Object(a["q"])(y)]})),_:1})]})),_:1})]})),_:1},8,["style"])}n("b0c0");var f={style:{width:"100%",height:"100%","padding-top":"10px"}},O={style:{float:"left"}},p={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},j=Object(a["p"])("发送");function _(e,t,n,o,c,l){var r=Object(a["P"])("el-option"),u=Object(a["P"])("el-select"),i=Object(a["P"])("el-col"),s=Object(a["P"])("el-input"),b=Object(a["P"])("el-button"),d=Object(a["P"])("el-row");return Object(a["I"])(),Object(a["m"])("div",f,[Object(a["q"])(d,null,{default:Object(a["eb"])((function(){return[Object(a["q"])(i,{span:5},{default:Object(a["eb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(u,{modelValue:c.selfId,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.selfId=e}),placeholder:"请选择bot",onChange:l.data_changed},{default:Object(a["eb"])((function(){return[(Object(a["I"])(!0),Object(a["m"])(a["b"],null,Object(a["N"])(c.selfIdOptions,(function(e){return Object(a["I"])(),Object(a["k"])(r,{value:e,key:e,label:e},null,8,["value","label"])})),128))]})),_:1},8,["modelValue","onChange"])])]})),_:1}),Object(a["q"])(i,{span:5},{default:Object(a["eb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(u,{modelValue:c.msgType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.msgType=e}),placeholder:"请选择消息类型",onChange:l.data_changed},{default:Object(a["eb"])((function(){return[(Object(a["I"])(!0),Object(a["m"])(a["b"],null,Object(a["N"])(c.msgTypes,(function(e){return Object(a["I"])(),Object(a["k"])(r,{value:e.value,key:e.key,label:e.key},null,8,["value","label"])})),128))]})),_:1},8,["modelValue","onChange"])])]})),_:1}),Object(a["q"])(i,{span:5},{default:Object(a["eb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(u,{modelValue:c.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.id=e}),placeholder:"请选择发送对象"},{default:Object(a["eb"])((function(){return[(Object(a["I"])(!0),Object(a["m"])(a["b"],null,Object(a["N"])(c.list,(function(e){return Object(a["I"])(),Object(a["k"])(r,{value:e.id,key:e.name,label:e.name},{default:Object(a["eb"])((function(){return[Object(a["n"])("span",O,Object(a["T"])(e.nick_name),1),Object(a["n"])("span",p,Object(a["T"])(e.id),1)]})),_:2},1032,["value","label"])})),128))]})),_:1},8,["modelValue"])])]})),_:1}),Object(a["q"])(i,{span:7},{default:Object(a["eb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(s,{modelValue:c.msg,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.msg=e})},null,8,["modelValue"])])]})),_:1}),Object(a["q"])(i,{span:2},{default:Object(a["eb"])((function(){return[Object(a["n"])("div",null,[Object(a["q"])(b,{onClick:l.send_msg,type:"success"},{default:Object(a["eb"])((function(){return[j]})),_:1},8,["onClick"])])]})),_:1})]})),_:1})])}var g=n("b85c"),h=n("2909"),m=n("f96b"),v=n("bc3a"),y=n.n(v),w={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return y.a.get(e,{headers:t,params:n})},post:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return y.a.post(e,t,{headers:n})},uploader:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=new FormData;return a.append("file",t),n?y.a.post(e,a,{headers:{Authorization:"Your back-end user authenticates information"}}):y.a.post(e,a)}},q={name:"Foot",data:function(){return{msgTypes:[{value:"private",key:"私聊"},{value:"group",key:"群聊"}],list:[],selfIdOptions:[],selfId:"",msgType:"group",id:0,msg:""}},created:function(){var e=this;w.post(m["a"].baseAPi+m["a"].Config.index).then((function(t){var n;(n=e.selfIdOptions).push.apply(n,Object(h["a"])(t.data)),t.data.length>0&&(e.selfId=t.data[0],y.a.post(m["a"].baseAPi+m["a"].GroupList.index,{self_id:e.selfId},{}).then((function(t){var n,a=Object(g["a"])(t.data);try{for(a.s();!(n=a.n()).done;){var o=n.value;console.log(o),e.list.push({id:o.group_id,name:o.group_name,nick_name:o.group_name})}}catch(c){a.e(c)}finally{a.f()}e.id=t.data[0].group_id})))})).catch((function(e){console.log("请求api错误"+e)}))},methods:{data_changed:function(){var e=this;this.list=[],""!==this.selfId&&("group"===this.msgType?y.a.post(m["a"].baseAPi+m["a"].GroupList.index,{self_id:this.selfId},{}).then((function(t){var n,a=Object(g["a"])(t.data);try{for(a.s();!(n=a.n()).done;){var o=n.value;console.log(o),e.list.push({id:o.group_id,name:o.group_name,nick_name:o.group_name})}}catch(c){a.e(c)}finally{a.f()}e.id=t.data[0].group_id})):"private"===this.msgType&&w.post(m["a"].baseAPi+m["a"].FriendList.index,{self_id:this.selfId}).then((function(t){var n,a=Object(g["a"])(t.data);try{for(a.s();!(n=a.n()).done;){var o=n.value;console.log(o),e.list.push({id:o.user_id,name:o.nick_name,nick_name:o.remark})}}catch(c){a.e(c)}finally{a.f()}e.id=t.data[0].user_id})))},send_msg:function(){if(0!==this.id&&""!==this.msg){var e={self_id:this.selfId,message_type:this.msgType,id:this.id,message:this.msg};y.a.post(m["a"].baseAPi+m["a"].SendMsg.index,e).then((function(e){200===e.status&&console.log("发送成功")})).catch((function(e){console.log(e)}))}}}};q.render=_;var k=q,P={components:{Foot:k},data:function(){return{label:"leafBot",container_style:{margin:"0 auto",height:"100%"},header_height:{padding:0,backgroundColor:"#545c64",height:"6%"},aside_width:{backgroundColor:"#545c64",padding:0,width:"12%"},link:""}},computed:{},created:function(){var e=this;window.msgs=[],y.a.get(m["a"].baseAPi+m["a"].GetLabel.index).then((function(t){e.label=t.data,"ZeroBot-Plugin"===t.data?e.link="https://github.com/FloatTech/ZeroBot-Plugin/issues":e.link="https://github.com/huoxue1/leafBot/issues"})).catch((function(e){console.log("获取标签失败"+e)}))}};n("b77e");P.render=d;var x=P,I=n("6c02");function T(e,t,n,o,c,l){var r=Object(a["P"])("el-form-item"),u=Object(a["P"])("el-form"),i=Object(a["P"])("el-table-column"),s=Object(a["P"])("el-table");return Object(a["I"])(),Object(a["m"])("div",null,[Object(a["q"])(s,{data:c.messages,style:{width:"100%"}},{default:Object(a["eb"])((function(){return[Object(a["q"])(i,{type:"expand"},{default:Object(a["eb"])((function(e){return[Object(a["q"])(u,{"label-position":"left",inline:"",class:"demo-table-expand"},{default:Object(a["eb"])((function(){return[Object(a["q"])(r,{label:"消息id"},{default:Object(a["eb"])((function(){return[Object(a["n"])("span",null,Object(a["T"])(e.row.message_id),1)]})),_:2},1024),Object(a["q"])(r,{label:"群昵称"},{default:Object(a["eb"])((function(){return[Object(a["n"])("span",null,Object(a["T"])(e.row.sender.nick_name),1)]})),_:2},1024),Object(a["q"])(r,{label:"消息数组"},{default:Object(a["eb"])((function(){return[Object(a["n"])("span",null,Object(a["T"])(JSON.stringify(e.row.message)),1)]})),_:2},1024)]})),_:2},1024)]})),_:1}),Object(a["q"])(i,{label:"时间",prop:"time"}),Object(a["q"])(i,{label:"消息类型",prop:"message_type"}),Object(a["q"])(i,{label:"群号",prop:"group_id"}),Object(a["q"])(i,{label:"账号",prop:"user_id"}),Object(a["q"])(i,{label:"消息内容",prop:"raw_message"})]})),_:1},8,["data"])])}var C=n("0017");n("944f");C["a"].render=T,C["a"].__scopeId="data-v-a3921cb8";var E=C["a"];function M(e,t,n,o,c,l){return Object(a["I"])(),Object(a["m"])("div",null,"123")}var A={name:"show_log"};A.render=M;var D=A;function V(e,t,n,o,c,l){return Object(a["I"])(),Object(a["m"])("div",null,"meta")}var L={name:"meta"};L.render=V;var U=L;function S(e,t,n,o,c,l){return Object(a["I"])(),Object(a["m"])("div",null,"req")}var B={name:"requests"};B.render=S;var G=B;function N(e,t,n,o,c,l){var r=Object(a["P"])("el-table-column"),u=Object(a["P"])("el-switch"),i=Object(a["P"])("el-table");return Object(a["I"])(),Object(a["m"])("div",null,[Object(a["q"])(i,{data:c.plugins,style:{width:"100%"}},{default:Object(a["eb"])((function(){return[Object(a["q"])(r,{label:"插件id",prop:"ID"}),Object(a["q"])(r,{label:"插件名",prop:"Name"}),Object(a["q"])(r,{label:"插件类型",prop:"HandleType"}),Object(a["q"])(r,{label:"是否启用"},{default:Object(a["eb"])((function(e){return[Object(a["q"])(u,{disabled:"",modelValue:e.row.Enable,"onUpdate:modelValue":function(t){return e.row.Enable=t},onChange:function(t){return l.plugin_status(e.row.Name,e.row.Enable)},"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue","onUpdate:modelValue","onChange"])]})),_:1})]})),_:1},8,["data"])])}var z={name:"plugin",data:function(){return{plugins:[]}},created:function(){var e=this;y.a.post(m["a"].baseAPi+m["a"].GetHandles.index).then((function(t){console.log(t.data),e.plugins=t.data})).catch((function(e){console.log(e)}))},methods:{plugin_status:function(e,t){console.log(e,t)}}};z.render=N;var F=z;function W(e,t,n,o,c,l){return Object(a["I"])(),Object(a["m"])("div",null," config ")}var K={name:"config",data:function(){return{data:{}}},created:function(){var e=this;y.a.post(m["a"].baseAPi+m["a"].AllConfig.index).then((function(t){console.log(t.data),e.data=t.data})).catch((function(e){console.log(e)}))}};K.render=W;var R=K,J=[{path:"/msg",name:"msg",component:E},{path:"/log",name:"show_log",component:D},{path:"/meta",name:"meta",component:U},{path:"/requests",name:"requests",component:G},{path:"/plugin",name:"plugin",component:F},{path:"/config",name:"config",component:R}],H=Object(I["a"])({history:Object(I["b"])("/dist/dist/"),routes:J}),Z=H,Y=n("7864"),Q=(n("c69f"),n("3ef0")),X=n.n(Q),$=function(e){e.use(Y["a"],{locale:X.a})},ee=Object(a["j"])(x).use(Z);$(ee),ee.use(Z).mount("#app")},9114:function(e,t,n){},"944f":function(e,t,n){"use strict";n("fa93")},b77e:function(e,t,n){"use strict";n("9114")},c69f:function(e,t,n){},f96b:function(e,t,n){"use strict";t["a"]={baseAPi:"http://127.0.0.1:3000",wsUrl:"ws://127.0.0.1:3000",Config:{index:"/get_bots"},FriendList:{index:"/get_friend_list"},GroupList:{index:"/get_group_list"},MsgData:{index:"/data"},AllConfig:{index:"/get_all_config"},GetHandles:{index:"/get_plugins"},GetLabel:{index:"/get_label"},SendMsg:{index:"/send_msg"},ChangePluginStatus:{}}},fa93:function(e,t,n){}});
//# sourceMappingURL=app.1897bed8.js.map