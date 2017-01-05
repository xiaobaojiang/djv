!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.djv=t():e.djv=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){function n(){return this instanceof n?void(this.resolved={}):new n}var i=r(2),a=r(3);n.prototype={validate:function(e,t){return this.resolve(e).fn(t)},addSchema:function(e,t){"object"==typeof e&&(t=e);var r={schema:t,fn:i(this,t).toFunction()};return"string"==typeof e&&(r.name=e,this.resolved[e]=r),r},removeSchema:function(e){e?delete this.resolved[e]:this.resolved={}},resolve:function(e){return"object"!=typeof e&&this.resolved[e]?this.resolved[e]:this.addSchema(e,a.resolve(e,Object.assign([],{current:[]},this.resolved)))},"export":function(e){if(e){var t=this.resolve(e);t={name:e,schema:t.schema,fn:t.fn.toString()}}else{t={};for(var e in this.resolved)t[e]={name:e,schema:this.resolved[e].schema,fn:this.resolved[e].fn.toString()}}return JSON.stringify(t)},"import":function(e){var t=JSON.parse(e);if(t.name&&t.fn&&t.schema){var r={};r[t.name]=t}else r=t;for(var n in r){var t={name:r[n].name,schema:r[n].schema,fn:r[n].fn};t.fn=new Function("schema","return "+t.fn)(t.schema),this.resolved[t.name]=t}}},e.exports=n},function(e,t,r){var n=r(3);e.exports=function i(e,t,a){function o(e){var t,r=Array.prototype.slice.call(arguments,1);return o.lines.push(e.replace(/%i/g,function(e,t){return"i"}).replace(/\$(\d)/g,function(e,t){return""+r[t-1]}).replace(/(%[sd])/g,function(e){return r.length&&(t=r.shift()),""+t})),o.push}return a=a||Object.assign([t],{current:[0]},e.resolved),Object.assign(o,n,{data:["data"],schema:["schema"],context:Object.assign([],n,{schema:t}),lines:[],error:function(e){return'return "'+e+": "+o.data+'"'},resolve:function(t){var r=a.length,s=n.resolve(t,a);return r=r!==a.length,"object"==typeof s&&(s=o.context.push(i(e,s,a).toFunction()),r&&a.splice(a.current.pop(),a.length)),{toString:function(){return"f"+s}}},toFunction:function(){var e=o.cachedIndex?"var i"+new Array(o.cachedIndex).join("_").split("_").map(function(e,t){return t+1}).join(",i")+";":"",r=o.context.length?"var f"+new Array(o.context.length).join("_").split("_").map(function(e,t){return t+1+"="+o.context[t].toString()}).join(",f")+";":"",n='"use strict";'+r+e+o.lines.join("\n"),i=new Function("schema","return function f0(data){"+n+"}")(t);return i},cachedIndex:0,cached:[],cache:function(e){var t=o.cached[o.cached.length-1];return t[e]?"i"+t[e]:(t[e]=++o.cachedIndex,"(i"+t[e]+" = "+e+")")},visit:function(e){o.cached.push({}),a.push(e),["required","property","type","$ref","not","anyOf","oneOf","allOf","dependencies","properties","patternProperties","items"].forEach(function(t){r(4)("./"+t)(e,o)}),o.cached.pop()},push:o}),o.data.toString=o.schema.toString=function(){return this.join(".").replace(/\.\[/g,"[")},o.visit(t),o}},function(e,t){function r(e,t){if("#"===e)return 0;if("string"!=typeof e)return e;var r=e.split(/#\/?/),n=r[0]||"#",i=r[1],a=i&&i.split("/");if("#"===n)var o=t[t.current[t.current.length-1]];else t.hasOwnProperty(n)||(n=t.slice(t.current[t.current.length-1]+1).map(function(e){return e.id}).join("")+n),o=t[n].schema;for(t.current.push(t.length),t.push(o);a&&a.length>0;){var s=decodeURIComponent(a[0].replace(/~1/g,"/").replace(/~0/g,"~"));if(!o.hasOwnProperty(s))throw new Error("Schema not found");o=o[s],t.push(o),a.shift()}return o}var n={"null":"%s !== null",string:'typeof %s !== "string"',"boolean":'typeof %s !== "boolean"',number:'typeof %s !== "number" || %s !== %s',integer:'typeof %s !== "number" || %s % 1 !== 0',object:'!%s || typeof %s !== "object" || Array.isArray(%s)',array:"!Array.isArray(%s)",date:"!(%s instanceof Date)"},i={alpha:"!/^[a-zA-Z]+$/.test(%s)",alphanumeric:"!/^[a-zA-Z0-9]+$/.test(%s)",identifier:"!/^[-_a-zA-Z0-9]+$/.test(%s)",hexadecimal:"!/^[a-fA-F0-9]+$/.test(%s)",numeric:"!/^[0-9]+$/.test(%s)","date-time":"isNaN(Date.parse(%s)) || ~%s.indexOf('/')",uppercase:"%s !== %s.toUpperCase()",lowercase:"%s !== %s.toLowerCase()",hostname:"%s.length >= 256 || !/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])(\\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9]))*$/.test(%s)",uri:"!/[-a-zA-Z0-9@:%_\\+.~#?&//=]{2,256}\\.[a-z]{2,4}\\b(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?/.test(%s)",email:"!/^[^@]+@[^@]+\\.[^@]+$/.test(%s)",ipv4:'!/^(\\d?\\d?\\d){0,255}\\.(\\d?\\d?\\d){0,255}\\.(\\d?\\d?\\d){0,255}\\.(\\d?\\d?\\d){0,255}$/.test($1) || $1.split(".")[3] > 255',ipv6:"!/^((?=.*::)(?!.*::.+::)(::)?([\\dA-F]{1,4}:(:|\\b)|){5}|([\\dA-F]{1,4}:){6})((([\\dA-F]{1,4}((?!\\3)::|:\\b|$))|(?!\\2\\3)){2}|(((2[0-4]|1\\d|[1-9])?\\d|25[0-5])\\.?\\b){4})$/.test(%s)"},a={readOnly:"false",minimum:function(e){return"%s <"+(e.exclusiveMinimum?"=":"")+" "+e.minimum},maximum:function(e){return"%s >"+(e.exclusiveMaximum?"=":"")+" "+e.maximum},multipleOf:'($1/$2) % 1 !== 0 && typeof $1 === "number"',pattern:function(e){var t,r;"string"==typeof e.pattern?t=e.pattern:(t=e.pattern[0],r=e.pattern[1]);var n=new RegExp(t,r);return'typeof ($1) === "string" && !'+n+".test($1)"},minLength:'typeof $1 === "string" && function ucs2decodeLength(d){for(var c=[],b=0,f=d.length,a,e;b<f;)a=d.charCodeAt(b++),55296<=a&&56319>=a&&b<f?(e=d.charCodeAt(b++),56320==(e&64512)?c.push(((a&1023)<<10)+(e&1023)+65536):(c.push(a),b--)):c.push(a);return c.length}($1) < $2',maxLength:'typeof $1 === "string" && function ucs2decodeLength(d){for(var c=[],b=0,f=d.length,a,e;b<f;)a=d.charCodeAt(b++),55296<=a&&56319>=a&&b<f?(e=d.charCodeAt(b++),56320==(e&64512)?c.push(((a&1023)<<10)+(e&1023)+65536):(c.push(a),b--)):c.push(a);return c.length}($1) > $2',minItems:"$1.length < $2 && Array.isArray($1)",maxItems:"$1.length > $2 && Array.isArray($1)",uniqueItems:function(e,t){return e.uniqueItems?(t(t.cache("{}")),"Array.isArray($1) && $1.some(function(item, key) {	            key = JSON.stringify(item);	            if("+t.cache("{}")+".hasOwnProperty(key))	            return true;	            "+t.cache("{}")+"[key] = true;	        })"):"true"},minProperties:'typeof $1 === "object" && Object.keys($1).length < $2',maxProperties:'typeof $1 === "object" && Object.keys($1).length > $2',constant:function(e,t){return JSON.stringify(e)==JSON.stringify(t)},"enum":function(e,t){return e["enum"].map(function(e){var r="$1";switch(typeof e){case"object":e=JSON.stringify(e),r=t.cache("JSON.stringify($1)");case"string":e="'"+e+"'"}return r+" !== "+e}).join(" && ")}},o=["type","not","anyOf","allOf","oneOf","$ref","$schema","id","exclusiveMaximum","exclusiveMininum","properties","patternProperties","additionalProperties","items","additionalItems","required","default","title","description","definitions","dependencies"];e.exports={fieldType:n,fieldFormat:i,fieldValidate:a,keywords:o,resolve:r}},function(e,t,r){function n(e){return r(i(e))}function i(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./$ref":5,"./$ref.js":5,"./allOf":6,"./allOf.js":6,"./anyOf":7,"./anyOf.js":7,"./dependencies":8,"./dependencies.js":8,"./items":9,"./items.js":9,"./not":10,"./not.js":10,"./oneOf":11,"./oneOf.js":11,"./patternProperties":12,"./patternProperties.js":12,"./properties":13,"./properties.js":13,"./property":14,"./property.js":14,"./required":15,"./required.js":15,"./type":16,"./type.js":16};n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=4},function(e,t){e.exports=function(e,t){e.hasOwnProperty("$ref")&&t("if ("+t.resolve(e.$ref)+"(%s))",t.data)(t.error("$ref"))}},function(e,t){e.exports=function(e,t){e.hasOwnProperty("allOf")&&t("if (")(e.allOf.map(function(e){return t.resolve(e)}).join("(%s) || "),t.data)("(%s))",t.data)(t.error("allOf"))}},function(e,t){e.exports=function(e,t){e.hasOwnProperty("anyOf")&&t("if ("+e.anyOf.map(function(e){return t.resolve(e)+"(%s)"}).join(" && ")+")",t.data)(t.error("anyOf"))}},function(e,t){e.exports=function(e,t){if(e.hasOwnProperty("dependencies"))for(var r in e.dependencies)t('if (%s.hasOwnProperty("%s")) {',t.data,r),Array.isArray(e.dependencies[r])||"string"==typeof e.dependencies[r]?[].concat(e.dependencies[r]).forEach(function(e){t('if (!%s.hasOwnProperty("%s"))',t.data,e)(t.error("dependencies"))}):"object"==typeof e.dependencies[r]&&t.visit(e.dependencies[r]),t("}")}},function(e,t){e.exports=function(e,t){e.items&&(Array.isArray(e.items)?(e.additionalItems===!1&&t("if (%s.length > %s)",t.data,e.items.length)(t.error("additionalItems")),e.items.forEach(function(e,r){t.data.push("["+r+"]"),t.visit(e),t.data.pop()}),"object"==typeof e.additionalItems&&(t("for ($1; $2 < $3.length; $2++) {",t.cache(e.items.length),t.cache(e.items.length),t.data),t.data.push("["+t.cache(e.items.length)+"]"),t.visit(e.additionalItems),t.data.pop(),t("}"))):(t("for ($1; $2 < $3.length; $2++) {",t.cache("0"),t.cache("0"),t.data),t.data.push("["+t.cache("0")+"]"),t.visit(e.items),t.data.pop(),t("}")))}},function(e,t){e.exports=function(e,t){e.hasOwnProperty("not")&&t("if (!"+t.resolve(e.not)+"(%s))",t.data)(t.error("not"))}},function(e,t){e.exports=function(e,t){if(e.hasOwnProperty("oneOf")){var r=e.oneOf.map(function(e){return t.resolve(e)}),n=t.cache("["+r+"]"),i=t.cache("["+r+"]"),a=t.cache(i+".length - 1"),o=t.cache(i+".length - 1"),s=t.cache("0"),c=t.cache("0");t("for ($1, $3, $5; $4 >= 0 && $4 < $2.length; $4--) {",n,i,a,o,s)("if(!%s[%s](%s))",i,o,t.data)("%s++",c)("}")("if (%s !== 1)",c)(t.error("oneOf"))}}},function(e,t){e.exports=function(e,t){function r(){e.additionalProperties===!1?t(t.error("additionalProperties")):e.additionalProperties&&(t.data.push("["+a+"]"),t.visit(e.additionalProperties),t.data.pop())}var n=e.hasOwnProperty("additionalProperties")&&e.additionalProperties!==!0,i=e.hasOwnProperty("patternProperties");if(n||i){t("if(!Array.isArray(%s)) {",t.data),t(t.cache("null"));var a=t.cache("null");if(t("for (%s in %s) {",a,t.data),n&&i&&t(t.cache("false")),i)for(var o in e.patternProperties){var s=e.patternProperties[o];t("if (%s.test(%s)) {",new RegExp(o),a),n&&t(t.cache("false")+" = true;"),t.data.push("["+a+"]"),t.visit(s),t.data.pop(),t("}"),e.properties?t("if ("+(n?t.cache("false")+" || ":"")+" %s.properties.hasOwnProperty("+a+")) continue;",t.schema):n&&t("if ("+t.cache("false")+") continue;"),r()}else e.properties&&t("if(%s.properties.hasOwnProperty("+a+")) continue;",t.schema),r();t("}}")}}},function(e,t){e.exports=function(e,t){if(e.hasOwnProperty("properties"))for(var r in e.properties){var n=e.properties[r];if(Object.keys(n).length){var i=!e.required||!~e.required.indexOf(r);i&&t('if (%s.hasOwnProperty("'+r+'")) {',t.data),t.data.push("['"+r+"']"),t.visit(n),t.data.pop(),i&&t("}")}}}},function(e,t,r){var n=r(3).keywords;e.exports=function(e,t){for(var r in e)if(!~n.indexOf(r))if("format"===r)t.fieldFormat[e[r]]&&t("if ("+t.fieldFormat[e[r]]+")",t.data)(t.error("format"));else{var i=t.fieldValidate[r];if(!i)return;"function"==typeof i&&(i=i(e,t)),t("if ("+i+")",t.data,e[r])(t.error(r))}}},function(e,t){e.exports=function(e,t){Array.isArray(e.required)&&e.required.forEach(function(e){t('if (!%s.hasOwnProperty("%s"))',t.data,e)(t.error("required"))})}},function(e,t){e.exports=function(e,t){e.hasOwnProperty("type")&&("string"==typeof e.type?t("if ("+t.fieldType[e.type]+")",t.data)(t.error("type",e.type)):Array.isArray(e.type)&&t("if (("+e.type.map(function(e){return t.fieldType[e]}).join(") && (")+"))",t.data)(t.error("type",e.type)))}}])});