sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        CUSTOM_GET_CLICK: async function(oEvent) {
           
            debugger
              var oData1
              await $.ajax({
                   // url: `/odata/v4/my/item`,                                     //  want to fetch all records

                  // url: `/odata/v4/my/item?$filter=id eq '1'`,                   //  want to fetch 1 record

                  url: `/odata/v4/my/item?$filter=id eq '1' or id eq '2'`,         //  want to fetch 1 or 2  records

                  // url: `/odata/v4/my/item?$filter=id eq '1' and rid eq '1'`    //  want to fetch a record with multiple keys
               
                  type: "GET",
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


              //=============================================================================================================
        }
    };
});
