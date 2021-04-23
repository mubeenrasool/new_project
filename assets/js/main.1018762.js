var IS24=IS24||{};IS24.cms=IS24.cms||{},IS24.cms.helpers=IS24.cms.helpers||{},function(a,b){IS24.cms.helpers.hasNecessaryDOMAPIs=function(c){var d,e,f=!0;for(d=0,e=c.length;d<e;d++)if(!(c[d]in a||c[d]in b||c[d]in b.body)){f=!1;break}return f},IS24.cms.helpers.getDeviceState=function(){function a(a,c){var d=b.createElement("div");return d.id=a,d.className=c,b.body.appendChild(d)}function c(){return d||(d=a("device-state-dummy-palm","palm-hide")),e||(e=a("device-state-dummy-lap","lap-hide")),f||(f=a("device-state-dummy-desk","desk-hide")),{palm:0===d.offsetWidth,lap:0===e.offsetWidth,desk:0===f.offsetWidth}}var d,e,f;return c}(),IS24.cms.helpers.debounce=function(b,c){function d(){b.apply(this,arguments),a.clearTimeout(g),f=a.setTimeout(function(){f=null},c)}function e(){g=a.setTimeout(function(){b.apply(this,arguments),g=null},c)}var f,g;return function(){f?g||e():d()}},IS24.cms.helpers.getPageScroll=function(){var a={top:0,left:0};return"scrollTop"in b.documentElement&&"scrollLeft"in b.documentElement?(a.top=b.documentElement.scrollTop+b.body.scrollTop,a.left=b.documentElement.scrollLeft+b.body.scrollLeft):"pageYOffset"in b.body&&"pageXOffset"in b.body&&(a.top=b.body.pageYOffset,a.left=b.body.pageXOffset),a},IS24.cms.helpers.getCoordinates=function(a){var b=a.getBoundingClientRect()?a.getBoundingClientRect():{top:0,left:0},c={};return c.x=parseInt(b.left+this.getPageScroll().left,10),c.y=parseInt(b.top+this.getPageScroll().top,10),c}}(window,document);
var IS24=window.IS24||{};IS24.Param={constructParamSet:function(){function a(a){return a.replace(/["']/g,"")}function b(a,b){var c,d,e=a.split(b),f={},g=e.length;for(d=0;d<g;d++)""!==e[d]&&(c=e[d].split("="),f[encodeURIComponent(IS24.Param.decode(c[0]))]=c[1]);return f}function c(c){var d,e;switch(c){case"cookie":case"cookies":d=a(document.cookie),e=";";break;case"url":d=a(window.location.search.substring(1)),e="&";break;default:return!1}return b(d,e)}function d(a,b){var c,d={};for(c in a)d[c]=a[c];for(c in b)d[c]=b[c];return d}function e(){return d(c("cookie"),c("url"))}function f(a,b){var c,d,e={},f=b.length;for(c in a)for(d=0;d<f;d++)if(c===b[d]){e[c]=a[c];break}return e}function g(a,b){var d;switch(a){case"cookie":case"cookies":case"url":d=c(a);break;case"all":d=e();break;default:return!1}return b&&(d=f(d,b)),d}return{from:g}}(),attachParams:function(a){var b,c,d,e,f=document.getElementById(a.id),g=a.names||!1,h=this.constructParamSet.from(a.origin,g),i="";if(f.src)b="src";else{if(!f.href)return!1;b="href"}d=-1!==f[b].indexOf("?")?"&":"?";for(e in h)c=d+e+"="+h[e],i+=c,d="&";""!==i&&(f[b]=function(a,b){var c=a.split("#");return c[1]&&(c[1]="#"+c[1]),c.splice(1,0,b),c.join("")}(f[b],i))},decode:function(a){return decodeURIComponent(a.replace(/[+]/g,"%20"))},setInputValues:function(a){var b,c,d=document.getElementById(a.id),e=d.getElementsByTagName("input"),f=d.getElementsByTagName("select"),g=d.getElementsByTagName("textarea"),h=a.names||!1,i=this.constructParamSet.from(a.origin,h);for(c=0;c<e.length;c++)"hidden"!==e[c].type&&"submit"!==e[c].type&&void 0!==(b=i[encodeURIComponent(e[c].name)])&&(b&&(b=this.decode(b)),"checkbox"===e[c].type?e[c].checked=e[c].value===b:e[c].value=b||"");for(c=0;c<f.length;c++)void 0!==(b=i[encodeURIComponent(f[c].name)])&&(b&&(b=this.decode(b)),f[c].value=b||"");for(c=0;c<g.length;c++)void 0!==(b=i[encodeURIComponent(g[c].name)])&&(b&&(b=this.decode(b)),g[c].value=b||"")},forceSamePageActionPath:function(a){var b=document.getElementById(a.id),c=b.getAttribute("action"),d=window.location.pathname,e=new RegExp("/$"),f=new RegExp(".html$");d=d.replace(/[^\w.\/-]/g,""),d&&(e.test(d)&&(d=d.substr(0,d.length-1)),f.test(d)||(d+=".html"),d=d.substring(0,d.indexOf(".html"))+"."+a.selector+d.substring(d.indexOf(".html"))),d!==c&&b.setAttribute("action",d)}};
!function(a,b,c){b.fn.tabnav=function(a){var d=b.extend({tabTriggerClassName:"tab-trigger",tabSelector:".tab",tabActiveClassName:"tab-active",showAllButton:!0,showAllButtonSelector:".tab-trigger-showall",showTab:1,triggerCallback:c},a);return this.each(function(){function a(a){var f,h;e.find("."+d.tabActiveClassName).removeClass(d.tabActiveClassName),f=b(a),f.is("SELECT")||f.addClass(d.tabActiveClassName),h=a.href!==c?a.href.split("#")[1]:a.value,g.hide(),b("#"+h).show(),IS24&&IS24.cms&&IS24.cms.imager&&IS24.cms.imager.add(b("#"+h).find(".delayed-image-load")),"function"==typeof d.triggerCallback&&d.triggerCallback()}var e,f,g,h;e=b(this),h=d.showAllButton?b(d.showAllButtonSelector):null,f=e.find("."+d.tabTriggerClassName),g=b(d.tabSelector),d.showAllButton||g.each(function(a){d.showTab!==a+1?b(this).hide():b(f[a]).addClass(d.tabActiveClassName)}),f.on("click",function(b){"OPTION"!==b.target.nodeName&&(b.preventDefault(),a(this))}),f.parent().on("change",function(b){a(this)}),d.showAllButton&&h.on("click",function(a){a.preventDefault(),e.find("."+d.tabActiveClassName).removeClass(d.tabActiveClassName),g.show()})})}}(window,jQuery);
var IS24=IS24||{};IS24.STATIC=IS24.STATIC||{},IS24.STATIC.tabs=function(){function a(a){var b;try{b=localStorage.getItem(a)}catch(a){}return b}function b(a,b){try{localStorage.setItem(a,b)}catch(a){}}function c(){return l.is(":visible")}function d(){var a,b,d;a=c(),b=a?k.find("option:selected"):k.find(".tab-active"),d=a?k.find("option").index(b):k.find("ul a").index(b),a?m.eq(d).addClass("tab-active"):l.find("option").eq(d).prop("selected",!0)}function e(a,b){document.getElementById(a.substring(1)+"_tab"+b).style.display="block"}function f(){var b=a(n);return b?JSON.parse(b):{}}function g(){return f()[location.href]}function h(){return window.IS24&&IS24.cms&&IS24.cms.saveTab}function i(){var a,d;!c()&&h()&&(a=f(),d=k.find(".tab-active"),a[location.href]=d.attr("href").slice(-1),b(n,JSON.stringify(a)))}function j(a){var b=g()||1;k=jQuery(a),l=k.find("select"),m=k.find("ul a"),k.tabnav({showAllButton:!1,tabSelector:a+" .tab",showTab:parseInt(b,10),triggerCallback:i}),e(a,b),k.hasClass("tabs2select")&&jQuery(window).on("resize",d)}var k,l,m,n="lastTabs";return{init:j}}();
var IS24=IS24||{};IS24.cms=IS24.cms||{},function(a,b){IS24.cms.forms=IS24.cms.forms||{},IS24.cms.forms.prefillEmailField=function(){function c(a){return a.replace(/\(\)\[]"'=/,"")}function d(a){return/@.+\..+$/.test(a)}function e(a,b){a.value||(a.value=b)}function f(a,b){var f=a&&c(a.userName);d(f)&&e(b,f)}function g(c){var d;a.IS24&&IS24.cms&&IS24.cms.userInfo&&(d=b.getElementById(c),IS24.cms.userInfo.getUserInfo().then(function(a){f(a,d)}).catch(function(a){}))}return g}(),IS24.cms.userInfo=function(){function c(){return"Promise"in a}function d(){var a=new Error("The Promise API is not supported."),b={};return b.then=function(c,d){return d&&d(a),b},b.catch=function(c){return c(a),b},b}function e(){var a=/\.sandbox-immobilienscout24.de$/.test(location.hostname)?"www.sandbox-immobilienscout24.de":"www.immobilienscout24.de",b=Math.round((new Date).getTime()/1e3);return"https://"+a+m+"?callback="+n+"&ts="+b}function f(a){var c=b.createElement("script");c.type="text/javascript",c.async=!0,c.src=a,c.addEventListener("error",function(a){l(new Error("The API call did not successfully complete."))}),b.getElementsByTagName("head")[0].appendChild(c)}function g(a){k(a)}function h(){return new Promise(function(a,b){var c=e();k=a,l=b,f(c)})}function i(){return c()?j=j||h():d()}var j,k,l,m="/meinkonto/api/v1/jsonp/headerInfo",n="IS24.cms.userInfo.jsonpCallback";return{getUserInfo:i,jsonpCallback:g}}()}(window,document);
/*global console, window, jQuery, IS24 */
/*jslint browser: true, sloppy: true, plusplus: true, regexp: true */
/*
 *  Baufi Anbietervergleich Teaser on content pages
 *  depends on: jquery, jquery.quickflip
 */

var IS24 = IS24 || {};
IS24.STATIC = IS24.STATIC || {};

IS24.STATIC.partnerBoxes = (function($){

    var partnerBoxes, partnerBoxTimeout;

    function init(boxes) {
        partnerBoxes = boxes;
        partnerBoxes.quickFlip();
        registerEvents();
    };

    function registerEvents() {
        partnerBoxes.mouseenter(function() {
            var box = $(this);
            partnerBoxTimeout = window.setTimeout(function() {
                box.addClass("turned").quickFlipper();
            },800);
        }).mouseleave(function(ev) {
                clearTimeout(partnerBoxTimeout);
                var box = $(this);
                if(box.hasClass('turned')) {
                    partnerBoxTimeout = window.setTimeout(function() {
                        box.removeClass('turned').quickFlipper();
                    },400);
                }
            });
    };

    return {
        init : init
    }

})(jQuery);

/*global console, window, jQuery, IS24 */
/*jslint browser: true, sloppy: true, plusplus: true, regexp: true */
/*
 *  Umzugs Anbietervergleich Teaser on content pages
 *  depends on: jquery, slider.js
 */
var IS24 = IS24 || {};
IS24.STATIC = IS24.STATIC || {};

IS24.STATIC.umzugskostenrechner = (function ($) {
    "use strict";

    var inUse = false,
        PRICE_ADJUSTMENT_FACTOR = 0.85,
        square_meter,
        people,
        rooms;

    function addDecimalSeparatorsToNumberString(result) {
        while (result.match(/^(\d+)(\d{3}\b)/)) {
            result = result.replace(/^(\d+)(\d{3}\b)/, RegExp.$1 + '.' + RegExp.$2);
        }
        return result;
    }

    function removeSpaceAndDotAndCommaFromText(text) {
        return text.toString().replace(/\s/g, "").replace(/\./g, "").replace(/\,/g, "");
    }

    function calculateRemovalCompanyCosts() {
        var distance = parseInt(removeSpaceAndDotAndCommaFromText($('#distance-value').text()), 10),
            number_boxes,
            cbm,
            price;
        square_meter = parseInt($('#square-meter-value').text(), 10),
        people = parseInt($('.people-selecter').find('.selecter').attr('data-current-value'), 10),
        rooms =  parseInt($('.rooms-selecter').find('.selecter').attr('data-current-value'), 10),
        number_boxes = (people * 4) + (rooms * 14.7) + (people * 0.6),
        cbm = ((rooms * 9 + 12) * 0.4) + ((square_meter / 2) * 0.6) + (number_boxes * 0.06),
        price = (cbm * 25) + (distance * 0.8) + ((3 * (2 * cbm)) + (cbm * 2));
        price = price * PRICE_ADJUSTMENT_FACTOR;
        price = Math.round(price / 25)*25;
        $('#price span').text(addDecimalSeparatorsToNumberString(price.toFixed(0)));
        addSubmitHook();
    }

    function initSliders() {
        var square_meter_slider = initSlider("#square_meter_slider", 10, 200, 50, "#square-meter-value", 10),
            distance_slider = initSlider("#distance_slider", 5, 1000, 10, "#distance-value", 5);
        square_meter_slider.changeHandler = function () {
            calculateRemovalCompanyCosts();
        };
        distance_slider.changeHandler = function () {
            calculateRemovalCompanyCosts();
        };
        //Reporting
        $('.sliders .slider').on('click', function() {
            if (!inUse) reportUse();
        });
        $('.sliders .slider-thumb').mousedown(function() {
            inUse = true;
        })
        $('.sliders .slider-thumb').mouseup(function() {
            if (inUse) {
                reportUse();
                setTimeout(function(){inUse = false;},100)
            }
        })
    }

    function initSelecter() {
        var selecter_holder = $('#removal_calculator .selecter-holder');
        selecter_holder.each(function() {
            var selecter = $(this).find('.selecter'),
                select_option_container = $(this).find('.select-options'),
                current_value,
                current_view_value,
                current_option;
            selecter.click(function() {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                    select_option_container.hide();
                } else {
                    $(this).addClass('open');
                    select_option_container.show();
                }
            });
            select_option_container.find('p').click(function() {
                var $this = $(this),
                    new_value = $this.attr('data-options-value'),
                    view_value = $this.attr('data-view-value'),
                    this_siblings = $this.siblings();
                selecter.removeClass('open');
                select_option_container.css('display','none');
                this_siblings.removeClass('selected');
                $this.addClass('selected');
                selecter.attr('data-current-value', new_value);
                selecter.text(view_value !== undefined? view_value : new_value );
                calculateRemovalCompanyCosts();
                reportUse();
            });
            $(this).mouseleave(function() {
                selecter.removeClass('open').next().fadeOut('fast');
            });
            current_option = select_option_container.find('.selected');
            current_value = current_option.attr('data-options-value');
            current_view_value = current_option.attr('data-view-value');
            if (current_view_value !== undefined) {
                selecter.text(current_view_value);
            } else {
                selecter.text(current_value);
            }
            selecter.attr('data-current-value', current_value);
        });
    }

    function addSubmitHook() {
        $("#removal_calculator .submit_button a").first().on("click", function() {
            var icmp   = "10-03201"; // tracking tag
            var href   = $(this).attr("href");
            $(this).attr("href", href + "?personen=" + people + "&zimmer=" + rooms + "&qm=" + square_meter + "&icmp=" + icmp);
        });
    }

    function reportUse() {
        if (IS24 && IS24.TEALIUM) {
			IS24.TEALIUM.tracking.report({evt_ga_category: 'relocation', evt_ga_action: 'calculator', evt_ga_label: 'calculate'});
        }
    }

	function initAssumingBox() {
		$('#removalCostCalculatorAssumption').click(function() {
			$('#assumptionBox').show();
			$('#removal_calculator').find('.selecter').css({"visibility":"hidden"});
		});
		$('#close-assumptionbox').click(function() {
			$('#assumptionBox').hide();
			$('#removal_calculator').find('.selecter').css({"visibility":"visible"});
		});
	}

    function init() {
        initSliders();
        initSelecter();
        calculateRemovalCompanyCosts();
		initAssumingBox();
    }
    return {
        init: init
    };
})(jQuery);






























/*global console, window, jQuery, IS24, YT */
/*jslint browser: true, sloppy: true, plusplus: true, regexp: true */
/*
 *  Helper functions needed for various components
 *  depends on: jquery
 *  loaded with component js for components used outside cms context *
 *  extending core helpers if components are used in cms context *
 */
var IS24 = IS24 || {};   //todo var IS24 = IS24 || {} ?
IS24.STATIC = IS24.STATIC || {};

if(!window.Helpers) { // no Helpers object available - component used outside cms context
    IS24.STATIC.Helpers = function() {};
    Helpers = new IS24.STATIC.Helpers();
}
/* check if touch device */
if(!Helpers.is_touch_device) { // already defined in core.js
    IS24.STATIC.Helpers.prototype.is_touch_device = function() {
        if ("ontouchstart" in document.documentElement) {
            return true;
        } else {
            return false;
        }
    };
}
/* substitute for eval() */
IS24.STATIC.Helpers.prototype.executeFunctionByName = function(functionName, context/*, args */) {
    //var args = Array.prototype.slice.call(arguments).splice(2); // this does not work in ie < 9
    var args, namespaces, func, i;
    args = Array.prototype.slice.call(arguments, 2);
    namespaces = functionName.split(".");
    func = namespaces.pop();
    for (i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
};
/* for content loaded via ajax wait with initialization until all requests are finished */
IS24.STATIC.Helpers.prototype.executeWhenAjaxFinished = function(func, args) {
    if (jQuery.active > 0) { // still ajax requests running
        setTimeout(Helpers.executeWhenAjaxFinished, 50, func, args);
        return;
    }
    IS24.STATIC.Helpers.prototype.executeFunctionByName(func, window, args);
};
var IS24=IS24||{};IS24.STATIC=IS24.STATIC||{},window.onYouTubeIframeAPIReady=function(){jQuery(".video-preview").show()},IS24.STATIC.YouTube=function(a){"use strict";function b(b){b.data===YT.PlayerState.ENDED&&a("#"+a(b.target.f).attr("id")).prev().show()}function c(a,c,d){return new YT.Player(a,{height:c,width:d,videoId:a.split("youtube")[1],playerVars:{wmode:"opaque",autoplay:1,showinfo:0,theme:"light",modestbranding:1,autohide:1,rel:0},events:{onStateChange:b}})}function d(a){var b,c,d=a.find("iframe"),e=a.find(".player-icon"),f=e.next(),g=a.data("ratio"),h=a.parent().width(),i=parseInt(h/g,10);h<=330&&e.width(57).height(57),b=h/2-e.width()/2,c=i/2-e.height()/2,a.width(h).height(i),e.css({top:c,left:b}),f.width(h).height(i),d.length>0&&d.width(h).height(i)}function e(a,b){i.ready(function(){d(a)}),h.resize(function(){d(a)}),b.click(function(){var d=b.next().attr("id"),e=b.width(),f=b.height(),g=a.data("vname")?a.data("vname"):"";b.hide(),void 0===b.data("player")?b.data("player",c(d,f,e)):b.data("player").playVideo(),IS24.TEALIUM.tracking.report({ns_type:"hidden",evt_event:"20",evt_vname:g})})}function f(){var a=document.getElementsByTagName("head")[0],b=document.createElement("script");b.src="//www.youtube.com/iframe_api",a.appendChild(b)}function g(b){var c=a("#"+b),g=c.find(".video-preview");h&&i&&j||(h=a(window),i=a(document),j=a("html")),j.hasClass("youTube")?g.show():(f(),j.addClass("youTube")),e(c,g),d(c)}var h,i,j;return{init:g}}(jQuery);
// initialize the social bar toggle buttons
(function($) {
    $(document).ready(function() {
        // add event handler for toggling the extended social features
        $('.socialbar.parbase').each(function(index, element) {
            var animationTime = 200;
            var showTrigger = $(element).find('.socialbar__toggle--show');
            var hideTrigger = $(element).find('.socialbar__toggle--hide');
            var container = $(element).find('.socialbar__toggleContainer');
            showTrigger.on('click', function() {
                $(container).slideDown(animationTime);
                $(showTrigger).hide();
                $(hideTrigger).show();
            });
            hideTrigger.on('click', function() {
                $(container).slideUp(animationTime);
                $(hideTrigger).hide();
                $(showTrigger).show();
            });
        });
        // handle clicks on the inactive like button - replace all of them by fb-iframes if the first one is clicked
        $('.facebook__button--like').each(function(index, element) {
            $(element).on("click", function() {
                $('.facebook__button--like').each(function(index, element) {
                    var iframeSrc = 'https://www.facebook.com/plugins/like.php?layout=button&amp;action=like&amp;show_faces=false&amp;share=false&amp;locale=en_US&amp;height=20';
                    iframeSrc += '&amp;href=' + element.getAttribute('data-share-url');
                    $('<iframe class="facebook__iframe" src="'+iframeSrc+'" scrolling="no" frameborder="0" allowTransparency="true"></iframe>')
                        .insertAfter(element);
                    $(element).remove();
                });
                // report usage
                if (IS24 && IS24.TEALIUM) {
                    IS24.TEALIUM.tracking.report({ns_type:"hidden", evt_pname:"share-facebook-like-enabled"});
                }
            });
        });
        var loadPinterestScript=true;
        //handle clicks on the inactive Pinterest button
		$('.pinterest').each(function(index,element){
			$(element).click(function(){
				if(IS24) {
					if(IS24.TEALIUM){
						if(IS24.TEALIUM.tracking){
							if(IS24.TEALIUM.tracking.report){
								/*
								never display a error when Tealium has problems
								 */
								if(loadPinterestScript) {
									IS24.TEALIUM.tracking.report({
										evt_ga_category: "social",
										evt_ga_action: "share",
										evt_ga_label: "pinterest-1",
										pag_pagetitle: document.title
									});
								}
							}
						}
					}
				}

				if(loadPinterestScript) {
					loadPinterestScript = false;
					$.getScript( '../../assets.pinterest.com/js/pinit.js', function() {
						$('.pinterest').each(function(i,elem){
							$(elem).attr('href','https://www.pinterest.com/pin/create/button/'+i);
							$(elem).attr('title','');

							$(elem).click(function(){
								if(IS24) {
									if(IS24.TEALIUM){
										if(IS24.TEALIUM.tracking){
											if(IS24.TEALIUM.tracking.report){
												/*
                                                never display a error when Tealium has problems
                                                 */
												IS24.TEALIUM.tracking.report({
													evt_ga_category: "social",
													evt_ga_action: "share",
													evt_ga_label: "pinterest-2",
													pag_pagetitle: document.title
												});
											}
										}
									}
								}
							})
						});
					});
				}

			});
		});
    });
})(jQuery);

var IS24=IS24||{};IS24.STATIC=IS24.STATIC||{},IS24.STATIC.imagemapComponent=function(a){"use strict";function b(){var a,b,c;for(c=0;c<g.length;c++)(a=g[c].getElementsByClassName(l)[0])&&(b=a.offsetHeight,g[c].style.minHeight=b+"px")}function c(){h||(h=window.setTimeout(function(){b(),h=void 0},m))}function d(){a(window).on("resize",c)}function e(){a(document).ready(b)}function f(){(g=document.getElementsByClassName(k))&&(i||(d(),i=!0),j||(e(),j=!0))}var g,h,i,j,k="topmodule-imagemap-content-container",l="topmodule-imagemap-content",m=500;return{init:f}}(jQuery);
(function(E,a){var j=a.document;function A(Q){var Z=j.createElement("div");j.body.insertBefore(Z,null);E.replaceWith(Z,'<script type="text/javascript">'+Q+"<\/script>")}E=E||(function(Q){return{ajax:Q.ajax,$:function(Z){return Q(Z)[0]},replaceWith:function(Z,ad){var ac=Q(Z)[0];var ab=ac.nextSibling,aa=ac.parentNode;Q(ac).remove();if(ab){Q(ab).before(ad)}else{Q(aa).append(ad)}},onLoad:function(Z){Q(Z)},copyAttrs:function(af,ab){var ad=Q(ab),aa=af.attributes;for(var ac=0,Z=aa.length;ac<Z;ac++){if(aa[ac]&&aa[ac].value){try{ad.attr(aa[ac].name,aa[ac].value)}catch(ae){}}}}}})(a.jQuery);E.copyAttrs=E.copyAttrs||function(){};E.onLoad=E.onLoad||function(){throw"error: autoAsync cannot be used without jQuery or defining writeCaptureSupport.onLoad"};function P(ab,aa){for(var Z=0,Q=ab.length;Z<Q;Z++){if(aa(ab[Z])===false){return}}}function v(Q){return Object.prototype.toString.call(Q)==="[object Function]"}function p(Q){return Object.prototype.toString.call(Q)==="[object String]"}function u(aa,Z,Q){return Array.prototype.slice.call(aa,Z||0,Q||aa&&aa.length)}function D(ab,aa){var Q=false;P(ab,Z);function Z(ac){return !(Q=aa(ac))}return Q}function L(Q){this._queue=[];this._children=[];this._parent=Q;if(Q){Q._addChild(this)}}L.prototype={_addChild:function(Q){this._children.push(Q)},push:function(Q){this._queue.push(Q);this._bubble("_doRun")},pause:function(){this._bubble("_doPause")},resume:function(){this._bubble("_doResume")},_bubble:function(Z){var Q=this;while(!Q[Z]){Q=Q._parent}return Q[Z]()},_next:function(){if(D(this._children,Q)){return true}function Q(aa){return aa._next()}var Z=this._queue.shift();if(Z){Z()}return !!Z}};function i(Q){if(Q){return new L(Q)}L.call(this);this.paused=0}i.prototype=(function(){function Q(){}Q.prototype=L.prototype;return new Q()})();i.prototype._doRun=function(){if(!this.running){this.running=true;try{while(this.paused<1&&this._next()){}}finally{this.running=false}}};i.prototype._doPause=function(){this.paused++};i.prototype._doResume=function(){this.paused--;this._doRun()};function M(){}M.prototype={_html:"",open:function(){this._opened=true;if(this._delegate){this._delegate.open()}},write:function(Q){if(this._closed){return}this._written=true;if(this._delegate){this._delegate.write(Q)}else{this._html+=Q}},writeln:function(Q){this.write(Q+"\n")},close:function(){this._closed=true;if(this._delegate){this._delegate.close()}},copyTo:function(Q){this._delegate=Q;Q.foobar=true;if(this._opened){Q.open()}if(this._written){Q.write(this._html)}if(this._closed){Q.close()}}};var e=(function(){var Q={f:j.getElementById};try{Q.f.call(j,"abc");return true}catch(Z){return false}})();function I(Q){P(Q,function(Z){var aa=j.getElementById(Z.id);if(!aa){l("<proxyGetElementById - finish>","no element in writen markup with id "+Z.id);return}P(Z.el.childNodes,function(ab){aa.appendChild(ab)});if(aa.contentWindow){a.setTimeout(function(){Z.el.contentWindow.document.copyTo(aa.contentWindow.document)},1)}E.copyAttrs(Z.el,aa)})}function s(Z,Q){if(Q&&Q[Z]===false){return false}return Q&&Q[Z]||o[Z]}function x(Z,ai){var ae=[],ad=s("proxyGetElementById",ai),ag=s("writeOnGetElementById",ai),Q={write:j.write,writeln:j.writeln,finish:function(){},out:""};Z.state=Q;j.write=ah;j.writeln=aa;if(ad||ag){Q.getEl=j.getElementById;j.getElementById=ab;if(ag){findEl=af}else{findEl=ac;Q.finish=function(){I(ae)}}}function ah(aj){Q.out+=aj}function aa(aj){Q.out+=aj+"\n"}function ac(ak){var aj=j.createElement("div");ae.push({id:ak,el:aj});aj.contentWindow={document:new M()};return aj}function af(al){var aj=E.$(Z.target);var ak=j.createElement("div");aj.parentNode.insertBefore(ak,aj);E.replaceWith(ak,Q.out);Q.out="";return e?Q.getEl.call(j,al):Q.getEl(al)}function ab(ak){var aj=e?Q.getEl.call(j,ak):Q.getEl(ak);return aj||findEl(ak)}return Q}function V(Q){j.write=Q.write;j.writeln=Q.writeln;if(Q.getEl){j.getElementById=Q.getEl}return Q.out}function N(Q){return Q&&Q.replace(/^\s*<!(\[CDATA\[|--)/,"").replace(/(\]\]|--)>\s*$/,"")}function b(){}function d(Z,Q){console.error("Error",Q,"executing code:",Z)}var l=v(a.console&&console.error)?d:b;function S(aa,Z,Q){var ab=x(Z,Q);try{A(N(aa))}catch(ac){l(aa,ac)}finally{V(ab)}return ab}function O(Z){var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(Z);return Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)}function T(Q){return new RegExp(Q+"=(?:([\"'])([\\s\\S]*?)\\1|([^\\s>]+))","i")}function k(Q){var Z=T(Q);return function(aa){var ab=Z.exec(aa)||[];return ab[2]||ab[3]}}var r=/(<script[\s\S]*?>)([\s\S]*?)<\/script>/ig,n=T("src"),X=k("src"),q=k("type"),Y=k("language"),C="__document_write_ajax_callbacks__",B="__document_write_ajax_div-",g="window['"+C+"']['%d']();",m=a[C]={},w='<script type="text/javascript">'+g+"<\/script>",H=0;function c(){return(++H).toString()}function G(Z,aa){var Q;if(v(Z)){Q=Z;Z=null}Z=Z||{};Q=Q||Z&&Z.done;Z.done=aa?function(){aa(Q)}:Q;return Z}var z=new i();var y=[];var f=window._debugWriteCapture?function(){}:function(Q,aa,Z){y.push({type:Q,src:aa,data:Z})};var K=window._debugWriteCapture?function(){}:function(){y.push(arguments)};function W(Q){var Z=c();m[Z]=function(){Q();delete m[Z]};return Z}function J(Q){return w.replace(/%d/,W(Q))}function R(ac,ag,aa,ae){var ad=aa&&new i(aa)||z;ag=G(ag);var ab=s("done",ag);var Q="";var Z=s("fixUrls",ag);if(!v(Z)){Z=function(ah){return ah}}if(v(ab)){Q=J(function(){ad.push(ab)})}return ac.replace(r,af)+Q;function af(aj,av,ai){var an=X(av),am=q(av)||"",aB=Y(av)||"",aA=(!am&&!aB)||am.toLowerCase().indexOf("javascript")!==-1||aB.toLowerCase().indexOf("javascript")!==-1;f("replace",an,aj);if(!aA){return aj}var aw=W(ap),ao=B+aw,au,al={target:"#"+ao,parent:ae};function ap(){ad.push(au)}if(an){an=Z(an);av=av.replace(n,"");if(O(an)){au=az}else{if(s("asyncAll",ag)){au=ay()}else{au=at}}}else{au=ax}function ax(){ah(ai)}function at(){E.ajax({url:an,type:"GET",dataType:"text",async:false,success:function(aC){ah(aC)}})}function ak(aE,aC,aD){l("<XHR for "+an+">",aD);ad.resume()}function aq(){return J(function(){ad.resume()})}function ay(){var aE,aD;function aC(aG,aF){if(!aE){aD=aG;return}try{ah(aG,aq())}catch(aH){l(aG,aH)}}E.ajax({url:an,type:"GET",dataType:"text",async:true,success:aC,error:ak});return function(){aE=true;if(aD){ah(aD)}else{ad.pause()}}}function az(aC){var aE=x(al,ag);ad.pause();f("pause",an);E.ajax({url:an,type:"GET",dataType:"script",success:aD,error:ak});function aD(aH,aG,aF){f("out",an,aE.out);ar(V(aE),J(aE.finish)+aq());f("resume",an)}}function ah(aD,aC){var aE=S(aD,al,ag);aC=J(aE.finish)+(aC||"");ar(aE.out,aC)}function ar(aD,aC){E.replaceWith(al.target,R(aD,null,ad,al)+(aC||""))}return'<div style="display: none" id="'+ao+'"></div>'+av+g.replace(/%d/,aw)+"<\/script>"}}function F(Z,aa){var Q=z;P(Z,function(ab){Q.push(ac);function ac(){ab.action(R(ab.html,ab.options,Q),ab)}});if(aa){Q.push(aa)}}function U(Q){var Z=Q;while(Z&&Z.nodeType===1){Q=Z;Z=Z.lastChild;while(Z&&Z.nodeType!==1){Z=Z.previousSibling}}return Q}function h(Q){var aa=j.write,ad=j.writeln,Z,ab=[];j.writeln=function(ae){j.write(ae+"\n")};var ac;j.write=function(af){var ae=U(j.body);if(ae!==Z){Z=ae;ab.push(ac={el:ae,out:[]})}ac.out.push(af)};E.onLoad(function(){var ah,ak,af,aj,ai;Q=G(Q);ai=Q.done;Q.done=function(){j.write=aa;j.writeln=ad;if(ai){ai()}};for(var ag=0,ae=ab.length;ag<ae;ag++){ah=ab[ag].el;ak=j.createElement("div");ah.parentNode.insertBefore(ak,ah.nextSibling);af=ab[ag].out.join("");aj=ae-ag===1?R(af,Q):R(af);E.replaceWith(ak,aj)}})}var t="writeCapture";var o=a[t]={_original:a[t],fixUrls:function(Q){return Q.replace(/&amp;/g,"&")},noConflict:function(){a[t]=this._original;return this},debug:y,proxyGetElementById:false,_forTest:{Q:i,GLOBAL_Q:z,$:E,matchAttr:k,slice:u,capture:x,uncapture:V,captureWrite:S},replaceWith:function(Q,aa,Z){E.replaceWith(Q,R(aa,Z))},html:function(Q,ab,Z){var aa=E.$(Q);aa.innerHTML="<span/>";E.replaceWith(aa.firstChild,R(ab,Z))},load:function(Q,aa,Z){E.ajax({url:aa,dataType:"text",type:"GET",success:function(ab){o.html(Q,ab,Z)}})},autoAsync:h,sanitize:R,sanitizeSerial:F}})(this.writeCaptureSupport,this);(function(g,d,n){var c={html:h};g.each(["append","prepend","after","before","wrap","wrapAll","replaceWith","wrapInner"],function(){c[this]=i(this)});function a(q){return Object.prototype.toString.call(q)=="[object String]"}function p(u,t,s,r){if(arguments.length==0){return o.call(this)}var q=c[u];if(u=="load"){return l.call(this,t,s,r)}if(!q){j(u)}return b.call(this,t,s,q)}g.fn.writeCapture=p;var k="__writeCaptureJsProxied-fghebd__";function o(){if(this[k]){return this}var r=this;function q(){var t=this,s=false;this[k]=true;g.each(c,function(v){var u=r[v];if(!u){return}t[v]=function(y,x,w){if(!s&&a(y)){try{s=true;return p.call(t,v,y,x,w)}finally{s=false}}return u.apply(t,arguments)}});this.pushStack=function(){return o.call(r.pushStack.apply(t,arguments))};this.endCapture=function(){return r}}q.prototype=r;return new q()}function b(t,s,u){var q,r=this;if(s&&s.done){q=s.done;delete s.done}else{if(g.isFunction(s)){q=s;s=null}}d.sanitizeSerial(g.map(this,function(v){return{html:t,options:s,action:function(w){u.call(v,w)}}}),q&&function(){q.call(r)}||q);return this}function h(q){g(this).html(q)}function i(q){return function(r){g(this)[q](r)}}function l(t,s,v){var r=this,q,u=t.indexOf(" ");if(u>=0){q=t.slice(u,t.length);t=t.slice(0,u)}if(g.isFunction(v)){s=s||{};s.done=v}return g.ajax({url:t,type:s&&s.type||"GET",dataType:"html",data:s&&s.params,complete:f(r,s,q)})}function f(r,s,q){return function(u,t){if(t=="success"||t=="notmodified"){var v=m(u.responseText,q);b.call(r,v,s,h)}}}var e=/jquery-writeCapture-script-placeholder-(\d+)-wc/g;function m(s,r){if(!r||!s){return s}var t=0,q={};return g("<div/>").append(s.replace(/<script(.|\s)*?\/script>/g,function(u){q[t]=u;return"jquery-writeCapture-script-placeholder-"+(t++)+"-wc"})).find(r).html().replace(e,function(u,v){return q[v]})}function j(q){throw"invalid method parameter "+q}g.writeCapture=d})(jQuery,writeCapture.noConflict());
var IS24=IS24||{};IS24.STATIC=IS24.STATIC||{},IS24.STATIC.showSuperbannerPlaceholder=function(){var a=jQuery("body");a.addClass("has-ad-superbanner"),a.hasClass("ad-layout-centered")||a.addClass("has-ad")},IS24.STATIC.showSkyscraperPlaceholder=function(){jQuery("body").addClass("has-ad-skyscraper--right")},IS24.STATIC.hasSpaceForSkyscraper=function(a){return(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=(parseInt(a,10)||1280)},IS24.STATIC.createAdScriptUrl=function(a,b,c,d,e){return"http://ads.immobilienscout24.de/addyn/3.0/1072/"+a+"/0/"+b+"/ADTECH;loc=100;target=_blank;"+c+"grp="+e+";misc="+d+";asfunc=1"},IS24.STATIC.showAdvertisementScript=function(a,b){var c="cu_"+a+"_getAdId",d="cu_"+a;return"(function () {if (window."+c+") {if ("+c+"() > 0) {if ('"+b+"' === 'is24-ad') { IS24.STATIC.showSuperbannerPlaceholder();} else if ('"+b+"' === 'is24-sky') {IS24.STATIC.showSkyscraperPlaceholder();}"+d+"();}}}());"},IS24.STATIC.loadAsyncAdvertisement=function(a,b,c,d,e,f){var g,h=jQuery(window),i=jQuery("#"+f);h.width()<669&&2988!==b||(i=i.writeCapture(),IS24.STATIC.hasSpaceForSkyscraper()||(c+="kvsky=false;"),g='<script type="text/javascript" src="'+IS24.STATIC.createAdScriptUrl(a,b,c,d,e)+'" ><\/script><script type="text/javascript">'+IS24.STATIC.showAdvertisementScript(a,f)+"<\/script>",i.html(g))};
var IS24=IS24||{};IS24.cms=IS24.cms||{},function(){"use strict";!function(){function a(a,b,c){var d=[],e=b-a<0?0:b-a;do{e+=a,d.push(e)}while(e<c&&e+a<=c);return d}function b(a){var b,c,d=[];for(b=0,c=a.length;b<c;b++)null!==a[b].offsetParent&&d.push(a[b]);return d}function c(){var c,d,e;window.Imager&&(c=a(50,200,1200),d=document.getElementsByClassName("delayed-image-load"),e=b(d),IS24.cms.imager=new window.Imager(e,{availableWidths:c,lazyload:!0,lazyloadOffset:50,onResize:!0}))}"addEventListener"in document&&"getElementsByClassName"in document&&document.addEventListener("DOMContentLoaded",c)}(),function(){"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){window.IS24&&IS24.cms&&IS24.cms.helpers.lazyLoadBackgroundImages&&IS24.cms.helpers.lazyLoadBackgroundImages.all()})}()}();
var IS24=IS24||{};IS24.STATIC=IS24.STATIC||{},IS24.isIE=0,IS24.fullWidthBreakPoint=1e3,IS24.tabletBreakPoint=660,function(a,b){IS24.STATIC.articleNavigation=function(b){function c(){h.on("mouseenter",function(){d()}),h.on("mouseleave",function(){e(),i.on("mouseenter",function(){d()})}),i.on("mouseleave",function(){e()}),m.on("click",function(a){a.preventDefault()})}function d(){a.clearInterval(j),j=a.setInterval(function(){i.css("visibility","visible"),h.addClass("layerOpen")},q)}function e(){a.clearInterval(j),j=a.setInterval(function(){i.css("visibility","hidden"),h.removeClass("layerOpen")},q)}function f(a){l=k.find("a"),n=0,l.each(function(c){if(b(this).hasClass(a))return n=c,!1})}function g(){h=b(o),i=b(p),k=b(r),m=k.find("."+s),c(),f(s),jQuery(r+" .es-carousel").is24_elastislide({minItems:3,step:1,margin:20,border:0,current:n})}var h,i,j,k,l,m,n,o="#article-flyout-trigger",p="#article-flyout",q=300,r="#article-carousel",s="active";return{init:g}}(jQuery),IS24.STATIC.SideBar=function(b){function c(){e=b("aside.main-sidebar"),f=e.find(".sidebar-trigger"),g=parseInt(e.css("left"),10),d()}function d(){var c=Helpers.is_touch_device()?"touchend":"click";f.on(c,function(){e.hasClass("opened")?(e.removeClass("opened").addClass("closed").clearQueue().animate({left:g},500),f.css("background-position","0 0")):(g=parseInt(e.css("left"),10),e.removeClass("closed").addClass("opened").clearQueue().animate({left:"0"},500),f.css("background-position","-41px 0"))}),b(a).bind("resize",function(){b(this).width()>990&&e.hasClass("closed")?e.css({left:"0"}):650<b(this).width()<990&&e.hasClass("closed")&&e.css({left:g})})}var e,f,g;return{init:c}}(jQuery),a.Helpers||(IS24.STATIC.Helpers=function(){},a.Helpers=new IS24.STATIC.Helpers),IS24.STATIC.Helpers.prototype.is_touch_device=function(){return"ontouchstart"in b.documentElement},IS24.STATIC.Helpers.prototype.iScaleFix=function(){var a=jQuery('meta[name="viewport"]');a&&(a.attr("content","width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0"),jQuery("body").bind("gesturestart",function(){a.attr("content","width=device-width, minimum-scale=0.25, maximum-scale=1.6")}))},IS24.STATIC.Helpers.prototype.getDOM=function(){return jQuery("body")},IS24.STATIC.Helpers.prototype.getBrowserVersion=function(){jQuery.ua={platform:{},browser:{},engine:{}};var a=navigator.userAgent,b=jQuery.ua.platform,c=jQuery.ua.browser,d=jQuery.ua.engine;/Windows/.test(a)?(b.name="win",b.win=!0):/Mac/.test(a)?(b.name="mac",b.mac=!0):/Linux/.test(a)?(b.name="linux",b.linux=!0):/iPhone|iPod/.test(a)?(b.name="iphone",b.iphone=!0):/iPad/.test(a)?(b.name="ipad",b.ipad=!0):/Android/.test(a)?(b.name="android",b.android=!0):(b.name="unknown-platform",b.unknown=!0),/MSIE/.test(a)?(c.name="msie",c.msie=!0):/Firefox/.test(a)?(c.name="firefox",c.firefox=!0):/Safari/.test(a)?(c.name="safari",c.safari=!0):/Opera/.test(a)?(c.name="opera",c.opera=!0):(c.name="unknown-browser",c.unknown=!0),/Chrome/.test(a)&&(c.name="chrome",c.chrome=!0,c.safari=!1),c.msie?c.version=/MSIE (\d+(\.\d+)*)/.exec(a)[1]:c.firefox?c.version=/Firefox\/(\d+(\.\d+)*)/.exec(a)[1]:c.opera?c.version=/Version\/? ?(\d+(\.\d+)*)/.exec(a)[1]:c.safari?c.version=/Version\/(\d+(\.\d+)*)/.exec(a)[1]:c.chrome?c.version=/Chrome\/(\d+(\.\d+)*)/.exec(a)[1]:c.version=0,/Trident/.test(a)||c.msie?(d.name="trident",d.trident=!0):/Gecko/.test(a)?(d.name="gecko",d.gecko=!0):/Presto/.test(a)?(d.name="presto",d.presto=!0):(d.name="unknown-engine",d.unknown=!0),/WebKit/.test(a)&&(d.name="webkit",d.gecko=!1,d.webkit=!0),d.trident?d.version=/Trident/.test(a)?/Trident\/(\d+(\.\d+)*)/.exec(a)[1]:0:d.gecko?d.version=/rv:(\d+(\.\d+)*)/.exec(a)[1]:d.webkit?d.version=/WebKit\/(\d+(\.\d+)*)/.exec(a)[1]:d.presto?d.version=/Presto\/(\d+(\.\d+)*)/.exec(a)[1]:d.version=0,jQuery("body").addClass([b.name,c.name,c.name+parseInt(c.version,10),d.name,d.name+parseInt(d.version,10)].join(" "))},jQuery(b).ready(function(){var a,b,c,d,e;a=Helpers.getDOM(),Helpers.getBrowserVersion(),(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i))&&Helpers.iScaleFix(),d=a.find("a.disabled"),d.each(function(){jQuery(this).on("click",function(a){a.preventDefault(),a.stopImmediatePropagation()})}),b=a.find("aside.main-sidebar"),b.length>0&&IS24.STATIC.SideBar.init(),c=a.find("#article-navigation"),c.length>0&&IS24.STATIC.articleNavigation.init(),e=a.find("#glossary-index"),e.length>0&&e.tabnav({tabSelector:".glossary-index_tab-nav"}),e=a.find("#glossary-aside"),e.length>0&&e.tabnav({tabSelector:".glossary-aside_tab-nav",showAllButton:!1})}),a.onYouTubeIframeAPIReady=function(){jQuery(".video-preview").show()},IS24.STATIC.appendInlineStyleToHead=function(a){var c=b.createElement("style");c.appendChild(b.createTextNode(a)),c.setAttribute("type","text/css"),b.head.appendChild(c)},IS24.STATIC.appendStyleToHead=function(a){var c=b.createElement("link");c.setAttribute("href",a),c.setAttribute("rel","stylesheet"),b.head.appendChild(c)},IS24.STATIC.appendScriptToHead=function(a){var c=b.createElement("script");c.setAttribute("src",a),c.setAttribute("type","text/javascript"),b.head.appendChild(c)},IS24.STATIC.appendScriptToBody=function(a){var c=b.createElement("script");c.setAttribute("src",a),c.setAttribute("type","text/javascript"),b.body.appendChild(c)},IS24.STATIC.moveDomNodeToHead=function(a){b.head.appendChild(a)},IS24.STATIC.formValidation=function(a){function c(b,c){var d=b;b=a(b).get(0),b.setCustomValidity(""),c.forEach(function(c){switch(c){case"required":d.prop("validity").valueMissing&&b.setCustomValidity(a(b).data("validation").requiredMessage);break;case"pattern":d.prop("validity").patternMismatch&&b.setCustomValidity(a(b).data("validation").formatMessage);break;case"type":d.prop("validity").typeMismatch&&b.setCustomValidity(a(b).data("validation").formatMessage)}})}function d(){a(b).ready(function(){a("input").bind("invalid",function(){var b=a(this),d=[],e=b.attr("type");b.data("validation")&&(b.attr("required")&&d.push("required"),b.attr("pattern")&&d.push("pattern"),"email"!==e&&"url"!==e&&"number"!==e||d.push("type"),c(b,d))}).on("change",function(){this.checkValidity()})})}Modernizr.load({test:function(){return"function"==typeof b.createElement("input").checkValidity}()&&function(){return Modernizr.inputtypes.number}()&&!function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")}(),nope:"/etc/designs/is24/clientlibs/js/libs/shims/polyfiller.js",complete:function(){a.webshims&&(a.webshims.setOptions("waitReady",!1),a.webshims.loader.basePath="https://www.immobilienscout24.de/libs/shims/shims/",a.webshims.polyfill("forms forms-ext","form-shim-extend")),d()}})}(jQuery);var c,d,e,f,g,h,i,j,k,l,m,n,o={};if(IS24.Request={getParameter:function(a){return this.parameters()[a]},parameters:function(){var b,c,d={},e=a.location.href,f=e.slice(e.indexOf("?")+1).split("&");for(b=0;b<f.length;b++)c=f[b].split("="),d[c[0]]=c[1];return d}},IS24.ANALYTICS=IS24.ANALYTICS||{},IS24.ANALYTICS.COMSCORE=IS24.ANALYTICS.COMSCORE||{},IS24.ANALYTICS.COMSCORE.campaignParams="",e=IS24.Request.getParameter("icmp"),e&&(f=IS24.Request.getParameter("ns_campaign"),g=IS24.Request.getParameter("ns_linkname"),h=IS24.Request.getParameter("ns_linkname"),IS24.ANALYTICS.COMSCORE.campaignParams+="&icmp="+e,IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_campaign="+(f||""),IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_linkname="+(g||""),IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_source="+(h||""),IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_mchannel=internal"),i=IS24.Request.getParameter("adid"),i&&(IS24.ANALYTICS.COMSCORE.campaignParams+="&icmp="+i,IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_campaign="+i,IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_linkname=adserver&ns_source=adserver&ns_mchannel=internal"),j=IS24.Request.getParameter("ftc")){var p=IS24.Request.getParameter("rfakwid"),q=IS24.Request.getParameter("rfaid");IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_campaign="+j,IS24.ANALYTICS.COMSCORE.campaignParams+="&ftc="+j,IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_source=ftc&ns_mchannel=external&ns_fee=0",IS24.ANALYTICS.COMSCORE.campaignParams+=q?"&clid="+q:"",IS24.ANALYTICS.COMSCORE.campaignParams+=p?"&kwid="+p:"",k=jQuery.base64.encode(j);var r=new Date;r.setTime(r.getTime()+7776e6),n=function(a){var c=new RegExp("(?:^"+a+"|;\\s*"+a+")=(.*?)(?:;|$)","g"),d=c.exec(b.cookie);return null===d?null:d[1]}("sessionUnreliableState");/"+ZnRj:[^_]+([^"]*)"/g.exec(n),n=null!==n?-1!==n.indexOf("ZnRj")?"ZnRj:"+k+RegExp.$1:n+"_ZnRj:"+k:"ZnRj:"+k,n='"'+n+'"',b.cookie="sessionUnreliableState="+n+";path=/; domain="+location.hostname.replace("www.",".")+";",b.cookie="ftc="+j+"; expires="+r.toGMTString()+";path=/; domain="+location.hostname.replace("www.",".")+";";var s=IS24.Request.getParameter("kw"),t=IS24.Request.getParameter("OVKEY");s?(IS24.ANALYTICS.COMSCORE.campaignParams+="&kw="+s,IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_linkname="+s):t&&(IS24.ANALYTICS.COMSCORE.campaignParams+="&kw="+s,IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_linkname="+s)}if(l=IS24.Request.getParameter("nsuap")){for(o=l.split(","),c=0;c<o.length;c++)d=IS24.Request.getParameter(o[c]),IS24.ANALYTICS.COMSCORE.campaignParams+="&"+o[c]+"="+(d||"");IS24.ANALYTICS.COMSCORE.campaignParams+="&ns_event=99"}if(m=IS24.Request.getParameter("nsacp"))for(o=m.split(","),c=0;c<o.length;c++)d=IS24.Request.getParameter(o[c]),IS24.ANALYTICS.COMSCORE.campaignParams+="&"+o[c]+"="+(d||"");IS24.ANALYTICS=IS24.ANALYTICS||{},IS24.ANALYTICS.COMSCORE=IS24.ANALYTICS.COMSCORE||{},IS24.ANALYTICS.TEALIUM=IS24.ANALYTICS.TEALIUM||{},IS24.ANALYTICS.COMSCORE.nsEventParams="",IS24.ANALYTICS.TEALIUM.nsEventParams="",IS24.ANALYTICS.TEALIUM.nrOfEvents=0,function(){var a,c,d,e,f,g,h;if(b.cookie&&(a=b.cookie,a.match(/IS24cq89=([1-9][0-9]*)(-[\w\/\\]*)(-[0-9a-fA-F]+)?/g))){for(c=parseInt(RegExp.$1),IS24.ANALYTICS.TEALIUM.nrOfEvents=c,d=RegExp.$2.substring(1),e=RegExp.$3.substring(1),f="12",g="",h=c;--h>=0;)g+=f+";";IS24.ANALYTICS.COMSCORE.nsEventParams="&ns_event="+encodeURIComponent(g.substr(0,g.length-1))+"&leadtyp="+encodeURIComponent(d),IS24.ANALYTICS.TEALIUM.nsEventParams={evt_event:encodeURIComponent(f),"cP--evt_leadtype":encodeURIComponent(d),"cP--evt_count_lead":encodeURIComponent(c),evt_mid:e}}b.cookie="IS24cq89=; path=/; expires=Thu, 01-Jan-70 00:00:01 GMT;"}(),IS24.GAC=function(b){a.IS24&&IS24.cms&&IS24.cms.geoAutoCompletion&&IS24.cms.geoAutoCompletion(b)}}(window,document);
var IS24=IS24||{};IS24.cms=IS24.cms||{},IS24.cms.geoAutoCompletion=function(a){"use strict";function b(){var a,b=B.getElementsByTagName("li");for(a=0;a<b.length;a++)b[a].removeEventListener("mouseover",p),b[a].removeEventListener("mouseout",q),b[a].removeEventListener("click",r);B.innerHTML=""}function c(){E={country:{label:"Land",results:[],show:0},region:{label:"Bundesländer",results:[],show:0},city:{label:"Orte",results:[],show:0},district:{label:"Kreise",results:[],show:0},quarterOrTown:{label:"Bezirke und Gemeinden",results:[],show:0},postcodeWithQuarter:{label:"PLZ / Orte",results:[],show:0},postcode:{label:"PLZ",results:[],show:0},trainStation:{label:"Haltestelle",results:[],show:0},street:{label:"Straße",results:[],show:0}}}function d(){B.style.display="block"}function e(){B.style.display="none"}function f(a){a&&(a.style.backgroundColor="#e0e0e0")}function g(a){a&&(a.style.backgroundColor="#fff")}function h(a){var b="forward"===a?D.nextSibling:D.previousSibling;b&&!b.getAttribute("role")&&(b="forward"===a?D.nextSibling.nextSibling:D.previousSibling.previousSibling),D&&b&&(g(D),f(b),D=b)}function i(a){return{type:a.getAttribute("data-gactype"),id:a.getAttribute("data-gacid"),label:a.getAttribute("data-gaclabel")}}function j(c){var d;c&&(d=i(c),A.value=d.label,C&&(C.value=d.id),e(),b(),"function"==typeof a.callback&&a.callback(d))}function k(){var a,b=B.getElementsByTagName("li")[0];if(b){do{if(b.getAttribute&&b.getAttribute("role")){a=b;break}b=b.nextSibling}while(b);return a}}function l(a){if(B.hasChildNodes())switch(D||(D=k()),a.keyCode){case 38:h("backward");break;case 40:h("forward");break;case 13:j(D)}}function m(a){var b,c,d=0,e=[];for(b=0,c=a.length;b<c;b++)(a[b].offset>=d||!d)&&(e.push(a[b]),d+=a[b].length);return e}function n(a,b){var c,d,e,f,g,h=m(b),i=a,j=0;for(g=0;g<h.length;g++)c=h[g].offset+j,d=i.substring(0,c),e=i.substring(c,c+h[g].length),f=i.substring(c+h[g].length,i.length),i=d+"<strong>"+e+"</strong>"+f,j+="<strong>".length+"</strong>".length;return i}function o(a){var b,c=document.createElement("li"),d={role:"option","data-gaclabel":a.entity.label,"data-gacid":a.entity.id,"data-gactype":a.entity.type},e=n(a.entity.label,a.matches);c.insertAdjacentHTML("afterbegin",e),c.className="padding-vertical-xs padding-horizontal-m",c.style.cursor="pointer";for(b in d)d.hasOwnProperty(b)&&c.setAttribute(b,d[b]);return c}function p(a){f(a.currentTarget)}function q(a){g(a.currentTarget)}function r(a){j(a.currentTarget)}function s(){for(var a,b,c,d=0,e=0,f=B.appendChild(document.createElement("ul"));d<F&&e<F;){for(a in E)E.hasOwnProperty(a)&&E[a].results.length>e&&d<F&&(E[a].show++,d++);e++}for(a in E)if(E.hasOwnProperty(a))for(E[a].show>0&&(b=document.createElement("li"),c=document.createElement("h4"),c.className="border-top padding-top-s padding-horizontal-s font-standard font-semibold font-lightgray",c.innerHTML=E[a].label,b.appendChild(c),f.appendChild(b)),d=0;d<E[a].show;d++)b=o(E[a].results[d]),b.addEventListener("mouseover",p),b.addEventListener("mouseout",q),b.addEventListener("click",r),f.appendChild(b)}function t(a){var e,g=JSON.parse(a);for(0===g.length&&(C.value=""),b(),c(),e=0;e<g.length;e++)E[g[e].entity.type].results.push(g[e]);s(),d(),D=k(),f(D)}function u(c){var d,f,g,h=/[^\w\u00c0-\u00ff\-\s.,\/+%@&"\[]]/g,i=c.replace(h,""),j=encodeURIComponent(i);if(i.length<1)return e(),void b();d="?i="+j+"&t="+a.geoTypes,g=a.gacUrl+d,f=new XMLHttpRequest,f.addEventListener("loadend",function(){200===f.status?t(f.response):B.innerHTML="Ein Fehler ist aufgetreten."}),f.open("GET",g),f.setRequestHeader("X-IS24-GAC",a.apikey),f.send()}function v(){z&&z.onsubmit&&!z.onsubmit()||z.submit()}function w(){A.addEventListener("blur",function(){window.setTimeout(function(){e()},300)}),A.addEventListener("focus",function(){A.select(),d()}),A.addEventListener("keydown",function(a){a.keyCode in G&&B.hasChildNodes()?a.preventDefault():"Enter"===G[a.keyCode]&&D&&v()}),A.addEventListener("keyup",function(a){a.keyCode in G?l(a):(D=null,u(a.currentTarget.value))})}function x(){var a=document.createElement("div");return a.setAttribute("aria-hidden",!1),a.className="border",a.style.display="none",a.style.position="absolute",a.style.backgroundColor="#fff",a.style.zIndex=33333,A.parentNode.insertBefore(a,A.nextSibling),a}function y(a){for(var b,c=a;c.parentNode;)if(c=c.parentNode,"form"===c.nodeName.toLowerCase()){b=c;break}return b}var z,A,B,C,D,E,F=12,G={13:"Enter",38:"Up",40:"Down"};!function(){"querySelector"in document&&"addEventListener"in document&&"XMLHttpRequest"in window&&(A=document.getElementById(a.autoCompleteFieldID),B=x(),C=document.getElementById(a.geoCodeFieldID),(z=y(A))&&A&&(c(),w()))}()};
