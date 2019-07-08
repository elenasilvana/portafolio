(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports=[{name:"MD-links",img:"someimage",category:"Front-end development",deliverable:"npm package",description:"Command line application that validates if markdown files are available.",url:"https://github.com/elenasilvana/GDL002-md-links",technologies:"Node JS, ES6",uexd:"",frontskills:"http requests, npm, async functions, callbacks, CLI, regex",type:"individual",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",route:"MDLINKS",id:"md-links"},{name:"Meet Pokemon",img:"https://i.postimg.cc/mZnqwf58/alola-form-kanto-pokemon-go.jpg",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication aimed at kids or people who want to know about Pokemon or want to learn how to play Pokemon Go",url:"https://elenasilvana.github.io/GDL002-data-lovers/src",technologies:"ES6, HTML5, CSS3",uexd:"Ideation, sketching, prototyping, iteration testing",frontskills:"write unitary test, filter, ordering functions, array and objects manipulation, DOM events",type:"team collaboration",tools:"Git, GitHub Pages",metodologies:"AGILE, kanban, User Story, sprint planning",route:"MEETPOKEMON",id:"meet-pokemon"},{name:"Secret Cipher",img:"someimage",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication that allows the user to cipher and decipher personal notes.",url:"https://elenasilvana.github.io/gdl-2019-01-bc-core-cipher/src/",technologies:"Javascript ES6, HTML, CSS3",uexd:"Ideation, sketching, iteration testing",frontskills:"unit testing, control structures, ASCII, array methods",type:"individual",tools:"Git, GitHub Pages, npm",metodologies:"AGILE, kanban, User Story, sprint planning",route:"CIPHER",id:"secret-cipher"}]},32:function(e,t,n){e.exports=n(44)},37:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"HOME",function(){return m}),n.d(a,"ABOUT",function(){return u}),n.d(a,"CIPHER",function(){return p}),n.d(a,"MEETPOKEMON",function(){return d}),n.d(a,"MDLINKS",function(){return E}),n.d(a,"BURGERQUEEN",function(){return h}),n.d(a,"ETERNIDAD",function(){return g}),n.d(a,"OBRAGRIS",function(){return f}),n.d(a,"MOVIESTILLPROJECT",function(){return v});var r=n(0),o=n.n(r),l=n(29),i=n.n(l),c=(n(37),n(4)),s=n(6),m="/",u="/about",p="/cipher",d="/meetpokemon",E="/mdlinks",h="/burgerqueen",g="/eternidad",f="/obragris",v="/moviestillproject",b=n(11),k=n(12),w=n(15),y=n(13),N=n(16),S=(r.Component,function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"project-card container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(c.b,{to:a[this.props.route]},o.a.createElement("div",{className:"project-img",style:{backgroundImage:"url("+this.props.img+")"}},o.a.createElement("p",{className:"project-name",id:"project.name"},this.props.name),o.a.createElement("p",null,this.props.category))))))}}]),t}(r.Component)),j=n(17),I=function(){return o.a.createElement("container",{className:"portfolio-container"},o.a.createElement("div",{className:"portfolio-home container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"name"},o.a.createElement("h1",{id:"ES"},"Elena Silvana")),o.a.createElement("p",{className:"text-center"}),o.a.createElement(c.b,{className:"about-botton",to:u},"About")))),o.a.createElement("div",{className:"project-list"},j.map(function(e,t){return o.a.createElement(S,{img:e.img,name:e.name,category:e.category,route:e.route})})))},O=n(14),G=n.n(O),x=n(8),M=n.n(x),A=n(20),C=n.n(A),L=function(){return o.a.createElement(C.a,{className:"about-container"},o.a.createElement(G.a,null,o.a.createElement(M.a,null,o.a.createElement("div",{className:"about-presentation"},o.a.createElement("h1",null,"Hi, are you looking for me?"),o.a.createElement("p",null,"I\u2019m Elena, I\u2019m a front end developer did you like my work? get in touch")),o.a.createElement("div",{className:"about-icons"},o.a.createElement("a",{href:"https://github.com/elenasilvana"},o.a.createElement("img",{className:"icons-network",src:"https://i.postimg.cc/rpr42MkP/Git-Hub-Mark-64px.png",alt:"github-icon"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/elena-silvana-c/"},o.a.createElement("img",{className:"icons-network",src:"https://i.postimg.cc/cHGns214/makefg.png ",alt:"linkedin-icon"})),o.a.createElement("a",{href:"https://drive.google.com/open?id=1ZVq1r7mKTM9fWuxjNwwfVLs56i_r8-T2"},o.a.createElement("img",{className:"icons-network",src:"https://www.flaticon.com/premium-icon/icons/svg/1895/1895171.svg",alt:"CV icon"}))))))},P=function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement(C.a,{fluid:!1,className:"meetpokemon-container"},o.a.createElement(G.a,{noGutters:!0},o.a.createElement(M.a,null,o.a.createElement("div",{className:"".concat(this.props.id,"-page portada")},o.a.createElement("h1",null,this.props.name)))),o.a.createElement(G.a,{noGutters:!0},o.a.createElement(M.a,{sm:8,md:8},o.a.createElement("div",{className:"".concat(this.props.id,"-description description")},o.a.createElement("h3",null,this.props.name),o.a.createElement("p",null,this.props.description),o.a.createElement("p",null,"During this project I've learnt about ",this.props.frontskills))),o.a.createElement(M.a,{sm:4,md:4},o.a.createElement("div",{className:"".concat(this.props.id,"-details details")},o.a.createElement("h4",null,"Deliverable"),o.a.createElement("p",null,this.props.deliverable),o.a.createElement("h4",null,"Technologies "),o.a.createElement("p",null,this.props.tech),o.a.createElement("p",null,this.props.tools),o.a.createElement("h4",null,"UX design"),o.a.createElement("p",null,this.props.uexd),o.a.createElement("h4",null,"Website"),o.a.createElement("p",null,o.a.createElement("a",{href:this.props.url},this.props.name))))))}}]),t}(r.Component),H=n(17).find(function(e){return"secret-cipher"===e.id});console.log(H);var T=function(){return o.a.createElement("div",null,o.a.createElement(P,{description:H.description,name:H.name,deliverable:H.deliverable,url:H.url,id:H.id,tech:H.technologies,tools:H.tools,uexd:H.uexd,frontskills:H.frontskills}))},D=n(17).find(function(e){return"meet-pokemon"===e.id});console.log(D);var R=function(){return o.a.createElement("div",null,o.a.createElement(P,{description:D.description,name:D.name,deliverable:D.deliverable,url:D.url,id:D.id,tech:D.technologies,tools:D.tools,uexd:D.uexd,frontskills:D.frontskills}))},W=n(17).find(function(e){return"md-links"===e.id});console.log(W);var B=function(){return o.a.createElement("div",null,o.a.createElement(P,{description:W.description,name:W.name,deliverable:W.deliverable,url:W.url,id:W.id,tech:W.technologies,tools:W.tools,uexd:W.uexd,frontskills:W.frontskills}))},U=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy el componente de BurgerQueen"))},q=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy Eternidad, un proyecto de fotograf\xeda"))},J=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy Obra Gris, un proyecto de fotograf\xeda"))},K=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Soy Movie Still Project, un proyecto de fotograf\xeda"))};var V=function(){return o.a.createElement("div",{className:"NavBar"},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:u},"About")),o.a.createElement("li",null,o.a.createElement(c.b,{to:m},"Home")),o.a.createElement("li",null,o.a.createElement(c.b,{to:p},"cipher")),o.a.createElement("li",null,o.a.createElement(c.b,{to:d},"meet pokemon")))))},F=function(){return o.a.createElement(c.a,null,o.a.createElement(V,null),o.a.createElement(s.a,{exact:!0,path:"/",component:I}),o.a.createElement(s.a,{path:"/about",component:L}),o.a.createElement(s.a,{path:"/cipher",component:T}),o.a.createElement(s.a,{path:"/meetpokemon",component:R}),o.a.createElement(s.a,{path:"/mdlinks",component:B}),o.a.createElement(s.a,{path:"/burgerqueen",component:U}),o.a.createElement(s.a,{path:"/eternidad",component:q}),o.a.createElement(s.a,{path:"/obragris",component:J}),o.a.createElement(s.a,{path:"/moviestillproject",component:K}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.bfcdda32.chunk.js.map