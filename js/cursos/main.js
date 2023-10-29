function reqListenerForPageLoad (e) { 
    urL= e.explicitOriginalTarget.responseURL
    urL= urL.slice(urL.indexOf("/") + 1, urL.length)
    urL= urL.slice(urL.indexOf("/") + 1, urL.length)
    urL= urL.slice(urL.indexOf("/"), urL.length)
    console.log(urL)
    history.pushState({page: 1}, "", urL);  
    document.open(); 
    document.write( e.target.responseText ); 
    document.close(); 
}; 
       
function loadPage(x, s){
    if(x != window.location.pathname || (typeof s != undefined && s == "p")){
        var xxa = new XMLHttpRequest(); 
        xxa.addEventListener("load", reqListenerForPageLoad); 
        xxa.open("GET", x); 
        xxa.send(); 
    }
}
   

window.onpopstate= function(){
loadPage(window.location.pathname, "p")
}


/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
 paceOptions = {
    restartOnPushState: false
}
!function(){function o(t,e){return function(){return t.apply(e,arguments)}}var u,c,i,s,n,y,t,l,v,r,a,p,e,h,w,b,f,g,d,m,k,S,q,L,x,P,T,R,j,O,E,M,A,C,N,_,F,U,W,X,D,H,I,z,G,B,J=[].slice,K={}.hasOwnProperty,Q=function(t,e){for(var n in e)K.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},V=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function Y(){}for(g={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,f=window.cancelAnimationFrame||window.mozCancelAnimationFrame,p=function(t,e,n){if("function"==typeof t.addEventListener)return t.addEventListener(e,n,!1);var r;"function"!=typeof t["on"+e]||"object"!=typeof t["on"+e].eventListeners?(r=new s,"function"==typeof t["on"+e]&&r.on(e,t["on"+e]),t["on"+e]=function(t){return r.trigger(e,t)},t["on"+e].eventListeners=r):r=t["on"+e].eventListeners,r.on(e,n)},null==R&&(R=function(t){return setTimeout(t,50)},f=function(t){return clearTimeout(t)}),O=function(e){var n=P(),r=function(){var t=P()-n;return 33<=t?(n=P(),e(t,function(){return R(r)})):setTimeout(r,33-t)};return r()},j=function(){var t=arguments[0],e=arguments[1],n=3<=arguments.length?J.call(arguments,2):[];return"function"==typeof t[e]?t[e].apply(t,n):t[e]},d=function(){for(var t,e,n,r=arguments[0],s=2<=arguments.length?J.call(arguments,1):[],o=0,i=s.length;o<i;o++)if(e=s[o])for(t in e)K.call(e,t)&&(n=e[t],null!=r[t]&&"object"==typeof r[t]&&null!=n&&"object"==typeof n?d(r[t],n):r[t]=n);return r},h=function(t){for(var e,n,r=e=0,s=0,o=t.length;s<o;s++)n=t[s],r+=Math.abs(n),e++;return r/e},k=function(t,e){var n,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",t):void 0}}},Y.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},Y.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},Y.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},Y.prototype.trigger=function(){var t,e,n,r,s,o,i=arguments[0],a=2<=arguments.length?J.call(arguments,1):[];if(null!=(r=this.bindings)&&r[i]){for(n=0,o=[];n<this.bindings[i].length;)e=(s=this.bindings[i][n]).handler,t=s.ctx,s=s.once,e.apply(null!=t?t:this,a),s?o.push(this.bindings[i].splice(n,1)):o.push(n++);return o}},B=Y,y=window.Pace||{},window.Pace=y,d(y,B.prototype),T=y.options=d({},g,window.paceOptions,k()),X=0,H=(z=["ajax","document","eventLag","elements"]).length;X<H;X++)!0===T[C=z[X]]&&(T[C]=g[C]);function Z(){return Z.__super__.constructor.apply(this,arguments)}function $(){this.progress=0}function tt(){this.bindings={}}function et(){var e,o=this;et.__super__.constructor.apply(this,arguments),e=function(r){var s=r.open;return r.open=function(t,e,n){return A(t)&&o.trigger("request",{type:t,url:e,request:r}),s.apply(r,arguments)}},window.XMLHttpRequest=function(t){t=new W(t);return e(t),t};try{m(window.XMLHttpRequest,W)}catch(t){}if(null!=U){window.XDomainRequest=function(){var t=new U;return e(t),t};try{m(window.XDomainRequest,U)}catch(t){}}if(null!=F&&T.ajax.trackWebSockets){window.WebSocket=function(t,e){var n=null!=e?new F(t,e):new F(t);return A("socket")&&o.trigger("request",{type:"socket",url:t,protocols:e,request:n}),n};try{m(window.WebSocket,F)}catch(t){}}}function nt(){this.complete=o(this.complete,this);var t=this;this.elements=[],S().on("request",function(){return t.watch.apply(t,arguments)})}function rt(t){var e,n,r,s;for(null==t&&(t={}),this.complete=o(this.complete,this),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(s=t.selectors).length;n<r;n++)e=s[n],this.elements.push(new i(e,this.complete))}function st(t,e){this.selector=t,this.completeCallback=e,this.progress=0,this.check()}function ot(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}function it(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=T.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}B=Error,Q(Z,B),n=Z,$.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(T.target)))throw new n;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var e=""!==T.className?" "+T.className:"";this.el.innerHTML='<div class="pace-progress'+e+'">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},$.prototype.finish=function(){var t=this.getElement();return t.className=t.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},$.prototype.update=function(t){return this.progress=t,y.trigger("progress",t),this.render()},$.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){n=t}return this.el=void 0},$.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(T.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,o=(i=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),y.trigger("change",this.progress),this.lastRenderedProgress=this.progress},$.prototype.done=function(){return 100<=this.progress},c=$,tt.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},tt.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},s=tt,W=window.XMLHttpRequest,U=window.XDomainRequest,F=window.WebSocket,m=function(t,e){var n,r=[];for(n in e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(t){return function(){return e.prototype[t]}}(n),configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(t){0}return r},L=[],y.ignore=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("ignore"),e=t.apply(null,e),L.shift(),e},y.track=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("track"),e=t.apply(null,e),L.shift(),e},A=function(t){if(null==t&&(t="GET"),"track"===L[0])return"force";if(!L.length&&T.ajax){if("socket"===t&&T.ajax.trackWebSockets)return!0;if(t=t.toUpperCase(),0<=V.call(T.ajax.trackMethods,t))return!0}return!1},Q(et,s),t=et,D=null,M=function(t){for(var e,n=T.ajax.ignoreURLs,r=0,s=n.length;r<s;r++)if("string"==typeof(e=n[r])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(S=function(){return D=null==D?new t:D})().on("request",function(t){var o,i=t.type,a=t.request,e=t.url;if(!M(e))return y.running||!1===T.restartOnRequestAfter&&"force"!==A(i)?void 0:(o=arguments,"boolean"==typeof(e=T.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,n,r,s="socket"===i?a.readyState<1:0<(s=a.readyState)&&s<4;if(s){for(y.restart(),r=[],t=0,e=(n=y.sources).length;t<e;t++){if((C=n[t])instanceof u){C.watch.apply(C,o);break}r.push(void 0)}return r}},e))}),nt.prototype.watch=function(t){var e=t.type,n=t.request,t=t.url;if(!M(t))return n=new("socket"===e?r:a)(n,this.complete),this.elements.push(n)},nt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},u=nt,a=function(e,n){var t,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(p(e,"progress",function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2}),t=0,r=(o=["load","abort","timeout","error"]).length;t<r;t++)p(e,o[t],function(){return n(i),i.progress=100});else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?(n(i),i.progress=100):3===e.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}},r=function(t,e){for(var n,r=this,s=this.progress=0,o=(n=["error","open"]).length;s<o;s++)p(t,n[s],function(){return e(r),r.progress=100})},rt.prototype.complete=function(e){return this.elements=this.elements.filter(function(t){return t!==e})},k=rt,st.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},T.elements.checkInterval)},st.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},i=st,ot.prototype.states={loading:0,interactive:50,complete:100},B=ot,Q=function(){var e,n,r,s,o,i=this;this.progress=0,o=[],s=0,r=P(),n=setInterval(function(){var t=P()-r-50;return r=P(),o.push(t),o.length>T.eventLag.sampleCount&&o.shift(),e=h(o),++s>=T.eventLag.minSamples&&e<T.eventLag.lagThreshold?(i.progress=100,clearInterval(n)):i.progress=3/(e+3)*100},50)},it.prototype.tick=function(t,e){return 100<=(e=null==e?j(this.source,"progress"):e)&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/T.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),e=1-Math.pow(this.progress/100,T.easeFactor),this.progress+=e*this.rate*t,this.progress=Math.min(this.lastProgress+T.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v=it,b=e=_=w=E=N=null,y.running=!1,q=function(){if(T.restartOnPushState)return y.restart()},null!=window.history.pushState&&(I=window.history.pushState,window.history.pushState=function(){return q(),I.apply(window.history,arguments)}),null!=window.history.replaceState&&(G=window.history.replaceState,window.history.replaceState=function(){return q(),G.apply(window.history,arguments)}),l={ajax:u,elements:k,document:B,eventLag:Q},(x=function(){var t,e,n,r,s,o,i,a;for(y.sources=N=[],e=0,r=(o=["ajax","elements","document","eventLag"]).length;e<r;e++)!1!==T[t=o[e]]&&N.push(new l[t](T[t]));for(n=0,s=(a=null!=(i=T.extraSources)?i:[]).length;n<s;n++)C=a[n],N.push(new C(T));return y.bar=w=new c,E=[],_=new v})(),y.stop=function(){return y.trigger("stop"),y.running=!1,w.destroy(),b=!0,null!=e&&("function"==typeof f&&f(e),e=null),x()},y.restart=function(){return y.trigger("restart"),y.stop(),y.start()},y.go=function(){var m;return y.running=!0,w.render(),m=P(),b=!1,e=O(function(t,e){w.progress;for(var n,r,s,o,i,a,u,c,l,p,h=a=0,f=!0,g=u=0,d=N.length;u<d;g=++u)for(C=N[g],i=null!=E[g]?E[g]:E[g]=[],s=c=0,l=(r=null!=(p=C.elements)?p:[C]).length;c<l;s=++c)o=r[s],f&=(o=null!=i[s]?i[s]:i[s]=new v(o)).done,o.done||(h++,a+=o.tick(t));return n=a/h,w.update(_.tick(t,n)),w.done()||f||b?(w.update(100),y.trigger("done"),setTimeout(function(){return w.finish(),y.running=!1,y.trigger("hide")},Math.max(T.ghostTime,Math.max(T.minTime-(P()-m),0)))):e()})},y.start=function(t){d(T,t),y.running=!0;try{w.render()}catch(t){n=t}return document.querySelector(".pace")?(y.trigger("start"),y.go()):setTimeout(y.start,50)},"function"==typeof define&&define.amd?define(function(){return y}):"object"==typeof exports?module.exports=y:T.startOnPageLoad&&y.start()}.call(this);
                
function openModal(a) {
    $("#theater").addClass("animated fadeIn ")
    $(".theater").css({
        "display": "block"
    })
    $this = a.closest('.story')
    var source = a.attr('src');
    $('.theater #bigPic').attr('src', source);

    var user = a.closest('.story').find(".username").html();
    $('.theater .comments .info .username').html(user);

    var time = a.closest('.story').find(".time").html();
    $('.theater .comments .info .time').html(time);

    var title = a.closest('.story').find(".title").html();
    $('.theater .comments .title').html(title);

    if (a.closest('.story').find(".options .bookmark").hasClass("true")) {
        $('.theater .comments .options .bookmark').addClass("true");
    } else {
        $('.theater .comments .options .bookmark').removeClass("true");
    }
    if (a.closest('.story').find(".options .star").hasClass("true")) {
        $('.theater .comments .options .star').addClass("true");
    } else {
        $('.theater .comments .options .star').removeClass("true");
    }

    var pic = a.closest('.story').find(".info img").attr('src');
    $('.theater .comments .info #pic').attr('src', pic);

    var ref = a.closest('.story').find(".options ul a").attr('href');
    $('.theater .comments .options ul a').attr('href', ref);

    if($("#bigPic").width()<=$("#bigPic").height()){
        $("#bigPic").css({ "width":"100%"})
    }else{

    }
      $(".more").mCustomScrollbar({theme: 
        "minimal-dark", 
        autoExpandScrollbar: true,
        scrollInertia: 100});
      
        $("#theater").height($(window).height() - 40);

    $("#picContainer").width($("#bigPic").width());
    $("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
    $("#theater").width("90%");
    responsive()
}

function closeModal() {
    if ($('.theater .comments .options .bookmark').hasClass("true")) {
        $this.find('.options .bookmark').addClass("true");
    } else {
        $this.find('.options .bookmark').removeClass("true");
    }
    if ($('.theater .comments .options .star').hasClass("true")) {
        $this.find('.options .star').addClass("true");
    } else {
        $this.find('.options .star').removeClass("true");
    }
    $(".theater").css({
        "display": "none"
    })
}
$(document).on("ready",function(e){
    purger.purge(); 
                    

$("header").after(`<aside class="searchResults hidden">
        <div>
        </div>
    </aside>`)
possibleResults=[[["Megan Denise Fox", "MeganFox"], {users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/nc79cNubi8_tn.jpg", rol: ["Editora", "+65"], type: "Usuario"}], [["Laura Escobar Bonnett", "L"], {users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Diseñadora", "+71"], type: "Usuario"}], [["Shailene Diann Woodley", "whale_Shailene"], {users_name: "Shailene Diann Woodley", username: "whale_Shailene", profilePic: "/resources/images/whale_Shailene/RKRWeNhDgJ_tn.jpg", rol: ["SEO", "+98"], type: "Usuario"}], [["Luis Eduardo Gallego García", "A.K.A._Dizzy"], {users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/4uHf7tgk8C_tn.jpg", rol: ["CEO", "+100"], type: "Usuario"}], [["Aura María Cardona Demasiado", "AuraCardonaC"], {users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/H5TxBHq4ff_tn.jpg", rol: ["Profe de fitness", "+94"], type: "Usuario"}], [["Juan José Martínez Vidal", "truck"], {users_name: "Juan José Martínez Vidal", username: "truck", profilePic: "/resources/images/truck/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], type: "Usuario"}], , [["Walter White", "user"], {users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], type: "Usuario"}], [["Algunos Poemas Que He Escrito"], {name: "Algunos Poemas Que He Escrito", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/4uHf7tgk8C_tn.jpg", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Algunos Poemas Que He Escrito", type: "Blog"}], [["Constructor And Business Partners"], {name: "Constructor And Business Partners", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/4uHf7tgk8C_tn.jpg", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/blog/Constructor And Business Partners", type: "Blog"}], [["Widgets"], {name: "Widgets", users_name: "Luis Eduardo Gallego García", username: "A.K.A._Dizzy", profilePic: "/resources/images/A.K.A._Dizzy/4uHf7tgk8C_tn.jpg", rol: ["CEO", "+100"], href: "/A.K.A._Dizzy/p/i9d2g2cftdCds", type: "Proyecto"}], [["myProjext1"], {name: "myProjext1", users_name: "Megan Denise Fox", username: "MeganFox", profilePic: "/resources/images/MeganFox/nc79cNubi8_tn.jpg", rol: ["Editora", "+65"], href: "/MeganFox/p/iD8299D88d3D2", type: "Proyecto"}], [["minesweeper"], {name: "minesweeper", users_name: "Laura Escobar Bonnett", username: "L", profilePic: "/resources/images/L/OGnpwD3jys_tn.jpg", rol: ["Diseñadora", "+71"], href: "/L/p/2kNoind8JsjD9", type: "Proyecto"}], [["lX"], {name: "lX", users_name: "Aura María Cardona Demasiado", username: "AuraCardonaC", profilePic: "/resources/images/AuraCardonaC/H5TxBHq4ff_tn.jpg", rol: ["Profe de fitness", "+94"], href: "/AuraCardonaC/p/di29D8jj8dj2d", type: "Proyecto"}], [["--The Whole Board--", "The Whole Board"], {name: "--The Whole Board--", users_name: "Shailene Diann Woodley", username: "whale_Shailene", profilePic: "/resources/images/whale_Shailene/RKRWeNhDgJ_tn.jpg", rol: ["SEO", "+98"], href: "/whale_Shailene/p/K28fcCjs9J20v", type: "Proyecto"}], [["Vv11"], {name: "Vv11", users_name: "Juan José Martínez Vidal", username: "truck", profilePic: "/resources/images/truck/sdlQg1CoQ3_tn.jpg", rol: ["Dubber", "+88"], href: "/truck/p/u889Dj8Q22dSC", type: "Proyecto"}], [["_dvlpmt"], {name: "_dvlpmt", users_name: "Walter White", username: "user", profilePic: "/resources/images/white.jpg", rol: ["Moderador", "+60"], href: "/user/p/8d299s2gvkL9", type: "Proyecto"}], [["Para Que Rayes", "Photopea", "app"], {app_name: "Para Que Rayes", href: "/app/ParaQueRayes", screenshot_photo: "/resources/screenshots/ParaQueRayes_screenshot.jpg", type: "app"}], [["Matemáticas", "Curso", "Curso de Matemáticas"], {curso_name: "Curso de Matemáticas", href: "/curso-mat", screenshot_photo: "/resources/screenshots/matemáticas_screenshot.png", type: "curso"}], [["Filosofía", "Curso", "Curso de Filosofía"], {curso_name: "Curso de Filosofía", href: "/curso-fil", screenshot_photo: "/resources/screenshots/filosofía_screenshot.png", type: "curso"}]]

$(".buscar").on("input", function(){  if($(this).val() !== ""){$(".searchResults").removeClass("hidden")}else{ $(".searchResults").addClass("hidden"); return}
results= []
for(var e in possibleResults){
for(var u in possibleResults[e][0]){
if(possibleResults[e][0][u].toLowerCase().indexOf($(this).val().toLowerCase()) == 0){
if(results.indexOf(possibleResults[e][1]) == -1)results[results.length]= possibleResults[e][1]
}
}
}

$(".searchResults > div").html("")
for(var f in results){
if(results[f].type == "Usuario"){
$(".searchResults > div").append(
`<section class="result">
<a href= "/` + results[f].username + `"></a>
<div class="profilePic">
<img src="` + results[f].profilePic + `" alt="">
<input class="knob button" data-width="106" data-height="106" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="` + results[f].rol[1].slice(1) + `"></div>
<div class="username">` + results[f].users_name + `<p class="rol">` + results[f].rol[0] + ` <b>` + results[f].rol[1] + `</b></p></div>               
<span class="resulttype">Usuario</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "Blog"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="profilePic">
<img src="` + results[f].profilePic + `" alt="">
<input class="knob button" data-width="106" data-height="106" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="` + results[f].rol[1].slice(1) + `"></div>
<div class="username">` + results[f].users_name + `<a class= "name">&nbsp; | ` + results[f].name + `</a></div>               
<span class="resulttype">Blog</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "app"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="screenshot">
<img src="` + results[f].screenshot_photo + `" alt=""></div>
<div class="appName">` + `<a class= "name">`  + results[f].app_name +  `</a></div>               
<span class="resulttype">App</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "curso"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="screenshot">
<img src="` + results[f].screenshot_photo + `" alt=""></div>
<div class="cursoName">` + `<a class= "name">`  + results[f].curso_name +  `</a></div>               
<span class="resulttype">Curso</span>
</section>`
)
}
}
for(var f in results){
if(results[f].type == "Proyecto"){
$(".searchResults > div").append(
`<section class="result">
<a href= "` + results[f].href + `"></a>
<div class="profilePic">
<img src="` + results[f].profilePic + `" alt="">
<input class="knob button" data-width="106" data-height="106" data-fgColor="#2ecc71" data-bgColor="rgba(0,0,0,0)" data-displayInput=false data-thickness=".06" readonly value="` + results[f].rol[1].slice(1) + `"></div>
<div class="username">` + results[f].users_name + `<a class= "name">&nbsp; | ` + results[f].name + `</a></div>               
<span class="resulttype">Proyecto</span>
</section>`
)
}
}
$(".searchResults a").click(function(ed){if($(this).attr("target") !== "_blank" && $(this).attr("href") != undefined){ed.preventDefault(); loadPage($(this).attr("href"))}})
$(".knob").knob()
})
$(document).on("keydown", function(r){
switch(r.keyCode){
  case 40:
        if(!$(".searchResults").is(".hidden") && !$(".result#resaltado").length){
            $($(".result")[0]).attr("id", "resaltado")
            $($(".result")[0]).children()[0].focus()
            setTimeout(function(){$(".searchResults > div").scrollTop(0)}, 20)
        }else if(!$(".searchResults").is(".hidden") && $(".result#resaltado").index() != $(".result").length - 1){
            $(".result#resaltado").next().children()[0].focus()
            $(".result#resaltado").next().attr("id", "resaltado")
            $($(".result#resaltado")[0]).attr("id", "")
        }
    break;
  case 38:
        if(!$(".searchResults").is(".hidden") && $(".result#resaltado").length && $(".result#resaltado").index() != 0){
            $(".result#resaltado").prev().children()[0].focus()
            $(".result#resaltado").prev().attr("id", "resaltado")
            $($(".result#resaltado")[1]).attr("id", "")
        }
    break;
}
})
    $("html").click(function() {
        $(".wrapper").removeClass("visible")
        $("#right-menu .index-arrow").removeClass("open");
        $("#profileSettings").removeClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 


});

$('#profileSettings').click(function(i){
    i.stopPropagation()
   
}); 
});
$(document).keypress(function (e) {
if(!$("textarea").is(":focus") && !$("input").is(":focus")){
    if (e.keyCode == 108) {
        $(".current").find('.options .star').toggleClass("true");
    }
    if (e.keyCode == 98) {
        $(".current").find('.options .bookmark').toggleClass("true");
    }
    if (e.keyCode == 102) {
        openModal($(".current .pic"))
    }
    var forward;
    if (e.keyCode == 106) {
        forward = true;
    } else if (e.keyCode == 107) {
        forward = false;
    } else {
        return true;
    }


    if (!$(".story.current").length) {
        $(".story:first").addClass("current");
    }

    if ($(".story.current").length) {
        var current = $(".story.current");
        var next;
        if (forward) {
            next = current.next(".story")
        } else {
            next = current.prev(".story");
        }
        if (next.length) {
            current.removeClass("current");
            next.addClass("current");
        } else {
            loadMore();
        }
    }

    $("html, body").animate({
        scrollTop: $(".current").offset().top - 56
    }, 400);
    }
});
var c = 0
var $this
$(window).on("load", function () {
    responsive();
    $("#chat ul li").on("click",function(){
        if($(this).attr('class').split(' ')[2] == null){
            $(this).addClass( c.toString() );
            newChat($(this), c);
            c++
        }else{
            $dat =$(".chats .chat."+$(this).attr('class').split(' ')[2])
            if(! $dat.hasClass("open")){
                prependClass($dat,"open");  
            }
            $(".chats .chat."+$(this).attr('class').split(' ')[2]+" .newMessage textarea").focus();
        }
    }


        )

  
    $("#chats .chats ").on("mouseover mouseout", ".chatTitle", function() {
        $( this ).find(".close").toggleClass( "visible" );
      });
    $( ".chatTitle .close" ).on("click",
      function() {
        destroyChat($(this));
      }
    );
    $("#chats .chats ").on("click", ".chatTitle", function() {
         $( this ).closest(".chat").toggleClass("open");
       $( this ).parent().find($(".newMessage textarea")).focus()

      });
    $("#chats .chats ").on("click", ".chatTitle .close", function() {
         destroyChat($( this ))
      });
    $(".story").on("click", function () {
        $(".current").removeClass("current");
        $(this).addClass("current")
    })
    $("li").prop("title", function () {
        return $(this).find("p").text();
    });

    $('.knob').trigger(
        'configure', {
            "fgColor": "#2ecc71"
        }
    );

    $(".star").on("click", function () {
        $(this).toggleClass("true")
    });
    $(".bookmark").on("click", function () {
        $(this).toggleClass("true")
    });

    $("#dots").on("click", function () {
        $("#Store").toggleClass("open");
        $("#index-trigger").children().toggleClass("openedStore");
        $("#right-menu #dots").children().toggleClass("openedStore");
        $("#right-menu").children().toggleClass("openedStore");
        $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
        
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        
        if ($("#Store").hasClass("open")) {
            $("header").addClass("open");
           
                 $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                
            
            })
        } else {
           $("header").removeClass("open");
           $('.knob').trigger(
                   'configure', {
                       "fgColor": "#2ecc71"
                   }
               );
           }
          
               
            
        });

    $(".story .pic").on("click", function () {
        openModal($(this));
                $('#target').tooltip()

    });

    $("#close").on("click", function () {

        closeModal()
    });

    $("#wrapper").on("click", function () {
        closeModal()
    });
   
document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            if($("#theater").css("display")== "none"){
             destroyChat($(document.activeElement))
        }else{
                        closeModal();

        }
            }
    };
   
     $(".chat").on("click", function(){})

        if ($("#profileSettings").hasClass("open") && $("#Store").hasClass("open")) {
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
$("#chats .chats ").on("click", ".chat", function(ev) {
        if(getSelectionText()  == ""){
        $(this).find("textarea").focus();
}
});
    $("#profileTrigger").on("click", function (e) {
        $(".wrapper").toggleClass("visible")
        $("#right-menu .index-arrow").toggleClass("open");
        $("#profileSettings").toggleClass("open");


        if ($("#profileSettings").hasClass("open")) {
            if($("#profileSettings").hasClass("openedStore")){
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
    }
        else{
            if($("#profileSettings").hasClass("openedStore")){

            $('.knob').trigger(
                'configure', {
                    "fgColor": "#fff"
                }
            );
        }
        else{
            $('.knob').trigger(
                'configure', {
                    "fgColor": "#2ecc71"
                }
            );
        }
        }

      


e.stopPropagation() 




    });
$("#chats .chats").on("keypress", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
    if(ev.keyCode == 13 &&  $(this).val() != 0 && !ev.shiftKey){
      ev.preventDefault();
      var content = this.value;                
       $(this).closest(".chat").find(".messages").append("<p class='sent'>" + content + "</p>")
       $(this).val("")
       scrollBottom($(this).closest(".chat").find(".chatBox .messages"))
       $(this).trigger("input")
       $(this).trigger("input")
  }
 })
$("#chats .chats").on("keyup", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
$("#chats .chats").on("keydown", ".chat .chatBox .newMessage textarea", function (ev) {
    sizeMessages($(this));
 
 })
});

$(window).on("resize", function(){
    responsive();
})
function responsive() {
      $("#picContainer").width($("#theater").width()- $(".comments").outerWidth())
    $("#Store #actualStore").height($(window).height() - $("header").height() - 21);
        $("#Store #actualStore #storeSection").width($(window).width() - $("#Store #actualStore #storeList").width() - 87);
        $("#Store #actualStore #storeSection").height($("#Store #actualStore").height() - 80);
     $("#picContainer").width($("#bigPic").width());

$("#theater .comments").height($("#theater").height() - 40);
    $("#theater .comments .more").height($("#theater .comments").height() - $("#theater .info").outerHeight(true) - $("#theater .comments .title").outerHeight(true) - $("#theater .comments .options").outerHeight(true));
    $("#theater").height($(window).height() - 40);
    
        $("#sidebar").height($(window).height() - 46);
        $("#sidebar #container").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#sidebar #chat").height(($(window).height() - $("#sidebar #search").outerHeight() - 46));
        $("#resizeBottom").resizable("option", "maxHeight", ($(window).height() - $("#sidebar #search").outerHeight() - 51));
        if ($("#resizeBottom").height() > ($(window).height() - $("#sidebar #search").outerHeight() - 51)) {
            $("#resizeBottom").css({
                "height": "50%"
            })
        }

        if (parseInt($(window).width() - $("#sidebar").outerWidth()) <= 600) {
            $("#feed .story").css({
                "padding": "10px 0"
               
            })
            $("#feed .story .info").css({
                "text-align": "center"
            })

        } else {
            $("#feed .story").css({
                "padding": "10px"
            })
            $("#feed .story .info").css({
                "text-align": "left"
            })
        }
        $("#chats .chats").width($(window).width() - $("#sidebar").outerWidth() -10);
        $("#biography").width($(window).width() - $("#sidebar").outerWidth());
        $("#sidebar #container #resizeTop").height($("#sidebar").height() - $("#sidebar #container #resizeBottom").height() - 36);

 }

 function newChat(a, b){
   
        $(".chats").prepend("<div class='chat open "+b.toString()+"'><div class='chatTitle button'><p class='user'>"+ a.find("p").text() +"</p><span class='close'></span></div><div class='chatBox'><div class='messages'></div><div class='newMessage'><textarea rows='1'/><div class='emoticon'></div></div></div>");
        $(".chats .chat:first-child .newMessage textarea").focus();
        $('textarea').textareaAutoSize();

}
function destroyChat(a){
    var i = a.closest(".chat").hasClass("open") ? a.closest(".chat").attr('class').split(' ')[2] : a.closest(".chat").attr('class').split(' ')[1]
    $("#chat ul li."+i).removeClass(i)
    a.closest(".chat").remove();
    $(".chats .chat:first-child .newMessage textarea").focus();

}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function prependClass(sel, strClass) {
    var $el = jQuery(sel);

    /* prepend class */
    var classes = $el.attr('class');
    classes = strClass +' ' +classes;
    $el.attr('class', classes);
}
function getCaret(el) {
  if (el.selectionStart) {
     return el.selectionStart;
  } else if (document.selection) {
     el.focus();

   var r = document.selection.createRange();
   if (r == null) {
    return 0;
   }

    var re = el.createTextRange(),
    rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }  
  return 0;
}
function sizeMessages(a){
    CBH= a.closest(".chat").find(".chatBox").height()
    NMH = a.closest(".chat").find(".chatBox .newMessage" ).outerHeight()
    a.closest(".chat").find(".chatBox .messages").height(CBH - NMH - 8);
    a.closest(".chat").find(".chatBox .messages").css({bottom: NMH})
}
function scrollBottom(d){
    d.scrollTop(d.prop("scrollHeight"));
}

purger= {}; 
            
purger.index= 35;
                 
purger.purge= function( a ){ 
    if(typeof purger.index.in !== "undefined")return
    fT= localStorage.getItem("file_tree")
    wFT= localStorage.getItem("w_file_tree")
    if( ( localStorage.getItem( "safety_purge" ) === null || ( localStorage.getItem( "safety_purge" ) !== null && parseInt( localStorage.getItem( "safety_purge" ) ) != purger.index ) ) || ( typeof a != "undefined" && a == "bypass" ) ){ 
        for( ii in localStorage ){ 
            if( typeof localStorage[ii] != "function" && ii != "length" && ["safety_purge", "tooltip", "knob", "filesWidth", "user", "selected"].indexOf( ii ) == -1 ){ 
                (( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "raw" ) === 0 || ( function( a ){ var av= a; for( var v= 1; v <= 2; v++ )av= av.slice( av.indexOf("/") + 1 ); return av } )( ii ).indexOf( "$_" ) !== -1)? console.log( ii ): localStorage.removeItem( ii ); 
            } 
        } 
          
        localStorage.setItem("safety_purge", purger.index); 
                                
        localStorage.setItem("file_tree", fT)
        localStorage.setItem("w_file_tree", wFT)
        localStorage.setItem("knob", `<input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='60'><img title=`)
        localStorage.setItem("tooltip", `<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='60'><img src='/resources/images/white.jpg' alt='' style='object-fit: cover;  object-position: 50% 50%;'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Walter White'>Walter White</p><p class='rol'>Moderador <b style='color:#fff;'>+60</b></p></div><div class='insignia' title='Hum ' style='top: 28.405797101449274px; '></div><div class='insignia' title='Hum' style='top: 11.565217391304348px; '></div><div class='insignia' title='Hum ' style='top: 36.927536231884055px; '></div></div>` )
        localStorage.setItem("user", ` src='/resources/images/white.jpg' style= 'object-fit: cover; object-position: 50% 50%;' alt=''>&nbsp<a target= '_blank'  href='/user' >Walter White</a><span class='is'>: </span><span class='Comentario'>` )
        console.log("Purged!"); 
    }; 
}; 

purger.super_purge= function( a ){
if(!((typeof purger.index.in !== "undefined" && purger.index.in !== parseInt(localStorage.getItem("safety_purge"))) || (typeof a != "undefined" && a === "bypass")))return
localStorage.clear()
localStorage.setItem("safety_purge", purger.index.in)
localStorage.setItem("knob", `<input class='knob button' data-width='28' data-height='28' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.18' readonly value='60'><img title=`)
localStorage.setItem("tooltip", `<div class='tool'><input class='knob button' data-width='102' data-height='102' data-fgColor='#2ecc71' data-bgColor='rgba(0,0,0,0)' data-displayInput=false data-thickness='.08' readonly value='60'><img src='/resources/images/white.jpg' alt='' style='object-fit: cover;  object-position: 50% 50%;'><div class='datos'><ul class='actions'><li class='chatear' title='Chatear'>C</li><li class='agregar' title='Agregar'>A</li><li class='juzgar' title='Juzgar'>J</li></ul><p class='username' title= 'Walter White'>Walter White</p><p class='rol'>Moderador <b style='color:#fff;'>+60</b></p></div><div class='insignia' title='Hum ' style='top: 28.405797101449274px; '></div><div class='insignia' title='Hum' style='top: 11.565217391304348px; '></div><div class='insignia' title='Hum ' style='top: 36.927536231884055px; '></div></div>` )
localStorage.setItem("user", ` src='/resources/images/white.jpg' style= 'object-fit: cover; object-position: 50% 50%;' alt=''>&nbsp<a target= '_blank'  href='/user' >Walter White</a><span class='is'>: </span><span class='Comentario'>` )
console.log("superPurged All files and file_trees were also deleted!")
}