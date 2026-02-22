let activeSlideIndex = 0;

const slideNode = document.getElementById("slide");
const counterNode = document.getElementById("slideCounter");
const progressBarNode = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const DIFFICULTY_MAP = {
  "★★★★★": 5,
  "★★★★☆": 4,
  "★★★☆☆": 3,
  "★★☆☆☆": 2,
  "★☆☆☆☆": 1
};

function escapeHtml(value) {
  const safeValue = String(value ?? "");
  return safeValue
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMetrics(metrics = []) {
  if (!metrics.length) {
    return "";
  }

  const items = metrics
    .map(
      ({ value, label }) => `
        <article class="metric">
          <div class="metric-value">${escapeHtml(value)}</div>
          <div class="metric-label">${escapeHtml(label)}</div>
        </article>
      `
    )
    .join("");

  return `<section class="metric-row">${items}</section>`;
}

function renderBlocks(blocks = []) {
  if (!blocks.length) {
    return "";
  }

  const items = blocks
    .map(
      ({ title, content, badge }) => `
        <article class="card">
          <h3>${escapeHtml(title)}${badge ? `<span class="badge">${escapeHtml(badge)}</span>` : ""}</h3>
          <p>${escapeHtml(content)}</p>
        </article>
      `
    )
    .join("");

  return `<section class="grid-2">${items}</section>`;
}

function renderList(list = []) {
  if (!list.length) {
    return "";
  }

  const items = list.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `<section class="card"><ul>${items}</ul></section>`;
}

function renderPrograms(programs = []) {
  if (!programs.length) {
    return "";
  }

  const items = programs
    .map(({ code, name, provider, difficulty, type, effect }) => {
      const difficultyScore = DIFFICULTY_MAP[difficulty] || 1;
      return `
        <article class="program-card difficulty-${difficultyScore}">
          <p class="program-code">${escapeHtml(code)}</p>
          <h3 class="program-title">${escapeHtml(name)}</h3>
          <p class="program-provider"><strong>Провайдер:</strong> ${escapeHtml(provider)}</p>
          ${type ? `<p class="program-type"><strong>Тип помощи:</strong> ${escapeHtml(type)}</p>` : ""}
          <p class="program-difficulty"><strong>Достижимость:</strong> ${escapeHtml(difficulty)}</p>
          ${effect ? `<p class="program-effect"><strong>Эффект:</strong> ${escapeHtml(effect)}</p>` : ""}
        </article>
      `;
    })
    .join("");

  return `<section class="program-grid">${items}</section>`;
}

function renderReferences(references = []) {
  if (!references.length) {
    return "";
  }

  const items = references
    .map(({ code, title, provider, url }) => `
      <article class="ref-card">
        <p class="ref-code">${escapeHtml(code || "")}</p>
        <h3 class="ref-title">${escapeHtml(title || "")}</h3>
        <p class="ref-provider"><strong>Провайдер:</strong> ${escapeHtml(provider || "")}</p>
        <a class="ref-link" href="${escapeHtml(url || "#")}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(url || "")}
        </a>
      </article>
    `)
    .join("");

  return `<section class="refs-grid">${items}</section>`;
}

function renderSlide() {
  const slide = slides[activeSlideIndex];
  if (!slide) {
    slideNode.innerHTML = "<p>Нет данных для отображения.</p>";
    return;
  }

  slideNode.innerHTML = `
    <p class="slide-kicker">${escapeHtml(slide.kicker || "")}</p>
    <h2 class="slide-title">${escapeHtml(slide.title || "")}</h2>
    <p class="slide-subtitle">${escapeHtml(slide.subtitle || "")}</p>
    ${renderMetrics(slide.metrics)}
    ${renderPrograms(slide.programs)}
    ${renderReferences(slide.references)}
    ${renderBlocks(slide.blocks)}
    ${renderList(slide.list)}
  `;

  counterNode.textContent = `Слайд ${activeSlideIndex + 1} / ${slides.length}`;
  progressBarNode.style.width = `${((activeSlideIndex + 1) / slides.length) * 100}%`;
  prevBtn.disabled = activeSlideIndex === 0;
  nextBtn.disabled = activeSlideIndex === slides.length - 1;
}

function goToSlide(index) {
  const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
  if (boundedIndex === activeSlideIndex) {
    return;
  }

  activeSlideIndex = boundedIndex;
  renderSlide();
}

prevBtn.addEventListener("click", () => {
  goToSlide(activeSlideIndex - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(activeSlideIndex + 1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    goToSlide(activeSlideIndex + 1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    goToSlide(activeSlideIndex - 1);
  }

  if (event.key === "Home") {
    goToSlide(0);
  }

  if (event.key === "End") {
    goToSlide(slides.length - 1);
  }
});

renderSlide();
