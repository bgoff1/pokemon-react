(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),i=n.n(o),c=(n(25),n(2)),l=n(3),s=n(5),u=n(4),p=n(6),m=(n(27),n(8)),y=n(1);var f="https://pure-caverns-33114.herokuapp.com",h=function(){function e(e,t){var n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;t.set(c,.5)}}catch(l){r=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}function t(e,t){var n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;t.set(c,2)}}catch(l){r=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}return function(){var n=new Map;return function(t){var n=new Map;e(["Rock","Steel"],n),n.set("Ghost",0),t.set("Normal",n)}(n),function(n){var r=new Map;e(["Fire","Water","Rock","Dragon"],r),t(["Grass","Ice","Bug","Steel"],r),n.set("Fire",r)}(n),function(n){var r=new Map;t(["Fire","Ground","Rock"],r),e(["Water","Grass","Dragon"],r),n.set("Water",r)}(n),function(n){var r=new Map;t(["Water","Flying"],r),e(["Electric","Grass","Dragon"],r),r.set("Ground",0),n.set("Electric",r)}(n),function(n){var r=new Map;e(["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],r),t(["Water","Ground","Rock"],r),n.set("Grass",r)}(n),function(n){var r=new Map;e(["Fire","Water","Ice","Steel"],r),t(["Grass","Ground","Flying","Dragon"],r),n.set("Ice",r)}(n),function(n){var r=new Map;t(["Normal","Ice","Rock","Dark","Steel"],r),e(["Poison","Flying","Psychic","Bug","Fairy"],r),r.set("Ghost",0),n.set("Fighting",r)}(n),function(n){var r=new Map;e(["Poison","Ground","Rock","Ghost"],r),t(["Grass","Fairy"],r),r.set("Steel",0),n.set("Poison",r)}(n),function(n){var r=new Map;e(["Grass","Bug"],r),t(["Fire","Electric","Poison","Rock","Steel"],r),r.set("Flying",0),n.set("Ground",r)}(n),function(n){var r=new Map;e(["Electric","Rock","Steel"],r),t(["Grass","Fighting","Bug"],r),n.set("Flying",r)}(n),function(n){var r=new Map;e(["Psychic","Steel"],r),t(["Fighting","Poison"],r),r.set("Dark",0),n.set("Psychic",r)}(n),function(n){var r=new Map;e(["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],r),t(["Grass","Psychic","Dark"],r),n.set("Bug",r)}(n),function(n){var r=new Map;t(["Fire","Ice","Flying","Bug"],r),e(["Fighting","Ground","Steel"],r),n.set("Rock",r)}(n),function(n){var r=new Map;r.set("Normal",0),e(["Dark"],r),t(["Ghost","Psychic"],r),n.set("Ghost",r)}(n),function(n){var r=new Map;t(["Dragon"],r),e(["Steel"],r),r.set("Fairy",0),n.set("Dragon",r)}(n),function(n){var r=new Map;e(["Fighting","Dragon","Fairy"],r),t(["Psychic","Ghost"],r),n.set("Dark",r)}(n),function(n){var r=new Map;e(["Fire","Water","Electric","Steel"],r),t(["Ice","Fairy"],r),n.set("Steel",r)}(n),function(n){var r=new Map;t(["Fighting","Dragon","Dark"],r),e(["Fire","Poison","Steel"],r),n.set("Fairy",r)}(n),n}()}();function k(e,t){var n=!0,r=!1,a=void 0;try{for(var o,i=e.types[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;if(h.get(c).has(t)&&2===h.get(c).get(t))return!0}}catch(l){r=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}function v(e,t){if(1===e.types.length){if(h.get(t).has(e.types[0])&&2===h.get(t).get(e.types[0]))return!0}else if(h.get(t).has(e.types[0])){var n=h.get(t).get(e.types[0]);if(h.get(t).has(e.types[1])){if(n*h.get(t).get(e.types[1])>=2)return!0}else if(2===n)return!0}else if(h.get(t).has(e.types[1])&&2===h.get(t).get(e.types[1]))return!0;return!1}var d=function(e){return{type:"ADD_POKEMON_BULK",pokemon:e}};var b="SHOW_ALL",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},O=n(7),E={pokemon:[],party:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POKEMON_BULK":if(t.pokemon){var n=t.pokemon;return Object(O.a)({},e,{pokemon:n})}return Object(O.a)({},e);case"ADD_TO_PARTY":if(t.pokemon){var r=e.party,a=!0,o=!1,i=void 0;try{for(var c,l=e.pokemon[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var s=c.value;if(s===t.pokemon){r.push(s);break}}}catch(g){o=!0,i=g}finally{try{a||null==l.return||l.return()}finally{if(o)throw i}}return Object(O.a)({},e,{party:r})}return Object(O.a)({},e);case"REMOVE_FROM_PARTY":if(t.index||0===t.index){var u=e.party;return u.splice(t.index,1),Object(O.a)({},e,{party:u})}return Object(O.a)({},e);case"ADD_POKEMON":if(t.pokemon){var p=e.pokemon,m=0,y=!0,f=!1,h=void 0;try{for(var k,v=p[Symbol.iterator]();!(y=(k=v.next()).done);y=!0){var d=k.value;if(d.number>m&&d.number<t.pokemon.number&&(m=e.pokemon.indexOf(d)+1)===t.pokemon.number-1)break}}catch(g){f=!0,h=g}finally{try{y||null==v.return||v.return()}finally{if(f)throw h}}return console.log(m),p.splice(m,0,t.pokemon),Object(O.a)({},e,{pokemon:p})}return Object(O.a)({},e);case"REMOVE_POKEMON":if(t.index||0===t.index){var b=e.pokemon;return b.splice(t.index,1),Object(O.a)({},e,{pokemon:b})}return Object(O.a)({},e);case"ADD_TYPES_CHART":default:return Object(O.a)({},e)}},w=Object(m.c)({visibilityFilter:g,pokemon:j}),F=(n(11),function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),e.dispatch(function(e){return fetch("".concat(f,"/pokemon")).then(function(e){return e.json()}).then(function(t){return e(d(t))})}),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(e,t){6!==this.props.pokemon.party.length&&(this.props.dispatch(function(e){return{type:"ADD_TO_PARTY",pokemon:e}}(e)),this.props.dispatch(function(e){return{type:"REMOVE_POKEMON",index:e}}(t)))}},{key:"render",value:function(){var e=this,t=this.props.pokemon.pokemon;if(t){var n=1;return a.a.createElement("div",{className:"col-md-8 text-center"},t.map(function(t,r){var o,i;i=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary");var c=a.a.createElement("img",{className:i,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"52px",height:"52px",onClick:function(){return e.onClick(t,r)}});return o=a.a.createElement("span",{key:n,title:t.name},c),n++,o}))}}}]),t}(a.a.Component)),S=Object(y.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(F),D=["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"],M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"findStrengthCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,r=!1,a=void 0;try{for(var o,i=this.props.pokemon.party[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){k(o.value,e)&&t++}}catch(c){r=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.pokemon&&0!==this.props.pokemon.pokemon.length?a.a.createElement("div",{className:"col-md-2 strengths"},a.a.createElement("span",{className:"text-center"},"Strengths:"),a.a.createElement("table",null,a.a.createElement("tbody",null,D.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,e.findStrengthCount(t)))})))):null}}]),t}(a.a.Component),x=Object(y.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(M),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"findWeaknessCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,r=!1,a=void 0;try{for(var o,i=this.props.pokemon.party[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){v(o.value,e)&&t++}}catch(c){r=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.pokemon&&0!==this.props.pokemon.pokemon.length?a.a.createElement("div",{className:"col-md-2 weaknesses"},a.a.createElement("span",{className:"text-center"},"Weaknesses:"),a.a.createElement("table",null,a.a.createElement("tbody",null,D.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,e.findWeaknessCount(t)))})))):null}}]),t}(a.a.Component),_=Object(y.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(P),G=Object(y.b)()(function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(x,null),a.a.createElement(S,null),a.a.createElement(_,null))}),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.pokemon.pokemon&&0!==this.props.pokemon.pokemon.length?a.a.createElement("div",{className:"col-md-2"}):null}}]),t}(a.a.Component),R=Object(y.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(N),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.pokemon.pokemon&&0!==this.props.pokemon.pokemon.length?a.a.createElement("div",{className:"col-md-2"}):null}}]),t}(a.a.Component),I=Object(y.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(C),W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(e,t){this.props.dispatch(function(e){return{type:"REMOVE_FROM_PARTY",index:e}}(t)),this.props.dispatch(function(e){return{type:"ADD_POKEMON",pokemon:e}}(e))}},{key:"render",value:function(){var e=this,n=t.setUp(this.props.pokemon.party);if(0===this.props.pokemon.pokemon.length)return null;var r=a.a.createElement("div",null,"\xa0");return a.a.createElement("div",{className:"col-md-8 text-center"},n.map(function(t,n){return"empty"===t?a.a.createElement("span",{style:{display:"inline-block"},key:n},a.a.createElement("span",{className:"empty"}),r,r,a.a.createElement("br",null)):(o=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),a.a.createElement("span",{style:{display:"inline-block"},key:n},a.a.createElement("img",{className:o,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"96px",height:"96px",onClick:function(){return e.onClick(t,n)}}),a.a.createElement("div",{className:"name"},t.name),a.a.createElement("div",null,a.a.createElement("span",{className:"type "+t.types[1]},t.types[1]),a.a.createElement("span",{className:"type "+t.types[0]},t.types[0])),a.a.createElement("br",null)));var o}))}}],[{key:"setUp",value:function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;t.push(c)}}catch(l){r=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}for(;t.length<6;)t.push("empty");return t}}]),t}(a.a.Component),A=Object(y.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(W),B=Object(y.b)()(function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(R,null),a.a.createElement(A,null),a.a.createElement(I,null))}),T=Object(y.b)()(function(){return a.a.createElement("div",null,a.a.createElement(B,null),a.a.createElement(G,null))}),K=n(19),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,V=Object(m.e)(w,L(Object(m.a)(K.a))),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,{store:V},a.a.createElement(T,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.7ab200ac.chunk.js.map