$(document).ready(function() {
    $("#login").click(function() {
        var email = $.trim($("#email").val());
        var password = $.trim($("#password").val());
        
        if (email == "") {
            alert("이메일을 입력해주세요.");
            $("#email").focus();
        } else if (password == "") {
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
        } else {
            alert("이메일: " + email);
            alert("비밀번호: " + password);
        }
    });
});
