"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[592],{7741:(v,C,s)=>{s.d(C,{W:()=>r});var p=s(6814),t=s(5879),h=s(95),c=s(2030);function l(e,n){1&e&&t._uU(0," << ")}function P(e,n){1&e&&t._uU(0," >> ")}function a(e,n){1&e&&t._uU(0," < ")}function i(e,n){1&e&&t._uU(0," > ")}function d(e,n){1&e&&t._uU(0," ... ")}function y(e,n){1&e&&t._uU(0),2&e&&t.hij(" ",n.$implicit," ")}function u(e,n){if(1&e&&(t.TgZ(0,"option",11),t._uU(1),t.qZA()),2&e){const o=n.$implicit,g=t.oxw();t.Q6J("value",o.value)("selected",o.value==g.currentPageLimit),t.xp6(1),t.hij(" ",o.value," item per page ")}}let r=(()=>{class e{constructor(){this.page=1,this.pageChange=new t.vpe,this.pageSize=25,this.pageSizeChange=new t.vpe,this.collection=0,this.collectionChange=new t.vpe,this.myOutput=new t.vpe,this.itemsPerPage=25,this.currentPageLimit=25,this.pageLimitOptions=[{value:10},{value:25},{value:50},{value:100},{value:150},{value:200}]}ngAfterViewInit(){}ngOnInit(){}onChangePage(o){this.pageChange.emit(this.page),this.pageSizeChange.emit(this.pageSize),this.collectionChange.emit(this.collection),this.myOutput.emit(o)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-pagination"]],inputs:{page:"page",pageSize:"pageSize",collection:"collection"},outputs:{pageChange:"pageChange",pageSizeChange:"pageSizeChange",collectionChange:"collectionChange",myOutput:"myOutput"},standalone:!0,features:[t.jDz],decls:12,vars:8,consts:[[1,"row","justify-content-between","align-items-center","pt-2","pagination-sm","m-0"],[1,"col-md-auto"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"],["ngbPaginationFirst",""],["ngbPaginationLast",""],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationEllipsis",""],["ngbPaginationNumber","","class","custompage"],[1,"form-select",3,"ngModel","ngModelChange","change"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:function(o,g){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ngb-pagination",2),t.NdJ("pageChange",function(_){return g.page=_})("pageChange",function(){return g.onChangePage(g.page)}),t.YNc(3,l,1,0,"ng-template",3),t.YNc(4,P,1,0,"ng-template",4),t.YNc(5,a,1,0,"ng-template",5),t.YNc(6,i,1,0,"ng-template",6),t.YNc(7,d,1,0,"ng-template",7),t.YNc(8,y,1,1,"ng-template",8),t.qZA()(),t.TgZ(9,"div",1)(10,"select",9),t.NdJ("ngModelChange",function(_){return g.pageSize=_})("change",function(_){return g.onChangePage(_)}),t.YNc(11,u,2,3,"option",10),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("collectionSize",g.collection)("page",g.page)("pageSize",g.pageSize)("maxSize",5)("rotate",!0)("boundaryLinks",!0),t.xp6(8),t.Q6J("ngModel",g.pageSize),t.xp6(1),t.Q6J("ngForOf",g.pageLimitOptions))},dependencies:[p.ez,p.sg,c.jF,c.N9,c.tg,c.eC,c.pV,c.GZ,c.LD,c.ju,h.u5,h.YN,h.Kr,h.EJ,h.JJ,h.On],encapsulation:2}),e})()},4495:(v,C,s)=>{s.d(C,{s:()=>y});var p=s(9862),t=s(3997),h=s(7398),c=s(8645),l=s(4552);class P extends c.x{constructor(r=1/0,e=1/0,n=l.l){super(),this._bufferSize=r,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,r),this._windowTime=Math.max(1,e)}next(r){const{isStopped:e,_buffer:n,_infiniteTimeWindow:o,_timestampProvider:g,_windowTime:m}=this;e||(n.push(r),!o&&n.push(g.now()+m)),this._trimBuffer(),super.next(r)}_subscribe(r){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(r),{_infiniteTimeWindow:n,_buffer:o}=this,g=o.slice();for(let m=0;m<g.length&&!r.closed;m+=n?1:2)r.next(g[m]);return this._checkFinalizedStatuses(r),e}_trimBuffer(){const{_bufferSize:r,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:o}=this,g=(o?1:2)*r;if(r<1/0&&g<n.length&&n.splice(0,n.length-g),!o){const m=e.now();let _=0;for(let f=1;f<n.length&&n[f]<=m;f+=2)_=f;_&&n.splice(0,_+1)}}}var a=s(3020);function i(u,r,e){let n,o=!1;return u&&"object"==typeof u?({bufferSize:n=1/0,windowTime:r=1/0,refCount:o=!1,scheduler:e}=u):n=u??1/0,(0,a.B)({connector:()=>new P(n,r,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}var d=s(5879);let y=(()=>{class u{constructor(e){this.httpClient=e,this.options={headers:(new p.WM).set("Content-Type","application/json")}}private(){return`${location.protocol}//${location.hostname+(location.port?":"+location.port:"")}/`}get(e,n=new p.LE){return(0,t.x)(),this.httpClient.get(e,{params:n}).pipe((0,h.U)(o=>o.result),i())}put(e,n={}){return(0,t.x)(),this.httpClient.put(e,n).pipe((0,h.U)(o=>o.result))}post(e,n={}){return(0,t.x)(),this.httpClient.post(e,n).pipe((0,h.U)(o=>o.result))}delete(e){return(0,t.x)(),this.httpClient.delete(e).pipe((0,h.U)(n=>n.result),i())}getFile(e,n=new p.LE){return this.httpClient.get(e,{responseType:"blob",headers:(new p.WM).append("Content-Type","application/json")})}getIp(){return(0,t.x)(),this.httpClient.get("https://ipapi.co/json/").pipe(i())}}return u.\u0275fac=function(e){return new(e||u)(d.LFG(p.eN))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},450:(v,C,s)=>{s.d(C,{H:()=>c});var p=s(7398),t=s(5879),h=s(4495);let c=(()=>{class l{constructor(a){this.http=a,this.routes={createPath:"categories/addCategories",getAllPath:"categories/getAll",updatePath:i=>`categories/updateCategory/${i}`,deletePath:i=>`categories/deleteById/${i}`,getByIdPath:i=>`categories/getCategoryById/${i}`,getParentIdPath:i=>"categories/getCategoryByParentId"}}getAllcategory(a){return this.http.get(this.routes.getAllPath,a).pipe((0,p.U)(i=>i))}createCategory(a){return this.http.post(this.routes.createPath,a).pipe((0,p.U)(i=>i))}updateCategoryById(a,i){return this.http.put(this.routes.updatePath(a),i).pipe((0,p.U)(d=>d))}deleteCategoryById(a){return this.http.delete(this.routes.deletePath(a)).pipe((0,p.U)(i=>i))}getbyId(a){return this.http.get(this.routes.getByIdPath(a)).pipe((0,p.U)(i=>i))}getParentId(){return this.http.get(this.routes.getParentIdPath()).pipe((0,p.U)(a=>a))}}return l.\u0275fac=function(a){return new(a||l)(t.LFG(h.s))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},5e3:(v,C,s)=>{s.d(C,{c:()=>c});var p=s(7398),t=s(5879),h=s(4495);let c=(()=>{class l{constructor(a){this.http=a,this.routes={createPath:"tag/addTag",getAllPath:"tag/getAll",updatePath:i=>`tag/updateTag/${i}`,deletePath:i=>`tag/deleteById/${i}`,getByIdPath:i=>`tag/getTagById/${i}`}}getAllTag(a){return this.http.get(this.routes.getAllPath,a)}createTag(a){return this.http.post(this.routes.createPath,a).pipe((0,p.U)(i=>i))}updateTagById(a,i){return this.http.put(this.routes.updatePath(a),i).pipe((0,p.U)(d=>d))}deleteTagById(a){return this.http.delete(this.routes.deletePath(a)).pipe((0,p.U)(i=>i))}getbyId(a){return this.http.get(this.routes.getByIdPath(a)).pipe((0,p.U)(i=>i))}}return l.\u0275fac=function(a){return new(a||l)(t.LFG(h.s))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);