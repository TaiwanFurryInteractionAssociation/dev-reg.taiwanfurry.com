(window.webpackJsonp=window.webpackJsonp||[]).push([[34,4,12,14,20],{367:function(t,e,r){"use strict";r.r(e);var n=r(134),o=r.n(n),c={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=r(30),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(367).default})},368:function(t,e,r){"use strict";var n=r(14),o=r(7),c=r(5),l=r(106),f=r(26),d=r(15),m=r(168),_=r(65),v=r(105),h=r(237),y=r(4),w=r(87).f,x=r(60).f,O=r(22).f,$=r(369),k=r(370).trim,F="Number",S=o.Number,I=S.prototype,j=o.TypeError,N=c("".slice),E=c("".charCodeAt),C=function(t){var e=h(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,r,n,o,c,l,f,code,d=h(t,"number");if(v(d))throw j("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=k(d),43===(e=E(d,0))||45===e){if(88===(r=E(d,2))||120===r)return NaN}else if(48===e){switch(E(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=N(d,2)).length,f=0;f<l;f++)if((code=E(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(F,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var P,R=function(t){var e=arguments.length<1?0:S(C(t)),r=this;return _(I,r)&&y((function(){$(r)}))?m(Object(e),r,R):e},A=n?w(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;A.length>L;L++)d(S,P=A[L])&&!d(R,P)&&O(R,P,x(S,P));R.prototype=I,I.constructor=R,f(o,F,R,{constructor:!0})}},369:function(t,e,r){var n=r(5);t.exports=n(1..valueOf)},370:function(t,e,r){var n=r(5),o=r(43),c=r(17),l=r(371),f=n("".replace),d="["+l+"]",m=RegExp("^"+d+d+"*"),_=RegExp(d+d+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,_,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},371:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},372:function(t,e,r){"use strict";r.r(e);r(368);var n=r(134),o=r.n(n),c={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{type:String,default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=r(30),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+" :\n  ")]):t._e(),t._v(" "),e("input",{ref:"input",style:t.computedStyle,attrs:{type:t.type,placeholder:t.placeholder,required:t.required,maxlength:t.maxlength},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);r(31),r(20),r(38),r(10),r(45),r(34),r(46);var n=r(13);r(88);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=r(134),f=r.n(l),d={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:f.a}},computed:{computedErrorStyle:function(){return{color:f.a.negative.background}}}},m=r(30),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my:8"},[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+"\n  ")]):t._e(),t._v(" "),t._t("default",null,null,c(c({},t.$props),t.$attrs)),t._v(" "),t.error?e("div",{staticClass:"font-size:0.8rem mt:4",style:t.computedErrorStyle},[t._v("\n    "+t._s(t.error.join("\n"))+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,r){"use strict";r.r(e);var n={props:["logo"]},o=r(30),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m:16|8 cursor:pointer border-bottom:1px|solid|transparent border-bottom:1px|solid|black:hover color:black",on:{click:function(e){return t.$emit("click")}}},[t.logo?e("i",{class:"mdi mdi-"+t.logo}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(21),r(71)),c={name:"page-auth-register",layout:"auth",data:function(){return{form:{account_name:"",account_email:"",account_password:"",account_password_confirmation:""},loading:!1,errorCode:"",errorFields:{}}},mounted:function(){this.$store.commit("auth/setTitle",this.$t("auth.titles.register"))},methods:{register:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=null,e.prev=2,e.next=5,t.$recaptcha.getResponse();case 5:r=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:return e.next=12,t.$axios.post("/api/auth/register",{account_name:t.form.account_name,account_email:t.form.account_email,account_password:t.form.account_password,account_password_confirmation:t.form.account_password_confirmation,recaptcha_response:r}).then((function(e){o.a.showSnackbar({message:t.$t("auth.messages.registered"),colorType:"positive",duration:5e3,position:"top"}),t.$set(t,"errorFields",{}),t.$router.push(t.localePath("/auth/login"))})).catch((function(e){e.response&&"422"==e.response.status&&t.$set(t,"errorFields",e.response.data.errors),o.a.showRequestError(e)}));case 12:return e.next=14,t.$recaptcha.reset();case 14:t.loading=!1;case 15:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}},l=r(30),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("form",{ref:"form",staticClass:"flex flex-direction:column justify-content:space-between"},[e("Loading",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}}),t._v(" "),e("div",[e("Field",{attrs:{field:t.$t("auth.fields.account_name"),error:t.errorFields.account_name}},[e("InputText",{attrs:{type:"name",required:"",error:t.errorFields.account_name},model:{value:t.form.account_name,callback:function(e){t.$set(t.form,"account_name",e)},expression:"form.account_name"}})],1),t._v(" "),e("Field",{attrs:{field:t.$t("auth.fields.account_email"),error:t.errorFields.account_email}},[e("InputText",{attrs:{type:"email",required:"",error:t.errorFields.account_email},model:{value:t.form.account_email,callback:function(e){t.$set(t.form,"account_email",e)},expression:"form.account_email"}})],1),t._v(" "),e("Field",{attrs:{field:t.$t("auth.fields.account_password"),error:t.errorFields.account_password}},[e("InputText",{attrs:{type:"password",required:"",error:t.errorFields.account_password},model:{value:t.form.account_password,callback:function(e){t.$set(t.form,"account_password",e)},expression:"form.account_password"}})],1),t._v(" "),e("Field",{attrs:{field:t.$t("auth.fields.account_password_confirmation"),error:t.errorFields.account_password_confirmation}},[e("InputText",{attrs:{type:"password",required:"",error:t.errorFields.account_password_confirmation},model:{value:t.form.account_password_confirmation,callback:function(e){t.$set(t.form,"account_password_confirmation",e)},expression:"form.account_password_confirmation"}})],1),t._v(" "),e("Field",{staticClass:"mt:16",attrs:{error:t.errorFields.recaptcha_response}},[e("div",{staticClass:"flex justify-content:center"},[e("recaptcha")],1)])],1),t._v(" "),e("div",{staticClass:"mt:16 flex flex-direction:column align-items:center"},[e("Button",{staticClass:"w:100%",on:{click:function(e){t.$refs.form.reportValidity()&&t.register()}}},[t._v(t._s(t.$t("auth.buttons.register")))]),t._v(" "),e("TextButton",{on:{click:function(e){t.$router.push(t.localePath("/auth/login"))}}},[t._v("\n      "+t._s(t.$t("auth.buttons.back_to_login")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:r(167).default,InputText:r(372).default,Field:r(373).default,Button:r(367).default,TextButton:r(377).default})}}]);