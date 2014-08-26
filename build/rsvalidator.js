!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.RsValidator=b()}(this,function(){var a,b,c;return function(d){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(n=n.slice(0,n.length-1),a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,b){return function(){return n.apply(d,v.call(arguments,0).concat([a,b]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var b=r[a];delete r[a],t[a]=!0,m.apply(d,b)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,b,c,f){var h,k,l,m,n,s,u=[],v=typeof c;if(f=f||a,"undefined"===v||"function"===v){for(b=!b.length&&c.length?["require","exports","module"]:b,n=0;n<b.length;n+=1)if(m=o(b[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=c?c.apply(q[a],u):void 0,a&&(h&&h.exports!==d&&h.exports!==q[a]?q[a]=h.exports:l===d&&s||(q[a]=l))}else a&&(q[a]=c)},a=b=n=function(a,b,c,e,f){if("string"==typeof a)return p[a]?p[a](b):j(o(a,b).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!b)return;b.splice?(a=b,b=c,c=null):a=d}return b=b||function(){},"function"==typeof c&&(c=e,e=f),e?m(d,a,b,c):setTimeout(function(){m(d,a,b,c)},4),n},n.config=function(a){return n(a)},a._defined=q,c=function(a,b,c){b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},c.amd={jQuery:!0}}(),c("almond",function(){}),function(){c("rs-validator-settings",[],function(){var a;return a=function(){function a(){this.settings={locale:"global",autoValidate:!1,liveValidate:!0,successClass:"success",errorClass:"error",setStatusClass:!0,defaultErrorHandler:!0,globalNamespace:!1,onError:function(){},onValid:function(){},onChange:function(){}},this.change=this.settings.onChange,this.error=this.settings.onError,this.valid=this.settings.onValid}return a.prototype.set=function(a){return this.settings=$.extend(this.settings,a),this.change=this.settings.onChange,this.error=this.settings.onError,this.valid=this.settings.onValid},a.prototype.getLocale=function(){return this.settings.locale},a.prototype.isAutoValidate=function(){return this.settings.autoValidate},a.prototype.isLiveValidate=function(){return this.settings.liveValidate},a.prototype.getSuccessClass=function(){return this.settings.successClass},a.prototype.getErrorClass=function(){return this.settings.errorClass},a.prototype.isSetStatusClass=function(){return this.settings.setStatusClass},a.prototype.useDefaultErrorHandler=function(){return this.settings.defaultErrorHandler},a.prototype.useGlobalNamespace=function(){return this.settings.globalNamespace},a}()})}.call(this),function(){c("rs-state-transition",[],function(){var a;return a=function(){function a(){}var b;return b={"new":{word:function(a,b){return a.word=b}},word:{word:function(a,b){return a.word+=b},"new":function(a){return""!==a.word&&a.data.push({word:a.word}),a.word=""},parametersStart:function(a){return a.data.push({word:a.word}),a.word="",a.parameters=[]}},parametersStart:{parameterValue:function(a,b){return a.parameter=b},stringStart:function(a){return a.parameter+='"'}},parameterNew:{parameterValue:function(a,b){return a.parameter+=b},stringStart:function(a){return a.parameter+='"'}},parameterValue:{parameterValue:function(a,b){return a.parameter+=b},parameterNew:function(a){return'"'===a.parameter[0]&&'"'===a.parameter[a.parameter.length-1]&&3===a.parameter.split('"').length&&(a.parameter=a.parameter.slice(0,-1),a.parameter=a.parameter.substr(1)),a.parameters.push(a.parameter),a.parameter=""},parametersStop:function(a){return'"'===a.parameter[0]&&'"'===a.parameter[a.parameter.length-1]&&3===a.parameter.split('"').length&&(a.parameter=a.parameter.slice(0,-1),a.parameter=a.parameter.substr(1)),a.parameters.push(a.parameter),a.data[a.data.length-1].parameters=a.parameters,a.parameters=[],a.parameter=""},stringStart:function(a){return a.parameter+='"'}},parametersStop:{"new":function(a){return a.word=""}},stringEscape:{stringStart:function(a){return a.parameter+='\\"'}},stringStart:{stringStart:function(a,b){return a.parameter+=b},parameterValue:function(a){return a.parameter+='"'}}},a.prototype.setTransition=function(a,c,d,e){return b[a][c](d,e)},a}()})}.call(this),function(){c("rs-state-new",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){if(/[a-zA-Z]/.test(b))return a.setTransition("new","word"),a.state.word();if(" "===b)return this;throw new Error('Invalid lexeme "'+b+'"')},a}()})}.call(this),function(){c("rs-state-word",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){if("\n"===b)return a.setTransition("word","new"),a.state["new"]();if(/[a-zA-Z]/.test(b))return a.setTransition("word","word"),this;if(","===b)return a.setTransition("word","new"),a.state["new"]();if("("===b)return a.setTransition("word","parametersStart"),a.state.parametersStart();throw new Error('Invalid lexeme "'+b+'"')},a}()})}.call(this),function(){c("rs-state-parameters-start",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){if(/[a-zA-Z0-9]/.test(b))return a.setTransition("parametersStart","parameterValue"),a.state.parameterValue();if('"'===b)return a.setTransition("parametersStart","stringStart"),a.state.stringStart();if(" "===b)return this;throw new Error('Invalid lexeme "'+b+'"')},a}()})}.call(this),function(){c("rs-state-parameters-stop",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){if(","===b)return a.setTransition("parametersStop","new"),a.state["new"]();if("\n"===b)return a.setTransition("word","new"),a.state["new"]();if(" "===b)return this;throw new Error('Invalid lexeme "'+b+'"')},a}()})}.call(this),function(){c("rs-state-parameter-new",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){if(/[a-zA-Z0-9]/.test(b))return a.setTransition("parameterNew","parameterValue"),a.state.parameterValue();if('"'===b)return a.setTransition("parameterNew","stringStart"),a.state.stringStart();if(" "===b)return this;throw new Error('Invalid lexeme "'+b+'"')},a}()})}.call(this),function(){c("rs-state-parameter-value",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){if(/[a-zA-Z0-9: ]/.test(b))return a.setTransition("parameterValue","parameterValue"),this;if(","===b)return a.setTransition("parameterValue","parameterNew"),a.state.parameterNew();if(")"===b)return a.setTransition("parameterValue","parametersStop"),a.state.parametersStop();if('"'===b)return a.setTransition("parameterValue","stringStart"),a.state.stringStart();throw new Error('Invalid lexeme "'+b+'"')},a}()})}.call(this),function(){c("rs-state-string-start",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){return"\\"===b?a.state.stringEscape():'"'===b?(a.setTransition("stringStart","parameterValue"),a.state.parameterValue()):(a.setTransition("stringStart","stringStart"),this)},a}()})}.call(this),function(){c("rs-state-string-escape",[],function(){var a;return a=function(){function a(){}return a.prototype.process=function(a,b){return'"'===b?(a.setTransition("stringEscape","stringStart"),a.state.stringStart()):this},a}()})}.call(this),function(){c("rs-string-parser",["rs-state-transition","rs-state-new","rs-state-word","rs-state-parameters-start","rs-state-parameters-stop","rs-state-parameter-new","rs-state-parameter-value","rs-state-string-start","rs-state-string-escape"],function(a,b,c,d,e,f,g,h,i){var j;return j=function(){function j(){this.transition=new a,this.state={"new":function(){return new b},word:function(){return new c},parametersStart:function(){return new d},parametersStop:function(){return new e},parameterNew:function(){return new f},parameterValue:function(){return new g},stringStart:function(){return new h},stringEscape:function(){return new i}}}var k,l;return k=new b,l="",j.prototype.parse=function(a){var b,c,d;if(this.data=[],this.word="",this.parameters=[],this.parameter="",this.stringValue="",""===a.trim())return[];for(c=0,d=a.length;d>c;c++)b=a[c],l=b,k=k.process(this,b);return l="\n",k=k.process(this,l),this.data},j.prototype.setTransition=function(a,b){return this.transition.setTransition(a,b,this,l)},j}()})}.call(this),function(){c("rs-rule-parser",["rs-string-parser"],function(a){var b;return b=function(){function b(){}var c;return b.prototype.parse=function(a){var b;try{return JSON.parse(a)}catch(d){return b=d,c(a)}},c=function(b){var c,d,e,f,g,h,i;for(d=new a,c=d.parse(b),f={},h=0,i=c.length;i>h;h++)e=c[h],g=!0,"parameters"in e&&(g=e.parameters,1===g.length&&"false"===g[0]&&(g=!1)),f[e.word]=g;return f},b}()})}.call(this),function(){c("rs-widget-rule-reader",["rs-rule-parser"],function(a){return function(b){var c,d;return c=[],d=new a,b.data("_rule")&&(c=d.parse(b.data("_rule"))),b.attr("required")&&(c.notBlank=!0),"email"===b.attr("type")&&(c.email=!0),c}})}.call(this),function(){c("rs-widget-type-reader",["rs-string-parser"],function(a){return function(b){var c,d;if(b.data("_type")){if(c=(new a).parse(b.data("_type")),1!==c.length)throw new Error("Invalid widget type condition");return d={type:c[0].word},"parameters"in c[0]&&(d.parameters=c[0].parameters),d}return"number"===b.attr("type")?{type:"number"}:{type:"string"}}})}.call(this),function(){c("rs-error-parser",["rs-string-parser"],function(a){var b;return b=function(){function b(){}var c;return b.prototype.parse=function(a){var b;try{return JSON.parse(a)}catch(d){return b=d,c(a)}},c=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!b)return{};for(h=new a,c=h.parse(b),i={},l=0,n=c.length;n>l;l++){if(j=c[l],!("parameters"in j))throw new Error("Invalid error message string");for(e={},p=j.parameters,m=0,o=p.length;o>m;m++)g=p[m],-1!==g.indexOf(":")?(k="{"+g+"}",d=JSON.parse(k),f=Object.keys(d)[0],e[f]=d[f]):e={global:g};i[j.word]=e}return i},b}()})}.call(this),function(){c("rs-get-form-value",[],function(){var a;return a=function(){function a(a,b){this.$el=a,this.$parent=b}var b;return a.prototype.getValue=function(){return"INPUT"===this.$el.prop("tagName")?"radio"===this.$el.attr("type")?b(this.$el,this.$parent):"checkbox"===this.$el.attr("type")?this.$el.is(":checked"):this.$el.val():"SELECT"===this.$el.prop("tagName")?this.$el.val():this.$el.text()},b=function(a,b){var c;return c=$('input[type="radio"]',b).filter('[name="'+a.attr("name")+'"]:checked'),c.length?c.val():""},a}()})}.call(this),function(){c("rs-cast-error",[],function(){var a;return a=function(){function a(a,b){this.type=a,this.value=b}return a}()})}.call(this),function(){c("rs-widget",["rs-validator-settings","rs-widget-rule-reader","rs-widget-type-reader","rs-error-parser","rs-get-form-value","rs-cast-error"],function(a,b,c,d,e,f){var g;return g=function(){function g(e,f,g){this.$el=e,this.$parent=g,this.name=this._findName(),this.controller=f,this.config=new a,this.validators=this.controller.get(b(this.$el)),this.typeCaster=this.controller.getTypeCaster(c(this.$el)),this.errorMessages=(new d).parse(this.$el.data("_error")),this.$errorPlace=$('[data-_place="'+this.name+'"]',this.$parent),this._isValid=null,this.handlers={}}return g.prototype.init=function(){if(this.$el.off("RsValidator"),"radio"===this.$el.attr("type")&&$('input[type="radio"]',this.$parent).filter('[name="'+this.$el.attr("name")+'"]').off("RsValidator"),this.config.isLiveValidate()){if("checkbox"!==this.$el.attr("type")&&"radio"!==this.$el.attr("type")&&"SELECT"!==this.$el.prop("tagName"))return this.$el.on("keyup.RsValidator, change.RsValidator",function(a){return function(){return a.process(),!0}}(this));if("checkbox"===this.$el.attr("type")||"SELECT"===this.$el.prop("tagName"))return this.$el.on("click.RsValidator",function(a){return function(){return a.process(),!0}}(this));if("radio"===this.$el.attr("type"))return $('input[type="radio"]',this.$parent).filter('[name="'+this.$el.attr("name")+'"]').on("click.RsValidator",function(a){return function(){return a.process(),!0}}(this))}},g.prototype.addRule=function(a,b){var c;return c={},c[a]=b,this.validators=$.extend(this.validators,this.controller.get(c))},g.prototype.addRules=function(a){return this.validators=$.extend(this.validators,this.controller.get(a))},g.prototype.setConfig=function(a){return this.config.set(a),this.init()},g.prototype.trigger=function(a){var b,c,d,e,f;if(a in this.handlers){for(e=this.handlers[a],f=[],c=0,d=e.length;d>c;c++)b=e[c],f.push(b.apply(this.controller.validator,[this]));return f}},g.prototype.on=function(a,b){return a in this.handlers||(this.handlers[a]=[]),this.handlers[a].push(b)},g.prototype.setLocale=function(a){return this.config.settings.locale=a},g.prototype.getValue=function(){var a;return a=new e(this.$el,this.$parent),this.typeCaster.func.apply(this.controller,[a.getValue(),this.typeCaster.body])},g.prototype.getName=function(){return this.name},g.prototype.validate=function(){var a,b,c,d,e;if(a=[],d=this.getValue(),d instanceof f)return["type"];e=this.validators;for(b in e)c=e[b],c.func(d,c.body)||a.push(b);return a},g.prototype.isValid=function(){return this.validate().length>0},g.prototype.getErrorText=function(a,b){return null==b&&(b=""),""===b&&(b=this.config.getLocale()),a in this.errorMessages?b in this.errorMessages[a]?this.errorMessages[a][b]:"global"in this.errorMessages[a]?this.errorMessages[a].global:"":""},g.prototype.addErrorText=function(a,b,c){return null==c&&(c=""),""===c&&(c=this.config.getLocale()),a in this.errorMessages||(this.errorMessages[a]={}),this.errorMessages[a][c]=b},g.prototype.renderError=function(a){var b,c,d,e,f;if(this.$errorPlace.length){for(this.$errorPlace.show(),c=[],e=0,f=a.length;f>e;e++)b=a[e],d=this.getErrorText(b),""!==d&&c.push(d);return this.$errorPlace.text(c.join(", "))}},g.prototype.hideError=function(){return this.$errorPlace.length?(this.$errorPlace.hide(),this.$errorPlace.text("")):void 0},g.prototype.process=function(){var a;return a=this.validate(),null===this._isValid&&(this.trigger("change"),this._isValid=0===a.length),0===a.length?(this.trigger("valid"),this._isValid===!1&&(this._isValid=!0,this.trigger("change")),this.config.valid.apply(this.controller.validator,[this]),this.config.isSetStatusClass()&&(this.$el.removeClass(this.config.getErrorClass()),this.$el.addClass(this.config.getSuccessClass())),this.config.useDefaultErrorHandler()&&this.hideError(),!0):(this.trigger("error"),this._isValid===!0&&(this._isValid=!1,this.trigger("change")),this.config.error.apply(this.controller.validator,[this,a]),this.config.isSetStatusClass()&&(this.$el.removeClass(this.config.getSuccessClass()),this.$el.addClass(this.config.getErrorClass())),this.config.useDefaultErrorHandler()&&this.renderError(a),!1)},g.prototype._findName=function(){if(this.$el.data("_name"))return this.$el.data("_name");if(this.$el.attr("name"))return this.$el.attr("name");if(this.$el.attr("id"))return this.$el.attr("id");throw new Error("Invalid widget name")},g}()})}.call(this),function(){c("rs-widget-collection",["rs-validator-settings"],function(a){var b;return b=function(){function b(b){this.config=new a,this.validator=b,this.widgets=[]}return b.prototype.setConfig=function(a){var b,c,d,e;this.config.set(a),"onError"in a&&delete a.onError,"onValid"in a&&delete a.onValid,"onChange"in a&&delete a.onChange,e=this.widgets;for(c=0,d=e.length;d>c;c++)b=e[c],b.setConfig(a);return this},b.prototype.getConfig=function(){return this.config},b.prototype.setLocale=function(a){var b,c,d,e;for(this.config.settings.locale=a,e=this.widgets,c=0,d=e.length;d>c;c++)b=e[c],b.setLocale(a);return this},b.prototype.getSingleValue=function(){var a,b,c,d,e;if(a=[],1===this.widgets.length)return this.widgets[0].getValue();for(e=this.widgets,c=0,d=e.length;d>c;c++)b=e[c],a.push(b.getValue());return a},b.prototype.getValue=function(){var a,b,c,d,e;for(a={},e=this.widgets,c=0,d=e.length;d>c;c++)b=e[c],a[b.getName()]=b.getValue();return a},b.prototype.add=function(a){var b;return this.widgets.push(a),b=this,a.on("change",function(a){return b.config.change.apply(b.validator,[a]),b.isValid()?b.config.valid.apply(b.validator,[a]):b.config.error.apply(b.validator,[a,[]])}),this},b.prototype.validate=function(){var a,b,c,d,e,f;for(b={},f=this.widgets,d=0,e=f.length;e>d;d++)c=f[d],a=c.validate(),a.length&&(b[c.getName()]=c.validate());return b},b.prototype.isValid=function(){return 0===Object.keys(this.validate()).length},b.prototype.process=function(){var a,b,c,d,e;for(a=!0,e=this.widgets,c=0,d=e.length;d>c;c++)b=e[c],b.process()||(a=!1);return a},b.prototype.addErrorText=function(a,b,c){var d,e,f,g;for(null==c&&(c=""),g=this.widgets,e=0,f=g.length;f>e;e++)d=g[e],d.addErrorText(a,b,c);return this},b.prototype.renderError=function(a){var b,c,d,e;for(e=this.widgets,c=0,d=e.length;d>c;c++)b=e[c],b._isValid=!1,b.renderError(a);return this},b.prototype.addRule=function(a,b){var c,d,e,f;for(null==b&&(b=!0),f=this.widgets,d=0,e=f.length;e>d;d++)c=f[d],c.addRule(a,b);return this},b.prototype.addRules=function(a){var b,c,d,e;for(e=this.widgets,c=0,d=e.length;d>c;c++)b=e[c],b.addRules(a);return this},b}()})}.call(this),function(){c("rs-namespace",[],function(){var a;return a=function(){function a(a){this.name=a,this.widgets={}}return a.prototype.add=function(a){if(a.getName()in this.widgets)throw new Error('Widget whit this name and namespace already added: "'+this.name+"."+a.getName()+'"');return this.widgets[a.getName()]=a},a.prototype.has=function(a){return a in this.widgets},a.prototype.get=function(a){return this.widgets[a]},a}()})}.call(this),function(){c("rs-form",[],function(){var a;return a=function(){function a(a,d){var e,f,g;b=a,b.attr("novalidate","novalidate"),f=d,this.name=c(),e=$('[data-_rule], [data-_namespace], [data-_error], [data-_name], [data-_validate="true"]',b),g=this,e.each(function(){return"FORM"!==$(this).prop("tagName")?f.processWidget($(this),g.name):void 0}),(d.getConfig().isAutoValidate()||"auto-validate"===b.data("_role"))&&b.on("submit.RsValidator",function(){var a;return a=f.get(g.name),a.process()?void 0:!1})}var b,c;return b=null,a.prototype.getName=function(){return this.name},c=function(){if(b.data("_namespace"))return b.data("_namespace");if(b.attr("name"))return b.attr("name");if(b.attr("id"))return b.attr("id");throw new Error("Invalid form definition")},a}()})}.call(this),function(){c("rs-selector-parser",[],function(){var a;return a=function(){function a(){}return a.prototype.parse=function(a){var b,c,d,e,f,g,h;for(f=a.split(","),c=[],g=0,h=f.length;h>g;g++)e=f[g],""!==e.trim()&&(b=e.split("."),""!==b[0].trim()&&(d={namespace:b[0].trim()},2===b.length&&""!==b[1].trim()&&(d.widget=b[1].trim()),c.push(d)));return c},a}()})}.call(this),function(){c("rs-email-rule",[],function(){return function(a,b){var c,d,e,f,g;if(null==b&&(b=!0),!b)return!0;if(c=/^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i,!Array.isArray(a))return 0===a.length?!0:(e=a.trim(),c.test(e));for(f=0,g=a.length;g>f;f++)if(d=a[f],e=d.trim(),!e.match(c))return!1;return!0}})}.call(this),function(){c("rs-notBlank-rule",[],function(){return function(a,b){var c,d,e;if(null==b&&(b=!0),!b)return!0;if(!Array.isArray(a))return""!==a;if(0===a.length)return!1;for(d=0,e=a.length;e>d;d++)if(c=a[d],""===c)return!1;return!0}})}.call(this),function(){c("rs-range-rule",[],function(){return function(a,b){var c,d,e,f,g,h;if(d=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY,Array.isArray(b)?b.length>0&&(d=parseFloat(b[0]),b.length>1&&(c=parseFloat(b[1]))):("min"in b&&(d=parseFloat(b.min)),"max"in b&&(c=parseFloat(b.max))),isNaN(d)||isNaN(c))throw new Error("Invalid range parameters");if(d>c)throw new Error("Invalid range parameters");for(f=a,Array.isArray(f)||(f=[f]),g=0,h=f.length;h>g;g++)if(e=f[g],!isNaN(e)&&""!==e&&(d>e||e>c))return!1;return!0}})}.call(this),function(){c("rs-string-validate",[],function(){return function(a){return a.trim()}})}.call(this),function(){c("rs-array-validate",["rs-cast-error"],function(a){return function(b,c){var d,e,f,g,h,i,j,k;if(null==c&&(c=[]),i=[],g=[],Array.isArray(b))i=b;else{if(""===b||null===b)return[];e=",",2===c.length&&(e=c[1]),i=b.split(e)}if(f=this.types.string,c.length>0){if(!(c[0]in this.types))throw new Error('Invalid array type argument "'+c[0]+'"');f=this.types[c[0]]}for(j=0,k=i.length;k>j;j++){if(h=i[j],d=f.apply(this,[h.trim()]),d instanceof a)return new a("array",b);g.push(d)}return g}})}.call(this),function(){c("rs-int-validate",["rs-cast-error"],function(a){return function(b){var c,d;return d=b.trim(),""===d?"":(c=parseInt(d),isNaN(c)?new a("int",b):c.toString()!==d?new a("int",b):c)}})}.call(this),function(){c("rs-equal-rule",[],function(){return function(a,b){var c,d,e,f,g,h;if(d=null,Array.isArray(b)){if(0===b.length)throw new Error("Invalid equal condition");d=b[0]}else d=b;for(f=a,Array.isArray(f)||(f=[f]),c=function(a,b,c){return"string"===c?a===b:"boolean"===c?"true"===b?a===!0:a===!1:"number"===c?a===parseFloat(b):!1},g=0,h=f.length;h>g;g++)if(e=f[g],!c(e,d,typeof e))return!1;return!0}})}.call(this),function(){c("rs-bool-validate",["rs-cast-error"],function(){return function(a){var b,c,d,e;for(c=a.toString().trim(),Array.isArray(c)||(c=[c]),d=0,e=c.length;e>d;d++)if(b=c[d],"1"!==b&&"on"!==b&&"true"!==b)return!1;return!0}})}.call(this),function(){c("rs-notEqual-rule",["rs-equal-rule"],function(a){return function(b,c){return!a(b,c)}})}.call(this),function(){c("rs-validate-controller",["rs-email-rule","rs-notBlank-rule","rs-range-rule","rs-string-validate","rs-array-validate","rs-int-validate","rs-equal-rule","rs-bool-validate","rs-notEqual-rule"],function(a,b,c,d,e,f,g,h,i){var j;return j=function(){function j(j){this.validators={},this.types={},this.validator=j,this.registerValidator("notBlank",b),this.registerValidator("email",a),this.registerValidator("range",c),this.registerValidator("equal",g),this.registerValidator("notEqual",i),this.registerTypeCaster("string",d),this.registerTypeCaster("array",e),this.registerTypeCaster("int",f),this.registerTypeCaster("bool",h)}return j.prototype.registerValidator=function(a,b){return this.validators[a]=b},j.prototype.registerTypeCaster=function(a,b){return this.types[a]=b},j.prototype.get=function(a){var b,c,d;c={};for(d in a){if(b=a[d],!(d in this.validators))throw new Error("Invalid validator name "+d);c[d]={func:this.validators[d],body:b}}return c},j.prototype.getTypeCaster=function(a){var b;if(!(a.type in this.types))throw new Error("Invalid value type "+a);return b={func:this.types[a.type],body:null},"parameters"in a&&(b.body=a.parameters),b},j}()})}.call(this),function(){c("rs-validator",["rs-validator-settings","rs-widget","rs-widget-collection","rs-namespace","rs-form","rs-selector-parser","rs-validate-controller"],function(a,b,c,d,e,f,g){var h;return h=function(){function h(){this.config=new a,this.selectorParser=new f,this.validateController=new g(this),this.namespaces={},this.widgets=[]}return h.prototype.getValidateController=function(){return this.validateController},h.prototype.setConfig=function(a){var b,c,d,e,f;for(this.config.set(a),e=this.widgets,f=[],c=0,d=e.length;d>c;c++)b=e[c],f.push(b.setConfig(a));return f},h.prototype.getConfig=function(){return this.config},h.prototype.setLocale=function(a){var b,c,d,e,f;for(this.config.settings.locale=a,e=this.widgets,f=[],c=0,d=e.length;d>c;c++)b=e[c],f.push(b.setLocale(a));return f},h.prototype.get=function(a){var b,d,e,f,g,h,i,j,k,l,m;for(d=this.selectorParser.parse(a),e=new c(this),h=0,j=d.length;j>h;h++)if(f=d[h],f.namespace in this.namespaces)if("widget"in f)this.namespaces[f.namespace].has(f.widget)&&e.add(this.namespaces[f.namespace].get(f.widget));else{l=this.namespaces[f.namespace].widgets;for(b in l)g=l[b],e.add(g)}else if(!("widget"in f))for(m=this.getWidgetsByName(f.namespace),i=0,k=m.length;k>i;i++)g=m[i],e.add(g);return e},h.prototype.getWidgetsByName=function(a){var b,c,d,e,f;for(b=[],f=this.widgets,d=0,e=f.length;e>d;d++)c=f[d],c.getName()===a&&b.push(c);return b},h.prototype.init=function(a){var b,c,d;return null==a&&(a=null),null===a&&(a=$("body")),this.$parent=a,this.namespaces={},this.widgets=[],c=$('[data-_rule], [data-_namespace], [data-_error], [data-_name], [data-_validate="true"], [data-_type]',a).filter(function(){return 0===$(this).closest("form").length}),b=$('form[data-_role], form[data-_namespace], form[data-_name], form[data-_validate="true"]',a),d=this,c.each(function(){return"FORM"!==$(this).prop("tagName")?d.processWidget($(this)):void 0}),b.each(function(){return d.processForm($(this))})},h.prototype.processWidget=function(a,c){var d,e,f,g,h,i,j;for(null==c&&(c=""),e=[],""!==c&&(e=[c]),a.data("_namespace")&&(e=a.data("_namespace"),e=e.split(","),""!==c&&e.push(c)),(0===e.length||this.config.useGlobalNamespace())&&e.push("_"),h=new b(a,this.validateController,this.$parent),h.setConfig(this.config.settings),f="",i=0,j=e.length;j>i;i++)d=e[i],""!==d.trim()&&(g=this.getNamespace(d.trim()),g.add(h),f+=d.trim()+".");return this.widgets.push(h)},h.prototype.getNamespace=function(a){var b;return a in this.namespaces||(b=new d(a),this.namespaces[a]=b),this.namespaces[a]},h.prototype.processForm=function(a){return new e(a,this)},h}()})}.call(this),b(["rs-validator"]),b("rs-validator")});