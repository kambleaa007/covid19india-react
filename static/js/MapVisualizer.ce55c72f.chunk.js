(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[13],{173:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(32),i=r(174),a=r(0),o=function(t){var e=Object(a.useState)(null),r=Object(n.a)(e,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){var e=t.current,r=new i.a((function(t,e){t.forEach((function(t,e){c(t.contentRect)}))}));return r.observe(e),function(){r.unobserve(e)}}),[t]),o}},388:function(t,e,r){"use strict";r.r(e);var n=r(34),i=r(219),a=r.n(i),o=r(220),c=r(33),s=r(173),l=r(48),u=r(152),d=r(0),p=r.n(d),f=r(142);var v=function(t){t.data;var e=t.mapScale,r=t.mapOption,n=t.statistic,i=Object(f.a)().t,a=Object(d.useRef)(null),o=Object(d.useRef)(),v=Object(s.a)(o);return Object(d.useEffect)((function(){var t=u.E(a.current),s=v||o.current.getBoundingClientRect(),d=s.width,p=s.height;if(!d||!p){var f=o.current.getBoundingClientRect();d=f.width,p=f.height}if(r===c.h.HOTSPOTS){var h=t.transition().duration(c.b);t.select(".ramp").transition(h).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(h).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var g=e.domain()[1];t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle").selectAll("circle").data([g/10,2*g/5,g]).join("circle").attr("fill","none").attr("stroke","#ccc").transition(h).attr("cy",(function(t){return-e(t)})).attr("r",e);var b=e.copy().range([0,-2*e(g)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(h).call(u.b(b).tickSize(0).tickPadding(0).tickValues([g/10,2*g/5,g]).tickFormat(u.f("0~s"))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,n=t.title,i=t.tickSize,a=void 0===i?6:i,o=t.width,s=void 0===o?320:o,l=t.height,d=void 0===l?44+a:l,p=t.marginTop,f=void 0===p?18:p,v=t.marginRight,h=void 0===v?0:v,g=t.marginBottom,b=void 0===g?16+a:g,O=t.marginLeft,j=void 0===O?0:O,T=t.ticks,S=void 0===T?s/64:T,E=t.tickFormat,x=t.tickValues,k=t.ordinalWeights;e.selectAll(".circles > *").remove(),e.selectAll(".circleAxis > *").remove();var y,A=e.transition().duration(c.b),w=function(t){t.selectAll(".tick line").attr("y1",f+b-d)};if(r.interpolate){var N=Math.min(r.domain().length,r.range().length);y=r.copy().rangeRound(u.v(u.i(j,s-h),N)),e.select(".ramp").attr("class","ramp").attr("x",j).attr("y",f).attr("width",s-j-h).attr("height",d-f-b).attr("preserveAspectRatio","none").attr("xlink:href",m(r.copy().domain(u.v(u.i(0,1),N))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(A).attr("opacity",0).remove(),y=Object.assign(r.copy().interpolator(u.o(j,s-h)),{range:function(){return[j,s-h]}}),e.select(".ramp").attr("class","ramp").attr("x",j).attr("y",f).attr("width",s-j-h).attr("height",d-f-b).attr("preserveAspectRatio","none").attr("xlink:href",m(r.interpolator()).toDataURL()).transition(A).attr("opacity",1),!y.ticks){if(void 0===x){var R=Math.round(S+1);x=u.w(R).map((function(t){return u.u(r.domain(),t/(R-1))}))}"function"!==typeof E&&(E=u.f(void 0===E?",f":E))}}else if(r.invertExtent){var C=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),M=void 0===E?function(t){return t}:"string"===typeof E?u.f(E):E;y=u.y().domain([-1,r.range().length-1]).rangeRound([j,s-h]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return y(e-1)})).attr("y",f).attr("width",(function(t,e){return y(e)-y(e-1)})).attr("height",d-f-b).attr("fill",(function(t){return t})),x=u.w(-1,C.length),E=function(t){return-1===t?M(1):t!==C.length-1?t===C.length-2?M(C[t]+"+",t):M(C[t],t):void 0}}else{if(e.select(".ramp").transition(A).attr("opacity",0).attr("xlink:href",null),k){var I=u.y().domain([0,k.reduce((function(t,e){return t+e}))]).rangeRound([0,s-j-h]),L=k.map((function(t,e){return k.slice(0,e).reduce((function(t,e){return t+I(e)}),j)}));y=u.A().domain(r.domain()).range(L),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",y).attr("width",(function(t,e){return I(k[e])}))})).attr("y",f).attr("height",d-f-b).attr("fill",r).transition(A).attr("x",y).attr("width",(function(t,e){return I(k[e])})).attr("opacity",1)}else y=u.x().domain(r.domain()).rangeRound([j,s-h]),e.selectAll("rect").data(r.domain()).join("rect").attr("x",y).attr("y",f).attr("width",Math.max(0,y.bandwidth()-1)).attr("height",d-f-b).attr("fill",r);w=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(d-b,")")).transition(A).attr("class","axis").call(u.a(y).ticks(S,"string"===typeof E?E:void 0).tickFormat("function"===typeof E?E:void 0).tickSize(a).tickValues(x)).on("start",(function(){e.call(w).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",j).attr("y",f+b-d-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(n)})),e.node()}({svg:t,color:e,title:r===c.h.PER_MILLION?"".concat(i(Object(l.a)(n))," ").concat(i("cases per million")):"".concat(i(Object(l.a)(n))," ").concat(i("cases")),width:d,height:p,ticks:5,tickFormat:function(t,e,n){if(r!==c.h.TOTAL||Number.isInteger(t))return e===n.length-1?Object(l.f)(t)+"+":Object(l.f)(t)},marginLeft:2,marginRight:20})}));t.attr("class",r===c.h.ZONES?"zone":"")}),[i,v,e,r,n]),p.a.createElement("div",{className:"svg-parent maplegend",style:{height:c.f},ref:o},p.a.createElement("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:a},p.a.createElement("image",{className:"ramp"}),p.a.createElement("g",{className:"bars"}),p.a.createElement("g",{className:"circles"}),p.a.createElement("g",{className:"circleAxis"}),p.a.createElement("g",{className:"axis"},p.a.createElement("text",{className:"axistext"}))),p.a.createElement("canvas",{className:"color-scale",style:{position:"absolute",height:0}}))};function m(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=u.E(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var h=r(375),g=r(158),b=r(359),O={confirmed:function(t){return u.n(.85*t)},active:function(t){return u.j(.85*t)},recovered:function(t){return u.k(.85*t)},deceased:function(t){return u.l(.85*t)},tested:function(t){return u.m(.85*t)}},j=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(l.j)(t,"total",e,r)};e.default=function(t){var e,r,i=t.currentMap,s=t.data,m=t.changeMap,T=t.regionHighlighted,S=t.setRegionHighlighted,E=t.statistic,x=t.isCountryLoaded,k=Object(f.a)().t,y=Object(d.useRef)(null),A=c.g[i.code],w=Object(g.a)(A.geoDataFile,function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.p(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{revalidateOnFocus:!1,suspense:!0}).data,N=Object(d.useMemo)((function(){var t=Object.keys(s).filter((function(t){return"TT"!==t&&Object.keys(c.g).includes(t)}));return i.view===c.k.STATES?u.r(t,(function(t){return j(s[t],E,i.option===c.h.PER_MILLION?c.t[t]:1)})):u.r(t,(function(t){var e;return(null===(e=s[t])||void 0===e?void 0:e.districts)?u.r(Object.values(s[t].districts),(function(t){return j(t,E)})):0}))}),[s,i.option,i.view,E]),R=Object(d.useMemo)((function(){return j(s[i.code],E,i.option===c.h.PER_MILLION?c.t[i.code]:1)}),[s,i.code,i.option,E]),C=Object(d.useMemo)((function(){return i.option===c.h.ZONES?u.A(Object.keys(c.y),Object.values(c.y)):i.option===c.h.HOTSPOTS?u.C([0,Math.max(N,1)],[0,40]).clamp(!0).nice(3):u.B([0,Math.max(1,N)],O[E]).clamp(!0)}),[i.option,E,N]);return Object(d.useEffect)((function(){var t=b.a(w,w.objects[A.graphObjectStates||A.graphObjectDistricts]),e=u.E(y.current),r=u.g().fitSize([432,488],t),a=u.h(r),o=i.view===c.k.STATES?b.a(w,w.objects[A.graphObjectStates]).features:A.mapType===c.j.COUNTRY&&i.option===c.h.HOTSPOTS?[].concat(Object(n.a)(b.a(w,w.objects[A.graphObjectStates]).features),Object(n.a)(b.a(w,w.objects[A.graphObjectDistricts]).features)):b.a(w,w.objects[A.graphObjectDistricts]).features;o=o.map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(i.code,"-").concat(r).concat(e?"-"+e:""),n}));var d=function(t){var e,r,n=c.p[t.properties.st_nm],a=t.properties.district,o=s[n],l=null===o||void 0===o||null===(e=o.districts)||void 0===e?void 0:e[a];return 0===(r=i.option===c.h.ZONES?(null===l||void 0===l?void 0:l.zone)||0:a?j(l,E):j(o,E,i.option===c.h.PER_MILLION?c.t[n]:1))?"#ffffff00":C(r)},p=function(t){return i.option===c.h.ZONES?"#343a40":c.a[E]},f=u.F().duration(c.b),v=null;e.select(".regions").selectAll("path").data(i.option!==c.h.HOTSPOTS?o:[],(function(t){return t.id})).join((function(t){var e=t.append("path").attr("d",a).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t){S({stateCode:c.p[t.properties.st_nm],districtName:t.properties.district})})).on("mouseleave",(function(t){v===t&&(v=null)})).on("touchstart",(function(t){v=v===t?null:t})).attr("fill",d).attr("stroke",p);return e.append("title"),e}),(function(t){return t.call((function(t){return t.transition(f).attr("fill",d).attr("stroke",p)}))})).attr("pointer-events","all").on("click",(function(t){var r;u.e.stopPropagation();var n=c.p[t.properties.st_nm];!v&&A.mapType!==c.j.STATE&&(null===(r=s[n])||void 0===r?void 0:r.districts)&&(e.attr("pointer-events","none"),e.select(".regions").selectAll("path").attr("pointer-events","none"),m(c.p[t.properties.st_nm]))})).select("title").text((function(t){if(i.option===c.h.TOTAL){var e,r,n=t.properties.st_nm,a=c.p[n],o=t.properties.district,u=s[a],d=null===u||void 0===u||null===(e=u.districts)||void 0===e?void 0:e[o];return r=j(o?d:u,E),Object(l.f)(r/(R||.001)*100)+"% from "+Object(l.b)(o||n)}})),e.transition().duration(A.mapType===c.j.STATE?f.duration()/2:0).on("end",(function(){return e.attr("class",i.option===c.h.ZONES?"zone":"")}));var h=[];i.option===c.h.HOTSPOTS&&(h=o.map((function(t){var e,r,n=c.p[t.properties.st_nm],i=t.properties.district,a=s[n],o=null===a||void 0===a||null===(e=a.districts)||void 0===e?void 0:e[i];return t.value=j(i?o:null===a||void 0===a||null===(r=a.districts)||void 0===r?void 0:r[c.x],E),t})).sort((function(t,e){return e.value-t.value}))),e.select(".circles").selectAll("circle").data(h,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(a.centroid(t),")")})).attr("fill-opacity",.5).style("cursor","pointer").attr("pointer-events","all").on("mouseenter",(function(t){S({stateCode:c.p[t.properties.st_nm],districtName:t.properties.district||c.x})})).on("click",(function(){u.e.stopPropagation()}))})).transition(f).attr("fill",c.a[E]+"70").attr("stroke",c.a[E]+"70").attr("r",(function(t){return C(t.value)}));var g=[];A.mapType===c.j.COUNTRY&&((g=[b.b(w,w.objects[A.graphObjectStates])])[0].id=A.graphObjectStates);var O=[];i.view===c.k.DISTRICTS&&((O=[b.b(w,w.objects[A.graphObjectDistricts])])[0].id=A.graphObjectDistricts),e.select(i.view===c.k.STATES?".state-borders":".district-borders").attr("fill","none").attr("stroke-width",(function(){return A.mapType===c.j.COUNTRY&&i.view===c.k.DISTRICTS?0:1.5})).selectAll("path").data(i.view===c.k.STATES?g:O,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",a)})).transition(f).attr("stroke",(function(){return i.option===c.h.ZONES?"#00000060":c.a[E]+"30"})),e.select(i.view===c.k.STATES?".district-borders":".state-borders").selectAll("path").data(i.view===c.k.STATES?O:g,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",a).attr("fill","none").attr("stroke-width",1.5)})).transition(f).attr("stroke","#343a4050"),e.attr("pointer-events","auto").on("click",(function(){A.mapType!==c.j.STATE&&S({stateCode:"TT",districtName:null})}))}),[w,s,A,i,S,m,x,C,E,R]),Object(d.useEffect)((function(){var t=c.r[T.stateCode],e=T.districtName,r=u.E(y.current);i.option===c.h.HOTSPOTS?r.select(".circles").selectAll("circle").attr("fill-opacity",(function(r){var n;return t===r.properties.st_nm&&(!e||e===(null===(n=r.properties)||void 0===n?void 0:n.district)||e===c.x&&!r.properties.district)?1:.5})):r.select(".regions").selectAll("path").each((function(r){var n,a=t===r.properties.st_nm&&(i.view===c.k.STATES||e===(null===(n=r.properties)||void 0===n?void 0:n.district));a&&this.parentNode.appendChild(this),u.E(this).attr("stroke-opacity",a?1:0)}))}),[w,s,i.option,i.view,T.stateCode,T.districtName,E]),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"svg-parent"},p.a.createElement("svg",{id:"chart",viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:y},p.a.createElement("g",{className:"regions"}),p.a.createElement("g",{className:"state-borders"}),i.view===c.k.DISTRICTS&&p.a.createElement("g",{className:"district-borders"}),i.option===c.h.HOTSPOTS&&p.a.createElement("g",{className:"circles"})),A.mapType===c.j.STATE&&!!j(null===(e=s[i.code])||void 0===e||null===(r=e.districts)||void 0===r?void 0:r[c.x],E)&&p.a.createElement("div",{className:"disclaimer"},p.a.createElement(h.a,null),k("District-wise {{statistic}} numbers need reconciliation",{statistic:k(E)}))),C&&p.a.createElement(v,{data:s,mapScale:C,mapOption:i.option,statistic:E}),p.a.createElement("svg",{style:{position:"absolute",height:0}},p.a.createElement("defs",null,p.a.createElement("filter",{id:"balance-color",colorInterpolationFilters:"sRGB"},p.a.createElement("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})))))}}}]);
//# sourceMappingURL=MapVisualizer.ce55c72f.chunk.js.map