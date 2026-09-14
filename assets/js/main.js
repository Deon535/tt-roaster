(function () {
  "use strict";

  /* ============================================================
     i18n engine
     ============================================================ */
  var LANG_KEY = "tt-roaster-lang";
  var dict = window.TT_I18N || {};
  var htmlEl = document.documentElement;

  function getSavedLang() {
    try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function applyLang(lang) {
    var table = dict[lang];
    if (!table) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table[key] !== undefined) el.innerHTML = table[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      spec.split("|").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0], key = parts[1];
        if (table[key] !== undefined) el.setAttribute(attr, table[key]);
      });
    });

    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", table.dir || "ltr");

    var labelEl = document.getElementById("langSwitchLabel");
    if (labelEl) labelEl.textContent = lang.toUpperCase();

    document.querySelectorAll(".lang-switch__option").forEach(function (opt) {
      var isActive = opt.getAttribute("data-lang") === lang;
      opt.setAttribute("aria-checked", isActive ? "true" : "false");
    });

    saveLang(lang);
  }

  function initLangSwitch() {
    var switchEl = document.getElementById("langSwitch");
    var btn = document.getElementById("langSwitchBtn");
    if (!switchEl || !btn) return;

    function close() {
      switchEl.setAttribute("data-open", "false");
      btn.setAttribute("aria-expanded", "false");
    }
    function toggle() {
      var open = switchEl.getAttribute("data-open") === "true";
      switchEl.setAttribute("data-open", open ? "false" : "true");
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggle();
    });

    switchEl.querySelectorAll(".lang-switch__option").forEach(function (opt) {
      opt.addEventListener("click", function () {
        applyLang(opt.getAttribute("data-lang"));
        close();
      });
    });

    document.addEventListener("click", function (e) {
      if (!switchEl.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  var initialLang = getSavedLang() || "ru";
  if (!dict[initialLang]) initialLang = "ru";
  applyLang(initialLang);
  initLangSwitch();

  /* ============================================================
     Theme toggle (light sand <-> dark forest), radial reveal
     ============================================================ */
  var THEME_KEY = "tt-roaster-theme";
  var THEME_COLOR = { light: "#faf3e3", dark: "#122318" };

  function getSavedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function saveTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function setThemeAttr(theme) {
    if (theme === "dark") htmlEl.setAttribute("data-theme", "dark");
    else htmlEl.removeAttribute("data-theme");

    var toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      var currentLang = htmlEl.getAttribute("lang") || "ru";
      var table = dict[currentLang] || dict.ru || {};
      var labelKey = theme === "dark" ? "common.themeToLight" : "common.themeToDark";
      if (table[labelKey]) toggle.setAttribute("aria-label", table[labelKey]);
    }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[theme] || THEME_COLOR.light);
  }

  function applyTheme(theme, originEl) {
    var reduceMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) {
      setThemeAttr(theme);
      return;
    }

    if (originEl) {
      var rect = originEl.getBoundingClientRect();
      var x = rect.left + rect.width / 2;
      var y = rect.top + rect.height / 2;
      var maxX = Math.max(x, window.innerWidth - x);
      var maxY = Math.max(y, window.innerHeight - y);
      var r = Math.hypot(maxX, maxY);
      htmlEl.style.setProperty("--reveal-x", x + "px");
      htmlEl.style.setProperty("--reveal-y", y + "px");
      htmlEl.style.setProperty("--reveal-r", r + "px");
    }

    document.startViewTransition(function () { setThemeAttr(theme); });
  }

  function initThemeToggle() {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var isDark = htmlEl.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      applyTheme(next, toggle);
      saveTheme(next);
    });
  }

  var initialTheme = getSavedTheme() || "light";
  setThemeAttr(initialTheme);
  initThemeToggle();

  /* ============================================================
     Header scroll state
     ============================================================ */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ============================================================
     Mobile nav
     ============================================================ */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    function closeNav() {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
    navToggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  /* ============================================================
     Scroll reveal
     ============================================================ */
  function onReveal(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }

  var revealEls = document.querySelectorAll("[data-reveal]:not([data-reveal='zoom'])");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(onReveal, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // zoom-reveal photos: trigger by position (top edge crossing a line),
  // not by visible-area ratio -- a ratio threshold is unreliable here since
  // a tall narrow photo and a short wide one need very different scroll
  // distances to reach the same percentage of their own area visible.
  var zoomEls = document.querySelectorAll("[data-reveal='zoom']");
  if ("IntersectionObserver" in window && zoomEls.length) {
    var zoomIo = new IntersectionObserver(onReveal, { threshold: 0, rootMargin: "0px 0px -25% 0px" });
    zoomEls.forEach(function (el) { zoomIo.observe(el); });
  } else {
    zoomEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ============================================================
     Full menu modal
     ============================================================ */
  var modal = document.getElementById("menuModal");
  if (modal) {
    var openers = [
      document.getElementById("openMenuModalTop"),
      document.getElementById("openMenuModalBottom"),
      document.getElementById("footerFullMenu")
    ].filter(Boolean);
    var closers = modal.querySelectorAll("[data-close-modal]");
    var lastFocused = null;

    function openModal(e) {
      if (e) e.preventDefault();
      lastFocused = document.activeElement;
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      var closeBtn = modal.querySelector(".menu-modal__close");
      if (closeBtn) closeBtn.focus();
    }
    function closeModal() {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    openers.forEach(function (btn) { btn.addEventListener("click", openModal); });
    closers.forEach(function (btn) { btn.addEventListener("click", closeModal); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
    });
  }

  /* ============================================================
     Hero video — seamless crossfade loop
     ============================================================ */
  (function heroVideo() {
    var media = document.querySelector(".hero-media");
    var videoA = document.getElementById("heroVideoA");
    var videoB = document.getElementById("heroVideoB");
    if (!media || !videoA || !videoB) return;

    var CROSSFADE = 0.9; // seconds before end to start crossfade
    var current = videoA;
    var next = videoB;
    var swapping = false;
    var started = false;

    function markReady() {
      if (started) return;
      started = true;
      media.classList.add("is-video-ready");
    }

    function attachLoop(video) {
      video.addEventListener("timeupdate", function () {
        if (video !== current || swapping) return;
        if (!video.duration || isNaN(video.duration)) return;
        if (video.duration - video.currentTime <= CROSSFADE) {
          swapping = true;
          next.currentTime = 0;
          var playPromise = next.play();
          if (playPromise && playPromise.catch) playPromise.catch(function () {});
          next.classList.add("is-active");
          current.classList.remove("is-active");
          setTimeout(function () {
            current.pause();
            current.currentTime = 0;
            var tmp = current;
            current = next;
            next = tmp;
            swapping = false;
          }, CROSSFADE * 1000);
        }
      });
    }

    attachLoop(videoA);
    attachLoop(videoB);

    videoA.addEventListener("playing", function () {
      markReady();
      // start buffering the second clip only once the first is actually
      // running, so mobile connections aren't asked to fetch both at once
      videoB.preload = "auto";
      videoB.load();
    }, { once: true });
    videoA.addEventListener("loadeddata", function () {
      videoA.classList.add("is-active");
      var p = videoA.play();
      if (p && p.catch) p.catch(function () {});
    }, { once: true });

    // if autoplay is blocked entirely, keep poster visible (graceful fallback)
  })();

  /* ============================================================
     Contacts map — reveal iframe once it loads, keep fallback under it
     ============================================================ */
  var mapFrame = document.getElementById("mapFrame");
  if (mapFrame) {
    mapFrame.addEventListener("load", function () {
      mapFrame.style.opacity = "1";
    });
  }

  /* ============================================================
     Scroll parallax — media gently recedes (zoom-out) on scroll.
     JS sets a --parallax scale from the section's scroll position
     (rAF-throttled, compositor-friendly); the smoothing between
     scroll steps is a short CSS transition on transform, so there is
     no self-driven loop that could stall.
     ============================================================ */
  (function scrollParallax() {
    var reduce = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = [].slice.call(document.querySelectorAll("[data-parallax]"));
    if (reduce || !items.length) return;

    items.forEach(function (el) {
      el._pMax = parseFloat(el.getAttribute("data-parallax-max")) || 1.12;
      el._pMode = el.getAttribute("data-parallax-mode") || "through";
    });

    var vh = window.innerHeight;
    var ticking = false;

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

    function update() {
      ticking = false;
      for (var i = 0; i < items.length; i++) {
        var el = items[i];
        var rect = el.parentElement.getBoundingClientRect();
        var p = el._pMode === "leave"
          ? clamp01(-rect.top / (rect.height || 1))
          : clamp01((vh - rect.top) / (vh + rect.height));
        var eased = p * (2 - p); // easeOutQuad — softer settle near the end
        el.style.setProperty("--parallax", (el._pMax - (el._pMax - 1) * eased).toFixed(4));
      }
    }

    function request() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", function () {
      vh = window.innerHeight;
      request();
    }, { passive: true });
    // if the tab was hidden (rAF is paused there), re-sync on return
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) { ticking = false; request(); }
    });

    update(); // set initial positions
  })();
})();
