if (!sessionStorage.getItem("isLoggedIn")) {
  window.location.href = "index.html";
}

const timeoutLimit = 5 * 60 * 1000; // 5 menit
let lastActivity = Date.now();
localStorage.setItem("lastActivity", lastActivity);

// Update aktivitas saat ada interaksi pengguna
function updateActivity() {
  lastActivity = Date.now();
  localStorage.setItem("lastActivity", lastActivity);
}

// Jalankan interval untuk cek aktivitas
setInterval(() => {
  const now = Date.now();
  const last = parseInt(localStorage.getItem("lastActivity") || now);
  if (now - last > timeoutLimit) {
    alert("Logout otomatis karena tidak aktif.");
    sessionStorage.clear();
    window.location.href = "index.html";
  }
}, 10000); // cek setiap 10 detik

// Daftar aktivitas pengguna yang dianggap sebagai interaksi
document.addEventListener("DOMContentLoaded", updateActivity);
document.onmousemove = updateActivity;
document.onkeypress = updateActivity;
document.onclick = updateActivity;
document.onscroll = updateActivity;
document.onkeydown = updateActivity;
