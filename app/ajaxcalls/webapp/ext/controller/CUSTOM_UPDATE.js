sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        CUSTOM_UPDATE_CLICK: function(oEvent) {

                debugger
            var itemIdToUpdate = '1'; // Example ID of the item to update
            var updatedItemData = {
                id: itemIdToUpdate,
                item_name: 'Updated Bag',
                item_desc: 'New description for the bag',
                quantity: 15
            };
            
            var url  = `/odata/v4/my/item(${itemIdToUpdate})`

            $.ajax({
                // url: `/odata/v4/my/item('${itemIdToUpdate}')`, 
                 url: '/odata/v4/my/item/1',   
                type: "PATCH",
                contentType: "application/json",
                data: JSON.stringify(updatedItemData),
                success: function (data) {
                    console.log('PUT Success:', data);
                    debugger;
                },
                  error: function (error) {
                  console.log(`Error ${error}`);
                  debugger
                }
            });
            
        }
    };
});
