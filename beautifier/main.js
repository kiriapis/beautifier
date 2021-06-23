$(document).ready(function() {
    // 언어 변경 감지
    $("#language").change(function() {
        var language = $(this).val();
        $("#tl").text("Online " + language + " Beautifier");
    });
    // beautify 클릭
    $("#beautify").click(function() {
        var txt = $("#source_code");
        if ($.trim(txt.val()) == "") {
            alert("Please enter a value.");
            txt.focus();
        } else {
            var res;
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
    // 복사
    $("#copy").click(function() {
        var sc = $("#source_code");
        if ($.trim(sc.val()) == "") {
            alert("Please enter a value.");
            sc.focus();
        } else {
            sc.select();
            document.execCommand("copy");
            alert("Copied!");
        }
    });
});
