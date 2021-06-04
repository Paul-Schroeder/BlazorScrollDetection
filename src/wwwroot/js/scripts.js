var _dotNetObjRef;

window.blazorExtensions = {
    toggleTrackScroll: function (dotNetObjRef) {
        _dotNetObjRef = dotNetObjRef;

        dotNetObjRef.invokeMethodAsync('ToggleTrackScroll')
            .then(isScrollTrackingEnabled => {
                console.log('isScrollTrackingEnabled: ' + isScrollTrackingEnabled);
                if (isScrollTrackingEnabled) {
                    blazorExtensions.enableScrollTracking();
                } else {
                    blazorExtensions.disableScrollTracking();
                }
            });
    },
    enableScrollTracking: function () {
        console.log('enableScrollTracking invoked');
        //window.addEventListener("scroll", blazorExtensions.handleWindowScroll);
        $('.content').on("scroll", blazorExtensions.handleWindowScroll);
    },
    disableScrollTracking: function () {
        console.log('disableScrollTracking invoked');
        //window.removeEventListener("scroll", blazorExtensions.handleWindowScroll);
        $('.content').off("scroll", blazorExtensions.handleWindowScroll);
    },
    handleWindowScroll: function () {
        var container = $('.container'); // $(document);
        var content = $('.content'); // $(window);

        console.log('container.height(): ' + container.height());
        console.log('content.scrollTop(): ' + content.scrollTop());
        console.log('content.height(): ' + content.height());

        _dotNetObjRef.invokeMethodAsync('IsNearWindowBottom', content.scrollTop(), content.height(), container.height())
            .then(isNearWindowBottom => {
                console.log('isNearWindowBottom: ' + isNearWindowBottom);
                if (isNearWindowBottom) {
                    alert("You are NEAR the bottom!");
                }
            });

        _dotNetObjRef.invokeMethodAsync('IsAtWindowBottom', content.scrollTop(), content.height(), container.height())
            .then(isAtWindowBottom => {
                console.log('isAtWindowBottom: ' + isAtWindowBottom);
                if (isAtWindowBottom) {
                    alert("You are AT the bottom!");
                }
            });
    }
};