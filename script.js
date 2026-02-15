// Hero: плавный скролл по якорю и взаимодействие фона с курсором.
// Секция «Мои навыки»: карточки, localStorage, разворот по клику.

const SKILLS_STORAGE_KEY = 'my-journal-skills';
const SKILLS_INDEX_STORAGE_KEY = 'my-journal-skills-index';

document.addEventListener('DOMContentLoaded', function () {
  // Плавный скролл при клике на "Мои навыки"
  const cta = document.querySelector('.hero__cta');
  if (cta && cta.getAttribute('href') === '#skills') {
    cta.addEventListener('click', function (e) {
      const target = document.getElementById('skills');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Свечение фона следует за курсором по всей странице (меньше и ярче)
  function setMousePosition(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mouse-x', x + '%');
    document.body.style.setProperty('--mouse-y', y + '%');
  }
  document.addEventListener('mousemove', setMousePosition);
  document.addEventListener('touchmove', function (e) {
    if (e.touches.length) setMousePosition(e.touches[0]);
  }, { passive: true });

  // Частицы на всю страницу
  const particlesContainer = document.getElementById('site-bg-particles');
  if (particlesContainer) {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('span');
      p.className = 'site-bg__particle';
      const size = 3 + Math.random() * 4;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (12 + Math.random() * 16) + 's';
      p.style.animationDelay = -(Math.random() * 20) + 's';
      p.style.setProperty('--drift', (Math.random() - 0.5) * 30 + 'px');
      particlesContainer.appendChild(p);
    }
  }

  // Рипл при клике по фону (не по кнопкам/ссылкам/инпутам)
  document.addEventListener('click', function (e) {
    if (e.target.closest('a, button, input, [role="button"]')) return;
    const ripple = document.createElement('span');
    ripple.className = 'site-bg__ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.getElementById('site-bg').appendChild(ripple);
    ripple.addEventListener('animationend', function () {
      ripple.remove();
    });
  });

  // --- Секция «Мои навыки» ---
  const skillsGrid = document.getElementById('skills-grid');
  const addSkillBtn = document.getElementById('add-skill');
  if (!skillsGrid || !addSkillBtn) return;

  function loadSkills() {
    try {
      const raw = localStorage.getItem(SKILLS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveSkills(skills) {
    try {
      localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(skills));
    } catch (e) {
      console.warn('Не удалось сохранить навыки:', e);
    }
  }

  function createSkillCard(skill, index) {
    const learned = !!skill.learned;
    const card = document.createElement('div');
    card.className = 'skill-card' + (learned ? ' skill-card--learned' : '');
    card.innerHTML =
      '<h3 class="skill-card__title">' + escapeHtml(skill.title) + '</h3>' +
      '<p class="skill-card__desc">' + escapeHtml(skill.description) + '</p>' +
      '<div class="skill-card__actions">' +
      '<button type="button" class="skill-card__learned' + (learned ? ' skill-card__learned--on" title="Изучено">✓' : '" title="Отметить изученным">✓') + '</button>' +
      '<button type="button" class="skill-card__delete" title="Удалить навык">×</button>' +
      '</div>';
    card.addEventListener('click', function (e) {
      if (e.target.closest('.skill-card__actions')) return;
      card.classList.toggle('skill-card--expanded');
    });
    const learnedBtn = card.querySelector('.skill-card__learned');
    learnedBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const skills = loadSkills();
      skills[index].learned = !skills[index].learned;
      saveSkills(skills);
      renderSkills(skills);
    });
    const deleteBtn = card.querySelector('.skill-card__delete');
    deleteBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!confirm('Вы уверены, что хотите удалить этот навык?')) return;
      const skills = loadSkills();
      skills.splice(index, 1);
      saveSkills(skills);
      renderSkills(skills);
    });
    return card;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderSkills(skills) {
    skillsGrid.innerHTML = '';
    skills.forEach(function (skill, index) {
      skillsGrid.appendChild(createSkillCard(skill, index));
    });
  }

  function addSkill() {
    var title = prompt('Название навыка:', '');
    if (title === null) return;
    title = title.trim();
    if (!title) return;

    var description = prompt('Краткое описание:', '');
    if (description === null) description = '';
    description = description.trim();

    var skills = loadSkills();
    skills.push({ title: title, description: description || '—', learned: false });
    saveSkills(skills);
    renderSkills(skills);
  }

  addSkillBtn.addEventListener('click', addSkill);

  // Восстановление при загрузке
  var initialSkills = loadSkills();
  renderSkills(initialSkills);

  // --- Секция «Мой индекс навыков» ---
  var skillRanges = document.querySelectorAll('.skills-index__range');
  var skillOutputs = {
    html: document.getElementById('output-html'),
    css: document.getElementById('output-css'),
    js: document.getElementById('output-js'),
    ts: document.getElementById('output-ts'),
    react: document.getElementById('output-react'),
    llm: document.getElementById('output-llm')
  };
  var gaugeEl = document.getElementById('skills-index-gauge');
  var percentEl = document.getElementById('skills-index-percent');
  var labelEl = document.getElementById('skills-index-label');

  var SKILL_KEYS = ['html', 'css', 'js', 'ts', 'react', 'llm'];
  var SKILL_LABELS = [
    { min: 0, max: 25, text: 'Начинающий, верный старт' },
    { min: 26, max: 50, text: 'Прогрессируешь, держи темп' },
    { min: 51, max: 75, text: 'Уверенно растешь, почти junior' },
    { min: 76, max: 100, text: 'Сильная база - готов к портфолио.' }
  ];

  function loadSkillsIndex() {
    try {
      var raw = localStorage.getItem(SKILLS_INDEX_STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      var result = {};
      SKILL_KEYS.forEach(function (key) {
        var v = data[key];
        result[key] = typeof v === 'number' && v >= 0 && v <= 100 ? v : 0;
      });
      return result;
    } catch {
      return null;
    }
  }

  function saveSkillsIndex(values) {
    try {
      localStorage.setItem(SKILLS_INDEX_STORAGE_KEY, JSON.stringify(values));
    } catch (e) {
      console.warn('Не удалось сохранить индекс навыков:', e);
    }
  }

  function getSkillLevelLabel(percent) {
    var p = Math.round(percent);
    for (var i = 0; i < SKILL_LABELS.length; i++) {
      if (p >= SKILL_LABELS[i].min && p <= SKILL_LABELS[i].max) {
        return SKILL_LABELS[i].text;
      }
    }
    return SKILL_LABELS[0].text;
  }

  function updateSkillsIndex() {
    var values = {};
    var sum = 0;
    var count = skillRanges.length;
    skillRanges.forEach(function (input) {
      var val = parseInt(input.value, 10);
      sum += val;
      var key = input.getAttribute('data-skill');
      values[key] = val;
      if (skillOutputs[key]) {
        skillOutputs[key].textContent = val + '%';
      }
    });
    saveSkillsIndex(values);
    var average = count ? Math.round(sum / count) : 0;
    if (gaugeEl) {
      gaugeEl.style.width = average + '%';
      gaugeEl.setAttribute('aria-valuenow', average);
    }
    if (percentEl) percentEl.textContent = average + '%';
    if (labelEl) labelEl.textContent = getSkillLevelLabel(average);
  }

  var savedIndex = loadSkillsIndex();
  if (savedIndex) {
    skillRanges.forEach(function (input) {
      var key = input.getAttribute('data-skill');
      if (savedIndex[key] !== undefined) {
        input.value = savedIndex[key];
      }
    });
  }

  skillRanges.forEach(function (input) {
    input.addEventListener('input', updateSkillsIndex);
  });
  updateSkillsIndex();
});
