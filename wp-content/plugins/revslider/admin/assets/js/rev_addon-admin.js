function showWaitAMinute(a){var b=jQuery("#waitaminute");if(void 0!=a.delay&&(punchgs.TweenLite.to(b,.3,{autoAlpha:1,ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.set(b,{display:"block"}),setTimeout(function(){punchgs.TweenLite.to(b,.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut,onComplete:function(){punchgs.TweenLite.set(b,{display:"block"})}})},a.delay)),void 0!=a.fadeIn&&(punchgs.TweenLite.to(b,a.fadeIn/1e3,{autoAlpha:1,ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.set(b,{display:"block"})),void 0!=a.fadeOut&&punchgs.TweenLite.to(b,a.fadeOut/1e3,{autoAlpha:0,ease:punchgs.Power3.easeInOut,onComplete:function(){punchgs.TweenLite.set(b,{display:"block"})}}),void 0!=a.text)switch(a.text){case"progress1":break;default:b.html('<div class="waitaminute-message"><i class="eg-icon-emo-coffee"></i><br>'+a.text+"</div>")}}!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){"use strict";function b(a){return"string"==typeof a?parseInt(a,10):~~a}var c={wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},d=0,e=function(){var a=d++;return function(b){var c=".perfect-scrollbar-"+a;return void 0===b?c:b+c}};a.fn.perfectScrollbar=function(d,f){return this.each(function(){function g(a,c){var d=a+c,e=A-H;I=0>d?0:d>e?e:d;var f=b(I*(C-A)/(A-H));x.scrollTop(f)}function h(a,c){var d=a+c,e=z-E;F=0>d?0:d>e?e:d;var f=b(F*(B-z)/(z-E));x.scrollLeft(f)}function i(a){return w.minScrollbarLength&&(a=Math.max(a,w.minScrollbarLength)),w.maxScrollbarLength&&(a=Math.min(a,w.maxScrollbarLength)),a}function j(){var a={width:z};a.left=J?x.scrollLeft()+z-B:x.scrollLeft(),P?a.bottom=O-x.scrollTop():a.top=Q+x.scrollTop(),M.css(a);var b={top:x.scrollTop(),height:A};V?b.right=J?B-x.scrollLeft()-U-T.outerWidth():U-x.scrollLeft():b.left=J?x.scrollLeft()+2*z-B-W-T.outerWidth():W+x.scrollLeft(),S.css(b),N.css({left:F,width:E-R}),T.css({top:I,height:H-X})}function k(){x.removeClass("ps-active-x"),x.removeClass("ps-active-y"),z=w.includePadding?x.innerWidth():x.width(),A=w.includePadding?x.innerHeight():x.height(),B=x.prop("scrollWidth"),C=x.prop("scrollHeight"),!w.suppressScrollX&&B>z+w.scrollXMarginOffset?(D=!0,E=i(b(z*z/B)),F=b(x.scrollLeft()*(z-E)/(B-z))):(D=!1,E=0,F=0,x.scrollLeft(0)),!w.suppressScrollY&&C>A+w.scrollYMarginOffset?(G=!0,H=i(b(A*A/C)),I=b(x.scrollTop()*(A-H)/(C-A))):(G=!1,H=0,I=0,x.scrollTop(0)),F>=z-E&&(F=z-E),I>=A-H&&(I=A-H),j(),D&&x.addClass("ps-active-x"),G&&x.addClass("ps-active-y")}function l(){var b,c,d=!1;N.bind(K("mousedown"),function(a){c=a.pageX,b=N.position().left,M.addClass("in-scrolling"),d=!0,a.stopPropagation(),a.preventDefault()}),a(L).bind(K("mousemove"),function(a){d&&(h(b,a.pageX-c),k(),a.stopPropagation(),a.preventDefault())}),a(L).bind(K("mouseup"),function(){d&&(d=!1,M.removeClass("in-scrolling"))}),b=c=null}function m(){var b,c,d=!1;T.bind(K("mousedown"),function(a){c=a.pageY,b=T.position().top,d=!0,S.addClass("in-scrolling"),a.stopPropagation(),a.preventDefault()}),a(L).bind(K("mousemove"),function(a){d&&(g(b,a.pageY-c),k(),a.stopPropagation(),a.preventDefault())}),a(L).bind(K("mouseup"),function(){d&&(d=!1,S.removeClass("in-scrolling"))}),b=c=null}function n(a,b){var c=x.scrollTop();if(0===a){if(!G)return!1;if(0===c&&b>0||c>=C-A&&0>b)return!w.wheelPropagation}var d=x.scrollLeft();if(0===b){if(!D)return!1;if(0===d&&0>a||d>=B-z&&a>0)return!w.wheelPropagation}return!0}function o(){function a(a){var b=a.originalEvent.deltaX,c=-1*a.originalEvent.deltaY;return(void 0===b||void 0===c)&&(b=-1*a.originalEvent.wheelDeltaX/6,c=a.originalEvent.wheelDeltaY/6),a.originalEvent.deltaMode&&1===a.originalEvent.deltaMode&&(b*=10,c*=10),b!==b&&c!==c&&(b=0,c=a.originalEvent.wheelDelta),[b,c]}function b(b){var d=a(b),e=d[0],f=d[1];c=!1,w.useBothWheelAxes?G&&!D?(f?x.scrollTop(x.scrollTop()-f*w.wheelSpeed):x.scrollTop(x.scrollTop()+e*w.wheelSpeed),c=!0):D&&!G&&(e?x.scrollLeft(x.scrollLeft()+e*w.wheelSpeed):x.scrollLeft(x.scrollLeft()-f*w.wheelSpeed),c=!0):(x.scrollTop(x.scrollTop()-f*w.wheelSpeed),x.scrollLeft(x.scrollLeft()+e*w.wheelSpeed)),k(),c=c||n(e,f),c&&(b.stopPropagation(),b.preventDefault())}var c=!1;void 0!==window.onwheel?x.bind(K("wheel"),b):void 0!==window.onmousewheel&&x.bind(K("mousewheel"),b)}function p(){var b=!1;x.bind(K("mouseenter"),function(){b=!0}),x.bind(K("mouseleave"),function(){b=!1});var c=!1;a(L).bind(K("keydown"),function(d){if((!d.isDefaultPrevented||!d.isDefaultPrevented())&&b){for(var e=document.activeElement?document.activeElement:L.activeElement;e.shadowRoot;)e=e.shadowRoot.activeElement;if(!a(e).is(":input,[contenteditable]")){var f=0,g=0;switch(d.which){case 37:f=-30;break;case 38:g=30;break;case 39:f=30;break;case 40:g=-30;break;case 33:g=90;break;case 32:case 34:g=-90;break;case 35:g=d.ctrlKey?-C:-A;break;case 36:g=d.ctrlKey?x.scrollTop():A;break;default:return}x.scrollTop(x.scrollTop()-g),x.scrollLeft(x.scrollLeft()+f),c=n(f,g),c&&d.preventDefault()}}})}function q(){function a(a){a.stopPropagation()}T.bind(K("click"),a),S.bind(K("click"),function(a){var c=b(H/2),d=a.pageY-S.offset().top-c,e=A-H,f=d/e;0>f?f=0:f>1&&(f=1),x.scrollTop((C-A)*f)}),N.bind(K("click"),a),M.bind(K("click"),function(a){var c=b(E/2),d=a.pageX-M.offset().left-c,e=z-E,f=d/e;0>f?f=0:f>1&&(f=1),x.scrollLeft((B-z)*f)})}function r(){function b(){var a=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};return 0===a.rangeCount?null:a.getRangeAt(0).commonAncestorContainer}function c(){e||(e=setInterval(function(){return y()?(x.scrollTop(x.scrollTop()+f.top),x.scrollLeft(x.scrollLeft()+f.left),void k()):void clearInterval(e)},50))}function d(){e&&(clearInterval(e),e=null),M.removeClass("in-scrolling"),S.removeClass("in-scrolling")}var e=null,f={top:0,left:0},g=!1;a(L).bind(K("selectionchange"),function(){a.contains(x[0],b())?g=!0:(g=!1,d())}),a(window).bind(K("mouseup"),function(){g&&(g=!1,d())}),a(window).bind(K("mousemove"),function(a){if(g){var b={x:a.pageX,y:a.pageY},e=x.offset(),h={left:e.left,right:e.left+x.outerWidth(),top:e.top,bottom:e.top+x.outerHeight()};b.x<h.left+3?(f.left=-5,M.addClass("in-scrolling")):b.x>h.right-3?(f.left=5,M.addClass("in-scrolling")):f.left=0,b.y<h.top+3?(f.top=5>h.top+3-b.y?-5:-20,S.addClass("in-scrolling")):b.y>h.bottom-3?(f.top=5>b.y-h.bottom+3?5:20,S.addClass("in-scrolling")):f.top=0,0===f.top&&0===f.left?d():c()}})}function s(b,c){function d(a,b){x.scrollTop(x.scrollTop()-b),x.scrollLeft(x.scrollLeft()-a),k()}function e(){q=!0}function f(){q=!1}function g(a){return a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:a.originalEvent}function h(a){var b=a.originalEvent;return!(!b.targetTouches||1!==b.targetTouches.length)||!(!b.pointerType||"mouse"===b.pointerType||b.pointerType===b.MSPOINTER_TYPE_MOUSE)}function i(a){if(h(a)){r=!0;var b=g(a);m.pageX=b.pageX,m.pageY=b.pageY,n=(new Date).getTime(),null!==p&&clearInterval(p),a.stopPropagation()}}function j(a){if(!q&&r&&h(a)){var b=g(a),c={pageX:b.pageX,pageY:b.pageY},e=c.pageX-m.pageX,f=c.pageY-m.pageY;d(e,f),m=c;var i=(new Date).getTime(),j=i-n;j>0&&(o.x=e/j,o.y=f/j,n=i),a.stopPropagation(),a.preventDefault()}}function l(){!q&&r&&(r=!1,clearInterval(p),p=setInterval(function(){return y()?.01>Math.abs(o.x)&&.01>Math.abs(o.y)?void clearInterval(p):(d(30*o.x,30*o.y),o.x*=.8,void(o.y*=.8)):void clearInterval(p)},10))}var m={},n=0,o={},p=null,q=!1,r=!1;b&&(a(window).bind(K("touchstart"),e),a(window).bind(K("touchend"),f),x.bind(K("touchstart"),i),x.bind(K("touchmove"),j),x.bind(K("touchend"),l)),c&&(window.PointerEvent?(a(window).bind(K("pointerdown"),e),a(window).bind(K("pointerup"),f),x.bind(K("pointerdown"),i),x.bind(K("pointermove"),j),x.bind(K("pointerup"),l)):window.MSPointerEvent&&(a(window).bind(K("MSPointerDown"),e),a(window).bind(K("MSPointerUp"),f),x.bind(K("MSPointerDown"),i),x.bind(K("MSPointerMove"),j),x.bind(K("MSPointerUp"),l)))}function t(){x.bind(K("scroll"),function(){k()})}function u(){x.unbind(K()),a(window).unbind(K()),a(L).unbind(K()),x.data("perfect-scrollbar",null),x.data("perfect-scrollbar-update",null),x.data("perfect-scrollbar-destroy",null),N.remove(),T.remove(),M.remove(),S.remove(),x=M=S=N=T=D=G=z=A=B=C=E=F=O=P=Q=H=I=U=V=W=J=K=null}function v(){k(),t(),l(),m(),q(),r(),o(),(Y||Z)&&s(Y,Z),w.useKeyboard&&p(),x.data("perfect-scrollbar",x),x.data("perfect-scrollbar-update",k),x.data("perfect-scrollbar-destroy",u)}var w=a.extend(!0,{},c),x=a(this),y=function(){return!!x};if("object"==typeof d?a.extend(!0,w,d):f=d,"update"===f)return x.data("perfect-scrollbar-update")&&x.data("perfect-scrollbar-update")(),x;if("destroy"===f)return x.data("perfect-scrollbar-destroy")&&x.data("perfect-scrollbar-destroy")(),x;if(x.data("perfect-scrollbar"))return x.data("perfect-scrollbar");x.addClass("ps-container");var z,A,B,C,D,E,F,G,H,I,J="rtl"===x.css("direction"),K=e(),L=this.ownerDocument||document,M=a("<div class='ps-scrollbar-x-rail'>").appendTo(x),N=a("<div class='ps-scrollbar-x'>").appendTo(M),O=b(M.css("bottom")),P=O===O,Q=P?null:b(M.css("top")),R=b(M.css("borderLeftWidth"))+b(M.css("borderRightWidth")),S=a("<div class='ps-scrollbar-y-rail'>").appendTo(x),T=a("<div class='ps-scrollbar-y'>").appendTo(S),U=b(S.css("right")),V=U===U,W=V?null:b(S.css("left")),X=b(S.css("borderTopWidth"))+b(S.css("borderBottomWidth")),Y="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,Z=null!==window.navigator.msMaxTouchPoints;return v(),x})}}),function(a){a(document).ready(function(){a(".rs-addon-not-installed").click(function(){showWaitAMinute({fadeIn:300,text:rev_slider_addon.please_wait_a_moment}),$this=a(this),a.ajax({url:rev_slider_addon.ajax_url,type:"post",data:{action:"install_plugin",nonce:a("#ajax_rev_slider_addon_nonce").text(),plugin:$this.data("plugin")},success:function(a){switch(a){case"0":showWaitAMinute({fadeOut:300,text:rev_slider_addon.please_wait_a_moment}),UniteAdminRev.showErrorMessage("Something went wrong!");break;case"1":location.reload();break;case"-1":showWaitAMinute({fadeOut:300,text:rev_slider_addon.please_wait_a_moment}),UniteAdminRev.showErrorMessage("Nonce missing!")}},error:function(a){showWaitAMinute({fadeOut:300,text:rev_slider_addon.please_wait_a_moment}),UniteAdminRev.showErrorMessage("Something went wrong!")}})}),a(".rs-addon-not-activated").click(function(){showWaitAMinute({fadeIn:300,text:rev_slider_addon.please_wait_a_moment}),$this=a(this),a.ajax({url:rev_slider_addon.ajax_url,type:"post",data:{action:"activate_plugin",nonce:a("#ajax_rev_slider_addon_nonce").text(),plugin:$this.data("plugin")},success:function(a){switch(a){case"0":console.log("Something Went Wrong");break;case"1":console.log("Plugin activated"),location.reload();break;case"-1":console.log("Nonce missing")}},error:function(a){console.log("Ajax Error")}})}),a(".rs-dash-deactivate-addon").click(function(){showWaitAMinute({fadeIn:300,text:rev_slider_addon.please_wait_a_moment}),$this=a(this),a.ajax({url:rev_slider_addon.ajax_url,type:"post",data:{action:"deactivate_plugin",nonce:a("#ajax_rev_slider_addon_nonce").text(),plugin:$this.data("plugin")},success:function(a){switch(a){case"0":console.log("Something Went Wrong");break;case"1":console.log("Plugin deactivated"),location.reload();break;case"-1":console.log("Nonce missing")}},error:function(a){}})})})}(jQuery);