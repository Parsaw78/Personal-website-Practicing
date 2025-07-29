// Circle Skill Bar

function animateCircle(target, id, circleId) {
  let count = 0;
  let textElement = document.getElementById(id);
  let circle = document.getElementById(circleId);
  let maxOffset = 125.6;
  let finalOffset = maxOffset - (target / 100) * maxOffset;
  let duration = 2000; // 2 ثانیه
  let startTime;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    let currentValue = Math.floor(progress * target);
    let currentOffset = maxOffset - progress * (maxOffset - finalOffset);

    textElement.textContent = currentValue;
    circle.setAttribute("stroke-dashoffset", currentOffset);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

animateCircle(70, "text1", "circle1"); // دایره اول (۷۰٪)
animateCircle(80, "text2", "circle2"); // دایره دوم (۸۰٪)
animateCircle(90, "text3", "circle3"); // دایره سوم (۹۰٪)

// Line Skil bar

let skills = [
  { id: "bar1", percentId: "percent1", percent: 90 },
  { id: "bar2", percentId: "percent2", percent: 75 },
  { id: "bar3", percentId: "percent3", percent: 60 },
  { id: "bar4", percentId: "percent4", percent: 85 },
  { id: "bar5", percentId: "percent5", percent: 70 },
];

skills.forEach((skill) => {
  let bar = document.getElementById(skill.id);
  let text = document.getElementById(skill.percentId);
  let current = 0;

  let interval = setInterval(() => {
    if (current >= skill.percent) {
      clearInterval(interval);
    } else {
      current++;
      bar.setAttribute("width", (current * 200) / 100); // تغییر عرض نوار
      text.textContent = current + "%"; // تغییر عدد درصد
    }
  }, 20);
});

//Nav sid bar menu

// دریافت المان‌های مورد نیاز
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const overlay = document.querySelector(".overlay");

// تابع تغییر وضعیت سایدبار
function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

// رویداد کلیک روی دکمه toggle
toggleBtn.addEventListener("click", toggleSidebar);

// بسته شدن سایدبار هنگام کلیک روی overlay
overlay.addEventListener("click", toggleSidebar);
