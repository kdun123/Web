    function validateForm() {
        let x = document.forms["search"]["gmail"].value;
        if (x == "") {
        alert("hãy nhập dữ liệu muốn tìm");
        return window.location.href ='index.html';
        }
        }
    function Login () {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if (username ==='Anhtu' && password ==='6365312') {
          window.location.href = 'class.html';
        } else {
          alert('Tên đăng nhập hoặc mật khẩu không đúng');
        }
      }