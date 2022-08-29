(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports={navbar:{home:"Inic\xedo",projects:"Projetos",about:"Sobre",contact:"Contato"},home:{myName:"Diego Paiva",myTitle:"Um Programador Full-Stack"},projects:{title:"Projetos",techs:"Techs Usadas",goTo:"Visitar Projeto",badges:"Pequeno icone do {{badge}}",images:"P\xe1gina principal do(a) {{name}}",ndapp:{title:"nDapp",description:"Uma plataforma descentralizada de demonstra\xe7\xe3o de dados sobre dapps de uma rede blockchain chamada Neo (N3)"},sharity:{title:"Sharity",description:"Uma plataforma para contribui\xe7\xe3o monet\xe1ria para clientes e usu\xe1rios, a plataforma oferece meios de pagamentos recorrentes como assinatura, ou como pagamento simples."},itrack:{title:"iTrack",description:"Site que tem como objetivo cadastrar cargas a serem rastreadas em tempo real, possui uma grande variedades de cargas a serem rastreadas."},eucatur:{title:"Eucatur",description:"Site de pagamentos via link, que tratava todo o traf\xe9go de pagamento e redicionava diferentes cart\xf5es a diferentes endpoints."}},about:{title:"Sobre min",description:"Sou um jovem de {{years}} anos que tem atuado na \xe1rea de desenvolvimento web. A ideia partiu de uma fagulha inicial no ensino m\xe9dio (3\xba ciclo) devido a grande disponibilidade de vagas no mercado de trabalho, a partir de cursos profissionalizantes aprimorei meus conhecimentos a ponto de ser reconhecido e convidado a trabalhar para algumas empresas da minha antiga regi\xe3o. Atrav\xe9s de aprendizagem cont\xednua, continuo aprendendo novas ferramentas e maneiras diferentes de resolver problemas."},contact:{title:"Me Contate"},footer:{description:"Criado com muito carinho - ",designer:"Layout desenvolvido por - "}}},25:function(e){e.exports={navbar:{home:"Home",projects:"Projects",about:"About",contact:"Contact"},home:{myName:"Diego Paiva",myTitle:"A Full-Stack Web Programmer"},projects:{title:"Projects",techs:"Used techs",goTo:"Look project",badges:"{{badge}} little icon",images:"{{name}} main site image",ndapp:{title:"nDapp",description:"A decentralized data demonstration platform about dapps from a blockchain network called Neo (N3)"},sharity:{title:"Sharity",description:"A platform for monetary contribution to customers and users, the platform offers means of recurring payments as a subscription, or as a one-time payment."},itrack:{title:"iTrack",description:"Website that aims to register loads to be tracked in real time, has a wide variety of loads to be tracked."},eucatur:{title:"Eucatur",description:"Link payments website, which handled all payment traffic and redirected different cards to different endpoints."}},about:{title:"About me",description:"I am a {{years}} year old Brazilian who has been working in the web development field. The idea came from an initial spark in high school (3rd cycle) due to the wide availability of vacancies in the job market, from professional courses I improved my knowledge to the point of being recognized and invited to work for some companies in my old region. Through continuous learning, I keep learning new tools and different ways to solve problems."},contact:{title:"Contact me"},footer:{description:"Made with love - ",designer:"Layout by - "}}},28:function(e,t,a){e.exports=a(52)},36:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var o=a(21),s=a.n(o),i=a(0),r=a.n(i),l=(a(36),function(e){var t=e.className?e.className:"";return r.a.createElement("div",{id:e.id,className:t},e.children)}),n=a(54),c=function(){var e=Object(n.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"h-screen flex justify-center"},r.a.createElement("div",{className:"w-screen"},r.a.createElement("img",{className:"md:object-none object-cover h-full w-full opacity-30 -mt-18",src:"./img/present-macbook.jpg"})),r.a.createElement("div",{className:"flex-row text-center h-full absolute mt-56"},r.a.createElement("h1",{className:"title col-span-12 text-5xl xl:text-9xl"},t("home.myName")),r.a.createElement("h2",{className:"description col-span-12 text-2xl"},t("home.myTitle"))))},m=function(){return r.a.createElement("div",{className:"navbar__logo w-20"},r.a.createElement("img",{src:"./img/logo-black-colorless.svg",alt:"Site Logo"}))},d=a(27),g=function(e){var t=Object(i.useState)(!1),a=Object(d.a)(t,2),o=a[0],s=a[1],l=e.className?e.className:"";return r.a.createElement("a",{href:e.href,target:e.target?e.target:"_blank",className:o?l+" secondary":l,onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)}},e.children)},h=function(e){var t=e.item,a=e.className?"navbar__item "+e.className:"navbar__item",o=Object(n.a)("common"),s=o.t;o.i18n;return r.a.createElement("li",null,r.a.createElement(g,{href:"#"+t.route,target:"_self",className:a},s(t.title)))},u=a(26),p=function(){var e=Object(n.a)("common").i18n,t=[{value:"pt",flag:"br",label:"Portuguese"},{value:"en",flag:"usa",label:"English"}];return r.a.createElement("div",{className:"flex"},r.a.createElement(u.a,{options:t,defaultValue:t[1],className:"md:mt-2 text-black",onChange:function(t){e.changeLanguage(t?t.value:"en")}}),r.a.createElement("img",{src:"./img/".concat(t.filter(function(t){return t.value==e.language})[0].flag||t[0].flag,"-flag.png"),className:"md:h-14 h-8 ml-4 md:mt-0 mt-1"}))},b=function(e){var t=e.items;return r.a.createElement("ul",{className:"navbar__list flex md:w-8/12 lg:w-6/12 w-11/12 justify-around items-center"},t.map(function(e){return r.a.createElement(h,{key:e.id,item:e})}),r.a.createElement(p,null))},f=function(){return r.a.createElement("div",{className:"navbar bg-stone-800 md:px-16 px-4 sticky top-0 z-10 px-auto flex justify-between"},r.a.createElement(m,null),r.a.createElement(b,{items:[{id:"item1",title:"navbar.home",route:"home"},{id:"item2",title:"navbar.projects",route:"projects"},{id:"item3",title:"navbar.about",route:"about"},{id:"item4",title:"navbar.contact",route:"contact"}]}))},v=function(e){var t=Object(n.a)("common").t,a=[{name:"MySQL",src:"https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"},{name:"Angular",src:"https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"},{name:"Express.js",src:"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"},{name:"Flutter",src:"https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"},{name:"JWT",src:"https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"},{name:"NPM",src:"https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"},{name:"NodeJS",src:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"},{name:"Quasar",src:"https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black"},{name:"React",src:"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"},{name:"React Native",src:"https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"},{name:"Redux",src:"https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"},{name:"React Router",src:"https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"},{name:"SASS",src:"https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"},{name:"Socket.io",src:"https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"},{name:"TailwindCSS",src:"https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"},{name:"Vue.js",src:"https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"},{name:"AWS",src:"https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"},{name:"Heroku",src:"https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"},{name:"GoLand",src:"https://img.shields.io/badge/GoLand-0f0f0f?&style=for-the-badge&logo=goland&logoColor=white"},{name:"IntelliJ IDEA",src:"https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"},{name:"Visual Studio Code",src:"https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"},{name:"Visual Studio",src:"https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"},{name:"C#",src:"https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"},{name:"CSS3",src:"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"},{name:"Go",src:"https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"},{name:"HTML5",src:"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"},{name:"Java",src:"https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"},{name:"JavaScript",src:"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"},{name:"Kotlin",src:"https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white"},{name:"TypeScript",src:"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"},{name:"Spotify",src:"https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white"},{name:"YouTube Music",src:"https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white"},{name:"Windows",src:"https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"},{name:"ESLint",src:"https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"},{name:"Apache Tomcat",src:"https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black"},{name:"Discord",src:"https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white"},{name:"Git",src:"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"},{name:"Bitbucket",src:"https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"},{name:"GitHub",src:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"},{name:"Postgres",src:"https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"},{name:"MySQL",src:"https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"}].find(function(t){return t.name.toLocaleLowerCase()==e.name.toLocaleLowerCase()});return r.a.createElement("img",{src:a?a.src:"",alt:t("projects.badges",{badge:e.name})})},y=function(e){var t=Object(n.a)("common"),a=t.t,o=(t.i18n,e.project);return r.a.createElement("div",{className:"lateral col-span-7 px-4  max-w-5xl"},r.a.createElement("h3",{className:"title text-xl text-center mb-4 mt-6"},a("projects.".concat(o.name,".title"))),r.a.createElement("p",{className:"desription mb-8 text-center"},a("projects.".concat(o.name,".description"))),r.a.createElement("div",{className:"badge"},r.a.createElement("h3",{className:"badge__title title text-xl text-center mb-4 mt-6"},a("projects.techs")),r.a.createElement("div",{className:"badge__list flex justify-center flex-wrap gap-2"},o.techs.map(function(e){return r.a.createElement(v,{name:e,key:e})}))),r.a.createElement("div",{className:"linkTo title mt-8 text-center"},r.a.createElement(g,{href:o.srcLink},a("projects.goTo"))))},w=function(e){var t=Object(n.a)("common"),a=t.t,o=(t.i18n,"./img/"+e.srcImage),s=a("projects.images",{name:e.name});return r.a.createElement("div",{className:"imagem mt-6 col-span-5 h-96 mx-4"},r.a.createElement("img",{className:"object-cover h-full w-full",src:o,alt:s}))},E=function(e){var t=e.project?e.project:{title:"",description:"",srcImage:""};return r.a.createElement("div",{className:"projeto grid grid-cols-12 mb-8"},e.invert?r.a.createElement(y,{project:t}):"",r.a.createElement(w,{srcImage:t.srcImage,name:t.name}),e.invert?"":r.a.createElement(y,{project:t}))},x=function(e){var t=Object(n.a)("common"),a=t.t;t.i18n;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"md:mx-16 mx-4"},r.a.createElement("h1",{className:"title col-span-12 text-2xl xl:text-5xl text-center mb-16"},a("projects.title")),r.a.createElement("div",{className:"projetoList"},[{id:1,name:"ndapp",srcImage:"ndapp.png",techs:["Vue.JS","TypeScript","TailwindCSS","Kotlin","MySQL","Git","GitHub"],srcLink:"https://ndapp.org/"},{id:2,name:"sharity",srcImage:"sharity.png",techs:["Vue.JS","TypeScript","TailwindCSS","Kotlin","MySQL","Git","BitBucket"],srcLink:"https://sharity.com.br/"},{id:3,name:"itrack",srcImage:"itrack.png",techs:["Vue.JS","JavaScript","TailwindCSS","Kotlin","MySQL","Git","BitBucket","IntelliJ IDEA"],srcLink:"https://itrackbrasil.com.br/"},{id:4,name:"eucatur",srcImage:"eucatur.png",techs:["Vue.JS","JavaScript","CSS3","Go","Postgres","Git","GitHub","Visual Studio Code","GoLand"],srcLink:"https://www.eucatur.com.br/"}].map(function(e){return r.a.createElement(E,{key:e.id,project:e,invert:e.id%2==0})}))))},j=function(){var e=Object(n.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"w-screen h-128"},r.a.createElement("img",{className:"object-none h-full w-full opacity-30 -mt-18",src:"./img/pattern-small-plastic.jpg"})),r.a.createElement("div",{className:"absolute md:mx-16 mx-4 pt-16"},r.a.createElement("h1",{className:"title col-span-12 text-2xl xl:text-5xl text-center mb-16"},t("about.title")),r.a.createElement("h2",{className:"description md:text-xl max-w-5xl text-justify mb-16"},t("about.description",{years:(new Date).getFullYear()-1997}))))},C=function(){var e=Object(n.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"md:mx-16 mx-4"},r.a.createElement("h1",{className:"title col-span-12 text-2xl xl:text-5xl text-center mb-16"},t("contact.title")),r.a.createElement("div",{className:"mb-16 flex justify-around"},[{id:1,title:"LinkedIn",href:"https://www.linkedin.com/in/d-paiva/",icon:"linkedin"},{id:2,title:"GitHub",href:"https://github.com/beckerin",icon:"github"},{id:3,title:"Telegram",href:"https://t.me/paiva97",icon:"telegram",size:"md:h-32 md:w-32 h-16 w-16 mt-1"},{id:4,title:"Email",href:"mailto:contato@paivadiego.com.br?subject=Ol%C3%A1%20Diego%2C%20gostaria%20de%20falar%20contigo!&body=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalho!!%0D%0A",icon:"mail",size:"md:h-28 md:w-28 h-14 w-14 md:mt-3 mt-2 md:ml-2 ml-1"}].map(function(e){return r.a.createElement("a",{key:e.id,href:e.href,className:e.size?e.size:"md:h-32 md:w-32 h-16 w-16"},r.a.createElement("img",{src:"../../img/icon-"+e.icon+".svg",className:"w-full h-full object-cover text-black",alt:"icone "+e.title}))}))))};function k(){var e=Object(n.a)("common"),t=e.t;e.i18n;return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(l,{id:"home",className:"mb-16"},r.a.createElement(c,null)),r.a.createElement(l,{id:"projects",className:"mb-16"},r.a.createElement(x,null)),r.a.createElement(l,{id:"about",className:"mb-16"},r.a.createElement(j,null)),r.a.createElement(l,{id:"contact",className:"mb-16"},r.a.createElement(C,null)),r.a.createElement(l,null,r.a.createElement("div",{className:"flex-row justify-center text-center"},r.a.createElement("div",{className:"font-2xl mb-8"},t("footer.description"),r.a.createElement(g,{href:"https://github.com/beckerin",target:"_blank"},"@DiegoPaiva")),r.a.createElement("div",{className:"font-xl mb-8"},t("footer.designer"),r.a.createElement(g,{href:"https://williammelodesign.com.br/",target:"_blank"},"@WilliamMelo")))))}var N=a(53),S=a(17),A=a(24),D=a(25);S.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:D},pt:{common:A}}}),s.a.createRoot(document.getElementById("root")).render(r.a.createElement(N.a,{i18n:S.a},r.a.createElement(k,null)))}},[[28,2,1]]]);
//# sourceMappingURL=main.de01c276.chunk.js.map