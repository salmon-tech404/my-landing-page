// Chuyển đổi màu cho tab
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // xóa active tất cả các tab
    tabs.forEach((t) => {
      t.classList.remove("bg-p-600", "text-white", "shadow-lg");
      t.classList.add("text-p-900", "bg-transparent");
    });

    // thêm active cho tab được click
    tab.classList.add("bg-p-600", "text-white", "shadow-lg");
    tab.classList.remove("text-p-900", "bg-transparent", "shadow-lg");
  });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // tab được click → lấy content tương ứng
    const targetId = btn.getAttribute("href"); // ví dụ "#hongcha"
    const current = document.querySelector(targetId);

    // 1. Remove active ở TẤT CẢ tab-content
    contents.forEach((c) => {
      c.classList.remove("active");
    });

    // 2. Add active cho tab-content được click
    current.classList.add("active");
  });
});
