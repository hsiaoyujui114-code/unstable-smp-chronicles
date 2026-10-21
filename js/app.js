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

// 2. Unstable SMP 虛空異常與代碼崩解微粒背景 (專屬風格：飄浮虛空代碼、哭泣黑曜石方塊像質、偶發裂隙微電弧)
class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.maxParticles = 20; // 鎖定 20 顆精緻微粒，兼顧極致震撼與零算力負擔 (CPU < 0.2%)
    this.themeRgb = "56, 189, 248"; // 預設藍 (Parrot)
    this.mouseX = null;
    this.mouseY = null;
    this.lastFrameTime = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.isPaused = false;
    this.isEnabled = true;
    this.animId = null;

    // 偶發虛空微電弧計時
    this.lastAnomalyTime = 0;
    this.activeArc = null;

    // Unstable SMP 宇宙關鍵詞與代碼漏洞符文
    this.runes = [
      "NULL", "0x7F", "VOID", "ERR", "§k01", "✦", "PARAGON", 
      "TERMINUS", "ANOMALY", "0x00", "NaN", "CORRUPT", "0101"
    ];

    this.resize();
    this.initParticles();
    this.bindEvents();
    this.start();
  }

  setTheme(colorRgb) {
    // 支援傳入 "rgba(56, 189, 248, " 或包含數字的色彩字串
    const match = String(colorRgb).match(/\d+,\s*\d+,\s*\d+/);
    if (match) {
      this.themeRgb = match[0];
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      const isRune = i % 2 === 0;
      this.particles.push({
        x: Math.random() * (this.canvas ? this.canvas.width : window.innerWidth),
        y: Math.random() * (this.canvas ? this.canvas.height : window.innerHeight),
        size: isRune ? 9 : (Math.random() * 3 + 2), // 方塊 2-5px，符文 9px
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.45 - 0.15, // 模擬麥塊哭泣黑曜石淚滴微粒緩緩向上飄逸
        alpha: Math.random() * 0.32 + 0.12,
        baseAlpha: Math.random() * 0.32 + 0.12,
        isRune: isRune,
        text: this.runes[Math.floor(Math.random() * this.runes.length)],
        glitchCooldown: Math.floor(Math.random() * 120),
        colorVariant: i % 3 // 0: 主題色, 1: 虛空紫 (Crying Obsidian), 2: 幽匿青
      });
    }
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

    // 滾動時立即暫停 Canvas 繪製，將 100% 算力留給頁面平滑滾動 (零掉幀防護)
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
        setTimeout(() => { mouseMoveThrottle = false; }, 40);
      }
    }, { passive: true });

    window.addEventListener("mouseleave", () => {
      this.mouseX = null;
      this.mouseY = null;
    }, { passive: true });
  }

  animate(timestamp) {
    if (!this.isEnabled) return;
    this.animId = requestAnimationFrame((t) => this.animate(t));

    // 當滾動中、分頁在後台、或未達 30FPS 刷新時間間隔時，直接跳過重繪 (抗卡頓核心)
    if (this.isScrolling || this.isPaused) return;
    if (timestamp - this.lastFrameTime < 33) return; // 鎖定 ~30FPS
    this.lastFrameTime = timestamp;

    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    // 處理偶發虛空微電弧 / 異常裂隙 (每 5-7 秒觸發一次微弱電弧放電)
    if (!this.activeArc && timestamp - this.lastAnomalyTime > 5500) {
      if (Math.random() < 0.45 && this.particles.length > 2) {
        const p1 = this.particles[Math.floor(Math.random() * this.particles.length)];
        let p2 = null;
        let minD = 260;
        for (let p of this.particles) {
          if (p === p1) continue;
          const d = Math.hypot(p.x - p1.x, p.y - p1.y);
          if (d < minD && d > 35) {
            minD = d;
            p2 = p;
          }
        }
        if (p2) {
          this.activeArc = {
            x1: p1.x, y1: p1.y,
            x2: p2.x, y2: p2.y,
            life: 6, // 6 幀 (~200ms)
            midOffset: (Math.random() - 0.5) * 35
          };
          this.lastAnomalyTime = timestamp;
        }
      }
    }

    // 繪製虛空微電弧 (Unstable 宇宙裂隙特徵)
    if (this.activeArc) {
      const arc = this.activeArc;
      this.ctx.beginPath();
      this.ctx.moveTo(arc.x1, arc.y1);
      const mx = (arc.x1 + arc.x2) / 2 + arc.midOffset;
      const my = (arc.y1 + arc.y2) / 2 + arc.midOffset * 0.6;
      this.ctx.lineTo(mx, my);
      this.ctx.lineTo(arc.x2, arc.y2);
      this.ctx.strokeStyle = `rgba(168, 85, 247, ${(arc.life / 6) * 0.28})`;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
      arc.life--;
      if (arc.life <= 0) {
        this.activeArc = null;
      }
    }

    // 繪製滑鼠互動異常範圍光圈 (微弱虛空探測環)
    if (this.mouseX !== null && this.mouseY !== null) {
      this.ctx.beginPath();
      this.ctx.arc(this.mouseX, this.mouseY, 48, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(${this.themeRgb}, 0.08)`;
      this.ctx.lineWidth = 1;
      this.ctx.setLineDash([4, 4]);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    }

    // 粒子與代碼符文繪製
    for (let p of this.particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      // 邊界循環
      if (p.x < -20) p.x = w + 10;
      if (p.x > w + 20) p.x = -10;
      if (p.y < -30) {
        p.y = h + 20;
        p.x = Math.random() * w;
        if (p.isRune) {
          p.text = this.runes[Math.floor(Math.random() * this.runes.length)];
        }
      }

      // 滑鼠異常場微排斥
      if (this.mouseX !== null && this.mouseY !== null) {
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const distSq = dx * dx + dy * dy;
        if (distSq < 5625) { // 75px 範圍
          const dist = Math.sqrt(distSq);
          p.x += (dx / dist) * 1.5;
          p.y += (dy / dist) * 1.5;
        }
      }

      // 代碼偶發閃爍 / 字符錯位 (Glitch)
      p.glitchCooldown--;
      let renderText = p.text;
      let alpha = p.alpha;
      if (p.glitchCooldown <= 0) {
        if (Math.random() < 0.25) {
          renderText = "[?]";
          alpha = Math.min(0.65, p.alpha * 1.8);
        }
        p.glitchCooldown = Math.floor(Math.random() * 150) + 60;
      }

      // 決定色彩 (主題色 / 哭泣黑曜石紫 / 幽匿代碼藍)
      let rgb = this.themeRgb;
      if (p.colorVariant === 1) rgb = "168, 85, 247"; // Crying obsidian purple
      else if (p.colorVariant === 2) rgb = "56, 189, 248"; // Void cyan

      if (p.isRune) {
        this.ctx.font = '9px "JetBrains Mono", monospace';
        this.ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        this.ctx.fillText(renderText, p.x, p.y);
      } else {
        // 像素立方微粒 (Minecraft Pixel Mote)
        this.ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        this.ctx.fillRect(p.x, p.y, p.size, p.size);
        // 微弱亮芯
        if (p.size >= 3) {
          this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          this.ctx.fillRect(p.x + 1, p.y + 1, 1, 1);
        }
      }
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
    this.timelineViewMode = "master"; // 'master' | 'epoch'
    this.timelineFilterChar = "all"; // 'all' | 'parrot' | 'wemmbu' | 'spoke' | 'flamefrags'
    
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
    this.setupKeyboardShortcuts();
    this.setupFloatingDockObserver();

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
          this.updateFloatingDock(char);
        }
      });
    });

    this.bindSubtabDynamicEvents(container);
    this.updateFloatingDock(char);
  }

  getSubtabHtml(char, tabKey) {
    if (tabKey === "arcs") {
      return `
        <!-- 章節快捷跳轉導覽條 -->
        <div class="quick-nav-bar">
          <div class="quick-nav-header">
            <div class="quick-nav-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span>章節快捷直達 (Quick Jump)</span>
            </div>
            <div class="quick-nav-hint">
              <span>⌨️ 快捷鍵：鍵盤數字直達（支援 1 ~ ${char.storyArcs.length} 章及 0 最新章）· 按</span>
              <span class="key-badge">[</span> / <span class="key-badge">]</span>
              <span>前後翻閱 · 按</span>
              <span class="key-badge">T</span>
              <span>回頂端</span>
            </div>
          </div>
          <div class="quick-nav-pills">
            ${char.storyArcs.map((arc, i) => {
              const cleanTitle = arc.title.replace(/^第.*?章[：:]\s*/, '');
              const isLatest = i === char.storyArcs.length - 1;
              const epNumStr = (i + 1 < 10 ? '0' : '') + (i + 1);
              return `
                <button class="quick-jump-pill ${isLatest ? 'latest' : ''}" data-jump-to="arc-chapter-${i + 1}" title="${arc.title} (${arc.formattedDate || arc.publishDate})">
                  <span class="jump-pill-num">${epNumStr}</span>
                  <span class="jump-pill-text">${cleanTitle}</span>
                  ${isLatest ? `<span class="jump-pill-badge">LATEST</span>` : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="story-arcs-list fade-in">
          ${char.storyArcs.map((arc, i) => {
            const epNumStr = (i + 1 < 10 ? '0' : '') + (i + 1);
            return `
            <div class="story-arc-card" id="arc-chapter-${i + 1}">
              <div class="arc-header">
                <div class="arc-header-left">
                  <div class="arc-num-badge">CHAPTER ${epNumStr} // 官方正篇</div>
                  <h4 class="arc-title">${arc.title}</h4>
                  ${arc.subtitle ? `<div class="arc-subtitle">${arc.subtitle}</div>` : ''}
                </div>
                <div class="arc-header-right">
                  <span class="arc-date-badge" title="YouTube 官方原片發布日期">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>${arc.formattedDate || arc.publishDate}</span>
                  </span>
                </div>
              </div>

              <!-- 章節梗概導讀 -->
              <div class="arc-overview-box">
                <div class="arc-section-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  <span>章節全景梗概 (Chapter Synopsis)</span>
                </div>
                <p class="arc-desc">${arc.summary}</p>
              </div>

              <!-- 四維度深度劇情解析 -->
              <div class="arc-deep-grid">
                ${arc.genesis ? `
                  <div class="deep-phase-card genesis-card">
                    <div class="deep-phase-header">
                      <span class="deep-phase-icon">⚡</span>
                      <strong>起因與背景 (The Genesis)</strong>
                    </div>
                    <p class="deep-phase-text">${arc.genesis}</p>
                  </div>
                ` : ''}

                ${arc.conflict ? `
                  <div class="deep-phase-card conflict-card">
                    <div class="deep-phase-header">
                      <span class="deep-phase-icon">⚔️</span>
                      <strong>具體交鋒與轉折 (Conflict & Turning Point)</strong>
                    </div>
                    <p class="deep-phase-text">${arc.conflict}</p>
                  </div>
                ` : ''}

                ${arc.lootAndAnomaly ? `
                  <div class="deep-phase-card loot-card">
                    <div class="deep-phase-header">
                      <span class="deep-phase-icon">💎</span>
                      <strong>關鍵意外收穫與漏洞 (Crucial Loot & Anomaly)</strong>
                    </div>
                    <p class="deep-phase-text">${arc.lootAndAnomaly}</p>
                  </div>
                ` : ''}

                ${arc.impact ? `
                  <div class="deep-phase-card impact-card">
                    <div class="deep-phase-header">
                      <span class="deep-phase-icon">🌐</span>
                      <strong>歷史意義與深遠影響 (Historical Impact)</strong>
                    </div>
                    <p class="deep-phase-text">${arc.impact}</p>
                  </div>
                ` : ''}
              </div>

              <!-- 關鍵情節節點標籤 -->
              ${arc.keyPlotPoints && arc.keyPlotPoints.length > 0 ? `
                <div class="arc-plot-steps-box">
                  <div class="plot-steps-heading">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    <span>本章核心劇情節點 (Key Plot Milestones)</span>
                  </div>
                  <ul class="plot-steps-list">
                    ${arc.keyPlotPoints.map((step, sIdx) => `
                      <li class="plot-step-item">
                        <span class="plot-step-num">${sIdx + 1}</span>
                        <span class="plot-step-text">${step}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}

              <!-- 主角心境演變與獨白 -->
              ${arc.psychology ? `
                <div class="arc-psychology-box">
                  <div class="psychology-quote-icon">“</div>
                  <div class="psychology-content">
                    <div class="psychology-label">主角心境演變與內心審判</div>
                    <p class="psychology-quote-text">${arc.psychology}</p>
                  </div>
                </div>
              ` : ''}

              <!-- 官方劇情出處原片 (Official YouTube Source Video) -->
              ${arc.sourceVideos && arc.sourceVideos.length > 0 ? `
                <div class="arc-source-box">
                  <div class="arc-source-header">
                    <div class="arc-source-title-row">
                      <div class="arc-source-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                        <span>本章劇情出處原片 (Official YouTube Source)</span>
                      </div>
                      <span class="arc-source-notice">※ 創作者 YouTube 官方原片（英文原名・無二創翻譯）</span>
                    </div>
                  </div>

                  <div class="arc-source-cards-container">
                    ${arc.sourceVideos.map(sv => `
                      <div class="arc-source-card">
                        <div class="arc-source-thumb-box" data-video-id="${sv.id}" data-video-title="${sv.title}">
                          <img src="${sv.thumbnail}" alt="${sv.title}" class="arc-source-thumb" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault.jpg','hqdefault.jpg');">
                          <div class="arc-source-play-overlay">
                            <div class="arc-play-icon">▶</div>
                          </div>
                          <span class="arc-source-duration">${sv.duration}</span>
                        </div>
                        <div class="arc-source-content">
                          <div class="arc-source-channel-tag">
                            <span class="yt-dot">●</span> <strong>${sv.channel}</strong> 官方 YouTube 頻道
                            <span class="arc-source-date-tag">📅 上映：${sv.formattedDate || sv.publishDate || arc.formattedDate || arc.publishDate}</span>
                          </div>
                          <div class="arc-source-en-title" title="${sv.title}">${sv.title}</div>
                          <div class="arc-source-actions">
                            <a href="${sv.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-source-link" title="前往 YouTube 觀看 ${sv.channel} 官方原片">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                              <span>前往 YouTube 觀看原片</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                            <button class="btn-source-theater btn-open-theater" data-video-id="${sv.id}" data-video-title="${sv.title}">
                              ▶ 於影院播放
                            </button>
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          `;
          }).join("")}
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
        <!-- 影片集數快捷跳轉導覽條 -->
        <div class="quick-nav-bar">
          <div class="quick-nav-header">
            <div class="quick-nav-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span>影片集數快捷直達 (Quick Jump)</span>
            </div>
            <div class="quick-nav-hint">
              <span>共 ${char.videos.length} 支原片 · 鍵盤數字直達（支援 1 ~ ${char.videos.length} 集及 0 最新集）· 按</span>
              <span class="key-badge">[</span> / <span class="key-badge">]</span>
              <span>前後翻閱 · 按</span>
              <span class="key-badge">T</span>
              <span>回頂端</span>
            </div>
          </div>
          <div class="quick-nav-pills video-pills">
            ${char.videos.map((vid, i) => {
              const isLatest = i === char.videos.length - 1;
              const epNum = i + 1 < 10 ? '0' + (i + 1) : i + 1;
              return `
                <button class="quick-jump-pill video-jump-pill ${isLatest ? 'latest' : ''}" data-jump-to="video-episode-${i + 1}" title="第 ${i + 1} 集：${vid.title}">
                  <span class="jump-pill-num">EP ${epNum}</span>
                  <span class="jump-pill-text">${vid.title}</span>
                  ${isLatest ? `<span class="jump-pill-badge">LATEST</span>` : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="videos-grid fade-in">
          ${char.videos.map((vid, i) => `
            <div class="video-card" id="video-episode-${i + 1}">
              <div class="video-thumb-container" data-video-id="${vid.id}" data-video-title="${vid.title}">
                <img src="${vid.thumbnail}" alt="${vid.title}" class="video-thumb" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault.jpg','hqdefault.jpg');">
                <div class="video-play-overlay">
                  <div class="play-circle">
                    <div class="play-triangle"></div>
                  </div>
                </div>
                <span class="video-duration">${vid.duration}</span>
              </div>
              <div class="video-meta-content">
                <div class="video-channel-tag">
                  <div class="video-channel-left">
                    <span class="yt-dot">●</span> <strong>${char.realHandle || char.name}</strong> 官方 YouTube 原片
                  </div>
                  <div class="video-channel-right">
                    <span class="video-date-badge" title="YouTube 官方發布日期">📅 ${vid.formattedDate || vid.publishDate}</span>
                  </div>
                </div>
                <div class="video-title-row">
                  <div class="video-title-en" style="font-weight: 700; color: #fff; font-size: 1.05rem;">${vid.title}</div>
                </div>
                <p class="video-summary">${vid.summary}</p>
                <div class="video-loot-badge">
                  <span>✦ 獲得關鍵意外物資:</span>
                  <strong>${vid.unexpectedLoot}</strong>
                </div>
                <div class="video-btn-row">
                  <button class="btn-video-watch btn-open-theater" data-video-id="${vid.id}" data-video-title="${vid.title}">
                    ▶ 於影院播放解說
                  </button>
                  <a href="${vid.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-watch btn-yt-direct" style="flex: 0 0 auto; padding: 0 14px; background: #dc2626; color: #fff; display: inline-flex; align-items: center; gap: 6px; text-decoration: none;" title="前往 YouTube 觀看 ${char.realHandle || char.name} 官方原片">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                    <span>YouTube 原片</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
    const playTriggers = scopeElement.querySelectorAll(".video-thumb-container, .btn-open-theater, .arc-source-thumb-box, .btn-source-theater");
    playTriggers.forEach(el => {
      el.addEventListener("click", () => {
        const vidId = el.getAttribute("data-video-id");
        const vidTitle = el.getAttribute("data-video-title");
        if (vidId) {
          this.openVideoTheater(vidId, vidTitle);
        }
      });
    });

    // 綁定快捷跳轉按鈕 (Quick Jump Pills)
    const jumpPills = scopeElement.querySelectorAll(".quick-jump-pill");
    jumpPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const targetId = pill.getAttribute("data-jump-to");
        if (targetId) {
          this.jumpToElement(targetId);
        }
      });
    });
  }

  jumpToElement(targetId) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;
    const match = targetId.match(/-(\d+)$/);
    if (match) this.currentTrackedIndex = parseInt(match[1], 10);
    this.soundEngine.playClick();
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    targetEl.classList.remove('jump-target-highlight');
    void targetEl.offsetWidth; // 強制重繪觸發動畫
    targetEl.classList.add('jump-target-highlight');
    setTimeout(() => {
      targetEl.classList.remove('jump-target-highlight');
    }, 1800);
  }

  updateFloatingDock(char) {
    const dock = document.getElementById("floating-quick-dock");
    if (!dock || !char) return;

    if (this.activeCharSubtab === "arcs") {
      dock.innerHTML = `
        <span class="dock-label">📜 章節:</span>
        ${char.storyArcs.map((arc, i) => {
          const isLatest = i === char.storyArcs.length - 1;
          return `
            <button class="dock-btn ${isLatest ? 'latest' : ''}" data-jump-to="arc-chapter-${i + 1}" title="${arc.title}">
              ${i + 1}
            </button>
          `;
        }).join('')}
        <button class="dock-btn dock-btn-top" id="dock-btn-top" title="回到角色頂部">
          ⬆ 頂部
        </button>
      `;
    } else if (this.activeCharSubtab === "videos") {
      dock.innerHTML = `
        <span class="dock-label">🎬 集數:</span>
        ${char.videos.map((vid, i) => {
          const isLatest = i === char.videos.length - 1;
          return `
            <button class="dock-btn ${isLatest ? 'latest' : ''}" data-jump-to="video-episode-${i + 1}" title="第 ${i + 1} 部：${vid.title}">
              ${i + 1}
            </button>
          `;
        }).join('')}
        <button class="dock-btn dock-btn-top" id="dock-btn-top" title="回到角色頂部">
          ⬆ 頂部
        </button>
      `;
    } else {
      dock.innerHTML = `
        <button class="dock-btn dock-btn-top" id="dock-btn-top" title="回到角色頂部">
          ⬆ 頂部
        </button>
      `;
    }

    dock.querySelectorAll(".dock-btn[data-jump-to]").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-jump-to");
        if (targetId) this.jumpToElement(targetId);
      });
    });

    const topBtn = dock.querySelector("#dock-btn-top");
    if (topBtn) {
      topBtn.addEventListener("click", () => {
        this.soundEngine.playClick();
        const section = document.getElementById("character-deep-dive-mount");
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  setupFloatingDockObserver() {
    window.addEventListener("scroll", () => {
      const dock = document.getElementById("floating-quick-dock");
      if (!dock) return;
      const charSection = document.getElementById("character-section");
      if (!charSection) return;
      const rect = charSection.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 300) {
        dock.classList.remove("hidden");
      } else {
        dock.classList.add("hidden");
      }
    }, { passive: true });
  }

  jumpToCharacterChapter(charId, chapterId) {
    this.soundEngine.playClick();
    this.activeCharSubtab = 'arcs';
    if (this.activeCharacterId !== charId) {
      this.switchCharacter(charId);
    } else {
      this.renderCharacterDeepDive(charId);
    }
    const section = document.getElementById("character-section");
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      this.jumpToElement(chapterId);
    }, 250);
  }

  setupKeyboardShortcuts() {
    this.keyBuffer = "";
    this.keyBufferTimer = null;

    document.addEventListener("keydown", (e) => {
      // 避免在輸入框、搜尋彈窗或影院彈窗開啟時觸發快捷鍵
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (document.getElementById('theater-modal')?.classList.contains('open')) return;
      if (document.getElementById('search-modal')?.classList.contains('open')) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const char = UNSTABLE_DATA.characters[this.activeCharacterId];
      if (!char) return;

      const totalItems = this.activeCharSubtab === 'arcs' ? char.storyArcs.length : char.videos.length;
      const prefix = this.activeCharSubtab === 'arcs' ? 'arc-chapter-' : 'video-episode-';

      // 數字鍵跳轉（支援 1~9 直接直達，以及 10~14 雙位數快速鍵入）
      if (e.key >= '0' && e.key <= '9') {
        if (e.key === '0' && !this.keyBuffer) {
          // 單獨按 0 直達最新一章 / 最新一集
          e.preventDefault();
          this.jumpToElement(`${prefix}${totalItems}`);
          return;
        }

        e.preventDefault();
        this.keyBuffer += e.key;
        clearTimeout(this.keyBufferTimer);

        const targetNum = parseInt(this.keyBuffer, 10);

        // 如果當前緩衝數字若再加一位必定超出最大篇章（例如輸入 2~9，或者輸入 15+），立即跳轉
        if (targetNum > 1 || this.keyBuffer.length >= 2 || totalItems < 10) {
          if (targetNum >= 1 && targetNum <= totalItems) {
            this.jumpToElement(`${prefix}${targetNum}`);
          }
          this.keyBuffer = "";
        } else {
          // 若輸入 1，等待 400ms 看是否有第二個數字（如 10, 11, 12, 13, 14）
          this.keyBufferTimer = setTimeout(() => {
            if (this.keyBuffer === "1") {
              this.jumpToElement(`${prefix}1`);
            }
            this.keyBuffer = "";
          }, 450);
        }
      } else if (e.key === '[' || e.key === 'ArrowLeft') {
        // [ 或 左方向鍵：上一章 / 上一集
        e.preventDefault();
        this.navigatePrevNext(prefix, totalItems, -1);
      } else if (e.key === ']' || e.key === 'ArrowRight') {
        // ] 或 右方向鍵：下一章 / 下一集
        e.preventDefault();
        this.navigatePrevNext(prefix, totalItems, 1);
      } else if (e.key.toLowerCase() === 't') {
        // 按鍵 T 回到角色個人檔案頂端
        const mount = document.getElementById('character-deep-dive-mount');
        if (mount) {
          e.preventDefault();
          this.soundEngine.playClick();
          mount.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  navigatePrevNext(prefix, total, delta) {
    if (!this.currentTrackedIndex) this.currentTrackedIndex = 1;
    let nextIdx = this.currentTrackedIndex + delta;
    if (nextIdx < 1) nextIdx = total;
    if (nextIdx > total) nextIdx = 1;
    this.currentTrackedIndex = nextIdx;
    this.jumpToElement(`${prefix}${nextIdx}`);
  }

  renderTimelineMatrix() {
    const container = document.getElementById("timeline-mount");
    if (!container) return;

    const chars = [
      { key: "parrot", name: "Parrot", avatar: UNSTABLE_DATA.characters.parrot.avatar, colorVar: "--parrot-color" },
      { key: "wemmbu", name: "Wemmbu", avatar: UNSTABLE_DATA.characters.wemmbu.avatar, colorVar: "--wemmbu-color" },
      { key: "spoke", name: "Spoke", avatar: UNSTABLE_DATA.characters.spoke.avatar, colorVar: "--spoke-color" },
      { key: "flamefrags", name: "FlameFrags", avatar: UNSTABLE_DATA.characters.flamefrags.avatar, colorVar: "--flame-color" }
    ];

    // 依據角色過濾全時序影片列表
    const masterItems = (UNSTABLE_DATA.masterChronology || []).filter(item => {
      if (this.timelineFilterChar === "all") return true;
      return item.characterKey === this.timelineFilterChar;
    });

    const isMasterView = this.timelineViewMode === "master";

    container.innerHTML = `
      <!-- 視角切換器 (46 集全上映時序 / 經典六大紀元跨視角對照) -->
      <div class="timeline-view-switch-bar">
        <button class="timeline-view-btn ${isMasterView ? 'active' : ''}" data-timeline-view="master">
          ⏱️ 官方 46 集全時序上映編年史 (Master Timeline)
        </button>
        <button class="timeline-view-btn ${!isMasterView ? 'active' : ''}" data-timeline-view="epoch">
          📜 經典六大紀元跨視角對照 (Epoch Matrix)
        </button>
      </div>

      ${isMasterView ? `
        <!-- 角色過濾 Chips -->
        <div class="timeline-filter-bar">
          <button class="timeline-filter-chip ${this.timelineFilterChar === 'all' ? 'active' : ''}" data-filter-char="all">
            ✦ 全主角 46 集總時序 (46)
          </button>
          <button class="timeline-filter-chip ${this.timelineFilterChar === 'parrot' ? 'active' : ''}" data-filter-char="parrot">
            🦜 Parrot (14)
          </button>
          <button class="timeline-filter-chip ${this.timelineFilterChar === 'wemmbu' ? 'active' : ''}" data-filter-char="wemmbu">
            ⚡ Wemmbu (11)
          </button>
          <button class="timeline-filter-chip ${this.timelineFilterChar === 'spoke' ? 'active' : ''}" data-filter-char="spoke">
            🗡️ Spoke (10)
          </button>
          <button class="timeline-filter-chip ${this.timelineFilterChar === 'flamefrags' ? 'active' : ''}" data-filter-char="flamefrags">
            🔥 FlameFrags (11)
          </button>
        </div>

        <div class="timeline-notice-banner">
          📅 嚴格依據 YouTube 官方真實上映時間排列（2024 年 4 月 21 日 Spoke 開山首播 ➔ 2026 年 10 月 15 日 Parrot 終界黑牢最新作）· 現實仍持續連載中！
        </div>

        <!-- 46 集官方上映全時序卡片清單 -->
        <div class="master-timeline-grid fade-in">
          ${masterItems.map(item => `
            <div class="master-timeline-card" style="--card-char-color: ${item.themeColor};">
              <div class="master-card-thumb-wrap btn-open-theater" data-video-id="${item.videoId}" data-video-title="${item.title}">
                <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=this.src.replace('maxresdefault.jpg','hqdefault.jpg');">
                <div class="master-card-play-btn">▶</div>
                <span class="master-card-duration">${item.duration}</span>
              </div>

              <div class="master-card-meta">
                <div class="master-card-top-row">
                  <span class="master-order-badge">#${item.globalOrder < 10 ? '0' + item.globalOrder : item.globalOrder}</span>
                  <span class="master-date-badge">📅 ${item.formattedDate || item.publishDate}</span>
                  <div class="master-char-tag">
                    <img src="${item.characterAvatar}" alt="${item.characterName}" class="master-char-avatar">
                    <span>${item.characterName}</span>
                    <span class="master-char-ep">EP ${item.episodeIndex < 10 ? '0' + item.episodeIndex : item.episodeIndex}</span>
                  </div>
                </div>

                <div class="master-card-title" title="${item.title}">${item.title}</div>
                <div class="master-card-zh-title">${item.titleZh}</div>
                <p class="video-summary" style="margin-bottom: 0.5rem; font-size: 0.85rem; line-height: 1.5;">${item.summary}</p>
                
                ${item.loot ? `
                  <div class="master-card-loot">
                    <span>✦ 關鍵收穫: </span><strong>${item.loot}</strong>
                  </div>
                ` : ''}
              </div>

              <div class="master-card-actions">
                <button class="btn-master-action btn-master-theater btn-open-theater" data-video-id="${item.videoId}" data-video-title="${item.title}">
                  ▶ 於影院播放
                </button>
                <button class="btn-master-action btn-master-jump" data-jump-char="${item.characterKey}" data-jump-chapter="${item.chapterId}">
                  👤 查看深度章節
                </button>
                <a href="${item.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn-master-action btn-master-yt" title="前往 YouTube 觀看官方原片">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                  <span>YT 原片</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <!-- 經典六大紀元跨視角對照 -->
        <div class="timeline-container fade-in">
          ${UNSTABLE_DATA.timelineMatrix.map((item, index) => `
            <div class="timeline-epoch-card">
              <div class="epoch-header">
                <span class="epoch-badge">EPOCH ${index + 1}</span>
                <h3 class="epoch-headline">${item.epoch}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 4px;">${item.headline}</p>
              </div>
              <div class="epoch-pov-grid">
                ${chars.map(c => {
                  const src = item.sources ? item.sources[c.key] : null;
                  return `
                    <div class="pov-box" style="--pov-color: var(${c.colorVar});">
                      <div class="pov-char-tag">
                        <img src="${c.avatar}" class="pov-avatar" alt="${c.name}" loading="lazy" decoding="async">
                        <span class="pov-name">${c.name}</span>
                      </div>
                      <p class="pov-action-text">${item.details[c.key]}</p>
                      ${src ? `
                        <div class="pov-source-row">
                          <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="pov-source-link" title="前往 YouTube 觀看 ${src.channel} 官方原片">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                            <span>原片：${src.title}</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </a>
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join("")}
        </div>
      `}
    `;

    // 綁定時序檢視模式切換 (Master Timeline / Epoch Matrix)
    container.querySelectorAll(".timeline-view-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.soundEngine.playClick();
        this.timelineViewMode = btn.getAttribute("data-timeline-view");
        this.renderTimelineMatrix();
      });
    });

    // 綁定角色過濾 Chips
    container.querySelectorAll(".timeline-filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        this.soundEngine.playClick();
        this.timelineFilterChar = chip.getAttribute("data-filter-char");
        this.renderTimelineMatrix();
      });
    });

    // 綁定跳轉至角色章節
    container.querySelectorAll(".btn-master-jump").forEach(btn => {
      btn.addEventListener("click", () => {
        const cKey = btn.getAttribute("data-jump-char");
        const chapId = btn.getAttribute("data-jump-chapter");
        if (cKey && chapId) {
          this.jumpToCharacterChapter(cKey, chapId);
        }
      });
    });

    // 綁定影院彈窗
    container.querySelectorAll(".btn-open-theater").forEach(el => {
      el.addEventListener("click", () => {
        const vidId = el.getAttribute("data-video-id");
        const vidTitle = el.getAttribute("data-video-title");
        if (vidId) {
          this.openVideoTheater(vidId, vidTitle);
        }
      });
    });
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
        searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">輸入主角、章節、影片、或意外物品關鍵字...</div>`;
        return;
      }

      const results = [];

      // 搜尋主角
      Object.values(UNSTABLE_DATA.characters).forEach(char => {
        if (char.name.toLowerCase().includes(q) || char.roleTitle.toLowerCase().includes(q) || (char.realHandle && char.realHandle.toLowerCase().includes(q))) {
          results.push({
            type: "主角檔案",
            title: char.name,
            sub: `${char.roleTitle} · 點擊前往個人專區`,
            action: () => {
              this.switchCharacter(char.id);
              document.getElementById("character-section")?.scrollIntoView({ behavior: "smooth" });
              closeSearchModal();
            }
          });
        }

        // 搜尋 46 個專屬章節 (Story Arcs)
        char.storyArcs.forEach((arc, idx) => {
          if (
            arc.title.toLowerCase().includes(q) ||
            (arc.subtitle && arc.subtitle.toLowerCase().includes(q)) ||
            (arc.summary && arc.summary.toLowerCase().includes(q)) ||
            (arc.lootAndAnomaly && arc.lootAndAnomaly.toLowerCase().includes(q)) ||
            (arc.publishDate && arc.publishDate.includes(q)) ||
            (arc.formattedDate && arc.formattedDate.includes(q))
          ) {
            results.push({
              type: "劇情章節",
              title: `${char.name} // ${arc.title}`,
              sub: `📅 ${arc.formattedDate || arc.publishDate} · ${arc.subtitle || arc.summary.substring(0, 45) + '...'}`,
              action: () => {
                this.jumpToCharacterChapter(char.id, `arc-chapter-${idx + 1}`);
                closeSearchModal();
              }
            });
          }
        });

        // 搜尋意外物品 (Unexpected Items)
        char.unexpectedItems.forEach(item => {
          if (
            item.name.toLowerCase().includes(q) ||
            item.howAcquired.toLowerCase().includes(q) ||
            item.effectDesc.toLowerCase().includes(q) ||
            (item.rarity && item.rarity.toLowerCase().includes(q))
          ) {
            results.push({
              type: "意外神器",
              title: item.name,
              sub: `來自: ${char.name} · ${item.rarity} · 點擊查看裝備庫`,
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

        // 搜尋官方原片 (Videos)
        char.videos.forEach((vid, idx) => {
          if (
            vid.title.toLowerCase().includes(q) ||
            (vid.titleZh && vid.titleZh.toLowerCase().includes(q)) ||
            (vid.summary && vid.summary.toLowerCase().includes(q)) ||
            (vid.unexpectedLoot && vid.unexpectedLoot.toLowerCase().includes(q)) ||
            (vid.publishDate && vid.publishDate.includes(q)) ||
            (vid.formattedDate && vid.formattedDate.includes(q))
          ) {
            results.push({
              type: "官方原片",
              title: vid.title,
              sub: `🎬 ${char.name} EP ${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1} (${vid.formattedDate || vid.publishDate}) · ${vid.titleZh || ''}`,
              action: () => {
                this.openVideoTheater(vid.id, vid.title);
                closeSearchModal();
              }
            });
          }
        });
      });

      // 搜尋六大史詩紀元 (Timeline Matrix)
      if (UNSTABLE_DATA.timelineMatrix) {
        UNSTABLE_DATA.timelineMatrix.forEach((epoch, idx) => {
          if (epoch.epoch.toLowerCase().includes(q) || epoch.headline.toLowerCase().includes(q)) {
            results.push({
              type: "歷史紀元",
              title: epoch.epoch,
              sub: `${epoch.headline} · 點擊前往跨視角矩陣`,
              action: () => {
                this.timelineViewMode = "epoch";
                this.renderTimelineMatrix();
                document.getElementById("timeline-section")?.scrollIntoView({ behavior: "smooth" });
                closeSearchModal();
              }
            });
          }
        });
      }

      if (results.length === 0) {
        searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">未找到與「${q}」相符的結果</div>`;
        return;
      }

      searchResults.innerHTML = results.slice(0, 12).map((r, i) => `
        <div class="search-result-item" data-res-idx="${i}">
          <div style="min-width: 0; flex: 1; padding-right: 12px;">
            <div style="font-weight: 600; color: #fff; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.sub}</div>
          </div>
          <span style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--theme-current); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); padding: 3px 8px; border-radius: 4px; flex-shrink: 0;">
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
