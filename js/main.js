/* =========================================================
   InfraTech — interações do site
   ---------------------------------------------------------
   PARA EDITAR A EQUIPE: altere apenas o array teamMembers.
   PARA EDITAR OS CANAIS: altere apenas o objeto companyLinks.
   ========================================================= */

/* ---------- 1. EQUIPE (9 integrantes) ----------
   foto:      caminho da foto, ex.: "./assets/equipe/carlos.jpg" (deixe "" para mostrar as iniciais)
   site:      link do site pessoal / portfólio
   linkedin, instagram, github: links das redes (deixe "" para esconder o botão)
   email:     endereço de e-mail (sem "mailto:")
   nivel:     "lideranca" | "gerencia" | "operacao"                              */
const teamMembers = [
  {
    nome: "Carlos",
    cargo: "CEO e líder da equipe",
    nivel: "lideranca",
    descricao: "Decide os rumos da empresa, resolve conflitos e cuida do relacionamento institucional.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Rafael Coimbra",
    cargo: "Co-CEO e gerente de projeto",
    nivel: "lideranca",
    descricao: "Divide a liderança da equipe e coordena o site survey e os layouts inicial e final.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Henrique",
    cargo: "Gerente de materiais",
    nivel: "gerencia",
    descricao: "Monta a lista de materiais do projeto físico e define as ferramentas da execução.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Mateus Lúcio",
    cargo: "Gerente administrativo",
    nivel: "gerencia",
    descricao: "Reúne a documentação, mantém a planilha compartilhada no Drive e monta a proposta final.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Rafael Furtado",
    cargo: "Gerente de comunicação",
    nivel: "gerencia",
    descricao: "Faz a ponte com a empresa contratante e cuida das redes sociais da InfraTech.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Luca",
    cargo: "Gerente de TI",
    nivel: "gerencia",
    descricao: "Responsável pelo projeto lógico da rede, pela logomarca e pelo site da empresa.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Paulo",
    cargo: "Gerente de IA",
    nivel: "gerencia",
    descricao: "Pesquisa ferramentas de IA para apoiar cada gerência e treinar clientes e usuários.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Caio Fernandes",
    cargo: "Colaborador",
    nivel: "operacao",
    descricao: "Apoia todas as gerências quando solicitado e atua na execução e no site survey.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  },
  {
    nome: "Enzo",
    cargo: "Colaborador",
    nivel: "operacao",
    descricao: "Apoia todas as gerências quando solicitado e atua na execução e no site survey.",
    foto: "", site: "", linkedin: "", instagram: "", github: "", email: ""
  }
];

/* ---------- 2. CANAIS OFICIAIS DA EMPRESA ----------
   Deixe url "" enquanto o link não existir: o botão avisa que ainda está em configuração. */
const companyLinks = [
  { titulo: "Documentação do projeto", detalhe: "Google Drive, gerência administrativa", url: "" },
  { titulo: "Instagram da InfraTech", detalhe: "Gerência de comunicação", url: "" },
  { titulo: "Grupo com a empresa contratante", detalhe: "Gerência de comunicação", url: "" },
  { titulo: "E-mail institucional", detalhe: "contato@infratech.com.br", url: "" }
];

/* ========================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const escapeHTML = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Toast ---------- */
let toastTimer;
function showToast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 3200);
}

/* ---------- Tema claro / escuro ---------- */
function initTheme() {
  const root = document.documentElement;
  const btn = $("#themeToggle");
  const meta = $('meta[name="theme-color"]');

  const apply = (tema) => {
    root.setAttribute("data-theme", tema);
    btn.setAttribute("aria-label", tema === "escuro" ? "Ativar modo claro" : "Ativar modo escuro");
    meta.setAttribute("content", tema === "escuro" ? "#0D1014" : "#F5F6F7");
  };

  apply(root.getAttribute("data-theme") === "claro" ? "claro" : "escuro");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "escuro" ? "claro" : "escuro";
    apply(next);
    try { localStorage.setItem("infratech-tema", next); } catch (e) {}
  });
}

/* ---------- Menu mobile ---------- */
function initMenu() {
  const btn = $("#menuToggle");
  const menu = $("#menu");
  const close = () => {
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir menu");
  };
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  $$("a", menu).forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- Navegação: destaca a seção visível ---------- */
function initScrollSpy() {
  const links = $$(".nav__menu a");
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.removeAttribute("aria-current"));
          const a = map.get(en.target.id);
          if (a) a.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) obs.observe(s); });
}

/* ---------- Quadro de circuitos do hero ----------
   Lê o conteúdo direto dos artigos da seção Soluções (uma única fonte de texto). */
function initQuadro() {
  const tabs = $$(".circ");
  const panel = $("#qd-detail");

  const show = (tab, focus = false) => {
    const art = document.getElementById(tab.dataset.target);
    if (!art) return;
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", tab.id);
    const title = $("h3", art).textContent;
    const focusTxt = $(".circuit__focus", art).textContent;
    const consult = $('[data-part="consult"] p', art).textContent;
    const exec = $('[data-part="exec"] p', art).textContent;
    panel.innerHTML = `
      <h3>${escapeHTML(title)}</h3>
      <p class="qd__focus">${escapeHTML(focusTxt)}</p>
      <h4>Consultoria</h4><p>${escapeHTML(consult)}</p>
      <h4>Execução</h4><p>${escapeHTML(exec)}</p>
      <a class="qd__more" href="#${art.id}">Ver na seção de soluções</a>`;
    if (focus) tab.focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => show(tab));
    tab.addEventListener("keydown", (e) => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (e.key in keys) {
        e.preventDefault();
        show(tabs[(i + keys[e.key] + tabs.length) % tabs.length], true);
      }
    });
  });

  // Ao seguir o link "Ver na seção de soluções", destaca o circuito por um instante
  panel.addEventListener("click", (e) => {
    const a = e.target.closest(".qd__more");
    if (!a) return;
    const art = document.querySelector(a.getAttribute("href"));
    art.classList.remove("is-flash");
    void art.offsetWidth;
    art.classList.add("is-flash");
  });

  show(tabs[0]);
}

