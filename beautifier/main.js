$(document).ready(function() {
    $("#language").change(function() {
        $("#tl").text("Online " + $(this).val() + " Beautifier");
    });
    $("#beautify").click(function() {
        const txt = $("#source_code").val().trim();
        if (txt == "") alert("Please enter a value.");
        else {
            let res;
            switch ($("#language option:selected").val()) {
                case "Javascript":
                    res = js_beautify(txt);
                    break;
                case "HTML":
                    res = html_beautify(txt);
                    break;
                case "CSS":
                    res = css_beautify(txt);
            }
            $("#source_code").val(res);
        }
    });
    $("#copy").click(function() {
        const sc = $("#source_code");
        if (sc.val().trim() == "") alert("Please enter a value.");
        else {
            sc.select();
            document.execCommand("copy");
            alert("Copied!");
        }
    });
});
