$(document).ready(function() {
    $('#eye').click(function() {
        $(this).toggleClass('open'); // Thay đổi lớp 'open' để kiểm tra trạng thái
        $(this).children('i').toggleClass('fa-eye-slash fa-eye'); // chuyển đổi biểu tưởng con mắt
        var inputField = $(this).prev(); // Lấy trường nhập liệu trước biểu tượng
        if ($(this).hasClass('open')) 
        {
            inputField.attr('type', 'text'); // Đổi kiểu thành 'text'
        } else 
        {
            inputField.attr('type', 'password'); // Đổi kiểu thành 'password'
        }
    });
});
button.addEventListener("click", function(){
    button.style.transform = "scale(0.8)";
    setTimeout(()=>{
        button.style.transform = "scale(1)";
        window.location.href = "./2/2.html"
    },200)
})


