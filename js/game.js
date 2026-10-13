/**
 * Unstable Survival Quest Mini-Game Engine
 * 基於 Unstable SMP 宇宙觀的互動文字冒險與決策遊戲
 */

class QuestGameEngine {
  constructor(data, soundEngine) {
    this.data = data.questGame;
    this.characters = data.characters;
    this.soundEngine = soundEngine;
    
    this.state = {
      activeCharId: null,
      currentChapterId: "chapter_select",
      inventory: [],
      history: []
    };

    this.container = document.getElementById("quest-game-mount");
    this.init();
  }

  init() {
    // 檢查是否有儲存的遊戲進度
    const saved = localStorage.getItem("unstable_quest_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.activeCharId && parsed.currentChapterId) {
          this.state = parsed;
        }
      } catch (e) {
        console.warn("無法讀取存檔:", e);
      }
    }

    this.render();
  }

  save() {
    localStorage.setItem("unstable_quest_state", JSON.stringify(this.state));
  }

  reset() {
    this.soundEngine?.playClick();
    this.state = {
      activeCharId: null,
      currentChapterId: "chapter_select",
      inventory: [],
      history: []
    };
    this.save();
    this.render();
  }

  makeChoice(choice) {
    if (this.soundEngine) {
      if (choice.itemGain) {
        this.soundEngine.playItemGain();
      } else {
        this.soundEngine.playClick();
      }
    }

    if (choice.charId) {
      this.state.activeCharId = choice.charId;
    }

    if (choice.itemGain && !this.state.inventory.includes(choice.itemGain)) {
      this.state.inventory.push(choice.itemGain);
    }

    this.state.history.push({
      chapterId: this.state.currentChapterId,
      choiceText: choice.text
    });

    this.state.currentChapterId = choice.nextId;
    this.save();
    this.render();
  }

  getCurrentChapter() {
    return this.data.chapters.find(c => c.id === this.state.currentChapterId) || this.data.chapters[0];
  }

  render() {
    if (!this.container) return;

    const chapter = this.getCurrentChapter();
    const currentChar = this.state.activeCharId ? this.characters[this.state.activeCharId] : null;

    let hudHtml = "";
    if (currentChar) {
      hudHtml = `
        <div class="quest-hud-bar fade-in">
          <div class="hud-char-info">
            <img src="${currentChar.avatar}" alt="${currentChar.name}" class="hud-avatar">
            <div>
              <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${currentChar.name}</div>
              <div style="font-size: 0.75rem; color: ${currentChar.themeColor}; font-family: var(--font-mono);">${currentChar.roleTitle.split("·")[0]}</div>
            </div>
          </div>
          <div class="hud-inventory">
            <span style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono); margin-right: 4px;">🎒 背包:</span>
            ${this.state.inventory.length > 0 
              ? this.state.inventory.map(item => `<span class="inventory-slot">✦ ${item}</span>`).join("")
              : `<span style="font-size: 0.75rem; color: var(--text-dim); font-style: italic;">(尚無裝備)</span>`
            }
          </div>
        </div>
      `;
    }

    let bodyHtml = "";
    if (chapter.isEnding) {
      bodyHtml = `
        <div class="fade-in" style="text-align: center; padding: 2rem 1rem;">
          <div class="ending-badge">${chapter.badge}</div>
          <h3 style="font-family: var(--font-display); font-size: 2rem; color: #fff; margin-bottom: 1.25rem;">
            ${chapter.name}
          </h3>
          <div class="quest-narrative-box" style="text-align: left; max-width: 800px; margin: 0 auto 2rem;">
            ${chapter.description}
          </div>
          <button class="btn-restart-quest" id="btn-restart-quest">
            🔄 重新啟動命運模擬 (Restart Simulation)
          </button>
        </div>
      `;
    } else {
      bodyHtml = `
        <div class="fade-in">
          <div class="quest-stage-header">
            <h3>${chapter.name}</h3>
          </div>
          <div class="quest-narrative-box">
            ${chapter.description}
          </div>
          <div class="quest-choices-list">
            ${chapter.choices.map((choice, idx) => `
              <button class="quest-choice-btn" data-choice-idx="${idx}">
                <span>${choice.text}</span>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--theme-current); opacity: 0.8;">[選擇] →</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="quest-game-frame">
        <div class="quest-terminal-bar">
          <div class="terminal-dots">
            <span class="tdot tdot-red"></span>
            <span class="tdot tdot-yellow"></span>
            <span class="tdot tdot-green"></span>
          </div>
          <div class="terminal-title">UNSTABLE_SIMULATOR_OS // NODE_ALPHA</div>
          <button id="btn-reset-header" style="background: transparent; border: 1px solid var(--border-light); color: var(--text-dim); padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-family: var(--font-mono); cursor: pointer;">
            RESET
          </button>
        </div>
        <div class="quest-content-area">
          ${hudHtml}
          ${bodyHtml}
        </div>
      </div>
    `;

    // 綁定按鈕事件
    const choiceBtns = this.container.querySelectorAll(".quest-choice-btn");
    choiceBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.getAttribute("data-choice-idx"), 10);
        const choice = chapter.choices[idx];
        if (choice) {
          this.makeChoice(choice);
        }
      });
    });

    const restartBtn = this.container.querySelector("#btn-restart-quest");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => this.reset());
    }

    const resetHeaderBtn = this.container.querySelector("#btn-reset-header");
    if (resetHeaderBtn) {
      resetHeaderBtn.addEventListener("click", () => this.reset());
    }
  }
}
