(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e){e.exports={navbar:{home:"Inic\xedo",projects:"Projetos",about:"Sobre",contact:"Contato"},home:{myName:"Diego Paiva",myTitle:"Um Programador Full-Stack"},projects:{title:"Projetos",techs:"Techs Usadas",goTo:"Visitar Projeto",badges:"Pequeno icone do {{badge}}",images:"P\xe1gina principal do(a) {{name}}",amplifica:{title:"Amplifica",description:"Uma ferramenta utilizada para simplificar o fluxo de trabalho no sistema de ensino dentro da europa entre estudantes e empresas. \xc9 um projeto patrocinado pelo continente europeu"},infocasa:{title:"InfoCasa / DataCasa",description:"Uma plataforma imobiliaria paga com sede em portugal com filial na espanha, demonstra v\xe1rias ferramentas uteis ao ramo imobiliaria."},paivadiego:{title:"Personal Portfolio",description:"Um portofolio simples apenas para a demonstra\xe7\xe3o de projetos feitos pelo min mesmo."},ndapp:{title:"nDapp",description:"Uma plataforma descentralizada de demonstra\xe7\xe3o de dados sobre dapps de uma rede blockchain chamada Neo (N3)"},sharity:{title:"Sharity",description:"Uma plataforma para contribui\xe7\xe3o monet\xe1ria para clientes e usu\xe1rios, a plataforma oferece meios de pagamentos recorrentes como assinatura, ou como pagamento simples."},itrack:{title:"iTrack",description:"Site que tem como objetivo cadastrar cargas a serem rastreadas em tempo real, possui uma grande variedades de cargas a serem rastreadas."},eucatur:{title:"Eucatur",description:"Site de pagamentos via link, que tratava todo o traf\xe9go de pagamento e redicionava diferentes cart\xf5es a diferentes endpoints."}},about:{title:"Sobre min",description:"Sou um jovem de {{years}} anos que tem atuado na \xe1rea de desenvolvimento web. A ideia partiu de uma fagulha inicial no ensino m\xe9dio (3\xba ciclo) devido a grande disponibilidade de vagas no mercado de trabalho, a partir de cursos profissionalizantes aprimorei meus conhecimentos a ponto de ser reconhecido e convidado a trabalhar para algumas empresas da minha antiga regi\xe3o. Atrav\xe9s de aprendizagem cont\xednua, continuo aprendendo novas ferramentas e maneiras diferentes de resolver problemas."},contact:{title:"Me Contate"},footer:{description:"Criado com muito carinho - ",designer:"Layout desenvolvido por - "}}},32:function(e){e.exports={navbar:{home:"Home",projects:"Projects",about:"About",contact:"Contact"},home:{myName:"Diego Paiva",myTitle:"A Full-Stack Web Programmer"},projects:{title:"Projects",techs:"Used techs",goTo:"Look project",badges:"{{badge}} little icon",images:"{{name}} main site image",amplifica:{title:"Amplifica",description:"A tool used to simplify the workflow on the education system inside the europe between students and companies. It's a project sponsored by the European continent"},infocasa:{title:"InfoCasa / DataCasa",description:"A paid real estate platform based in Portugal with a branch in Spain, demonstrates several useful tools for the real estate industry."},paivadiego:{title:"Personal Portfolio",description:"A simple portfolio just for the demonstration of projects made by myself."},ndapp:{title:"nDapp",description:"A decentralized data demonstration platform about dapps from a blockchain network called Neo (N3)"},sharity:{title:"Sharity",description:"A platform for monetary contribution to customers and users, the platform offers means of recurring payments as a subscription, or as a one-time payment."},itrack:{title:"iTrack",description:"Website that aims to register loads to be tracked in real time, has a wide variety of loads to be tracked."},eucatur:{title:"Eucatur",description:"Link payments website, which handled all payment traffic and redirected different cards to different endpoints."}},about:{title:"About me",description:"I am a {{years}} year old Brazilian who has been working in the web development field. The idea came from an initial spark in high school (3rd cycle) due to the wide availability of vacancies in the job market, from professional courses I improved my knowledge to the point of being recognized and invited to work for some companies in my old region. Through continuous learning, I keep learning new tools and different ways to solve problems."},contact:{title:"Contact me"},footer:{description:"Made with love - ",designer:"Layout by - "}}},34:function(e,t,a){e.exports=a(65)},42:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var o=a(30),s=a.n(o),i=a(0),r=a.n(i),l=(a(42),a(13)),n=function(e){var t=e.className?e.className:"";return r.a.createElement("div",{id:e.id,className:t},e.children)},c=a(67),m=function(){var e=Object(c.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"h-screen flex justify-center"},r.a.createElement("div",{className:"w-screen"},r.a.createElement("img",{className:"md:object-none object-cover h-full w-full opacity-30 -mt-18",src:"./img/present-macbook.jpg"})),r.a.createElement("div",{className:"flex-row text-center h-full absolute mt-56"},r.a.createElement("h1",{className:"title col-span-12 text-5xl xl:text-9xl"},t("home.myName")),r.a.createElement("h2",{className:"description col-span-12 text-2xl"},t("home.myTitle"))))},d=function(){return r.a.createElement("div",{className:"navbar__logo w-20"},r.a.createElement("img",{src:"./img/logo-black-colorless.svg",alt:"Site Logo"}))},g=function(e){var t=Object(i.useState)(!1),a=Object(l.a)(t,2),o=a[0],s=a[1],n=e.className?e.className:"",c=!!e.isMenuLink,m=e.setIsMenuLink;return r.a.createElement("a",{href:e.href,target:e.target?e.target:"_blank",className:o?n+" secondary":n,onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},onMouseUp:function(){c&&m(!1)}},e.children)},h=function(e){var t=e.item,a=e.isMenuLink,o=e.setIsMenuLink,s=e.className?"navbar__item "+e.className:"navbar__item",i=Object(c.a)("common"),l=i.t;i.i18n;return r.a.createElement("li",null,r.a.createElement(g,{href:"#"+t.route,target:"_self",className:s,isMenuLink:a,setIsMenuLink:o},l(t.title)))},u=a(33),p=function(){var e=Object(c.a)("common").i18n,t=[{value:"pt",flag:"br",label:"Portuguese"},{value:"en",flag:"usa",label:"English"}];return r.a.createElement("div",{className:"flex"},r.a.createElement(u.a,{options:t,defaultValue:t[1],className:"md:mt-2 text-black",onChange:function(t){e.changeLanguage(t?t.value:"en")}}),r.a.createElement("img",{src:"./img/".concat(t.filter(function(t){return t.value==e.language})[0].flag||t[0].flag,"-flag.png"),className:"md:h-14 h-8 ml-4 md:mt-0 mt-1"}))},b=function(e){var t=e.items,a=e.className,o=e.isMenuLink,s=e.setIsMenuLink;return r.a.createElement("ul",{className:a},t.map(function(e){return r.a.createElement(h,{key:e.id,item:e,isMenuLink:o,setIsMenuLink:s})}),r.a.createElement(p,null))},f=function(e){var t=e.showMenu,a=e.setShowMenu,o=e.menu;return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar bg-stone-800 md:px-16 px-4 sticky top-0 z-10 px-auto md:flex hidden justify-between"},r.a.createElement(d,null),r.a.createElement(b,{items:o,className:"navbar__list flex md:w-8/12 lg:w-6/12 w-11/12 justify-around items-center"})),r.a.createElement("div",{className:"fixed z-[50] bg-stone-800 w-full md:hidden flex justify-between px-4"},r.a.createElement(d,null),r.a.createElement("div",{className:"mt-4"},r.a.createElement("button",{onClick:function(){return a(!t)}},r.a.createElement("img",{src:"../img/bars-solid.svg",className:"h-12"})))))},v=function(e){var t=Object(c.a)("common").t,a=[{name:"BootStrap",src:"https://img.shields.io/badge/bootstap-%23121011.svg?style=for-the-badge&logo=bootstrap&logoColor=white"},{name:"MySQL",src:"https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"},{name:"Razor",src:"https://img.shields.io/badge/Razor-%2300f.svg?style=for-the-badge&logo=razor&logoColor=white"},{name:"Angular",src:"https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"},{name:"Express.js",src:"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"},{name:"Flutter",src:"https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"},{name:"JWT",src:"https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"},{name:"NPM",src:"https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"},{name:"NodeJS",src:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"},{name:"Quasar",src:"https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black"},{name:"React",src:"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"},{name:"React Native",src:"https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"},{name:"Redux",src:"https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"},{name:"React Router",src:"https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"},{name:"SASS",src:"https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"},{name:"Socket.io",src:"https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"},{name:"TailwindCSS",src:"https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"},{name:"Vue.js",src:"https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"},{name:"AWS",src:"https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"},{name:"Heroku",src:"https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"},{name:"GoLand",src:"https://img.shields.io/badge/GoLand-0f0f0f?&style=for-the-badge&logo=goland&logoColor=white"},{name:"IntelliJ IDEA",src:"https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"},{name:"Visual Studio Code",src:"https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"},{name:"Visual Studio",src:"https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"},{name:"C#",src:"https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"},{name:"CSS3",src:"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"},{name:"Go",src:"https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"},{name:"HTML5",src:"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"},{name:"Java",src:"https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"},{name:"JavaScript",src:"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"},{name:"Kotlin",src:"https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white"},{name:"TypeScript",src:"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"},{name:"Spotify",src:"https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white"},{name:"YouTube Music",src:"https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white"},{name:"Windows",src:"https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"},{name:"ESLint",src:"https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"},{name:"Apache Tomcat",src:"https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black"},{name:"Discord",src:"https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white"},{name:"Git",src:"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"},{name:"Bitbucket",src:"https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"},{name:"GitHub",src:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"},{name:"Postgres",src:"https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"},{name:"MySQL",src:"https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"}].find(function(t){return t.name.toLocaleLowerCase()==e.name.toLocaleLowerCase()});return r.a.createElement("img",{src:a?a.src:"",alt:t("projects.badges",{badge:e.name})})},y=function(e){var t=Object(c.a)("common"),a=t.t,o=(t.i18n,e.project);return r.a.createElement("div",{className:"lateral col-span-7 px-4  max-w-5xl"},r.a.createElement("h3",{className:"title text-xl text-center mb-4 mt-6"},a("projects.".concat(o.name,".title"))),r.a.createElement("p",{className:"desription mb-8 text-center"},a("projects.".concat(o.name,".description"))),r.a.createElement("div",{className:"badge"},r.a.createElement("h3",{className:"badge__title title text-xl text-center mb-4 mt-6"},a("projects.techs")),r.a.createElement("div",{className:"badge__list flex justify-center flex-wrap gap-2"},o.techs.map(function(e){return r.a.createElement(v,{name:e,key:e})}))),r.a.createElement("div",{className:"linkTo title mt-8 text-center"},r.a.createElement(g,{href:o.srcLink},a("projects.goTo"))))},w=function(e){var t=Object(c.a)("common"),a=t.t,o=(t.i18n,"./img/"+e.srcImage),s=a("projects.images",{name:e.name});return r.a.createElement("div",{className:"imagem mt-6 col-span-5 h-96 mx-4"},r.a.createElement("img",{className:"object-cover h-full w-full",src:o,alt:s}))},E=function(e){var t=e.project?e.project:{title:"",description:"",srcImage:""};return r.a.createElement("div",{className:"projeto grid grid-cols-12 mb-8"},e.invert?r.a.createElement(y,{project:t}):"",r.a.createElement(w,{srcImage:t.srcImage,name:t.name}),e.invert?"":r.a.createElement(y,{project:t}))},x=function(e){var t=Object(c.a)("common"),a=t.t;t.i18n;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"md:mx-16 mx-4"},r.a.createElement("h1",{className:"title col-span-12 text-2xl xl:text-5xl text-center mb-16"},a("projects.title")),r.a.createElement("div",{className:"projetoList"},[{name:"amplifica",srcImage:"amplifica.png",techs:["Vue.JS","BootStrap","TypeScript","HTML5","CSS3","SASS","GitHub"],srcLink:"https://amplifica.eu/"},{name:"infocasa",srcImage:"infocasa.png",techs:["C#","Razor","JavaScript","HTML5","CSS3","GitHub"],srcLink:"https://infocasa.pt/"},{name:"paivadiego",srcImage:"paivadiego.png",techs:["React","TailwindCSS","TypeScript","HTML5","GitHub"],srcLink:"https://paivadiego.com.br/"},{name:"ndapp",srcImage:"ndapp.png",techs:["Vue.JS","TypeScript","TailwindCSS","Kotlin","MySQL","Git","GitHub"],srcLink:"https://ndapp.org/"},{name:"sharity",srcImage:"sharity.png",techs:["Vue.JS","TypeScript","TailwindCSS","Kotlin","MySQL","Git","BitBucket"],srcLink:"https://sharity.com.br/"},{name:"itrack",srcImage:"itrack.png",techs:["Vue.JS","JavaScript","TailwindCSS","Kotlin","MySQL","Git","BitBucket","IntelliJ IDEA"],srcLink:"https://itrackbrasil.com.br/"},{name:"eucatur",srcImage:"eucatur.png",techs:["Vue.JS","JavaScript","CSS3","Go","Postgres","Git","GitHub","Visual Studio Code","GoLand"],srcLink:"https://www.eucatur.com.br/"}].map(function(e,t){return r.a.createElement(E,{key:e.name+t,project:e,invert:t%2==0})}))))},k=function(){var e=Object(c.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"w-screen h-128"},r.a.createElement("img",{className:"object-none h-full w-full opacity-30 -mt-18",src:"./img/pattern-small-plastic.jpg"})),r.a.createElement("div",{className:"absolute md:mx-16 mx-4 pt-16"},r.a.createElement("h1",{className:"title col-span-12 text-2xl xl:text-5xl text-center mb-16"},t("about.title")),r.a.createElement("h2",{className:"description md:text-xl max-w-5xl text-justify mb-16"},t("about.description",{years:(new Date).getFullYear()-1997}))))},S=function(){var e=Object(c.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"md:mx-16 mx-4"},r.a.createElement("h1",{className:"title col-span-12 text-2xl xl:text-5xl text-center mb-16"},t("contact.title")),r.a.createElement("div",{className:"mb-16 flex justify-around"},[{id:1,title:"LinkedIn",href:"https://www.linkedin.com/in/d-paiva/",icon:"linkedin"},{id:2,title:"GitHub",href:"https://github.com/beckerin",icon:"github"}].map(function(e){return r.a.createElement("a",{key:e.id,href:e.href,className:e.size?e.size:"md:h-32 md:w-32 h-16 w-16"},r.a.createElement("img",{src:"../../img/icon-"+e.icon+".svg",className:"w-full h-full object-cover text-black",alt:"icone "+e.title}))}))))},j=function(e){var t=e.showMenu,a=e.setIsMenuLink,o=e.menu,s=t?"block ":"hidden ";return s+="h-full w-full fixed p-8 z-[100] bg-black/40 flex items-center justify-center",r.a.createElement("div",{className:s},r.a.createElement(b,{items:o,className:"flex flex-col gap-8 text-xl text-center",isMenuLink:t,setIsMenuLink:a}))};function C(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(c.a)("common"),d=s.t,h=(s.i18n,[{id:"item1",title:"navbar.home",route:"home"},{id:"item2",title:"navbar.projects",route:"projects"},{id:"item3",title:"navbar.about",route:"about"},{id:"item4",title:"navbar.contact",route:"contact"}]);return r.a.createElement("div",{className:"App"},r.a.createElement(j,{menu:h,showMenu:a,setIsMenuLink:o}),r.a.createElement("div",{className:a?"blur":""},r.a.createElement(f,{menu:h,showMenu:a,setShowMenu:o}),r.a.createElement(n,{id:"home",className:"mb-16"},r.a.createElement(m,null)),r.a.createElement(n,{id:"projects",className:"mb-16"},r.a.createElement(x,null)),r.a.createElement(n,{id:"about",className:"mb-16"},r.a.createElement(k,null)),r.a.createElement(n,{id:"contact",className:"mb-16"},r.a.createElement(S,null)),r.a.createElement(n,null,r.a.createElement("div",{className:"flex-row justify-center text-center"},r.a.createElement("div",{className:"font-2xl mb-8"},d("footer.description"),r.a.createElement(g,{href:"https://github.com/beckerin",target:"_blank"},"@DiegoPaiva"))))))}var N=a(66),L=a(25),M=a(31),I=a(32);L.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:I},pt:{common:M}}}),s.a.createRoot(document.getElementById("root")).render(r.a.createElement(N.a,{i18n:L.a},r.a.createElement(C,null)))}},[[34,1,2]]]);
//# sourceMappingURL=main.ae117e28.chunk.js.map