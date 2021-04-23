    var IS24 = IS24 || {};
    
    IS24.cms = IS24.cms || {};
    IS24.cms.helpers = IS24.cms.helpers || {};
                if (window.ContextHub && ContextHub.SegmentEngine) {
                    ContextHubJQ(function() {
                        ContextHub.SegmentEngine.PageInteraction.Teaser({
                            locationId: '_content_is24_deu_www_de_utils_header\u002Dfooter_footer_is24\u002Dstandard\u002Dfooter\u002D2014_jcr_content_footer_list1',
                            variants: [{"path":"https://www.immobilienscout24.de/utils/header-footer/footer/is24-standard-footer-2014/_jcr_content/footer/default","name":"default","title":"Default","campaignName":"","thumbnail":"https://www.immobilienscout24.de/utils/header-footer/footer/is24-standard-footer-2014/_jcr_content/footer.thumb.png","url":"https://www.immobilienscout24.de/utils/header-footer/footer/is24-standard-footer-2014/_jcr_content/footer/list1.default.html","tags":[]}],
                            strategy: '',
                            trackingURL: null
                        });
                    });
                }
    /**
     * Applies a native DOMContentLoaded handler.
     * If DOMContentLoaded event has already fired (e.g. when a component is loaded via AJAX), the function is called immediately.
     *
     * @param {function} fn - The function to be called on the DOMContentLoaded event (or thereafter).
     */
    IS24.cms.helpers.runOnDOMReadyOrAfter = function(fn) {
        if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)
        ) {
            fn();
        } else {
            if ("addEventListener" in document) {
                document.addEventListener("DOMContentLoaded", function handler() {
                    fn();
                    document.removeEventListener("DOMContentLoaded", handler);
                });
            } else if ("attachEvent" in document) {
                document.attachEvent("onreadystatechange", function handler() {
                    if (document.readyState === "complete") {
                        fn();
                        document.detachEvent("onreadystatechange", handler);
                    }
                });
            }
        }
    }

