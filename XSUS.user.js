// ==UserScript==
// @name           XioScript
// @namespace      Virtonomics
// @description    XioScript using XioLibraries
// @version        10.1.7
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require        https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require        https://raw.githubusercontent.com/cobr123/XioScript-10/master/XSCF.js
// @require        https://raw.githubusercontent.com/cobr123/XioScript-10/master/XSML.js
// @require        https://raw.githubusercontent.com/cobr123/XioScript-10/master/XSCL.js
// @require        https://raw.githubusercontent.com/cobr123/XioScript-10/master/XSEL.js
// @resource       jQuiCss     https://raw.githubusercontent.com/cobr123/XioScript-10/master/jquery-ui.css
// @resource       myCss       https://raw.githubusercontent.com/cobr123/XioScript-10/master/XSCSS.css
// @include        http*://*virtonomic*.*/*/*
// @exclude        http*://virtonomics.wikia.com*
// @grant          GM_getResourceText
// @grant          GM_addStyle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        XioScript();
    }
}
document.onreadystatechange();
