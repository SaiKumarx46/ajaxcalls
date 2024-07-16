sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        CUSTOM_POST_CLICK: async function(oEvent) {

            // ==============================================

            // "cds": {
            //     "requires": {
            //       "db": "hana"
            //     },
            //      "fiori": {
            //             "bypass_draft": true
            //           }
            //   },


            // this is mandatory in package.JSON  for  @odata.draft.enabled

            //=================================================

            var postData = {
                id: '4',
                item_name: 'laptop',
                item_desc: 'dell',
                quantity: 5,
                IsActiveEntity: true   // if we dont give this line for @odata.draft.enabled it will be in draft only
            };

            var oData1
            await $.ajax({
                url: `/odata/v4/my/item`,  
                type: "POST",
                contentType: "application/json",                               //  want to fetch all records
                data: JSON.stringify(postData),
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
