"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[85],{5961:(m,l,a)=>{a.d(l,{GW:()=>u,dk:()=>e,oK:()=>c});var c=function(n){return n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",n}(c||{}),u=function(n){return n.Rear="REAR",n.Front="FRONT",n}(u||{}),e=function(n){return n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",n}(e||{})},85:(m,l,a)=>{a.r(l),a.d(l,{CamPageModule:()=>U});var c=a(6814),u=a(95),e=a(1929),n=a(1147),g=a(2726),f=a(5961);const h=(0,g.fo)("Camera",{web:()=>a.e(6468).then(a.bind(a,6468)).then(o=>new o.CameraWeb)});var t=a(9212);function p(o,s){if(1&o){const r=t.EpF();t.TgZ(0,"div"),t._uU(1," Clique no bot\xe3o para tirar uma foto: "),t.TgZ(2,"ion-fab",7)(3,"ion-fab-button",8),t.NdJ("click",function(){t.CHM(r);const d=t.oxw();return t.KtG(d.getPhoto())}),t._UZ(4,"ion-icon",9),t.qZA()()()}}function v(o,s){if(1&o&&(t.TgZ(0,"div",3),t._UZ(1,"ion-img",10),t.TgZ(2,"p")(3,"a",11),t._uU(4,"Nova Foto"),t.qZA()()()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("src",r.photoURL)}}const P=[{path:"",component:(()=>{var o;class s{constructor(){this.photoFormat="",this.saved=!1,this.savedURL=""}constuctor(){}ngOnInit(){}getPhoto(){this.saved=!1,this.savedURL="",h.getPhoto({quality:90,allowEditing:!0,resultType:f.dk.DataUrl}).then(i=>{console.log("Foto escolhida: ",i),this.photoURL=i.dataUrl,this.photoFormat=i.format})}}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cam"]],decls:9,vars:3,consts:[[3,"translucent"],["color","primary"],["slot","start"],[1,"ion-text-center"],[1,"ion-padding"],[4,"ngIf"],["class","ion-text-center",4,"ngIf"],["slot","fixed","vertical","center","horizontal","center"],[3,"click"],["name","camera"],[3,"src"],["href","/cam"]],template:function(i,d){1&i&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Tirar Foto"),t.qZA()()(),t.TgZ(6,"ion-content",4),t.YNc(7,p,5,0,"div",5)(8,v,5,1,"div",6),t.qZA()),2&i&&(t.Q6J("translucent",!0),t.xp6(7),t.Q6J("ngIf",!d.photoURL),t.xp6(1),t.Q6J("ngIf",d.photoURL))},dependencies:[c.O5,e.Sm,e.W2,e.IJ,e.W4,e.Gu,e.gu,e.Xz,e.fG,e.wd,e.sr]}),s})()}];let C=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.Bz.forChild(P),n.Bz]}),s})(),U=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,u.u5,e.Pc,C]}),s})()}}]);