sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        CUSTOM_DELETE_CLICK: async function(oEvent) {
           
            var oData1
            await $.ajax({
                 // url: `/odata/v4/my/item`,                                     //  want to fetch all records

                 url: `/odata/v4/my/item/'1'`,                   //  want to fetch 1 record

                type: "DELETE",
                success: function (data) {
                  oData1 = data;
                  console.log('data', data);
                  debugger
                },
                error: function (error) {
                  console.log(`Error ${error}`);
                  debugger
                }
              });
        }
    };
});
