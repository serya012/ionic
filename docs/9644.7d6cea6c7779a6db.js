"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9644],{9644:(h,u,a)=>{a.r(u),a.d(u,{ProfilePageModule:()=>A});var l=a(6814),p=a(95),n=a(1929),c=a(1147),f=a(3182),g=a(9339),d=a(553),e=a(9212);function m(o,s){1&o&&e._UZ(0,"ion-progress-bar",5)}function P(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-content",6)(1,"ion-card"),e._UZ(2,"img",7),e.TgZ(3,"ion-card-header")(4,"ion-card-title"),e._uU(5),e.qZA(),e.TgZ(6,"ion-card-subtitle"),e._uU(7),e.qZA()(),e.TgZ(8,"ion-card-content")(9,"ul",8)(10,"li")(11,"strong"),e._uU(12,"Cadastro: "),e.qZA(),e._uU(13),e.ALo(14,"date"),e.ALo(15,"date"),e.qZA(),e.TgZ(16,"li")(17,"strong"),e._uU(18,"\xdaltimo login: "),e.qZA(),e._uU(19),e.ALo(20,"date"),e.ALo(21,"date"),e.qZA()()()(),e.TgZ(22,"div",9)(23,"p"),e._uU(24,"Seu perfil \xe9 gerenciado pelo "),e.TgZ(25,"strong"),e._uU(26,"Google"),e.qZA(),e._uU(27,". Clique no bot\xe3o abaixo para acessar seu perfil."),e.qZA(),e.TgZ(28,"p",2)(29,"ion-button",10),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.toGoogleProfile())}),e._UZ(30,"ion-icon",11),e._uU(31," Ver perfil no Google "),e.qZA()(),e.TgZ(32,"p"),e._uU(33,"Clique no bot\xe3o abaixo para sair do aplicativo neste dispositivo. Voc\xea precisar\xe1 entrar novamente para ter acesso aos recursos restritor do "),e.TgZ(34,"em"),e._uU(35),e.qZA(),e._uU(36,"."),e.qZA(),e.TgZ(37,"p",2)(38,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.logout())}),e._UZ(39,"ion-icon",13),e._uU(40," Logout / Sair "),e.qZA()()()()}if(2&o){const t=e.oxw();e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("alt",t.user.displayName)("src",t.user.photoURL,e.LSH),e.xp6(3),e.Oqu(t.user.displayName),e.xp6(2),e.Oqu(t.user.email),e.xp6(6),e.AsE(" ",e.xi3(14,10,t.user.metadata.creationTime,"dd/MM/yyyy")," \xe0s ",e.xi3(15,13,t.user.metadata.creationTime,"HH:mm")," "),e.xp6(6),e.AsE(" ",e.xi3(20,16,t.user.metadata.lastSignInTime,"dd/MM/yyyy")," \xe0s ",e.xi3(21,19,t.user.metadata.lastSignInTime,"HH:mm")," "),e.xp6(16),e.Oqu(t.env.appName)}}const Z=[{path:"",component:(()=>{var o;class s{constructor(){this.app=(0,f.ZF)(d.N.firebase),this.auth=(0,g.v0)(this.app),this.userGreeting="Perfil de Usu\xe1rio",this.view=!1,this.env=d.N}ngOnInit(){(0,g.Aj)(this.auth,i=>{var r;i?(this.user=i,this.view=!0,this.userGreeting="Ol\xe1 "+(null===(r=this.user.displayName)||void 0===r?void 0:r.split(" ")[0])):location.href="/"})}logout(){this.auth.signOut(),location.href="/"}toGoogleProfile(){window.open("https://myaccount.google.com/","blank")}}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:8,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-text-center"],["type","indeterminate",4,"ngIf"],[3,"fullscreen",4,"ngIf"],["type","indeterminate"],[3,"fullscreen"],["referrerpolicy","no-referrer",2,"display","block","margin","auto",3,"alt","src"],[2,"margin","0","padding","0 0 0 1rem"],[1,"ion-padding-start","ion-padding-end"],[3,"click"],["name","logo-google","slot","start"],["color","warning",3,"click"],["name","log-out","slot","start"]],template:function(i,r){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title",2),e._uU(5),e.qZA(),e.YNc(6,m,1,0,"ion-progress-bar",3),e.qZA()(),e.YNc(7,P,41,22,"ion-content",4)),2&i&&(e.Q6J("translucent",!0),e.xp6(5),e.Oqu(r.userGreeting),e.xp6(1),e.Q6J("ngIf",!r.view),e.xp6(1),e.Q6J("ngIf",r.view))},dependencies:[l.O5,n.YG,n.Sm,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.W2,n.Gu,n.gu,n.fG,n.X7,n.wd,n.sr,l.uU]}),s})()}];let v=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(Z),c.Bz]}),s})(),A=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,p.u5,n.Pc,v]}),s})()}}]);