(this.webpackJsonpuserslist=this.webpackJsonpuserslist||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),a=n.n(c),i=(n(12),n(4)),u=n(5),o=n(7),l=n(6),h=(n(13),n(14),n(15),n(0)),d=function(e){var t=e.user;return Object(h.jsxs)("div",{className:"user-card",children:[Object(h.jsx)("img",{alt:t.firstName,src:t.picture}),Object(h.jsxs)("h4",{className:"title",children:[t.title[0].toUpperCase()+t.title.slice(1),". \xa0\xa0",t.firstName,"\xa0",t.lastName]}),Object(h.jsx)("p",{children:t.email})]})},j=function(e){var t=e.users;return Object(h.jsx)("div",{className:"userslist",children:t.map((function(e){return Object(h.jsx)(d,{user:e},e.id)}))})},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{placeholder:t,onChange:n,type:"serach"})}),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={name:"Tom",users:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://dummyapi.io/data/api","/user"),{headers:{"app-id":"601e3fd68c2d1bc0e46b84c3"}}).then((function(e){return e.json()})).then((function(t){return t?e.setState({users:t.data},console.log(t)):null}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchField,s=t.filter((function(e){return e.firstName.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsxs)("div",{className:"page_wrap",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Expertos"}),Object(h.jsx)(f,{placeholder:"Search User",handleChange:this.handleChange})]}),Object(h.jsx)(j,{users:s})]})}}]),n}(r.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.c7b74834.chunk.js.map