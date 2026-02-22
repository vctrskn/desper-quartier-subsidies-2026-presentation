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
      ({ title, content }) => `
        <article class="card">
          <h3>${escapeHtml(title)}</h3>
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
    .map(
      ({ code, title, provider, url }) => `
        <article class="ref-card">
          <p class="ref-code">${escapeHtml(code || "")}</p>
          <h3 class="ref-title">${escapeHtml(title || "")}</h3>
          <p class="ref-provider"><strong>Провайдер:</strong> ${escapeHtml(provider || "")}</p>
          <a class="ref-link" href="${escapeHtml(url || "#")}">${escapeHtml(url || "")}</a>
        </article>
      `
    )
    .join("");

  return `<section class="refs-grid">${items}</section>`;
}

function renderSlide(slide, index, total) {
  return `
    <section class="slide print-slide">
      <p class="slide-kicker">${escapeHtml(slide.kicker || "")}</p>
      <h2 class="slide-title">${escapeHtml(slide.title || "")}</h2>
      <p class="slide-subtitle">${escapeHtml(slide.subtitle || "")}</p>
      <p class="slide-kicker">Слайд ${index + 1} / ${total}</p>
      ${renderMetrics(slide.metrics)}
      ${renderPrograms(slide.programs)}
      ${renderReferences(slide.references)}
      ${renderBlocks(slide.blocks)}
      ${renderList(slide.list)}
    </section>
  `;
}

const rootNode = document.getElementById("printRoot");
rootNode.innerHTML = slides.map((slide, index) => renderSlide(slide, index, slides.length)).join("");
