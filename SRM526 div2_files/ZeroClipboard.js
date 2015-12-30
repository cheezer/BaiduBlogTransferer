/*! 4409 2013-9-17 14:8:14 */
!function(){"use strict";var e,t=function(){var e=/\-([a-z])/g,t=function(e,t){return t.toUpperCase()};return function(n){return n.replace(e,t)}}(),n=function(e,n){var r,o,i,a,s,l;if(window.getComputedStyle?r=window.getComputedStyle(e,null).getPropertyValue(n):(o=t(n),r=e.currentStyle?e.currentStyle[o]:e.style[o]),"cursor"===n&&(!r||"auto"===r))for(i=e.tagName.toLowerCase(),a=["a"],s=0,l=a.length;l>s;s++)if(i===a[s])return"pointer";return r},r=function(e){if(m.prototype._singleton){e||(e=window.event);var t;this!==window?t=this:e.target?t=e.target:e.srcElement&&(t=e.srcElement),m.prototype._singleton.setCurrent(t)}},o=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},i=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n)},a=function(e,t){if(e.addClass)return e.addClass(t),e;if(t&&"string"==typeof t){var n=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var r=" "+e.className+" ",o=e.className,i=0,a=n.length;a>i;i++)r.indexOf(" "+n[i]+" ")<0&&(o+=" "+n[i]);e.className=o.replace(/^\s+|\s+$/g,"")}else e.className=t}return e},s=function(e,t){if(e.removeClass)return e.removeClass(t),e;if(t&&"string"==typeof t||void 0===t){var n=(t||"").split(/\s+/);if(1===e.nodeType&&e.className)if(t){for(var r=(" "+e.className+" ").replace(/[\n\t]/g," "),o=0,i=n.length;i>o;o++)r=r.replace(" "+n[o]+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}else e.className=""}return e},l=function(){var e,t,n,r=1;return"function"==typeof document.body.getBoundingClientRect&&(e=document.body.getBoundingClientRect(),t=e.right-e.left,n=document.body.offsetWidth,r=Math.round(100*(t/n))/100),r},c=function(e){var t={left:0,top:0,width:0,height:0,zIndex:999999999},r=n(e,"z-index");if(r&&"auto"!==r&&(t.zIndex=parseInt(r,10)),e.getBoundingClientRect){var o,i,a,s=e.getBoundingClientRect();"pageXOffset"in window&&"pageYOffset"in window?(o=window.pageXOffset,i=window.pageYOffset):(a=l(),o=Math.round(document.documentElement.scrollLeft/a),i=Math.round(document.documentElement.scrollTop/a));var c=document.documentElement.clientLeft||0,u=document.documentElement.clientTop||0;t.left=s.left+o-c,t.top=s.top+i-u,t.width="width"in s?s.width:s.right-s.left,t.height="height"in s?s.height:s.bottom-s.top}return t},u=function(e,t){var n=!(t&&t.useNoCache===!1);return n?(-1===e.indexOf("?")?"?":"&")+"nocache="+(new Date).getTime():""},d=function(e){var t=[],n=[];return e.trustedOrigins&&("string"==typeof e.trustedOrigins?n=n.push(e.trustedOrigins):"object"==typeof e.trustedOrigins&&"length"in e.trustedOrigins&&(n=n.concat(e.trustedOrigins))),e.trustedDomains&&("string"==typeof e.trustedDomains?n=n.push(e.trustedDomains):"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(n=n.concat(e.trustedDomains))),n.length&&t.push("trustedOrigins="+encodeURIComponent(n.join(","))),"string"==typeof e.amdModuleId&&e.amdModuleId&&t.push("amdModuleId="+encodeURIComponent(e.amdModuleId)),"string"==typeof e.cjsModuleId&&e.cjsModuleId&&t.push("cjsModuleId="+encodeURIComponent(e.cjsModuleId)),t.join("&")},f=function(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1},p=function(e){if("string"==typeof e)throw new TypeError("ZeroClipboard doesn't accept query strings.");return e.length?e:[e]},h=function(e,t,n,r,o){o?window.setTimeout(function(){e.call(t,n,r)},0):e.call(t,n,r)},m=function(e,t){if(e&&(m.prototype._singleton||this).glue(e),m.prototype._singleton)return m.prototype._singleton;m.prototype._singleton=this,this.options={};for(var n in y)this.options[n]=y[n];for(var r in t)this.options[r]=t[r];this.handlers={},m.detectFlashSupport()&&C()},g=[];m.prototype.setCurrent=function(t){e=t,this.reposition();var r=t.getAttribute("title");r&&this.setTitle(r);var o=this.options.forceHandCursor===!0||"pointer"===n(t,"cursor");v.call(this,o)},m.prototype.setText=function(e){e&&""!==e&&(this.options.text=e,this.ready()&&this.flashBridge.setText(e))},m.prototype.setTitle=function(e){e&&""!==e&&this.htmlBridge.setAttribute("title",e)},m.prototype.setSize=function(e,t){this.ready()&&this.flashBridge.setSize(e,t)},m.prototype.setHandCursor=function(e){e="boolean"==typeof e?e:!!e,v.call(this,e),this.options.forceHandCursor=e};var v=function(e){this.ready()&&this.flashBridge.setHandCursor(e)};m.version="1.2.0-beta.4";var y={moviePath:"ZeroClipboard.swf",trustedOrigins:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",allowScriptAccess:"sameDomain",useNoCache:!0,forceHandCursor:!1};m.setDefaults=function(e){for(var t in e)y[t]=e[t]},m.destroy=function(){m.prototype._singleton.unglue(g);var e=m.prototype._singleton.htmlBridge;e.parentNode.removeChild(e),delete m.prototype._singleton},m.detectFlashSupport=function(){var e=!1;if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(e=!0)}catch(t){}return!e&&navigator.mimeTypes["application/x-shockwave-flash"]&&(e=!0),e};var b=null,w=null,C=function(){var e=m.prototype._singleton,t=document.getElementById("global-zeroclipboard-html-bridge");if(!t){var n={};for(var r in e.options)n[r]=e.options[r];n.amdModuleId=b,n.cjsModuleId=w;var o=d(n),i='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+e.options.moviePath+u(e.options.moviePath,e.options)+'"/>         <param name="allowScriptAccess" value="'+e.options.allowScriptAccess+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+o+'"/>         <embed src="'+e.options.moviePath+u(e.options.moviePath,e.options)+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+o+'"           scale="exactfit">         </embed>       </object>';t=document.createElement("div"),t.id="global-zeroclipboard-html-bridge",t.setAttribute("class","global-zeroclipboard-container"),t.setAttribute("data-clipboard-ready",!1),t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.width="15px",t.style.height="15px",t.style.zIndex="9999",t.innerHTML=i,document.body.appendChild(t)}e.htmlBridge=t,e.flashBridge=document["global-zeroclipboard-flash-bridge"]||t.children[0].lastElementChild};m.prototype.resetBridge=function(){this.htmlBridge.style.left="-9999px",this.htmlBridge.style.top="-9999px",this.htmlBridge.removeAttribute("title"),this.htmlBridge.removeAttribute("data-clipboard-text"),s(e,this.options.activeClass),e=null,this.options.text=null},m.prototype.ready=function(){var e=this.htmlBridge.getAttribute("data-clipboard-ready");return"true"===e||e===!0},m.prototype.reposition=function(){if(!e)return!1;var t=c(e);this.htmlBridge.style.top=t.top+"px",this.htmlBridge.style.left=t.left+"px",this.htmlBridge.style.width=t.width+"px",this.htmlBridge.style.height=t.height+"px",this.htmlBridge.style.zIndex=t.zIndex+1,this.setSize(t.width,t.height)},m.dispatch=function(e,t){m.prototype._singleton.receiveEvent(e,t)},m.prototype.on=function(e,t){for(var n=e.toString().split(/\s/g),r=0;r<n.length;r++)e=n[r].toLowerCase().replace(/^on/,""),this.handlers[e]||(this.handlers[e]=t);this.handlers.noflash&&!m.detectFlashSupport()&&this.receiveEvent("onNoFlash",null)},m.prototype.addEventListener=m.prototype.on,m.prototype.off=function(e,t){for(var n=e.toString().split(/\s/g),r=0;r<n.length;r++){e=n[r].toLowerCase().replace(/^on/,"");for(var o in this.handlers)o===e&&this.handlers[o]===t&&delete this.handlers[o]}},m.prototype.removeEventListener=m.prototype.off,m.prototype.receiveEvent=function(t,n){t=t.toString().toLowerCase().replace(/^on/,"");var r=e,o=!0;switch(t){case"load":if(n&&parseFloat(n.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,""))<10)return this.receiveEvent("onWrongFlash",{flashVersion:n.flashVersion}),void 0;this.htmlBridge.setAttribute("data-clipboard-ready",!0);break;case"mouseover":a(r,this.options.hoverClass);break;case"mouseout":s(r,this.options.hoverClass),this.resetBridge();break;case"mousedown":a(r,this.options.activeClass);break;case"mouseup":s(r,this.options.activeClass);break;case"datarequested":var i=r.getAttribute("data-clipboard-target"),l=i?document.getElementById(i):null;if(l){var c=l.value||l.textContent||l.innerText;c&&this.setText(c)}else{var u=r.getAttribute("data-clipboard-text");u&&this.setText(u)}o=!1;break;case"complete":this.options.text=null}if(this.handlers[t]){var d=this.handlers[t];"string"==typeof d&&"function"==typeof window[d]&&(d=window[d]),"function"==typeof d&&h(d,r,this,n,o)}},m.prototype.glue=function(e){e=p(e);for(var t=0;t<e.length;t++)-1==f(e[t],g)&&(g.push(e[t]),o(e[t],"mouseover",r))},m.prototype.unglue=function(e){e=p(e);for(var t=0;t<e.length;t++){i(e[t],"mouseover",r);var n=f(e[t],g);-1!=n&&g.splice(n,1)}},"function"==typeof define&&define.amd?define(["require","exports","module"],function(e,t,n){return b=n&&n.id||null,m}):"undefined"!=typeof module&&module?(w=module.id||null,module.exports=m):window.ZeroClipboard=m}();