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
        window.addEventListener("scroll", blazorExtensions.handleWindowScroll);
    },
    disableScrollTracking: function () {
        console.log('disableScrollTracking invoked');
        window.removeEventListener("scroll", blazorExtensions.handleWindowScroll);
    },
    handleWindowScroll: function () {
        console.log('$(window).scrollTop(): ' + $(window).scrollTop());
        console.log('$(window).height(): ' + $(window).height());
        console.log('$(document).height(): ' + $(document).height());

        _dotNetObjRef.invokeMethodAsync('IsNearWindowBottom', $(window).scrollTop(), $(window).height(), $(document).height())
            .then(isNearWindowBottom => {
                console.log('isNearWindowBottom: ' + isNearWindowBottom);
                if (isNearWindowBottom) {
                    alert("You are NEAR the bottom!");
                }
            });

        _dotNetObjRef.invokeMethodAsync('IsAtWindowBottom', $(window).scrollTop(), $(window).height(), $(document).height())
            .then(isAtWindowBottom => {
                console.log('isAtWindowBottom: ' + isAtWindowBottom);
                if (isAtWindowBottom) {
                    alert("You are AT the bottom!");
                }
            });
    }
};