/* ---------- Equipe ---------- */
const initials = (nome) => {
  const p = nome.trim().split(/\s+/);
  return (p.length > 1 ? p[0][0] + p[p.length - 1][0] : nome.slice(0, 2)).toUpperCase();
};

function linkButton(label, url, isMail = false) {
  if (url === undefined) return "";
  if (!url) {
    return `<button type="button" class="chip" data-pending="${escapeHTML(label)}">${escapeHTML(label)}</button>`;
  }
  const href = isMail ? `mailto:${url}` : url;
  const ext = isMail ? "" : ' target="_blank" rel="noopener noreferrer"';
  return `<a class="chip" href="${escapeHTML(href)}"${ext}>${escapeHTML(label)}</a>`;
}

function memberCard(p) {
  const avatar = p.foto
    ? `<img class="avatar" src="${escapeHTML(p.foto)}" alt="Foto de ${escapeHTML(p.nome)}" loading="lazy" data-initials="${initials(p.nome)}">`
    : `<span class="avatar" aria-hidden="true">${initials(p.nome)}</span>`;

  const chips = [
    linkButton("Site pessoal", p.site),
    linkButton("LinkedIn", p.linkedin),
    p.github ? linkButton("GitHub", p.github) : "",
    linkButton("Instagram", p.instagram),
    linkButton("E-mail", p.email, true)
  ].join("");

  return `
    <article class="member member--${p.nivel}">
      <div class="member__head">
        ${avatar}
        <div>
          <h3>${escapeHTML(p.nome)}</h3>
          <p class="member__role">${escapeHTML(p.cargo)}</p>
        </div>
      </div>
      <p class="member__desc">${escapeHTML(p.descricao)}</p>
      <div class="member__links">${chips}</div>
    </article>`;
}

function renderTeam() {
  const tiers = [
    { nivel: "lideranca", titulo: "Liderança" },
    { nivel: "gerencia", titulo: "Gerências" },
    { nivel: "operacao", titulo: "Operação" }
  ];
  $("#org").innerHTML = tiers
    .map(({ nivel, titulo }) => {
      const people = teamMembers.filter((p) => p.nivel === nivel);
      return `
        <div class="tier tier--${nivel}">
          <h3 class="tier__label">${titulo} <span>${people.length}</span></h3>
          <div class="tier__row">${people.map(memberCard).join("")}</div>
        </div>`;
    })
    .join("");

  // Se a foto não carregar, volta para as iniciais
  $$("#org img.avatar").forEach((img) => {
    img.addEventListener("error", () => {
      const span = document.createElement("span");
      span.className = "avatar";
      span.setAttribute("aria-hidden", "true");
      span.textContent = img.dataset.initials;
      img.replaceWith(span);
    });
  });

  $("#footerTeam").textContent = teamMembers.map((p) => p.nome).join(", ") + ".";
}

/* ---------- Canais ---------- */
function renderChannels() {
  $("#channels").innerHTML =
    `<h3>Canais oficiais</h3>` +
    companyLinks
      .map((c) => {
        const inner = `<span><strong>${escapeHTML(c.titulo)}</strong><small>${escapeHTML(c.detalhe)}</small></span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
        return c.url
          ? `<a class="channel" href="${escapeHTML(c.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
          : `<button type="button" class="channel" data-pending="${escapeHTML(c.titulo)}">${inner}</button>`;
      })
      .join("");
}

/* Links ainda sem URL avisam em vez de levar a lugar nenhum */
function initPendingLinks() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-pending]");
    if (el) showToast(`${el.dataset.pending}: link ainda não configurado.`);
  });
}

/* ---------- Formulário ---------- */
function initForm() {
  const form = $("#contactForm");
  const msg = $("#formMsg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = $$("[required]", form);
    let firstInvalid = null;
    fields.forEach((f) => {
      const ok = f.value.trim() !== "" && f.checkValidity();
      f.setAttribute("aria-invalid", String(!ok));
      if (!ok && !firstInvalid) firstInvalid = f;
    });
    if (firstInvalid) {
      msg.className = "form__msg is-error";
      msg.textContent = firstInvalid.type === "email" && firstInvalid.value
        ? "Digite um e-mail válido, por exemplo nome@empresa.com.br."
        : "Preencha nome, e-mail e mensagem para enviar.";
      firstInvalid.focus();
      return;
    }
    msg.className = "form__msg is-ok";
    msg.textContent = "Mensagem enviada. Respondemos em até dois dias úteis.";
    form.reset();
    fields.forEach((f) => f.removeAttribute("aria-invalid"));
  });
  form.addEventListener("input", (e) => {
    if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity() && e.target.value.trim()) {
      e.target.setAttribute("aria-invalid", "false");
    }
  });
}

/* ---------- Início ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();
  initQuadro();
  renderTeam();
  renderChannels();
  initPendingLinks();
  initForm();
  initScrollSpy();
});
