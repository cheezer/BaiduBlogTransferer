/*! 3948 2013-9-17 14:8:14 */
define(["lib/jquery/1_9","kit/loadElm","kit/listenResizeWin"],function(e,t,n){var i={},r={};return i.BUILDDAILE=function(e){e.btn=e.btn?e.btn:"";var t='<div class="dailogLayout __dailogLayout '+(e.layoutClass?e.layoutClass:"")+'"><div class="dailogBox __dailogBox" style="'+(e.width?"width:"+e.width+"px":"")+'">'+'<div class="dailogHead">'+(e.title?'<div class="dailogTitle">'+e.title+"</div>":"")+'<a href="#" class="dailogCancelh __dailogCancelh"></a>'+"</div>"+'<div class="dailogText">'+e.content+"</div>"+(e.panel?"":'<div class="dailogContral"><a class="dailogButton __dailogOk" href="#">确定</a>'+e.btn+"</div>")+"</div>"+'<div class="dailogMp __dailogMp"></div></div>';return t},i.IE6Size=function(){if("undefined"==typeof document.body.style.maxHeight){var t=e(document).height();e(".__dailogMp").height(t)}},i.DESTROY=function(){e(".__dailogLayout").remove()},i.getPageHeight=function(){var t=e(".page").height()||e(document).height(),n=e(window).height();return t>n?t:n},i.resize=function(t){var n=e(".__dailogBox",t)[0],i=(e(window).height()-e(n).height())/2+e(document).scrollTop()-50;5>i&&(i=5),e(n).css("top",i);var r=-(e(n).width()/2);e(n).css("marginLeft",r)},r.buildDefaultTips=function(e){return'<div class="default">'+e+"</div>"},i.checkArg=function(e,t){var t=t||{};return"string"==typeof e?t.tipsHtml=r.buildDefaultTips(e,t):(t=e,t.tipsHtml=t.tips?r.buildDefaultTips(t.tips,t):t.tipsHtml),t},i.alert=function(r,o){var a={},s={},l=function(){return s.spec=i.checkArg(r,o),s.width=o?o.width:420,s.content={content:s.spec.tipsHtml,width:s.width},s.eDailog=e(a.buildAlert(s.content))[0],t(s.eDailog,s),e(s.eDailog).on("click",".__dailogOk",function(e){e.preventDefault(),s.spec.ok&&(e.btn="ok",s.spec.ok(e)),a.destroy()}),e(s.eDailog).on("click",".__dailogCancelh",function(e){e.preventDefault(),s.spec.ok&&(e.btn="close",s.spec.ok(e)),a.destroy()}),a.show(),a};return a.buildAlert=function(e){var t=i.BUILDDAILE(e);return t},s.listenResize=function(){e(".__dailogMp",a.eDailog).height(i.getPageHeight()),i.resize(s.eDailog),i.IE6Size(s.eDailog)},a.show=function(){e(s.eDailog).appendTo("body"),s.hasListenResize||(n.add(s.listenResize),s.hasListenResize=!0),e(s.node.dailogOk).focus()},a.destroy=function(){e(s.eDailog).remove(),n.remove(s.listenResize),a=null,s=null},a.hide=function(){e(s.eDailog).hide()},l(),a},i.confirm=function(r,o){var a={},s={},l=function(){return s.width=o?o.width:420,s.spec=i.checkArg(r,o),s.content={content:s.spec.tipsHtml,btn:'<a class="dailogButton __dailogCancel"href="#">取消</a>',width:s.width},s.eDailog=e(a.buildConfirm(s.content))[0],t(s.eDailog,s),e(s.eDailog).on("click",".__dailogOk",function(e){e.preventDefault(),s.spec.ok&&(e.btn="ok",s.spec.ok(e)),a.destroy()}),e(s.eDailog).on("click",".__dailogCancelh",function(e){e.preventDefault(),s.spec.cancle&&(e.btn="close",s.spec.cancle(e)),a.destroy()}),e(s.eDailog).on("click",".__dailogCancel",function(e){e.preventDefault(),s.spec.cancle&&(e.btn="cancel",s.spec.cancle(e)),a.destroy()}),a.show(),a};return a.buildConfirm=function(e){var t=i.BUILDDAILE(e);return t},s.listenResize=function(){e(".__dailogMp",a.eDailog).height(i.getPageHeight()),i.resize(s.eDailog),i.IE6Size()},a.show=function(){e(s.eDailog).appendTo("body"),s.hasListenResize||(n.add(s.listenResize),s.hasListenResize=!0),e(".__dailogOk").css({"float":"left",marginLeft:"84px"}),e(".__dailogCancel").css({"float":"left",marginLeft:"52px"}),e(s.node.dailogOk).focus()},a.destroy=function(){e(s.eDailog).remove(),n.remove(s.listenResize),a=null,s=null},a.hide=function(){e(s.eDailog).hide()},l(),a},i.panel=function(){var r={},o={},a=function(n,a){return o.spec=i.checkArg(n,a),o.content={panel:!0,title:o.spec.title,layoutClass:o.spec.layoutClass,content:o.spec.tipsHtml,width:o.spec.width,height:o.height},r.eDailog=e(r.buildPanel(o.content))[0],t(r.eDailog,o),e(r.eDailog).on("click",".__dailogCancelh",function(e){e.preventDefault(),o.spec.ok&&(e.btn="close",o.spec.ok(e)),o.spec.hold?r.hide():r.destroy()}),r.show(),r};switch(r.buildPanel=function(e){var t=i.BUILDDAILE(e);return t},o.listenResize=function(){e(".__dailogMp",r.eDailog).height(i.getPageHeight()),i.resize(r.eDailog),i.IE6Size()},r.show=function(){e(r.eDailog).appendTo("body"),o.hasListenResize||(n.add(o.listenResize),o.hasListenResize=!0),e(r.eDailog).show()},r.destroy=function(){e(r.eDailog).remove(),n.remove(o.listenResize),r=null,o=null},r.hide=function(){e(r.eDailog).hide()},this+""){case"test":r._pri=o;case"extend":r._init=a;break;default:a.apply(r,arguments)}return r},i});