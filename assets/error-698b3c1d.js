
define("layouts/error",["require","exports","module","config","models/exception","lib/view","layouts/error.tmpl","layouts/error.css"],function(a,b,c){function h(a){a.preventDefault(),window.location.href=window.location.href}function i(a){a.preventDefault(),d.get("router").reload()}var d=a("config"),e=a("models/exception"),f=a("lib/view"),g=c.exports=f.extend({template:a("layouts/error.tmpl"),css:a("layouts/error.css"),ModelClass:e,className:"error g-box-full g-background-default g-shadow-inset",events:{"click .error__reload":h,"click .error__back":i},getTemplateData:function(a){return{message:a.message,is_widget_ready:d.get("widgetReady")}}})}),
define("layouts/error.tmpl",["vendor/handlebars-runtime"],function(){return require("vendor/handlebars-runtime").template(function(a,b,c,d,e){function p(a,b){var c="",d;c+=" <p>",d=a.message,typeof d===l?d=d.call(a,{hash:{}}):d===n&&(d=m.call(a,"message",{hash:{}}));if(d||d===0)c+=d;return c+="</p>\n",c}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;g=b.message,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+='\n<a class="g-sc-logo" href="http://soundcloud.com" title="',g="Play on SoundCloud",h=c.$t,g=h.call(b,g,{hash:{}}),f+=o(g)+'">SoundCloud.com</a>\n',f})}),
define("layouts/error.css",["require","exports","module"],function(a,b,c){var d=c.exports=document.createElement("style"),e=".error{text-align:center;padding:50px}.error__message{line-height:20px}.error>.g-sc-logo{display:inline-block}";d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e)),e=null})