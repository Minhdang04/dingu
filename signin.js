// Phần này là sign up
const signUp = e => {
    // Tạo 4 cái ô trống để nhập tên đăng nhập với tài khoản các thứ
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    // Nối data từ cái form với local storage trong "formData". Mở console ra sẽ thấy cái formData: "..." chứa thông tin đăng nhập
    // let formData = JSON.parse(localStorage.getItem('formData')) || [];

    // Đoạn này kiểm tra tài khoản đã có hay chưa
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() &&  //First name và last name có bị trùng kể cả viết hoa
            data.lname.toLowerCase() == lname.toLowerCase()     //hay viết thường
        );
    if(!exist){
        formData.push({ fname, lname, email, pwd });                        // !exist có nghĩa là nếu không trùng (tên hoặc email) thì đưa ra cái alert bên dưới
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");  // alert này này... nó sẽ lưu lại tên trong form vào data... và đuược dùng để sign in
        console.log(localStorage);
        locaion.href = "http://www.facebook.com"
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up"); // Còn nếu trùng thì sẽ alert cái này... phải đăng ký lại hoặc đăng nhập luôn
    }
    e.preventDefault();
}

// function so sánh cho sign in
function signIn(e) {   
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;    // So sánh email với password xem có trùng
    let formData = JSON.parse(localStorage.getItem('formData')) || [];                                 // với data trong formData không
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);  // Đoạn này dùng để so sánh
    if(!exist){
        alert("Incorrect login credentials"); // Nếu so sánh thấy không giống thì đưa ra alert
    }
    else{
        location.href = "index.html"; //Nếu đúng thì chuyển vào trang home :D
    }
    e.preventDefault();
}
