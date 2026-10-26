const pages = [
  // 第 1-3 頁：1.png
  {
    page: 1,
    bg: "1-1.png",
    type: "dialogue",
    text: " "
  },
  {
    page: 2,
    bg: "1-2.png",
    type: "dialogue",
    text: " "
  },
  {
    page: 3,
    bg: "1-3.png",
    type: "dialogue",
    text: " "
  },

  // 第 4 頁：2.png
  {
    page: 4,
    bg: "2.png",
    type: "dialogue",
    text: "今年已是我被貶（demoted）黃州的第 4 年。\n（一邊脫衣服，一邊自言自語）"
  },

  // 第 5 頁：2.png
  {
    page: 5,
    bg: "2.png",
    type: "writing",
    text: "請書寫（50 分）：",
    kaitiText: "貶官",
    points: 50,
    note: "成功！"
  },

  // 第 6 頁：2.png
  {
    page: 6,
    bg: "2.png",
    type: "mcq",
    text: "「解衣欲睡」中的「解」是甚麼意思？（10 分）",
    options: ["A：裁剪", "B：懈怠", "C：解決", "D：脫去"],
    answer: 3,
    points: 10,
    note: "答對了，「解衣」即「脫衣」。"
  },

  // 第 7 頁：2.png
  {
    page: 7,
    bg: "2.png",
    type: "dialogue",
    text: "今晚又睡不着了。很多事都做不實現不了，很多抱負都無法展開。😮‍💨"
  },

  // 第 8 頁：2.png
  {
    page: 8,
    bg: "2.png",
    type: "mcq",
    text: "咦？今天的 ⬜️⬜️ 真美麗啊！還透過門窗照進了房間。\n\n⬜️⬜️ 是甚麼？（10 分）",
    options: ["A：月色", "B：陽光", "C：星星", "D：夜空"],
    answer: 0,
    points: 10,
    note: "答對了，當時「月色入戶」。"
  },

  // 第 9 頁：2.png
  {
    page: 9,
    bg: "2.png",
    type: "mcq",
    text: "不如我出去走走？\n\n此刻的蘇軾帶着怎樣的心情出走？（10 分）",
    options: ["A：😵‍💫", "B：😨", "C：😳", "D：😆"],
    answer: 3,
    points: 10,
    note: "答對了！蘇軾「欣然起行」，「欣然」的意思是「高興地」。"
  },

  // 第 10 頁：2.png
  {
    page: 10,
    bg: "2.png",
    type: "dialogue",
    text: "但沒有人可以跟我遊樂⋯⋯"
  },

  // 第 11 頁：2.png
  {
    page: 11,
    bg: "2.png",
    type: "mcq",
    text: "「念無與為樂者，遂至承天寺尋張懷民。」\n「遂」是甚麼意思？",
    options: ["A：追逐", "B：後來", "C：於是", "D：奔跑"],
    answer: 2,
    points: 10,
    note: "答對了！"
  },

  // 第 12 頁：2.png
  {
    page: 12,
    bg: "2.png",
    type: "mcq",
    text: "蘇軾現在要找哪位朋友？",
    options: ["A：林懷民", "B：魏懷民", "C：張懷民", "D：陳懷民"],
    answer: 2,
    points: 10,
    note: "答對了！"
  },

  // 第 13 頁：2.png
  {
    page: 13,
    bg: "2.png",
    type: "dialogue",
    text: "懷民跟我一樣都被貶官至黃州。他應該能明白我的苦悶。😭",
    image: "bromeme.png"
  },

  // 第 14 頁：2.png
  {
    page: 14,
    bg: "2.png",
    type: "dialogue",
    text: "我要打電話給懷民！但懷民的電話號碼是甚麼呢？"
  },

  // 第 15 頁：3.png (房間尋寶解謎)
  {
    page: 15,
    bg: "3.png",
    type: "room_phone",
    answer: "03093281012",
    points: 500,
    note: "答對了！成功撥通張懷民的電話！"
  },

  // 第 16 頁：2.png
  {
    page: 16,
    bg: "2-0.png",
    type: "dialogue",
    text: "懷民，你有空嗎？"
  },

  // 第 17 頁：4.png
  {
    page: 17,
    bg: "4.png",
    type: "dialogue",
    text: "這麼晚了，有甚麼事嗎？",
    image: "sleepymeme.png"
  },

  // 第 18 頁：4.png
  {
    page: 18,
    bg: "4.png",
    type: "mcq",
    text: "「懷民亦未寢」中的「寢」是甚麼意思？（10 分）",
    options: ["A：睡覺", "B：睡醒", "C：睡床", "D：睡夢"],
    answer: 0,
    points: 10,
    note: "答對了！"
  },

  // 第 19 頁：2.png
  {
    page: 19,
    bg: "2-0.png",
    type: "dialogue",
    text: "今天月色很美。我可以來承天寺找你嗎？"
  },

  // 第 20 頁：4.png
  {
    page: 20,
    bg: "4.png",
    type: "dialogue",
    text: "OK⋯⋯",
    image: "catmeme.png"
  },

  // 第 21 頁：2.png
  {
    page: 21,
    bg: "2-0.png",
    type: "mcq",
    text: "懷民住在哪裏？（10 分）",
    options: ["A：飛天寺", "B：承天寺", "C：承大寺", "D：飛大寺"],
    answer: 1,
    points: 10,
    note: "答對了！"
  },

  // 第 22 頁：2.png
  {
    page: 22,
    bg: "2-0.png",
    type: "mcq",
    text: "「相與步於中庭」中的「相與」是甚麼意思？（10 分）",
    options: ["A：想像", "B：與其", "C：一起", "D：慢慢"],
    answer: 2,
    points: 10,
    note: "答對了！蘇軾和張懷民一起在庭院散步。"
  },

  // 第 23 頁：2.png
  {
    page: 23,
    bg: "2-0.png",
    type: "mcq",
    text: "月光照在庭院中，好像 ⬜️⬜️ 的 🔵🔵。\n\n⬜️⬜️ 和 🔵🔵 分別代表甚麼？（10 分）",
    options: ["A：澄明；鏡子", "B：清澈；積水", "C：潔淨；海水", "D：乾淨；氈子"],
    answer: 1,
    points: 10,
    note: "答對了，因為「庭下如積水空明」。"
  },

  // 第 24 頁：2.png
  {
    page: 24,
    bg: "2-0.png",
    type: "input",
    text: "懷民，你看看這些竹子和柏樹的 ⬜️⬜️，你覺得像不像水中的藻荇？（50 分）",
    answer: "影子",
    points: 50,
    note: "答對了！"
  },

  // 第 25 頁：2.png
  {
    page: 25,
    bg: "2-0.png",
    type: "oral",
    text: "「何夜無月？何處無竹柏？」請口頭翻譯這兩個句子。（50 分）",
    points: 50,
    note: "答對了！（參考：哪一夜沒有月亮？哪一處沒有竹子和柏樹？）"
  },

  // 第 26 頁：2.png
  {
    page: 26,
    bg: "2-0.png",
    type: "mcq",
    text: "剛剛的句子用了甚麼修辭手法？（10 分）",
    options: ["A：反問", "B：設問", "C：對比", "D：比喻"],
    answer: 0,
    points: 10,
    note: "答對了！"
  },

  // 第 27 頁：2.png
  {
    page: 27,
    bg: "2-0.png",
    type: "mcq",
    text: "「但少閑人如吾兩人者耳。」\n「但」是甚麼意思？",
    options: ["A：不但", "B：唯有", "C：一旦", "D：只是"],
    answer: 3,
    points: 10,
    note: "答對了！"
  },

  // 第 28 頁：2.png
  {
    page: 28,
    bg: "2-0.png",
    type: "mcq",
    text: "「但少閑人如吾兩人者耳。」\n「吾」是甚麼意思？",
    options: ["A：月色", "B：竹柏", "C：我們", "D：他們"],
    answer: 2,
    points: 10,
    note: "答對了！"
  },

  // 第 29 頁：2.png
  {
    page: 29,
    bg: "2-0.png",
    type: "mcq",
    text: "「但少閑人如吾兩人者耳。」\n「耳」是甚麼意思？",
    options: ["A：然而", "B：這樣", "C：罷了", "D：耳朵"],
    answer: 2,
    points: 10,
    note: "答對了！"
  },

  // 第 30 頁：2.png
  {
    page: 30,
    bg: "2-0.png",
    type: "dialogue",
    text: "沒有甚麼人能像我們這樣清閒，還能一起夜遊作樂。"
  },

  // 第 31 頁：2.png
  {
    page: 31,
    bg: "2-0.png",
    type: "multi",
    text: "蘇軾說的「閒人」是甚麼意思？（總分 30）",
    options: [
      "有閒情逸致夜遊的人",
      "不重要的路人",
      "閒聊的友人",
      "被貶官而無事可做的人",
      "仕途失意的人",
      "認真工作而獲升遷的人"
    ],
    answers: [0, 3, 4],
    points: 30,
    note: "答對了！"
  },

  // 第 32 頁：5.png
  {
    page: 32,
    bg: "5.png",
    type: "final_mcq",
    text: "哪一幅圖最能描述蘇軾撰寫此文的心情？",
    options: ["A", "B", "C", "D"],
    answer: 1,
    points: 10,
    note: "答對了！"
  }
];

