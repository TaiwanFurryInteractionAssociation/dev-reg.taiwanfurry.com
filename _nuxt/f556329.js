(window.webpackJsonp=window.webpackJsonp||[]).push([[28,3,4,12,14],{366:function(e,t,n){"use strict";n.r(t);var r=n(133),o=n.n(r),l={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},c=n(30),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(366).default})},367:function(e,t,n){"use strict";var r=n(14),o=n(7),l=n(5),c=n(106),d=n(26),f=n(15),m=n(167),v=n(65),_=n(105),h=n(236),y=n(4),x=n(86).f,I=n(60).f,w=n(22).f,k=n(368),C=n(369).trim,N="Number",$=o.Number,O=$.prototype,R=o.TypeError,E=l("".slice),D=l("".charCodeAt),j=function(e){var t=h(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,n,r,o,l,c,d,code,f=h(e,"number");if(_(f))throw R("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(t=D(f,0))||45===t){if(88===(n=D(f,2))||120===n)return NaN}else if(48===t){switch(D(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=E(f,2)).length,d=0;d<c;d++)if((code=D(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(N,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var P,T=function(e){var t=arguments.length<1?0:$(j(e)),n=this;return v(O,n)&&y((function(){k(n)}))?m(Object(t),n,T):t},L=r?x($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;L.length>z;z++)f($,P=L[z])&&!f(T,P)&&w(T,P,I($,P));T.prototype=O,O.constructor=T,d(o,N,T,{constructor:!0})}},368:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},369:function(e,t,n){var r=n(5),o=n(43),l=n(17),c=n(370),d=r("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),_=function(e){return function(t){var n=l(o(t));return 1&e&&(n=d(n,m,"")),2&e&&(n=d(n,v,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},370:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},371:function(e,t,n){"use strict";n.r(t);n(367);var r=n(133),o=n.n(r),l={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{type:String,default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},c=n(30),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},372:function(e,t,n){"use strict";n.r(t);n(31),n(20),n(38),n(11),n(45),n(34),n(46);var r=n(13);n(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c=n(133),d=n.n(c),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:d.a}},computed:{computedErrorStyle:function(){return{color:d.a.negative.background}}}},m=n(30),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,l(l({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},374:function(e,t,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("98ec7986",content,!0,{sourceMap:!1})},377:function(e,t,n){"use strict";n.r(t);var r={props:["attendee"]},o=(n(379),n(30)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.entrance.card.info"))+"\n    ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[t("div",{staticClass:"cardNumberInput"},[e._v("\n            "+e._s(e.attendee.attendee_no)+"\n            "),2==e.attendee.attendee_receive_status?t("div",{staticClass:"font-size:0.9rem mt:4"},[e._v("\n                他人代領\n            ")]):e._e()]),e._v(" "),e.attendee.attendee_card_name_1?t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n            "+e._s(e.attendee.attendee_card_name_1)),t("br"),e._v("\n            "+e._s(e.attendee.attendee_card_name_2)+"\n        ")]):t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n            "+e._s(e.attendee.attendee_nickname)+"\n        ")])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,n){"use strict";n(374)},380:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),e.exports=r},453:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(21),n(1)),l=n(70),c={layout:"admin",components:{AttendeeInfoResume:n(377).default},data:function(){return{loading:!1,searchInput:null,attendee:null,bill:null,attendeeNumber:null,cardID:null,personalInfoFields:["attendee_nickname","attendee_realname","attendee_identification_number","account_email","attendee_telephone"],billItems:["singleDayPass","twoDayPass"]}},mounted:function(){var e=this;this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(t){13==t.keyCode&&e.findAttendee()}))},watch:{bill:function(){if(this.bill&&!this.bill.error){var e=this;o.a.nextTick((function(){e.$refs.attendeeNumber.input.addEventListener("keyup",(function(t){13==t.keyCode&&o.a.nextTick((function(){e.$refs.cardID.input.focus()}))})),e.$refs.cardID.input.addEventListener("keyup",(function(t){13==t.keyCode&&o.a.nextTick((function(){e.$refs.confirmPayment.button.focus()}))}))}))}}},methods:{findAttendee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchInput.length){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.attendee=null,e.bill=null,e.attendeeNumber=null,e.cardID=null,e,t.next=10,e.$axios.get("/api/admin/attendees/search?any=".concat(e.searchInput,"&withPendingAttendees=yes&details=yes")).then((function(t){e.attendee=t.data.attendee,(3==e.attendee.attendee_status||e.attendee.attendee_type&&0==e.attendee.attendee_type)&&e.checkBill()})).catch((function(t){t.response.data?e.attendee={error:t.response.data.code}:l.a.showRequestError(t)}));case 10:e.searchInput=null,e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},checkBill:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.bill=null,n=e,t.next=5,e.$axios.get("/api/admin/attendee/".concat(e.attendee.attendee_id,"/payment/onsite")).then((function(t){e.bill=t.data.bill,3==e.attendee.attendee_status&&o.a.nextTick((function(){n.$refs.attendeeNumber.input.focus()}))})).catch((function(t){t.response.data?e.bill={error:t.response.data.code}:l.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},confirmPayment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定已收取報名費用了嗎？")){t.next=2;break}return t.abrupt("return");case 2:if(!(!e.attendeeNumber||e.attendeeNumber&&0==e.attendeeNumber.length||!e.cardID||e.cardID&&0==e.cardID.length)){t.next=5;break}return alert("請輸入參加者編號及卡片 ID"),t.abrupt("return");case 5:return e.loading=!0,t.next=8,e.$axios.post("/api/admin/attendee/".concat(e.attendee.attendee_id,"/payment/onsite"),{attendeeNumber:e.attendeeNumber,cardID:e.cardID}).then((function(t){alert("已完成現場報名手續"),e.attendee=null,e.bill=null,e.searchInput=null,e.attendeeNumber=null,e.cardID=null,o.a.nextTick((function(){self.$refs.searchInput.input.focus()}))})).catch((function(e){l.a.showRequestError(e)}));case 8:e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},undoPayment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定取消付費的記錄嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.next=5,e.$axios.delete("/api/admin/attendee/".concat(e.attendee.attendee_id,"/payment/onsite")).then((function(t){alert("已消除付款記錄"),e.attendee=null,e.bill=null,e.searchInput=null,o.a.nextTick((function(){self.$refs.searchInput.input.focus()}))})).catch((function(e){l.a.showRequestError(e)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}}},d=n(30),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v(e._s(e.$t("admin.onsiteRegistration.title")))]),e._v(" "),t("Field",{attrs:{field:e.$t("admin.onsiteRegistration.search.title")}},[t("InputText",{ref:"searchInput",attrs:{placeholder:e.$t("admin.onsiteRegistration.search.notes")},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e.attendee?t("div",[e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n        "+e._s(e.$t(e.attendee.error))+"\n      ")]):3!=e.attendee.attendee_status&&e.attendee.attendee_type&&"D"!=e.attendee.attendee_type?t("div",{staticClass:"mt:8"},[e._v("\n        "+e._s(e.$t("admin.onsiteRegistration.goToCheckin"))+"\n      ")]):e._e()]):e._e()],1),e._v(" "),e.attendee&&!e.attendee.error&&("3"==e.attendee.attendee_status||e.attendee.attendee_type&&"D"==e.attendee.attendee_type)?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("admin.onsiteRegistration.personalInfo.title"))+"\n    ")]),e._v(" "),t("div",[t("table",{staticClass:"ml:8"},[t("tbody",e._l(e.personalInfoFields,(function(n){return t("tr",{key:n},[t("td",{staticClass:"pr:8 pt:8"},[e._v(e._s(e.$t("admin.attendees.fields.".concat(n))))]),e._v(" "),t("td",[e._v(e._s(e.attendee[n]))])])})),0)])]),e._v(" "),e.bill?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.onsiteRegistration.bill.title"))+"\n      ")]),e._v(" "),e.bill.error?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n        已完成付款\n      ")]):t("div",{staticClass:"flex align-items:center"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:white mt:8 flex w:fit-content flex-direction:column@<md"},e._l(e.billItems,(function(n){return t("div",{key:n,staticClass:"souvenirItems"},[t("div",{staticClass:"souvenirItemName",class:e.bill[n]?"":"excludeItem"},[e._v(e._s(e.$t("admin.onsiteRegistration.bill.items.".concat(n))))]),e._v(" "),t("div",{staticClass:"souvenirItemValue"},[e._v(e._s(e.bill[n]?e.bill[n]:""))])])})),0),e._v(" "),t("div",{staticClass:"ml:16 font-size:1.6rem"},[e._v(e._s(e.$t("admin.onsiteRegistration.bill.total")+e.bill.total))])])]):e._e(),e._v(" "),e.bill&&!e.bill.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.onsiteRegistration.assignNumber.title"))+"\n      ")]),e._v(" "),t("Field",{attrs:{field:e.$t("admin.cardRegistry.fields.attendee_number")}},[t("InputText",{ref:"attendeeNumber",model:{value:e.attendeeNumber,callback:function(t){e.attendeeNumber=t},expression:"attendeeNumber"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("admin.cardRegistry.fields.card_number")}},[t("InputText",{ref:"cardID",model:{value:e.cardID,callback:function(t){e.cardID=t},expression:"cardID"}})],1)],1):e._e(),e._v(" "),e.attendee&&e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.souvenir.errors.title"))+"\n      ")]),e._v(" "),t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.attendee.error))+"\n        ")])])]):e._e(),e._v(" "),e.attendee?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n        "+e._s(e.$t("admin.checkin.actions.title"))+"\n      ")]),e._v(" "),t("div",{staticClass:"flex mt:8"},[3==e.attendee.attendee_status?t("Button",{ref:"confirmPayment",staticClass:"mr:8",on:{click:e.confirmPayment}},[e._v("\n          完成付款＆報名\n        ")]):e._e(),e._v(" "),3!=e.attendee.attendee_status?t("Button",{ref:"undoPayment",staticClass:"mr:8",attrs:{type:"secondary"},on:{click:e.undoPayment}},[e._v("\n          取消報名記錄\n        ")]):e._e()],1)]):e._e()]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(166).default,InputText:n(371).default,Field:n(372).default,Button:n(366).default})}}]);