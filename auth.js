if (!sessionStorage.getItem("isLoggedIn")) {
  window.location.href = "index.html";
}

let timeout;
const timeoutLimit = 5 * 60 * 1000; // 5 menit

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    alert("Logout otomatis karena tidak aktif.");
    sessionStorage.clear();
    window.location.href = "index.html";
  }, timeoutLimit);
}

document.addEventListener("DOMContentLoaded", resetTimer);
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onclick = resetTimer;
document.onscroll = resetTimer;
document.onkeydown = resetTimer;