let currentIndex = 0;
let score = 0;
const answeredPages = new Set();

// DOM 元素
const gameContainer = document.getElementById("game-container");
const roomOverlay = document.getElementById("room-overlay");
const dialogueArea = document.getElementById("dialogue-area");
const pageIndicator = document.getElementById("page-indicator");
const contentBox = document.getElementById("content-box");
const feedbackBox = document.getElementById("feedback-box");
const nextBtn = document.getElementById("next-btn");
const scoreVal = document.getElementById("score-val");

// Modal 元素
const clueModal = document.getElementById("clue-modal");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.getElementById("close-modal");

// 初始化遊戲
function renderPage() {
  const data = pages[currentIndex];
  gameContainer.style.backgroundImage = `url('${data.bg}')`;

  // 頭 3 頁不顯示頁數
  if (data.page <= 3) {
    pageIndicator.classList.add("hidden");
  } else {
    pageIndicator.classList.remove("hidden");
    pageIndicator.textContent = `Page ${data.page} / ${pages.length}`;
  }

  contentBox.innerHTML = "";
  feedbackBox.textContent = "";
  feedbackBox.className = "feedback";

  // 處理第 15 頁特殊房間模式
  if (data.type === "room_phone") {
    roomOverlay.classList.remove("hidden");
    dialogueArea.classList.add("hidden");
    setupRoomPage(data);
    return;
  } else {
    roomOverlay.classList.add("hidden");
    dialogueArea.classList.remove("hidden");
  }

  // 顯示題目或對白文字
  const textEl = document.createElement("div");
  textEl.className = "dialogue-text";
  textEl.textContent = data.text;
  contentBox.appendChild(textEl);

  // 第 5 頁：楷體大字置中
  if (data.kaitiText) {
    const kaitiEl = document.createElement("div");
    kaitiEl.className = "kaiti-large";
    kaitiEl.textContent = data.kaitiText;
    contentBox.appendChild(kaitiEl);
  }

  // 若有附圖 (bromeme.png / sleepymeme.png / catmeme.png)
  if (data.image) {
    const imgEl = document.createElement("img");
    imgEl.src = data.image;
    imgEl.alt = "meme";
    imgEl.className = "meme-img";
    contentBox.appendChild(imgEl);
  }

  // 根據類型渲染互動元件
  if (data.type === "dialogue") {
    nextBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.add("hidden");

    if (data.type === "writing" || data.type === "oral") {
      const doneBtn = document.createElement("button");
      doneBtn.className = "action-btn";
      doneBtn.textContent = data.type === "writing" ? "完成 ✅" : "完成 ✅";
      doneBtn.onclick = () => handleCorrect(data);
      contentBox.appendChild(doneBtn);
    } else if (data.type === "mcq" || data.type === "final_mcq") {
      const grid = document.createElement("div");
      grid.className = "options-grid";
      data.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = optText;
        btn.onclick = () => {
          if (idx === data.answer) {
            btn.classList.add("correct");
            handleCorrect(data);
          } else {
            btn.classList.add("wrong");
            handleWrong();
          }
        };
        grid.appendChild(btn);
      });
      contentBox.appendChild(grid);
    } else if (data.type === "input") {
      const group = document.createElement("div");
      group.className = "text-input-group";
      const input = document.createElement("input");
      input.type = "text";
      input.className = "text-input";
      input.placeholder = "請輸入答案⋯⋯";
      const submitBtn = document.createElement("button");
      submitBtn.className = "action-btn";
      submitBtn.textContent = "確認";
      submitBtn.onclick = () => {
        if (input.value.trim() === data.answer) {
          handleCorrect(data);
        } else {
          handleWrong();
        }
      };
      group.appendChild(input);
      group.appendChild(submitBtn);
      contentBox.appendChild(group);
    } else if (data.type === "multi") {
      const list = document.createElement("div");
      list.className = "checkbox-list";
      const checkboxes = [];

      data.options.forEach((optText, idx) => {
        const label = document.createElement("label");
        label.className = "checkbox-item";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.value = idx;
        checkboxes.push(cb);
        label.appendChild(cb);
        label.appendChild(document.createTextNode(optText));
        list.appendChild(label);
      });

      const submitBtn = document.createElement("button");
      submitBtn.className = "action-btn";
      submitBtn.style.marginTop = "6px";
      submitBtn.textContent = "確認";
      submitBtn.onclick = () => {
        const selected = checkboxes
          .filter(c => c.checked)
          .map(c => parseInt(c.value, 10));
        const isCorrect =
          selected.length === data.answers.length &&
          data.answers.every(val => selected.includes(val));

        if (isCorrect) {
          handleCorrect(data);
        } else {
          handleWrong();
        }
      };

      contentBox.appendChild(list);
      contentBox.appendChild(submitBtn);
    }
  }
}

