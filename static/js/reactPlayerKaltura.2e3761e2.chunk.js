(self.webpackChunklogin=self.webpackChunklogin||[]).push([[261],{9332:function(e,n,t){var r,a=t(6690).default,o=t(9728).default,u=t(6115).default,l=t(1655).default,i=t(6389).default,c=t(4704).default,s=Object.create,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,d=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var a,o=c(y(n));try{var u=function(){var o=a.value;m.call(e,o)||o===t||f(e,o,{get:function(){return n[o]},enumerable:!(r=p(n,o))||r.enumerable})};for(o.s();!(a=o.n()).done;)u()}catch(l){o.e(l)}finally{o.f()}}return e},v=function(e,n,t){return function(e,n,t){n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},P={};!function(e,n){for(var t in n)f(e,t,{get:n[t],enumerable:!0})}(P,{default:function(){return w}}),e.exports=(r=P,h(f({},"__esModule",{value:!0}),r));var k=function(e,n,t){return t=null!=e?s(d(e)):{},h(!n&&e&&e.__esModule?t:f(t,"default",{value:e,enumerable:!0}),e)}(t(2791)),b=t(135),g=t(365),w=function(e){"use strict";l(t,e);var n=i(t);function t(){var e;return a(this,t),e=n.apply(this,arguments),v(u(e),"callPlayer",b.callPlayer),v(u(e),"duration",null),v(u(e),"currentTime",null),v(u(e),"secondsLoaded",null),v(u(e),"mute",(function(){e.callPlayer("mute")})),v(u(e),"unmute",(function(){e.callPlayer("unmute")})),v(u(e),"ref",(function(n){e.iframe=n})),e}return o(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;(0,b.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){n.iframe&&(n.player=new e.Player(n.iframe),n.player.on("ready",(function(){setTimeout((function(){n.player.isReady=!0,n.player.setLoop(n.props.loop),n.props.muted&&n.player.mute(),n.addListeners(n.player,n.props),n.props.onReady()}),500)})))}),this.props.onError)}},{key:"addListeners",value:function(e,n){var t=this;e.on("play",n.onPlay),e.on("pause",n.onPause),e.on("ended",n.onEnded),e.on("error",n.onError),e.on("timeupdate",(function(e){var n=e.duration,r=e.seconds;t.duration=n,t.currentTime=r}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){return k.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}]),t}(k.Component);v(w,"displayName","Kaltura"),v(w,"canPlay",g.canPlay.kaltura)}}]);
//# sourceMappingURL=reactPlayerKaltura.2e3761e2.chunk.js.map