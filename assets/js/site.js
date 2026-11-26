/*! 합불 공통 */
!function(){var e=document.getElementById("navToggle"),t=document.getElementById("nav");e&&t&&(e.addEventListener("click",function(){var n=t.classList.toggle("is-open");e.setAttribute("aria-expanded",n?"true":"false")}),t.addEventListener("click",function(n){"A"===n.target.tagName&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded","false"))}))}();

/* 실시간 현황판 신호(2026.11.26 · 현황판 1.0.0): 들어옴 · 화면을 보는 동안 30초마다 머묾 · 나감.
   글 · 이름 · 메일 · 토큰 코드는 보내지 않음(이 브라우저의 무작위 번호 · 본 쪽 주소 · 들어온 사이트 이름만). 검색 로봇은 보내지 않음. 실패해도 화면에 영향 없음 */
(function () {
  try {
    if (window.__lvOn) return; window.__lvOn = 1;
    if (Date.now() < Date.UTC(2026, 11, 2, 15, 0)) return;   // 합불: 개인정보처리방침 13항(적용 7일 전 공지)에 따라 2026.12.03 00:00(한국)부터
    var U = "https://script.google.com/macros/s/AKfycbynqa4gSpMjYlnOHPH6xaM3d2vys7aVMJHLuxQL_9osna0026p-Z6uywH2d4d0fzUbK_w/exec";
    var d = document, l = location, nav = navigator, S = null;
    if (nav.webdriver || /bot|crawl|spider|slurp|lighthouse|headless|facebookexternalhit|yeti|daumoa/i.test(nav.userAgent || "")) return;
    var host = l.hostname.replace(/^www\./, "");
    if (!/\./.test(host) || /localhost|127\.0\.0\.1|github\.io$/.test(host)) return;
    try { S = window.localStorage; } catch (e0) { S = null; }
    var gt = function (k) { try { return S ? S.getItem(k) : null; } catch (e) { return null; } };
    var st = function (k, v) { try { if (S) S.setItem(k, v); } catch (e) { /* 무시 */ } };
    var v = gt("lv_id"), f = 0;
    if (!v) { v = (Math.random().toString(36).slice(2, 10) + Date.now().toString(36)).slice(0, 16); st("lv_id", v); f = 1; }
    var day = new Date(Date.now() + 324e5).toISOString().slice(0, 10), n = gt("lv_day") !== day ? 1 : 0;
    if (n) st("lv_day", day);
    var rf = ""; try { rf = d.referrer ? new URL(d.referrer).hostname.replace(/^www\./, "") : ""; } catch (e1) { rf = ""; }
    if (rf === host) rf = "";
    var send = function (t, x) {
      var q = U + "?a=h&t=" + t + "&s=" + encodeURIComponent(host) + "&v=" + v + "&p=" + encodeURIComponent(l.pathname.slice(0, 80)) + (x || "");
      try { if (nav.sendBeacon && nav.sendBeacon(q)) return; } catch (e2) { /* 아래로 */ }
      try { fetch(q, { method: "POST", mode: "no-cors", keepalive: true }); } catch (e3) { /* 무시 */ }
    };
    var c = 0, timer = 0, on = false;
    var beat = function () { if (d.visibilityState !== "visible") return; if (++c > 120) { clearInterval(timer); return; } send("h"); };
    var start = function () { if (on) return; on = true; send("v", "&n=" + n + "&f=" + f + "&r=" + encodeURIComponent(rf)); timer = setInterval(beat, 30000); };
    d.addEventListener("visibilitychange", function () { if (!on) return; send(d.visibilityState === "visible" ? "h" : "x"); });
    addEventListener("pagehide", function () { if (on) send("x"); });
    if (d.readyState === "complete") setTimeout(start, 600); else addEventListener("load", function () { setTimeout(start, 600); });
  } catch (e) { /* 신호 실패는 무시 */ }
})();
