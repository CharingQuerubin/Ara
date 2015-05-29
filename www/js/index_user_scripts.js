(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Comedy */
    
    
        /* listitem  One Shot */
    
    
        /* listitem  Comedy */
    
    
        /* listitem  Comedy */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         activate_page("#uib_page_2"); 
    });
    
        /* listitem  Romance */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         activate_page("#uib_page_3"); 
    });
    
        /* listitem  List Item */
    
    
        /* listitem  The One He Bullied */
    
    
        /* listitem  List Item */
    $(document).on("click", ".uib_w_36", function(evt)
    {
         activate_page("#uib_page_7"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
