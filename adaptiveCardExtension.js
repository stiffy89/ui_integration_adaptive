sap.ui.define([
    "sap/ui/integration/Extension"
], 
    function (Extension) {
        "use strict";
        var CardExtension = Extension.extend("ns.ui_integration_adaptive.adaptiveCardExtension");

        let iSeeLineAmount = 3;
        let sButtonText = "see more";
        
        CardExtension.prototype.getData = function (arg) {
            return Promise.resolve({
                "buttonText" : sButtonText,
                "maxLines" : iSeeLineAmount,
                "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate hendrerit convallis. Nulla et mattis lacus. Donec ac ipsum eget tellus sagittis condimentum. Donec tempor vehicula lectus, sit amet rhoncus nisl tristique eget. Integer euismod malesuada ipsum vel tristique. Quisque sed sapien nisl. Integer eget neque non urna auctor blandit eu at orci. Duis nec rhoncus velit. Pellentesque quis fringilla felis. Sed eu ultrices augue. Nullam imperdiet interdum sem a interdum. Donec hendrerit, ligula eu egestas gravida, nibh ipsum pharetra odio, a dapibus mi metus eu odio. Curabitur faucibus velit vitae rutrum finibus. Sed nec ex ac urna bibendum hendrerit in et massa. Sed malesuada quam metus, sed volutpat justo elementum nec. Mauris viverra dui est, non sagittis dui efficitur maximus. Maecenas efficitur euismod enim. Ut ac ex placerat, laoreet urna id, pellentesque velit. Aliquam bibendum convallis nibh, nec cursus leo consectetur nec. Sed suscipit tincidunt rhoncus. Sed facilisis egestas nisi non aliquam. Vestibulum a elit tellus. Aenean dignissim lorem maximus erat fermentum, eu blandit tortor pharetra. Nam rutrum, leo eget cursus lacinia, tellus sapien finibus leo, non ornare urna velit ac augue. Phasellus commodo nunc in nunc pulvinar fringilla. Nunc nec orci a nibh mollis ultricies et at erat. Nam a rutrum augue, a eleifend massa. Nam eget ornare ligula. Donec ultrices vestibulum quam, rhoncus hendrerit augue commodo a. Donec aliquam aliquam feugiat. Donec ac pellentesque erat. Morbi bibendum vitae sapien ac venenatis. Aliquam ac lectus vel tortor lobortis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies nunc at lorem volutpat, eget elementum tortor mollis. Phasellus sed ex ut leo elementum tincidunt ac interdum arcu. Vivamus et quam mauris. Etiam porttitor in nisi a ornare. In sed ante euismod, congue mi quis, fermentum nunc. Etiam vitae ex posuere, egestas nibh et, egestas leo. Mauris nisl dolor, lacinia eget ligula id, mattis volutpat purus. Praesent fringilla ac dolor at eleifend. Suspendisse potenti. Suspendisse faucibus blandit diam vitae feugiat. Vivamus consectetur tellus sed ultricies posuere. Curabitur augue turpis, molestie sit amet tincidunt et, luctus accumsan diam. Vestibulum non ultricies elit. Aenean enim nulla, viverra nec facilisis id, vehicula commodo nibh. Aliquam tempus orci in nulla ultricies auctor. Quisque non imperdiet urna. Nulla laoreet vehicula sollicitudin. Proin commodo euismod gravida. Aenean in sem commodo, lacinia mauris et, blandit tortor. Maecenas luctus eget sapien ac sodales. Cras quis enim volutpat, lacinia massa eu, dignissim sapien. Pellentesque orci est, porta nec neque ac, cursus elementum mi."
            });
           
        };

        CardExtension.prototype.init = function () {
            Extension.prototype.init.apply(this, arguments);
	        this.attachAction(this._handleAction.bind(this));
        }

        CardExtension.prototype._handleAction = function (oEvent) {

            var oActionParams = oEvent.getParameter("parameters");

            if (oActionParams.method == "see more") {
                iSeeLineAmount = 0;
                sButtonText = "see less";
            } else {
                iSeeLineAmount = 3;
                sButtonText = "see more";
            }

            var oCard = this.getCard();
            oCard.refreshData();
        }

        
        return CardExtension;
        
    }
);