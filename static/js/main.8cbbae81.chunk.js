(this["webpackJsonpbasketball-app"]=this["webpackJsonpbasketball-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(16),c=a.n(s),r=(a(24),a(8)),i=a(6);function m(){return l.a.createElement("div",{className:"intro d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"text-center p-3"},l.a.createElement("h1",null,"JOSDREW's Scoreboard"),l.a.createElement("p",null,"Count point and time for basketball match"),l.a.createElement(r.b,{to:"enter-time"},l.a.createElement("span",null,"Get Start"))))}var o=a(10);function u(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1];return l.a.createElement("div",{className:"enter-time d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"text-center p-3"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.history.push("/enter-name-A"),console.log(s)},className:"text-center"},l.a.createElement("label",null,"Please select minutes per quater:"),l.a.createElement("input",{type:"number",required:!0,min:"5",max:"10",onChange:function(e){c(e.target.value),console.log(s)}}),l.a.createElement("input",{type:"submit",value:"Next"}))))}function p(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1];return l.a.createElement("div",{className:"enter-name-A d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"text-center label-3"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.history.push("/enter-name-B"),console.log(s)}},l.a.createElement("label",null,"Please enter team A's name and player's number:"),l.a.createElement("label",null,"Team A:",l.a.createElement("input",{type:"text",name:"teamA",onChange:function(e){return c(e.target.value)}})),l.a.createElement("label",null,"Player 1:",l.a.createElement("input",{type:"text",name:"player",onChange:function(e){return c(e.target.value)}})),l.a.createElement("label",null,"Player 2:",l.a.createElement("input",{type:"text",name:"player",onChange:function(e){return c(e.target.value)}})),l.a.createElement("label",null,"Player 3:",l.a.createElement("input",{type:"text",name:"player",onChange:function(e){return c(e.target.value)}})),l.a.createElement("label",null,"Player 4:",l.a.createElement("input",{type:"text",name:"player",onChange:function(e){return c(e.target.value)}})),l.a.createElement("label",null,"Player 5:",l.a.createElement("input",{type:"text",name:"player",onChange:function(e){return c(e.target.value)}})),l.a.createElement("input",{type:"submit",value:"Next"}))))}function d(e){return l.a.createElement("div",{className:"enter-name-B d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"text-center p-3"},l.a.createElement("h2",null,"Please enter team A's name and player's number:"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.history.push("/scoreboard")},className:"text-center"},l.a.createElement("h1",null,"Team B:",l.a.createElement("input",{type:"text",name:"teamA"})),l.a.createElement("p",null,"Player 1:",l.a.createElement("input",{type:"text",name:"player"})),l.a.createElement("p",null,"Player 2:",l.a.createElement("input",{type:"text",name:"player"})),l.a.createElement("p",null,"Player 3:",l.a.createElement("input",{type:"text",name:"player"})),l.a.createElement("p",null,"Player 4:",l.a.createElement("input",{type:"text",name:"player"})),l.a.createElement("p",null,"Player 5:",l.a.createElement("input",{type:"text",name:"player"})),l.a.createElement("input",{type:"submit",value:"Next"}))))}var E=a(1),v=a.n(E),f=function(){return Object(n.useEffect)((function(){var e=v()("#clock"),t=v()("#clock_1"),a=v()("#clock_2"),n=v()("#quater_change"),l=document.getElementById("myAudio"),s=t.find("#faul"),c=a.find("#timeout"),r="nine eight seven six five four three two one zero".split(" "),i="FIRST SECOND THIRD FOURT OT".split(" "),m={},o=4,u=1,p=0,d=7,E=6,f=4,h=0,y=0,g=9,b=-1,N=-1,x=!1,_=e.find(".digits"),k=t.find(".digits_1"),I=a.find(".digits_2");function P(){l.play()}function R(){m.s6.attr("class",r[o]),m.s7.attr("class",r[u]),10===++u&&(u=0,o++),o>=10&&(clearInterval(N),m.s6.attr("class",r[9]),m.s7.attr("class",r[9]),o=4,P())}function S(){var e,t;m.s1.attr("class",r[d]),m.s2.attr("class",r[E]),m.m1.attr("class",r[g]),m.s3.attr("class",r[y]),m.s4.attr("class",r[f]),m.s5.attr("class",r[h]),10===++E&&(E=0,d++),d>=10&&!0===x?m.s2.attr("class",r[9]):d>=10&&(P(),m.s2.attr("class",r[9]),x=!0),++h>=10&&(h=0,f++),f>=10&&(f=4,y++),g>=10&&(e=8,t=9,p>=5?p=0:(P(),"true"!==alert("ARE YOU SURE")&&(d=7,E=5,f=3,h=9,y=0,g=9,p++),n.html(i[p]),m.s1.attr("class",r[d]),m.s2.attr("class",r[E]),m.m1.attr("class",r[e]),m.s3.attr("class",r[t]),m.s4.attr("class",r[9]),m.s5.attr("class",r[9]),s.html("Resume"),clearInterval(b),b=-1)),y<=-1&&(g--,y=9),y>=10&&(g++,y=0),console.log(g,y)}v.a.each(["s1","s2"],(function(){if("s1"===this){for(var e=v()('<div class="'+r[d]+'">'),t=1;t<8;t++)e.append('<span class="d'+t+'">');m[this]=e,_.append(e)}if("s2"===this){e=v()('<div class="'+r[5]+'">');for(var a=1;a<8;a++)e.append('<span class="d'+a+'">');m[this]=e,_.append(e)}})),v.a.each(["m1","s3",":","s4","s5"],(function(){if(":"===this)k.append('<div class="dots">');else if("m1"===this){for(var e=v()('<div class="'+r+'">'),t=1;t<8;t++)e.append('<span class="d'+t+'">');m[this]=e,k.append(e)}else{e=v()('<div class="'+r[9]+'">');for(var a=1;a<8;a++)e.append('<span class="d'+a+'">');m[this]=e,k.append(e)}})),v.a.each(["s6","s7"],(function(){if("s6"===this){for(var e=v()('<div class="'+r[3]+'">'),t=1;t<8;t++)e.append('<span class="d'+t+'">');m[this]=e,I.append(e)}else{e=v()('<div class="'+r[9]+'">');for(var a=1;a<8;a++)e.append('<span class="d'+a+'">');m[this]=e,I.append(e)}})),v()("#24s").click((function(){d=7,E=5,m.s1.attr("class",r[7]),m.s2.attr("class",r[5]),x=!1})),v()("#14s").click((function(){d=8,E=5,m.s1.attr("class",r[8]),m.s2.attr("class",r[5]),x=!1})),v()("#plusMin").click((function(){y--,m.m1.attr("class",r[g]),m.s3.attr("class",r[y]),y<=-1&&(g--,y=9),9===y&&(m.m1.attr("class",r[8]),m.s3.attr("class",r[9])),console.log(y)})),v()("#minusMin").click((function(){9===y&&9===g?console.log("cant change"):y++,y>=10&&(g++,y=0),m.m1.attr("class",r[g]),m.s3.attr("class",r[y]),console.log(y)})),v()("#00s").click((function(){x=!0,d=9,E=9,m.s1.attr("class",r[9]),m.s2.attr("class",r[9])})),v()("#timeout").click((function(){-1===N?(N=setInterval(R,1e3),s.html("Resume"),clearInterval(b),b=-1,c.html("Cancel"),m.s6.attr("class",r[4]),m.s7.attr("class",r[0])):(c.html("Timeout"),clearInterval(N),N=-1,u=1,o=4,m.s6.attr("class",r[3]),m.s7.attr("class",r[9]))})),v()("#quater_change").click((function(){p++,n.html(i[p]),p>=5&&(n.html(i[0]),p=0)})),v()("#manual1").click((function(){v()("#2_page").fadeIn(1e3),m.m1.attr("class",r[7]),m.s3.attr("class",r[9])})),s.click((function(){-1===b?(s.html("Pause"),b=setInterval(S,1e3)):(s.html("Resume"),clearInterval(b),b=-1),-1!==N&&(c.html("Timeout"),clearInterval(N),N=-1,u=1,o=4,m.s6.attr("class",r[3]),m.s7.attr("class",r[9]))}))})),l.a.createElement("div",{className:"scoreboard d-flex justify-content-center align-items-center"},l.a.createElement("div",{id:"2_page",className:"position_all"},l.a.createElement("div",{className:"position_quater"},l.a.createElement("div",{id:"quater_change",className:"quater_change_style"},"FIRST"),l.a.createElement("div",{className:"quater_stlye"},"QUARTER")),l.a.createElement("div",{className:"position_timer"},l.a.createElement("div",{id:"clock_1",className:"light"},l.a.createElement("div",{className:"display_1 d-flex"},l.a.createElement("div",{id:"myReset"},l.a.createElement("div",{id:"plusMin",className:"changtime"},"+"),l.a.createElement("div",{id:"minusMin",className:"changtime"},"-")),l.a.createElement("div",{className:"digits_1"}),l.a.createElement("div",{id:"myConfirm"})),l.a.createElement("div",{id:"faul",className:"timer_but1"},"Start")),l.a.createElement("div",{id:"clock",className:"light"},l.a.createElement("div",{className:"display"},l.a.createElement("div",{className:"digits"})),l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("div",{id:"24s",className:"timer_but"},"24"),l.a.createElement("div",{id:"14s",className:"timer_but"},"14"),l.a.createElement("div",{id:"00s",className:"timer_but"},"00")))),l.a.createElement("div",{id:"clock_2",className:"light"},l.a.createElement("div",{className:"display_2"},l.a.createElement("div",{id:"timeout",className:"timeoutstyle"},"Timeout"),l.a.createElement("div",{className:"digits_2"}),l.a.createElement("div",{className:"mr-3"},"s")))))};function h(){return l.a.createElement("div",{className:"page-not-found d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"text-center p-3"},l.a.createElement("h1",null,"404 Error"),l.a.createElement(r.b,{to:"/"},l.a.createElement("span",null,"Home"))))}var y=function(){return l.a.createElement(r.a,{basename:"/basketball-score"},l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:m}),l.a.createElement(i.a,{path:"/enter-time",component:u}),l.a.createElement(i.a,{path:"/enter-name-A",component:p}),l.a.createElement(i.a,{path:"/enter-name-B",component:d}),l.a.createElement(i.a,{path:"/scoreboard",component:f}),l.a.createElement(i.a,{component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8cbbae81.chunk.js.map