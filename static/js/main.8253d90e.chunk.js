(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(11),s=a.n(c),r=a(16),o=a(12),l=a(13),u=a(17),m=a(14),g=a(18);a(25);function p(e){return n.a.createElement("span",null,n.a.createElement("img",{src:e.src,alt:e.alt,id:e.id,key:e.id,onClick:function(){e.clickme(e.id)}}))}var d=a(15),h=a.n(d),k="https://api.giphy.com/v1/gifs/search?q=",f="&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20",b={search:function(e){return console.log(k+e+f),h.a.get(k+e+f)}},v=[{id:0,alt:"bob",src:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{id:1,alt:"krabs",src:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{id:2,alt:"squid",src:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{id:3,alt:"onim",src:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"}],E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).clickme=function(e){a.state.images_clicked.includes(e)?a.setState({score:0,images_clicked:[],message:"You Loose! Start Clicking to play again!"}):a.setState({score:a.state.score+1,images_clicked:[].concat(Object(r.a)(a.state.images_clicked),[e]),message:"Keep it up!"})},a.onInput=function(e){var t=e.target.value.trim();a.setState({searchTerm:t})},a.searchGiphy=function(e){e.preventDefault(),b.search(a.state.searchTerm).then(function(e){var t=e.data.data,i=[];t.forEach(function(e){var t={id:e.id,src:e.images.original_still.url,alt:e.slug};i.push(t)}),a.setState({images:i})})},a.state={score:0,images:v,images_clicked:[],message:"Click a Picture",searchTerm:""},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",null,this.state.message),n.a.createElement("form",null,n.a.createElement("input",{type:"text",value:this.state.searchTerm,onChange:this.onInput}),n.a.createElement("input",{type:"submit",onClick:this.searchGiphy})),n.a.createElement("div",null,"Score: ",this.state.score),this.state.images.map(function(t){return n.a.createElement(p,{id:t.id,alt:t.alt,src:t.src,clickme:e.clickme})}))}}]),t}(i.Component);s.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8253d90e.chunk.js.map