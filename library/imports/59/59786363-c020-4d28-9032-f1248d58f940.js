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