(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[557],{2557:(B,C,g)=>{"use strict";g.r(C),g.d(C,{ProductModule:()=>X});var b=g(6814),s=g(95),U=g(7741),t=g(5879),N=g(2030),m=g(1076),_=g(7398),y=g(4495);let Z=(()=>{class r{constructor(e){this.http=e,this.routes={createProduct:"product/createProduct",getAllPath:"product/getAll",updatePath:i=>`product/updateProduct/${i}`,deletePath:i=>`product/deleteById/${i}`,getByIdPath:i=>`product/getProductById/${i}`,createproductImage:"product/addProductImage",deleteProductImageByIdPath:i=>`product/deleteProductImage/${i}`,getImagesByProductIdPath:i=>`product/getImageByProductId/${i}`}}createProduct(e){return this.http.post(this.routes.createProduct,e).pipe((0,_.U)(i=>i))}getAllProduct(e){return this.http.get(this.routes.getAllPath,e).pipe((0,_.U)(i=>i))}updateProductById(e,i){return this.http.put(this.routes.updatePath(e),i).pipe((0,_.U)(a=>a))}deleteProductById(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,_.U)(i=>i))}getbyId(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,_.U)(i=>i))}createProductImage(e){return this.http.post(this.routes.createproductImage,e).pipe((0,_.U)(i=>i))}getImagesByProductId(e){return this.http.get(this.routes.getImagesByProductIdPath(e)).pipe((0,_.U)(i=>i))}deleteProductImageById(e){return this.http.delete(this.routes.deleteProductImageByIdPath(e)).pipe((0,_.U)(i=>i))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(y.s))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var P=g(4087),k=g(9229);function x(r,l){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=l.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function L(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",34)(1,"button",35),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.KtG(d.dismiss("Cross click"))}),t.qZA()(),t.TgZ(2,"div",36)(3,"h4",37),t._uU(4," Are you sure you want to Delete ? "),t.qZA()(),t.TgZ(5,"div",38)(6,"button",39),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,d=t.oxw();return t.KtG(d.deleteProduct(a._id))}),t._uU(7," YES "),t.qZA(),t.TgZ(8,"button",40),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.KtG(d.dismiss("Cross click"))}),t._uU(9," NO "),t.qZA()()}}function E(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td",25),t._uU(2),t.qZA(),t.TgZ(3,"td",25),t._uU(4),t.qZA(),t.TgZ(5,"td",25),t._uU(6),t.qZA(),t.TgZ(7,"td",25),t.YNc(8,x,2,1,"span",23),t.qZA(),t.TgZ(9,"td",25),t._uU(10),t.qZA(),t.TgZ(11,"td",25),t._uU(12),t.qZA(),t.TgZ(13,"td",26)(14,"button",27),t.NdJ("click",function(){const d=t.CHM(e).$implicit,I=t.oxw();return t.KtG(I.navigateTo("/default/product/product-form",d._id))}),t._UZ(15,"i",28),t.qZA(),t.TgZ(16,"button",29),t.NdJ("click",function(){const d=t.CHM(e).$implicit,I=t.MAs(21),q=t.oxw();return t.KtG(q.open(d._id,I))}),t._UZ(17,"i",30),t.qZA(),t.TgZ(18,"button",31),t.NdJ("click",function(){const d=t.CHM(e).$implicit,I=t.oxw();return t.KtG(I.navigateTo("/default/product/product-view",d._id))}),t._UZ(19,"i",32),t.qZA(),t.YNc(20,L,10,0,"ng-template",null,33,t.W1O),t.qZA()()}if(2&r){const e=l.$implicit,i=l.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.productName),t.xp6(2),t.Oqu(e.salePrice),t.xp6(2),t.Q6J("ngForOf",e.categories),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.status)}}let F=(()=>{class r{constructor(e,i,a,d){this.router=e,this.productService=i,this.spinner=a,this.toastService=d,this.page=1,this.pageSize=10,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.products=[],this.modalService=(0,t.f3M)(N.FF)}updateUser(e){console.log(e)}ngOnInit(){this.getAll()}onChangePage(e){e>0&&(this.page=e),this.getAll()}open(e,i){this.selectedRow=e,this.modalService.open(i,{centered:!0})}add(){this.router.navigate(["/default/product/product-form"])}navigateTo(e,i){i?this.router.navigate([e],{queryParams:{id:i}}):this.router.navigate([e])}deleteProduct(e){this.spinner.show(),this.productService.deleteProductById(e).subscribe(i=>{console.log(i),this.spinner.hide(),this.toastService.success(i.message),this.modalService.dismissAll(),this.getAll()},i=>{console.log(i),this.spinner.hide(),this.toastService.error("Unable to Delete !")})}getAll(){this.spinner.show(),this.productService.getAllProduct({page:this.page,pageSize:this.pageSize,search:this.search}).subscribe(i=>{this.spinner.hide(),console.log("success",i),this.products=i.data,this.collection=i.count})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(m.F0),t.Y36(Z),t.Y36(P.V),t.Y36(k._W))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-list"]],decls:40,vars:4,consts:[[1,"container-fluid","table-container"],[1,"card","table-card"],[1,"card-title"],[1,"card-header"],[1,"row","justify-content-between"],[1,"col-4"],[1,"container","input-icons"],[1,"input-group","input-group-sm"],["type","search","aria-label","Small","placeholder","Search","aria-describedby","inputGroup-sizing-sm",1,"input","form-control"],[1,"input-group-append"],["id","inputGroup-sizing-sm",1,"input-group-text","h-100"],[1,"ti","ti-search"],[1,"col-md-4","col-3","text-right"],[1,"btn","add-btn",3,"click"],[1,"ti","ti-plus","me-1"],[1,"card-body","p-4"],[1,"table-responsive"],[1,"table","table-hover"],[1,"thead"],[1,"table-secondary"],["scope","col"],["scope","col",1,"mx-auto","text-center"],[1,"tbody","mt-3"],[4,"ngFor","ngForOf"],[3,"page","pageSize","collection","pageChange","pageSizeChange","collectionChange","myOutput"],["scope","row"],["scope","row",1,"text-center"],["ngbTooltip","Update",1,"btn","status-btn","btn-sm","mx-2",3,"click"],[1,"ti","ti-edit-circle"],["ngbTooltip","Delete",1,"btn","status-btn","btn-sm",3,"click"],[1,"ti","ti-trash"],["ngbTooltip","View",1,"btn","status-btn","btn-sm","mx-2",3,"click"],[1,"fa-solid","fa-eye"],["deleteModal",""],[1,"modal-header","border-0"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","border-0"],["id","modal-basic-title",1,"modal-title","text-center"],[1,"modal-footer","justify-content-center","border-0"],[1,"btn","px-4","btn-outline-danger",3,"click"],["type","button",1,"btn","px-4","btn-outline-primary",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4,"Product List"),t.qZA()(),t.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7),t._UZ(10,"input",8),t.TgZ(11,"div",9)(12,"span",10),t._UZ(13,"i",11),t.qZA()()()()(),t.TgZ(14,"div",12)(15,"button",13),t.NdJ("click",function(){return i.navigateTo("/default/product/product-form",null)}),t._UZ(16,"i",14),t._uU(17," Add Product "),t.qZA()()()(),t.TgZ(18,"div",15)(19,"div",16)(20,"table",17)(21,"thead",18)(22,"tr",19)(23,"th",20),t._uU(24,"Sr. No."),t.qZA(),t.TgZ(25,"th",20),t._uU(26,"Product"),t.qZA(),t.TgZ(27,"th",20),t._uU(28,"Price"),t.qZA(),t.TgZ(29,"th",20),t._uU(30,"Category Name"),t.qZA(),t.TgZ(31,"th",20),t._uU(32,"Quantity"),t.qZA(),t.TgZ(33,"th",20),t._uU(34,"Status"),t.qZA(),t.TgZ(35,"th",21),t._uU(36,"Action"),t.qZA()()(),t.TgZ(37,"tbody",22),t.YNc(38,E,22,6,"tr",23),t.qZA()()(),t.TgZ(39,"app-custom-pagination",24),t.NdJ("pageChange",function(d){return i.page=d})("pageSizeChange",function(d){return i.pageSize=d})("collectionChange",function(d){return i.collection=d})("myOutput",function(){return i.onChangePage(i.page)}),t.qZA()()()()),2&e&&(t.xp6(38),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("page",i.page)("pageSize",i.pageSize)("collection",i.collection))},dependencies:[b.sg,U.W,N._L]}),r})();var J=g(1090),S=g.n(J),w=g(485),h=g(450),c=g(6593),o=g(1326),n=g(5e3);function p(r,l){if(1&r&&(t.TgZ(0,"option",63),t._uU(1),t.qZA()),2&r){const e=l.$implicit;t.Q6J("value",e._id),t.xp6(1),t.hij(" ",e.name," ")}}function u(r,l){if(1&r&&(t.TgZ(0,"option",63),t._uU(1),t.qZA()),2&r){const e=l.$implicit;t.Q6J("value",e._id),t.xp6(1),t.hij(" ",e.title," ")}}let f=(()=>{class r{constructor(e,i,a,d,I,q,tt,et){this.activatedRoute=e,this.productService=i,this.spinner=a,this.toastService=d,this.categoryService=I,this.domSanitizer=q,this.validationService=tt,this.tagservice=et,this.page=1,this.pageSize=10,this.search="",this.categoryArr=[],this.tagArr=[],this.images=[],this.productId="",this.productIdChange=new t.vpe,this.file=null,this.fileName="",this.url=null,this.submitted=!1,this.FORM_ERRORS=[{message:"Product Name is Required",key:"productName"},{message:"Category is Required",key:"categoryId"}],this.productForm=new s.cw({_id:new s.NI(""),productName:new s.NI("",[s.kI.required]),categoryId:new s.NI("",[s.kI.required]),tagId:new s.NI("",[s.kI.required]),description:new s.NI(""),IGSTTax:new s.NI(""),CGSTTax:new s.NI(""),SGSTTax:new s.NI(""),inStock:new s.NI(Boolean),COD:new s.NI(Boolean),inSale:new s.NI(Boolean),favicon:new s.NI(""),qty:new s.NI(""),returnableDate:new s.NI(""),salePrice:new s.NI(""),regularPrice:new s.NI(""),sku:new s.NI(""),salePriceStarts:new s.NI(""),salePriceEnds:new s.NI(""),dispatchTime:new s.cw({startDate:new s.NI(""),endDate:new s.NI("")}),isFeatured:new s.NI(Boolean),availabilty:new s.NI(Boolean),published:new s.NI(Boolean)})}ngOnInit(){this.getAllCategories(),this.getAllTag(),this.activatedRoute.queryParams.subscribe(e=>{e.id&&(this.productId=e.id,this.productIdChange.emit(this.productId),this.getById(e.id))})}next(e){new(S())(document.querySelector(".bs-stepper"),{linear:!0,animation:!0,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}}).to(e)}getAllTag(){this.spinner.show(),this.tagservice.getAllTag({page:this.page,pageSize:this.pageSize,search:this.search}).subscribe(i=>{this.spinner.hide(),console.log("success",i),this.tagArr=i.data})}getAllCategories(){this.spinner.show(),this.categoryService.getAllcategory({page:1,pageSize:100}).subscribe(i=>{this.categoryArr=i.data,console.log("category",this.categoryArr),this.spinner.hide()})}onSubmit(){if(this.submitted=!0,this.validationService.checkErrors(this.productForm,this.FORM_ERRORS))return;let e=this.productForm.value;e._id?this.update(e._id,e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.productService.createProduct(e).subscribe(i=>{this.spinner.hide(),this.productId=i.productId,this.productIdChange.emit(this.productId),this.toastService.success(i.message)})}update(e,i){this.spinner.show(),this.productService.updateProductById(e,i).subscribe(a=>{this.spinner.hide(),this.productId=a._id,this.productIdChange.emit(this.productId),this.toastService.success(a.message)})}resetForm(){this.productForm.reset()}getById(e){this.spinner.show(),this.productService.getbyId(e).subscribe(i=>{this.productForm.patchValue(i),this.spinner.hide()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(m.gz),t.Y36(Z),t.Y36(P.V),t.Y36(w.k),t.Y36(h.H),t.Y36(c.H7),t.Y36(o.R),t.Y36(n.c))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-info-form"]],inputs:{productId:"productId"},outputs:{productIdChange:"productIdChange"},decls:210,vars:19,consts:[[1,"form-page",3,"formGroup"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["formControlName","productName","placeholder","Product Name","type","text",1,"form-control"],["formControlName","categoryId",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["formControlName","tagId",1,"form-select"],["formControlName","IGSTTax","placeholder","IGST","type","number",1,"form-control"],["formControlName","CGSTTax","placeholder","CGST","type","number",1,"form-control"],["formControlName","SGSTTax","placeholder","SGST","type","number",1,"form-control"],[1,"col-md-12"],["formControlName","description","placeholder","Description ","rows","3",1,"form-control"],[1,"d-flex"],[1,"form-check","me-3"],["type","radio","name","inStock","id","radio1","formControlName","inStock","checked","",1,"form-check-input",3,"value"],["for","radio1",1,"form-check-label"],[1,"form-check"],["type","radio","name","inStock","id","radio2","formControlName","inStock",1,"form-check-input",3,"value"],["for","radio2",1,"form-check-label"],["type","radio","name","COD","id","radio3","formControlName","COD","checked","",1,"form-check-input",3,"value"],["for","radio3",1,"form-check-label"],["type","radio","name","COD","id","radio4","formControlName","COD",1,"form-check-input",3,"value"],["for","radio4",1,"form-check-label"],["type","radio","name","inSale","id","radio5","formControlName","inSale","checked","",1,"form-check-input",3,"value"],["for","radio5",1,"form-check-label"],["type","radio","name","inSale","id","radio6","formControlName","inSale",1,"form-check-input",3,"value"],["for","radio6",1,"form-check-label"],["type","radio","name","favicon","id","radio7","formControlName","favicon","checked","",1,"form-check-input",3,"value"],["for","radio7",1,"form-check-label"],["type","radio","name","favicon","id","radio8","formControlName","favicon",1,"form-check-input",3,"value"],["for","radio8",1,"form-check-label"],["formControlName","qty","placeholder","Quantity","type","number",1,"form-control"],["formControlName","returnableDate","placeholder","Returnable Days","type","number",1,"form-control"],["formControlName","salePrice","placeholder","Sale Price","type","number",1,"form-control"],["formControlName","regularPrice","placeholder","Regular Price","type","number",1,"form-control"],["formControlName","sku","placeholder","SKU","type","text",1,"form-control"],["formControlName","salePriceStarts","type","date",1,"form-control"],["formControlName","salePriceEnds","type","date",1,"form-control"],["formGroupName","dispatchTime",1,"col-md-4"],["formControlName","startDate","type","number",1,"form-control"],["formControlName","endDate","type","number",1,"form-control"],[1,"col-md-3"],["type","radio","name","isFeatured","id","radio9","formControlName","isFeatured","checked","",1,"form-check-input",3,"value"],["for","radio9",1,"form-check-label"],["type","radio","name","isFeatured","id","radio10","formControlName","isFeatured",1,"form-check-input",3,"value"],["for","radio10",1,"form-check-label"],["type","radio","name","availabilty","id","radio11","formControlName","availabilty","checked","",1,"form-check-input",3,"value"],["for","radio11",1,"form-check-label"],["type","radio","name","availabilty","id","radio12","formControlName","availabilty",1,"form-check-input",3,"value"],["for","radio12",1,"form-check-label"],[1,"col-md-2"],["type","radio","name","published","id","radio13","formControlName","published","checked","",1,"form-check-input",3,"value"],["for","radio13",1,"form-check-label"],["type","radio","name","published","id","radio14","formControlName","published",1,"form-check-input",3,"value"],["for","radio14",1,"form-check-label"],[1,"row","justify-content-center"],[1,"col-auto"],[1,"btn","btn-primary","mt-4",3,"click"],[1,"col-12","d-flex","justify-content-end"],[1,"btn","btn-primary","next-btn",3,"disabled","click"],[1,"ti","ti-arrow-right"],[3,"value"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4," Product Name "),t.TgZ(5,"span",4),t._uU(6,"*"),t.qZA()(),t._UZ(7,"input",5),t.qZA(),t.TgZ(8,"div",2)(9,"label",3),t._uU(10," Categories "),t.TgZ(11,"span",4),t._uU(12,"*"),t.qZA()(),t.TgZ(13,"select",6),t.YNc(14,p,2,2,"option",7),t.qZA()(),t.TgZ(15,"div",2)(16,"label",3),t._uU(17," Tag "),t.TgZ(18,"span",4),t._uU(19,"*"),t.qZA()(),t.TgZ(20,"select",8),t.YNc(21,u,2,2,"option",7),t.qZA()(),t.TgZ(22,"div",2)(23,"label",3),t._uU(24," IGST Tax (%) "),t.TgZ(25,"span",4),t._uU(26,"*"),t.qZA()(),t._UZ(27,"input",9),t.qZA(),t.TgZ(28,"div",2)(29,"label",3),t._uU(30," CGST Tax (%) "),t.TgZ(31,"span",4),t._uU(32,"*"),t.qZA()(),t._UZ(33,"input",10),t.qZA(),t.TgZ(34,"div",2)(35,"label",3),t._uU(36," SGST Tax (%) "),t.TgZ(37,"span",4),t._uU(38,"*"),t.qZA()(),t._UZ(39,"input",11),t.qZA(),t.TgZ(40,"div",12)(41,"label",3),t._uU(42," Description "),t.TgZ(43,"span",4),t._uU(44,"*"),t.qZA()(),t._UZ(45,"textarea",13),t.qZA(),t.TgZ(46,"div",2)(47,"label",3),t._uU(48," In Stock "),t.TgZ(49,"span",4),t._uU(50,"*"),t.qZA()(),t.TgZ(51,"div",14)(52,"div",15),t._UZ(53,"input",16),t.TgZ(54,"label",17),t._uU(55," Yes "),t.qZA()(),t.TgZ(56,"div",18),t._UZ(57,"input",19),t.TgZ(58,"label",20),t._uU(59," No "),t.qZA()()()(),t.TgZ(60,"div",2)(61,"label",3),t._uU(62," Cash On Delivery "),t.TgZ(63,"span",4),t._uU(64,"*"),t.qZA()(),t.TgZ(65,"div",14)(66,"div",15),t._UZ(67,"input",21),t.TgZ(68,"label",22),t._uU(69," Yes "),t.qZA()(),t.TgZ(70,"div",18),t._UZ(71,"input",23),t.TgZ(72,"label",24),t._uU(73," No "),t.qZA()()()(),t.TgZ(74,"div",2)(75,"label",3),t._uU(76," In Sale "),t.TgZ(77,"span",4),t._uU(78,"*"),t.qZA()(),t.TgZ(79,"div",14)(80,"div",15),t._UZ(81,"input",25),t.TgZ(82,"label",26),t._uU(83," Yes "),t.qZA()(),t.TgZ(84,"div",18),t._UZ(85,"input",27),t.TgZ(86,"label",28),t._uU(87," No "),t.qZA()()()(),t.TgZ(88,"div",2)(89,"label",3),t._uU(90," Is Favorite "),t.TgZ(91,"span",4),t._uU(92,"*"),t.qZA()(),t.TgZ(93,"div",14)(94,"div",15),t._UZ(95,"input",29),t.TgZ(96,"label",30),t._uU(97," Yes "),t.qZA()(),t.TgZ(98,"div",18),t._UZ(99,"input",31),t.TgZ(100,"label",32),t._uU(101," No "),t.qZA()()()(),t.TgZ(102,"div",2)(103,"label",3),t._uU(104," Quantity "),t.TgZ(105,"span",4),t._uU(106,"*"),t.qZA()(),t._UZ(107,"input",33),t.qZA(),t.TgZ(108,"div",2)(109,"label",3),t._uU(110," Returnable Days "),t.TgZ(111,"span",4),t._uU(112,"*"),t.qZA()(),t._UZ(113,"input",34),t.qZA(),t.TgZ(114,"div",2)(115,"label",3),t._uU(116," Sale Price "),t.TgZ(117,"span",4),t._uU(118,"*"),t.qZA()(),t._UZ(119,"input",35),t.qZA(),t.TgZ(120,"div",2)(121,"label",3),t._uU(122," Regular Price "),t.TgZ(123,"span",4),t._uU(124,"*"),t.qZA()(),t._UZ(125,"input",36),t.qZA(),t.TgZ(126,"div",2)(127,"label",3),t._uU(128," SKU "),t.TgZ(129,"span",4),t._uU(130,"*"),t.qZA()(),t._UZ(131,"input",37),t.qZA(),t.TgZ(132,"div",2)(133,"label",3),t._uU(134," Sale Price Starts "),t.TgZ(135,"span",4),t._uU(136,"*"),t.qZA()(),t._UZ(137,"input",38),t.qZA(),t.TgZ(138,"div",2)(139,"label",3),t._uU(140,"Sale Price Ends "),t.TgZ(141,"span",4),t._uU(142,"*"),t.qZA()(),t._UZ(143,"input",39),t.qZA(),t.TgZ(144,"div",40)(145,"label",3),t._uU(146,"Dispatch Start Time "),t.TgZ(147,"span",4),t._uU(148,"*"),t.qZA()(),t._UZ(149,"input",41),t.qZA(),t.TgZ(150,"div",40)(151,"label",3),t._uU(152,"Dispatch End Time "),t.TgZ(153,"span",4),t._uU(154,"*"),t.qZA()(),t._UZ(155,"input",42),t.qZA(),t.TgZ(156,"div",43)(157,"label",3),t._uU(158,"Is Featured "),t.TgZ(159,"span",4),t._uU(160,"*"),t.qZA()(),t.TgZ(161,"div",14)(162,"div",15),t._UZ(163,"input",44),t.TgZ(164,"label",45),t._uU(165," Yes "),t.qZA()(),t.TgZ(166,"div",18),t._UZ(167,"input",46),t.TgZ(168,"label",47),t._uU(169," No "),t.qZA()()()(),t.TgZ(170,"div",43)(171,"label",3),t._uU(172,"Availabilty "),t.TgZ(173,"span",4),t._uU(174,"*"),t.qZA()(),t.TgZ(175,"div",14)(176,"div",15),t._UZ(177,"input",48),t.TgZ(178,"label",49),t._uU(179," Yes "),t.qZA()(),t.TgZ(180,"div",18),t._UZ(181,"input",50),t.TgZ(182,"label",51),t._uU(183," No "),t.qZA()()()(),t.TgZ(184,"div",52)(185,"label",3),t._uU(186,"Published "),t.TgZ(187,"span",4),t._uU(188,"*"),t.qZA()(),t.TgZ(189,"div",14)(190,"div",15),t._UZ(191,"input",53),t.TgZ(192,"label",54),t._uU(193," Yes "),t.qZA()(),t.TgZ(194,"div",18),t._UZ(195,"input",55),t.TgZ(196,"label",56),t._uU(197," No "),t.qZA()()()()(),t.TgZ(198,"div",57)(199,"div",58)(200,"button",59),t.NdJ("click",function(){return i.onSubmit()}),t._uU(201,"Reset"),t.qZA()(),t.TgZ(202,"div",58)(203,"button",59),t.NdJ("click",function(){return i.onSubmit()}),t._uU(204),t.qZA()()(),t.TgZ(205,"div",1)(206,"div",60)(207,"button",61),t.NdJ("click",function(){return i.next(2)}),t._uU(208," Next"),t._UZ(209,"i",62),t.qZA()()()()),2&e&&(t.Q6J("formGroup",i.productForm),t.xp6(14),t.Q6J("ngForOf",i.categoryArr),t.xp6(7),t.Q6J("ngForOf",i.tagArr),t.xp6(32),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(10),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(10),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(10),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(64),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(10),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(10),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(9),t.hij(" ",i.productId?"Update":"Save"," "),t.xp6(3),t.Q6J("disabled",!i.productId))},dependencies:[b.sg,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s._,s.JJ,s.JL,s.sg,s.u,s.x0]}),r})();function v(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",27)(1,"button",28),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.KtG(d.dismiss("Cross click"))}),t.qZA()(),t.TgZ(2,"div",29)(3,"h4",30),t._uU(4," Are you sure you want to Delete ? "),t.qZA()(),t.TgZ(5,"div",31)(6,"button",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,d=t.oxw();return t.KtG(d.deleteImage(a._id))}),t._uU(7," YES "),t.qZA(),t.TgZ(8,"button",33),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.KtG(d.dismiss("Cross click"))}),t._uU(9," NO "),t.qZA()()}}function T(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22)(2,"button",23),t.NdJ("click",function(){const d=t.CHM(e).$implicit,I=t.MAs(6),q=t.oxw();return t.KtG(q.open(d._id,I))}),t._UZ(3,"i",24),t.qZA()(),t._UZ(4,"img",25),t.YNc(5,v,10,0,"ng-template",null,26,t.W1O),t.qZA()}if(2&r){const e=l.$implicit;t.xp6(4),t.Q6J("src",e.image,t.LSH)}}let A=(()=>{class r{constructor(e,i,a,d){this.productService=e,this.spinner=i,this.toastService=a,this.domSanitizer=d,this.modalService=(0,t.f3M)(N.FF),this.images=[],this.file=null,this.fileName="",this.url=null,this.submitted=!1,this.productId="",this.productIdChange=new t.vpe,this.productImgForm=new s.cw({image:new s.NI(""),isBanner:new s.NI(Boolean,[s.kI.required])})}ngOnInit(){this.productId&&this.getImagesByProductId()}previous(e){new(S())(document.querySelector(".bs-stepper"),{linear:!0,animation:!0,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}}).to(e)}open(e,i){this.selectedRow=e,this.modalService.open(i,{centered:!0})}addImage(){this.submitted=!0;let e=this.productImgForm.value,i=new FormData;i.append("key","product"),i.append("productId",this.productId),i.append("isBanner",e.isBanner),this.file?(i.append("file",this.file),this.spinner.show(),this.productService.createProductImage(i).subscribe(a=>{console.log("success",a),this.toastService.success(a.message),this.spinner.hide(),this.submitted=!1,this.productImgForm.reset(),this.getImagesByProductId()})):this.toastService.warning("Please upload file!!")}getImagesByProductId(){this.spinner.show(),this.productService.getImagesByProductId(this.productId).subscribe(e=>{this.spinner.hide(),this.images=e,console.log("this.images ",this.images)})}fileChosen(e){if(e.target.files.length){if(e.target.files[0].size>2e7)return void this.toastService.warning("Unable to upload file of size more than 1MB");this.file=e.target.files[0],this.fileName=this.file.name;const a=new FileReader;a.readAsDataURL(this.file),a.onload=()=>{this.url=this.domSanitizer.bypassSecurityTrustUrl(a.result)},a.onerror=d=>{console.error(d)}}}deleteImage(e){this.spinner.show(),this.productService.deleteProductImageById(e).subscribe(i=>{this.toastService.success(i.message),this.modalService.dismissAll(),this.spinner.hide(),this.getImagesByProductId()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(Z),t.Y36(P.V),t.Y36(w.k),t.Y36(c.H7))},r.\u0275cmp=t.Xpm({type:r,selectors:[["appProductImageForm"]],inputs:{productId:"productId"},outputs:{productIdChange:"productIdChange"},decls:30,vars:4,consts:[[1,"form-page",3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["formControlName","image","placeholder","image","type","file","accept",".png,.jpeg,.jpg,.pdf,.svg",1,"form-control",3,"change"],[1,"col-md-4","mb-2"],[1,"form-label","fw-bold"],[1,"text-danger"],[1,"d-flex"],[1,"form-check","me-3"],["type","radio","name","isBanner","id","isBanner1","formControlName","isBanner","checked","",1,"form-check-input",3,"value"],["for","isBanner1",1,"form-check-label"],[1,"form-check"],["type","radio","name","isBanner","id","isBanner2","formControlName","isBanner",1,"form-check-input",3,"value"],["for","isBanner2",1,"form-check-label"],[1,"row","justify-content-center"],[1,"col-auto"],[1,"btn","btn-primary","mt-4"],[1,"btn","btn-primary","mt-4",3,"click"],[1,"row","my-3"],[1,"row","my-5"],["class","col-3 text-end",4,"ngFor","ngForOf"],[1,"col-3","text-end"],[1,"m-1"],["ngbtooltip","Delete image",1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa-solid","fa-xmark"],["alt","",1,"img-fluid",3,"src"],["deleteModal",""],[1,"modal-header","border-0"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","border-0"],["id","modal-basic-title",1,"modal-title","text-center"],[1,"modal-footer","justify-content-center","border-0"],["type","button",1,"btn","px-4","btn-outline-danger",3,"click"],["type","button",1,"btn","px-4","btn-outline-primary",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"label",2),t._uU(3,"Upload Image"),t.qZA(),t.TgZ(4,"input",3),t.NdJ("change",function(d){return i.fileChosen(d)}),t.qZA()(),t.TgZ(5,"div",4)(6,"label",5),t._uU(7,"Is Banner "),t.TgZ(8,"span",6),t._uU(9,"*"),t.qZA()(),t.TgZ(10,"div",7)(11,"div",8),t._UZ(12,"input",9),t.TgZ(13,"label",10),t._uU(14," Yes "),t.qZA()(),t.TgZ(15,"div",11),t._UZ(16,"input",12),t.TgZ(17,"label",13),t._uU(18," No "),t.qZA()()()(),t.TgZ(19,"div",14)(20,"div",15)(21,"button",16),t._uU(22,"Reset"),t.qZA()(),t.TgZ(23,"div",15)(24,"button",17),t.NdJ("click",function(){return i.addImage()}),t._uU(25," Save "),t.qZA()()()(),t.TgZ(26,"div",18)(27,"div",15)(28,"div",19),t.YNc(29,T,7,1,"div",20),t.qZA()()()),2&e&&(t.Q6J("formGroup",i.productImgForm),t.xp6(12),t.Q6J("value",!0),t.xp6(4),t.Q6J("value",!1),t.xp6(13),t.Q6J("ngForOf",i.images))},dependencies:[b.sg,s._Y,s.Fj,s._,s.JJ,s.JL,s.sg,s.u]}),r})(),O=(()=>{class r{constructor(e){this.router=e,this.productId=""}navigateTo(e){this.router.navigate([e])}previous(e){new(S())(document.querySelector(".bs-stepper"),{linear:!0,animation:!0,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}}).to(e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(m.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-form"]],decls:31,vars:2,consts:[[1,"container-fluid"],[1,"row","p-4","pb-0"],[1,"card","mb-0"],[1,"card-header","justify-content-start","fs-4","fw-bold"],[1,"d-flex","align-items-center","justify-content-between"],[1,""],[1,"btn","text-white","btn-primary","mx-2","shadow","rounded","rounded-3","d-flex","align-content-center","me-2",3,"click"],[1,"ti","ti-arrow-left","me-1"],["id","stepper1",1,"bs-stepper","linear"],["role","tablist",1,"bs-stepper-header"],["data-target","#test-l-1",1,"step","active"],["type","button","role","tab","id","stepper1trigger1","aria-controls","test-l-1","aria-selected","false","disabled","disabled",1,"step-trigger","btn"],[1,"bs-stepper-circle"],[1,"bs-stepper-label"],[1,"bs-stepper-line"],["data-target","#test-l-2",1,"step"],["type","button","role","tab","id","stepper1trigger2","aria-controls","test-l-2","aria-selected","false","disabled","disabled",1,"step-trigger"],[1,"bs-stepper-content"],["id","test-l-1","role","tabpanel","aria-labelledby","stepper1trigger1",1,"bs-stepper-pane","active","dstepper-block"],[3,"productId","productIdChange"],["id","test-l-2","role","tabpanel","aria-labelledby","stepper1trigger2",1,"bs-stepper-pane"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6,"Product Form"),t.qZA(),t.TgZ(7,"div")(8,"a",6),t.NdJ("click",function(){return i.navigateTo("default/product/product-list")}),t._UZ(9,"i",7),t._uU(10," Back"),t.qZA()()()()()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"button",11)(15,"span",12),t._uU(16,"1"),t.qZA(),t.TgZ(17,"span",13),t._uU(18,"Product Details"),t.qZA()()(),t._UZ(19,"div",14),t.TgZ(20,"div",15)(21,"button",16)(22,"span",12),t._uU(23,"2"),t.qZA(),t.TgZ(24,"span",13),t._uU(25,"Product Images"),t.qZA()()()(),t.TgZ(26,"div",17)(27,"div",18)(28,"app-product-info-form",19),t.NdJ("productIdChange",function(d){return i.productId=d}),t.qZA()(),t.TgZ(29,"div",20)(30,"appProductImageForm",19),t.NdJ("productIdChange",function(d){return i.productId=d}),t.qZA()()()()()),2&e&&(t.xp6(28),t.Q6J("productId",i.productId),t.xp6(2),t.Q6J("productId",i.productId))},dependencies:[f,A]}),r})();var D=g(6893),Y=g(6279);function Q(r,l){1&r&&(t.TgZ(0,"div",27)(1,"h6"),t._uU(2,"IN STOCK"),t.qZA()())}function V(r,l){1&r&&(t.TgZ(0,"div",28)(1,"h6"),t._uU(2,"OUT OF STOCK"),t.qZA()())}function R(r,l){1&r&&(t.TgZ(0,"div",29)(1,"h6"),t._uU(2,"YES"),t.qZA()())}function G(r,l){1&r&&(t.TgZ(0,"div",30)(1,"h6"),t._uU(2,"NO"),t.qZA()())}function M(r,l){1&r&&(t.TgZ(0,"div",29)(1,"h6"),t._uU(2,"IN FEATURED"),t.qZA()())}function z(r,l){1&r&&(t.TgZ(0,"div",30)(1,"h6"),t._uU(2,"NOT FEATURED"),t.qZA()())}function j(r,l){1&r&&(t.TgZ(0,"div",29)(1,"h6"),t._uU(2,"YES"),t.qZA()())}function $(r,l){1&r&&(t.TgZ(0,"div",30)(1,"h6"),t._uU(2,"NO"),t.qZA()())}function K(r,l){1&r&&(t.TgZ(0,"div",29)(1,"h6"),t._uU(2,"YES"),t.qZA()())}function H(r,l){1&r&&(t.TgZ(0,"div",30)(1,"h6"),t._uU(2,"NO"),t.qZA()())}const W=[{path:"",redirectTo:"product-list",pathMatch:"full"},{path:"product-form",component:O},{path:"product-list",component:F},{path:"product-view",component:(()=>{class r{constructor(e,i,a,d){this.router=e,this.activated=i,this.spinner=a,this.productService=d,this.productId=null,this.product=[],this.imageArr=[]}ngOnInit(){this.activated.queryParams.subscribe(e=>{null!=e.id&&(this.productId=e.id,this.getProductById(e.id))})}navigateTo(e){this.router.navigate([e])}getProductById(e){this.spinner.show(),this.productService.getbyId(e).subscribe(i=>{this.spinner.hide(),this.product=i;for(const a of i.imageId)this.imageArr.push({image:a.image,thumbImage:a.image})})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(m.F0),t.Y36(m.gz),t.Y36(P.V),t.Y36(Z))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-view"]],decls:54,vars:13,consts:[[1,"container-fluid"],[1,"row","my-4"],[1,"col-12"],[1,"d-flex","justify-content-center"],[1,"card","view-card"],[1,"card-header"],[1,"card-header-items"],[1,""],[1,"back-btn","btn","btn-primary",3,"click"],[1,"ti","ti-arrow-left","me-1"],[1,"card-body","mt-3","justify-content-center"],[1,"container-fluid","p-3"],[1,"row"],[1,"col-5"],[3,"images"],["nav",""],[1,"col-7"],[1,"col-12","card-row"],["class","badge-success",4,"ngIf"],["class","badge-error",4,"ngIf"],[1,"cat-name"],[1,"mt-4"],[1,"text-muted"],[1,"col-6","col-md-6","col-lg-4","d-flex","my-3"],[1,"mb-0"],["class","badge-success ms-2",4,"ngIf"],["class","badge-error ms-2",4,"ngIf"],[1,"badge-success"],[1,"badge-error"],[1,"badge-success","ms-2"],[1,"badge-error","ms-2"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),t._uU(8,"Product View"),t.qZA(),t.TgZ(9,"div")(10,"a",8),t.NdJ("click",function(){return i.navigateTo("default/product/product-list")}),t._UZ(11,"i",9),t._uU(12," Back"),t.qZA()()()(),t.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13),t._UZ(17,"ng-image-slider",14,15),t.qZA(),t.TgZ(19,"div",16)(20,"div",12)(21,"div",17)(22,"h3"),t._uU(23),t.qZA(),t.YNc(24,Q,3,0,"div",18),t.YNc(25,V,3,0,"div",19),t.qZA(),t.TgZ(26,"div",2)(27,"h6",20),t._uU(28,"Category Name"),t.qZA()(),t.TgZ(29,"div",2)(30,"h4",21),t._uU(31,"Description"),t.qZA(),t.TgZ(32,"p",22),t._uU(33),t.qZA()(),t.TgZ(34,"div",23)(35,"h5",24),t._uU(36,"Published"),t.qZA(),t.YNc(37,R,3,0,"div",25),t.YNc(38,G,3,0,"div",26),t.qZA(),t.TgZ(39,"div",23)(40,"h5",24),t._uU(41,"Featured"),t.qZA(),t.YNc(42,M,3,0,"div",25),t.YNc(43,z,3,0,"div",26),t.qZA(),t.TgZ(44,"div",23)(45,"h5",24),t._uU(46,"IN SALE"),t.qZA(),t.YNc(47,j,3,0,"div",25),t.YNc(48,$,3,0,"div",26),t.qZA(),t.TgZ(49,"div",23)(50,"h5",24),t._uU(51,"COD"),t.qZA(),t.YNc(52,K,3,0,"div",25),t.YNc(53,H,3,0,"div",26),t.qZA()()()()()()()()()()()),2&e&&(t.xp6(17),t.Q6J("images",i.imageArr),t.xp6(6),t.Oqu(i.product.productName),t.xp6(1),t.Q6J("ngIf",i.product.inStock),t.xp6(1),t.Q6J("ngIf",!i.product.inStock),t.xp6(8),t.Oqu(i.product.description),t.xp6(4),t.Q6J("ngIf",i.product.published),t.xp6(1),t.Q6J("ngIf",!i.product.published),t.xp6(4),t.Q6J("ngIf",i.product.isFeatured),t.xp6(1),t.Q6J("ngIf",!i.product.isFeatured),t.xp6(4),t.Q6J("ngIf",i.product.inSale),t.xp6(1),t.Q6J("ngIf",!i.product.inSale),t.xp6(4),t.Q6J("ngIf",i.product.COD),t.xp6(1),t.Q6J("ngIf",!i.product.COD))},dependencies:[b.O5,Y.sN]}),r})()}];let X=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[b.ez,s.u5,s.UX,Y.Ek,U.W,D.m,m.Bz.forChild(W)]}),r})()},1090:function(B){B.exports=function(){"use strict";function C(){return C=Object.assign||function(h){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(h[n]=o[n])}return h},C.apply(this,arguments)}var g=window.Element.prototype.matches,b=function(c,o){return c.closest(o)},s=function(c,o){return new window.Event(c,o)},U=function(c,o){return new window.CustomEvent(c,o)};!function t(){if(window.Element.prototype.matches||(g=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(b=function(o,n){if(!document.documentElement.contains(o))return null;do{if(g.call(o,n))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null}),(!window.Event||"function"!=typeof window.Event)&&(s=function(o,n){n=n||{};var p=document.createEvent("Event");return p.initEvent(o,!!n.bubbles,!!n.cancelable),p}),"function"!=typeof window.CustomEvent){var h=window.Event.prototype.preventDefault;U=function(o,n){var p=document.createEvent("CustomEvent");return p.initCustomEvent(o,(n=n||{bubbles:!1,cancelable:!1,detail:null}).bubbles,n.cancelable,n.detail),p.preventDefault=function(){this.cancelable&&(h.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},p}}}();var m_ACTIVE="active",m_LINEAR="linear",m_BLOCK="dstepper-block",m_NONE="dstepper-none",m_FADE="fade",m_VERTICAL="vertical",_="transitionend",y="bsStepper",Z=function(c,o,n,p){var u=c[y];if(!u._steps[o].classList.contains(m_ACTIVE)&&!u._stepsContents[o].classList.contains(m_ACTIVE)){var f=U("show.bs-stepper",{cancelable:!0,detail:{from:u._currentIndex,to:o,indexStep:o}});c.dispatchEvent(f);var v=u._steps.filter(function(A){return A.classList.contains(m_ACTIVE)}),T=u._stepsContents.filter(function(A){return A.classList.contains(m_ACTIVE)});f.defaultPrevented||(v.length&&v[0].classList.remove(m_ACTIVE),T.length&&(T[0].classList.remove(m_ACTIVE),!c.classList.contains(m_VERTICAL)&&!u.options.animation&&T[0].classList.remove(m_BLOCK)),P(c,u._steps[o],u._steps,n),k(c,u._stepsContents[o],u._stepsContents,T,p))}},P=function(c,o,n,p){n.forEach(function(f){var v=f.querySelector(p.selectors.trigger);v.setAttribute("aria-selected","false"),c.classList.contains(m_LINEAR)&&v.setAttribute("disabled","disabled")}),o.classList.add(m_ACTIVE);var u=o.querySelector(p.selectors.trigger);u.setAttribute("aria-selected","true"),c.classList.contains(m_LINEAR)&&u.removeAttribute("disabled")},k=function(c,o,n,p,u){var f=c[y],v=n.indexOf(o),T=U("shown.bs-stepper",{cancelable:!0,detail:{from:f._currentIndex,to:v,indexStep:v}});if(o.classList.contains(m_FADE)){o.classList.remove(m_NONE);var O=x(o);o.addEventListener(_,function A(){o.classList.add(m_BLOCK),o.removeEventListener(_,A),c.dispatchEvent(T),u()}),p.length&&p[0].classList.add(m_NONE),o.classList.add(m_ACTIVE),L(o,O)}else o.classList.add(m_ACTIVE),o.classList.add(m_BLOCK),c.dispatchEvent(T),u()},x=function(c){if(!c)return 0;var o=window.getComputedStyle(c).transitionDuration;return parseFloat(o)?(o=o.split(",")[0],1e3*parseFloat(o)):0},L=function(c,o){var n=!1,u=o+5;function f(){n=!0,c.removeEventListener(_,f)}c.addEventListener(_,f),window.setTimeout(function(){n||c.dispatchEvent(s(_)),c.removeEventListener(_,f)},u)},S={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function h(o,n){var p=this;void 0===n&&(n={}),this._element=o,this._currentIndex=0,this._stepsContents=[],this.options=C({},S,{},n),this.options.selectors=C({},S.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(m_LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(u){return u.hasAttribute("data-target")}).forEach(function(u){p._stepsContents.push(p._element.querySelector(u.getAttribute("data-target")))}),function(c,o){o.animation&&c.forEach(function(n){n.classList.add(m_FADE),n.classList.add(m_NONE)})}(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,y,{value:this,writable:!0}),this._steps.length&&Z(this._element,this._currentIndex,this.options,function(){})}var c=h.prototype;return c._setLinkListeners=function(){var n=this;this._steps.forEach(function(p){var u=p.querySelector(n.options.selectors.trigger);n.options.linear?(n._clickStepLinearListener=function(o){o.preventDefault()},u.addEventListener("click",n._clickStepLinearListener)):(n._clickStepNonLinearListener=function(c){return function(n){n.preventDefault();var p=b(n.target,c.selectors.steps),u=b(p,c.selectors.stepper),f=u[y],v=f._steps.indexOf(p);Z(u,v,c,function(){f._currentIndex=v})}}(n.options),u.addEventListener("click",n._clickStepNonLinearListener))})},c.next=function(){var n=this,p=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;Z(this._element,p,this.options,function(){n._currentIndex=p})},c.previous=function(){var n=this,p=this._currentIndex-1>=0?this._currentIndex-1:0;Z(this._element,p,this.options,function(){n._currentIndex=p})},c.to=function(n){var p=this,u=n-1,f=u>=0&&u<this._steps.length?u:0;Z(this._element,f,this.options,function(){p._currentIndex=f})},c.reset=function(){var n=this;Z(this._element,0,this.options,function(){n._currentIndex=0})},c.destroy=function(){var n=this;this._steps.forEach(function(p){p.querySelector(n.options.selectors.trigger).removeEventListener("click",n.options.linear?n._clickStepLinearListener:n._clickStepNonLinearListener)}),this._element[y]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},h}()}()}}]);