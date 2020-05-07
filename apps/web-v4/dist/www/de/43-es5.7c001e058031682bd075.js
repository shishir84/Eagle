/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{Jmk9:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("XlPw"),i=n("VX4o"),o=n("CcnG"),s=n("t/Na"),a=function(){function t(t,e){this.http=t,this.telemetrySvc=e,this.API_BASE="/clientApi/v2",this.USER_API=this.API_BASE+"/user",this.apiEndpoints={USER_HISTORY:this.USER_API+"/history",USER_CONTINUE_LEARNING:this.USER_API+"/history/continue"}}return t.prototype.fetchContinueLearning=function(t,e,n){return this.http.get(this.apiEndpoints.USER_CONTINUE_LEARNING+"?pageSize="+t+(e?"&pageState="+e:"")+(n?"&email="+n:""))},t.prototype.saveContinueLearning=function(t,e){var n=this.apiEndpoints.USER_CONTINUE_LEARNING;return Object.keys(t).length?this.http.post(n,t):(this.telemetrySvc.errorTelemetryEvent(n,t,e),Object(r.a)({message:"EMPTY_REQUEST"}))},t.prototype.fetchContentContinueLearning=function(t){return this.http.get(this.apiEndpoints.USER_CONTINUE_LEARNING+"/"+t)},t.prototype.addHistory=function(t){return this.http.post(this.apiEndpoints.USER_HISTORY+"/"+t,{})},t.prototype.deleteHistory=function(t){return this.http.delete(this.apiEndpoints.USER_HISTORY+"/"+t)},t.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new t(o["\u0275\u0275inject"](s.c),o["\u0275\u0275inject"](i.a))},token:t,providedIn:"root"}),t}()},PnTj:function(t,e,n){"use strict";var r=n("mrSG"),i=n("bne5"),o=n("VnD/"),s=n("5DKC"),a=n("F/XL"),c=n("9Z1F"),u=n("CcnG"),h=n("t/Na"),p=function(){function t(t){this.http=t,this.apiEndpoints={setCookie:s.c+"/videojs/setCookie",setS3Cookie:s.d+"/setS3Cookie/setCookie"}}return t.prototype.setVideoCookie=function(t){return this.http.post(this.apiEndpoints.setCookie,{path:t}).pipe(Object(c.a)(function(t){return Object(a.a)(!0)}))},t.prototype.setS3Cookie=function(t){return this.http.post(this.apiEndpoints.setS3Cookie,{path:t}).pipe(Object(c.a)(function(t){return Object(a.a)(!0)}))},t.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new t(u["\u0275\u0275inject"](h.c))},token:t,providedIn:"root"}),t}(),d=n("hFHK"),l=n("NBun"),f=n("oVAt"),_=n("vPp1");n.d(e,"a",function(){return y});var m=new Set(Object.values(d.a)),v=function(t){function e(e){var n=t.call(this,e)||this;return n.code=e,n}return r.__extends(e,t),e}(Error),y=function(){function t(t,e,n,r,i){this.http=t,this.contentSvc=e,this.miscSvc=n,this.historySvc=r,this.s3ContentApi=i,this.initGlobalDataRequestResponder()}return t.prototype.updateViewCountAndHistoryOnLoad=function(t,e){this.contentSvc.updateViewCount(e).toPromise(),t&&t!==e&&this.historySvc.saveContinueLearning({contextPathId:t,resourceId:e,percentComplete:0,data:JSON.stringify({timestamp:Date.now()})},e).toPromise().catch(function(t){return console.warn(t)}),this.historySvc.addToHistory(e)},t.prototype.processResponse=function(t){return r.__awaiter(this,void 0,void 0,function(){var e,n,i,o,s,a;return r.__generator(this,function(r){switch(r.label){case 0:e={id:t.id,data:null},n=this.resumePoint(t.contentId),r.label=1;case 1:return r.trys.push([1,5,,6]),[4,this.fetchContentAndValidate(t.contentId)];case 2:return i=r.sent(),o=e,[4,this.transformContent(i)];case 3:return o.data=r.sent(),s=e.data,[4,n];case 4:return s.resumeData=r.sent(),[3,6];case 5:return a=r.sent(),e.error=a.code||"UNKNOWN_ERROR",[3,6];case 6:return[2,e]}})})},t.prototype.fetchContentAndValidate=function(t){return r.__awaiter(this,void 0,void 0,function(){var e,n;return r.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.contentSvc.fetchContent(t).toPromise()];case 1:if("Resource"!==(e=r.sent()).contentType&&"Knowledge Artifact"!==e.contentType)throw new v("INVALID_RESOURCE");if(!m.has(e.mimeType))throw new v("INVALID_MIME");return[2,e];case 2:throw n=r.sent(),new v(n&&n.code||"UNKNOWN_ERROR");case 3:return[2]}})})},t.prototype.transformContent=function(t){return r.__awaiter(this,void 0,void 0,function(){var e,n,i,o,s,a,c,u,h;return r.__generator(this,function(p){switch(p.label){case 0:return t.artifactUrl.indexOf("content-store")>=0?[4,this.setS3Cookie(t.artifactUrl)]:[3,2];case 1:p.sent(),p.label=2;case 2:if("Certification"===t.resourceType)return[2,{content:r.__assign({},t,{mimeType:d.a.certification})}];switch(t.mimeType){case d.a.mp4:return[3,3];case d.a.m3u8:return[3,5];case d.a.quiz:return[3,7];case d.a.webModule:case d.a.webModuleExercise:return[3,9];case d.a.collectionResource:return[3,11];case d.a.handson:return[3,13];case d.a.classDiagram:return[3,15];case d.a.rdbms:return[3,17];case d.a.interaction:return[3,19]}return[3,22];case 3:return[4,this.transformVideo(t)];case 4:return e=p.sent(),[2,{content:t,video:e}];case 5:return[4,this.setVideojsCookie(t.artifactUrl)];case 6:return p.sent(),[2,{content:t}];case 7:return[4,this.transformQuiz(t)];case 8:return n=p.sent(),[2,{content:t,quiz:n}];case 9:return[4,this.transformWebModule(t)];case 10:return i=p.sent(),[2,{content:t,webModule:i}];case 11:return[4,this.transformCollectionResource(t)];case 12:return o=p.sent(),[2,{content:t,collectionResource:o}];case 13:return[4,this.transformHandsOn(t)];case 14:return s=p.sent(),[2,{content:t,handsOn:s}];case 15:return[4,this.transformClassDiagram(t)];case 16:return a=p.sent(),[2,{content:t,classDiagram:a}];case 17:return[4,this.transformDbmsModule(t)];case 18:return c=p.sent(),[2,{content:t,rdbms:c}];case 19:return[4,this.transformInteractions(t)];case 20:return u=p.sent(),[4,this.transformVideo(t)];case 21:return h=p.sent(),[2,{content:t,interactions:u,video:h}];case 22:return[2,{content:t}]}})})},t.prototype.transformVideo=function(t){return r.__awaiter(this,void 0,void 0,function(){var e,n,i;return r.__generator(this,function(r){switch(r.label){case 0:if(e={file:t.artifactUrl,streamingToken:null,manifest:null},!(t.msArtifactDetails&&t.msArtifactDetails.channelId&&t.msArtifactDetails.videoId))return[2,e];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.miscSvc.fetchVideoTokens(t.msArtifactDetails.channelId,t.msArtifactDetails.videoId).toPromise()];case 2:return n=r.sent(),i=n.manifest,e.streamingToken=n.streamingToken,e.manifest=i,[2,e];case 3:return r.sent(),[3,4];case 4:return[2,e]}})})},t.prototype.transformQuiz=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new v("MANIFEST_FETCH_FAILED")})];case 1:return[2,e.sent()]}})})},t.prototype.transformHandsOn=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new v("MANIFEST_FETCH_FAILED")})];case 1:return[2,e.sent()]}})})},t.prototype.transformClassDiagram=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new v("MANIFEST_FETCH_FAILED")})];case 1:return[2,e.sent()]}})})},t.prototype.transformDbmsModule=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise()];case 1:return[2,e.sent()]}})})},t.prototype.transformWebModule=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new v("MANIFEST_FETCH_FAILED")})];case 1:return[2,e.sent()]}})})},t.prototype.transformCollectionResource=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new v("MANIFEST_FETCH_FAILED")})];case 1:return[2,e.sent()]}})})},t.prototype.transformInteractions=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.http.get(t.artifactUrl).toPromise().catch(function(t){throw new v("MANIFEST_FETCH_FAILED")})];case 1:return[2,e.sent()]}})})},t.prototype.resumePoint=function(t){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.historySvc.fetchContentContinueLearning(t).toPromise()];case 1:return(e=n.sent())&&Array.isArray(e.results)&&e.results.length>0&&e.results[0].continueLearningData?[2,e.results[0].continueLearningData.data]:[3,3];case 2:return n.sent(),[3,3];case 3:return[2,null]}})})},t.prototype.setVideojsCookie=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.s3ContentApi.setVideoCookie(t).toPromise().catch(function(t){throw new v("COOKIE_SET_FAILURE")})];case 1:return e.sent(),[2]}})})},t.prototype.setS3Cookie=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return[4,this.s3ContentApi.setS3Cookie(t).toPromise().catch(function(t){throw new v("COOKIE_SET_FAILURE")})];case 1:return e.sent(),[2]}})})},t.prototype.initGlobalDataRequestResponder=function(){var t=this;Object(i.a)(window,"message").pipe(Object(o.a)(function(t){return t&&t.data&&"DATA_REQUEST"===t.data.type&&Boolean(t.data.data.contentId)&&Boolean(t.source)&&"function"==typeof t.source.postMessage})).subscribe(function(e){return r.__awaiter(t,void 0,void 0,function(){var t,n;return r.__generator(this,function(r){switch(r.label){case 0:return t=e.source,[4,this.processResponse(e.data.data)];case 1:return n=r.sent(),t.postMessage({app:"WEB_PLAYER",data:n,plugin:"NONE",state:"NONE",type:"DATA_RESPONSE"},"*"),[2]}})})})},t.prototype.resumePointStringToProgressNumber=function(t){try{var e=JSON.parse(t),n=parseInt(e.progress.toString(),10);return Number.isNaN(n)||Math.round(n)!==n?0:n}catch(r){return 0}},t.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new t(u["\u0275\u0275inject"](h.c),u["\u0275\u0275inject"](l.a),u["\u0275\u0275inject"](_.a),u["\u0275\u0275inject"](f.a),u["\u0275\u0275inject"](p))},token:t,providedIn:"root"}),t}()},oVAt:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("Jmk9"),i=n("CcnG"),o=function(){function t(t){this.historyApiSvc=t}return t.prototype.fetchContinueLearning=function(t,e,n){return this.historyApiSvc.fetchContinueLearning(t,e,n)},t.prototype.fetchContentContinueLearning=function(t){return this.historyApiSvc.fetchContentContinueLearning(t)},t.prototype.saveContinueLearning=function(t,e){return this.historyApiSvc.saveContinueLearning(t,e)},t.prototype.addToHistory=function(t){return this.historyApiSvc.addHistory(t)},t.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new t(i["\u0275\u0275inject"](r.a))},token:t,providedIn:"root"}),t}()},pHa5:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),i=function(){return function(){}}(),o=n("pMnS"),s=n("mrSG"),a=n("RB3e"),c=n("FISf"),u=n("PnTj"),h=function(){function t(t,e,n,i){this.route=t,this.playerDataSvc=e,this.audioSvc=n,this.viewerSvc=i,this.resourceEnded=new r.EventEmitter}return t.prototype.ngOnInit=function(){return s.__awaiter(this,void 0,void 0,function(){var t=this;return s.__generator(this,function(e){return this.paramSubscription=this.route.data.subscribe(function(e){t.processedContent=e.playerDetails.processedResource,t.collectionId=e.playerDetails.toc.identifier,t.onInItFunction()}),[2]})})},t.prototype.ngOnDestroy=function(){this.disposePlayer()},t.prototype.onInItFunction=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(t){switch(t.label){case 0:return this.processedContent&&this.processedContent.content?[4,this.loadPlayer()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},t.prototype.loadPlayer=function(){return s.__awaiter(this,void 0,void 0,function(){var t,e,n,r=this;return s.__generator(this,function(i){switch(i.label){case 0:return this.disposePlayer(),t="amp_plugin_"+Date.now()+"_"+this.processedContent.content.identifier,e=this.viewerSvc.resumePointStringToProgressNumber(this.processedContent.resumeData),this.audioContainer.nativeElement.innerHTML='<audio id="'+t+'" class="azuremediaplayer amp-flush-skin amp-big-play-centered"></audio>',n=this,[4,this.audioSvc.init(t,this.processedContent.content.artifactUrl,null,null,this.processedContent.content.appIcon,this.processedContent.content.identifier,this.processedContent.content.contentType,this.processedContent.content.mimeType,this.collectionId,e,[],{},{autoplay:!0,enableContinueLearning:!0})];case 1:return n.player=i.sent(),this.player.addEventListener("ended",function(){r.resourceEnded.emit()}),[2]}})})},t.prototype.disposePlayer=function(){this.player&&"function"==typeof this.player.dispose&&this.player.dispose()},t}(),p=n("ZYCi"),d=r["\u0275crt"]({encapsulation:0,styles:[[".audio-container[_ngcontent-%COMP%]{height:100%}"]],data:{}});function l(t){return r["\u0275vid"](0,[r["\u0275qud"](402653184,1,{audioContainer:0}),(t()(),r["\u0275eld"](1,0,[[1,0],["audioContainer",1]],null,0,"div",[["class","audio-container"]],null,null,null,null,null))],null,null)}function f(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,1,"ws-audio",[],null,null,null,l,d)),r["\u0275did"](1,245760,null,0,h,[p.a,a.a,c.a,u.a],null,null)],function(t,e){t(e,1,0)},null)}var _=r["\u0275ccf"]("ws-audio",h,f,{},{resourceEnded:"resourceEnded"},[]),m=n("Ip0R"),v=n("zsyL"),y=function(){return function(){}}();n.d(e,"AudioModuleNgFactory",function(){return w});var w=r["\u0275cmf"](i,[],function(t){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,_]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](4608,m.q,m.p,[r.LOCALE_ID,[2,m.L]]),r["\u0275mpd"](4608,v.a,v.a,[a.a]),r["\u0275mpd"](1073742336,m.c,m.c,[]),r["\u0275mpd"](1073742336,p.s,p.s,[[2,p.x],[2,p.o]]),r["\u0275mpd"](1073742336,y,y,[]),r["\u0275mpd"](1073742336,i,i,[]),r["\u0275mpd"](256,r.LOCALE_ID,"de",[]),r["\u0275mpd"](1024,p.m,function(){return[[{path:"",pathMatch:"full",component:h,resolve:{playerDetails:v.a}}]]},[]),r["\u0275mpd"](256,r.TRANSLATIONS_FORMAT,"xlf",[])])})},xXU7:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("6blF"),i=n("T1DM"),o=n("/21U");function s(t,e){return void 0===t&&(t=0),void 0===e&&(e=i.a),(!Object(o.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=i.a),new r.a(function(n){return n.add(e.schedule(a,t,{subscriber:n,counter:0,period:t})),n})}function a(t){var e=t.subscriber,n=t.counter,r=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:r},r)}}}]);