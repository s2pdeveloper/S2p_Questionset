!function(u,p){"object"==typeof exports&&typeof module<"u"?module.exports=p():"function"==typeof define&&define.amd?define(p):(u=u||self).Stepper=p()}(this,function(){"use strict";function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n}).apply(this,arguments)}var p=window.Element.prototype.matches,E=function(n,t){return n.closest(t)},_=function(n,t){return new window.Event(n,t)},L=function(n,t){return new window.CustomEvent(n,t)};!function(){if(window.Element.prototype.matches||(p=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(E=function(t,e){if(!document.documentElement.contains(t))return null;do{if(p.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),window.Event&&"function"==typeof window.Event||(_=function(t,e){e=e||{};var s=document.createEvent("Event");return s.initEvent(t,!!e.bubbles,!!e.cancelable),s}),"function"!=typeof window.CustomEvent){var n=window.Event.prototype.preventDefault;L=function(t,e){var s=document.createEvent("CustomEvent");return s.initCustomEvent(t,(e=e||{bubbles:!1,cancelable:!1,detail:null}).bubbles,e.cancelable,e.detail),s.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},s}}}();var r_BLOCK="dstepper-block",r_NONE="dstepper-none",d="transitionend",h="bsStepper",f=function(n,t,e,s){var i=n[h];if(!i._steps[t].classList.contains("active")&&!i._stepsContents[t].classList.contains("active")){var o=L("show.bs-stepper",{cancelable:!0,detail:{from:i._currentIndex,to:t,indexStep:t}});n.dispatchEvent(o);var c=i._steps.filter(function(l){return l.classList.contains("active")}),a=i._stepsContents.filter(function(l){return l.classList.contains("active")});o.defaultPrevented||(c.length&&c[0].classList.remove("active"),a.length&&(a[0].classList.remove("active"),n.classList.contains("vertical")||i.options.animation||a[0].classList.remove(r_BLOCK)),w(n,i._steps[t],i._steps,e),g(n,i._stepsContents[t],i._stepsContents,a,s))}},w=function(n,t,e,s){e.forEach(function(o){var c=o.querySelector(s.selectors.trigger);c.setAttribute("aria-selected","false"),n.classList.contains("linear")&&c.setAttribute("disabled","disabled")}),t.classList.add("active");var i=t.querySelector(s.selectors.trigger);i.setAttribute("aria-selected","true"),n.classList.contains("linear")&&i.removeAttribute("disabled")},g=function(n,t,e,s,i){var o=n[h],c=e.indexOf(t),a=L("shown.bs-stepper",{cancelable:!0,detail:{from:o._currentIndex,to:c,indexStep:c}});if(t.classList.contains("fade")){t.classList.remove(r_NONE);var l=I(t);t.addEventListener(d,function v(){t.classList.add(r_BLOCK),t.removeEventListener(d,v),n.dispatchEvent(a),i()}),s.length&&s[0].classList.add(r_NONE),t.classList.add("active"),C(t,l)}else t.classList.add("active"),t.classList.add(r_BLOCK),n.dispatchEvent(a),i()},I=function(n){if(!n)return 0;var t=window.getComputedStyle(n).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],1e3*parseFloat(t)):0},C=function(n,t){var e=!1,s=t+5;function i(){e=!0,n.removeEventListener(d,i)}n.addEventListener(d,i),window.setTimeout(function(){e||n.dispatchEvent(_(d)),n.removeEventListener(d,i)},s)},m={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function n(e,s){var i=this;void 0===s&&(s={}),this._element=e,this._currentIndex=0,this._stepsContents=[],this.options=u({},m,{},s),this.options.selectors=u({},m.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add("linear"),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(o){return o.hasAttribute("data-target")}).forEach(function(o){i._stepsContents.push(i._element.querySelector(o.getAttribute("data-target")))}),function(n,t){t.animation&&n.forEach(function(e){e.classList.add("fade"),e.classList.add(r_NONE)})}(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,h,{value:this,writable:!0}),this._steps.length&&f(this._element,this._currentIndex,this.options,function(){})}var t=n.prototype;return t._setLinkListeners=function(){var e=this;this._steps.forEach(function(s){var i,o=s.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=function(c){c.preventDefault()},o.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=(i=e.options,function(c){c.preventDefault();var a=E(c.target,i.selectors.steps),l=E(a,i.selectors.stepper),v=l[h],b=v._steps.indexOf(a);f(l,b,i,function(){v._currentIndex=b})}),o.addEventListener("click",e._clickStepNonLinearListener))})},t.next=function(){var e=this,s=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;f(this._element,s,this.options,function(){e._currentIndex=s})},t.previous=function(){var e=this,s=this._currentIndex-1>=0?this._currentIndex-1:0;f(this._element,s,this.options,function(){e._currentIndex=s})},t.to=function(e){var s=this,i=e-1,o=i>=0&&i<this._steps.length?i:0;f(this._element,o,this.options,function(){s._currentIndex=o})},t.reset=function(){var e=this;f(this._element,0,this.options,function(){e._currentIndex=0})},t.destroy=function(){var e=this;this._steps.forEach(function(s){s.querySelector(e.options.selectors.trigger).removeEventListener("click",e.options.linear?e._clickStepLinearListener:e._clickStepNonLinearListener)}),this._element[h]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},n}()});