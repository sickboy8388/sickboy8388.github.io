/* Mattia Pirro — portfolio
 * Vanilla JS, no dependencies. All strings are author-controlled (no user input),
 * so applying them via innerHTML is safe under the page CSP.
 */
(function () {
  "use strict";

  /* English translations. Italian is the markup default and is captured at load. */
  var EN = {
    "skip": "Skip to content",
    "nav.about": "About", "nav.skills": "Skills", "nav.chains": "Kill chains", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.certs": "Certifications", "nav.contact": "Contact",

    "hero.ticker": "ADVERSARY EMULATION · RED TEAMING · OFFENSIVE TOOLING · PENETRATION TESTING",
    "hero.eyebrow": "Red Team Operator · Adversary Emulation &amp; Offensive Tooling",
    "hero.sub": "Adversary emulation, red teaming and offensive tooling development for critical infrastructure.",
    "hero.lead": "I emulate real-world adversaries to test detection and response, build bespoke offensive tooling and bring years of penetration testing across aerospace, airport and public-sector infrastructure.",
    "hero.chip1": "Adversary emulation &amp; red teaming",
    "hero.chip2": "Offensive tooling &amp; automation",
    "hero.chip3": "CRTO · CRTP · MCRTA",
    "hero.cta1": "View projects", "hero.cta2": "Contact me",

    "snapshot.tag": "RECRUITER SNAPSHOT",
    "snapshot.status": "Available",
    "snapshot.title": "Offensive security with an adversary mindset.",
    "snapshot.desc": "Strong fit for red team, adversary emulation, offensive tooling and penetration testing roles in enterprise and high-criticality environments.",
    "snapshot.c1.t": "Adversary Emulation",
    "snapshot.c1.d": "Emulating real-world adversaries to validate blue team detection and response.",
    "snapshot.c2.t": "Offensive Tooling",
    "snapshot.c2.d": "Building bespoke offensive tools and recon engines for red team operations.",
    "snapshot.c3.t": "Red Team &amp; AD",
    "snapshot.c3.d": "Active Directory attacks, cloud and post-exploitation with TTPs mapped to ATT&amp;CK.",

    "about.tag": "ABOUT",
    "about.title": "A red teamer who thinks like an adversary and builds their own tools.",
    "about.b1.t": "Background",
    "about.b1.d": "I am a Red Team Operator based in Italy, with an MSc in Computer Science (Network and Security curriculum) from Sapienza University of Rome, graduated 110/110 with honours. Today I focus on adversary emulation and offensive tooling development in the defence and armed-forces domain, after years of penetration testing across aerospace, airport and public-sector infrastructure.",
    "about.b2.t": "Approach",
    "about.b2.d": "I emulate the tactics, techniques and procedures of real-world adversaries to test detection and response. I like to understand how a system really works, build bespoke tools when needed and translate attacks into clear reports and concrete remediation actions for defensive teams. I experiment with and validate techniques in a Proxmox home lab and document every operation methodically.",

    "skills.tag": "WHAT I DO",
    "skills.title": "Adversary mindset, offensive execution and bespoke tooling.",
    "skills.s1.t": "Adversary Emulation",
    "skills.s1.d": "Emulating real-world adversaries with TTPs mapped to MITRE ATT&amp;CK to validate blue team detection and response.",
    "skills.s2.t": "Red Team Operations",
    "skills.s2.d": "End-to-end operations with command &amp; control, defence evasion, lateral movement and persistence in enterprise environments.",
    "skills.s3.t": "Active Directory Attacks",
    "skills.s3.d": "Kerberoast, delegation, ACL abuse, RBCD, DCSync, Golden/Silver tickets and cross-forest and inter-forest escalation.",
    "skills.s4.t": "Offensive Tooling",
    "skills.s4.d": "Designing and building offensive tools and recon engines in Python, with plugin architectures and automation.",
    "skills.s5.t": "Cloud &amp; Web Exploitation",
    "skills.s5.d": "Multi-cloud red teaming (AWS, Azure, GCP) and web exploitation, with SSRF, IMDS, SQS and container escape chains.",
    "skills.s6.t": "Penetration Testing &amp; VA",
    "skills.s6.d": "Vulnerability assessment and penetration testing on networks and web applications, with manual exploitation and accurate reporting.",
    "skills.tools.t": "Tools &amp; technologies",

    "method.tag": "HOW I WORK",
    "method.title": "The lifecycle of a red team operation, from reconnaissance to debrief.",
    "method.m1.t": "Reconnaissance", "method.m1.d": "Mapping the attack surface and defining the objectives and rules of engagement for the operation.",
    "method.m2.t": "Initial access", "method.m2.d": "Gaining a foothold with realistic TTPs and establishing a resilient command &amp; control channel.",
    "method.m3.t": "Adversary emulation", "method.m3.d": "Escalation, lateral movement and persistence emulating a concrete adversary to put defences to the test.",
    "method.m4.t": "Report &amp; debrief", "method.m4.d": "Reconstructing the attack chain, providing detection recommendations and debriefing with the blue team.",

    "chains.tag": "ATTACK CHAINS",
    "chains.title": "Real kill chains reconstructed during operations.",
    "chains.desc": "Anonymised extracts of kill chains produced during adversary emulation engagements: hosts, parameters and client references are redacted. They show how an initial foothold evolves into lateral movement, exfiltration and actions on objectives.",
    "chains.leg.attacker": "Attack box", "chains.leg.web": "Web host", "chains.leg.db": "Database",
    "chains.leg.fs": "Filesystem", "chains.leg.mail": "Mail server",
    "chains.zoom": "Click to enlarge",
    "chains.c1.t": "External multi-host chain",
    "chains.c2.t": "Intranet chain",
    "chains.c1": "Multi-host chain: arbitrary file read, webshell and C2 beacon, filesystem enumeration, cleartext passwords, database access and SMTP open relay; in parallel, SQLi with os-shell and in-band XXE.",
    "chains.c2": "Intranet chain: SQLi and C2 beacon, MySQL root credentials hardcoded in crontab, database and CRM enumeration, password reuse for privileged access and CVE abuse for beacon installation.",
    "lightbox.hint": "Drag to pan · wheel or +/− to zoom · Esc to close",

    "exp.tag": "PROFESSIONAL EXPERIENCE",
    "exp.title": "Red teaming for defence, aerospace, airports, energy and public sector.",
    "exp.j0.date": "2024 — present", "exp.j0.role": "Red Team Operator",
    "exp.j0.b1": "<strong>Adversary emulation (defence &amp; armed forces):</strong> emulating the TTPs of APT groups mapped to MITRE ATT&amp;CK and the Cyber Kill Chain to assess detection, prevention and response capabilities on critical, high-classification infrastructure.",
    "exp.j0.b2": "<strong>Attack surface &amp; intelligence:</strong> mapping the internet-facing external surface and OSINT/SOCMINT reconnaissance, analysing open sources, social media and data leaks to build credible offensive narratives.",
    "exp.j0.b3": "<strong>Offensive tooling &amp; research:</strong> developing proprietary offensive tools and research in cybersecurity and hardware hacking to support operations.",
    "exp.j0.b4": "<strong>End-to-end operations:</strong> initial access, lateral movement and simulated exfiltration across Active Directory and endpoints, with structured documentation, CVSS 4.0 scoring and remediation guidance.",
    "exp.j1.date": "May 2022 — 2024", "exp.j1.role": "Cyber Security Consultant",
    "exp.j1.b1": "<strong>Thales Alenia Space:</strong> VA/PT on ground and satellite infrastructure, ground stations and communication networks across several European centres.",
    "exp.j1.b2": "<strong>ExoMars:</strong> comprehensive Security Management Plan and Risk Assessment, with security protocols and contingency plans.",
    "exp.j1.b3": "<strong>Aeroporti di Roma:</strong> network penetration testing on IT solutions in the airport environment.",
    "exp.j1.b4": "<strong>INPS:</strong> penetration testing on web applications and network shares across the domain.",
    "exp.j1.b5": "<strong>Enel:</strong> penetration testing on web assets and network shares.",
    "exp.j1.b6": "<strong>Leonardo:</strong> network engineer for SIEM migration for disaster recovery purposes.",
    "exp.j2.date": "Feb 2019 — Apr 2022", "exp.j2.role": "Cyber Security Consultant",
    "exp.j2.b1": "<strong>ESA — Key Management System:</strong> project leader and security engineer for a multi-host cryptographic key management system, FIPS compliance with HSMs for root-of-trust.",
    "exp.j2.b2": "<strong>ESA ISS — Penetration Testing:</strong> engagements on ground/space assets and communication systems of the International Space Station, across several European ESA centres.",
    "exp.j2.b3": "<strong>ESA ISS — Hardening:</strong> asset inventory, vulnerability assessment, patch management and configuration hardening on payloads and ground infrastructure.",

    "edu.tag": "EDUCATION",
    "edu.title": "Computer science, networks and security at Sapienza.",
    "edu.e1.t": "MSc in Computer Science",
    "edu.e1.d": "Sapienza University of Rome — 110/110 with honours. Network and Security curriculum. Thesis on semantic-relation analysis between script commands using Word Embedding and Deep Learning.",
    "edu.e2.t": "BSc in Computer Science",
    "edu.e2.d": "Sapienza University of Rome — 94/110. Thesis on a reference architecture for a Federated Cloud model.",
    "edu.e3.t": "Scientific High School",
    "edu.e3.d": "\"L. Spallanzani\" Scientific Lyceum, Tivoli (RM).",

    "proj.tag": "PROJECTS &amp; TOOLING",
    "proj.title": "Offensive tooling, vulnerability research and writeups.",
    "proj.desc": "Personal and research projects that show how I build tools, hunt for vulnerabilities and document real attack chains.",
    "proj.p1.kind": "Recon & OSINT Engine",
    "proj.p1.d": "A Python red-team recon and OSINT engine that orchestrates 40+ tools into a knowledge graph: subdomain enumeration, ASN mapping, an identity/social axis (Sherlock, Maigret, Holehe, h8mail) and data enrichment with a web dashboard. Modular plugin architecture (Registry, Strategy, Observer/SSE), Docker deployment with OIDC authentication via Keycloak and an MkDocs wiki.",
    "proj.p5.kind": "Offensive Security Toolkit",
    "proj.p5.d": "An offensive security toolkit that bridges an AI assistant to a dockerized Kali Linux via the Model Context Protocol. Minimal mode exposes infrastructure tools plus ~200 specialised wrappers (network, pwn, crypto, forensics) reachable through catalog discovery, with sessions, an artifact store and asynchronous jobs.",
    "proj.link": "View on GitHub",
    "proj.p2.kind": "Security Research",
    "proj.p2.d": "Security code review of a 2023 DevExtreme release to hunt for dormant n-days in the absence of a vendor security program. Static analysis of the code base looking for exploitable vulnerabilities.",
    "proj.p3.kind": "CTF / Red Team",
    "proj.p3.d": "A collection of Hack The Box writeups: multi-domain Active Directory Insane boxes with cross-realm Kerberos and AD CS chains (ESC13 → RBCD → DCSync → ESC1) and, last, Hard cloud boxes with SSRF → IMDS → SQS → container escape chains on AWS.",
    "proj.p3.link": "View on GitHub",
    "proj.p4.kind": "Active Directory",
    "proj.p4.d": "Structured preparation material for attacking Active Directory environments: Kerberoasting, DCSync, RBCD, trust exploitation, database-link abuse and cross-forest chains.",

    "cert.tag": "CERTIFICATIONS",
    "cert.title": "Skills validated in the field.",
    "cert.crto.d": "A hands-on adversary simulation certification with Cobalt Strike: Active Directory attacks, command &amp; control, defence evasion, lateral movement and persistence in enterprise environments.",
    "cert.crtp.d": "Active Directory enumeration and escalation: Kerberoast, delegation, abuse of protected groups, dominance with Golden/Silver tickets, DCSync, ACL abuse and cross-forest and inter-forest escalation.",
    "cert.mcrta.d": "Red teaming across multi-cloud environments (AWS, Azure and Google Cloud) with a hands-on approach to attacking and escalating cloud platforms.",
    "cert.link": "View credential",
    "cert.c1.d": "A hands-on Hack The Box certification (formerly CBBH) on web exploitation and web application penetration testing: spotting security issues, chaining vulnerabilities for maximum impact and producing commercial-grade reports.",

    "conf.tag": "CONFERENCES &amp; WORKSHOPS",
    "conf.title": "Talks at the ESA ISS Security workshops.",
    "conf.f1.t": "KaaS — Key Management System as a Service",
    "conf.f1.d": "Proof of concept of a proxy that distributes cryptographic keys to trusted systems, with keys managed on a commercial key management system (Thales).",
    "conf.f2.t": "Identity Provider &amp; MFA",
    "conf.f2.d": "Demo of a web server with three areas protected by different authentication methods: OTP, GridSure and X.509 certificate.",
    "conf.f3.t": "Data Protection on SCB infrastructure",
    "conf.f3.d": "Extending an OpenKM document management solution with AES encryption/decryption of keys provided by a commercial key management system (Thales).",

    "contact.tag": "CONTACT",
    "contact.title": "Let's talk.",
    "contact.desc": "Available for red team, adversary emulation, offensive tooling and penetration testing roles.",
    "contact.email": "Email",
    "contact.location": "Location", "contact.locationv": "Guidonia (Rome), Italy",
    "contact.langs": "Languages", "contact.langsv": "Italian (native) · English (C1)",

    "footer.tag": "Red Team Operator · Adversary Emulation &amp; Offensive Tooling",
    "footer.top": "Back to top ↑"
  };

  var HERO_TICKER = {
    it: "VULNERABILITY ASSESSMENT · PENETRATION TESTING · RED TEAM · SVILUPPO SICURO"
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var IT = {};
  nodes.forEach(function (el) { IT[el.getAttribute("data-i18n")] = el.innerHTML; });
  // Italian ticker override (markup default is uppercase EN-flavoured; keep IT variant)
  if (IT["hero.ticker"]) IT["hero.ticker"] = HERO_TICKER.it;

  var DICT = { it: IT, en: EN };

  function chainSrc(base, lang) {
    return base + (lang === "en" ? ".en" : "") + ".svg";
  }

  function applyLang(lang) {
    var dict = DICT[lang] || DICT.it;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    var btn = document.getElementById("langToggle");
    if (btn) {
      var flag = btn.querySelector(".lang-flag");
      var alt = btn.querySelector(".lang-alt");
      if (lang === "it") { flag.textContent = "IT"; alt.textContent = "EN"; }
      else { flag.textContent = "EN"; alt.textContent = "IT"; }
    }
    /* Swap kill-chain diagrams to the localised (IT/EN) SVGs */
    Array.prototype.forEach.call(document.querySelectorAll(".chain-thumb"), function (t) {
      var base = t.getAttribute("data-chain-base");
      if (!base) return;
      var img = t.querySelector("img");
      if (img) img.setAttribute("src", chainSrc(base, lang));
    });
    try { localStorage.setItem("mp-lang", lang); } catch (e) {}
  }

  var current = "it";
  try {
    var saved = localStorage.getItem("mp-lang");
    if (saved === "en" || saved === "it") current = saved;
  } catch (e) {}
  applyLang(current);

  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      current = current === "it" ? "en" : "it";
      applyLang(current);
    });
  }

  /* Mobile nav */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Auto year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Reveal-on-scroll */
  var revealTargets = document.querySelectorAll(".section, .hero-inner");
  revealTargets.forEach(function (el) { el.setAttribute("data-reveal", ""); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Kill-chain lightbox: zoom + pan on the pre-rendered Mermaid SVGs */
  var lightbox = document.getElementById("lightbox");
  var thumbs = document.querySelectorAll(".chain-thumb");
  if (lightbox && thumbs.length) {
    var lbImg = document.getElementById("lightboxImg");
    var lbTitle = document.getElementById("lightboxTitle");
    var lbStage = document.getElementById("lightboxStage");
    var lastFocus = null;
    var scale = 1, tx = 0, ty = 0;
    var dragging = false, startX = 0, startY = 0;

    function render() {
      lbImg.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + scale + ")";
    }
    function reset() { scale = 1; tx = 0; ty = 0; render(); }
    function setScale(next) {
      scale = Math.min(6, Math.max(0.5, next));
      render();
    }

    function open(src, alt, titleKey) {
      lbImg.setAttribute("src", src);
      lbImg.setAttribute("alt", alt || "");
      if (lbTitle) {
        var dict = DICT[current] || DICT.it;
        lbTitle.textContent = (titleKey && dict[titleKey]) ? dict[titleKey] : "";
      }
      reset();
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      requestAnimationFrame(function () { lightbox.classList.add("open"); });
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      window.setTimeout(function () {
        lightbox.hidden = true;
        lbImg.setAttribute("src", "");
      }, 220);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    thumbs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        lastFocus = btn;
        var img = btn.querySelector("img");
        open(chainSrc(btn.getAttribute("data-chain-base"), current),
             img ? img.getAttribute("alt") : "",
             btn.getAttribute("data-chain-title"));
      });
    });

    var zi = document.getElementById("lbZoomIn");
    var zo = document.getElementById("lbZoomOut");
    var zr = document.getElementById("lbReset");
    var zc = document.getElementById("lbClose");
    if (zi) zi.addEventListener("click", function () { setScale(scale * 1.3); });
    if (zo) zo.addEventListener("click", function () { setScale(scale / 1.3); });
    if (zr) zr.addEventListener("click", reset);
    if (zc) zc.addEventListener("click", close);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target === lbStage) close();
    });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "+" || e.key === "=") setScale(scale * 1.3);
      else if (e.key === "-") setScale(scale / 1.3);
      else if (e.key === "0") reset();
    });

    lbStage.addEventListener("wheel", function (e) {
      if (lightbox.hidden) return;
      e.preventDefault();
      setScale(scale * (e.deltaY < 0 ? 1.12 : 0.89));
    }, { passive: false });

    lbStage.addEventListener("pointerdown", function (e) {
      dragging = true; startX = e.clientX - tx; startY = e.clientY - ty;
      lbStage.classList.add("grabbing");
      lbStage.setPointerCapture(e.pointerId);
    });
    lbStage.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      tx = e.clientX - startX; ty = e.clientY - startY; render();
    });
    function endDrag() { dragging = false; lbStage.classList.remove("grabbing"); }
    lbStage.addEventListener("pointerup", endDrag);
    lbStage.addEventListener("pointercancel", endDrag);
  }
})();
