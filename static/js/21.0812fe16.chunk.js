(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21],{196:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(60),i=a(4),n=a(2),c=a(1);function s(e,t){Object(c.a)(2,arguments);var a=Object(n.a)(e),r=Object(i.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return a;var s=a.getDate(),o=new Date(a.getTime());o.setMonth(a.getMonth()+r+1,0);var l=o.getDate();return s>=l?o:(a.setFullYear(o.getFullYear(),o.getMonth(),s),a)}function o(e,t){Object(c.a)(2,arguments);var a=Object(i.a)(t);return s(e,-a)}function l(e,t){if(Object(c.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(i.a)(t.years):0,s="months"in t?Object(i.a)(t.months):0,l="weeks"in t?Object(i.a)(t.weeks):0,d="days"in t?Object(i.a)(t.days):0,m="hours"in t?Object(i.a)(t.hours):0,u="minutes"in t?Object(i.a)(t.minutes):0,b="seconds"in t?Object(i.a)(t.seconds):0,f=o(Object(n.a)(e),s+12*a),O=Object(r.a)(f,d+7*l),h=u+60*m,j=b+60*h,g=1e3*j,p=new Date(O.getTime()-g);return p}},197:function(e,t,a){"use strict";a.r(t);var r=a(106),i=a(78),n=a(0),c=a.n(n),s=a(92),o=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(s.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},l=a(23),d=a(97),m=a(31),u=a(88),b=a(79),f=a.n(b),O=a(59),h=a(196),j=a(82),g=a.n(j),p=a(250),v=a(213),y=a(160),E=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(4),a.e(29)]).then(a.bind(null,241))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,s=e.timeseries,b=e.date,j=e.regionHighlighted,g=e.setRegionHighlighted,N=e.anchor,C=e.setAnchor,k=Object(p.a)().t,w=Object(v.a)("timeseriesLookback",l.t.MONTH),x=Object(i.a)(w,2),T=x[0],M=x[1],S=Object(y.a)("chartType","total"),H=Object(i.a)(S,2),P=H[0],U=H[1],D=Object(y.a)("isUniform",!0),R=Object(i.a)(D,2),J=R[0],L=R[1],q=Object(y.a)("isLog",!1),F=Object(i.a)(q,2),K=F[0],W=F[1],z=Object(n.useRef)(),B=Object(d.a)(z,{once:!0}),I=Object(n.useMemo)((function(){var e;return(null===s||void 0===s||null===(e=s[j.stateCode])||void 0===e?void 0:e.districts)?{stateCode:j.stateCode,districtName:j.districtName}:{stateCode:j.stateCode,districtName:null}}),[s,j.stateCode,j.districtName]),Y=Object(n.useMemo)((function(){var e,t,a,r;return I.districtName?null===s||void 0===s||null===(e=s[I.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[I.districtName])||void 0===a?void 0:a.dates:null===s||void 0===s||null===(r=s[I.stateCode])||void 0===r?void 0:r.dates}),[s,I.stateCode,I.districtName]),A=Object(n.useMemo)((function(){var e=Object.keys(s||{}).filter((function(e){return e!==a})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(s||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===s||void 0===s||null===(a=s[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[s,a]),G=Object(n.useMemo)((function(){return A.find((function(e){return e.stateCode===j.stateCode&&e.districtName===j.districtName}))?A:[].concat(Object(r.a)(A),[{stateCode:j.stateCode,districtName:j.districtName}])}),[j.stateCode,j.districtName,A]),X=Object(n.useMemo)((function(){var e=b||Object(m.i)(),t=Object.keys(Y||{}).filter((function(t){return t<=e}));if(T===l.t.TWO_WEEKS){var a=Object(O.a)(Object(h.a)(Object(m.l)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=a}))}if(T===l.t.MONTH){var r=Object(O.a)(Object(h.a)(Object(m.l)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=r}))}return t}),[Y,b,T]),_=Object(n.useCallback)((function(e){var t=e.target;g(JSON.parse(t.value))}),[g]),Q=Object(n.useCallback)((function(){g({stateCode:a,districtName:null})}),[a,g]);return c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===N}),style:{display:"mapexplorer"===N?"none":""},ref:z},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===N}),onClick:C&&C.bind(this,"timeseries"===N?null:"timeseries")},c.a.createElement(u.k,null)),c.a.createElement("h1",null,k("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(l.s).map((function(e,a){var r=Object(i.a)(e,2),n=r[0],s=r[1];return c.a.createElement("div",{className:"tab ".concat(P===n?"focused":""),key:n,onClick:U.bind(t,n)},c.a.createElement("h4",null,k(s)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},k("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},k("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:J,"aria-label":k("Checked by default to scale uniformly."),onChange:L.bind(this,!J)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==P?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},k("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===P&&K,className:"switch",disabled:"total"!==P,onChange:W.bind(this,!K)})))),G&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(I),onChange:_},G.filter((function(e){return l.q[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?k(e.districtName):k(l.q[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:Q},c.a.createElement(u.m,null))),B&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(E,Object.assign({timeseries:Y,regionHighlighted:I},{dates:X,chartType:P,isUniform:J,isLog:K}))),!B&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(l.t).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:f()({selected:T===e}),onClick:function(){return M(e)}},k(e))}))),c.a.createElement("div",{className:"alert"},c.a.createElement(u.i,{size:24}),c.a.createElement("div",{className:"alert-right"},k("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&!!g()(t.anchor,e.anchor)))))}))},92:function(e,t,a){"use strict";var r=a(0),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,a=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,u=e.interval,b=e.rtl,f=e.speed,O=e.style,h=e.title,j=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=m||Math.random().toString(36).substring(6),p=g+"-diff",v=g+"-animated-diff",y=g+"-aria",E=b?{transform:"scaleX(-1)"}:null,N="0; "+u+"; 1",C=f+"s";return Object(r.createElement)("svg",i({"aria-labelledby":y,role:"img",style:i(i({},O),E)},j),h?Object(r.createElement)("title",{id:y},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+p+")",style:{fill:"url("+c+"#"+v+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:p},s),Object(r.createElement)("linearGradient",{id:v},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(n,i({},e)):Object(r.createElement)(s,i({},e))},s=function(e){return Object(r.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=21.0812fe16.chunk.js.map