(function () {
    var styles = document.getElementById("topnavigation__style-element");
    styles.removeAttribute("scoped");
    document.getElementsByTagName("head")[0].appendChild(styles);
}());

  var IS24=IS24||{};IS24.STATIC=IS24.STATIC||{},function(){"use strict";function a(){if(i(m),d(m),t)return void c();h()}function b(){if(i(n),d(n),t)return void c();g()}function c(a){if(a)return void window.location.assign(a);window.location.reload()}function d(a){window.IS24&&IS24.TEALIUM&&IS24.TEALIUM.tracking.report({trackingGACategory:"header",trackingGAAction:"meinkonto",trackingGALabel:"toggle_"+a})}function e(a){a&&a.classList.remove("hide")}function f(a){a&&a.classList.add("hide")}function g(){e(r),f(q)}function h(){e(q),f(r)}function i(a){u&&localStorage.setItem(l,a)}function j(){return u?localStorage.getItem(l):m}var k={hasClass:function(a,b){var c,d;if(a&&b)return c=(" "+a.className+" ").replace(/\s+/g," "),d=new RegExp("\\s"+b+"\\s","g"),!!c.match(d)},addClass:function(a,b){this.hasClass(a,b)||(a.className+=" "+b)},resolveURLString:function(a){var b=-1!==a.indexOf("?"),c=-1!==a.indexOf("#");return{hostAndPath:b?a.split("?")[0]:a.split("#")[0],search:b?a.substring(a.indexOf("?")).split("#")[0]:"",hash:c?a.substring(a.indexOf("#")):""}},attachLinkParameters:function(a,b){var c,d,e,f,g,h,i,j,k=/[^\w\-\s.,+%@&="\[\]]/g,l={},m={},n=[];if(a&&a.href&&"object"==typeof b){for(j in b)b.hasOwnProperty(j)&&(c=j.replace(k,""),d=b[j].replace(k,""),l[c]=d);for(e=this.resolveURLString(a.href),f=e.search?e.search.substring(1).split("&"):[],i=0;i<f.length;i++)g=f[i].split("="),m[g[0]]=g[1];for(j in l)l.hasOwnProperty(j)&&(m[j]=l[j]);for(j in m)m.hasOwnProperty(j)&&n.push(j+"="+m[j]);h="?"+n.join("&"),a.href=e.hostAndPath+h+e.hash}},hasNecessaryDOMAPIs:function(a){var b,c=!0;for(b=0;b<a.length;b++)if(!(a[b]in window||a[b]in document||a[b]in document.body)){c=!1;break}return c},findMatchingMapping:function(a){var b,c,d={".sandbox-immobilienscout24.de":{ssoDomain:"sso.sandbox-immobilienscout24.de",wwwDomain:"www.sandbox-immobilienscout24.de"}};for(b in d)if(k.stringEndsWith(a,b)){c=d[b];break}return c},stringEndsWith:function(a,b){var c=a.indexOf(b);return-1!==c&&c===a.length-b.length}};IS24.STATIC.helpers=IS24.STATIC.helpers||{},IS24.STATIC.helpers.loadScript=function(a,b){var c=document.createElement("script");c.type="text/javascript",c.src=a,b&&void 0!==b.async&&(c.async=b.async),b&&void 0!==b.defer&&(c.defer=b.defer),document.getElementsByTagName("head")[0].appendChild(c)},IS24.STATIC.helpers.getLocation=function(){return window.location},IS24.STATIC.sso=function(){function a(a){var b=a;return"sso.immobilienscout24.de"!==m&&(b=a.replace("sso.immobilienscout24.de",m)),b}function b(a){var b=a;return"www.immobilienscout24.de"!==l&&(b=a.replace("www.immobilienscout24.de",l)),b}function c(c){var d=c.href;m&&l&&(d=a(d),d=b(d)),c.href!==d&&(c.href=d)}function d(a){var b,d,e,f=document.querySelectorAll(".sso-login-link"),g=encodeURIComponent(a.ssoReturnUrl),h=encodeURIComponent(a.ssoAppName);for(e=0;e<f.length;e++)b=f[e].href.indexOf("sso_return")>-1,d=!k.hasClass(f[e],"sso-login-link--no-parameters"),d&&(b?k.attachLinkParameters(f[e],{appName:h}):k.attachLinkParameters(f[e],{sso_return:g,appName:h})),c(f[e])}function e(a){a.addEventListener&&a.addEventListener("error",function(){a.style.outline="1px solid transparent"})}function f(a,b){var c=document.createElement("img");c.src=b.imgURL,c.alt=b.userName,e(c),a.appendChild(c)}function g(a,b){var c,d=a.length;for(c=0;c<d;c++)f(a[c],b)}function h(a){var b=document.querySelector(".sso-login"),c=document.querySelector(".topnavigation__overlay-trigger--account"),d=document.querySelectorAll(".sso-login__user-name"),e=document.querySelectorAll(".topnavigation__sso-login__plus-discovery"),f=document.querySelectorAll(".topnavigation__sso-login__user-avatar");if(a&&b){if(a.userName&&d){for(var h=0;h<d.length;h++)d[h].innerHTML=a.userName;k.addClass(b,"sso-login--logged-in"),c instanceof HTMLElement&&k.addClass(c,"SSO-MOBILE-LOGGED-IN")}if(d&&e){for(var i=0;i<d.length;i++)d[i].style.display="none";for(var j=0;j<e.length;j++)e[j].style.display="inline-block"}a.imgURL&&f.length>0&&(g(f,a),k.addClass(b,"sso-login--show-avatar"))}}function i(a){var b,c=Math.round((new Date).getTime()/1e3);return b=k.findMatchingMapping(IS24.STATIC.helpers.getLocation().hostname),"https://"+(b?b.wwwDomain:"www.immobilienscout24.de")+"/meinkonto/api/v1/jsonp/headerInfo?callback="+a+"&ts="+c}function j(){var a,b={ssoReturnUrl:IS24.ssoReturnUrl||IS24.STATIC.helpers.getLocation().href,ssoAppName:IS24.ssoAppName||"is24main"};a=k.findMatchingMapping(IS24.STATIC.helpers.getLocation().hostname),l=a?a.wwwDomain:void 0,m=a?a.ssoDomain:void 0,d(b),IS24.STATIC.helpers.loadScript(i("IS24.STATIC.sso.jsonpCallback"),{async:!0,defer:!0})}var l,m;return{updateLoginStatus:j,jsonpCallback:h}}();var l="userType",m="consumer",n="provider",o=document.querySelector(".topnavigation-flyout__toggler__toggle--consumer"),p=document.querySelector(".topnavigation-flyout__toggler__toggle--provider"),q=document.querySelector(".topnavigation-flyout__consumer"),r=document.querySelector(".topnavigation-flyout__provider"),s=document.querySelector(".sso-login"),t=Boolean(s)&&s.classList.contains("sso-login--logged-in"),u=function(){try{return localStorage.setItem("localStorageAvailable",1),localStorage.removeItem("localStorageAvailable"),!0}catch(a){return!1}}();o&&o.addEventListener("click",a),p&&p.addEventListener("click",b),function(){j()===n?g():h()}()}();

!function(a,b){"use strict";function c(){function a(a){a?b.body.classList.add("noscroll"):b.body.classList.remove("noscroll")}var c=b.getElementById("topnavigation__mobileclosebtn");this.state=!1,b.getElementById("topnavigation__mobileclosebtn_action").addEventListener("click",function(a){h.topnavigationLayer.activate(null)}),this.close=function(){if(this.state){this.state=!1;var d;if(c.classList.remove("topnavigation__closebtnmobile--visible"),c.classList.add("topnavigation__closebtnmobile--hidden"),h.myAccount.state&&h.myAccount.close(),-1!==h.topnavigationLayer.state)for(d=0;d<h.topnavigationLayer.labels.length;d++)h.topnavigationLayer.close(d);a(!1),b.getElementsByTagName("header")[0].classList.remove("topnavigation__fixed-to-top"),b.getElementsByClassName("page-header")[0].classList.remove("topnavigation__layer--is-open")}},this.open=function(){if(!this.state)return this.state=!0,c.classList.add("topnavigation__closebtnmobile--visible"),c.classList.remove("topnavigation__closebtnmobile--hidden"),a(!0),b.getElementsByTagName("header")[0].classList.add("topnavigation__fixed-to-top"),b.getElementsByClassName("page-header")[0].classList.add("topnavigation__layer--is-open"),!0}}function d(){this.state=-1;var a=b.querySelectorAll(".topnavigation__submenu__headline"),c=b.querySelectorAll(".topnavigation__submenu");this.init=function(){var b;for(b=0;b<a.length;b++)a[b].addEventListener("click",function(){h.headlines.controller(this)},!0)},this.controller=function(b){var c;for(c=0;c<a.length;c++)a[c]===b&&this.open(c)},this.open=function(b){if(b===this.state)return void this.reset();a[b].classList.remove("topnavigation__chevronAppend__submenu--down"),a[b].classList.add("topnavigation__chevronAppend__submenu--up"),-1===this.state?c[b].classList.add("topnavigation__submenu--down--fast"):c[b].classList.add("topnavigation__submenu--down"),-1!==this.state&&(c[this.state].classList.remove("topnavigation__submenu--down--fast"),c[this.state].classList.remove("topnavigation__submenu--down"),c[this.state].classList.add("topnavigation__submenu--up"),a[this.state].classList.remove("topnavigation__chevronAppend__submenu--up"),a[this.state].classList.add("topnavigation__chevronAppend__submenu--down")),this.state=b},this.close=function(b){a[b].classList.remove("topnavigation__chevronAppend__submenu--up"),a[b].classList.add("topnavigation__chevronAppend__submenu--down"),c[b].classList.remove("topnavigation__submenu--down--fast"),c[b].classList.remove("topnavigation__submenu--up"),c[b].classList.remove("topnavigation__submenu--down"),this.state=-1},this.reset=function(){for(var a=0;a<c.length;a++)this.close(a)},this.calculateIndexOfMenus=function(a){for(var c=0,d=0;d<a;d++){c+=b.getElementById("NavLayer"+d+"-Menu").children[0].children.length}return c},this.openDefault=function(a,b){void 0===b&&(b=0);var c=this.calculateIndexOfMenus(a)+b;h.headlines.open(c)},this.openByName=function(b){for(var c=0;c<a.length;c++)b===a[c].innerText.split(/\n/)&&this.open(c)}}function e(){function c(a){h.headlines.controller(a)}function d(){var c,d,e=b.querySelectorAll(".topnavigation-js-label").length;for(d=0;d<e;d++)(c=b.getElementById("NavLayer"+d+"-Menu"))&&(c.addEventListener("click",function(){a.innerWidth>h.breakpoint_palm||event.target===this&&h.topnavigationLayer.activate(null)}),f.push(c))}function e(c){h.topnavigationLayer.labels[c].addEventListener("click",function(){if(!(a.innerWidth>h.breakpoint_palm)){var b=this.valueOf();""!==h.topnavigationLayer.timer[b].timer&&clearTimeout(h.topnavigationLayer.timer[b].timer),h.topnavigationLayer.timer[b].timer="",h.topnavigationLayer.activate(h.topnavigationLayer.labels[b])}}.bind(c),!0),b.body.addEventListener("click",function(a){if(-1!==h.topnavigationLayer.state){-1===i.getPath(a).indexOf(b.getElementsByClassName("page-header")[0])&&h.topnavigationLayer.activate(null)}}.bind(c),!0),h.topnavigationLayer.labels[c].children[0].addEventListener("mouseenter",function(b){if(!(a.innerWidth<h.breakpoint_palm)&&h.topnavigationLayer.state!==c){var c=this.valueOf();h.topnavigationLayer.activate(h.topnavigationLayer.labels[c])}}.bind(c),!0),h.topnavigationLayer.labels[c].children[0].addEventListener("mouseleave",function(){if(!(a.innerWidth<h.breakpoint_palm)){var b=this.valueOf();clearTimeout(h.topnavigationLayer.timer[b].timer)}}.bind(c),!0)}var f=[];this.labels=[],this.timer=[],this.state=-1,this.init=function(){var c,f,g=b.querySelectorAll(".topnavigation-js-label");for(c=0;c<g.length;c++)this.labels.push(g[c]),this.timer.push({timer:""}),e(c);d(),a.addEventListener("mousemove",function(b){if(!(a.innerWidth<h.breakpoint_palm||-1===h.topnavigationLayer.state&&-1===h.myAccount.state)){for(var c=!1,d=i.getPath(b),e=0;e<d.length&&void 0!==d[e];e++)void 0!==d[e].className&&"string"==typeof d[e].className&&d[e].classList.contains("topnavigation")&&(c=!0);c?(clearTimeout(f),f=null):f||(f=setTimeout(function(){h.topnavigationLayer.activate(null)},250))}})},this.activate=function(a){var b;h.myAccount.state&&h.myAccount.close(),c(null),null===a?(b=-1,h.closeBtn.close()):b=parseInt(a.htmlFor.replace("-Menu","").replace("NavLayer","")),this.state===b&&-1!==this.state?(this.close(this.state),h.closeBtn.close()):-1===this.state&&-1!==b?(h.closeBtn.open(),this.open(b)):-1!==this.state&&(this.close(this.state),this.open(b,!0),h.closeBtn.open()),-1!==b&&h.headlines.openDefault(b,0)},this.close=function(a){this.state===a&&(this.state=-1),f[a].style.animationName="",f[a].style.backgroundColor="",h.headlines.reset(),f[a].classList.remove("topnavigation__layer--visible"),f[a].classList.add("topnavigation__layer--hidden"),f[a].classList.remove("animationBlocker"),this.labels[a].classList.remove("topnavigation__active")},this.open=function(a,b){this.state!==a&&(this.state=a),h.closeBtn.open(),f[a].classList.add("topnavigation__layer--visible"),f[a].classList.remove("topnavigation__layer--hidden"),b&&f[a].classList.add("animationBlocker"),this.labels[a].classList.add("topnavigation__active")}}function f(){var c,d,e,f,g;g=!1,this.trackingTimeout=1e3,this.state=!1,c=b.getElementsByClassName("topnavigation__level--2")[0],d=b.getElementsByClassName("topnavigation__overlay--account")[0],e=b.getElementsByClassName("topnavigation__overlay-trigger--account")[0],f=b.getElementsByClassName("topnavigation__overlay--account")[0],this.init=function(){d.addEventListener("mouseenter",function(){h.myAccount.state||h.myAccount.open()},!0),e.addEventListener("click",function(a){h.myAccount.state?h.myAccount.close():h.myAccount.open()}),f.addEventListener("click",function(a){a.target===this&&(h.myAccount.state?h.myAccount.close():h.myAccount.open())})},d.addEventListener("mouseenter",function(){h.myAccount.open()}),a.addEventListener("mousemove",function(b){if(!(a.innerWidth<h.breakpoint_palm||-1===h.topnavigationLayer.state&&-1===h.myAccount.state)){for(var c=!1,d=i.getPath(b),e=0;e<d.length;e++)void 0!==d[e].className&&"string"==typeof d[e].className&&-1!==d[e].className.indexOf("topnavigation__overlay--account")&&(c=!0);c?h.myAccount.open():h.myAccount.state&&h.myAccount.close()}}),this.close=function(){this.state=!1,c.classList.remove("topnavigation__level--show"),f.classList.remove("topnavigation__overlay--account--show"),h.closeBtn.close()},this.open=function(){this.state||this.tracking(),this.state=!0,c.classList.add("topnavigation__level--show"),f.classList.add("topnavigation__overlay--account--show"),-1!==h.topnavigationLayer.state&&h.topnavigationLayer.close(h.topnavigationLayer.state),h.closeBtn.open()},this.tracking=function(a,b,c,d){if(setTimeout(function(){g=!1},this.trackingTimeout),!g){g=!0;try{void 0===a||void 0===b||void 0===c?IS24.TEALIUM.tracking.report({evt_ga_category:"header",evt_ga_action:"meinkonto",evt_ga_label:"mein-bereich-open"}):IS24.TEALIUM.tracking.report({evt_ga_category:a,evt_ga_action:b,evt_ga_label:c})}catch(a){void 0!==d&&d(a)}}}}function g(){function c(b){(b.target.offsetLeft<k.scrollLeft||b.target.offsetLeft+b.target.offsetWidth>k.scrollLeft+a.innerWidth)&&(k.scrollLeft=b.target.offsetLeft-20),d()}function d(){var a=k.scrollWidth-l.scrollWidth,b=k.scrollLeft;i(a<20?"none":Math.abs(a-b)<Math.abs(b)?"end":"start")}function e(){k=b.querySelectorAll(".topnavigation__headlines")[0],l=b.querySelectorAll(".topnavigation__scroll_navigation")[0],m=b.getElementsByClassName("topnavigation__headlines_filter")[0]}function f(a,b){for(var c=0;c<b.length;c++)a.classList.add(b[c])}function g(){var a=b.createElement("div");f(a,["layer","layer--left","lap-hide","desk-hide"]),m.appendChild(a);var c=b.createElement("div");f(c,["layer","layer--right","lap-hide","desk-hide"]),m.appendChild(c)}function h(){k.addEventListener("scroll",d);for(var e=b.getElementsByClassName("topnavigation-js-label"),f=0;f<e.length;f++)e[f].addEventListener("click",c);a.addEventListener("resize",d)}function i(a){"none"===a?(m.classList.remove("activeFilter--left"),m.classList.remove("activeFilter--right")):"start"===a?(m.classList.remove("activeFilter--right"),m.classList.add("activeFilter--left")):(m.classList.add("activeFilter--right"),m.classList.remove("activeFilter--left"))}function j(){e(),g(),h(),d()}var k,l,m;this.init=function(){j()}}a.IS24=a.IS24||{},IS24.core=IS24.core||{},IS24.core.extensions=IS24.core.extensions||{},IS24.core.extensions.topnavigation=IS24.core.extensions.topnavigation||{},IS24.STATIC=IS24.STATIC||{},IS24.STATIC.helpers=IS24.STATIC.helpers||{},IS24.STATIC.helpers.loadScript=function(a,c){var d=b.createElement("script");d.type="text/javascript",d.src=a,c&&void 0!==c.async&&(d.async=c.async),c&&void 0!==c.defer&&(d.defer=c.defer),b.getElementsByTagName("head")[0].appendChild(d)},IS24.STATIC.helpers.getLocation=function(){return a.location};var h={},i={hasClass:function(a,b){var c,d;if(a&&b)return c=(" "+a.className+" ").replace(/\s+/g," "),d=new RegExp("\\s"+b+"\\s","g"),!!c.match(d)},addClass:function(a,b){this.hasClass(a,b)||(a.className+=" "+b)},resolveURLString:function(a){var b=-1!==a.indexOf("?"),c=-1!==a.indexOf("#");return{hostAndPath:b?a.split("?")[0]:a.split("#")[0],search:b?a.substring(a.indexOf("?")).split("#")[0]:"",hash:c?a.substring(a.indexOf("#")):""}},attachLinkParameters:function(a,b){var c,d,e,f,g,h,i,j,k=/[^\w\-\s.,+%@&="[\]]/g,l={},m={},n=[];if(a&&a.href&&"object"==typeof b){for(j in b)b.hasOwnProperty(j)&&(c=j.replace(k,""),d=b[j].replace(k,""),l[c]=d);for(e=this.resolveURLString(a.href),f=e.search?e.search.substring(1).split("&"):[],i=0;i<f.length;i++)g=f[i].split("="),m[g[0]]=g[1];for(j in l)l.hasOwnProperty(j)&&(m[j]=l[j]);for(j in m)m.hasOwnProperty(j)&&n.push(j+"="+m[j]);h="?"+n.join("&"),a.href=e.hostAndPath+h+e.hash}},hasNecessaryDOMAPIs:function(c){var d,e=!0;for(d=0;d<c.length;d++)if(!(c[d]in a||c[d]in b||c[d]in b.body)){e=!1;break}return e},findMatchingMapping:function(a){var b,c,d={".sandbox-immobilienscout24.de":{ssoDomain:"sso.sandbox-immobilienscout24.de",wwwDomain:"www.sandbox-immobilienscout24.de"},localhost:{ssoDomain:"sso.sandbox-immobilienscout24.de",wwwDomain:"www.sandbox-immobilienscout24.de"}};for(b in d)if(i.stringEndsWith(a,b)){c=d[b];break}return c},stringEndsWith:function(a,b){var c=a.indexOf(b);return-1!==c&&c===a.length-b.length},getPath:function(c){for(var d=[],e=c.target;e;)d.push(e),e=e.parentNode;return-1===d.indexOf(a)&&-1===d.indexOf(b)&&d.push(b),-1===d.indexOf(a)&&d.push(a),d}};h.CloseBtn=c,h.Headlines=d,h.ControllLayer=e,IS24.STATIC.lastSearchNotification=function(){function c(){return localStorage[K]?JSON.parse(localStorage[K]):{}}function d(a){localStorage[K]=JSON.stringify(a)}function e(){try{return localStorage.setItem("localStorageAvailable",1),localStorage.removeItem("localStorageAvailable"),!0}catch(a){return!1}}function f(a,b){var e=c();e[a]=b,d(e)}function g(a){f("hideNotification",a)}function h(a){f("hideTeaser",a)}function j(){g(!1),h(!1)}function k(a){f("saveSearchLink",a)}function l(){var a;for(a=0;a<F.length;a++)F[a].style.display="inline-block"}function m(){var b,c=300;for(b=0;b<F.length;b++)F[b].style.opacity="0",function(b){a.setTimeout(function(){b.style.display="none"},c)}(F[b])}function n(a){E.contains(a.relatedTarget)||(m(),E.removeEventListener("mouseout",n))}function o(){function b(){E.addEventListener("mouseout",function(b){E.contains(b.relatedTarget)||a.clearTimeout(c)}),c=a.setTimeout(function(){g(!0),E.addEventListener("mouseout",n),E.removeEventListener("mouseover",b)},d)}var c,d=500;E.addEventListener("mouseover",b)}function p(){function a(c){E.contains(c.target)||(m(),b.body.removeEventListener("touchstart",a))}function c(){g(!0),b.body.addEventListener("touchstart",a),E.removeEventListener("touchstart",c)}E.addEventListener("touchstart",c)}function q(){o(),p()}function r(a){var b=a;return b.length>40&&(b=b.substring(0,37)+"&hellip;"),b}function s(a){var b=a.indexOf("&source=");return-1!==b&&(a=a.substring(0,b)),a}function t(a){I.href=s(a.saveSearchLink)+"&source=search_meinkontodropdown-lastsearch",H.innerHTML=r(a.lastSearch)}function u(){G.style.display="block"}function v(){h(!0)}function w(b){var c,d=b.currentTarget;v(),a.IS24&&IS24.TEALIUM&&a.utag&&(b.preventDefault(),c=JSON.parse(d.getAttribute("data-tracking")),IS24.TEALIUM.tracking.report(c),a.setTimeout(function(){a.open(d.href,d.getAttribute("target"))},200))}function x(){I.addEventListener("click",w),I.addEventListener("keyup",function(a){13===a.keyCode&&w()})}function y(a){G&&(x(),t(a),u())}function z(a){var b=c();a.lastSearchAvailable&&a.saveSearchLink&&(a.saveSearchLink!==b.saveSearchLink&&(j(),k(a.saveSearchLink)),b.hideTeaser||y(a),b.hideNotification||(q(),l()))}function A(a){var b,c=a.target;200===c.status&&(b=JSON.parse(c.responseText),z(b))}function B(){var a;return a=i.findMatchingMapping(IS24.STATIC.helpers.getLocation().hostname),"//"+(a?a.wwwDomain:"www.immobilienscout24.de")+J}function C(a){var b=new XMLHttpRequest;b.withCredentials=!0,b.addEventListener("loadend",a),b.open("get",B()),b.send()}function D(){if(i.hasNecessaryDOMAPIs(["XMLHttpRequest","addEventListener","JSON","getElementsByClassName","localStorage"])&&e()){E=b.getElementsByClassName("topnavigation__sso-login")[0];var a=b.querySelectorAll("header.page-header")[0];E&&a&&(F=a.getElementsByClassName("topnavigation-last-search-notification"),(G=a.getElementsByClassName("topnavigation-last-search-teaser")[0])&&(H=G.getElementsByClassName("topnavigation-last-search-notification__search-label")[0],I=G.getElementsByClassName("topnavigation-last-search-notification__save-button")[0])),E&&F.length>0&&C(A)}}var E,F,G,H,I,J="/Suche/controller/lastSearch",K="topNavigationLastSearchNotification";return{init:D}}(),h.MyAccountTab=f,IS24.STATIC.sso=function(){function a(a){var b=a;return"sso.immobilienscout24.de"!==n&&(b=a.replace("sso.immobilienscout24.de",n)),b}function c(a){var b=a;return m&&"www.immobilienscout24.de"!==m&&(b=a.replace(".immobilienscout24.de",".sandbox-immobilienscout24.de")),b}function d(a){var b=a;return"www.immobilienscout24.de"!==m&&(b=a.replace("www.immobilienscout24.de",m)),b}function e(b){if(n&&m){var c=a(b.href);c=d(c),b.href=c}}function f(a){var d,f,g=b.querySelectorAll(".sso-login-link"),h=encodeURIComponent(c(a.ssoReturnUrl)),j=encodeURIComponent(a.ssoAppName);for(f=0;f<g.length;f++)d=g[f].href.indexOf("sso_return")>-1,e(g[f]),i.hasClass(g[f],"sso-login-link--no-parameters")||(d&&!a.forceUpdateReturnUrl?i.attachLinkParameters(g[f],{appName:j}):i.attachLinkParameters(g[f],{sso_return:h,appName:j}))}function g(a){a.addEventListener&&a.addEventListener("error",function(){a.style.outline="1px solid transparent"})}function h(){var a;return a=i.findMatchingMapping(IS24.STATIC.helpers.getLocation().hostname),"https://"+(a?a.wwwDomain:"www.immobilienscout24.de")+"/meinkonto/api/v1/headerInfo"}function j(a){var c,d=b.querySelector(".sso-login"),e=b.querySelectorAll(".sso-login__user-name"),f=b.querySelectorAll(".topnavigation__sso-login__plus-discovery"),h=b.querySelectorAll(".topnavigation__sso-login__user-avatar");a||console.error(new Error("jsonCallback, data is not set")),d||console.error(new Error("No Login Markup found")),""!==a.userName&&i.addClass(d,"sso-login--logged-in");for(var j=0;j<e.length;j++)a.userName&&e&&(e[j].innerHTML=a.userName);if(e&&f){for(var k=0;k<e.length;k++)e[k].style.display="none";for(var l=0;l<f.length;l++)f[l].style.display="inline-block"}if(a.imageUrl&&0!==h.length&&-1===a.imageUrl.indexOf("nobodyonePerson"))for(var m=0;m<h.length;m++)c=b.createElement("img"),c.src=a.imageUrl,c.alt=a.userName,h[m].insertBefore(c,h[m].children[0]),h[m].className=h[m].className+" topnavigation__hasAvatar",g(c)}function k(a){var b,c={ssoReturnUrl:IS24.ssoReturnUrl||IS24.STATIC.helpers.getLocation().href,ssoAppName:IS24.ssoAppName||"is24main",forceUpdateReturnUrl:a&&a.forceUpdateReturnUrl,requestUserData:!a||a.requestUserData};b=i.findMatchingMapping(IS24.STATIC.helpers.getLocation().hostname),m=b?b.wwwDomain:void 0,n=b?b.ssoDomain:void 0,f(c),c.requestUserData&&IS24.STATIC.sso.requestUserData()}function l(){var a=new XMLHttpRequest;a.withCredentials=!0;var b=h();a.onreadystatechange=function(){var a;if(4===this.readyState&&200===this.status){try{a=JSON.parse(this.responseText)}catch(b){console.error(new Error("[UserHeaderAPI] Could not parse JSON return val... \n "+b.message)),a={}}void 0!==a.userName&&void 0!==a.imageUrl&&j(a)}else 4===this.readyState&&200!==this.status&&console.error(new Error("[header] API Request failed."))},a.open("GET",b,!0),a.send()}var m,n;return{updateLoginStatus:k,requestUserData:l}}(),h.HeadlinesScrolling=g,IS24.core.extensions.topnavigation.init=function(){h.topnavigationLayer=new h.ControllLayer,h.myAccount=new h.MyAccountTab,h.closeBtn=new h.CloseBtn,h.headlines=new h.Headlines;try{h.headlinesScrolling=new h.HeadlinesScrolling,h.headlinesScrolling.init()}catch(a){}h.topnavigationLayer.init(),h.myAccount.init(),h.headlines.init(),h.breakpoint_palm=668}}(window,document);
    (function () {
        function initializeHeader() {
            if (window.IS24 && IS24.core && IS24.core.extensions && IS24.core.extensions.topnavigation) {
                IS24.core.extensions.topnavigation.init();
            }
        }

        if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)
        ) {
            // execute immediately if DOMContentLoaded has already fired
            // this is a fallback for applications which load the header asynchronously and need to execute this script after DOM Ready
            initializeHeader();
        } else {
            if ("addEventListener" in document) {
                document.addEventListener("DOMContentLoaded", function () {
                    initializeHeader();
                });
            } else if ("attachEvent" in document) {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        initializeHeader();
                    }
                });
            }
        }
    }());
(function () {
    function initializeLoginBox() {
        if (window.IS24 && IS24.STATIC) {
            if (IS24.STATIC.sso && IS24.STATIC.sso.updateLoginStatus) {
                IS24.STATIC.sso.updateLoginStatus();
            }
    }
}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
            // execute immediately if DOMContentLoaded has already fired
            // this is a fallback for applications which load the header asynchronously and need to execute this script after DOM Ready
            initializeLoginBox();
        } else {
            if ("addEventListener" in document) {
            document.addEventListener("DOMContentLoaded", function () {
            initializeLoginBox();
            });
        } else if ("attachEvent" in document) {
            document.attachEvent("onreadystatechange", function () {
                if (document.readyState === "complete") {
                    initializeLoginBox();
                }
            });
        }
    }
}());
	(function () {
		var container  = document.getElementsByClassName("tmlandingpage-main_content_is24_deu_www_de_immobilienbewertung_immobilienbewertung-vb_jcr_content_par_tmlandingpage")[0],
			largeImage = new Image,
			smallImage = new Image;
		
		function sizeHandler() {
			var containerWidth = container.offsetWidth,
				activeImage    = (IS24.cms.helpers.getDeviceState().palm) ? smallImage : largeImage,
				imageExists    = (activeImage.getAttribute("src") !== ""),
				imageHeight    = (imageExists) ? Math.floor((activeImage.height / activeImage.width) * containerWidth) : 0;
			
			container.style.minHeight = imageHeight + "px";
		}
		
		if (!(container && IS24.cms.helpers)) { return; }
		
		jQuery(largeImage).load(sizeHandler);
		jQuery(smallImage).load(sizeHandler);
		jQuery(window).resize(IS24.cms.helpers.debounce(sizeHandler, 100));
		
		largeImage.src = "immobilienbewertung-vb/_jcr_content/par/tmlandingpage/image.img.jpg/1618063677760.jpg";
		smallImage.src = "immobilienbewertung-vb/_jcr_content/par/tmlandingpage/narrowimage.img.jpg/1618063677760.jpg";
	}());

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});


