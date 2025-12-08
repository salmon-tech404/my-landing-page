// import partner data
import { productList, partnerLogoBasePath, partnerLogos } from "./data.js";

// Partnerlogo
$(function () {
  const container = document.getElementById("partner-logo-list");

  //duyệt qua từng logo và hiển thị
  [...partnerLogos, ...partnerLogos].forEach((logo) => {
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

/* ==== Navigation bar ==== */
$(function () {
  $(".navbar").hidescroll();
});

// slow motion video
const video = document.getElementById("bg-video");
video.playbackRate = 0.4; // 0.5 = chậm 50%
