var n = document.location.href;
n.match("/ImOk") ? $("#imOkLink").addClass("selected") : n.match("/Search") && $("#searchLink").addClass("selected");
}), jQuery.validator.unobtrusive.adapters.add("atleastonerequired", ["properties"], function(n) {
    n.rules.atleastonerequired = n.params, n.message != "" && (n.messages.atleastonerequired = n.message)
}), jQuery.validator.addMethod("atleastonerequired", function(n, t, i) {
    var u = i.properties.split(","),
        r = $.map(u, function(n) {
            var i = $("#" + n).val();
            return i != "" ? i : null;
        }),
        f = t.last;
    return t.last = r.length > 0, f != t.last && setTimeout(function() {
        $("form").valid()
    }, 0), r.length > 0
}, "")