/*! 3745 2013-9-17 14:8:14 */
define(["lib/jquery/1_9","lib/jh","comp/tagStrOperate"],function(e,t,n){var r=function(){var e={},r={},o=function(e){r.elm=e};return r.checkTags=function(e){var o=r.elm.value,i=n.toArray(o);return i.length>8?(e({error:{msg:"最多可输入8个标签",status:-1}}),!1):t.every(i,function(e){return e.length<21})?(e({tags:i}),!0):(e({error:{msg:"单个标签不能超过20个字",status:-2}}),!1)},r.addTagToInput=function(e){r.elm.value=n.add(r.elm.value,e)},r.getTagArray=function(){return n.toArray(r.elm.value)},"test"==this?(r._pri=e,r._init=o):o.apply(r,arguments),r};return r});