document.getElementsByClassName('flexigrid')[0].classList.add("sticky-nav-section");


    function stickybarFadeIn() {
        var y = $(this).scrollTop();
        var startFooter = $(document).height() - $(window).height() - 600;
        if (y > 600 && y < startFooter) {
            adjustWidth();
            $(".stickybar").addClass("load");
        } else {
            $(".stickybar").removeClass("load");
        }
    }

    function adjustWidth() {
        var parentwidth = $(".stickybarWrapper").width();
        $(".stickybar").width(parentwidth);
    }

    $(function() {

        $(document).scroll(
            function() {
                stickybarFadeIn();
            })

        $(window).resize(
            function() {
                adjustWidth();
            })

    })
var datenschutzLinkNodeList = document.querySelectorAll('footer li a');
var datenschutzLinkArr = Array.prototype.slice.call(datenschutzLinkNodeList);
var datenschutzLinkEl = datenschutzLinkArr.filter(function(e) {
  return e.innerText.match(/^Datenschutz$/);
})[0];
if (datenschutzLinkEl) {
  var datenschutzLinkParent = datenschutzLinkEl.parentElement || null;
  var newListItem = document.createElement('li');
  newListItem.classList.add('inline-link', 'with-pipe--left');
  var privacyManagerLink = document.createElement('a');
  privacyManagerLink.innerText = 'Zum Privacy Manager';
  privacyManagerLink.id = 'footerPrivacyManager';
  privacyManagerLink.setAttribute('href', 'javascript:void(0)');
  datenschutzLinkParent.classList.add('inline-link');
  newListItem.appendChild(privacyManagerLink);
  datenschutzLinkEl.parentNode.insertAdjacentHTML('afterend', newListItem.outerHTML);
  document.addEventListener('click', function(e) {
      if(e.target && e.target.id == 'footerPrivacyManager'){
        e.preventDefault();
        (function safeCall() {
          if(!window.__tcfapi) {
            document.body.style.cursor = 'progress'
            setTimeout(safeCall, 500)
            return
          }
          if(document.body.style.cursor == 'progress') {
            document.body.style.cursor = 'default'
          }
          window.__tcfapi('showConsentManager', true);
        })()
      }
    });
}
var IS24 = IS24 || {};
IS24.ANALYTICS = IS24.ANALYTICS || {};
IS24.ANALYTICS.COMSCORE = IS24.ANALYTICS.COMSCORE || {};
IS24.ANALYTICS.TEALIUM = IS24.ANALYTICS.TEALIUM || {};
function getIs24TealiumParameterString(baseUrl, nrOfParamCopies, parameterMap){
    for (var key in parameterMap) {
        if (parameterMap.hasOwnProperty(key)) {
            var separator= baseUrl.indexOf('?') != -1 ? "&" : "?";
            baseUrl += separator+key
            if(parameterMap[key].length > 0){
                baseUrl += '=';
                var counter=nrOfParamCopies;
                while(--counter >= 0) {
                    baseUrl += parameterMap[key];
                    if(key.lastIndexOf("cP--",0) === 0) {
                        //parameter that starts with this prefix may no be multiplied
                        break;
                    }
                    if(counter>0){
                        baseUrl += ';';
                    }
                }
            }
        }
    }
    return baseUrl;
}


