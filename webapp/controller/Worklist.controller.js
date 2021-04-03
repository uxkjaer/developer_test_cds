sap.ui.define([
  "com/s4/analytics/developerTest/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("com.s4.analytics.developerTest.controller.Worklist", {

  /*
  * Event handler for the listitem to navigate to the detail page
  * @param  {sap.ui.base.Event} oEvent event for the list item press
  * @returns {void}
	*/
    onListItemPress: function (oEvent) {
      var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1);
      var oItem = oEvent.getSource();

    },
  });
});
