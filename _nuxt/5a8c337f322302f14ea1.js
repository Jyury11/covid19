(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(t,e,n){"use strict";var r=n(6),l=n(27),o=n(33),c=n(104),d=n(78),h=n(14),f=n(53).f,v=n(80).f,m=n(12).f,y=n(240).trim,_=r.Number,x=_,k=_.prototype,D="Number"==o(n(79)(k)),$="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=$?e.trim():y(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(D?h((function(){k.valueOf.call(n)})):"Number"!=o(n))?c(new x(C(e)),n,_):C(e)};for(var S,L=n(10)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;L.length>w;w++)l(x,S=L[w])&&!l(_,S)&&m(_,S,v(x,S));_.prototype=k,k.constructor=_,n(15)(r,"Number",_)}},240:function(t,e,n){var r=n(9),l=n(32),o=n(14),c=n(241),d="["+c+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t,e,n){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),h=l[t]=d?e(m):c[t];n&&(l[n]=h),r(r.P+r.F*d,"String",l)},m=v.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},241:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},250:function(t,e,n){t.exports={container:"container_1VuG7",group:"group_MrdNH",content:"content_TJIht",unit:"unit_1E2ZH",box:"box_1NKW3",parent:"parent_2wZWB"}},251:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),l=e["小計"];isNaN(l)||(n+=l,t.push({label:"".concat(r.getMonth()+1,"/").concat(r.getDate()),transition:l,cumulative:n}))})),t}},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){},255:function(t,e,n){},256:function(t,e,n){},257:function(t,e,n){t.exports={GraphDesc:"GraphDesc_o77VL",GraphLegend:"GraphLegend_1qazu",DataViewDesc:"DataViewDesc_wvmsK"}},259:function(t,e,n){"use strict";var r=n(1).default.extend({props:{lText:{type:String,required:!0},sText:{type:String,required:!0},unit:{type:String,required:!0}}}),l=(n(305),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},260:function(t,e,n){"use strict";var r=n(1).default.extend({props:{url:{type:String,default:""}}}),l=(n(307),n(4)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"OpenDataLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n  "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},261:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return d}));var r="#006400",l={strokeColor:"#FFFFFF",fillColor:"#006400"},o={strokeColor:"#FFFFFF",fillColor:"#1B75BC"},c={strokeColor:"#00441B",fillColor:"#00441B"};function d(t){switch(t){case 1:return[o];case 2:return[l,o];default:return[l,o,c]}}},263:function(t,e,n){"use strict";var r=n(213),l=n(215),o=(n(217),n(1).default.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"調査中":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}}})),c=n(301),d=n(4);var h=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(" "+t._s(t.$t("陽性者数"))+" ("+t._s(t.$t("累計"))+") ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・中等症"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.軽症中等症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("宿泊療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.宿泊療養))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院・療養等調整中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.調査中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null).exports,f={components:{DataView:l.a,ConfirmedCasesDetailsTable:h},data:function(){var t=function(data){return{"検査実施人数":data.value,"陽性者数":data.children[0].value,"入院中":data.children[0].children[0].value,"軽症中等症":data.children[0].children[0].children[0].value,"重症":data.children[0].children[0].children[1].value,"宿泊療養":data.children[0].children[1].value,"調査中":data.children[0].children[2].value,"死亡":data.children[0].children[3].value,"退院":data.children[0].children[4].value}}(r.main_summary),data={Data:r,confirmedCases:t};return data}},v=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-view",{attrs:{title:this.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:this.Data.patients.date}},[e("confirmed-cases-details-table",this._b({attrs:{"aria-label":this.$t("検査陽性者の状況")}},"confirmed-cases-details-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=v.exports},264:function(t,e,n){"use strict";n(81),n(22),n(16);var r=n(213),l=n(251),o=n(7),c=n.n(o),d=[{text:"公表日",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"},{text:"退院※",value:"退院",align:"center"}],h=n(1),f=n(215),v=n(259),m=n(260),y=h.default.extend({components:{DataView:f.a,DataViewBasicInfoPanel:v.a,OpenDataLink:m.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""},customSort:{type:Function,default:function(t,e,n){return t.sort((function(a,b){var t=0;return String(a[e[0]])<String(b[e[0]])?t=-1:String(b[e[0]])<String(a[e[0]])&&(t=1),0!==t&&(t=n[0]?-1*t:t),t})),t}}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),_=(n(308),n(4)),x={components:{DataTable:Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,height:240,"fixed-header":"","mobile-breakpoint":0,"custom-sort":t.customSort,"footer-props":{"items-per-page-options":[15,30,50,100,200,300,-1],"items-per-page-text":t.$t("1ページ当たり")}},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e){return n("tr",{key:e.text},[n("th",{staticClass:"text-start"},[t._v(t._s(e["公表日"]))]),t._v(" "),n("th",{staticClass:"text-start"},[t._v(t._s(e["居住地"]))]),t._v(" "),n("th",{staticClass:"text-start"},[t._v(t._s(e["年代"]))]),t._v(" "),n("th",{staticClass:"text-start"},[t._v(t._s(e["性別"]))]),t._v(" "),n("th",{staticClass:"text-center"},[t._v(t._s(e["退院"]))])])})),0)]}},{key:"footer.page-text",fn:function(e){return[t._v("\n      "+t._s(t.$t("{itemsLength} 項目中 {pageStart} - {pageStop} ",{itemsLength:e.itemsLength,pageStart:e.pageStart,pageStop:e.pageStop}))+"\n    ")]}}])}),t._v(" "),n("div",{staticClass:"note"},[n("ul",[n("li",[t._v("\n        "+t._s(t.$t("※退院には、死亡退院を含む"))+"\n      ")])])])],1)}),[],!1,null,null,null).exports},data:function(){var t=Object(l.a)(r.patients_summary.data),e=function(data){var t={headers:d,datasets:[]};return data.forEach((function(e){var n,r,l,o,d={"公表日":null!==(n=c()(e["リリース日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"不明","年代":null!==(l=e["年代"])&&void 0!==l?l:"不明","性別":null!==(o=e["性別"])&&void 0!==o?o:"不明","退院":e["退院"]};t.datasets.push(d)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(r.patients.data),n={lText:t[t.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:t[t.length-1].label}),unit:this.$t("人")},o=!0,h=!1,f=void 0;try{for(var v,m=e.headers[Symbol.iterator]();!(o=(v=m.next()).done);o=!0){var header=v.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){h=!0,f=t}finally{try{o||null==m.return||m.return()}finally{if(h)throw f}}var y=!0,_=!1,x=void 0;try{for(var k,D=e.datasets[Symbol.iterator]();!(y=(k=D.next()).done);y=!0){var $=k.value;if($["居住地"]=this.$t($["居住地"]),$["性別"]=this.$t($["性別"]),$["退院"]=this.$t($["退院"]),"代"===$["年代"].substr(-1,1)){var C=$["年代"].substring(0,2);$["年代"]=this.$t("{age}代",{age:C})}else $["年代"]=this.$t($["年代"])}}catch(t){_=!0,x=t}finally{try{y||null==D.return||D.return()}finally{if(_)throw x}}var data={Data:r,patientsTable:e,sumInfoOfPatients:n};return data}},k=Object(_.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.Data.patients.date,info:this.sumInfoOfPatients,url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=k.exports},265:function(t,e,n){"use strict";var r=n(213),l=(n(36),n(18)),o=n(105),c=(n(54),n(217),n(1)),d=n(215),h=n(266),f=n(259),v=n(260),m=n(268),y=n(98),_=n(261),x={created:function(){this.canvas=!0},components:{DataView:d.a,DataSelector:h.a,DataViewBasicInfoPanel:f.a,OpenDataLink:v.a,ScrollableChart:m.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""},initialCumulative:{type:Number,default:0},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return y.b}}},data:function(){return{dataKind:"transition",displayLegends:[!0,!0],colors:Object(_.a)(2),canvas:!0}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1].replace(/^0/,"")})),unit:this.unit}:{lText:(this.sum(this.cumulativeSum(this.chartData))+this.initialCumulative).toLocaleString(),sText:"".concat(this.$t("{date}までの累計（内{offset}件は4/26までの累計）",{date:this.labels[this.labels.length-1].replace(/^0/,""),offset:this.initialCumulative.toLocaleString()})),unit:this.unit}},displayData:function(){var t=this,e=Object(_.a)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:n,backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:{left:0,top:1,right:0,bottom:0}}}))}:{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:t.cumulative(n),backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:{left:0,top:1,right:0,bottom:0}}}))}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(o.a)(t.items.map((function(e,n){return Object(l.a)({},n,t.displayData.datasets[n].data[i])})))))}))},displayOption:function(){var t=this,e=this.unit,n=this.eachArraySum(this.chartData),data=this.chartData,r=this.chartData.map((function(e){return t.cumulative(e)})),l=this.eachArraySum(r),o={tooltips:{displayColors:!1,callbacks:{label:function(o){var c,d;return"transition"===t.dataKind?(c=n[o.index].toLocaleString(),d=data[o.datasetIndex][o.index].toLocaleString()):(c=l[o.index].toLocaleString(),d=r[o.datasetIndex][o.index].toLocaleString()),"".concat(t.dataLabels[o.datasetIndex],": ").concat(d," ").concat(e," (").concat(t.$t("合計"),": ").concat(c," ").concat(e,")")},title:function(t,data){return String(data.labels[t[0].index])}}},responsive:!1,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(o,{animation:{duration:0}}),o},displayDataHeader:function(){var t=0,e=0;for(var i in this.displayData.datasets[0].data){var n=this.displayData.datasets[0].data[i]+this.displayData.datasets[1].data[i];n>e&&(e=n,t=Number(i))}return{labels:["2020/1/1"],datasets:[{data:[this.displayData.datasets[0].data[t]],backgroundColor:"transparent",borderWidth:0},{data:[this.displayData.datasets[1].data[t]],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{responsive:!1,maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,maxTicksLimit:8,fontColor:"#808080"}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=0;for(var i in this.chartData[0])t=Math.max(t,this.chartData[0][i]+this.chartData[1][i]);return t}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},cumulative:function(t){var e=[],n=0;return t.forEach((function(t){n+=t,e.push(n)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]+t[1][i]);return e}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},k=c.default.extend(x),D=n(309),$=n(4);var C={components:{TimeStackedBarChart:Object($.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.GraphDesc},[n("li",[t._v("\n        "+t._s(t.$t("（注）検査結果の判明日を基準とする"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）同一の対象者について複数の検体を検査する場合あり"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])}),t._v(" "),n("v-data-table",{style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),n("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2)],1)}),[],!1,(function(t){this.$style=D.default.locals||D.default}),null,null).exports},data:function(){var t=[r.inspections_summary.data["地方衛生研究所"],r.inspections_summary.data["医療機関等"]],e=[this.$t("地方衛生研究所が行った検査件数"),this.$t("医療機関等が行った検査件数")],n=r.inspections_summary.labels,l=[this.$t("地方衛生研究所"),this.$t("医療機関等")],o=r.inspections_summary.initial_cumulative.count,data={Data:r,inspectionsGraph:t,inspectionsItems:e,inspectionsLabels:n,inspectionsDataLabels:l,inspectionsInitialCumulative:o};return data}},S=Object($.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-stacked-bar-chart",{attrs:{title:t.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections_summary.date,items:t.inspectionsItems,labels:t.inspectionsLabels,unit:t.$t("件.tested"),"data-labels":t.inspectionsDataLabels,"initial-cumulative":t.inspectionsInitialCumulative,url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=S.exports},266:function(t,e,n){"use strict";var r=n(1).default.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),l=(n(304),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},267:function(t,e,n){"use strict";n(302);var r=n(105),l=(n(36),n(1)),o=n(215),c=n(266),d=n(259),h=n(268),f=n(260),v=n(98),m=n(261),y={created:function(){this.canvas=!0},components:{DataView:o.a,DataSelector:c.a,DataViewBasicInfoPanel:d.a,ScrollableChart:h.a,OpenDataLink:f.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return v.b}}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){return"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:m.b,borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:m.b,borderWidth:0}]}},displayOption:function(){var t=this.unit,e={tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)},title:function(t,data){return data.labels[t[0].index]}}},responsive:!1,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}:{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{responsive:!1,maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:this.title,value:"0"}]},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return{text:t.displayData.labels[i],0:t.displayData.datasets[0].data[i]}}))}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},_=l.default.extend(y),x=n(4),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,null,null,null);e.a=component.exports},268:function(t,e,n){"use strict";var r={props:{displayData:{type:Object,required:!0}},data:function(){return{chartWidth:300}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer.clientWidth;this.chartWidth=this.calcChartWidth(t,this.labelCount),this.scrollRightSide()},calcChartWidth:function(t,e){var n=(t-38)/60*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this,e=this.$refs.scrollable;e&&setTimeout((function(){e.scrollLeft=t.chartWidth}))}},mounted:function(){var t,e=this;this.adjustChartWidth(),window.addEventListener("resize",(function(){clearTimeout(t),t=window.setTimeout(e.adjustChartWidth,500)}))}},l=(n(306),n(4)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"49372267",null);e.a=component.exports},269:function(t,e,n){"use strict";var r=n(213),l=n(251),o={components:{TimeBarChart:n(267).a},data:function(){var t=Object(l.a)(r.patients_summary.data),data={Data:r,patientsGraph:t};return data}},c=n(4),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.Data.patients.date,unit:this.$t("人"),url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,n){"use strict";var r=n(213),l=n(251),o={components:{TimeBarChart:n(267).a},data:function(){var t=Object(l.a)(r.querents.data),data={Data:r,querentsGraph:t};return data}},c=n(4),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナ受診相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":this.querentsGraph,date:this.Data.querents.date,unit:this.$t("件.reports"),url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},301:function(t,e,n){"use strict";var r=n(250),l=n.n(r);e.default=l.a},302:function(t,e,n){var r=n(9);r(r.S,"Math",{sign:n(303)})},303:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},304:function(t,e,n){"use strict";var r=n(252);n.n(r).a},305:function(t,e,n){"use strict";var r=n(253);n.n(r).a},306:function(t,e,n){"use strict";var r=n(254);n.n(r).a},307:function(t,e,n){"use strict";var r=n(255);n.n(r).a},308:function(t,e,n){"use strict";var r=n(256);n.n(r).a},309:function(t,e,n){"use strict";var r=n(257),l=n.n(r);e.default=l.a}}]);