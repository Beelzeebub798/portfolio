/* ============================================================
   main.js — All interactive behaviour for the Fantasy Journey site
   ============================================================ */

// ── Language button toggle ──────────────────────────────────
// Switches the active state between the language buttons in the nav.
// ✏️ To add real translation logic, hook into the click event below
//    and swap out text content / show/hide language-specific elements.
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
