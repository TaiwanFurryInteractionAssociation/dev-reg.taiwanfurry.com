(window.webpackJsonp=window.webpackJsonp||[]).push([[27,3,4,12,14],{367:function(e,t,n){"use strict";n.r(t);var r=n(134),c=n.n(r),o={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:c.a[this.type].background,color:c.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},d=n(30),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(367).default})},368:function(e,t,n){"use strict";var r=n(14),c=n(7),o=n(5),d=n(106),l=n(26),f=n(15),m=n(168),v=n(65),_=n(105),h=n(237),y=n(4),k=n(87).f,x=n(60).f,w=n(22).f,I=n(369),$=n(370).trim,O="Number",C=c.Number,T=C.prototype,N=c.TypeError,E=o("".slice),j=o("".charCodeAt),S=function(e){var t=h(e,"number");return"bigint"==typeof t?t:R(t)},R=function(e){var t,n,r,c,o,d,l,code,f=h(e,"number");if(_(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=$(f),43===(t=j(f,0))||45===t){if(88===(n=j(f,2))||120===n)return NaN}else if(48===t){switch(j(f,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+f}for(d=(o=E(f,2)).length,l=0;l<d;l++)if((code=j(o,l))<48||code>c)return NaN;return parseInt(o,r)}return+f};if(d(O,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var z,A=function(e){var t=arguments.length<1?0:C(S(e)),n=this;return v(T,n)&&y((function(){I(n)}))?m(Object(t),n,A):t},L=r?k(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)f(C,z=L[P])&&!f(A,z)&&w(A,z,x(C,z));A.prototype=T,T.constructor=A,l(c,O,A,{constructor:!0})}},369:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},370:function(e,t,n){var r=n(5),c=n(43),o=n(17),d=n(371),l=r("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),_=function(e){return function(t){var n=o(c(t));return 1&e&&(n=l(n,m,"")),2&e&&(n=l(n,v,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},371:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},372:function(e,t,n){"use strict";n.r(t);n(368);var r=n(134),c=n.n(r),o={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{type:String,default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:c.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=n(30),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},373:function(e,t,n){"use strict";n.r(t);n(31),n(20),n(38),n(10),n(45),n(34),n(46);var r=n(13);n(88);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(134),l=n.n(d),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:l.a}},computed:{computedErrorStyle:function(){return{color:l.a.negative.background}}}},m=n(30),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,o(o({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},375:function(e,t,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("a021b05a",content,!0,{sourceMap:!1})},379:function(e,t,n){"use strict";n.r(t);var r={props:["attendee"]},c=(n(382),n(30)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n    "+e._s(e.$t("admin.entrance.card.info"))+"\n  ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[t("div",{staticClass:"cardNumberInput"},[e._v("\n      "+e._s(e.attendee.attendee_no)+"\n      "),2==e.attendee.attendee_receive_status?t("div",{staticClass:"font-size:0.9rem mt:4"},[e._v("\n        他人代領\n      ")]):e._e()]),e._v(" "),e.attendee.attendee_card_name_1?t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_card_name_1)),t("br"),e._v("\n      "+e._s(e.attendee.attendee_card_name_2)+"\n    ")]):t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_nickname)+"\n    ")])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,n){"use strict";n(375)},383:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),e.exports=r},395:function(e,t,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("57c3cf5d",content,!0,{sourceMap:!1})},407:function(e,t,n){"use strict";n(395)},408:function(e,t,n){var r=n(61)(!1);r.push([e.i,"@-moz-document url-prefix(){button:focus{border-width:2px;border-color:#2c7cf6}}",""]),e.exports=r},453:function(e,t,n){"use strict";n.r(t);var r=n(3),c=(n(21),n(49),n(48),n(1)),o=n(71),d=n(379),l=["cafe","dinner"],f={layout:"admin",components:{AttendeeInfoResume:d.default},data:function(){return{loading:!1,entranceType:l.includes(this.$route.query.type)?this.$route.query.type:"cafe",attendee:null,ticket:null,searchInput:null,focusedField:null}},mounted:function(){var e=this;this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(t){13==t.keyCode&&e.findAttendee()}))},watch:{"$route.query":function(){this.$refs.searchInput.input.focus(),this.entranceType=l.includes(this.$route.query.type)?this.$route.query.type:"cafe",this.ticket=null,this.searchInput=null,this.attendee=null}},methods:{findAttendee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchInput.length){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.attendee=null,e.ticket=null,t.next=7,e.$axios.get("/api/admin/attendees/search?attendeeIdOrCardNumber=".concat(e.searchInput)).then((function(t){e.attendee=t.data.attendee,e.checkTicket()})).catch((function(t){t.response.data?e.attendee={error:t.response.data.code}:o.a.showRequestError(t)}));case 7:e.searchInput=null,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},checkTicket:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.ticket=null,n=e,t.next=5,e.$axios.get("/api/admin/attendee/".concat(e.attendee.attendee_id,"/entrance/").concat(e.entranceType)).then((function(t){e.ticket=t.data,c.a.nextTick((function(){n.$refs.useTicket.button.focus()}))})).catch((function(t){t.response.data?e.ticket=t.response.data:o.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},useTicket:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定將參加者標記成已入場嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,n=e,t.next=6,e.$axios.post("/api/admin/attendee/".concat(e.attendee.attendee_id,"/entrance/").concat(e.entranceType)).then((function(t){alert("入場登陸成功"),e.ticket=null,e.attendee=null,e.searchInput=null,c.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(e){o.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},restoreTicket:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定要移除參加者的入場記錄嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,n=e,t.next=6,e.$axios.delete("/api/admin/attendee/".concat(e.attendee.attendee_id,"/entrance/").concat(e.entranceType)).then((function(t){alert("已刪除入場記錄"),e.ticket=null,e.attendee=null,e.searchInput=null,c.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(e){o.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}}},m=(n(407),n(30)),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto"},[t("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"}}),e._v(" "),t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("router-view",{key:e.$route.path}),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v("\n    "+e._s(e.$t("admin.entrance.title")+" ("+e.$t("admin.entrance.".concat(e.entranceType,".name"))+")")+"\n  ")]),e._v(" "),t("Field",{attrs:{field:e.$t("admin.entrance.search.title")}},[t("InputText",{ref:"searchInput",attrs:{placeholder:e.$t("admin.entrance.search.notes")},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e.attendee&&e.attendee.info?t("div",{staticClass:"mt:8"},[e._v("\n      "+e._s(e.$t(e.attendee.info.attendee_card_name_1))+"\n    ")]):e._e(),e._v(" "),e.attendee&&e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s(e.$t(e.attendee.error))+"\n    ")]):e._e()],1),e._v(" "),e.ticket?t("div",[t("AttendeeInfoResume",{attrs:{attendee:e.attendee}}),e._v(" "),t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("admin.entrance.ticket.title"))+"\n    ")]),e._v(" "),e.ticket?t("div",[e.ticket.success?t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.ticket.code))+"\n        ")])]):t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},["admin.entrance.errors.ticket.used"==e.ticket.code?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#fcf2c6 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.ticket.code))+"\n        ")]):t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.ticket.code))+"\n        ")])])]):e._e()],1):e.ticket&&e.ticket.code?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("錯誤")]),e._v(" "),e.ticket?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n      "+e._s(e.$t(e.ticket.code))+"\n    ")]):e._e()]):e._e(),e._v(" "),e.ticket&&(e.ticket.success||"admin.entrance.errors.ticket.used"==e.ticket.code)?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("admin.entrance.ticket.actions"))+"\n    ")]),e._v(" "),t("div",{staticClass:"mt:8 flex"},[e.ticket&&e.ticket.success?t("Button",{ref:"useTicket",on:{click:e.useTicket}},[e._v("\n        "+e._s(e.$t("admin.entrance.ticket.use"))+"\n      ")]):e._e(),e._v(" "),e.ticket&&"admin.entrance.errors.ticket.used"==e.ticket.code?t("Button",{ref:"restoreTicket",attrs:{type:"negative"},on:{click:e.restoreTicket}},[e._v("\n        "+e._s(e.$t("admin.entrance.ticket.restore"))+"\n      ")]):e._e()],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(167).default,InputText:n(372).default,Field:n(373).default,AttendeeInfoResume:n(379).default,Button:n(367).default})}}]);