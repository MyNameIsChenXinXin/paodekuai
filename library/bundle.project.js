require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"InGameUI":[function(require,module,exports){
"use strict";
cc._RF.push(module, '59786NjwCBNKJAy8SSNWPlA', 'InGameUI');
// script/InGameUI.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        panelSocial: cc.Node
    },

    // use this for initialization
    // onLoad: function () {

    // },

    toggleSocial: function toggleSocial() {
        this.panelSocial.active = !this.panelSocial.active;
    }

});

cc._RF.pop();
},{}]},{},["InGameUI"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSW5HYW1lVUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0k7O0FBRUE7QUFDSTtBQURROztBQUlaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDSTtBQUNIOztBQWRJIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYW5lbFNvY2lhbDpjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIC8vIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICAvLyB9LFxyXG4gICAgXHJcbiAgICB0b2dnbGVTb2NpYWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsU29jaWFsLmFjdGl2ZSA9ICF0aGlzLnBhbmVsU29jaWFsLmFjdGl2ZTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==