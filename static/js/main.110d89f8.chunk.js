(this["webpackJsonppomodoro-redux"]=this["webpackJsonppomodoro-redux"]||[]).push([[0],{23:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(11),i=t.n(a),c=t(2),u=t(3);function l(){var e=Object(c.a)(["\n    /* personalizar a scrollbar */\n    ::-webkit-scrollbar { width: 6px; }\n    ::-webkit-scrollbar-track { background: #e6e6e6; border-radius: 5px; }\n    ::-webkit-scrollbar-thumb { background: rgb(151, 151, 151); border-radius: 5px; }\n    ::-webkit-scrollbar-thumb:hover { background: rgb(99, 99, 99); }\n\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-family: 'Roboto', sans-serif;\n    }\n    \n    html, body, #root { \n        height: 100%;\n        overflow: hidden;\n        background-color: #E1E5EB;\n    }\n"]);return l=function(){return e},e}var d=Object(u.a)(l()),s=t(4);function m(){var e=Object(c.a)(["\n    height: 68px;\n    padding: 0 20px;\n    background: #EEEEF6;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    h1 {\n        margin-left: 20px;\n        color: #2B815F;\n        font-family: 'Courgette', cursive;\n    }\n"]);return m=function(){return e},e}var f=u.b.header(m()),p=function(){return o.a.createElement(f,null,o.a.createElement(s.l,{size:"42px",color:"#2B815F"}),o.a.createElement("h1",{className:"title"},"Pomodoro"))};function b(){var e=Object(c.a)(["\n    background: #EEEEF6;\n    border-radius: 10px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    width: ",";\n    height: ",";\n    margin: ",";\n"]);return b=function(){return e},e}var v=u.b.section(b(),(function(e){var n=e.width;return void 0===n?"100%":n}),(function(e){var n=e.height;return void 0===n?"100%":n}),(function(e){var n=e.margin;return void 0===n?"0 10px":n})),g=t(5),O=t(6),h={add:function(e,n){return{type:"ADD_POMODORO",value:{indicator:e,name:n,selected:!1,completed:!1,time:!1,toDoList:[]}}},edit:function(e,n){return{type:"EDIT_POMODORO",value:{indicator:e,name:n}}},del:function(e){return{type:"DEL_POMODORO",value:e}},select:function(e){return{type:"SELECT_POMODORO",value:e}},time:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:"INSERT_TIME_POMODORO",value:{indicator:e,time:n,completed:t}}},next:function(e){return{type:"NEXT_POMODORO",value:e}}},x={add:function(e,n){return{type:"ADD_TASK",value:{done:!1,indicator:e,name:n}}},edit:function(e,n,t){return{type:"EDIT_TASK",value:{indicator:e,indexTask:n,newNameTask:t}}},del:function(e,n){return{type:"DEL_TASK",value:{indicator:e,indexTask:n}}},change:function(e,n){return{type:"CHANGE_DONE",value:{indicator:e,indexTask:n}}},moving:function(e,n,t,r){return{type:"MOVING_TASK",value:{indicatorPomodoro:e,indexTask:n,objTask:t,newIndicator:r}}}};function j(){var e=Object(c.a)(["\n    width: ",";\n    margin: ",";\n    position: ",";\n    display: flex;\n    align-items: ",";\n    justify-content: ",";\n"]);return j=function(){return e},e}var E=u.b.div(j(),(function(e){var n=e.width;return void 0===n?"initial":n}),(function(e){var n=e.margin;return void 0===n?"0":n}),(function(e){var n=e.position;return void 0===n?"initial":n}),(function(e){var n=e.align;return void 0===n?"center":n}),(function(e){var n=e.justify;return void 0===n?"initial":n}));function w(){var e=Object(c.a)(["\n    min-width: ",";\n    min-height: ",";\n    border-radius: 50%;\n    border: none;\n    outline: none;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    margin:  ",";\n    color: ",";\n    background: ",";\n  \n    ","\n    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);\n\n    :hover { \n        transform: scale(1.18); \n        background: rgba(50, 50, 50, .1); \n    }\n    \n    :active { opacity: .5; }\n"]);return w=function(){return e},e}var k=u.b.button(w(),(function(e){var n=e.width;return void 0===n?"32px":n}),(function(e){var n=e.height;return void 0===n?"32px":n}),(function(e){var n=e.margin;return void 0===n?"0":n}),(function(e){var n=e.color;return void 0===n?"#343434":n}),(function(e){var n=e.background;return void 0===n?"transparent":n}),(function(e){return e.shadow?"box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.25);":null})),y=t(15);function D(){var e=Object(c.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 36px;\n    margin: 6px 12px;\n    border-radius: 32px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    color: ",";\n    background: ",";\n    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.25);\n\n    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);\n\n    :hover { transform: scale(1.08); }\n    :active { opacity: .5; }\n"]);return D=function(){return e},e}var T=u.b.button(D(),(function(e){var n=e.color;return void 0===n?"#343434":n}),(function(e){var n=e.background;return void 0===n?"#F5F5F5":n})),F=function(e){var n=e.text,t=Object(y.a)(e,["text"]);return o.a.createElement(T,t,n)},S=t(14),C=t(1);function z(){var e=Object(c.a)(["\n    color: #383838;\n    ",";\n    margin: ",";\n    font-size: ",";\n    font-weight: ",";\n    text-decoration: ",";\n    cursor: ",";\n"]);return z=function(){return e},e}var P=u.b.h3(z(),(function(e){return e.nowrap?"white-space: nowrap;":null}),(function(e){var n=e.margin;return void 0===n?"0":n}),(function(e){var n=e.size;return void 0===n?"1.17em":n}),(function(e){var n=e.weight;return void 0===n?"500":n}),(function(e){return e.scratched?"line-through":"initial"}),(function(e){var n=e.cursor;return void 0===n?"default":n}));function I(){var e=Object(c.a)(["\n    padding: 4px 10px;\n    margin-left: ",";\n    width: 100%;\n    color: #383838;\n    font-weight: 500;\n    font-size: 1.20em;\n"]);return I=function(){return e},e}function M(){var e=Object(c.a)(["\n    background-color: rgba(0, 0, 0, .5);\n    position: absolute; z-index: 10;\n    top: 0; right: 0; bottom: 0; left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return M=function(){return e},e}var N=u.b.section(M()),_=u.b.input(I(),(function(e){var n=e.mf;return void 0===n?"10px":n})),A=function(e){var n=e.closeModal,t=e.objTimer,a=e.defineObjTimer,i=e.convertTimer,c=Object(r.useState)((function(){return{pomodoro:i.int(t.pomodoro).min,rest:i.int(t.rest).min}})),u=Object(g.a)(c,2),l=u[0],d=u[1],m=function(e){var n=e.target,t=n.name,r=n.value;d(Object(C.a)(Object(C.a)({},l),{},Object(S.a)({},t,r)))};return o.a.createElement(N,null,o.a.createElement(v,{width:"400px",height:"200px"},o.a.createElement(E,{margin:"12px 16px 18px"},o.a.createElement(k,{width:"40px",height:"40px",onClick:function(){var e={pomodoro:i.string(l.pomodoro,0),rest:i.string(l.rest,0)},r=e.pomodoro,o=e.rest;t.pomodoro===r&&t.rest===o||a(r,o),n()}}," ",o.a.createElement(s.i,{size:"28",color:"#303030"})," "),o.a.createElement(P,{size:"1.4em",weight:"700",margin:"0 16px"},"Editar tempo")),o.a.createElement("div",{style:{margin:"0 16px"}},o.a.createElement(E,{margin:"0 0 12px"},o.a.createElement(P,null,"Pomodoro:"),o.a.createElement(_,{value:l.pomodoro,name:"pomodoro",onChange:m,type:"number",autoFocus:!0})),o.a.createElement(E,null,o.a.createElement(P,null,"Descanso:"),o.a.createElement(_,{value:l.rest,name:"rest",onChange:m,type:"number",mf:"15px"})))))};function L(){var e=Object(c.a)(["\n    color: ",";\n    font-family: monospace; \n    font-size: 44px;\n    cursor: default;\n"]);return L=function(){return e},e}function B(){var e=Object(c.a)(["\n    height: 170px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n    .settings {\n        position: absolute;\n        top: -10px; left: 14px;\n    }\n\n    .clock {\n        position: absolute;\n        top: 5px; right: -55px;\n    }\n"]);return B=function(){return e},e}var R=function(e){return document.title=e},K={int:function(e){var n=e.split(":");return{min:parseInt(n[0]),seg:parseInt(n[1])}},string:function(e,n){return e<10&&e>=0&&(e="0".concat(e)),n<10&&(n="0".concat(n)),"".concat(e,":").concat(n)}};var G=u.b.div(B()),H=u.b.h2(L(),(function(e){return e.rest?"#4EB089":"#343434"})),J=function(e){var n=e.obj;Object(r.useEffect)((function(){x.indicator!==n.indicator&&""!==z&&(t(h.time(x.indicator,D,!1)),ne()),x.indicator!==n.indicator&&(T(n.time||m.pomodoro),j(n))}),[n]);var t=Object(O.b)(),a=Object(r.useState)(!1),i=Object(g.a)(a,2),c=i[0],u=i[1],l=Object(r.useState)({pomodoro:localStorage.getItem("pomodoro")||"25:00",rest:localStorage.getItem("rest")||"05:00"}),d=Object(g.a)(l,2),m=d[0],f=d[1],p=new Audio("https://www.w3schools.com/html/horse.mp3"),b=Object(r.useState)(n),v=Object(g.a)(b,2),x=v[0],j=v[1],w=Object(r.useState)(m.pomodoro),y=Object(g.a)(w,2),D=y[0],T=y[1],S=Object(r.useState)(""),C=Object(g.a)(S,2),z=C[0],P=C[1],I=Object(r.useState)(!1),M=Object(g.a)(I,2),N=M[0],_=M[1],L=Object(r.useState)(!1),B=Object(g.a)(L,2),J=B[0],V=B[1],W=Object(r.useState)(!1),X=Object(g.a)(W,2),U=X[0],Z=X[1],$=Object(r.useState)(!0),q=Object(g.a)($,2),Q=q[0],Y=q[1],ee=function(){return T((function(e){var t=function(e){var n=K.int(e),t=n.min,r=n.seg;return 0===r&&(t-=1,r=60),{min:t,seg:r-=1}}(e),r=t.min,o=t.seg;r<=0&&0===o&&(Q&&p.play(),V(!0));var a=K.string(r,o);return R("".concat(n.indicator,") ").concat(a)),a}))},ne=function(){clearTimeout(z),P(""),T(U?m.rest:m.pomodoro),R("Pomodoro"),_(!1),V(!1)};return o.a.createElement(G,null,o.a.createElement(E,{width:"100%",margin:"0 0 20px 0",justify:"center",position:"relative"},o.a.createElement(k,{onClick:function(){return u(!0)},className:"settings",width:"36px",height:"36px",background:"#F5F5F5",shadow:!0},o.a.createElement(s.k,{size:"24"})),o.a.createElement(E,{position:"relative"},o.a.createElement(H,{rest:U},D),o.a.createElement(k,{onClick:function(){return Y((function(e){return!e}))},className:"clock",width:"36px",height:"36px",background:"#F5F5F5",shadow:!0},Q?o.a.createElement(s.b,{size:"24"}):o.a.createElement(s.c,{size:"24"})))),o.a.createElement(E,null,J?o.a.createElement(F,{onClick:function(){if(U)Z(!1),ne(),T(m.pomodoro),t(h.next(n.indicator));else{var e=function(e,n){var t=K.int(e),r=t.min,o=t.seg,a=K.int(n),i=a.min,c=a.seg;return r<0?K.string(i+(-1*r-1),c+(60-o)):n}(D,m.pomodoro);t(h.time(n.indicator,e,!0)),Z(!0),ne(),T(m.rest)}},text:"CONCLUIR",background:"#4EB089",color:"white"}):o.a.createElement(F,{onClick:function(){if(""===z){"-"===D.slice(0,1)&&V(!0);var e=setInterval(ee,1e3);P(e),_(!1)}},text:"INICIAR",background:"#4EB089",color:"white"}),N?o.a.createElement(F,{onClick:ne,text:"ZERAR"}):o.a.createElement(F,{onClick:function(){clearTimeout(z),P(""),D!==m.pomodoro&&_(!0),V(!1)},text:"PARAR"})),c&&o.a.createElement(A,{closeModal:function(){return u(!1)},objTimer:m,defineObjTimer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"25:00",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"05:00",t=e,r=n;localStorage.setItem("pomodoro",t),localStorage.setItem("rest",r),f({pomodoro:t,rest:r}),""===z&&T(t)},convertTimer:K}))};function V(){var e=Object(c.a)(["\n    ",";\n    height: 3px;\n    border-radius: 10px;\n    margin: 0 16px;\n    background-color: #BEBEBE;\n"]);return V=function(){return e},e}var W=u.b.div(V(),(function(e){var n=e.width;return n?"width: ".concat(n,";"):"flex-grow: 1;"}));var X=function(e){var n=e.obj,t=n.toDoList.length,r=0;return n.toDoList.forEach((function(e){return!!e.done&&++r})),o.a.createElement(E,{margin:"0 16px"},o.a.createElement(P,null,"Pomodoro: ","".concat(n.indicator," - ").concat(n.name)),o.a.createElement(W,null),o.a.createElement(P,{nowrap:!0},"".concat(r," - ").concat(t)))};function U(){var e=Object(c.a)(["\n    width: 100%;\n    margin: 0 10px;\n    font-size: 18px;\n    border: none;\n    outline: none;\n    color: #303030;\n"]);return U=function(){return e},e}function Z(){var e=Object(c.a)(["\n    margin: ",";\n    padding: 4px 10px;\n    border-radius: 30px;\n    background-color: #FFFFFF;\n    display: flex;\n    align-items: center;\n"]);return Z=function(){return e},e}var $=u.b.div(Z(),(function(e){var n=e.margin;return void 0===n?"0":n})),q=u.b.input(U()),Q=function(e){var n=e.onClickAdd,t=void 0===n?function(){}:n,r=e.margin,a=Object(y.a)(e,["onClickAdd","margin"]);return o.a.createElement($,{margin:r},o.a.createElement(q,a),o.a.createElement(k,{onClick:t}," ",o.a.createElement(s.a,{size:"24",color:"#303030"})," "))};function Y(){var e=Object(c.a)(["\n    width: ",";\n    border: none;\n    color: #383838;\n    font-weight: 500;\n    font-size: 1.17em;\n"]);return Y=function(){return e},e}var ee=u.b.input(Y(),(function(e){var n=e.width;return void 0===n?"88%":n}));function ne(){var e=Object(c.a)(["\n    button svg { transition: fill 500ms ease-out; }\n\n    :hover button svg { fill: #B50000; }\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n    width: ",";\n    height: 38px;\n    border-radius: 6px;\n    background: #FFFFFF;\n        \n    padding: ",";\n    margin: ",";\n    border: 2px solid ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n\n    box-shadow: 0px 2px 2px .5px rgba(0, 0, 0, 0.25);\n    cursor: ",";\n    position: relative;\n    ",";\n\n    .hide {\n        position: relative;\n        right: -40px;\n        transition: right 300ms ease-in;\n    }\n\n    :hover .hide { right: 0; }\n"]);return te=function(){return e},e}var re=u.b.div(te(),(function(e){var n=e.width;return void 0===n?"initial":n}),(function(e){var n=e.padding;return void 0===n?"0":n}),(function(e){var n=e.margin;return void 0===n?"0":n}),(function(e){return e.selected?"#4EB089":"#FFFFFF"}),(function(e){var n=e.justify;return void 0===n?"initial":n}),(function(e){var n=e.cursor;return void 0===n?"default":n}),(function(e){return e.hidden?"overflow: hidden;":null})),oe=u.b.div(ne()),ae=function(e){var n=e.indicator,t=e.text,a=e.checked,i=e.openModal,c=e.onEdit,u=e.onDelete,l=e.changeDone,d=Object(r.useState)(!1),m=Object(g.a)(d,2),f=m[0],p=m[1],b=Object(r.useState)(t),v=Object(g.a)(b,2),O=v[0],h=v[1];return o.a.createElement(E,{margin:"0 0 10px"},o.a.createElement(re,{onClick:l,padding:"0 5px",cursor:"pointer",selected:a},a?o.a.createElement(s.f,{size:"26",color:"#4EB089"}):o.a.createElement(s.g,{size:"26",color:"#4EB089"})),o.a.createElement(re,{margin:"0 8px",selected:a},o.a.createElement(P,{margin:"0 6px 0 12px"},n),o.a.createElement(k,{onClick:i}," ",o.a.createElement(s.d,{size:"24",color:"#303030"})," ")),o.a.createElement(re,{className:"teste",width:"100%",padding:"0 4px 0 12px",justify:"space-between",selected:a,hidden:!0},c&&!f?o.a.createElement(P,{onClick:function(){return p(!0)},scratched:a,cursor:"text"},t):o.a.createElement(ee,{placeholder:"Tarefa",value:O,onChange:function(e){return h(e.target.value)},onBlur:function(){c(O),p(!1)},autoFocus:!0}),o.a.createElement(oe,{className:"hide"},o.a.createElement(k,{onClick:u}," ",o.a.createElement(s.j,{size:"24",color:"#303030"})," "))))};function ie(){var e=Object(c.a)(["\n    margin: ",";\n    padding: ",";\n    height: ",";\n    overflow-y: auto;\n"]);return ie=function(){return e},e}var ce=u.b.div(ie(),(function(e){var n=e.margin;return void 0===n?"0 20px":n}),(function(e){var n=e.padding;return void 0===n?" 0 4px":n}),(function(e){var n=e.height;return void 0===n?"initial":n}));function ue(){var e=Object(c.a)(["\n    button svg { transition: fill 500ms ease-out; }\n    :hover button svg { fill: #B50000; }\n"]);return ue=function(){return e},e}function le(){var e=Object(c.a)(["\n    height: 44px;\n    border-radius: 10px;\n    background: #FFFFFF;\n    \n    padding: ",";\n    margin: ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    box-shadow: 0px 3px 3px .5px rgba(0, 0, 0, 0.25);\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n\n    .hide {\n        position: absolute;\n        transition: right 300ms ease-in;\n        right: -40px;\n    }\n\n    .none { transition: opacity 400ms ease; }\n\n    :hover .hide { right: 8px; }\n    :hover .none { opacity: 0; }\n"]);return le=function(){return e},e}var de=u.b.div(le(),(function(e){var n=e.padding;return void 0===n?"0":n}),(function(e){var n=e.margin;return void 0===n?"0 0 12px":n})),se=u.b.div(ue()),me=function(e){var n=e.icon,t=e.num,a=e.text,i=e.time,c=e.onSelect,u=e.onEdit,l=e.onDelete,d=Object(r.useState)(!1),m=Object(g.a)(d,2),f=m[0],p=m[1],b=Object(r.useState)(a),v=Object(g.a)(b,2),O=v[0],h=v[1];return o.a.createElement(de,{onClick:c,name:"cardItem",className:"teste",padding:"0 12px",justify:"space-between"},o.a.createElement(E,{width:"100%"},n&&o.a.createElement(n,null),o.a.createElement(P,{margin:"0 8px 0 12px",nowrap:!0},"".concat(t," - ")),u&&f?o.a.createElement(ee,{width:"75%",placeholder:"Pomodoro",value:O,onChange:function(e){return h(e.target.value)},onBlur:function(){u(O),p(!1)},autoFocus:!0}):o.a.createElement(P,{onClick:function(){return p(!0)},cursor:"text"},a)),i&&o.a.createElement(P,{className:"none",weight:"300",size:"1em"},i),l&&o.a.createElement(se,{className:"hide"},o.a.createElement(k,{name:"btnDel",onClick:l}," ",o.a.createElement(s.j,{size:"24",color:"#303030"})," ")))};function fe(){var e=Object(c.a)(["\n    background-color: rgba(0, 0, 0, .5);\n    position: absolute; z-index: 10;\n    top: 0; right: 0; bottom: 0; left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    div[name=cardItem] svg { transition: fill 500ms ease; }\n    div[name=cardItem]:hover svg { fill: #199110; }\n"]);return fe=function(){return e},e}var pe=u.b.section(fe()),be=function(e){var n=e.selectedObject,t=e.closeModal,r=n.indicatorPomodoro,a=n.indexTask,i=n.objTask,c=Object(O.c)((function(e){return e.pomodoros})),u=Object(O.b)();return o.a.createElement(pe,null,o.a.createElement(v,{width:"600px",height:"80%"},o.a.createElement(E,{margin:"12px 16px 18px"},o.a.createElement(k,{width:"40px",height:"40px",onClick:t}," ",o.a.createElement(s.i,{size:"28",color:"#303030"})," "),o.a.createElement(P,{size:"1.4em",weight:"700",margin:"0 16px"},"Mudar tarefa de Pomodoro")),o.a.createElement(ce,{height:"calc(100% - 85px)"},c&&c.map((function(e){return o.a.createElement(me,{key:e.indicator,icon:function(){return function(e){return e.selected?o.a.createElement(s.e,{size:"24",color:"#004678"}):o.a.createElement(s.e,{size:"24",color:"white"})}(e)},num:e.indicator,text:e.name,onSelect:function(){return function(e){var n=e.indicator;u(x.moving(r,a,i,n)),t()}(e)}})})))))};var ve=function(e){var n=e.obj,t=Object(O.b)(),a=Object(r.useState)(""),i=Object(g.a)(a,2),c=i[0],u=i[1],l=Object(r.useState)(!1),d=Object(g.a)(l,2),s=d[0],m=d[1],f=Object(r.useState)({indicatorPomodoro:"",indexTask:0,objTask:{}}),p=Object(g.a)(f,2),b=p[0],v=p[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{id:"inputTask",placeholder:"Nova Tarefa: ",value:c,onChange:function(e){return u(e.target.value)},onClickAdd:function(){""!==c&&(t(x.add(n.indicator,c)),u(""),document.getElementById("inputTask").focus())},margin:"12px 24px"}),o.a.createElement(ce,{height:"calc(100% - 265px)"},n.toDoList.map((function(e,r){return o.a.createElement(ae,{key:"".concat(r,"+").concat(e.indicator),indicator:e.indicator,text:e.name,checked:e.done,changeDone:function(){return e=r,void t(x.change(n.indicator,e));var e},openModal:function(){return function(e,t){var r=n.indicator;v({indicatorPomodoro:r,indexTask:e,objTask:t}),m(!0)}(r,e)},onEdit:function(e){return function(e,r){n.toDoList[e].name!==r&&t(x.edit(n.indicator,e,r))}(r,e)},onDelete:function(){return e=r,void(window.confirm("Excluir a Tarefa ?")&&t(x.del(n.indicator,e)));var e}})}))),s&&o.a.createElement(be,{selectedObject:b,closeModal:function(){return m(!1)}}))};var ge=function(){var e=Object(O.c)((function(e){return e.pomodoros})).find((function(e){return e.selected}));return o.a.createElement(v,null,o.a.createElement(J,{obj:e}),o.a.createElement(X,{obj:e}),o.a.createElement(ve,{obj:e}))};var Oe=function(e){var n=e.array,t=n.length,r=0;return n.forEach((function(e){return!!e.completed&&++r})),o.a.createElement(E,{margin:"20px",justify:"space-between"},o.a.createElement(P,null,"Objetivo diario: "),o.a.createElement(P,{nowrap:!0},"".concat(r," - ").concat(t)))};var he=function(e){var n=e.array,t=Object(O.b)();return o.a.createElement(ce,{height:"calc(100% - 130px)"},n&&n.map((function(e,n){return o.a.createElement(me,{key:e.indicator,icon:function(){return function(e){return e.selected?o.a.createElement(s.e,{size:"24",color:"#004678"}):e.completed?o.a.createElement(s.h,{size:"24",color:"#4EB089"}):o.a.createElement(s.l,{size:"24",color:"#383838"})}(e)},num:e.indicator,text:e.name,time:e.time,onSelect:function(){return function(e){t(h.select(e.indicator))}(e)},onEdit:function(n){return function(e,n){e.name!==n&&t(h.edit(e.indicator,n))}(e,n)},onDelete:0!==n?function(){return function(e){window.confirm("Excluir o Pomodoro ?")&&t(h.del(e.indicator))}(e)}:void 0})})))};var xe=function(){var e=Object(O.b)(),n=Object(O.c)((function(e){return e.pomodoros})),t=Object(r.useState)(""),a=Object(g.a)(t,2),i=a[0],c=a[1];return o.a.createElement(v,null,o.a.createElement(Oe,{array:n}),o.a.createElement(Q,{id:"inputPomodoro",placeholder:"Novo Pomodoro: ",value:i,onChange:function(e){return c(e.target.value)},onClickAdd:function(){""!==i&&(e(h.add("#".concat(n.length+1),i)),c(""),document.getElementById("inputPomodoro").focus())},margin:"0 24px 18px"}),o.a.createElement(he,{array:n}))};function je(){var e=Object(c.a)(["\n    display: flex;\n    max-width: 1300px;\n    height: calc(100% - 68px);\n    margin: auto;\n    padding: 20px;\n"]);return je=function(){return e},e}var Ee=u.b.main(je()),we=function(){return o.a.createElement(Ee,null,o.a.createElement(ge,null),o.a.createElement(xe,null))},ke=t(13),ye=t(7),De={pomodoros:[{indicator:"#1",name:"Primeiro pomodoro",selected:!0,completed:!1,time:!1,toDoList:[{done:!1,indicator:"#1",name:"Primeira tarefa"}]}]},Te=function(e,n,t){return e.map((function(e){return e.indicator!==n?e:t(e)}))},Fe=function(e){var n=e.toDoList.find((function(e){return!1===e.done}));return Object(C.a)(Object(C.a)({},e),{},{completed:!n})},Se=function(e,n,t){var r=Te(t,n,(function(n){return Object(C.a)(Object(C.a)({},n),{},{toDoList:[].concat(Object(ye.a)(n.toDoList),[e])})}));return r=Te(r,n,Fe)},Ce=function(e,n,t,r){var o=Te(r,e,(function(e){return Object(C.a)(Object(C.a)({},e),{},{toDoList:e.toDoList.map((function(e,r){return r!==n?e:Object(C.a)(Object(C.a)({},e),{},{name:t})}))})}));return o=Te(o,e,Fe)},ze=function(e,n,t){var r=Te(t,n,(function(n){return Object(C.a)(Object(C.a)({},n),{},{toDoList:n.toDoList.filter((function(n,t){return t!==e}))})}));return r=Te(r,n,Fe)},Pe=function(e,n,t){var r=Te(t,n,(function(n){return Object(C.a)(Object(C.a)({},n),{},{toDoList:n.toDoList.map((function(n,t){return t!==e?n:Object(C.a)(Object(C.a)({},n),{},{done:!n.done})}))})}));return r=Te(r,n,Fe)},Ie=function(e,n,t,r,o){t.indicator=r;var a=ze(n,e,o);return a=Se(t,r,a)};var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_POMODORO":return Object(C.a)(Object(C.a)({},e),{},{pomodoros:[].concat(Object(ye.a)(e.pomodoros),[n.value])});case"EDIT_POMODORO":var t=n.value,r=t.indicator,o=t.name,a=function(e){return Object(C.a)(Object(C.a)({},e),{},{name:o})},i=Te(e.pomodoros,r,a);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(i)});case"DEL_POMODORO":var c=function(e){return e.indicator!==n.value},u=function(e,n){return Object(C.a)(Object(C.a)({},e),{},{indicator:"#".concat(++n)})},l=e.pomodoros.filter(c).map(u);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(l)});case"SELECT_POMODORO":var d=e.pomodoros.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{selected:e.indicator===n.value})})),s=d.find((function(e){return e.selected}));return s||(d[d.length-1].selected=!0),Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(d)});case"INSERT_TIME_POMODORO":var m=n.value,f=m.indicator,p=m.time,b=m.completed,v=function(e){return Object(C.a)(Object(C.a)({},e),{},{time:p,completed:b})},g=Te(e.pomodoros,f,v);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(g)});case"NEXT_POMODORO":var O=n.value,h=Object(ye.a)(e.pomodoros),x=h.findIndex((function(e){return e.indicator===O})),j=e.pomodoros[x+1];return j?(e.pomodoros[x].selected=!1,e.pomodoros[x+1].selected=!0):alert("Todos os Pomodoros foram concluidos!!!"),Object(C.a)(Object(C.a)({},e),{},{pomodoros:h});case"ADD_TASK":var E=n.value,w=n.value.indicator,k=e.pomodoros,y=Se(E,w,k);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(y)});case"EDIT_TASK":var D=n.value,T=D.indicator,F=D.indexTask,S=D.newNameTask,z=e.pomodoros,P=Ce(T,F,S,z);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(P)});case"DEL_TASK":var I=n.value,M=I.indexTask,N=I.indicator,_=e.pomodoros,A=ze(M,N,_);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(A)});case"CHANGE_DONE":var L=n.value,B=L.indexTask,R=L.indicator,K=e.pomodoros,G=Pe(B,R,K);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(G)});case"MOVING_TASK":var H=n.value,J=H.indicatorPomodoro,V=H.indexTask,W=H.objTask,X=H.newIndicator,U=e.pomodoros,Z=Ie(J,V,W,X,U);return Object(C.a)(Object(C.a)({},e),{},{pomodoros:Object(ye.a)(Z)});default:return e}},Ne=Object(ke.b)(Me);var _e=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a,{store:Ne},o.a.createElement(p,null),o.a.createElement(we,null)),o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.110d89f8.chunk.js.map