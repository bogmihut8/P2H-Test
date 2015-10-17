jQuery(document).ready(function(){
    jQuery(".container").hide().fadeIn("slow");
    jQuery(".bg-green").click(function(){
        if(jQuery('input[type="checkbox"]').parent().hasClass("parsley-success")){
           console.log("yes");
           jQuery('input[type="checkbox"]').parent().attr("style", "");
        }
        else
        {
            jQuery('input[type="checkbox"]').parent().css('border-radius', '3px');
            jQuery('input[type="checkbox"]').parent().css('background-color', '#F2DEDE');
            jQuery('input[type="checkbox"]').parent().css('border-color', '#F2DEDE');
            jQuery('input[type="checkbox"]').parent().css('padding-bottom', '10px'); 
        }
        jQuery('input[type="checkbox"]').change(function() {
            if(jQuery('input[type="checkbox"]').is(':checked')) {
                jQuery('input[type="checkbox"]').parent().attr("style", "");
            }
        });
    });
});                
