(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},24:function(e,t,n){e.exports=n(38)},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),l=n.n(o),i=(n(29),n(3)),c=n(4),s=n(6),p=n(5),u=n(7),m=(n(30),n(1));var h="https://pure-caverns-33114.herokuapp.com",y=function(){function e(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.set(i,.5)}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}function t(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.set(i,2)}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}return function(){var n=new Map;return function(t){var n=new Map;e(["Rock","Steel"],n),n.set("Ghost",0),t.set("Normal",n)}(n),function(n){var r=new Map;e(["Fire","Water","Rock","Dragon"],r),t(["Grass","Ice","Bug","Steel"],r),n.set("Fire",r)}(n),function(n){var r=new Map;t(["Fire","Ground","Rock"],r),e(["Water","Grass","Dragon"],r),n.set("Water",r)}(n),function(n){var r=new Map;t(["Water","Flying"],r),e(["Electric","Grass","Dragon"],r),r.set("Ground",0),n.set("Electric",r)}(n),function(n){var r=new Map;e(["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],r),t(["Water","Ground","Rock"],r),n.set("Grass",r)}(n),function(n){var r=new Map;e(["Fire","Water","Ice","Steel"],r),t(["Grass","Ground","Flying","Dragon"],r),n.set("Ice",r)}(n),function(n){var r=new Map;t(["Normal","Ice","Rock","Dark","Steel"],r),e(["Poison","Flying","Psychic","Bug","Fairy"],r),r.set("Ghost",0),n.set("Fighting",r)}(n),function(n){var r=new Map;e(["Poison","Ground","Rock","Ghost"],r),t(["Grass","Fairy"],r),r.set("Steel",0),n.set("Poison",r)}(n),function(n){var r=new Map;e(["Grass","Bug"],r),t(["Fire","Electric","Poison","Rock","Steel"],r),r.set("Flying",0),n.set("Ground",r)}(n),function(n){var r=new Map;e(["Electric","Rock","Steel"],r),t(["Grass","Fighting","Bug"],r),n.set("Flying",r)}(n),function(n){var r=new Map;e(["Psychic","Steel"],r),t(["Fighting","Poison"],r),r.set("Dark",0),n.set("Psychic",r)}(n),function(n){var r=new Map;e(["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],r),t(["Grass","Psychic","Dark"],r),n.set("Bug",r)}(n),function(n){var r=new Map;t(["Fire","Ice","Flying","Bug"],r),e(["Fighting","Ground","Steel"],r),n.set("Rock",r)}(n),function(n){var r=new Map;r.set("Normal",0),e(["Dark"],r),t(["Ghost","Psychic"],r),n.set("Ghost",r)}(n),function(n){var r=new Map;t(["Dragon"],r),e(["Steel"],r),r.set("Fairy",0),n.set("Dragon",r)}(n),function(n){var r=new Map;e(["Fighting","Dragon","Fairy"],r),t(["Psychic","Ghost"],r),n.set("Dark",r)}(n),function(n){var r=new Map;e(["Fire","Water","Electric","Steel"],r),t(["Ice","Fairy"],r),n.set("Steel",r)}(n),function(n){var r=new Map;t(["Fighting","Dragon","Dark"],r),e(["Fire","Poison","Steel"],r),n.set("Fairy",r)}(n),n}()}();function f(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e.types[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;if(y.get(i).has(t)&&2===y.get(i).get(t))return!0}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}function d(e,t){if(1===e.types.length){if(y.get(t).has(e.types[0])&&2===y.get(t).get(e.types[0]))return!0}else if(y.get(t).has(e.types[0])){var n=y.get(t).get(e.types[0]);if(y.get(t).has(e.types[1])){if(n*y.get(t).get(e.types[1])>=2)return!0}else if(2===n)return!0}else if(y.get(t).has(e.types[1])&&2===y.get(t).get(e.types[1]))return!0;return!1}function g(e){for(var t in e.generationFilter)if(!e.generationFilter[t])return!0;for(var n in e.gameFilter)if(e.gameFilter[n])return!0;for(var r in e.typeFilter)if(!e.typeFilter[r])return!0;return!1}var v=function(e){return{type:"ADD_POKEMON_BULK",pokemon:e}};for(var b=n(2),k={},E=0,O=["Red | Blue | Yellow","Gold | Silver | Crystal","Ruby | Sapphire | Emerald","Diamond | Pearl","Platinum","HeartGold | SoulSilver","Black | White","Black 2 | White 2","X | Y","Omega Ruby | Alpha Sapphire","Sun | Moon","Ultra Sun | Ultra Moon"];E<O.length;E++){k[O[E]]=!1}function F(e){for(var t in e)if(e[t])return t;return!1}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_GAME_FILTER":var n=F(e);if(n){for(var r in e)e[r]=!1;if(n!==t.gameToFlip)for(var a in e)e[a]=a===t.gameToFlip}else for(var o in e)e[o]=o===t.gameToFlip;return Object(b.a)({},e);case"SET_ALL_GAMES_OFF":for(var l in e)e.hasOwnProperty(l)&&(e[l]=!1);return Object(b.a)({},e);default:return Object(b.a)({},e)}},j=(n(11),function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(s.a)(this,Object(p.a)(t).call(this,e)),e.dispatch(function(e){return fetch("".concat(h,"/pokemon")).then(function(e){return e.json()}).then(function(t){return e(v(t))})}),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"findIndex",value:function(e,t){for(var n=0;n<this.props.pokemon.all.length;n++)if(this.props.pokemon.all[n].pokemonNumber===e&&t===this.props.pokemon.all[n].name)return n}},{key:"onClick",value:function(e){6!==this.props.pokemon.party.length&&(this.props.dispatch(function(e){return{type:"ADD_TO_PARTY",pokemon:e}}({name:e.name,types:e.types,pokemonNumber:e.pokemonNumber,region:e.region,generation:e.generation})),this.props.dispatch({type:"REMOVE_POKEMON",index:this.findIndex(e.pokemonNumber,e.name)}))}},{key:"gameFilterToAcronym",value:function(e){switch(e){case"Red | Blue | Yellow":return"RBY";case"Gold | Silver | Crystal":return"GSC";case"Ruby | Sapphire | Emerald":return"RSE";case"Diamond | Pearl":return"DP";case"Platinum":return"PT";case"HeartGold | SoulSilver":return"HGSS";case"Black | White":return"BW";case"Black 2 | White 2":return"BW2";case"X | Y":return"XY";case"Omega Ruby | Alpha Sapphire":return"ORAS";case"Sun | Moon":return"SM";case"Ultra Sun | Ultra Moon":return"USUM";default:return""}}},{key:"getArrayFromMap",value:function(e){var t=[];for(var n in e)e[n]&&t.push(this.gameFilterToAcronym(n));return t}},{key:"filter",value:function(){var e=this;return this.props&&this.props.pokemon.all?this.props.pokemon.all.filter(function(t){if(F(e.props.gameFilter)&&!t.games.includes(e.getArrayFromMap(e.props.gameFilter)[0]))return!1;for(var n in e.props.generationFilter)if(e.props.generationFilter.hasOwnProperty(n)&&!1===e.props.generationFilter[n]&&t.hasOwnProperty("generation")&&t.generation===Number.parseInt(n))return!1;for(var r in e.props.typeFilter)if(e.props.typeFilter.hasOwnProperty(r)&&!0===e.props.typeFilter[r]&&(t.types[0]===r||t.types[1]===r))return!0;return!1}).sort(function(t,n){var r=e.gameFilterToAcronym(F(e.props.gameFilter));return r&&t.locations.hasOwnProperty(r)&&n.locations.hasOwnProperty(r)?t.locations[r]-n.locations[r]:t.hasOwnProperty("pokemonNumber")&&n.hasOwnProperty("pokemonNumber")?t.pokemonNumber-n.pokemonNumber:t-n}):null}},{key:"render",value:function(){var e=this,t=this.filter();return 0!==t.length||g(this.props)?t?a.a.createElement("div",{className:"col-md-8 text-center"},t.map(function(t,n){var r=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),o=a.a.createElement("img",{className:r,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"64px",height:"64px",onClick:function(){return e.onClick(t,n)}});return a.a.createElement("span",{key:t.name,title:t.name},o)})):void 0:a.a.createElement("div",{className:"still-loading"},a.a.createElement("div",{className:"buffer"},a.a.createElement("img",{src:"./pokeball.png",alt:"pokeball",className:"pokeball img-fluid"})))}}]),t}(a.a.Component)),N=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party,typeFilter:e.typeFilter,generationFilter:e.generationFilter,gameFilter:e.gameFilter}})(j),P=["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"],S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"findStrengthCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,r=!1,a=void 0;try{for(var o,l=this.props.pokemon.party[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){f(o.value,e)&&t++}}catch(i){r=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-2 strengths text-right"},a.a.createElement("div",{className:"text-right"},"Strengths:"),a.a.createElement("table",{style:{width:"100px",marginLeft:"65%",textAlign:"left"}},a.a.createElement("tbody",null,P.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,e.findStrengthCount(t)))})))):null}}]),t}(a.a.Component),_=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(S),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"findWeaknessCount",value:function(e){if(this.props&&this.props.pokemon){var t=0,n=!0,r=!1,a=void 0;try{for(var o,l=this.props.pokemon.party[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){d(o.value,e)&&t++}}catch(i){r=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return t}}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-2 weaknesses text-left"},a.a.createElement("span",{className:"text-center"},"Weaknesses:"),a.a.createElement("table",{style:{width:"100px"}},a.a.createElement("tbody",null,P.map(function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,e.findWeaknessCount(t)))})))):null}}]),t}(a.a.Component),R=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(x),M=Object(m.b)()(function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(_,null),a.a.createElement(N,null),a.a.createElement(R,null))}),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(e,t){this.props.dispatch(function(e){return{type:"REMOVE_FROM_PARTY",index:e}}(t)),this.props.dispatch(function(e){return{type:"ADD_POKEMON",pokemon:e}}(e))}},{key:"render",value:function(){var e=this,n=t.setUp(this.props.pokemon.party);if(0===this.props.pokemon.all.length)return null;var r=a.a.createElement("div",null,"\xa0");return a.a.createElement("div",{className:"text-center"},n.map(function(t,n){return"empty"===t?a.a.createElement("span",{style:{display:"inline-block"},key:n},a.a.createElement("span",{className:"empty"}),r,r,a.a.createElement("br",null)):(o=1===t.types.length?"circle ".concat(t.types[0]):"circle ".concat(t.types[1],"-main ").concat(t.types[0],"-secondary"),a.a.createElement("span",{style:{display:"inline-block"},key:n},a.a.createElement("img",{className:o,src:"data:image/png;base64, ".concat(t.image),alt:t.name,width:"96px",height:"96px",onClick:function(){return e.onClick(t,n)}}),a.a.createElement("div",{className:"name"},t.name),a.a.createElement("div",null,a.a.createElement("span",{className:"type "+t.types[1]},t.types[1]),a.a.createElement("span",{className:"type "+t.types[0]},t.types[0])),a.a.createElement("br",null)));var o}))}}],[{key:"setUp",value:function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;t.push(i)}}catch(c){r=!0,a=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}for(;t.length<6;)t.push("empty");return t}}]),t}(a.a.Component),G=Object(m.b)(function(e){return{pokemon:e.pokemon,party:e.party}})(T),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"count",value:function(){var e=0;for(var t in this.props.selected)this.props.selected.hasOwnProperty(t)&&!0===this.props.selected[t]&&e++;return 18===e?"All Types Selected":0===e?"No Types Selected":e+" Selected"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.selected)this.props.selected.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.selected)if(t===e&&!0===this.props.selected[e])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_TYPE_FILTER",typeToFlip:e})}},{key:"toggleAll",value:function(){"All Types Selected"===this.count()?this.props.dispatch({type:"FLIP_ALL_TYPE_FILTER_FALSE"}):this.props.dispatch({type:"FLIP_ALL_TYPE_FILTER_TRUE"})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-4"},a.a.createElement("div",{className:"dropdown"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("span",null,this.count())),a.a.createElement("div",{className:"dropdown-menu"},a.a.createElement("div",{key:"all",className:"ml-4"},a.a.createElement("label",{className:"checkbox"},a.a.createElement("button",{onClick:function(){return e.toggleAll()}},"Select all"))),this.getNames().map(function(t){return a.a.createElement("div",{key:t,className:"ml-4"},a.a.createElement("label",{className:"checkbox"},a.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.onChange(t)},checked:e.check(t)}),t))})))):null}}]),t}(a.a.Component),A=Object(m.b)(function(e){return{pokemon:e.pokemon,selected:e.typeFilter}})(C),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"count",value:function(){var e=0;for(var t in this.props.generations)this.props.generations.hasOwnProperty(t)&&!0===this.props.generations[t]&&e++;return 7===e?"All Generations":e+" Selected"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.generations)this.props.generations.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.generations)if(t===e&&!0===this.props.generations[e])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_GEN_FILTER",generationToFlip:e})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-4"},a.a.createElement("div",{className:"dropdown float-right"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("span",null,this.count())),a.a.createElement("div",{className:"dropdown-menu"},this.getNames().map(function(n){return a.a.createElement("div",{key:n,className:"ml-4"},a.a.createElement("label",{className:"checkbox"},a.a.createElement("input",{type:"checkbox",value:n,onChange:function(){return e.onChange(n)},defaultChecked:e.check(n)}),t.addRegionalName(n)))})))):null}}],[{key:"addRegionalName",value:function(e){switch(Number.parseInt(e)){case 1:return"".concat(e,": Kanto");case 2:return"".concat(e,": Johto");case 3:return"".concat(e,": Hoenn");case 4:return"".concat(e,": Sinnoh");case 5:return"".concat(e,": Unova");case 6:return"".concat(e,": Kalos");case 7:return"".concat(e,": Alola");default:return e}}}]),t}(a.a.Component),D=Object(m.b)(function(e){return{pokemon:e.pokemon,generations:e.generationFilter}})(L),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"count",value:function(){for(var e in this.props.games)if(this.props.games.hasOwnProperty(e)&&!0===this.props.games[e])return e;return"All Games"}},{key:"getNames",value:function(){var e=[];for(var t in this.props.games)this.props.games.hasOwnProperty(t)&&e.push(t);return e}},{key:"check",value:function(e){for(var t in this.props.games)if(e===t&&!0===this.props.games[t])return!0;return!1}},{key:"onChange",value:function(e){this.props.dispatch({type:"FLIP_GAME_FILTER",gameToFlip:e})}},{key:"render",value:function(){var e=this;return this.props.pokemon.all&&0!==this.props.pokemon.all.length?a.a.createElement("div",{className:"col-md-4 text-center"},a.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.a.createElement("span",null,this.count())),a.a.createElement("div",{className:"dropdown-menu",style:{right:0,left:0}},this.getNames().map(function(t){return a.a.createElement("div",{key:t,className:"ml-4"},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",value:t,onChange:function(){return e.onChange(t)},checked:e.check(t)}),t))}))):null}}]),t}(a.a.Component),B=Object(m.b)(function(e){return{pokemon:e.pokemon,games:e.gameFilter}})(I),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return g(this.props)||this.props.all.all.length||this.props.all.party.length?a.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},a.a.createElement(A,{style:{"margin-right":"50%"}}),a.a.createElement(B,null),a.a.createElement(D,null))):a.a.createElement("span",null)}}]),t}(a.a.Component),Y=Object(m.b)(function(e){return{all:e.pokemon,party:e.party,selected:e.typeFilter,generations:e.generationFilter}})(W),U=(n(35),Object(m.b)()(function(){return a.a.createElement("span",null,a.a.createElement(Y,null),a.a.createElement("div",{className:"party"},a.a.createElement(G,null)))})),K=Object(m.b)()(function(){return a.a.createElement("div",null,a.a.createElement(U,null),a.a.createElement(M,null))}),V=n(20),X=n(8),H=n(16),J=n(21),$=n.n(J),q=n(22),z=n.n(q),Q={},Z=!0,ee=!1,te=void 0;try{for(var ne,re=P[Symbol.iterator]();!(Z=(ne=re.next()).done);Z=!0){var ae=ne.value;Q[ae]=!0}}catch(ve){ee=!0,te=ve}finally{try{Z||null==re.return||re.return()}finally{if(ee)throw te}}for(var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_TYPE_FILTER":for(var n in e)if(e.hasOwnProperty(n)&&n===t.typeToFlip){e[n]=!e[n];break}return Object(b.a)({},e);case"FLIP_ALL_TYPE_FILTER_TRUE":for(var r in e)e.hasOwnProperty(r)&&(e[r]=!0);return Object(b.a)({},e);case"FLIP_ALL_TYPE_FILTER_FALSE":for(var a in e)e.hasOwnProperty(a)&&(e[a]=!1);return Object(b.a)({},e);default:return Object(b.a)({},e)}},le={},ie=0,ce=[1,2,3,4,5,6,7];ie<ce.length;ie++){le[ce[ie]]=!0}var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FLIP_GEN_FILTER":for(var n in e)if(e.hasOwnProperty(n)&&n===t.generationToFlip){e[n]=!e[n];break}return Object(b.a)({},e);default:return Object(b.a)({},e)}},pe={all:[],party:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POKEMON_BULK":if(t.pokemon){var n=t.pokemon;return Object(b.a)({},e,{all:n})}return Object(b.a)({},e);case"ADD_TO_PARTY":if(t.pokemon){var r=e.party,a=!0,o=!1,l=void 0;try{for(var i,c=e.all[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var s=i.value;if(s.name===t.pokemon.name){r.push(s);break}}}catch(ve){o=!0,l=ve}finally{try{a||null==c.return||c.return()}finally{if(o)throw l}}return Object(b.a)({},e,{party:r})}return Object(b.a)({},e);case"REMOVE_FROM_PARTY":if(t.index||0===t.index){var p=e.party;return p.splice(t.index,1),Object(b.a)({},e,{party:p})}return Object(b.a)({},e);case"ADD_POKEMON":if(t.pokemon){var u=e.all,m=0,h=!0,y=!1,f=void 0;try{for(var d,g=u[Symbol.iterator]();!(h=(d=g.next()).done);h=!0){var v=d.value;if(v.number>m&&v.number<t.pokemon.number&&(m=e.all.indexOf(v)+1)===t.pokemon.number-1)break}}catch(ve){y=!0,f=ve}finally{try{h||null==g.return||g.return()}finally{if(y)throw f}}return u.splice(m,0,t.pokemon),Object(b.a)({},e,{all:u})}return Object(b.a)({},e);case"REMOVE_POKEMON":if(t.index||0===t.index){var k=e.all;return k.splice(t.index,1),Object(b.a)({},e,{all:k})}return Object(b.a)({},e);default:return Object(b.a)({},e)}},me=Object(X.c)({typeFilter:oe,generationFilter:se,gameFilter:w,pokemon:ue}),he=n(23),ye=function(){var e={key:"root",storage:$.a,stateReconciler:z.a},t=Object(H.a)(e,me),n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,r=Object(X.e)(t,n(Object(X.a)(he.a)));return{store:r,persistor:Object(H.b)(r)}}(),fe=ye.store,de=ye.persistor,ge=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,{store:fe},a.a.createElement(V.a,{loading:null,persistor:de},a.a.createElement(K,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.53791725.chunk.js.map