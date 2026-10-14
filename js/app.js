/**
 * Unstable SMP Chronicles - Main Application Controller
 * 音效合成器、粒子背景、角色切換器、劇集影院與全域搜尋引擎
 */

// 1. Web Audio API 音效合成引擎 (零外部依賴、純原生合成 Minecraft 音效，延遲初始化避免載入阻滯)
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  initContext() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  ensureState() {
    this.initContext();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // 點擊音效 (Minecraft 介面按鈕點擊聲)
  playClick() {
    if (!this.enabled) return;
    this.ensureState();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  // 獲得物品 / 升級音效 (Minecraft 拾取經驗球經典叮咚聲)
  playItemGain() {
    if (!this.enabled) return;
    this.ensureState();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    const playNote = (freq, delay) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + delay);

      gain.gain.setValueAtTime(0.18, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 0.2);
    };

    playNote(880, 0);     // A5
    playNote(1318.5, 0.08); // E6
  }

  // 伺服器異常 / 漏洞音效 (低音共振)
  playGlitchHum() {
    if (!this.enabled) return;
    this.ensureState();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(55, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.28);
  }
}

// 2. 懸浮粒子背景動畫 (極致性能優化：支援完全關閉、滾動時暫停、限制 30FPS、減少粒子數量)
class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.maxParticles = 14; // 精簡至 14 顆微粒，極大幅降低 CPU/GPU 負擔
    this.themeColor = "rgba(56, 189, 248, ";
    this.mouseX = null;
    this.mouseY = null;
    this.lastFrameTime = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.isPaused = false;
    this.isEnabled = true;
    this.animId = null;

    this.resize();
    this.initParticles();
    this.bindEvents();
    this.start();
  }

  setTheme(colorRgb) {
    this.themeColor = colorRgb;
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    if (!this.canvas || !this.isEnabled || this.animId) return;
    this.canvas.style.display = "block";
    this.animId = requestAnimationFrame((t) => this.animate(t));
  }

  stop() {
    this.isEnabled = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.canvas) {
      this.canvas.style.display = "none";
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  toggle(enable) {
    if (enable === undefined) enable = !this.isEnabled;
    if (enable) {
      this.isEnabled = true;
      this.start();
    } else {
      this.stop();
    }
    return this.isEnabled;
  }

  bindEvents() {
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.resize(), 200);
    }, { passive: true });

    // 滾動時立即暫停 Canvas 繪製，將 100% 算力留給頁面平滑滾動
    window.addEventListener("scroll", () => {
      this.isScrolling = true;
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    }, { passive: true });

    // 分頁切換到後台時完全停止渲染
    document.addEventListener("visibilitychange", () => {
      this.isPaused = document.hidden;
    });

    let mouseMoveThrottle = false;
    window.addEventListener("mousemove", (e) => {
      if (!this.isEnabled) return;
      if (!mouseMoveThrottle) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        mouseMoveThrottle = true;
        setTimeout(() => { mouseMoveThrottle = false; }, 50);
      }
    }, { passive: true });

    window.addEventListener("mouseleave", () => {
      this.mouseX = null;
      this.mouseY = null;
    }, { passive: true });
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.45 + 0.15
      });
    }
  }

  animate(timestamp) {
    if (!this.isEnabled) return;
    this.animId = requestAnimationFrame((t) => this.animate(t));

    // 當滾動中、分頁在後台、或未達 30FPS 刷新時間間隔時，直接跳過重繪
    if (this.isScrolling || this.isPaused) return;
    if (timestamp - this.lastFrameTime < 33) return; // 鎖定 30FPS，節省繪圖算力
    this.lastFrameTime = timestamp;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let p of this.particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      // 邊界循環
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // 互動游標微排斥
      if (this.mouseX !== null && this.mouseY !== null) {
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const distSq = dx * dx + dy * dy;
        if (distSq < 4900) { // 70px 距離內
          const dist = Math.sqrt(distSq);
          p.x += (dx / dist) * 1.2;
          p.y += (dy / dist) * 1.2;
        }
      }

      this.ctx.fillStyle = `${this.themeColor}${p.alpha})`;
      this.ctx.fillRect(p.x, p.y, p.size, p.size);
    }
  }
}

