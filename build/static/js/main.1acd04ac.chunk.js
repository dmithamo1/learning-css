(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=n(1),l=n(2);function s(){var e=Object(c.a)(["\n  font-weight: bold;\n"]);return s=function(){return e},e}function u(){var e=Object(c.a)(["\n  color: white;\n  background-color: black;\n  border-radius: 8px;\n  transition: all 0.3s;\n\n  :hover {\n    color: black;\n    background-color: white;\n  }\n\n  /* To style an item on the nav differently */\n"]);return u=function(){return e},e}function f(){var e=Object(c.a)(["\n  cursor: pointer;\n  margin: 0 20px;\n  padding: 10px;\n\n  @media (max-width: 1200px) {\n    display: none;\n    &:last-of-type {\n      display: inline;\n    }\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: flex-end;\n\n  /* Using default direction === flex-direction: row;\n  * Good for creating a horizontal nav-bar\n  */\n"]);return m=function(){return e},e}function h(){var e=Object(c.a)(["\n  width: 100%;\n  margin: 0;\n  background-color: orange;\n  display: flex;\n  padding: 0.6em 0;\n  justify-content: space-between;\n"]);return h=function(){return e},e}var d=[{text:"Press"},{text:"Blog"},{text:"Contact Me"},{text:"DMithamo",isLogo:!0},{text:"Portfolio",isCallToAction:!0}],x=l.a.nav(h()),p=Object(l.a)(function(e){var t=e.className,n=e.navItems;return a.a.createElement("div",{className:t},n.filter(function(e){return!e.isLogo}).map(function(e){return e.isCallToAction?a.a.createElement(g,{key:e.text},e.text):a.a.createElement(b,{key:e.text},e.text)}))})(m()),b=l.a.p(f()),g=Object(l.a)(b)(u()),v=Object(l.a)(b)(s()),w=function(e){var t=e.className;return a.a.createElement(x,{className:t},a.a.createElement(v,null,d.filter(function(e){return e.isLogo})[0].text),a.a.createElement(p,{navItems:d}))},y=n(10),E=n(11),O=n(13),j=n(12),k=n(15);function N(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  border: 1px solid orange;\n  margin: 12px;\n  padding: 0.8em;\n  height: 30px;\n  justify-content: center;\n  :nth-child(even) {\n    flex-grow: 1;\n  }\n"]);return N=function(){return e},e}function T(){var e=Object(c.a)(["\n  flex-direction: column;\n  height: 380px;\n  @media (max-width: 1200px) {\n    flex-direction: column;\n    height: auto;\n"]);return T=function(){return e},e}function A(){var e=Object(c.a)(["\n  flex-direction: row;\n"]);return A=function(){return e},e}function S(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: circle;\n  list-style-type: lower-roman;\n  padding: 0;\n"]);return S=function(){return e},e}var C=function(e){var t=e.className,n=e.listItems;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Priorities"),a.a.createElement(B,{className:t},n.filter(function(e){return e.priority}).map(function(e){return a.a.createElement(L,{className:t,key:e.text},e.text)})))},I=function(e){var t=e.className,n=e.listItems;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Less than priority"),a.a.createElement(U,{className:t},n.filter(function(e){return!0===!e.priority}).map(function(e){return a.a.createElement(L,{className:t,key:e.text},e.text)})))},R=l.a.ol(S()),B=Object(l.a)(R)(A()),U=Object(l.a)(R)(T()),L=l.a.li(N());function P(){var e=Object(c.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid white;\n"]);return P=function(){return e},e}function z(){var e=Object(c.a)([""]);return z=function(){return e},e}function G(){var e=Object(c.a)(["\n  background-color: orange;\n  outline: none;\n  border: none;\n  padding: 1em;\n  font: inherit;\n  color: white;\n  margin: 10px 0;\n  text-transform: uppercase;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s;\n  width: 200px;\n\n  :hover {\n    background-color: greenyellow;\n    color: black;\n  }\n\n  @media (max-width: 1200px) {\n    width: 150px;\n  }\n"]);return G=function(){return e},e}function D(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin: 0 0 0 1em;\n"]);return D=function(){return e},e}var F=Object(l.a)(function(e){var t=e.className,n=e.onClickAnnotate,r=e.onClickReverse,o=e.annotateButtonText;return a.a.createElement("div",{className:t},a.a.createElement(M,{onClick:r},"Reverse order"),a.a.createElement(J,{onClick:n},o))})(D()),H=l.a.button(G()),M=Object(l.a)(H)(z()),J=Object(l.a)(H)(P()),V=F;function W(){var e=Object(c.a)(['\n  color: grey;\n  font-size: 0.6em;\n  font-weight: bold;\n  font-family: "Courier New", Courier, monospace;\n  opacity: ',";\n  width: 90%;\n  margin: 10px auto;\n"]);return W=function(){return e},e}var Y=Object(l.a)(function(e){var t=e.className,n=e.text;e.showSubscript;return a.a.createElement("p",{className:t},n)})(W(),function(e){return e.showSubscript?.5:0});function q(){var e=Object(c.a)(["\n  width: 50%;\n  margin: 20px;\n  border: 1px solid orange;\n  padding: 0 2em;\n  height: 500px;\n  @media (max-width: 1200px) {\n    height: auto;\n    margin: 10px auto;\n  }\n"]);return q=function(){return e},e}function K(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  @media (max-width: 1200px) {\n    flex-direction: column;\n    justify-contents: center;\n    margin: auto;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(c.a)(["\n  margin: 0;\n"]);return Q=function(){return e},e}function X(){var e=Object(c.a)(["\n  width: 90%;\n  margin: auto;\n  min-height: 100vh;\n"]);return X=function(){return e},e}var Z=[{text:"Good things",priority:!0},{text:"Better things",priority:!0},{text:"Other good things",priority:!0},{text:"The best things",priority:!0},{text:"Unbad things",priority:!0},{text:"Ununungood things",priority:!0},{text:"Game of Thrones",priority:!1},{text:"Avengers: Endgame",priority:!1},{text:"You should know",priority:!1},{text:"I'm not serious",priority:!1},{text:"GoT is definitely a priority",priority:!1},{text:"As is Avengers: Endgame",priority:!1}],$=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(a)))).state={showSubscript:!0,annotateButtonText:"HIDE ANNOTATIONS"},n.onClickReverse=function(){alert("Reverse clicked: WIP")},n.onClickAnnotate=function(){var e=n.state,t=e.showSubscript,r=e.annotateButtonText;n.setState({showSubscript:!t,annotateButtonText:"ANNOTATE"===r?"HIDE ANNOTATION":"ANNOTATE"})},n}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.showSubscript,n=e.annotateButtonText,r=this.props.className;return a.a.createElement(_,null,a.a.createElement(ee,null,"Here are some things I care about"),a.a.createElement(Y,{showSubscript:t,text:"3. Inside each li: using flex-box (with flex-direction set to 'column') to justify contents wrt the horizontal axis"}),a.a.createElement(te,{className:r},a.a.createElement(ne,null,a.a.createElement(Y,{showSubscript:t,text:"4. For each li: using flex-grow: 1 to make every nth item (in this case even numbered item) stretch to occupy the `rest` of the available space in a container *. Notice the flex-grow is in the direction of the flex-direction for the ol's container"}),a.a.createElement(Y,{showSubscript:t,text:"5. Using flex-wrap to force horizontally aligned items (flex-direction = 'row') to flow to the next line when width is smaller than enough"}),a.a.createElement(C,{listItems:Z})),a.a.createElement(ne,null,a.a.createElement(Y,{showSubscript:t,text:"4. For each li: using flex-grow: 1 to make every nth item (in this case even numbered item) stretch to occupy the `rest` of the available space in a container *. Notice the flex-grow is in the direction of the flex-direction for the ol's container"}),a.a.createElement(Y,{showSubscript:t,text:"5. Using flex-wrap to force vertically aligned items (flex-direction = 'column') to flow to the next column when height is smaller than enough"}),a.a.createElement(I,{listItems:Z}))),a.a.createElement(Y,{showSubscript:t,text:"6. Using `justify-content = space-around` to position the two btns below "}),a.a.createElement(Y,{showSubscript:t,text:"7. This `REVERSE ORDER` btn toggles the flex-direction of teh div above from 'row' to 'row-reverse' on click."}),a.a.createElement(V,{annotateButtonText:n,onClickAnnotate:this.onClickAnnotate,onClickReverse:this.onClickReverse}))}}]),t}(a.a.Component),_=l.a.section(X()),ee=l.a.h2(Q()),te=l.a.div(K()),ne=l.a.div(q()),re=$;function ae(){var e=Object(c.a)(['\n  background-color: black;\n  color: white;\n  margin: 0;\n  width: 100%;\n  font-size: 15px;\n  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n']);return ae=function(){return e},e}var oe=l.a.div(ae()),ie=function(e){var t=e.className;return a.a.createElement(oe,{className:t},a.a.createElement(w,null),a.a.createElement(Y,{text:"1. TOP: Using flex-wrap with default flex direction (flex-direction = row) to create a ltr nav bar"}),a.a.createElement(Y,{text:"2. ALSO TOP: Using justify-contents = space-between to place the logo on one end of a nav and other links on the other end of a nav "}),a.a.createElement(re,{className:t}))};i.a.render(a.a.createElement(ie,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1acd04ac.chunk.js.map