var etsUrlForPageview = "../../tracking.immobilienscout24.de/tr.js";

var currentHost = document.location.host.split('.');
if(currentHost.length > 2 && currentHost[1].lastIndexOf('preview') == 0 ){
    etsUrlForPageview = etsUrlForPageview.replace(etsUrlForPageview.split('.')[1], currentHost[1]);
}
var etsUrlParam={
    'addOnClick':''
        ,'cP--svc_module_name':'cms'
        ,'customCounterName':'is24.de.immobilienbewertung.immobilienbewertung-vb'
        ,'cP--pag_content':'landingpage'
        
};




var mvt;
if(mvt){
    var mvtArr = mvt.getQueryString().split("&");
    for (var i=0; i<mvtArr.length; i++) {
        if (mvtArr[i].indexOf("=")>-1) {
            var mvtVarArr = mvtArr[i].split("=");
            etsUrlParam["cP--"+ mvtVarArr[0].replace("ns_m","ab")] = mvtVarArr[1];
        }
    }
}

// TODO AB-Testing Parameter mitschicken (cP-- ...)
 if(IS24.ANALYTICS.TEALIUM && IS24.ANALYTICS.TEALIUM.nrOfEvents>0){
     etsUrlForPageview = getIs24TealiumParameterString(etsUrlForPageview, 1, etsUrlParam);
     etsUrlForPageview = getIs24TealiumParameterString(etsUrlForPageview, IS24.ANALYTICS.TEALIUM.nrOfEvents, IS24.ANALYTICS.TEALIUM.nsEventParams);
 } else{
     etsUrlForPageview = getIs24TealiumParameterString(etsUrlForPageview, 1, etsUrlParam);
 }




var myNode = document.createElement('script');
myNode.setAttribute('type','text/javascript');
myNode.setAttribute('src', etsUrlForPageview);
myNode.async = true;
document.getElementsByTagName('head')[0].appendChild(myNode);