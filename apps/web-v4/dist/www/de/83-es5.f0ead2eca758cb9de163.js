/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{Rzln:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),r=t("pMnS"),a=t("Mr+X"),u=t("SMsm"),i=t("lzlj"),c=t("Ip0R"),s=t("FVSy"),d=t("MO+k"),p=function(){function n(){}return n.prototype.ngAfterViewInit=function(){this.counterEntityPlot&&this.initializeChart()},n.prototype.initializeChart=function(){var n=document.getElementById(this.counterEntityPlot.meta.chartId).getContext("2d");new d.Chart(n,{type:this.counterEntityPlot.meta.graphType,data:{labels:this.counterEntityPlot.data.map(function(n){return new Date(n.time).getHours()+":"+new Date(n.time).getMinutes()}),datasets:[{label:this.counterEntityPlot.meta.graphLabel,data:this.counterEntityPlot.data.map(function(n){return n.count}),fill:!1,borderColor:this.counterEntityPlot.meta.borderColor,borderWidth:1.2,lineTension:.4,pointStyle:"circle",pointRadius:1.8,pointHoverRadius:3.6,pointHitRadius:4}]},options:{responsive:!0,scales:{xAxes:[{scaleLabel:{display:!0,labelString:this.counterEntityPlot.meta.xLabel}}],yAxes:[{scaleLabel:{display:!0,labelString:this.counterEntityPlot.meta.yLabel}}]},layout:{padding:{left:0}},legend:{display:!0},title:{display:!0,position:"top",text:this.counterEntityPlot.meta.graphTitle}}})},n}(),h=e["\u0275crt"]({encapsulation:0,styles:[[".counter-head[_ngcontent-%COMP%]{background:#000;text-align:center;color:#ffffab;padding:24px}.counter-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:50px;width:50px;height:50px}.counter-head[_ngcontent-%COMP%]   .header-highlight[_ngcontent-%COMP%]{font-size:3.5rem!important;line-height:1.6;color:#fff}"]],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","counter-head"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),e["\u0275did"](2,9158656,null,0,u.b,[e.ElementRef,u.d,[8,null],[2,u.a]],null,null),(n()(),e["\u0275ted"](3,0,["",""])),(n()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","header-highlight"]],null,null,null,null,null)),(n()(),e["\u0275ted"](5,null,["",""])),(n()(),e["\u0275eld"](6,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](7,null,["",""]))],function(n,l){n(l,2,0)},function(n,l){var t=l.component;n(l,1,0,e["\u0275nov"](l,2).inline,"primary"!==e["\u0275nov"](l,2).color&&"accent"!==e["\u0275nov"](l,2).color&&"warn"!==e["\u0275nov"](l,2).color),n(l,3,0,null==t.counterEntityPlot?null:null==t.counterEntityPlot.meta?null:null==t.counterEntityPlot.meta.header?null:t.counterEntityPlot.meta.header.icon),n(l,5,0,null==t.counterEntityPlot?null:null==t.counterEntityPlot.meta?null:null==t.counterEntityPlot.meta.header?null:t.counterEntityPlot.meta.header.value),n(l,7,0,null==t.counterEntityPlot?null:null==t.counterEntityPlot.meta?null:null==t.counterEntityPlot.meta.header?null:t.counterEntityPlot.meta.header.txt)})}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"mat-card",[["class","mat-card"]],null,null,null,i.d,i.a)),e["\u0275prd"](512,null,c.I,c.J,[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](2,278528,null,0,c.r,[c.I],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](3,{"background-color":0}),e["\u0275did"](4,49152,null,0,s.a,[],null,null),(n()(),e["\u0275and"](16777216,null,0,1,null,m)),e["\u0275did"](6,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](7,0,null,0,1,"canvas",[["height","350"],["width","380"]],[[8,"id",0]],null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Your browser does not support the canvas element."]))],function(n,l){var t=l.component,e=n(l,3,0,t.counterEntityPlot.meta.backgroundColor);n(l,2,0,e),n(l,6,0,null==t.counterEntityPlot?null:null==t.counterEntityPlot.meta?null:t.counterEntityPlot.meta.header)},function(n,l){var t=l.component;n(l,7,0,null==t.counterEntityPlot?null:null==t.counterEntityPlot.meta?null:t.counterEntityPlot.meta.chartId)})}var g=t("FbN9"),b=t("8mMr"),y=t("dWZg"),v=t("bujt"),C=t("ZYCi"),x=t("UodH"),P=t("lLAP"),w=t("wFw1"),R=t("jWOC"),E=t("sFxA"),_=t("r4Kj"),O=t("xXU7"),M=function(){function n(n,l,t,e){this.route=n,this.counterSvc=l,this.routingSvc=t,this.configSvc=e,this.platformName=this.configSvc.instanceConfig.platform.appName,this.hasErrorFetching=!1,this.counterResolverResponse=this.route.snapshot.data.platform}return n.prototype.ngOnInit=function(){var n=this;this.counterResolverResponse.error?this.hasErrorFetching=!0:this.processCounterData(this.counterResolverResponse.data),this.counterSubscription=Object(O.a)(12e4).subscribe(function(){n.fetchCounterData()})},n.prototype.ngOnDestroy=function(){this.counterSubscription&&this.counterSubscription.unsubscribe()},n.prototype.fetchCounterData=function(){var n=this;this.counterSvc.fetchPlatformCounterData().subscribe(function(l){n.hasErrorFetching=!1,n.processCounterData(l)},function(l){n.hasErrorFetching=!0})},n.prototype.processCounterData=function(n){this.graphs={users:{data:n.users,meta:{chartId:"user",graphLabel:"Users",graphTitle:"Users",graphType:"line",xLabel:"time",yLabel:"Users",borderColor:"#f69b1e",backgroundColor:"#fdf1de",header:{icon:"people_outline",value:n.users[n.users.length-1].count,txt:"Total unique learners on "+this.platformName}}},load:{data:n.load,meta:{chartId:"load",graphLabel:"Average Requests",graphTitle:"Load",graphType:"line",xLabel:"time",yLabel:"Requests per s",borderColor:"#3f51b5",backgroundColor:"#ebedfd",header:{icon:"timer",value:n.load[n.load.length-1].count,txt:"Average request per second"}}},learners:{data:n.learners,meta:{chartId:"learner",graphLabel:"Active Learners",graphTitle:"Learners",graphType:"line",xLabel:"time",yLabel:"Learners",borderColor:"#ff6384",backgroundColor:"#fcebee",header:{icon:"notifications_none",value:n.learners[n.learners.length-1].count,txt:"Active Learners in last 5 mins"}}}}},n}(),L=e["\u0275crt"]({encapsulation:0,styles:[[".counter-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.counter-container[_ngcontent-%COMP%]   ws-counter-entity[_ngcontent-%COMP%]{margin:12px}@media only screen and (max-width:959px){.counter-container[_ngcontent-%COMP%]{-ms-flex-direction:column;flex-direction:column}}"]],data:{}});function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ws-counter-entity",[],null,null,null,f,h)),e["\u0275did"](1,4243456,null,0,p,[],{counterEntityPlot:[0,"counterEntityPlot"]},null)],function(n,l){n(l,1,0,l.component.graphs.users)},null)}function D(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ws-counter-entity",[],null,null,null,f,h)),e["\u0275did"](1,4243456,null,0,p,[],{counterEntityPlot:[0,"counterEntityPlot"]},null)],function(n,l){n(l,1,0,l.component.graphs.load)},null)}function S(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ws-counter-entity",[],null,null,null,f,h)),e["\u0275did"](1,4243456,null,0,p,[],{counterEntityPlot:[0,"counterEntityPlot"]},null)],function(n,l){n(l,1,0,l.component.graphs.learners)},null)}function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h2",[["class","margin-top-m text-center"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Failed to update counter data. Please retry / refresh"]))],null,null)}function T(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,14,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,g.b,g.a)),e["\u0275did"](1,4243456,null,1,b.a,[e.ElementRef,y.a,c.d],{color:[0,"color"]},null),e["\u0275qud"](603979776,1,{_toolbarRows:1}),(n()(),e["\u0275eld"](3,0,null,0,5,"a",[["mat-icon-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),"click"===l&&(o=!1!==e["\u0275nov"](n,5)._haltDisabledEvents(t)&&o),o},v.c,v.a)),e["\u0275did"](4,671744,null,0,C.r,[C.o,C.a,c.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),e["\u0275did"](5,180224,null,0,x.a,[y.a,P.h,e.ElementRef,[2,w.a]],null,null),(n()(),e["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),e["\u0275did"](7,9158656,null,0,u.b,[e.ElementRef,u.d,[8,null],[2,u.a]],null,null),(n()(),e["\u0275ted"](-1,0,["arrow_back"])),(n()(),e["\u0275eld"](9,0,null,0,5,"span",[["class","margin-left-xs"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e["\u0275ted"](11,null,["",""])),(n()(),e["\u0275ted"](-1,null,["\xa0 "])),(n()(),e["\u0275eld"](13,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Counter"])),(n()(),e["\u0275eld"](15,0,null,null,6,"div",[["class","counter-container mat-accent-background"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](17,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](19,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](21,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](23,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,4,0,t.routingSvc.getLastUrl().qparams,t.routingSvc.getLastUrl().fragment,t.routingSvc.getLastUrl().route),n(l,7,0),n(l,17,0,null==t.graphs?null:t.graphs.users),n(l,19,0,null==t.graphs?null:t.graphs.load),n(l,21,0,null==t.graphs?null:t.graphs.learners),n(l,23,0,t.hasErrorFetching)},function(n,l){var t=l.component;n(l,0,0,e["\u0275nov"](l,1)._toolbarRows.length>0,0===e["\u0275nov"](l,1)._toolbarRows.length),n(l,3,0,e["\u0275nov"](l,4).target,e["\u0275nov"](l,4).href,e["\u0275nov"](l,5).disabled?-1:e["\u0275nov"](l,5).tabIndex||0,e["\u0275nov"](l,5).disabled||null,e["\u0275nov"](l,5).disabled.toString(),"NoopAnimations"===e["\u0275nov"](l,5)._animationMode),n(l,6,0,e["\u0275nov"](l,7).inline,"primary"!==e["\u0275nov"](l,7).color&&"accent"!==e["\u0275nov"](l,7).color&&"warn"!==e["\u0275nov"](l,7).color),n(l,11,0,t.platformName)})}function F(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ws-platform-counter",[],null,null,null,T,L)),e["\u0275did"](1,245760,null,0,M,[C.a,R.a,E.a,_.a],null,null)],function(n,l){n(l,1,0)},null)}var A=e["\u0275ccf"]("ws-platform-counter",M,F,{},{},[]),j=function(){function n(n,l,t){this.route=n,this.counterSvc=l,this.routingSvc=t,this.hasErrorFetching=!1,this.counterResolverResponse=this.route.snapshot.data.infyme,this.graphs={data:[],meta:{chartId:"infyme",graphLabel:"Downloads",graphTitle:"Downloads",graphType:"line",xLabel:"time",yLabel:"Downloads",borderColor:"#f69b1e",backgroundColor:"#fdf1de"}},this.counterResolverResponse.error?this.hasErrorFetching=!0:this.counterData=this.counterResolverResponse.data}return n.prototype.ngAfterViewInit=function(){var n=this;this.counterResolverResponse.error||this.processCounterData(),Object(O.a)(12e4).subscribe(function(){n.fetchCounterData()})},n.prototype.fetchCounterData=function(){var n=this;this.counterSvc.fetchInfyMeCounterData().subscribe(function(l){n.hasErrorFetching=!1,n.counterData=l,n.processCounterData()},function(l){n.hasErrorFetching=!0})},n.prototype.processCounterData=function(){this.graphs.data=this.counterData.downloads,this.updateChart()},n.prototype.updateChart=function(){var n=document.getElementById(this.graphs.meta.chartId).getContext("2d");new d.Chart(n,{type:this.graphs.meta.graphType,data:{labels:this.graphs.data.map(function(n){return new Date(n.date).toDateString()}),datasets:[{label:this.graphs.meta.graphLabel,data:this.graphs.data.map(function(n){return n.count}),fill:!1,borderColor:this.graphs.meta.borderColor,borderWidth:1.2,lineTension:.4,pointStyle:"circle",pointRadius:.5,pointHoverRadius:3.6,pointHitRadius:4}]},options:{responsive:!0,scales:{xAxes:[{scaleLabel:{display:!0,labelString:this.graphs.meta.xLabel}}],yAxes:[{scaleLabel:{display:!0,labelString:this.graphs.meta.yLabel}}]},layout:{padding:{left:0}},legend:{display:!0},title:{display:!0,position:"top",text:this.graphs.meta.graphTitle}}})},n}(),q=e["\u0275crt"]({encapsulation:0,styles:[[".infyme-counter-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;max-width:1100px;margin:auto;padding:24px 64px}.infyme-counter-container[_ngcontent-%COMP%]   .count-container[_ngcontent-%COMP%]{width:25%;margin-right:32px;display:block}.infyme-counter-container[_ngcontent-%COMP%]   .count-container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]{background:#000;text-align:center;color:#ffffab;padding:24px;margin-bottom:16px}.infyme-counter-container[_ngcontent-%COMP%]   .count-container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   .header-highlight[_ngcontent-%COMP%]{font-size:2.5rem!important;margin:0;line-height:1.6;color:#fff}@media only screen and (max-width:599px){.infyme-counter-container[_ngcontent-%COMP%]   .count-container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   .header-highlight[_ngcontent-%COMP%]{font-size:2rem!important}.infyme-counter-container[_ngcontent-%COMP%]   .count-container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]{margin:0;padding:16px;width:39%}.infyme-counter-container[_ngcontent-%COMP%]   .count-container[_ngcontent-%COMP%]{margin:0;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}}.infyme-counter-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:calc(75% - $size-xl);margin:0;box-sizing:border-box}@media only screen and (max-width:599px){.infyme-counter-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{margin-top:24px;width:100%}.infyme-counter-container[_ngcontent-%COMP%]{-ms-flex-direction:column;flex-direction:column;padding:16px}}"]],data:{}});function U(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","count-container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,5,"mat-card",[["class","counter-box mat-card"]],null,null,null,i.d,i.a)),e["\u0275did"](2,49152,null,0,s.a,[],null,null),(n()(),e["\u0275eld"](3,0,null,0,1,"h1",[["class","header-highlight"]],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,["",""])),(n()(),e["\u0275eld"](5,0,null,0,1,"div",[["class","text-truncate"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Total Downloads"])),(n()(),e["\u0275eld"](7,0,null,null,5,"mat-card",[["class","counter-box mat-card"]],null,null,null,i.d,i.a)),e["\u0275did"](8,49152,null,0,s.a,[],null,null),(n()(),e["\u0275eld"](9,0,null,0,1,"h1",[["class","header-highlight"]],null,null,null,null,null)),(n()(),e["\u0275ted"](10,null,["",""])),(n()(),e["\u0275eld"](11,0,null,0,1,"div",[["class","text-truncate"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Yesterdays Downloads"]))],null,function(n,l){var t=l.component;n(l,4,0,t.counterData.totalDownloads),n(l,10,0,t.counterData.yesterdaysDownloads)})}function V(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h2",[["class","margin-top-m text-center"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Failed to update counter data. Please retry / refresh"]))],null,null)}function z(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,g.b,g.a)),e["\u0275did"](1,4243456,null,1,b.a,[e.ElementRef,y.a,c.d],{color:[0,"color"]},null),e["\u0275qud"](603979776,1,{_toolbarRows:1}),(n()(),e["\u0275eld"](3,0,null,0,5,"a",[["mat-icon-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),"click"===l&&(o=!1!==e["\u0275nov"](n,5)._haltDisabledEvents(t)&&o),o},v.c,v.a)),e["\u0275did"](4,671744,null,0,C.r,[C.o,C.a,c.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),e["\u0275did"](5,180224,null,0,x.a,[y.a,P.h,e.ElementRef,[2,w.a]],null,null),(n()(),e["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),e["\u0275did"](7,9158656,null,0,u.b,[e.ElementRef,u.d,[8,null],[2,u.a]],null,null),(n()(),e["\u0275ted"](-1,0,["arrow_back"])),(n()(),e["\u0275eld"](9,0,null,0,1,"span",[["class","margin-left-xs"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["InfyMe Counter"])),(n()(),e["\u0275eld"](11,0,null,null,9,"div",[["class","infyme-counter-container"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](13,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](14,0,null,null,6,"mat-card",[["class","chart-container width-expand mat-card"]],null,null,null,i.d,i.a)),e["\u0275prd"](512,null,c.I,c.J,[e.ElementRef,e.KeyValueDiffers,e.Renderer2]),e["\u0275did"](16,278528,null,0,c.r,[c.I],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](17,{"background-color":0}),e["\u0275did"](18,49152,null,0,s.a,[],null,null),(n()(),e["\u0275eld"](19,0,null,0,1,"canvas",[["height","350"],["width","380"]],[[8,"id",0]],null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Your browser does not support the canvas element."])),(n()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](22,16384,null,0,c.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,4,0,t.routingSvc.getLastUrl().qparams,t.routingSvc.getLastUrl().fragment,t.routingSvc.getLastUrl().route),n(l,7,0),n(l,13,0,t.counterData);var e=n(l,17,0,t.graphs.meta.backgroundColor);n(l,16,0,e),n(l,22,0,t.hasErrorFetching)},function(n,l){var t=l.component;n(l,0,0,e["\u0275nov"](l,1)._toolbarRows.length>0,0===e["\u0275nov"](l,1)._toolbarRows.length),n(l,3,0,e["\u0275nov"](l,4).target,e["\u0275nov"](l,4).href,e["\u0275nov"](l,5).disabled?-1:e["\u0275nov"](l,5).tabIndex||0,e["\u0275nov"](l,5).disabled||null,e["\u0275nov"](l,5).disabled.toString(),"NoopAnimations"===e["\u0275nov"](l,5)._animationMode),n(l,6,0,e["\u0275nov"](l,7).inline,"primary"!==e["\u0275nov"](l,7).color&&"accent"!==e["\u0275nov"](l,7).color&&"warn"!==e["\u0275nov"](l,7).color),n(l,19,0,null==t.graphs?null:null==t.graphs.meta?null:t.graphs.meta.chartId)})}function N(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ws-infyme-counter",[],null,null,null,z,q)),e["\u0275did"](1,4243456,null,0,j,[C.a,R.a,E.a],null,null)],null,null)}var K=e["\u0275ccf"]("ws-infyme-counter",j,N,{},{},[]),H=t("F/XL"),Y=t("67Y/"),W=t("9Z1F"),J=function(){function n(n){this.counterSvc=n}return n.prototype.resolve=function(n,l){return this.counterSvc.fetchPlatformCounterData().pipe(Object(Y.a)(function(n){return{data:n,error:null}}),Object(W.a)(function(n){return Object(H.a)({data:null,error:n})}))},n}(),X=function(){function n(n){this.counterSvc=n}return n.prototype.resolve=function(n,l){return this.counterSvc.fetchInfyMeCounterData().pipe(Object(Y.a)(function(n){return{data:n,error:null}}),Object(W.a)(function(n){return Object(H.a)({data:null,error:n})}))},n}(),Z=function(){return function(){}}(),B=t("Fzqc"),G=t("Wf4p"),$=t("ZYjt");t.d(l,"CounterModuleNgFactory",function(){return Q});var Q=e["\u0275cmf"](o,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,A,K]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.q,c.p,[e.LOCALE_ID,[2,c.L]]),e["\u0275mpd"](4608,J,J,[R.a]),e["\u0275mpd"](4608,X,X,[R.a]),e["\u0275mpd"](1073742336,c.c,c.c,[]),e["\u0275mpd"](1073742336,C.s,C.s,[[2,C.x],[2,C.o]]),e["\u0275mpd"](1073742336,Z,Z,[]),e["\u0275mpd"](1073742336,B.a,B.a,[]),e["\u0275mpd"](1073742336,G.n,G.n,[[2,G.f],[2,$.f]]),e["\u0275mpd"](1073742336,b.b,b.b,[]),e["\u0275mpd"](1073742336,y.b,y.b,[]),e["\u0275mpd"](1073742336,G.y,G.y,[]),e["\u0275mpd"](1073742336,x.c,x.c,[]),e["\u0275mpd"](1073742336,u.c,u.c,[]),e["\u0275mpd"](1073742336,s.g,s.g,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](256,e.LOCALE_ID,"de",[]),e["\u0275mpd"](1024,C.m,function(){return[[{path:"",pathMatch:"full",component:M,resolve:{platform:J}},{path:"infy-me",component:j,resolve:{infyme:X}}]]},[]),e["\u0275mpd"](256,e.TRANSLATIONS_FORMAT,"xlf",[])])})},xXU7:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t("6blF"),o=t("T1DM"),r=t("/21U");function a(n,l){return void 0===n&&(n=0),void 0===l&&(l=o.a),(!Object(r.a)(n)||n<0)&&(n=0),l&&"function"==typeof l.schedule||(l=o.a),new e.a(function(t){return t.add(l.schedule(u,n,{subscriber:t,counter:0,period:n})),t})}function u(n){var l=n.subscriber,t=n.counter,e=n.period;l.next(t),this.schedule({subscriber:l,counter:t+1,period:e},e)}}}]);