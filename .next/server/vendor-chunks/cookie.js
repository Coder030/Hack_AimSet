"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cookie";
exports.ids = ["vendor-chunks/cookie"];
exports.modules = {

/***/ "(rsc)/./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*!\r\n * cookie\r\n * Copyright(c) 2012-2014 Roman Shtylman\r\n * Copyright(c) 2015 Douglas Christopher Wilson\r\n * MIT Licensed\r\n */\r\n\r\n\r\n\r\n/**\r\n * Module exports.\r\n * @public\r\n */\r\n\r\nexports.parse = parse;\r\nexports.serialize = serialize;\r\n\r\n/**\r\n * Module variables.\r\n * @private\r\n */\r\n\r\nvar __toString = Object.prototype.toString\r\n\r\n/**\r\n * RegExp to match field-content in RFC 7230 sec 3.2\r\n *\r\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\r\n * field-vchar   = VCHAR / obs-text\r\n * obs-text      = %x80-FF\r\n */\r\n\r\nvar fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\r\n\r\n/**\r\n * Parse a cookie header.\r\n *\r\n * Parse the given cookie header string into an object\r\n * The object has the various cookies as keys(names) => values\r\n *\r\n * @param {string} str\r\n * @param {object} [options]\r\n * @return {object}\r\n * @public\r\n */\r\n\r\nfunction parse(str, options) {\r\n  if (typeof str !== 'string') {\r\n    throw new TypeError('argument str must be a string');\r\n  }\r\n\r\n  var obj = {}\r\n  var opt = options || {};\r\n  var dec = opt.decode || decode;\r\n\r\n  var index = 0\r\n  while (index < str.length) {\r\n    var eqIdx = str.indexOf('=', index)\r\n\r\n    // no more cookie pairs\r\n    if (eqIdx === -1) {\r\n      break\r\n    }\r\n\r\n    var endIdx = str.indexOf(';', index)\r\n\r\n    if (endIdx === -1) {\r\n      endIdx = str.length\r\n    } else if (endIdx < eqIdx) {\r\n      // backtrack on prior semicolon\r\n      index = str.lastIndexOf(';', eqIdx - 1) + 1\r\n      continue\r\n    }\r\n\r\n    var key = str.slice(index, eqIdx).trim()\r\n\r\n    // only assign once\r\n    if (undefined === obj[key]) {\r\n      var val = str.slice(eqIdx + 1, endIdx).trim()\r\n\r\n      // quoted values\r\n      if (val.charCodeAt(0) === 0x22) {\r\n        val = val.slice(1, -1)\r\n      }\r\n\r\n      obj[key] = tryDecode(val, dec);\r\n    }\r\n\r\n    index = endIdx + 1\r\n  }\r\n\r\n  return obj;\r\n}\r\n\r\n/**\r\n * Serialize data into a cookie header.\r\n *\r\n * Serialize the a name value pair into a cookie string suitable for\r\n * http headers. An optional options object specified cookie parameters.\r\n *\r\n * serialize('foo', 'bar', { httpOnly: true })\r\n *   => \"foo=bar; httpOnly\"\r\n *\r\n * @param {string} name\r\n * @param {string} val\r\n * @param {object} [options]\r\n * @return {string}\r\n * @public\r\n */\r\n\r\nfunction serialize(name, val, options) {\r\n  var opt = options || {};\r\n  var enc = opt.encode || encode;\r\n\r\n  if (typeof enc !== 'function') {\r\n    throw new TypeError('option encode is invalid');\r\n  }\r\n\r\n  if (!fieldContentRegExp.test(name)) {\r\n    throw new TypeError('argument name is invalid');\r\n  }\r\n\r\n  var value = enc(val);\r\n\r\n  if (value && !fieldContentRegExp.test(value)) {\r\n    throw new TypeError('argument val is invalid');\r\n  }\r\n\r\n  var str = name + '=' + value;\r\n\r\n  if (null != opt.maxAge) {\r\n    var maxAge = opt.maxAge - 0;\r\n\r\n    if (isNaN(maxAge) || !isFinite(maxAge)) {\r\n      throw new TypeError('option maxAge is invalid')\r\n    }\r\n\r\n    str += '; Max-Age=' + Math.floor(maxAge);\r\n  }\r\n\r\n  if (opt.domain) {\r\n    if (!fieldContentRegExp.test(opt.domain)) {\r\n      throw new TypeError('option domain is invalid');\r\n    }\r\n\r\n    str += '; Domain=' + opt.domain;\r\n  }\r\n\r\n  if (opt.path) {\r\n    if (!fieldContentRegExp.test(opt.path)) {\r\n      throw new TypeError('option path is invalid');\r\n    }\r\n\r\n    str += '; Path=' + opt.path;\r\n  }\r\n\r\n  if (opt.expires) {\r\n    var expires = opt.expires\r\n\r\n    if (!isDate(expires) || isNaN(expires.valueOf())) {\r\n      throw new TypeError('option expires is invalid');\r\n    }\r\n\r\n    str += '; Expires=' + expires.toUTCString()\r\n  }\r\n\r\n  if (opt.httpOnly) {\r\n    str += '; HttpOnly';\r\n  }\r\n\r\n  if (opt.secure) {\r\n    str += '; Secure';\r\n  }\r\n\r\n  if (opt.priority) {\r\n    var priority = typeof opt.priority === 'string'\r\n      ? opt.priority.toLowerCase()\r\n      : opt.priority\r\n\r\n    switch (priority) {\r\n      case 'low':\r\n        str += '; Priority=Low'\r\n        break\r\n      case 'medium':\r\n        str += '; Priority=Medium'\r\n        break\r\n      case 'high':\r\n        str += '; Priority=High'\r\n        break\r\n      default:\r\n        throw new TypeError('option priority is invalid')\r\n    }\r\n  }\r\n\r\n  if (opt.sameSite) {\r\n    var sameSite = typeof opt.sameSite === 'string'\r\n      ? opt.sameSite.toLowerCase() : opt.sameSite;\r\n\r\n    switch (sameSite) {\r\n      case true:\r\n        str += '; SameSite=Strict';\r\n        break;\r\n      case 'lax':\r\n        str += '; SameSite=Lax';\r\n        break;\r\n      case 'strict':\r\n        str += '; SameSite=Strict';\r\n        break;\r\n      case 'none':\r\n        str += '; SameSite=None';\r\n        break;\r\n      default:\r\n        throw new TypeError('option sameSite is invalid');\r\n    }\r\n  }\r\n\r\n  return str;\r\n}\r\n\r\n/**\r\n * URL-decode string value. Optimized to skip native call when no %.\r\n *\r\n * @param {string} str\r\n * @returns {string}\r\n */\r\n\r\nfunction decode (str) {\r\n  return str.indexOf('%') !== -1\r\n    ? decodeURIComponent(str)\r\n    : str\r\n}\r\n\r\n/**\r\n * URL-encode value.\r\n *\r\n * @param {string} str\r\n * @returns {string}\r\n */\r\n\r\nfunction encode (val) {\r\n  return encodeURIComponent(val)\r\n}\r\n\r\n/**\r\n * Determine if value is a Date.\r\n *\r\n * @param {*} val\r\n * @private\r\n */\r\n\r\nfunction isDate (val) {\r\n  return __toString.call(val) === '[object Date]' ||\r\n    val instanceof Date\r\n}\r\n\r\n/**\r\n * Try decoding a string using a decoding function.\r\n *\r\n * @param {string} str\r\n * @param {function} decode\r\n * @private\r\n */\r\n\r\nfunction tryDecode(str, decode) {\r\n  try {\r\n    return decode(str);\r\n  } catch (e) {\r\n    return str;\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0Msa0JBQWtCO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haW0tc2V0LWhhY2svLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzP2UzNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIGNvb2tpZVxyXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXHJcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBNb2R1bGUgZXhwb3J0cy5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuXHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XHJcblxyXG4vKipcclxuICogTW9kdWxlIHZhcmlhYmxlcy5cclxuICogQHByaXZhdGVcclxuICovXHJcblxyXG52YXIgX190b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcclxuXHJcbi8qKlxyXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXHJcbiAqXHJcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXHJcbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XHJcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXHJcbiAqL1xyXG5cclxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cclxuICpcclxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XHJcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICB2YXIgb2JqID0ge31cclxuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcclxuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XHJcblxyXG4gIHZhciBpbmRleCA9IDBcclxuICB3aGlsZSAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XHJcbiAgICB2YXIgZXFJZHggPSBzdHIuaW5kZXhPZignPScsIGluZGV4KVxyXG5cclxuICAgIC8vIG5vIG1vcmUgY29va2llIHBhaXJzXHJcbiAgICBpZiAoZXFJZHggPT09IC0xKSB7XHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGVuZElkeCA9IHN0ci5pbmRleE9mKCc7JywgaW5kZXgpXHJcblxyXG4gICAgaWYgKGVuZElkeCA9PT0gLTEpIHtcclxuICAgICAgZW5kSWR4ID0gc3RyLmxlbmd0aFxyXG4gICAgfSBlbHNlIGlmIChlbmRJZHggPCBlcUlkeCkge1xyXG4gICAgICAvLyBiYWNrdHJhY2sgb24gcHJpb3Igc2VtaWNvbG9uXHJcbiAgICAgIGluZGV4ID0gc3RyLmxhc3RJbmRleE9mKCc7JywgZXFJZHggLSAxKSArIDFcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5ID0gc3RyLnNsaWNlKGluZGV4LCBlcUlkeCkudHJpbSgpXHJcblxyXG4gICAgLy8gb25seSBhc3NpZ24gb25jZVxyXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gb2JqW2tleV0pIHtcclxuICAgICAgdmFyIHZhbCA9IHN0ci5zbGljZShlcUlkeCArIDEsIGVuZElkeCkudHJpbSgpXHJcblxyXG4gICAgICAvLyBxdW90ZWQgdmFsdWVzXHJcbiAgICAgIGlmICh2YWwuY2hhckNvZGVBdCgwKSA9PT0gMHgyMikge1xyXG4gICAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSlcclxuICAgICAgfVxyXG5cclxuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4ID0gZW5kSWR4ICsgMVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlcmlhbGl6ZSBkYXRhIGludG8gYSBjb29raWUgaGVhZGVyLlxyXG4gKlxyXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxyXG4gKiBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVycy5cclxuICpcclxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxyXG4gKiAgID0+IFwiZm9vPWJhcjsgaHR0cE9ubHlcIlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xyXG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xyXG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcclxuXHJcbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZSBpcyBpbnZhbGlkJyk7XHJcbiAgfVxyXG5cclxuICB2YXIgdmFsdWUgPSBlbmModmFsKTtcclxuXHJcbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHZhbCBpcyBpbnZhbGlkJyk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3RyID0gbmFtZSArICc9JyArIHZhbHVlO1xyXG5cclxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XHJcbiAgICB2YXIgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XHJcblxyXG4gICAgaWYgKGlzTmFOKG1heEFnZSkgfHwgIWlzRmluaXRlKG1heEFnZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIG1heEFnZSBpcyBpbnZhbGlkJylcclxuICAgIH1cclxuXHJcbiAgICBzdHIgKz0gJzsgTWF4LUFnZT0nICsgTWF0aC5mbG9vcihtYXhBZ2UpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdC5kb21haW4pIHtcclxuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcclxuICB9XHJcblxyXG4gIGlmIChvcHQucGF0aCkge1xyXG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQucGF0aCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcclxuICB9XHJcblxyXG4gIGlmIChvcHQuZXhwaXJlcykge1xyXG4gICAgdmFyIGV4cGlyZXMgPSBvcHQuZXhwaXJlc1xyXG5cclxuICAgIGlmICghaXNEYXRlKGV4cGlyZXMpIHx8IGlzTmFOKGV4cGlyZXMudmFsdWVPZigpKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZXhwaXJlcyBpcyBpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyICs9ICc7IEV4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKVxyXG4gIH1cclxuXHJcbiAgaWYgKG9wdC5odHRwT25seSkge1xyXG4gICAgc3RyICs9ICc7IEh0dHBPbmx5JztcclxuICB9XHJcblxyXG4gIGlmIChvcHQuc2VjdXJlKSB7XHJcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcclxuICB9XHJcblxyXG4gIGlmIChvcHQucHJpb3JpdHkpIHtcclxuICAgIHZhciBwcmlvcml0eSA9IHR5cGVvZiBvcHQucHJpb3JpdHkgPT09ICdzdHJpbmcnXHJcbiAgICAgID8gb3B0LnByaW9yaXR5LnRvTG93ZXJDYXNlKClcclxuICAgICAgOiBvcHQucHJpb3JpdHlcclxuXHJcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XHJcbiAgICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PUxvdydcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdtZWRpdW0nOlxyXG4gICAgICAgIHN0ciArPSAnOyBQcmlvcml0eT1NZWRpdW0nXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnaGlnaCc6XHJcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PUhpZ2gnXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcHJpb3JpdHkgaXMgaW52YWxpZCcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAob3B0LnNhbWVTaXRlKSB7XHJcbiAgICB2YXIgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSAnc3RyaW5nJ1xyXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xyXG5cclxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsYXgnOlxyXG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdHJpY3QnOlxyXG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdub25lJzpcclxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9Tm9uZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVUkwtZGVjb2RlIHN0cmluZyB2YWx1ZS4gT3B0aW1pemVkIHRvIHNraXAgbmF0aXZlIGNhbGwgd2hlbiBubyAlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZGVjb2RlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLmluZGV4T2YoJyUnKSAhPT0gLTFcclxuICAgID8gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcclxuICAgIDogc3RyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVUkwtZW5jb2RlIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZW5jb2RlICh2YWwpIHtcclxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbClcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiB2YWx1ZSBpcyBhIERhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gaXNEYXRlICh2YWwpIHtcclxuICByZXR1cm4gX190b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJyB8fFxyXG4gICAgdmFsIGluc3RhbmNlb2YgRGF0ZVxyXG59XHJcblxyXG4vKipcclxuICogVHJ5IGRlY29kaW5nIGEgc3RyaW5nIHVzaW5nIGEgZGVjb2RpbmcgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVjb2RlXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkZWNvZGUoc3RyKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/cookie/index.js\n");

/***/ })

};
;