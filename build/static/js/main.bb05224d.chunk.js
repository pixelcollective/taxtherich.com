(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{55:function(e,t,n){e.exports=n(69)},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(29),i=n.n(a),c=n(21),l=n(20),d=n(43),s=n(44),u=n(25);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m={color:{primary:"#CFCFCF",secondary:"#FFFFFF"}};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={action:{id:"tax-jeff-bezos",loaded:!1,requested:!1}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={paths:{paths:""}},O=Object(l.combineReducers)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"color":return h({},e,{color:{primary:t.color.primary,secondary:t.color.secondary}});default:return h({},e)}},action:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"action":return b({},e,{action:t.payload});default:return b({},e)}},paths:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"paths":return v({},e,{paths:t.paths});default:return v({},e)}}}),j=Object(l.applyMiddleware)(s.a),E=Object(l.createStore)(O,Object(d.composeWithDevTools)(j)),x=n(17),k=n(16),I=n(30);function S(){var e=Object(k.a)(["\n    {\n      actions {\n        edges {\n          node {\n            id\n            action {\n              page {\n                heading\n                subheading\n                featuredImage {\n                  guid\n                  srcSet\n                }\n              }\n              action {\n                actionNetworkId\n                heading\n                context\n              }\n              profile {\n                name\n                about\n              }\n              design {\n                colorPrimary\n                colorSecondary\n                paths\n              }\n            }\n          }\n        }\n      }\n    }\n  "]);return S=function(){return e},e}var P={actions:n.n(I)()(S())},F=n(10),N=new(n(52).a)({uri:"https://taxtherich.data.tinypixel.dev/graphql"}),_=function(e){return r.a.createElement(F.a,{client:N},e.children)},H={colors:{text:"#000",background:"#fff",primary:"#07c",secondary:"#30c",muted:"#f6f6f9",gray:"#dddddf",highlight:"hsla(205, 100%, 40%, 0.125)"},fonts:{body:"system-ui, sans-serif",heading:"inherit",monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,48,64,96],fontWeights:{body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.25},space:[0,4,8,16,32,64,128,256,512],sizes:{avatar:48},radii:{default:4,circle:99999},shadows:{card:"0 0 4px rgba(0, 0, 0, .125)"},text:{heading:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},display:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading",fontSize:[5,6,7]},caps:{textTransform:"uppercase",letterSpacing:"0.1em"}},variants:{avatar:{width:"avatar",height:"avatar",borderRadius:"circle"},card:{p:2,bg:"background",boxShadow:"card"},link:{color:"primary"},nav:{fontSize:1,fontWeight:"bold",display:"inline-block",p:2,color:"inherit",textDecoration:"none",":hover,:focus,.active":{color:"primary"}}},buttons:{primary:{fontSize:2,fontWeight:"bold",color:"background",bg:"primary",borderRadius:"default"},outline:{variant:"buttons.primary",color:"primary",bg:"transparent",boxShadow:"inset 0 0 2px"},secondary:{variant:"buttons.primary",color:"background",bg:"secondary"}},styles:{root:{fontFamily:"body",fontWeight:"body",lineHeight:"body"}}},z=n(15),C=n(4),D=n(6);function W(){var e=Object(k.a)(["\n\t* { transition: all 0.2s ease-in-out; }\n\t.st0 { fill: ","; }\n\t.st1 { fill: ","; }\n\t.st2 { fill: ","; }\n"]);return W=function(){return e},e}var T=x.b.svg(W(),function(e){return Object(z.c)(.2,e.color)},function(e){return e.color},function(e){return Object(z.b)(.2,e.color)}),q=function(e){var t=e.color,n=e.paths;return r.a.createElement(D.b.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"100%"},exit:{opacity:0},transition:{duration:.3}},r.a.createElement(T,{color:t,dangerouslySetInnerHTML:{__html:"".concat(n)},viewBox:"0 0 1366 688"}))},M=function(e){return r.a.createElement(C.a,{sx:{display:"grid",gridGap:0,gridTemplateColumns:"repeat(auto-fit, minmax(600px, 1fr))"}},e.children)};function L(){var e=Object(k.a)(["\n  color: ",";\n  transition: color 0.2s ease-in-out;\n  font-size: 4rem;\n  font-weight: 900;\n  margin-bottom: 1rem;\n  margin-top: 0rem;\n"]);return L=function(){return e},e}function R(){var e=Object(k.a)(["\n  background: ",";\n  transition: background-color 0.2s ease-in-out;\n  border-bottom: 1px solid white;\n"]);return R=function(){return e},e}var Y=Object(x.b)(C.a)(R(),function(e){return e.color}),A=Object(x.b)(C.e)(L(),function(e){return e.color}),B=function(e){var t=e.heading,n=e.subheading,o=Object(c.c)(function(e){return e.color}).color,a=Object(c.c)(function(e){return e.paths}).paths,i=Object(z.a)(o.secondary);return r.a.createElement(Y,{pt:[1,0],color:"#0F0F0F"},r.a.createElement(M,null,r.a.createElement(C.a,{p:[5],color:"white"},r.a.createElement(D.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:1}},r.a.createElement(A,{as:"h1",fontFamily:["sans-serif"],fontWeight:[900],fontSize:[7],mb:2,color:i||"white",dangerouslySetInnerHTML:{__html:t}})),r.a.createElement(D.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:2}},r.a.createElement(C.e,{as:"h2",fontSize:[5],fontWeight:["normal"],fontFamily:["sans-serif"],color:"white",dangerouslySetInnerHTML:{__html:n}}))),r.a.createElement(C.a,null,r.a.createElement(q,{paths:a,color:i||"white"}))))},J=function(){return r.a.createElement("div",null,"\xa0")},G=n(53),X=n(38),K=n(50),Q=n(51),U=function(){function e(t){Object(K.a)(this,e),this.actionId=t}return Object(Q.a)(e,[{key:"loadScript",value:function(){if(document.querySelectorAll("#actionNetwork-".concat(this.actionId)).length<=0){var e=document.createElement("script");return e.src="https://actionnetwork.org/widgets/v3/petition/".concat(this.actionId,"?format=js&source=widget"),e.id="actionNetwork-".concat(this.actionId),document.body.appendChild(e),e.id}}},{key:"removeScript",value:function(){document.querySelectorAll("#actionNetwork-".concat(this.actionId)).forEach(function(e){return e.parentNode.removeChild(e)})}}]),e}();function V(){var e=Object(k.a)(['\n  max-width: 500px;\n\n  #can_embed_form_inner {\n    #form_col1 {\n      width: 100%;\n\n      #action_welcome_message_inner {\n        color: black;\n      }\n    }\n\n    #form_col2 {\n      width: 100%;\n\n      #form-comments {\n        display: none;\n      }\n\n      input[type="submit"] {\n        margin-top: 1em;\n      }\n    }\n\n    h2,\n    h3,\n    h4 {\n      display: none;\n    }\n\n    .core_field {\n      margin-top: 0.2em;\n\n      label {\n        top: -8px;\n        right: 0;\n        left: auto;\n\n        &::after {\n          height: 14px;\n        }\n      }\n\n      input {\n        background: transparent;\n        border: none;\n        border-bottom: 2px solid white;\n        color: white;\n\n        &::placeholder {\n          color: rgba(255, 255, 255, 0.5);\n        }\n\n        &.error_input {\n          border: none;\n          box-shadow: none;\n          border-bottom: 2px solid red;\n        }\n      }\n    }\n  }\n']);return V=function(){return e},e}var Z=x.b.div(V()),$=function(e){var t=e.handleClose,n=e.actionText,o=e.actionId;e.openAction;return r.a.createElement(M,null,r.a.createElement(D.b.div,{initial:{position:"relative",fontSize:"16px",color:"white"},transition:{duration:.2}},r.a.createElement(C.f,{mb:[4],dangerouslySetInnerHTML:{__html:n}}),r.a.createElement(D.b.div,{initial:{transformOrigin:"center",display:"inline"}},r.a.createElement(Z,{id:"can-petition-area-".concat(o)}),r.a.createElement(C.a,{mt:[4],onClick:function(){return t(o)}},r.a.createElement(C.b,{style:{fontSize:"1em",cursor:"pointer",textDecoration:"none",position:"relative",overflow:"hidden"},ml:[2],color:"black",backgroundColor:"white",fontSize:[2]},"Return")))))},ee=function(e){return r.a.createElement(D.b.div,{initial:{backgroundColor:"rgb(175, 198, 255)",height:"100vh",width:"100vw"},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:.2}},r.a.createElement(C.d,{style:{justifyContent:"center",alignContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(C.c,null,r.a.createElement(C.e,{color:"hsla(0, 0%, 0%, 0.8)"},"Loading..."))))},te=function(e){return r.a.createElement(D.b.div,{initial:{backgroundColor:"rgb(175, 198, 255)",height:"100vh",width:"100vw"},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:.2}},r.a.createElement(C.d,{style:{justifyContent:"center",alignContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(C.c,null,r.a.createElement(C.e,{color:"hsla(0, 0%, 0%, 0.8)"},"Error..."))))},ne=function(e){var t=e.actions,n=Object(X.a)(t),a=n.data,i=n.loading,l=n.error,d=Object(o.useState)(""),s=Object(G.a)(d,2),u=s[0],p=s[1],h=Object(c.b)(),m=Object(c.c)(function(e){return e.action}),f=new U(m.action.id);!0===m.action.requested&&!1===m.action.loaded?f.loadScript():!1===m.action.requested&&!0===m.action.loaded&&(f.removeScript(),h({type:"action",payload:{id:"",loaded:!1,requested:!1}}));var b=function(e){p(""),h({type:"action",payload:{id:e,loaded:!0,requested:!1}})};return i?r.a.createElement(ee,null):l?r.a.createElement(te,null):a?r.a.createElement(M,{max:["50%"],minWidth:["100%"]},a.actions.edges.map(function(e){var t=e.node.action,n=t.design,o=t.action,a=t.page;return r.a.createElement(C.a,{key:o.actionNetworkId},r.a.createElement(D.b.div,{initial:{opacity:0,zIndex:1,backgroundColor:n.colorSecondary?n.colorSecondary:"rgba(255, 255, 255, 0.95)",minHeight:"50vh",maxHeight:"50vh",overflowY:"hidden",overflowX:"hidden"},whileHover:function(){return h({type:"color",color:{primary:n.colorPrimary,secondary:n.colorSecondary}}),h({type:"paths",paths:n.paths}),{backgroundColor:n.colorSecondary?Object(z.b)(.1,Object(z.a)(n.colorSecondary)):"rgba(255, 255, 255, 1)",cursor:u===o.actionNetworkId?"arrow":"pointer"}},animate:u===o.actionNetworkId?{opacity:1,maxHeight:"100vh",minWidth:"100vw",position:"fixed",left:0,right:0,bottom:0,top:0,zIndex:100,transformOrigin:"center",overflowY:"scroll"}:""===u?{position:"relative",overflowY:"hidden",maxHeight:"50vh",zIndex:100,opacity:1}:{overflowY:"hidden",maxHeight:"50vh",opacity:0,position:"absolute",zIndex:-100,scrollPosition:"top"},onTap:function(){return e=o.actionNetworkId,h({type:"action",payload:{id:e,loaded:!1,requested:!0}}),void p(e);var e},transition:{duration:.2}},r.a.createElement(D.b.img,{src:a.featuredImage&&a.featuredImage.guid,initial:{position:u&&u===o.actionNetworkId?"fixed":"absolute",zIndex:-100,minHeight:"100%",maxHeight:"106%",opacity:.1,top:0,left:0,objectFit:"cover",minWidth:"100vw",height:u===o.actionNetworkId&&"100vh",width:u===o.actionNetworkId&&"110vw",scale:1.2},animate:{scale:u===o.actionNetworkId?1.1:1.2,opacity:(o.actionNetworkId,.1)},transition:{type:"spring",stiffness:100,duration:u===o.actionNetworkId?3e3:30,delay:u===o.actionNetworkId?.2:0}}),r.a.createElement(C.a,{display:"inline-block",m:[5],lineHeight:[1],maxWidth:(o.actionNetworkId,["80vw"]),maxHeight:u===o.actionNetworkId?"none":"50vh",overflowY:u===o.actionNetworkId&&"hidden",fontSize:[6],position:"relative",fontWeight:["800"]},r.a.createElement(D.b.div,{className:"box",initial:u===o.actionNetworkId?{scale:1}:{scale:1}&&{type:"spring",stiffness:1,duration:1,color:Object(z.c)(.3,Object(z.a)(n.colorSecondary))},dangerouslySetInnerHTML:{__html:a.heading}}),r.a.createElement(C.f,{color:"white",fontSize:[5],my:[4],mt:[3],dangerouslySetInnerHTML:{__html:a.subheading}}),r.a.createElement(D.b.div,{initial:{opacity:0,height:0},animate:u===o.actionNetworkId?{opacity:1,height:"auto"}:{opacity:0,height:0}},r.a.createElement($,{actionText:o.petition,actionId:o.actionNetworkId,handleClose:b,paths:n.paths&&n.paths})))))})):null},oe=function(e){var t=e.actions,n=e.primary;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{action:n}),r.a.createElement(ne,{actions:t}))},re=(n(68),function(){return r.a.createElement(c.a,{store:E},r.a.createElement(_,null,r.a.createElement(x.a,{theme:H},r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{heading:"Tax the Rich",subheading:"It's time to finally pay your share.",background:"#F4F4F4",color:"#333333"}),r.a.createElement(oe,{actions:P.actions})))))});i.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.bb05224d.chunk.js.map