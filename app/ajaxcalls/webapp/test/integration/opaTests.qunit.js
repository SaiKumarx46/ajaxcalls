sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ajaxcalls/test/integration/FirstJourney',
		'ajaxcalls/test/integration/pages/itemList',
		'ajaxcalls/test/integration/pages/itemObjectPage'
    ],
    function(JourneyRunner, opaJourney, itemList, itemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ajaxcalls') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheitemList: itemList,
					onTheitemObjectPage: itemObjectPage
                }
            },
            opaJourney.run
        );
    }
);