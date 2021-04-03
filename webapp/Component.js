sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device",
  "sap/f/FlexibleColumnLayoutSemanticHelper",
	"sap/f/library",
  "com/s4/analytics/developerTest/model/models"
], function(UIComponent, JSONModel, Device, FlexibleColumnLayoutSemanticHelper, fioriLibrary, models) {
  "use strict";
  return UIComponent.extend("com.s4.analytics.developerTest.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      this.setModel(new JSONModel(), "routeModel");
			this.getRouter().attachBeforeRouteMatched(this._onBeforeRouteMatched, this);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    },

    createContent: function () {
			return sap.ui.view({
				viewName: "com.s4.analytics.developerTest.view.FlexibleColumnLayout",
				type: "XML"
			});
		},
    /*
    * Returns an instance of the semantic helper
    * @returns {sap.f.FlexibleColumnLayoutSemanticHelper} An instance of the semantic helper
    */
   getHelper: function () {
     var oFCL = this.getRootControl().byId("fcl"),
       oParams = jQuery.sap.getUriParameters(),
       oSettings = {
         defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
         defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
         mode: oParams.get("mode"),
         initialColumnsCount: oParams.get("initial"),
         maxColumnsCount: oParams.get("max")
       };

     return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
   },

   _onBeforeRouteMatched: function(oEvent) {
    var oModel = this.getModel(),
      sLayout = oEvent.getParameters().arguments.layout;

    // If there is no layout parameter, set a default layout (normally OneColumn)
    if (!sLayout) {
      sLayout = fioriLibrary.LayoutType.OneColumn;
    }

    oModel.setProperty("/layout", sLayout);
  },

   /**
    * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
    * design mode class should be set, which influences the size appearance of some controls.
    * @public
    * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
    */
   getContentDensityClass: function () {
     if (this._sContentDensityClass === undefined) {
       // check whether FLP has already set the content density class; do nothing in this case
       if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
         this._sContentDensityClass = "";
       } else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
         this._sContentDensityClass = "sapUiSizeCompact";
       } else {
         // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
         this._sContentDensityClass = "sapUiSizeCozy";
       }
     }
     return this._sContentDensityClass;
   }
  });
});
