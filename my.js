$(document).ready(function() {
    MyApp = {
        appinit: function() {
            MyApp.DocSidebarToggle();
            //more
        },


        DocSidebarToggle: function() {
            console.log('Messagte: clean run'); 
        }
    };

    MyApp.appinit();
});
