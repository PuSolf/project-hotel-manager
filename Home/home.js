// Load navbar
fetch("../Navbar/navbar.html")
    .then(res => res.text())
    .then(data => {
        const navbar = document.getElementById("navbar");
        navbar.innerHTML = data;
        navbar.classList.add("topbar");

        // Sau khi navbar được chèn xong, bắt đầu quan sát
        adjustContentPosition();

        // Quan sát mọi thay đổi chiều cao của navbar
        const observer = new ResizeObserver(adjustContentPosition);
        observer.observe(navbar);
    });

// Cập nhật ngày giờ thực
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = now.toLocaleTimeString('vi-VN');
    const date = now.toLocaleDateString('vi-VN', options);
    document.getElementById('datetime').textContent = `${date} | ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Điều chỉnh vị trí header và main khi navbar thay đổi
function adjustContentPosition() {
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.home-header');
    const main = document.querySelector('.main-content');

    if (navbar && header && main) {
        const navbarHeight = navbar.offsetHeight;
        // Đẩy header xuống bằng chiều cao navbar
        header.style.marginTop = navbarHeight + "px";
        // Nếu bạn muốn main-content cũng "ăn theo", giữ một khoảng cách dưới header
        main.style.marginTop = "20px";
    }
}

// Cập nhật khi cửa sổ thay đổi kích thước
window.addEventListener('resize', adjustContentPosition);
