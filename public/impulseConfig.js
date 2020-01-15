var serviceFacade = new ottry.impulse.ServiceFacade(document.getElementById("service"), {
    sid: "5d84a7e091d8a57a0e4a4f1e",
    scrollOffset: -68, // sticky header height
    locale: "uk",
    mode: "shop"
});
$(function () {
    $("button[data-id]").click(function (e) {
        e.preventDefault();
        var self = this;
        serviceFacade
            .dispatch({
                type: "IMPULSE_FASTTOCART",
                id: $(self).data("id")
            })
            .then(function () {
                $(self).css("background-color", "");
            })
            .catch(function () {
                $(self).css("background-color", "red");
            });
    });
    serviceFacade.subscribe("ENDPOINTS_LOADED", function (action) {
        action.endpoints.forEach(function (e) {
            $(" button[data-id=" + e.id + "]").removeClass("w3-hide");
        });
    });
    serviceFacade.subscribe("IMPULSE_REMOVEFROMCART", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);

    });
    serviceFacade.subscribe("IMPULSE_ADDANDGOTOCART", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);
    });
    serviceFacade.subscribe("IMPULSE_ADDTOCART", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);
    });
    serviceFacade.subscribe("IMPULSE_FASTFORWARD", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);
    });
    serviceFacade.subscribe("IMPULSE_FASTTOCART", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);
    });
    serviceFacade.subscribe("IMPULSE_BOUGHT", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);
    });
    serviceFacade.subscribe("IMPULSE_START_NEW", function (payload) {
        $(".cart-number").text(payload.impulseEndpoints.length);
        $("#myBtn").trigger("click");
    });
});