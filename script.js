const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnLogin=document.querySelector('.btnLogin');
const iconClose=document.querySelector('.icon-close');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-pop');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-pop');
});

const loginForm = document.querySelector('.login form');
const registerForm = document.querySelector('.register form');
const btnRegister = document.querySelector('.btnRegister');

// حدث تسجيل الدخول
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // التحقق من صحة البيانات
    if (email === '' || password === '') {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    // إذا كانت البيانات صحيحة
    alert("Login successful");

    // إخفاء نافذة تسجيل الدخول بعد النجاح
    wrapper.classList.remove('active-pop');
    btnLogin.style.display='none';
});

// وظيفة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// حدث التسجيل
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    // التحقق من صحة البيانات
    if (username === '' || email === '' || password === '') {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    // إذا كانت البيانات صحيحة
    alert("Registration successful");

    // إخفاء نافذة التسجيل بعد النجاح
    wrapper.classList.remove('active-pop');
    btnLogin.style.display='none';
});
 

//  Responsive  to hide the btnMenu
  const btnMenu=document.getElementById('btnMenu');
  const navigation=document.querySelector('.navigation');
    
     btnMenu.addEventListener('click',()=>{
        btnMenu.classList.toggle('fa-times');
        navigation.classList.toggle('hide');
     })