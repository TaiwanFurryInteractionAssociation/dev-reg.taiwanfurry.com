(window.webpackJsonp=window.webpackJsonp||[]).push([[40,13,16,17],{376:function(e,t,o){"use strict";o.r(t);var n={},r=o(30),component=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"round drop-shadow p:16|48 bg:white cursor:pointer",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},384:function(e,t,o){"use strict";o.r(t);o(66);var n={data:function(){return{response:null}},methods:{receiveResponse:function(data){var e=this;data&&(this.$set(this,"response",data),"redirect_to_newebpay"==data.payment_type?setTimeout((function(t){e.$refs.newebpay_form.submit()}),2e3):"refresh"==data.payment_type&&setTimeout((function(e){window.location.reload()}),1e3))}}},r=o(30),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.response&&"redirect_to_newebpay"==e.response.payment_type?t("form",{ref:"newebpay_form",staticClass:"display:none",attrs:{method:"POST",action:e.response.payment_info.submit_url}},[t("input",{attrs:{name:"MerchantID"},domProps:{value:e.response.payment_info.merchant_id}}),e._v(" "),t("input",{attrs:{name:"Version"},domProps:{value:e.response.payment_info.version}}),e._v(" "),t("input",{attrs:{name:"TradeInfo"},domProps:{value:e.response.payment_info.trade_info}}),e._v(" "),t("input",{attrs:{name:"TradeSha"},domProps:{value:e.response.payment_info.hash}})]):e._e()])}),[],!1,null,null,null);t.default=component.exports},387:function(e,t,o){"use strict";o.r(t);var n={props:["field"]},r=o(30),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"font-size:0.8rem mb:8 color:gray"},[e._v("\n    "+e._s(e.field)+"\n  ")]),e._v(" "),t("div",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},439:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(21),o(71)),l=o(72),_=o.n(l),v=o(134),d=o.n(v),m={data:function(){return{COLORS:d.a,config:_.a.getConfig(),loading:!0,hotelReservationStatus:null,payment_info:null}},mounted:function(){this.gethotelReservationStatus(),this.$store.commit("app/setTitle",this.$t("hotelReservation.title"))},methods:{gethotelReservationStatus:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/hotelReservation").then((function(t){e.hotelReservationStatus=t.data,e.loading=!1})).catch((function(e){r.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},pay:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/hotelReservation/payment").then((function(t){e.payment_info=t.data.payment_info,r.a.showSnackbar({message:e.$t(t.data.code),colorType:"positive"}),e.$refs.paymentGateway.receiveResponse(t.data)})).catch((function(t){r.a.showRequestError(t),e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},c=o(30),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("Loading",{attrs:{value:e.loading}}),e._v(" "),e.hotelReservationStatus?t("div",[null==e.hotelReservationStatus.room_reservation?t("div",[t("div",{staticClass:"p:96|32 bg:white flex flex-center font-size:1.4rem round drop-shadow border"},[e._v("\n        "+e._s(e.hotelReservationStatus.can_reserve?e.$t("hotelReservation.messages.not_reserved"):e.$t("hotelReservation.errors.need_register_first"))+"\n      ")]),e._v(" "),e.hotelReservationStatus.can_reserve?t("div",{staticClass:"mt:32 flex flex-center"},[t("nuxt-link",{attrs:{to:e.localePath("/hotelReservation/tos")}},[t("RoundButton",[e._v(e._s(e.$t("hotelReservation.buttons.reserve")))])],1)],1):e._e()]):t("div",[1==e.hotelReservationStatus.room_reservation.room_reservation_status?t("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[t("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:e.COLORS.negative.background}},[e._v("\n          "+e._s(e.$t("payment_status.unpaid"))+"\n        ")]),e._v(" "),t("RoundButton",{staticClass:"mt:16 border",on:{click:e.pay}},[e._v("\n          "+e._s(e.$t("hotelReservation.buttons.payNow"))+"\n        ")]),e._v(" "),t("PaymentGateway",{ref:"paymentGateway"})],1):e._e(),e._v(" "),3==e.hotelReservationStatus.room_reservation.room_reservation_status?t("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[t("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:e.COLORS.primary.background}},[e._v("\n          "+e._s(e.$t("payment_status.need_manual_intervention"))+"\n        ")])]):e._e(),e._v(" "),5==e.hotelReservationStatus.room_reservation.room_reservation_status?t("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[t("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:e.COLORS.negative.background}},[e._v("\n          "+e._s(e.$t("payment_status.payment_info_received"))+"\n        ")]),e._v(" "),t("div",{staticClass:"mt:16 color:gray font-size:1.2rem"},[e._v("\n          "+e._s(e.$t("hotelReservation.infoFields.payment_info"))+"\n        ")]),e._v(" "),t("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"},[e._v("\n          "+e._s(e.hotelReservationStatus.order.order_payment_info)+"\n        ")]),e._v(" "),t("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"},[e._v("\n          "+e._s(e.$t("hotelReservation.infoFields.room_reservation_total_amount"))+"\n          :\n          "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_total_amount)+"\n          / "+e._s(e.$t("hotelReservation.infoFields.order_expire_datetime"))+" :\n          "+e._s(new Date(e.hotelReservationStatus.order.order_expire_datetime).toLocaleString())+"\n        ")])]):e._e(),e._v(" "),10==e.hotelReservationStatus.room_reservation.room_reservation_status?t("div",{staticClass:"round border drop-shadow bg:white p:16|16 flex flex-center flex-direction:column mb:32"},[t("i",{staticClass:"mdi mdi-check font-size:6rem",style:{color:e.COLORS.positive.background}}),e._v(" "),t("div",{staticClass:"font-size:1.6rem mb:16"},[e._v("\n          "+e._s(e.$t("payment_status.paid"))+"\n        ")])]):e._e(),e._v(" "),t("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column"},[t("div",{staticClass:"font-weight:bold mb:32"},[e._v("\n          "+e._s(e.$t("hotelReservation.infoFields.reservation_info"))+"\n        ")]),e._v(" "),t("div",{staticClass:"display:grid grid-template-columns:repeat(3,1fr)@>sm grid-template-columns:1fr@<sm gap:16"},[t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_room_type")}},[e._v("\n            "+e._s(e.$t("rooms."+e.hotelReservationStatus.room_reservation.room_reservation_room_type))+"\n          ")]),e._v(" "),t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_headcount")}},[e._v("\n            "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_headcount)+"\n          ")]),e._v(" "),t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_date_text")}},[e._v("\n            "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_date_text)+"\n          ")]),e._v(" "),t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_realname")}},[e._v("\n            "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_realname)+"\n          ")]),e._v(" "),t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_telephone")}},[e._v("\n            "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_telephone)+"\n          ")]),e._v(" "),t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_email")}},[e._v("\n            "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_email)+"\n          ")]),e._v(" "),e.config.room_reservation.room_can_be_upgrade?t("InfoField",{attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_is_upgrade")}},[e._v("\n            "+e._s(e.$t("payment_methods."+e.hotelReservationStatus.room_reservation.room_reservation_is_upgrade))+"\n            "),e.hotelReservationStatus.room_reservation.room_reservation_is_upgrade?t("span",[e._v("\n              ("+e._s(e.$t("hotelReservation.infoFields.room_reservation_is_upgrade_selected"))+"\n              :\n              "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_upgrade_selected?e.$t("common.yes"):e.$t("common.no"))+")\n            ")]):e._e()]):e._e(),e._v(" "),t("InfoField",{staticClass:"grid-column-start:1 grid-column-end:3@>sm",attrs:{field:e.$t("hotelReservation.infoFields.room_reservation_remarks")}},[e._v("\n            "+e._s(e.hotelReservationStatus.room_reservation.room_reservation_remarks)+"\n          ")])],1),e._v(" "),t("div",{staticClass:"mt:16"},[e._v("\n          "+e._s(e.$t("common.messages.ifNeedToChangeData"))+"\n        ")])])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:o(167).default,RoundButton:o(376).default,PaymentGateway:o(384).default,InfoField:o(387).default})}}]);