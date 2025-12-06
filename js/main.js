// import partner data
import { productList, partnerLogoBasePath, partnerLogos } from "./data.js";

// Partnerlogo
$(function () {
  const container = document.getElementById("partner-logo-list");

  //duyệt qua từng logo và hiển thị
  partnerLogos.forEach((logo) => {
    const img = document.createElement("img");
    // Tạo thẻ <img> cho mỗi logo
    img.src = partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add("logo-ticker-img");
    // JavaScript thêm thẻ <img> vừa tạo vào trong div.
    container.appendChild(img);
  });
});

// img.src là thuộc tính chuẩn của thẻ <img>, xác định đường dẫn hình ảnh mà trình duyệt sẽ load.
// logo.fileName là tên file logo, ví dụ "costco.png"
// classList là thuộc tính của tất cả element HTML trong JavaScript (DOM API).vd) <img src="..." alt="">

// stickyHeader

const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  // Khi scroll xuống -> ẩn
  if (current > lastScroll && current > 50) {
    header.classList.add("-translate-y-full");
  }

  lastScroll = current;
});

// Khi rê chuột vào header -> hiện
header.addEventListener("mouseenter", () => {
  header.classList.remove("-translate-y-full");
});
