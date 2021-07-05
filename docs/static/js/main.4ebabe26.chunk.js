(this["webpackJsonpreact-redux-hooks"]=this["webpackJsonpreact-redux-hooks"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(4),o=n.n(i),u=(n(16),n(17),n(7)),s=n(2),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},a=Object(u.a)({count:j,isLogged:d}),l=n(1),b=Object(u.b)(a,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=function(e){var t=e.children;return Object(l.jsx)(s.a,{store:b,children:t})},O=Object(c.createContext)(),f=n(6),x=function(e){var t=e.children,n=Object(c.useState)(0),r=Object(f.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(O.Provider,{value:{counter:i,increment:function(){o((function(e){return e+1}))},decrement:function(){o((function(e){return e-1}))}},children:t})},v=function(e){var t=e.children,n=Object(c.useState)(0),r=Object(f.a)(n,2),i=r[0],o=r[1];return Object(l.jsx)(O.Provider,{value:{counter:i,increment:function(){o((function(e){return e+1}))},decrement:function(){o((function(e){return e-1}))}},children:t})};var p=Object(s.b)((function(e){return{count:e.count}}),(function(e){return{increment:function(){return e({type:"INCREMENT"})},decrement:function(){return e({type:"DECREMENT"})}}}))((function(e){var t=e.count,n=e.increment,c=e.decrement;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Redux Old Way"}),Object(l.jsx)("h3",{children:"Connecting the componente using Redux connect, mapStateToProps and mapDispatchToProps"}),Object(l.jsxs)("p",{children:["Counter: ",t]}),Object(l.jsx)("button",{onClick:function(){return n()},children:"+"}),Object(l.jsx)("button",{onClick:function(){return c()},children:"-"})]})}));var E=function(){var e=Object(s.d)((function(e){return e.count})),t=Object(s.c)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Redux New Way"}),Object(l.jsx)("h3",{children:"Using Redux useSelector and useDispatch hooks"}),Object(l.jsxs)("p",{children:["Counter: ",e]}),Object(l.jsx)("button",{onClick:function(){return t({type:"INCREMENT"})},children:"+"}),Object(l.jsx)("button",{onClick:function(){return t({type:"DECREMENT"})},children:"-"})]})};var m=function(e){var t=e.subtitle,n=Object(c.useContext)(O),r=n.counter,i=n.increment,o=n.decrement;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"React Context"}),Object(l.jsx)("h3",{children:t}),Object(l.jsxs)("p",{children:["Counter: ",r]}),Object(l.jsx)("button",{onClick:function(){return i()},children:"+"}),Object(l.jsx)("button",{onClick:function(){return o()},children:"-"})]})},C=n(11),N=[];setInterval((function(){if(!N.length)return Promise.resolve();var e=Object(C.a)(N);return N=[],console.info("sending profile queue",e),Promise.resolve()}),5e3);var g=function(e,t,n,c,r,i,o){N.push({id:e,phase:t,actualDuration:n,baseDuration:c,startTime:r,commitTime:i,interactions:o})};var R=function(){return Object(l.jsx)(c.Profiler,{id:"root",onRender:g,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(h,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(E,{})]}),Object(l.jsx)(x,{children:Object(l.jsx)(m,{subtitle:"Getting the state using useContext hook"})}),Object(l.jsx)(v,{children:Object(l.jsx)(m,{subtitle:"Using a different Provider and a different counter"})})]})})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4ebabe26.chunk.js.map