// 3. 主要應用控制器
class AppController {
  constructor() {
    this.soundEngine = new SoundEngine();
    this.particleCanvas = new ParticleCanvas("particles-canvas");
    this.activeCharacterId = "parrot"; // 預設展示 Parrot
    this.activeCharSubtab = "arcs"; // 'arcs' | 'items' | 'videos'
    
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupCharacterHeroNav();
    this.renderCharacterDeepDive(this.activeCharacterId);
    this.renderTimelineMatrix();
    this.setupModals();
    this.setupSearch();
    this.setupAudioToggle();
    this.setupPerformanceToggle();

    // 初始化小遊戲
    new QuestGameEngine(UNSTABLE_DATA, this.soundEngine);
  }

  setupPerformanceToggle() {
    const perfBtn = document.getElementById("perf-toggle-btn");
    if (!perfBtn) return;

    // 檢查存檔或自動偵測 (低核 CPU 或移動端預設開啟效能模式)
    const savedPerf = localStorage.getItem("unstable_perf_mode");
    const isMobileOrLowEnd = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialPerf = savedPerf !== null ? savedPerf === "true" : isMobileOrLowEnd;
    this.setPerformanceMode(initialPerf);

    perfBtn.addEventListener("click", () => {
      const current = document.body.classList.contains("perf-mode");
      this.setPerformanceMode(!current);
      this.soundEngine.playClick();
    });
  }

  setPerformanceMode(enable) {
    const perfBtn = document.getElementById("perf-toggle-btn");
    document.body.classList.toggle("perf-mode", enable);
    if (perfBtn) {
      perfBtn.classList.toggle("active", enable);
      perfBtn.title = enable 
        ? "極速效能模式已開啟 (微粒動畫與高耗能陰影已關閉，點擊恢復特效)" 
        : "切換極速效能模式 (停用背景微粒與陰影)";
    }
    this.particleCanvas?.toggle(!enable);
    localStorage.setItem("unstable_perf_mode", enable);
  }

  setupAudioToggle() {
    const audioBtn = document.getElementById("audio-toggle-btn");
    if (!audioBtn) return;
    
    audioBtn.addEventListener("click", () => {
      const isEnabled = this.soundEngine.toggle();
      audioBtn.classList.toggle("active", isEnabled);
      audioBtn.innerHTML = isEnabled 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
      if (isEnabled) this.soundEngine.playItemGain();
    });
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        this.soundEngine.playClick();
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }

