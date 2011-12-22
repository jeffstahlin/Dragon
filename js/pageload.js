replace NAMESPACE with your unique name
replace PAGEID with the name of the page you are displaying...

// Set up name space
if (typeof NAMESPACE == 'undefined') NAMESPACE = {};
if (typeof NAMESPACE.Pages == 'undefined') NAMESPACE.Pages = {};

// Map pageshow event to dispatcher
jQuery("div[data-role*='page']").live('pageshow', function(event, ui) {
        var thisId=$(this).attr("id")
        thisId = thisId.replace(/\.html$/gi,"");
        if (typeof NAMESPACE.Pages[thisId] == 'function')  {
                NAMESPACE.Pages[thisId].call(this);
        }
});

// Create one of these per PAGEID
NAMESPACE.Pages.PAGEID = function() {
	var pageContext = this;
	alert("PAGEID loaded");
};