(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{519:function(t,e,r){"use strict";r.r(e);var o=r(353),n=r(406),c=r(400),d=r(407),m=r(408),h=r(410),l=r(411),f=r(418),$=r(412),k=r(413),C=r(421),y=r(423),v=r(422),w=r(415),_=r(414),j=r(419),A=r(420),D={components:{ConfirmedCasesDetailsCard:h.a,TestedCasesDetailsCard:l.a,ConfirmedCasesNumberCard:f.a,ConfirmedCasesAttributesCard:$.a,TestedNumberCard:k.a,InspectionPersonsNumberCard:C.a,TelephoneAdvisoryReportsNumberCard:y.a,ConsultationDeskReportsNumberCard:v.a,MetroCard:w.a,AgencyCard:_.a,ShinjukuVisitorsCard:j.a,ChiyodaVisitorsCard:A.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=o.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=o.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=o.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=n.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=c.date;break;case"shinjuku-visitors":title=this.$t("新宿区エリアの来訪者数の推移（参考値）"),t=d.date;break;case"chiyoda-visitors":title=this.$t("千代田区エリアの来訪者数の推移（参考値）"),t=m.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://covid19-daily-tohoku.news/",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、デーリー東北新聞社（青森県八戸市）が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("デーリー東北")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},N=r(5),component=Object(N.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):"shinjuku-visitors"==this.$route.params.card?e("shinjuku-visitors-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);