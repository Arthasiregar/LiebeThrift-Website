// ============================================
// LIEBE THRIFT — MAIN SCRIPT
// Logic interaktif (search, filter, cart, wishlist)
// akan kita tambahkan bertahap mulai Step 2 (Fase 2).
// Untuk sekarang masih kosong dulu.
// ============================================

console.log("Liebe Thrift loaded ✨");

// ============================================
// TOGGLE HAMBURGER MENU (khusus tampilan mobile)
// Ini contoh kecil interaksi JS — logic yang lebih
// kompleks (search, filter, cart) akan kita bangun
// bertahap di Fase 2.
// ============================================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navbarMenu = document.getElementById("navbarMenu");
 
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-open");
});