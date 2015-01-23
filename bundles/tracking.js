// check if user has allowed cookie
if (jQuery.cookie('cc_cookie_decline') == "cc_cookie_decline") {
// do nothing
} else {

    // Nav link listeners
    $('#imokLink').on('click', function() {
        ga('send', 'event', 'navigation', 'imok', 'nav buttons');
    });
    
    $('#searchLink').on('click', function() {
        ga('send', 'event', 'navigation', 'search', 'nav buttons');
    });
    
    $('#languageDutch').on('click', function() {
        ga('send', 'event', 'language', 'dutch', 'nav buttons');
    });
    
    $('#languageEnglish').on('click', function() {
        ga('send', 'event', 'language', 'english', 'nav buttons');
    });
    
    $('#homeLink').on('click', function() {
        ga('send', 'event', 'footer', 'home', 'footer buttons');
    });
    
    $('#faqLink').on('click', function() {
        ga('send', 'event', 'footer', 'faq', 'footer buttons');
    });
    
    $('#privacyLink').on('click', function() {
        ga('send', 'event', 'footer', 'privacy', 'footer buttons');
    });
    
    $('#corporateLink').on('click', function() {
        ga('send', 'event', 'footer', 'corporate', 'footer buttons');
    });
}