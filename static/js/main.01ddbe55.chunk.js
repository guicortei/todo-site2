(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[0],{41:function(t,e,n){},61:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(31),s=n.n(i),r=(n(41),n(18)),o=n.n(r),l=n(32),d=n(21),j=n(36),u=n(15),b=n(74),h=n(13),O=n(2),k=n(33),f=n.n(k),x=n(20),m=(n(61),n(1)),p=function(t){var e=t.task,n=t.handleTaskClick,c=t.handleTaskDeletion,a=Object(O.e)();return Object(m.jsxs)("div",{className:"task-container",style:e.completed?{borderLeft:"6px solid chartreuse"}:{},children:[Object(m.jsx)("div",{className:"task-title",onClick:function(){n(e.id)},children:e.title}),Object(m.jsxs)("div",{className:"buttons-container",children:[Object(m.jsx)("button",{className:"see-task-details-button",onClick:function(){a.push("/".concat(e.title))},children:Object(m.jsx)(x.b,{})}),Object(m.jsx)("button",{onClick:function(){return c(e.id)},className:"remove-task-button",children:Object(m.jsx)(x.a,{})})]})]})},v=function(t){var e=t.tasks,n=t.handleTaskClick,c=t.handleTaskDeletion;return console.log(e),Object(m.jsx)(m.Fragment,{children:e.map((function(t){return Object(m.jsx)(p,{task:t,handleTaskClick:n,handleTaskDeletion:c},t.id)}))})},C=(n(68),n(69),function(t){var e=t.children,n=t.onClick;return Object(m.jsx)("button",{onClick:n,className:"button",children:e})}),N=function(t){var e=t.handleTaskAddition,n=Object(c.useState)(""),a=Object(u.a)(n,2),i=a[0],s=a[1];return Object(m.jsxs)("div",{className:"add-task-container",children:[Object(m.jsx)("input",{onChange:function(t){s(t.target.value)},value:i,className:"add-task-input",type:"text"}),Object(m.jsx)("div",{className:"add-task-button-container",children:Object(m.jsx)(C,{onClick:function(){e(i),s("")},children:"Adicionar"})})]})},T=function(){return Object(m.jsx)("h1",{style:{color:"#eee"},children:"Minhas tarefas"})},g=(n(70),n(71),function(){var t=Object(O.f)(),e=Object(O.e)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"back-button-container",children:Object(m.jsx)(C,{onClick:function(){e.goBack()},children:"Voltar"})}),Object(m.jsxs)("div",{className:"task-details-container",children:[Object(m.jsx)("h2",{children:t.taskTitle}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet repudiandae neque et, blanditiis mollitia!"})]})]})}),y=function(){var t=Object(c.useState)([{id:"1",title:"Estudar programa\xe7\xe3o",completed:!1},{id:"2",title:"Ler Livros",completed:!0}]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=function(t){var e=[].concat(Object(j.a)(n),[{title:t,id:Object(b.a)(),completed:!1}]);a(e)},s=function(t){var e=n.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e}));a(e)},r=function(t){var e=n.filter((function(e){return e.id!==t}));a(e)};return Object(c.useEffect)((function(){var t=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://jsonplaceholder.cypress.io/todos?_limit=10");case 2:e=t.sent,n=e.data,a(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(T,{}),Object(m.jsx)(O.a,{path:"/",exact:!0,render:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{handleTaskAddition:i}),Object(m.jsx)(v,{tasks:n,handleTaskClick:s,handleTaskDeletion:r})]})}}),Object(m.jsx)(O.a,{path:"/:taskTitle",exact:!0,component:g})]})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.01ddbe55.chunk.js.map