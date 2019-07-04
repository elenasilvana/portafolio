(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e){e.exports=[{name:"MD-links",img:"someimage",category:"Front-end development",deliverable:"npm package",description:"Command line application that validates if markdown files are available.",url:"https://github.com/elenasilvana/GDL002-md-links",technologies:"Node JS, ES6",uexd:"",frontskills:"http requests, npm, async functions, callbacks, CLI",type:"individual",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",route:"MDLINKS",id:"md-links"},{name:"Meet Pokemon",img:"https://i.postimg.cc/mZnqwf58/alola-form-kanto-pokemon-go.jpg",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication aimed at kids or people who want to know about Pokemon or want to learn how to play Pokemon Go",url:"https://elenasilvana.github.io/GDL002-data-lovers/",technologies:"ES6, HTML5, CSS3",uexd:"Ideation, sketching, prototyping, iteration testing",frontskills:"Write unitary test, filter, ordering functions, array and objects manipulation, DOM events",type:"team collaboration",tools:"Git, GitHub Pages",metodologies:"AGILE, kanban, User Story, sprint planning",route:"MEETPOKEMON",id:"meet-pokemon"},{name:"Secret Cipher",img:"someimage",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication that allows the user to cipher and decipher personal notes.",url:"https://elenasilvana.github.io/gdl-2019-01-bc-core-cipher/src/",technologies:"Javascript ES6, HTML, CSS3",uexd:"Ideation, sketching, iteration testing",frontskills:"unit testing, control structures, ASCII, array methods",type:"individual",tools:"Git, GitHub Pages, npm",metodologies:"AGILE, kanban, User Story, sprint planning",route:"CIPHER",id:"secret-cipher"}]},32:function(e,t,n){e.exports=n(44)},37:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"HOME",function(){return s}),n.d(a,"ABOUT",function(){return u}),n.d(a,"CIPHER",function(){return p}),n.d(a,"MEETPOKEMON",function(){return d}),n.d(a,"MDLINKS",function(){return E}),n.d(a,"BURGERQUEEN",function(){return h}),n.d(a,"ETERNIDAD",function(){return g}),n.d(a,"OBRAGRIS",function(){return v}),n.d(a,"MOVIESTILLPROJECT",function(){return b});var r=n(0),o=n.n(r),l=n(28),i=n.n(l),c=(n(37),n(4)),m=n(6),s="/",u="/about",p="/cipher",d="/meetpokemon",E="/mdlinks",h="/burgerqueen",g="/eternidad",v="/obragris",b="/moviestillproject",f=n(10),k=n(11),N=n(13),y=n(12),w=n(14),S=(r.Component,function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"project-card container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(c.b,{to:a[this.props.route]},o.a.createElement("div",{className:"project-img",style:{backgroundImage:"url("+this.props.img+")"}},o.a.createElement("p",{className:"project-name",id:"project.name"},this.props.name),o.a.createElement("p",null,this.props.category))))))}}]),t}(r.Component)),I=n(27),O=function(){return o.a.createElement("container",{className:"portfolio-container"},o.a.createElement("div",{className:"portfolio-home container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"name"},o.a.createElement("h1",{id:"ES"},"Elena Silvana")),o.a.createElement("p",{className:"text-center"}),o.a.createElement(c.b,{className:"about-botton",to:u},"About")))),o.a.createElement("div",{className:"project-list"},I.map(function(e,t){return o.a.createElement(S,{img:e.img,name:e.name,category:e.category,route:e.route})})))},j=function(){return o.a.createElement("container",{className:"about-container"},o.a.createElement("div",{className:"about-presentation"},o.a.createElement("h1",null,"Hi, are you looking for me?"),o.a.createElement("p",null,"I\u2019m Elena, I\u2019m a front end developer do you liked my work? get in touch")),o.a.createElement("div",{className:"about-icons"},o.a.createElement("a",{href:"https://github.com/elenasilvana"},o.a.createElement("img",{className:"icons-network",src:"https://i.postimg.cc/rpr42MkP/Git-Hub-Mark-64px.png",alt:"github-icon"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/elena-silvana-c/"},o.a.createElement("img",{className:"icons-network",src:"https://i.postimg.cc/cHGns214/makefg.png\n",alt:"linkedin-icon"}))),o.a.createElement("div",{className:"about-resume"}))},G=function(){return o.a.createElement("container",{className:"cipher-container"},o.a.createElement("div",{className:"portfolio-home container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"name"},o.a.createElement("p",{className:"text-center"},"Sorry, I'm working on the content of this page"))))))},M=n(23),A=n.n(M),C=n(17),L=n.n(C),P=n(31),H=n.n(P),D=function(e){function t(){return Object(f.a)(this,t),Object(N.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement(H.a,{fluid:!1,className:"meetpokemon-container"},o.a.createElement(A.a,{noGutters:!0},o.a.createElement(L.a,null,o.a.createElement("div",{className:"".concat(this.props.id,"-page portada")},o.a.createElement("h1",null,this.props.name)))),o.a.createElement(A.a,{noGutters:!0},o.a.createElement(L.a,{sm:8,md:8},o.a.createElement("div",{className:"".concat(this.props.id,"-description description")},o.a.createElement("h3",null,this.props.name),o.a.createElement("p",null,this.props.description))),o.a.createElement(L.a,{sm:4,md:4},o.a.createElement("div",{className:"".concat(this.props.id,"-details details")},o.a.createElement("h4",null,"Deliverable"),o.a.createElement("p",null,this.props.deliverable),o.a.createElement("h4",null,"Website"),o.a.createElement("p",null,o.a.createElement("a",{href:this.props.url},"meet pokemon"))))))}}]),t}(r.Component),x=n(27).find(function(e){return"meet-pokemon"===e.id});console.log(x);var R=function(){return o.a.createElement("div",null,o.a.createElement(D,{description:x.description,name:x.name,deliverable:x.deliverable,url:x.url,id:x.id}))},T=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy MDlinks"))},W=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy el componente de BurgerQueen"))},B=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy Eternidad, un proyecto de fotograf\xeda"))},U=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy Obra Gris, un proyecto de fotograf\xeda"))},J=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy Movie Still Project, un proyecto de fotograf\xeda"))};var q=function(){return o.a.createElement("div",{className:"NavBar"},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:u},"About")),o.a.createElement("li",null,o.a.createElement(c.b,{to:s},"Home")),o.a.createElement("li",null,o.a.createElement(c.b,{to:p},"cipher")),o.a.createElement("li",null,o.a.createElement(c.b,{to:d},"meet pokemon")))))},K=function(){return o.a.createElement(c.a,null,o.a.createElement(q,null),o.a.createElement(m.a,{exact:!0,path:"/",component:O}),o.a.createElement(m.a,{path:"/about",component:j}),o.a.createElement(m.a,{path:"/cipher",component:G}),o.a.createElement(m.a,{path:"/meetpokemon",component:R}),o.a.createElement(m.a,{path:"/mdlinks",component:T}),o.a.createElement(m.a,{path:"/burgerqueen",component:W}),o.a.createElement(m.a,{path:"/eternidad",component:B}),o.a.createElement(m.a,{path:"/obragris",component:U}),o.a.createElement(m.a,{path:"/moviestillproject",component:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.53b9bd97.chunk.js.map