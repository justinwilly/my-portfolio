(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,n,t){e.exports={popoverHover:"HoverFx_popoverHover__2dE5x",OPACTITYTRANSFORM:"HoverFx_OPACTITYTRANSFORM__20dB7",popoverHoverOut:"HoverFx_popoverHoverOut__21aLP",OPACTITYTRANSFORMOUT:"HoverFx_OPACTITYTRANSFORMOUT__1PlWz",fadeInText:"HoverFx_fadeInText__2hqro",FADEINTEXT:"HoverFx_FADEINTEXT__34Bvz",fadeOutText:"HoverFx_fadeOutText__3tKBq",FADEOUTTEXT:"HoverFx_FADEOUTTEXT__2MRDi"}},185:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(35),r=t.n(i),l=(t(91),t(92),t(3)),c=t(5),s=t(68),u=t.n(s),p=t(4),d=t(69),m=t.n(d),h=t(70),f=t.n(h),b=t(71);function x(){var e=Object(l.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 200px;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 30px;\n  color: white;\n  z-index: 3;\n  a {\n    color: white;\n  }\n  i {\n    margin: 0 8px;\n    cursor: pointer;\n    &:hover {\n      color: #f53b54;\n    }\n  }\n"]);return x=function(){return e},e}function g(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  height; 100vh;\n\n"]);return g=function(){return e},e}function v(){var e=Object(l.a)(['\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(18%, 22%, 31%, 0.8);\n  color: white;\n  h1 {\n    ont-family: "Montserrat", sans-serif;\n    font-weight: 200;\n    padding: 30vh 0 0 0;\n    margin: 0;\n    font-size: 100px;\n    animation: TEXT-FADE 2.5s ease;\n    span {\n      color: #e8374f;\n    }\n    @media (max-width: 1100px) {\n      font-size: 80px;\n    }\n    @media (max-width: 850px) {\n      font-size: 65px;\n    }\n    @media (max-width: 680px) {\n      font-size: 55px;\n    }\n  }\n  h2 {\n    ont-family: "Montserrat", sans-serif;\n    font-size: 40px;\n    font-weight: 300;\n    margin: 0;\n    animation: TEXT-FADE 3s ease;\n    span {\n      color: #e8374f;\n    }\n    @media (max-width: 1100px) {\n      font-size: 35px;\n    }\n    @media (max-width: 850px) {\n      font-size: 30px;\n    }\n    @media (max-width: 680px) {\n      font-size: 25px;\n    }\n  }\n  button {\n    color: #f53b54;\n    border: 2px solid #f53b54;\n    background: transparent;\n    font-size: 20px;\n    font-family: "Montserrat", sans-serif;\n    width: 205px;\n    height: 45px;\n    margin: 15px;\n    position: relative;\n    z-index: 3;\n    animation: TEXT-FADE 4s ease;\n    &:hover {\n      background: #f53b54;\n      color: white;\n    }\n  }\n\n  @keyframes TEXT-FADE {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n']);return v=function(){return e},e}function w(){var e=Object(l.a)(["\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-color: black;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);\n  opactiy: 0.4;\n"]);return w=function(){return e},e}var E={particles:{number:{value:52,density:{enable:!0,value_area:2e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:1,color:"#bbbbbb"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2.891476416322726,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.1,width:1},move:{enable:!0,speed:1.206824121731046,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:0,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};function y(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1];return o.a.createElement(m.a,{speed:2},o.a.createElement(k,null,o.a.createElement(O,null,o.a.createElement("h1",null,"Thomas Hessburg"),o.a.createElement("h2",null,o.a.createElement("span",null,"Full Stack")," Web Developer"),o.a.createElement(b.a,{particlesAmountCoefficient:10,oscillationCoefficient:60,direction:"top",color:"#e8374f",hidden:t},o.a.createElement("button",{onClick:function(e){e.stopPropagation(),i(!0),setTimeout(function(){window.scrollTo(window.innerWidth>900?{top:2*window.innerHeight+700,left:0,behavior:"smooth"}:{top:3*window.innerHeight+800,left:0,behavior:"smooth"})},100),setTimeout(function(){i(!1)},4e3)},style:{cursor:"pointer"}},"See My Projects"))),o.a.createElement(j,{className:"particles",params:E})),o.a.createElement(T,null,o.a.createElement("a",{href:"https://github.com/TomHessburg",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-github"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-hessburg/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin"})),o.a.createElement("a",{href:"https://twitter.com/HessburgThomas",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("i",{onClick:function(e){window.location.href="mailto:thomas.hessburg@gmail.com"},className:"fas fa-envelope-open"})))}var k=p.a.div(w(),u.a),O=p.a.div(v()),j=Object(p.a)(f.a)(g()),T=p.a.div(x()),z=t(82),S=t.n(z);function I(){var e=Object(l.a)(["\n  width: 390px;\n  background: rgba(255, 255, 255, 0.98);\n  z-index: 5;\n  padding: 0 45px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2);\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  border-top-left-radius: 20px;\n  @media (max-width: 650px) {\n    justify-content: center;\n    width: 100%;\n    border-top-left-radius: 0;\n  }\n  ul {\n    white-space: nowrap;\n    display: flex;\n    list-style: none;\n    li {\n      cursor: pointer;\n      margin: 5px 10px;\n      font-weight: 400;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n"]);return I=function(){return e},e}function H(e){return o.a.createElement(M,null,o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(e){window.scrollTo({top:0,left:0,behavior:"smooth"})}},"home"),o.a.createElement("li",{onClick:function(e){window.scrollTo({top:window.innerHeight+100,left:0,behavior:"smooth"})}},"about me"),o.a.createElement("li",{onClick:function(e){window.scrollTo(window.innerWidth>900?{top:2*window.innerHeight+700,left:0,behavior:"smooth"}:{top:3*window.innerHeight+800,left:0,behavior:"smooth"})}},"portfolio"),o.a.createElement("li",{onClick:function(e){window.innerWidth>900?window.scrollTo({top:4500,left:0,behavior:"smooth"}):window.scrollTo({top:4800,left:0,behavior:"smooth"})}},"contact")))}var M=p.a.div(I()),_=t(74),N=t.n(_),A=t(1),C=t.n(A),F=t(14);function L(){var e=Object(l.a)(['\n  font-size: 17px;\n  font-weight: 400;\n  font-style: italic;\n  margin: 10px auto 20px;\n  width: 90%;\n  max-width: 700px;\n  font-family: "Montserrat", sans-serif;\n  @media (max-width: 900px) {\n    font-size: 14px;\n    margin-bottom: 0;\n  }\n']);return L=function(){return e},e}function P(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: #07a828;\n  color: white;\n  opacity: 0;\n  cursor: default;\n  p {\n    cursor: default;\n  }\n"]);return P=function(){return e},e}function R(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  magin: 10px auto;\n  background: rgba(0, 0, 0, 0.09);\n  padding: 5px 80px;\n  font-weight: 400;\n  @media (max-width: 650px) {\n    padding: 5px 40px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  h4 {\n    font-size: 20px;\n    margin: 0;\n    color: #e8374f;\n  }\n"]);return R=function(){return e},e}function D(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  magin: 10px auto;\n  background: rgba(0, 0, 0, 0.03);\n  padding: 5px 80px;\n  font-weight: 400;\n  @media (max-width: 650px) {\n    padding: 5px 40px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  h4 {\n    font-size: 20px;\n    margin: 0;\n    color: #e8374f;\n  }\n"]);return D=function(){return e},e}function B(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 10px;\n  @media (max-width: 900px) {\n    flex-direction: column;\n  }\n"]);return B=function(){return e},e}function X(){var e=Object(l.a)(["\n  padding: 10px;\n  width: 55%;\n  color: black;\n  background: white;\n  @media (max-width: 900px) {\n    width: 100%;\n    margin-top: 25px;\n  }\n  i {\n    font-size: 75px;\n    @media (max-width: 650px) {\n      font-size: 50px;\n    }\n  }\n  h3 {\n    font-size: 25px;\n    font-weight: 400;\n    @media (max-width: 650px) {\n      font-size: 20px;\n    }\n  }\n"]);return X=function(){return e},e}function J(){var e=Object(l.a)(["\n  text-align: start;\n  padding: 10px;\n  width: 45%;\n  font-size: 20px;\n  span {\n    font-weight: 800;\n    font-size: 24px;\n    @media (max-width: 900px) {\n      font-size: 20px;\n    }\n  }\n  @media (max-width: 900px) {\n    width: 100%;\n    border-right: 0px solid rgba(0, 0, 0, 0);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n    font-size: 16px;\n  }\n"]);return J=function(){return e},e}function Y(){var e=Object(l.a)(['\n  marign: auto;\n  width: 100%;\n  min-height: 300px;\n  max-width: 1800px;\n  padding: 15px;\n  font-family: "Montserrat", sans-serif;\n  h2 {\n    font-size: 60px;\n    margin: 10px;\n    font-weight: 100;\n\n    @media (max-width: 900px) {\n      font-size: 48px;\n    }\n  }\n']);return Y=function(){return e},e}function U(){var e=Object(l.a)(["\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  padding: 100px 40px;\n  padding-bottom: 100px;\n  width: 100vw;\n  background: #343434;\n  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%);\n  color: white;\n  @media (max-width: 900px) {\n    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);\n    padding: 100px 10px;\n  }\n"]);return U=function(){return e},e}function W(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(!1),l=Object(c.a)(r,2),s=l[0],u=l[1],p=Object(a.useState)(!1),d=Object(c.a)(p,2),m=d[0],h=d[1],f=Object(a.useState)(!1),b=Object(c.a)(f,2),x=b[0],g=b[1],v=Object(a.useState)(!1),w=Object(c.a)(v,2),E=w[0],y=w[1],k=Object(a.useState)(!1),O=Object(c.a)(k,2),j=O[0],T=O[1],z=Object(a.useState)(!1),S=Object(c.a)(z,2),I=S[0],H=S[1],M=Object(a.useState)(!1),_=Object(c.a)(M,2),A=_[0],L=_[1],P=Object(F.a)({threshold:0}),R=Object(c.a)(P,2),D=R[0],B=R[1],X=Object(F.a)({threshold:0}),J=Object(c.a)(X,2),Y=J[0],U=J[1];return o.a.createElement(G,{style:{backgroundImage:"url(".concat(N.a,")")}},o.a.createElement(q,null,o.a.createElement("h2",{className:B?C.a.fadeInText:C.a.fadeOutText,ref:D},"About Me"),o.a.createElement("hr",null),o.a.createElement(ne,{className:B?C.a.fadeInText:C.a.fadeOutText},'"...Persistence and determination alone are omnipotent. The slogan Press On! has solved and always will solve the problems of the human race...\u201d ',o.a.createElement("br",null),"- Calvin Coolidge"),o.a.createElement(V,null,o.a.createElement(K,null,o.a.createElement("p",{ref:Y,className:U?C.a.fadeInText:C.a.fadeOutText},o.a.createElement("span",null,"Hi, everyone!")," ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," My name is Thomas Hessburg, and I'm a full stack software developer from Orlando, Florida. I love to create, and I'm excited to learn and grow in the tech field. ",o.a.createElement("br",null),o.a.createElement("br",null),"After spending the past several years working as a welder/fabricator all around the country, as well as working for myself as an audio engineer writing and mixing music for bands/music groups, I've decided to take on a new challenge in learning to create software. I began my journey in mid-2018 by picking up some books/courses on JavaScript and spending 12 hour days trying to learn EVERYTHING that I possibly could. Come early 2019, I began attending Lambda School, an online, fully immersive, 30+ week dev bootcamp. I can proudly say that after over half a year and over 1,000 hours, I'm ready to make my move into the workforce. I would love to bring my talents to your company!")),o.a.createElement(Q,null,o.a.createElement("h3",null,"Technologies"),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-css3-alt"}),o.a.createElement("h4",null,"CSS"),o.a.createElement(ee,{className:t?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){i(!0)},onMouseLeave:function(e){i(!1)}},o.a.createElement("p",null,"Experienced in CSS, SASS, LESS"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-html5"}),o.a.createElement("h4",null,"HTML"),o.a.createElement(ee,{className:s?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){u(!0)},onMouseLeave:function(e){u(!1)}},o.a.createElement("p",null,"Practiced in semantic HTML and JSX"))),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-js"}),o.a.createElement("h4",null,"JavaScript"),o.a.createElement(ee,{className:m?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){h(!0)},onMouseLeave:function(e){h(!1)}},o.a.createElement("p",null,"Writing clean, ES6 syntax JavaScript is a strength"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-react"}),o.a.createElement("h4",null,"React JS"),o.a.createElement(ee,{className:x?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){g(!0)},onMouseLeave:function(e){g(!1)}},o.a.createElement("p",null,"Excellent at modern React/Redux (incuding hooks)"))),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-node-js"}),o.a.createElement("h4",null,"Node JS "),o.a.createElement(ee,{className:E?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){y(!0)},onMouseLeave:function(e){y(!1)}},o.a.createElement("p",null,"Node/Express backend development is a favorite"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fas fa-drafting-compass"}),o.a.createElement("h4",null,"UI Design"),o.a.createElement(ee,{className:j?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){T(!0)},onMouseLeave:function(e){T(!1)}},o.a.createElement("p",null,"Building clean UI's is a passion of mine"))),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-adobe"}),o.a.createElement("h4",null,"Adobe"),o.a.createElement(ee,{className:I?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){H(!0)},onMouseLeave:function(e){H(!1)}},o.a.createElement("p",null,"Able to work with design docs in Photoshop and XD"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-github"}),o.a.createElement("h4",null,"Git"),o.a.createElement(ee,{className:A?C.a.popoverHover:C.a.popoverHoverOut,onMouseEnter:function(e){L(!0)},onMouseLeave:function(e){L(!1)}},o.a.createElement("p",null,"Solid git habbits are very important in my day to day development")))))))}var G=p.a.div(U()),q=p.a.div(Y()),K=p.a.div(J()),Q=p.a.div(X()),V=p.a.div(B()),Z=p.a.div(D()),$=p.a.div(R()),ee=p.a.div(P()),ne=p.a.p(L()),te=t(76),ae=t.n(te),oe=t(77),ie=t.n(oe),re=t(78),le=t.n(re),ce=t(79),se=t.n(ce),ue=t(80),pe=t.n(ue);function de(){var e=Object(l.a)(['\n  margin: 0 auto 30px auto;\n  box-sizing: border-box;\n  width: 80vw;\n  max-width: 900px;\n  min-height: 100px;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.05);\n  position: relative;\n  font-family: "Montserrat", sans-serif;\n  p {\n    font-size: 16px;\n  }\n']);return de=function(){return e},e}function me(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: rgba(255, 255, 255, 0.1);\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 650px) {\n    min-height: 225px;\n    height: 225px;\n  }\n  div {\n    width: 80%;\n    padding: 60px 0;\n    background: rgba(255, 255, 255, 0.99);\n    border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    @media (max-width: 650px) {\n      height: 155px;\n    }\n    h3 {\n      color: #f53b54;\n      font-size: 35px;\n      font-weight: 400;\n      margin: 0;\n      @media (max-width: 650px) {\n        font-size: 28px;\n      }\n    }\n    p {\n      color: black;\n      padding: 0 20px;\n      font-weight: 400;\n      @media (max-width: 650px) {\n        font-size: 14px;\n      }\n    }\n  }\n"]);return me=function(){return e},e}function he(){var e=Object(l.a)(['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #333333;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: "Montserrat", sans-serif;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  p {\n    font-size: 34px;\n    font-weight: 800px;\n    color: white;\n    margin: 0;\n    @media (max-width: 600px) {\n      font-size: 28px;\n    }\n  }\n  button {\n    cursor: pointer;\n    width: 155px;\n    height: 40px;\n    margin: 10px;\n    color: white;\n    font-size: 20px;\n    opacity: 1;\n    @media (max-width: 600px) {\n      width: 105px;\n      height: 30px;\n    }\n    &:nth-child(1) {\n      background: #19ab33;\n      border: 2px solid #19ab33;\n    }\n    &:nth-child(2) {\n      background: white;\n      border: 2px solid white;\n      color: #19ab33;\n    }\n  }\n']);return he=function(){return e},e}function fe(){var e=Object(l.a)(['\n  margin: 30px auto 0 auto;\n  box-sizing: border-box;\n  width: 90vw;\n  max-width: 1000px;\n  min-height: 275px;\n  background: #28af3e;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  font-family: "Montserrat", sans-serif;\n\n  @media (max-width: 650px) {\n    min-height: 225px;\n  }\n']);return fe=function(){return e},e}function be(){var e=Object(l.a)(["\n  width: 100vw;\n  padding: 0 55px 50px 55px;\n  @media (max-width: 850px) {\n    padding: 0 0 50px 0;\n  }\n  background-image: url(",');\n  font-family: "Montserrat", sans-serif;\n  h2 {\n    padding-top: 80px;\n    font-size: 45px;\n    color: black;\n    margin: 0;\n    font-weight: 200;\n  }\n']);return be=function(){return e},e}var xe=function(e){var n=Object(a.useState)(!1),t=Object(c.a)(n,2),i=t[0],r=t[1],l=Object(a.useState)(!1),s=Object(c.a)(l,2),u=s[0],p=s[1],d=Object(a.useState)(!1),m=Object(c.a)(d,2),h=m[0],f=m[1],b=Object(a.useState)(!1),x=Object(c.a)(b,2),g=x[0],v=x[1],w=Object(F.a)({threshold:0}),E=Object(c.a)(w,2),y=E[0],k=E[1];return o.a.createElement(ge,null,o.a.createElement("h2",{ref:y,className:k?C.a.fadeInText:C.a.fadeOutText},"Recent Projects"),o.a.createElement("hr",{style:{marginBottom:"60px"}}),o.a.createElement(ve,{style:{backgroundImage:"url(".concat(ie.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return r(!0)},onMouseLeave:function(e){return r(!1)},className:i?C.a.popoverHover:C.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/labs12-training-bot-2","_blank")}},"github"),o.a.createElement("button",{onClick:function(e){return window.open("https://training-bot-2.netlify.com/","_blank")}},"live site"))),o.a.createElement(Ee,null,o.a.createElement("div",null,o.a.createElement("h3",null,"Training Bot"),o.a.createElement("p",null,"An application that utilizes Twillio, Sendgrid, and the Slack API to allow managers to distribute training materials to employees.")))),o.a.createElement(ye,null,o.a.createElement("p",null,"Training Bot was the capstone project for Lambda Schools main curriculum that I built. The team consisted of myself, as well as four other Lambda Students. It was built over the course of 5 weeks, and included technologies such as React/Redux, Node/express with a Postgres database, Stipe/Twillio/Sendgrid/Slack API's, Auth0 for authentication, and Material UI design. I assisted in the entire stack, implementing features on both the front end and the back end, as well as conducted user testing and more.")),o.a.createElement(ve,{style:{backgroundImage:"url(".concat(le.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return p(!0)},onMouseLeave:function(e){return p(!1)},className:u?C.a.popoverHover:C.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/lambda-build-tipsease","_blank")}},"github"))),o.a.createElement(Ee,null,o.a.createElement("div",null,o.a.createElement("h3",null,"tipEase"),o.a.createElement("p",null,"An application that allows users to tip service workers directly!")))),o.a.createElement(ye,null,o.a.createElement("p",null,"tipEase is an application that I built during my Lambda School back end curriculum. It's an application that aims to helps service workers by letting them recieve tips directly from customers, as opposed to going through their employer. This was a four day sprint project, in which I was tasked to build the back end using node/express and postgres. I worked along side an android developer and a front end architect in order to build the application. Due to unforseen sircumstances, our web application wasnt completed by the student tasked to complete it, so I took the time myself to build out the front end that you see here as well!")),o.a.createElement(ve,{style:{backgroundImage:"url(".concat(se.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return f(!0)},onMouseLeave:function(e){return f(!1)},className:h?C.a.popoverHover:C.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/appraiserbff-lambda-build-week","_blank")}},"github"))),o.a.createElement(Ee,null,o.a.createElement("div",null,o.a.createElement("h3",null,"AppraisersBFF"),o.a.createElement("p",null,"An application that uses machine learning and the Zillow API to appraise your home!")))),o.a.createElement(ye,null,o.a.createElement("p",null,"AppraiserBFF is and application I build during my Lambda School front end curriculum. Similar to tip ease, this was a 4 week sprint project. I worked along side one other front end developer, as well ass a back end developer and 2 data scientists to create an application which will find the information on your house, then respond back with an estimate based on local housing prices. It was built using React/redux and Node/express.")),o.a.createElement(ve,{style:{backgroundImage:"url(".concat(pe.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return v(!0)},onMouseLeave:function(e){return v(!1)},className:g?C.a.popoverHover:C.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/TomHessburg/My-Portfolio","_blank")}},"github"))),o.a.createElement(Ee,null,o.a.createElement("div",null,o.a.createElement("h3",null,"Portfolio"),o.a.createElement("p",null,"You're looking at it! Built using React with styled components.")))),o.a.createElement(ye,null,o.a.createElement("p",null,"I had a LOT of fun writing this portfolio website. If youd like to check out the code, feel free to take a look on github!")))},ge=p.a.div(be(),ae.a),ve=p.a.div(fe()),we=p.a.div(he()),Ee=p.a.div(me()),ye=p.a.div(de()),ke=t(81),Oe=t.n(ke);function je(){var e=Object(l.a)(["\n  width: 350px;\n  height: 100px;\n  color: white;\n  background: #1d40aa;\n  padding: 20px;\n  position: fixed;\n  bottom: 100px;\n  left: 10px;\n  animation: 0.5s "," ease-out;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: white;\n    background: transparent;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n  }\n"]);return je=function(){return e},e}function Te(){var e=Object(l.a)(["\n  width: 350px;\n  height: 100px;\n  color: white;\n  background: #db3830;\n  padding: 20px;\n  position: fixed;\n  bottom: 100px;\n  left: 10px;\n  animation: 0.5s "," ease-out;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: white;\n    background: transparent;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n  }\n"]);return Te=function(){return e},e}function ze(){var e=Object(l.a)(["\n  width: 350px;\n  height: 100px;\n  color: white;\n  background: #1cac35;\n  position: fixed;\n  bottom: 100px;\n  left: 10px;\n  animation: 0.5s "," ease-out;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: white;\n    background: transparent;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n  }\n"]);return ze=function(){return e},e}function Se(){var e=Object(l.a)(["\n  0% {\n    opacity: 0;\n    left: -100px\n  }\n  100% {\n    opacity: 1;\n    left: 10px;\n  }\n"]);return Se=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  padding: 40px;\n  color: white;\n  margin: auto;\n  width: 100vw;\n  max-width: 700px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: flex-start;\n  h3 {\n    font-size: 35px;\n  }\n  form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    input {\n      width: 90%;\n      margin: 10px 0;\n      height: 35px;\n      padding: 10px;\n      font-size: 16px;\n    }\n    textarea {\n      width: 90%;\n      margin: 10px 0;\n      height: 120px;\n      padding: 10px;\n      font-size: 16px;\n    }\n    button {\n      width: 125px;\n      height: 35px;\n      font-size: 18px;\n      color: white;\n      border: none;\n      cursor: pointer;\n      background: #1cac35;\n    }\n  }\n"]);return Ie=function(){return e},e}function He(){var e=Object(l.a)(["\n  width: 100vw;\n  min-height: 230px;\n  background: #333333;\n  color: white;\n  text-align: left;\n  padding: 10px;\n  padding-bottom: 80px;\n  a {\n    color: white;\n    &:hover {\n      color: #f53b54;\n    }\n  }\n  p {\n    text-align: center;\n  }\n"]);return He=function(){return e},e}function Me(){var e=Object(a.useState)(""),n=Object(c.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(""),l=Object(c.a)(r,2),s=l[0],u=l[1],p=Object(a.useState)(""),d=Object(c.a)(p,2),m=d[0],h=d[1],f=Object(a.useState)(""),b=Object(c.a)(f,2),x=b[0],g=b[1],v=Object(a.useState)(!1),w=Object(c.a)(v,2),E=w[0],y=w[1],k=Object(a.useState)(!1),O=Object(c.a)(k,2),j=O[0],T=O[1],z=Object(a.useState)(!1),S=Object(c.a)(z,2),I=S[0],H=S[1],M=Object(F.a)({threshold:0}),_=Object(c.a)(M,2),N=_[0],A=_[1],L=function(e){e?y(!0):T(!0)};return o.a.createElement(_e,null,E&&o.a.createElement(Ce,{onClick:function(e){y(!1)}},o.a.createElement("button",null,"x"),o.a.createElement("p",null,"successfully sent your message!")),j&&o.a.createElement(Fe,{onClick:function(e){T(!1)}},o.a.createElement("button",null,"x"),o.a.createElement("p",null,"hmmm... unfortunately I wasnt able to process this message. Might be a slight bug on my end. You can try again, or check out my email directly below!")),I&&o.a.createElement(Le,{onClick:function(e){H(!1)}},o.a.createElement("button",null,"x"),o.a.createElement("p",null,"Looks like you missed a couple things! Please provide at least a name, email, and some content so that I know who you are.")),o.a.createElement(Ne,null,o.a.createElement("h3",{className:A?C.a.fadeInText:C.a.fadeOutText},"Contact me!"),o.a.createElement("form",{ref:N,className:A?C.a.fadeInText:C.a.fadeOutText,onSubmit:function(e){if(e.preventDefault(),t&&s&&x){var n={name:t,email:s,subject:m,content:x};Oe.a.post("".concat("https://tgh-portfolio.herokuapp.com","/api/send-email"),n).then(function(e){g(""),h(""),i(""),u(""),L(!0)}).catch(function(e){return L(!1)})}else H(!0)},type:"submit"},o.a.createElement("label",null,"name ",o.a.createElement("span",null,"*")),o.a.createElement("input",{value:t,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"name"}),o.a.createElement("label",null,"e-mail ",o.a.createElement("span",null,"*")),o.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},type:"text",placeholder:"e-mail"}),o.a.createElement("label",null,"subject"),o.a.createElement("input",{value:m,onChange:function(e){return h(e.target.value)},type:"text",placeholder:"subject"}),o.a.createElement("label",null,"content ",o.a.createElement("span",null,"*")),o.a.createElement("textarea",{value:x,onChange:function(e){return g(e.target.value)},type:"text",placeholder:"content"}),o.a.createElement("button",{type:"submit"},"Submit"))),o.a.createElement("p",null,"email: thomas.hessburg@gmail.com"),o.a.createElement("p",null,"phone: (352)-636-5809"),o.a.createElement("p",null,"LinkedIn:"," ",o.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-hessburg/",rel:"noopener noreferrer",target:"_blank"},"https://www.linkedin.com/in/thomas-hessburg/")),o.a.createElement("p",null,"GitHub:"," ",o.a.createElement("a",{href:"https://github.com/TomHessburg/",rel:"noopener noreferrer",target:"_blank"},"https://github.com/TomHessburg")))}var _e=p.a.div(He()),Ne=p.a.div(Ie()),Ae=Object(p.b)(Se()),Ce=p.a.div(ze(),Ae),Fe=p.a.div(Te(),Ae),Le=p.a.div(je(),Ae);function Pe(){var e=Object(l.a)(['\n  width: 100vw;\n  min-height: 400px;\n  background: #f53b54;\n  padding-bottom: 20px;\n  font-family: "Montserrat", sans-serif;\n  @media (max-width: 900px) {\n    padding-bottom: 40px;\n  }\n  h2 {\n    margin: 0 auto 10px auto;\n    padding: 30px 10px;\n    width: 70%;\n    max-width: 800px;\n    color: white;\n    font-size: 35px;\n    text-align: start;\n  }\n  div {\n    width: 70%;\n    margin: auto;\n    border: 1px solid white;\n    text-align: start;\n    display: flex;\n    max-width: 800px;\n    li {\n      color: white;\n      font-size: 20px;\n      font-weight: 400;\n      list-style-type: square;\n      @media (max-width: 900px) {\n        font-size: 16px;\n      }\n    }\n  }\n  p {\n    width: 60%;\n    color: white;\n    margin: 15px auto;\n    font-weight: 400;\n  }\n']);return Pe=function(){return e},e}var Re=p.a.div(Pe()),De=function(){var e=Object(F.a)({threshold:0}),n=Object(c.a)(e,2),t=n[0],a=n[1];return o.a.createElement(Re,null,o.a.createElement("h2",{className:a?C.a.fadeInText:C.a.fadeOutText},"I'm currently learning..."),o.a.createElement("div",{className:a?C.a.fadeInText:C.a.fadeOutText},o.a.createElement("ul",{ref:t},o.a.createElement("li",null,"GraphQL"),o.a.createElement("li",null,"AWS"),o.a.createElement("li",null,"Advanced Node JS Concepts"),o.a.createElement("li",null,"Python"),o.a.createElement("li",null,"Algorithms/Data Structures"))))},Be=t(18);var Xe=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S.a,null),o.a.createElement(Be.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(y,e)}}),o.a.createElement(Be.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(W,e)}}),o.a.createElement(Be.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(De,e)}}),o.a.createElement(Be.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(xe,e)}}),o.a.createElement(Be.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(Me,e)}}),o.a.createElement(Be.a,{path:"/",render:function(e){return o.a.createElement(H,e)}}))},Je=t(44);r.a.render(o.a.createElement(Je.a,null,o.a.createElement(Xe,null)),document.getElementById("root"))},68:function(e,n,t){e.exports=t.p+"static/media/baron14.4cfe852e.jpg"},74:function(e,n,t){e.exports=t.p+"static/media/ep_naturalblack.23e2b6cf.png"},76:function(e,n,t){e.exports=t.p+"static/media/debut_light.b70048d2.png"},77:function(e,n,t){e.exports=t.p+"static/media/trainingbot3.7185c38e.png"},78:function(e,n,t){e.exports=t.p+"static/media/tipeasepic.7190dadc.png"},79:function(e,n,t){e.exports=t.p+"static/media/appbff2.8916a484.png"},80:function(e,n,t){e.exports=t.p+"static/media/codeimage4.ea32f887.jpeg"},86:function(e,n,t){e.exports=t(185)},91:function(e,n,t){},92:function(e,n,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.6c602f97.chunk.js.map