// 處理答對邏輯
function handleCorrect(data) {
  if (!answeredPages.has(data.page)) {
    score += data.points || 0;
    scoreVal.textContent = score;
    answeredPages.add(data.page);
  }

  // 第 32 頁顯示總分
  if (data.type === "final_mcq") {
    feedbackBox.textContent = `${data.note} 🎉 你的總分是：${score} 分！`;
    feedbackBox.className = "feedback success";
    nextBtn.classList.add("hidden");
  } else {
    feedbackBox.textContent = data.note || "答對了！";
    feedbackBox.className = "feedback success";
    nextBtn.classList.remove("hidden");
  }
}

// 處理答錯邏輯
function handleWrong() {
  feedbackBox.textContent = "❌ 答錯了，請再試一次！";
  feedbackBox.className = "feedback error";
}

// 下一頁按鈕事件
nextBtn.addEventListener("click", () => {
  if (currentIndex < pages.length - 1) {
    currentIndex++;
    renderPage();
  }
});

// ================= 第 15 頁：房間電話輸入與熱點設定 =================
function setupRoomPage(data) {
  const p1 = document.getElementById("phone-p1");
  const p2 = document.getElementById("phone-p2");
  const p3 = document.getElementById("phone-p3");
  const submitBtn = document.getElementById("phone-submit-btn");
  const phoneFeedback = document.getElementById("phone-feedback");

  // 自動跳格功能
  p1.oninput = () => { if (p1.value.length === 3) p2.focus(); };
  p2.oninput = () => { if (p2.value.length === 4) p3.focus(); };

  submitBtn.onclick = () => {
    const fullNumber = `${p1.value.trim()}${p2.value.trim()}${p3.value.trim()}`;
    if (fullNumber === data.answer) {
      if (!answeredPages.has(data.page)) {
        score += data.points;
        scoreVal.textContent = score;
        answeredPages.add(data.page);
      }
      phoneFeedback.textContent = `${data.note}`;
      phoneFeedback.className = "feedback success";

      // 替換撥打按鈕為下一頁按鈕
      submitBtn.textContent = "下一頁 ▶";
      submitBtn.onclick = () => {
        currentIndex++;
        renderPage();
      };
    } else {
      phoneFeedback.textContent = "❌ 電話號碼不正確，請點擊房間物件尋找線索！";
      phoneFeedback.className = "feedback error";
    }
  };
}

