sap.ui.define([
  "com/s4/analytics/developerTest/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.s4.analytics.developerTest.controller.Object", {

    onInit: function () {
      this.oRouter = this.getOwnerComponent().getRouter();
      this.oModel = this.getOwnerComponent().getModel();

      this.getView().setModel(new JSONModel({
        busy: false,
        index: 0
      }), "objectView");

    }


  });
});