  setupCharacterHeroNav() {
    const charCards = document.querySelectorAll(".hero-char-card");
    charCards.forEach(card => {
      card.addEventListener("click", () => {
        const charId = card.getAttribute("data-char-id");
        if (charId && UNSTABLE_DATA.characters[charId]) {
          this.switchCharacter(charId);
          // 平滑滾動到角色深度專區
          document.getElementById("character-section")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  switchCharacter(charId) {
    if (this.activeCharacterId === charId) return;
    this.soundEngine.playClick();
    this.activeCharacterId = charId;
    const char = UNSTABLE_DATA.characters[charId];

    // 更新全局 CSS 變數與粒子顏色
    document.documentElement.style.setProperty("--theme-current", char.themeColor);
    document.documentElement.style.setProperty("--theme-glow", char.accentGlow);

    if (charId === "parrot") this.particleCanvas.setTheme("rgba(56, 189, 248, ");
    if (charId === "wemmbu") this.particleCanvas.setTheme("rgba(245, 158, 11, ");
    if (charId === "spoke") this.particleCanvas.setTheme("rgba(16, 185, 129, ");
    if (charId === "flamefrags") this.particleCanvas.setTheme("rgba(249, 115, 22, ");

    // 更新導覽列卡片選取狀態
    document.querySelectorAll(".hero-char-card").forEach(c => {
      c.classList.toggle("active", c.getAttribute("data-char-id") === charId);
    });

    this.renderCharacterDeepDive(charId);
  }

  renderCharacterDeepDive(charId) {
    const container = document.getElementById("character-deep-dive-mount");
    if (!container) return;

    const char = UNSTABLE_DATA.characters[charId];
    if (!char) return;

    this.portraitViewMode = this.portraitViewMode || "avatar";

    // 渲染角色主面板
    container.innerHTML = `
      <div class="character-detail-container fade-in" style="border-color: ${char.themeColor};">
        <div class="char-hero-banner">
          <div class="char-portrait-box">
            <!-- 視角切換器 (官方形象照 / 3D 遊戲皮膚) -->
            <div class="photo-switch-bar">
              <button class="photo-switch-btn ${this.portraitViewMode === 'avatar' ? 'active' : ''}" data-view="avatar">
                📸 現今官方形象照
              </button>
              <button class="photo-switch-btn ${this.portraitViewMode === 'skin' ? 'active' : ''}" data-view="skin">
                🧊 3D 遊戲皮膚
              </button>
            </div>

            <div class="portrait-visual-frame">
              ${this.portraitViewMode === 'avatar'
                ? `<img src="${char.avatar}" alt="${char.name}" class="char-avatar-render" decoding="async" title="${char.name} 當前官方形象照">`
                : `<img src="${char.skinBody}" alt="${char.name}" class="char-skin-render" decoding="async" title="${char.name} 遊戲內 3D 皮膚">`
              }
            </div>

            <span class="char-role-badge">${char.badge}</span>
          </div>

          <div class="char-info-col">
            <h2>${char.name}</h2>
            <div class="char-title">${char.roleTitle}</div>
            <div class="char-quote">${char.tagline}</div>
            <div class="char-bio">${char.biography}</div>

            <!-- 戰術數值條 -->
            <div class="char-stats-grid">
              <div class="stat-item">
                <span class="stat-label">智謀破譯</span>
                <div class="stat-val-row">
                  <span class="stat-value">${char.stats.intellect}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.intellect}%;"></div></div>
              </div>

              <div class="stat-item">
                <span class="stat-label">戰略大局</span>
                <div class="stat-val-row">
                  <span class="stat-value">${char.stats.strategy}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.strategy}%;"></div></div>
              </div>

              <div class="stat-item">
                <span class="stat-label">近戰格鬥</span>
                <div class="stat-val-row">
                  <span class="stat-value">${char.stats.pvpCombat}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.pvpCombat}%;"></div></div>
              </div>

              <div class="stat-item">
                <span class="stat-label">全服號召</span>
                <div class="stat-val-row">
                  <span class="stat-value">${char.stats.influence}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.influence}%;"></div></div>
              </div>

              <div class="stat-item">
                <span class="stat-label">潛行匿蹤</span>
                <div class="stat-val-row">
                  <span class="stat-value">${char.stats.stealth}</span>
                </div>
                <div class="stat-bar-bg"><div class="stat-bar-fill" style="width: ${char.stats.stealth}%;"></div></div>
              </div>
            </div>

            <!-- 當前長相與外貌特徵解析卡片 -->
            <div class="appearance-card">
              <div class="appearance-card-header">
                <div class="appearance-card-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  <span>現今外貌與長相特徵解析 (Current Look & Appearance)</span>
                </div>
                <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--theme-current); background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">OFFICIAL PFP & SKIN</span>
              </div>
              <div class="appearance-card-summary">${char.appearance.summary}</div>
              <ul class="appearance-features-list">
                ${char.appearance.features.map(f => `<li>${f}</li>`).join("")}
              </ul>
              <div class="faceless-notice">
                💡 創作者說明：所有主角在現實中均為未公開真容的創作者（Faceless），全球社群所熟知的代表性長相即為此官方繪師形象與專屬 3D 外觀。
              </div>
            </div>
          </div>
        </div>

        <!-- 子分頁按鈕 (劇情紀元 / 意外禁忌物品 / 核心影片) -->
        <div class="char-subtabs">
          <button class="char-subtab-btn ${this.activeCharSubtab === 'arcs' ? 'active' : ''}" data-subtab="arcs">
            📜 個人劇情紀元 (${char.storyArcs.length})
          </button>
          <button class="char-subtab-btn ${this.activeCharSubtab === 'items' ? 'active' : ''}" data-subtab="items">
            ⚡ 意外獲得之神器與漏洞產物 (${char.unexpectedItems.length})
          </button>
          <button class="char-subtab-btn ${this.activeCharSubtab === 'videos' ? 'active' : ''}" data-subtab="videos">
            🎬 所有核心影片與深度解說 (${char.videos.length})
          </button>
        </div>

        <!-- 分頁內容容器 -->
        <div id="char-subtab-content">
          ${this.getSubtabHtml(char, this.activeCharSubtab)}
        </div>
      </div>
    `;

    // 綁定官方形象照與 3D 皮膚切換事件
    container.querySelectorAll(".photo-switch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.soundEngine.playClick();
        this.portraitViewMode = btn.getAttribute("data-view");
        this.renderCharacterDeepDive(charId);
      });
    });

    // 綁定子分頁點擊事件
    container.querySelectorAll(".char-subtab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.soundEngine.playClick();
        const tab = btn.getAttribute("data-subtab");
        this.activeCharSubtab = tab;
        container.querySelectorAll(".char-subtab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const contentBox = document.getElementById("char-subtab-content");
        if (contentBox) {
          contentBox.innerHTML = this.getSubtabHtml(char, tab);
          this.bindSubtabDynamicEvents(contentBox);
        }
      });
    });

    this.bindSubtabDynamicEvents(container);
  }

  getSubtabHtml(char, tabKey) {
    if (tabKey === "arcs") {
      return `
        <div class="story-arcs-list fade-in">
          ${char.storyArcs.map((arc, i) => `
            <div class="story-arc-card">
              <div class="arc-header">
                <span class="arc-num">ARC 0${i + 1}</span>
                <h4 class="arc-title">${arc.title}</h4>
              </div>
              <p class="arc-desc">${arc.summary}</p>
            </div>
          `).join("")}
        </div>
      `;
    }

    if (tabKey === "items") {
      return `
        <div class="unexpected-items-grid fade-in">
          ${char.unexpectedItems.map(item => `
            <div class="item-card" style="--item-rarity-color: ${item.rarityColor};">
              <div class="item-top-row">
                <div class="item-name">${item.name}</div>
                <span class="item-rarity-tag" style="background: ${item.rarityColor}20; color: ${item.rarityColor}; border: 1px solid ${item.rarityColor}60;">
                  ${item.rarity}
                </span>
              </div>
              <div class="item-origin-box">
                <div class="item-origin-title">取得途徑與意外由來</div>
                <div class="item-origin-desc">${item.howAcquired}</div>
              </div>
              <p class="item-effect-desc">${item.effectDesc}</p>
              <div class="item-nbt-code">${item.glitchCode}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    if (tabKey === "videos") {
      return `
        <div class="videos-grid fade-in">
          ${char.videos.map(vid => `
            <div class="video-card">
              <div class="video-thumb-container" data-video-id="${vid.id}" data-video-title="${vid.titleZh}">
                <img src="${vid.thumbnail}" alt="${vid.title}" class="video-thumb" loading="lazy" decoding="async">
                <div class="video-play-overlay">
                  <div class="play-circle">
                    <div class="play-triangle"></div>
                  </div>
                </div>
                <span class="video-duration">${vid.duration}</span>
              </div>
              <div class="video-meta-content">
                <div class="video-title-row">
                  <div class="video-title-en">${vid.title}</div>
                  <div class="video-title-zh">${vid.titleZh}</div>
                </div>
                <p class="video-summary">${vid.summary}</p>
                <div class="video-loot-badge">
                  <span>✦ 獲得關鍵意外物資:</span>
                  <strong>${vid.unexpectedLoot}</strong>
                </div>
                <div class="video-btn-row">
                  <button class="btn-video-watch btn-open-theater" data-video-id="${vid.id}" data-video-title="${vid.titleZh}">
                    ▶ 於影院播放解說
                  </button>
                  <a href="${vid.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-watch" style="flex: 0 0 42px;" title="在 YouTube 上觀看">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    return "";
  }

  bindSubtabDynamicEvents(scopeElement) {
    // 綁定影片彈窗播放
    const playTriggers = scopeElement.querySelectorAll(".video-thumb-container, .btn-open-theater");
    playTriggers.forEach(el => {
      el.addEventListener("click", () => {
        const vidId = el.getAttribute("data-video-id");
        const vidTitle = el.getAttribute("data-video-title");
        if (vidId) {
          this.openVideoTheater(vidId, vidTitle);
        }
      });
    });
  }

  renderTimelineMatrix() {
    const container = document.getElementById("timeline-mount");
    if (!container) return;

    container.innerHTML = `
      <div class="timeline-container fade-in">
        ${UNSTABLE_DATA.timelineMatrix.map((item, index) => `
          <div class="timeline-epoch-card">
            <div class="epoch-header">
              <span class="epoch-badge">EPOCH ${index + 1}</span>
              <h3 class="epoch-headline">${item.epoch}</h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 4px;">${item.headline}</p>
            </div>
            <div class="epoch-pov-grid">
              <!-- Parrot POV -->
              <div class="pov-box" style="--pov-color: var(--parrot-color);">
                <div class="pov-char-tag">
                  <img src="${UNSTABLE_DATA.characters.parrot.avatar}" class="pov-avatar" alt="Parrot" loading="lazy" decoding="async">
                  <span class="pov-name">Parrot</span>
                </div>
                <p class="pov-action-text">${item.details.parrot}</p>
              </div>

              <!-- Wemmbu POV -->
              <div class="pov-box" style="--pov-color: var(--wemmbu-color);">
                <div class="pov-char-tag">
                  <img src="${UNSTABLE_DATA.characters.wemmbu.avatar}" class="pov-avatar" alt="Wemmbu" loading="lazy" decoding="async">
                  <span class="pov-name">Wemmbu</span>
                </div>
                <p class="pov-action-text">${item.details.wemmbu}</p>
              </div>

              <!-- Spoke POV -->
              <div class="pov-box" style="--pov-color: var(--spoke-color);">
                <div class="pov-char-tag">
                  <img src="${UNSTABLE_DATA.characters.spoke.avatar}" class="pov-avatar" alt="Spoke" loading="lazy" decoding="async">
                  <span class="pov-name">Spoke</span>
                </div>
                <p class="pov-action-text">${item.details.spoke}</p>
              </div>

              <!-- FlameFrags POV -->
              <div class="pov-box" style="--pov-color: var(--flame-color);">
                <div class="pov-char-tag">
                  <img src="${UNSTABLE_DATA.characters.flamefrags.avatar}" class="pov-avatar" alt="FlameFrags" loading="lazy" decoding="async">
                  <span class="pov-name">FlameFrags</span>
                </div>
                <p class="pov-action-text">${item.details.flamefrags}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  setupModals() {
    // 影院彈窗
    const theaterModal = document.getElementById("theater-modal");
    const closeBtn = document.getElementById("btn-close-theater");
    
    if (closeBtn && theaterModal) {
      closeBtn.addEventListener("click", () => {
        theaterModal.classList.remove("open");
        const iframe = document.getElementById("theater-iframe");
        if (iframe) iframe.src = "";
      });
    }

    theaterModal?.addEventListener("click", (e) => {
      if (e.target === theaterModal) {
        theaterModal.classList.remove("open");
        const iframe = document.getElementById("theater-iframe");
        if (iframe) iframe.src = "";
      }
    });
  }

  openVideoTheater(videoId, videoTitle) {
    this.soundEngine.playClick();
    const modal = document.getElementById("theater-modal");
    const titleEl = document.getElementById("theater-title");
    const iframe = document.getElementById("theater-iframe");

    if (!modal || !iframe) return;

    if (titleEl) titleEl.textContent = videoTitle || "Unstable SMP 影片播放影院";
    
    // 如果是合法 YouTube 識別碼則載入嵌入，否則引導至 YouTube 搜尋
    if (videoId && !videoId.startsWith("unstable_")) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } else {
      iframe.src = `https://www.youtube.com/embed/soYelcGVPac?autoplay=1&rel=0`;
    }

    modal.classList.add("open");
  }

  setupSearch() {
    const searchModal = document.getElementById("search-modal");
    const searchInput = document.getElementById("global-search-input");
    const searchResults = document.getElementById("search-results-list");
    const searchTrigger = document.getElementById("search-trigger-btn");
    const closeSearch = document.getElementById("btn-close-search");

    const openSearch = () => {
      this.soundEngine.playClick();
      searchModal?.classList.add("open");
      searchInput?.focus();
    };

    const closeSearchModal = () => {
      searchModal?.classList.remove("open");
      if (searchInput) searchInput.value = "";
    };

    searchTrigger?.addEventListener("click", openSearch);
    closeSearch?.addEventListener("click", closeSearchModal);
    searchModal?.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearchModal();
    });

    // 快捷鍵 Ctrl+K / Cmd+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") {
        closeSearchModal();
        document.getElementById("theater-modal")?.classList.remove("open");
      }
    });

    // 即時模糊搜尋全部資料
    searchInput?.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!searchResults) return;

      if (!q) {
        searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">輸入主角、影片、或意外物品關鍵字...</div>`;
        return;
      }

      const results = [];

      // 搜尋主角
      Object.values(UNSTABLE_DATA.characters).forEach(char => {
        if (char.name.toLowerCase().includes(q) || char.roleTitle.toLowerCase().includes(q)) {
          results.push({
            type: "主角檔案",
            title: char.name,
            sub: char.roleTitle,
            action: () => {
              this.switchCharacter(char.id);
              document.getElementById("character-section")?.scrollIntoView({ behavior: "smooth" });
              closeSearchModal();
            }
          });
        }

        // 搜尋物品
        char.unexpectedItems.forEach(item => {
          if (item.name.toLowerCase().includes(q) || item.howAcquired.toLowerCase().includes(q)) {
            results.push({
              type: "意外神器",
              title: item.name,
              sub: `來自: ${char.name} · ${item.rarity}`,
              action: () => {
                this.switchCharacter(char.id);
                this.activeCharSubtab = "items";
                this.renderCharacterDeepDive(char.id);
                document.getElementById("character-section")?.scrollIntoView({ behavior: "smooth" });
                closeSearchModal();
              }
            });
          }
        });

        // 搜尋影片
        char.videos.forEach(vid => {
          if (vid.title.toLowerCase().includes(q) || vid.titleZh.toLowerCase().includes(q) || vid.summary.toLowerCase().includes(q)) {
            results.push({
              type: "影片檔案",
              title: vid.titleZh,
              sub: `${char.name} · ${vid.title}`,
              action: () => {
                this.openVideoTheater(vid.id, vid.titleZh);
                closeSearchModal();
              }
            });
          }
        });
      });

      if (results.length === 0) {
        searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">未找到與「${q}」相符的結果</div>`;
        return;
      }

      searchResults.innerHTML = results.slice(0, 8).map((r, i) => `
        <div class="search-result-item" data-res-idx="${i}">
          <div>
            <div style="font-weight: 600; color: #fff; font-size: 0.95rem;">${r.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${r.sub}</div>
          </div>
          <span style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--theme-current); background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px;">
            ${r.type}
          </span>
        </div>
      `).join("");

      searchResults.querySelectorAll(".search-result-item").forEach(itemEl => {
        itemEl.addEventListener("click", () => {
          const idx = parseInt(itemEl.getAttribute("data-res-idx"), 10);
          results[idx]?.action();
        });
      });
    });
  }
}

// 啟動應用
document.addEventListener("DOMContentLoaded", () => {
  window.app = new AppController();
});
