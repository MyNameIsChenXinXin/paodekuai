cc.Class({
    extends: cc.Component,

    properties: {
        panelSocial:cc.Node,
    },

    // use this for initialization
    // onLoad: function () {
    
    // },
    
    toggleSocial: function () {
        this.panelSocial.active = !this.panelSocial.active;
    },
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
