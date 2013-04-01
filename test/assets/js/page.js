var jabinfo = jabinfo || {};

jabinfo.init = function() {
    var list = $("#content img");
    list.click(jabinfo.swrap), list.swipe(jabinfo.swrap);
}, jabinfo.swrap = function() {
    console.log("hello");
}, $(document).ready(function() {
    jabinfo.init();
});
//@ sourceMappingURL=http://a.tbcdn.cn/apps/bnswww/js/js/source-map.js