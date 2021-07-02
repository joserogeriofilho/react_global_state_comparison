(this["webpackJsonpreact-redux-hooks"]=this["webpackJsonpreact-redux-hooks"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(4),o=t.n(i),u=(t(18),t(19),t(7)),s=t(2),d=function counterReducer(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},j=function isLoggedReducer(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SIGN_IN":return!e;default:return e}},a=Object(u.a)({count:d,isLogged:j}),l=t(1),b=Object(u.b)(a,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=function ReduxContext(e){var n=e.children;return Object(l.jsx)(s.a,{store:b,children:n})},O=Object(c.createContext)(),x=t(6),f=function CounterProvider(e){var n=e.children,t=Object(c.useState)(0),r=Object(x.a)(t,2),i=r[0],o=r[1];return Object(l.jsx)(O.Provider,{value:{counter:i,increment:function increment(){o((function(e){return e+1}))},decrement:function decrement(){o((function(e){return e-1}))}},children:n})},p=function Counter2Provider(e){var n=e.children,t=Object(c.useState)(0),r=Object(x.a)(t,2),i=r[0],o=r[1];return Object(l.jsx)(O.Provider,{value:{counter:i,increment:function increment(){o((function(e){return e+1}))},decrement:function decrement(){o((function(e){return e-1}))}},children:n})};var v=Object(s.b)((function mapStateToProps(e){return{count:e.count}}),(function mapDispatchToProps(e){return{increment:function increment(){return e({type:"INCREMENT"})},decrement:function decrement(){return e({type:"DECREMENT"})}}}))((function ReduxOldWay(e){var n=e.count,t=e.increment,c=e.decrement;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Redux Old Way"}),Object(l.jsx)("h3",{children:"Connecting the componente using Redux connect, mapStateToProps and mapDispatchToProps"}),Object(l.jsxs)("p",{children:["Counter: ",n]}),Object(l.jsx)("button",{onClick:function onClick(){return t()},children:"+"}),Object(l.jsx)("button",{onClick:function onClick(){return c()},children:"-"})]})}));var C=function ReduxNewWay(){var e=Object(s.d)((function(e){return e.count})),n=Object(s.c)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Redux New Way"}),Object(l.jsx)("h3",{children:"Using Redux useSelector and useDispatch hooks"}),Object(l.jsxs)("p",{children:["Counter: ",e]}),Object(l.jsx)("button",{onClick:function onClick(){return n({type:"INCREMENT"})},children:"+"}),Object(l.jsx)("button",{onClick:function onClick(){return n({type:"DECREMENT"})},children:"-"})]})};var m=function ReactContext(e){var n=e.subtitle,t=Object(c.useContext)(O),r=t.counter,i=t.increment,o=t.decrement;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"React Context"}),Object(l.jsx)("h3",{children:n}),Object(l.jsxs)("p",{children:["Counter: ",r]}),Object(l.jsx)("button",{onClick:function onClick(){return i()},children:"+"}),Object(l.jsx)("button",{onClick:function onClick(){return o()},children:"-"})]})},E=t(11),R=[];setInterval((function sendProfileQueue(){if(!R.length)return Promise.resolve();var e=Object(E.a)(R);return R=[],console.info("sending profile queue",e),Promise.resolve()}),5e3);var k=function onRenderCallback(e,n,t,c,r,i,o){R.push({id:e,phase:n,actualDuration:t,baseDuration:c,startTime:r,commitTime:i,interactions:o})};var N=function App_App(){return Object(l.jsx)(c.Profiler,{id:"root",onRender:k,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(h,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(C,{})]}),Object(l.jsx)(f,{children:Object(l.jsx)(m,{subtitle:"Getting the state using useContext hook"})}),Object(l.jsx)(p,{children:Object(l.jsx)(m,{subtitle:"Using a different Provider and a different counter"})})]})})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0352ce3f.chunk.js.map