// 綁定第 15 頁 5 個座標 Modal 事件
function openModalWithHTML(htmlContent) {
  modalBody.innerHTML = htmlContent;
  clueModal.classList.remove("hidden");
}

// 座標 1：紙條（桌上右側） -> paper.png
document.getElementById("hs-paper").addEventListener("click", () => {
  openModalWithHTML(`<img src="paper.png" alt="紙條線索">`);
});

// 座標 2：右邊上方櫃 -> 「空空如也」
document.getElementById("hs-top-drawer").addEventListener("click", () => {
  openModalWithHTML(`<p style="font-size: 1.4rem; padding: 24px 0;">空空如也</p>`);
});

// 座標 3：右邊下邊櫃 -> areacode.png
document.getElementById("hs-bottom-drawer").addEventListener("click", () => {
  openModalWithHTML(`<img src="areacode.png" alt="地區號碼線索">`);
});

// 座標 4：左邊櫃 -> YouTube video
document.getElementById("hs-left-cabinet").addEventListener("click", () => {
  openModalWithHTML(
    `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  );
});

// 座標 5：麻雀牌（桌上左側） -> mahjong.png
document.getElementById("hs-mahjong").addEventListener("click", () => {
  openModalWithHTML(`<img src="mahjong.png" alt="麻雀牌線索">`);
});

// 關閉 Modal（同時清空 iframe 停止播放影片）
closeModalBtn.addEventListener("click", () => {
  clueModal.classList.add("hidden");
  modalBody.innerHTML = "";
});

clueModal.addEventListener("click", (e) => {
  if (e.target === clueModal) {
    clueModal.classList.add("hidden");
    modalBody.innerHTML = "";
  }
});

// 啟動第一頁
renderPage();
