// =================================================================
// RUMO AO ENEM 2026 - LÓGICA E INTERATIVIDADE
// =================================================================

document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initStudySection();
    initEssaySection();
    initExamSection();
});

/* =================================================================
   1. GERENCIAMENTO DAS 3 ABAS PRINCIPAIS
   ================================================================= */
function initTabs() {
    const tabs = document.querySelectorAll(".nav-tab");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetId = tab.getAttribute("data-tab");

            // Atualiza abas
            tabs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            // Atualiza painéis
            panes.forEach(pane => {
                pane.classList.remove("active");
                if (pane.id === targetId) {
                    pane.classList.add("active");
                }
            });

            // Scroll suave pro topo do conteúdo
            window.scrollTo({ top: 180, behavior: "smooth" });
        });
    });
}

/* =================================================================
   2. ABA 1: CONTEÚDO PARA ESTUDAR
   ================================================================= */
function initStudySection() {
    const container = document.getElementById("study-cards-container");
    const searchInput = document.getElementById("subject-search");
    const chips = document.querySelectorAll(".area-chips .chip");

    let currentArea = "all";
    let searchQuery = "";

    function renderCards() {
        container.innerHTML = "";

        const areas = Object.keys(STUDY_CONTENT);

        areas.forEach(areaKey => {
            if (currentArea !== "all" && currentArea !== areaKey) return;

            const areaData = STUDY_CONTENT[areaKey];
            const areaTagClass = `tag-${areaKey}`;

            areaData.subjects.forEach(subject => {
                // Filtro de busca
                const matchesSearch = 
                    subject.name.toLowerCase().includes(searchQuery) ||
                    subject.summary.toLowerCase().includes(searchQuery) ||
                    subject.topics.some(t => t.toLowerCase().includes(searchQuery));

                if (!matchesSearch) return;

                const card = document.createElement("div");
                card.className = "subject-card";

                const topicsHtml = subject.topics
                    .map(topic => `<li><i class="fa-solid fa-check"></i> <span>${topic}</span></li>`)
                    .join("");

                card.innerHTML = `
                    <span class="card-area-tag ${areaTagClass}">
                        <i class="fa-solid ${areaData.icon}"></i> ${areaData.title}
                    </span>
                    <h3 class="subject-card-title"><i class="fa-solid fa-bookmark"></i> ${subject.name}</h3>
                    <div class="subject-summary-quote">${subject.summary}</div>
                    <div class="topics-heading">Tópicos Mais Recorrentes:</div>
                    <ul class="subject-topics-list">
                        ${topicsHtml}
                    </ul>
                `;

                container.appendChild(card);
            });
        });

        if (container.children.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; color: #cbd5e1;"></i>
                    <p style="font-size: 1.1rem; font-weight: 600;">Nenhum conteúdo encontrado para "${searchQuery}".</p>
                    <p style="font-size: 0.9rem;">Tente pesquisar por termos como "Ecologia", "Funções", "Vargas" ou "Modernismo".</p>
                </div>
            `;
        }
    }

    // Eventos de filtro
    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentArea = chip.getAttribute("data-area");
            renderCards();
        });
    });

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCards();
    });

    renderCards();
}

/* =================================================================
   3. ABA 2: CONTEÚDO PARA REDAÇÃO
   ================================================================= */
function initEssaySection() {
    // 1. Renderizar Competências
    const compContainer = document.getElementById("competencies-container");
    if (compContainer) {
        compContainer.innerHTML = ESSAY_CONTENT.competencies.map(c => `
            <div class="competency-card">
                <div class="comp-header">
                    <span class="comp-badge">${c.comp.split(" ")[0]} ${c.comp.split(" ")[1]}</span>
                    <span class="comp-points">200 pts</span>
                </div>
                <h4 class="comp-title">${c.title}</h4>
                <p class="comp-desc">${c.desc}</p>
            </div>
        `).join("");
    }

    // 2. Renderizar Estrutura dos 4 Parágrafos
    const structContainer = document.getElementById("structure-container");
    if (structContainer) {
        structContainer.innerHTML = ESSAY_CONTENT.structure.map(s => `
            <div class="structure-card">
                <h4>${s.part}</h4>
                <div class="structure-goals"><strong>Objetivo:</strong> ${s.goals}</div>
                <div class="structure-formula"><strong>Como estruturar:</strong> ${s.formula}</div>
            </div>
        `).join("");
    }

    // 3. Renderizar Conectivos
    const connContainer = document.getElementById("connectives-container");
    if (connContainer) {
        connContainer.innerHTML = ESSAY_CONTENT.connectives.map(item => `
            <div class="connective-group">
                <h5><i class="fa-solid fa-angles-right"></i> ${item.use}</h5>
                <ul>
                    ${item.examples.map(ex => `<li class="connective-pill">${ex}</li>`).join("")}
                </ul>
            </div>
        `).join("");
    }

    // 4. Renderizar Exemplo de Redação Nota 1000
    const sampleContainer = document.getElementById("sample-essay-container");
    if (sampleContainer) {
        sampleContainer.innerHTML = `
            <div class="sample-essay-title">
                <i class="fa-solid fa-trophy"></i> ${ESSAY_CONTENT.sampleEssay.title}
            </div>
            <div class="sample-essay-text">${ESSAY_CONTENT.sampleEssay.text}</div>
        `;
    }

    // 5. Laboratório de Rascunho de Redação
    const topicSelect = document.getElementById("topic-select");
    const topicInfoDisplay = document.getElementById("topic-info-display");
    const essayTextarea = document.getElementById("essay-draft");
    const lineCounter = document.getElementById("line-counter");
    const wordCounter = document.getElementById("word-counter");
    const btnClear = document.getElementById("btn-clear-essay");
    const btnGrade = document.getElementById("btn-grade-essay");
    const feedbackBox = document.getElementById("essay-feedback");

    // Preenche seletor de temas
    ESSAY_CONTENT.essayTopics.forEach((t, index) => {
        const opt = document.createElement("option");
        opt.value = index;
        opt.textContent = t.title;
        topicSelect.appendChild(opt);
    });

    function updateTopicDisplay() {
        const selected = ESSAY_CONTENT.essayTopics[topicSelect.value];
        topicInfoDisplay.innerHTML = `
            <h4><i class="fa-solid fa-bullseye"></i> Tema: "${selected.title}"</h4>
            <p><strong>Contextualização:</strong> ${selected.context}</p>
            <p><strong>Repertório sugerido:</strong> ${selected.quote}</p>
        `;
    }

    topicSelect.addEventListener("change", updateTopicDisplay);
    updateTopicDisplay();

    // Contadores de linhas e palavras
    essayTextarea.addEventListener("input", () => {
        const text = essayTextarea.value;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        
        // Estima linhas: quebras de linha explícitas + quebras automáticas por comprimento (~68 caracteres por linha do ENEM)
        const linesList = text.split("\n");
        let lineCount = 0;
        linesList.forEach(line => {
            if (line.length === 0) {
                lineCount += 1;
            } else {
                lineCount += Math.ceil(line.length / 68);
            }
        });
        if (text.length === 0) lineCount = 0;

        lineCounter.innerHTML = `<i class="fa-solid fa-bars-staggered"></i> Linhas: <strong>${lineCount} / 30</strong> (Mínimo: 7)`;
        wordCounter.innerHTML = `<i class="fa-solid fa-file-lines"></i> Palavras: <strong>${words}</strong>`;

        if (lineCount > 30) {
            lineCounter.style.color = "var(--danger)";
        } else if (lineCount >= 7) {
            lineCounter.style.color = "var(--success)";
        } else {
            lineCounter.style.color = "var(--text-muted)";
        }
    });

    btnClear.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja apagar o rascunho atual?")) {
            essayTextarea.value = "";
            essayTextarea.dispatchEvent(new Event("input"));
            feedbackBox.classList.add("hidden");
        }
    });

    btnGrade.addEventListener("click", () => {
        const text = essayTextarea.value.trim();
        if (text.length < 50) {
            alert("Escreva pelo menos alguns parágrafos para que possamos analisar sua estrutura!");
            return;
        }

        const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
        const hasConnectives = ["portanto", "ademais", "outrossim", "além disso", "contudo", "entretanto"]
            .some(conn => text.toLowerCase().includes(conn));
        const hasConstitutionOrScholar = ["constituição", "artigo", "segundo", "bauman", "foucault", "durkheim", "filósofo", "kant"]
            .some(rep => text.toLowerCase().includes(rep));
        const hasProposalElements = ["ministério", "governo", "sociedade", "escolas", "ong", "a fim de", "por meio", "mediante"]
            .some(prop => text.toLowerCase().includes(prop));

        let scoreEstimate = 400;
        const tips = [];

        if (paragraphs.length === 4) {
            scoreEstimate += 200;
            tips.push("✅ Parabéns: você organizou o texto exatamente nos 4 parágrafos padrão (Introdução, D1, D2 e Proposta).");
        } else {
            tips.push(`⚠️ Atenção: você escreveu ${paragraphs.length} parágrafos. O padrão de ouro do ENEM são rigorosamente 4 parágrafos.`);
        }

        if (hasConnectives) {
            scoreEstimate += 120;
            tips.push("✅ Boa coesão: detectamos conectivos interparágrafos expressivos.");
        } else {
            tips.push("⚠️ Use mais conectivos para iniciar seus parágrafos ('Ademais', 'Outrossim', 'Portanto').");
        }

        if (hasConstitutionOrScholar) {
            scoreEstimate += 140;
            tips.push("✅ Repertório sociocultural identificado no texto!");
        } else {
            tips.push("⚠️ Lembre-se de citar teóricos (Bauman, Kant, Durkheim) ou a Constituição de 1988 para legitimar a tese.");
        }

        if (hasProposalElements) {
            scoreEstimate += 140;
            tips.push("✅ Proposta de intervenção com indicativos claros de agentes e finalidade.");
        } else {
            tips.push("⚠️ Revise sua conclusão: certifique-se de ter Agente, Ação, Meio/Modo, Detalhamento e Efeito.");
        }

        scoreEstimate = Math.min(1000, scoreEstimate);

        feedbackBox.classList.remove("hidden");
        feedbackBox.innerHTML = `
            <h4><i class="fa-solid fa-chart-line"></i> Diagnóstico do Rascunho pelo Estudante:</h4>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem;">
                Estimativa de Nota Estrutural: ~${scoreEstimate} / 1000
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
                ${tips.map(t => `<li>${t}</li>`).join("")}
            </ul>
        `;
    });
}

/* =================================================================
   4. ABA 3: PROVA DE TESTE (SIMULADOR DO ENEM)
   ================================================================= */
let examState = {
    active: false,
    day: null, // "day1" ou "day2"
    durationSeconds: 0,
    timerInterval: null,
    isPaused: false,
    questions: [],
    userAnswers: {},
    selectedLang: "en" // "en" ou "es"
};

function initExamSection() {
    const btnStartList = document.querySelectorAll(".btn-start-exam");
    const runnerContainer = document.getElementById("active-exam-container");
    const criteriaCards = document.querySelector(".exam-criteria-cards");
    const resultsContainer = document.getElementById("exam-results-container");

    const timerDisplay = document.getElementById("exam-timer");
    const btnPauseTimer = document.getElementById("btn-pause-timer");
    const btnAbandonExam = document.getElementById("btn-abandon-exam");
    const btnFinishExam = document.getElementById("btn-finish-exam");
    const btnBottomFinish = document.getElementById("btn-bottom-finish");
    const langSelect = document.getElementById("lang-select");

    const btnRestart = document.getElementById("btn-restart-exam");
    const btnBackStudy = document.getElementById("btn-back-to-study");

    // Iniciar Simulado (1º ou 2º Dia com 45 Questões)
    btnStartList.forEach(btn => {
        btn.addEventListener("click", () => {
            const day = btn.getAttribute("data-day");
            startExam(day);
        });
    });

    function startExam(day) {
        examState.active = true;
        examState.day = day;
        examState.userAnswers = {};
        examState.isPaused = false;

        // Critérios de tempo do exame:
        // 1º Dia: 5 horas e 30 minutos = 19800 segundos
        // 2º Dia: 5 horas = 18000 segundos
        examState.durationSeconds = (day === "day1") ? (5 * 3600 + 30 * 60) : (5 * 3600);

        // Oculta cards de critérios e resultados; exibe o runner
        criteriaCards.classList.add("hidden");
        resultsContainer.classList.add("hidden");
        runnerContainer.classList.remove("hidden");

        const dayTitleEl = document.getElementById("exam-day-title");
        const langBox = document.getElementById("language-choice-box");
        const essayProposalBox = document.getElementById("exam-essay-section");

        if (day === "day1") {
            dayTitleEl.textContent = "1º DIA • Linguagens, Humanas & Redação • 45 Questões";
            langBox.classList.remove("hidden");
            essayProposalBox.classList.remove("hidden");
            setupDay1Essay();
        } else {
            dayTitleEl.textContent = "2º DIA • Ciências da Natureza & Matemática • 45 Questões";
            langBox.classList.add("hidden");
            essayProposalBox.classList.add("hidden");
        }

        // Carregar exatamente as 45 questões
        loadQuestions();
        startTimer();

        // Scroll para o topo da prova
        runnerContainer.scrollIntoView({ behavior: "smooth" });
    }

    function setupDay1Essay() {
        const themeBox = document.getElementById("exam-proposal-theme");
        const topic = ESSAY_CONTENT.essayTopics[0];
        themeBox.innerHTML = `
            <h4><i class="fa-solid fa-pen-fancy"></i> TEMA DA REDAÇÃO DO 1º DIA:</h4>
            <p style="font-size: 1.05rem; font-weight: 700; margin: 0.5rem 0; color: #1e1b4b;">"${topic.title}"</p>
            <p style="font-size: 0.88rem; color: #475569;"><strong>Textos Motivadores:</strong> ${topic.context} Considere também o Artigo 205 da Constituição da República de 1988.</p>
        `;

        const essayInput = document.getElementById("exam-essay-text");
        const essayLines = document.getElementById("exam-essay-lines");
        essayInput.addEventListener("input", () => {
            const count = Math.ceil(essayInput.value.length / 68);
            essayLines.textContent = `Linhas aproximadas: ${count} / 30`;
        });
    }

    function loadQuestions() {
        // Gera rigorosamente as 45 questões
        examState.selectedLang = langSelect.value || "en";
        examState.questions = generateEnemDayQuestions(examState.day, examState.selectedLang);
        renderExamInterface();
    }

    langSelect.addEventListener("change", () => {
        if (examState.active && examState.day === "day1") {
            examState.selectedLang = langSelect.value;
            loadQuestions();
        }
    });

    function renderExamInterface() {
        const container = document.getElementById("exam-questions-container");
        const pillsContainer = document.getElementById("questions-nav-pills");
        const totalCountEl = document.getElementById("total-questions-count");

        container.innerHTML = "";
        pillsContainer.innerHTML = "";
        totalCountEl.textContent = examState.questions.length;

        examState.questions.forEach((q, index) => {
            const qNum = index + 1;

            // Pílula de navegação rápida
            const pill = document.createElement("button");
            pill.className = "q-nav-pill";
            pill.id = `pill-q-${q.id}`;
            pill.textContent = qNum;
            pill.title = `Ir para Questão ${qNum} (${q.subject})`;
            pill.addEventListener("click", () => {
                const targetCard = document.getElementById(`q-card-${q.id}`);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            });
            pillsContainer.appendChild(pill);

            // Card da Questão
            const card = document.createElement("div");
            card.className = "question-card";
            card.id = `q-card-${q.id}`;

            const letters = ["A", "B", "C", "D", "E"];
            const optionsHtml = q.options.map((opt, optIndex) => `
                <div class="option-item" data-qid="${q.id}" data-opt="${optIndex}">
                    <span class="option-letter">${letters[optIndex]}</span>
                    <span class="option-text">${opt}</span>
                </div>
            `).join("");

            card.innerHTML = `
                <div class="question-card-header">
                    <span class="q-number">Questão ${qNum} de ${examState.questions.length}</span>
                    <span class="q-subject-badge">${q.subject} • ${q.area}</span>
                </div>
                <div class="question-base-text">${q.text}</div>
                <div class="question-prompt">${q.question}</div>
                <div class="options-group">
                    ${optionsHtml}
                </div>
            `;

            container.appendChild(card);
        });

        // Event listener de clique nas alternativas
        container.querySelectorAll(".option-item").forEach(item => {
            item.addEventListener("click", () => {
                const qid = parseInt(item.getAttribute("data-qid"));
                const optIndex = parseInt(item.getAttribute("data-opt"));

                examState.userAnswers[qid] = optIndex;

                const parentGroup = item.closest(".options-group");
                parentGroup.querySelectorAll(".option-item").forEach(o => o.classList.remove("selected"));
                item.classList.add("selected");

                const targetPill = document.getElementById(`pill-q-${qid}`);
                if (targetPill) {
                    targetPill.classList.add("answered");
                }

                updateProgress();
            });
        });

        updateProgress();
    }

    function updateProgress() {
        const answeredCount = Object.keys(examState.userAnswers).length;
        const total = examState.questions.length;
        const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

        document.getElementById("answered-count").textContent = answeredCount;
        document.getElementById("progress-percent").textContent = `${percent}%`;
        document.getElementById("exam-progress-bar").style.width = `${percent}%`;
    }

    function startTimer() {
        if (examState.timerInterval) clearInterval(examState.timerInterval);

        examState.timerInterval = setInterval(() => {
            if (!examState.isPaused) {
                if (examState.durationSeconds > 0) {
                    examState.durationSeconds--;
                    updateTimerDisplay();
                } else {
                    clearInterval(examState.timerInterval);
                    alert("⏰ O tempo oficial da prova acabou! Seus cartões de resposta serão processados.");
                    finishExam();
                }
            }
        }, 1000);

        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        const hours = Math.floor(examState.durationSeconds / 3600);
        const minutes = Math.floor((examState.durationSeconds % 3600) / 60);
        const seconds = examState.durationSeconds % 60;

        timerDisplay.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    btnPauseTimer.addEventListener("click", () => {
        examState.isPaused = !examState.isPaused;
        btnPauseTimer.innerHTML = examState.isPaused ? 
            `<i class="fa-solid fa-play"></i>` : 
            `<i class="fa-solid fa-pause"></i>`;
    });

    btnAbandonExam.addEventListener("click", () => {
        if (confirm("Deseja realmente sair da prova? Todo o progresso deste simulado será descartado.")) {
            clearInterval(examState.timerInterval);
            examState.active = false;
            runnerContainer.classList.add("hidden");
            criteriaCards.classList.remove("hidden");
            window.scrollTo({ top: 200, behavior: "smooth" });
        }
    });

    btnFinishExam.addEventListener("click", confirmFinish);
    btnBottomFinish.addEventListener("click", confirmFinish);

    function confirmFinish() {
        const answeredCount = Object.keys(examState.userAnswers).length;
        const total = examState.questions.length;
        const unanswered = total - answeredCount;

        let msg = "Deseja finalizar o simulado e gerar o relatório de performance?";
        if (unanswered > 0) {
            msg = `Você ainda tem ${unanswered} questão(ões) em branco de um total de ${total}! Deseja finalizar mesmo assim?`;
        }

        if (confirm(msg)) {
            finishExam();
        }
    }

    function finishExam() {
        clearInterval(examState.timerInterval);
        examState.active = false;

        runnerContainer.classList.add("hidden");
        resultsContainer.classList.remove("hidden");

        calculateAndDisplayResults();
        resultsContainer.scrollIntoView({ behavior: "smooth" });
    }

    function calculateAndDisplayResults() {
        let correctCount = 0;
        const totalQuestions = examState.questions.length;
        const solutionsContainer = document.getElementById("solutions-list-container");
        solutionsContainer.innerHTML = "";

        // Estrutura de estatísticas por matéria
        const subjectStats = {};
        const letters = ["A", "B", "C", "D", "E"];

        examState.questions.forEach((q, idx) => {
            // Inicializa estatística da matéria
            if (!subjectStats[q.subject]) {
                subjectStats[q.subject] = {
                    name: q.subject,
                    area: q.area,
                    total: 0,
                    correct: 0
                };
            }
            subjectStats[q.subject].total++;

            const userAnswer = examState.userAnswers[q.id];
            const isCorrect = (userAnswer !== undefined && userAnswer === q.correct);

            if (isCorrect) {
                correctCount++;
                subjectStats[q.subject].correct++;
            }

            // Item do Gabarito
            const solItem = document.createElement("div");
            solItem.className = `solution-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

            const badgeHtml = isCorrect ? 
                `<span class="solution-badge badge-correct"><i class="fa-solid fa-check"></i> Você acertou!</span>` : 
                `<span class="solution-badge badge-wrong"><i class="fa-solid fa-xmark"></i> ${userAnswer === undefined ? 'Não respondida' : 'Você marcou: (' + letters[userAnswer] + ')'}</span>`;

            solItem.innerHTML = `
                ${badgeHtml}
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.4rem;">
                    <strong>Questão ${idx + 1} de ${totalQuestions}:</strong> ${q.subject} • ${q.area}
                </div>
                <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.92rem;">${q.question}</div>
                <div style="font-size: 0.88rem; color: var(--primary-hover);">
                    <strong>Alternativa Correta: (${letters[q.correct]})</strong> ${q.options[q.correct]}
                </div>
                <div class="solution-explanation">
                    <strong>Resolução comentada:</strong> ${q.explanation}
                </div>
            `;

            solutionsContainer.appendChild(solItem);
        });

        const percent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
        const wrongCount = totalQuestions - correctCount;

        // Estimativa TRI ponderada (350 a 920 pontos)
        const estimatedTri = Math.round(380 + (percent / 100) * 520);

        document.getElementById("results-day-label").textContent = 
            examState.day === "day1" ? 
            "Simulado Oficial - 1º Dia (45 Questões de Linguagens e Humanas + Redação)" : 
            "Simulado Oficial - 2º Dia (45 Questões de Natureza e Matemática)";
            
        document.getElementById("result-score-percent").textContent = `${percent}%`;
        document.getElementById("result-correct-count").textContent = `${correctCount} / ${totalQuestions}`;
        document.getElementById("result-wrong-count").textContent = `${wrongCount}`;
        document.getElementById("result-estimated-tri").textContent = `${estimatedTri}`;

        // =========================================================
        // RESUMO DE DESEMPENHO POR MATÉRIA (BARRA VISUAL COLORIDA)
        // =========================================================
        const performanceContainer = document.getElementById("subject-performance-container");
        performanceContainer.innerHTML = "";

        const subjectsArray = Object.values(subjectStats);

        subjectsArray.forEach(sub => {
            const subPercent = Math.round((sub.correct / sub.total) * 100);
            
            let ratioClass = "ratio-medium";
            let barClass = "bar-medium";

            if (subPercent >= 70) {
                ratioClass = "ratio-good";
                barClass = "bar-good";
            } else if (subPercent < 50) {
                ratioClass = "ratio-bad";
                barClass = "bar-bad";
            }

            const card = document.createElement("div");
            card.className = "subject-stat-card";
            card.innerHTML = `
                <div class="subject-stat-header">
                    <span class="subject-stat-name">${sub.name}</span>
                    <span class="subject-stat-ratio ${ratioClass}">${sub.correct}/${sub.total} (${subPercent}%)</span>
                </div>
                <div class="subject-bar-track">
                    <div class="subject-bar-fill ${barClass}" style="width: ${subPercent}%"></div>
                </div>
            `;
            performanceContainer.appendChild(card);
        });

        // =========================================================
        // DIAGNÓSTICO: QUAL MATÉRIA VOCÊ PRECISA ESTUDAR MAIS?
        // =========================================================
        const diagnosisContainer = document.getElementById("diagnosis-recommendations-container");
        diagnosisContainer.innerHTML = "";

        // Ordena da menor taxa para a maior
        subjectsArray.sort((a, b) => {
            const percA = a.correct / a.total;
            const percB = b.correct / b.total;
            return percA - percB;
        });

        // Filtra matérias críticas (< 60% de acertos) ou pega as 2 piores
        const criticalSubjects = subjectsArray.filter(s => (s.correct / s.total) < 0.6);
        const toRecommend = criticalSubjects.length > 0 ? criticalSubjects : subjectsArray.slice(0, 2);

        if (percent >= 85 && criticalSubjects.length === 0) {
            diagnosisContainer.innerHTML = `
                <div class="diagnosis-perfect">
                    <i class="fa-solid fa-circle-check"></i> <strong>Incrível!</strong> Você manteve mais de 70% de aproveitamento em todas as disciplinas deste simulado. Seu nível de preparação é de topo de ranking! Para gabaritar, faça uma revisão rápida dos tópicos de menor recorrência na aba "Conteúdo para estudar".
                </div>
            `;
        } else {
            toRecommend.forEach(sub => {
                const subPercent = Math.round((sub.correct / sub.total) * 100);
                const item = document.createElement("div");
                item.className = "diagnosis-item-card";

                item.innerHTML = `
                    <div class="diagnosis-item-info">
                        <h4><i class="fa-solid fa-triangle-exclamation"></i> Prioridade de Estudo: ${sub.name}</h4>
                        <p>Seu aproveitamento foi de apenas <strong>${subPercent}% (${sub.correct} acertos em ${sub.total} questões)</strong>. No ENEM, errar questões fundamentais dessa matéria derruba sua nota no TRI.</p>
                    </div>
                    <button class="btn-goto-study" data-subject="${sub.name}">
                        <i class="fa-solid fa-book-open-reader"></i> Estudar ${sub.name} Agora
                    </button>
                `;

                diagnosisContainer.appendChild(item);
            });

            // Adiciona evento aos botões de ir direto para o conteúdo
            diagnosisContainer.querySelectorAll(".btn-goto-study").forEach(btn => {
                btn.addEventListener("click", () => {
                    const subjectName = btn.getAttribute("data-subject");
                    goToStudySubject(subjectName);
                });
            });
        }

        // Mensagem reflexiva no topo
        const analysisBox = document.getElementById("results-analysis-text");
        let feedbackMessage = "";

        if (percent >= 80) {
            feedbackMessage = `
                <h4 style="color: var(--success); margin-bottom: 0.5rem;"><i class="fa-solid fa-crown"></i> Desempenho de Aprovado na 1ª Chamada!</h4>
                <p>Excelente resultado! Com mais de 80% de acertos em uma prova extensa de ${totalQuestions} questões, sua nota ultrapassa os 780 a 820 pontos pelo TRI. Analise abaixo as disciplinas em que você ainda vacilou para cravar os 100% no ENEM 2026!</p>
            `;
        } else if (percent >= 50) {
            feedbackMessage = `
                <h4 style="color: var(--warning); margin-bottom: 0.5rem;"><i class="fa-solid fa-fire"></i> Bom rendimento, mas precisamos blindar os pontos fracos!</h4>
                <p>Você completou o simulado de ${totalQuestions} questões com aproveitamento superior à média nacional. No entanto, o diagnóstico abaixo mostra que algumas matérias específicas derrubaram sua média. Foque nelas imediatamente!</p>
            `;
        } else {
            feedbackMessage = `
                <h4 style="color: var(--primary); margin-bottom: 0.5rem;"><i class="fa-solid fa-shield-halved"></i> Não desanime: esse diagnóstico é a chave da sua virada!</h4>
                <p>Fazer um simulado de ${totalQuestions} questões cansa e expõe as lacunas que a gente não sabia que tinha. Em vez de se frustrar, use a lista das matérias mais fracas abaixo para direcionar seu cronograma a partir de hoje.</p>
            `;
        }

        analysisBox.innerHTML = feedbackMessage;
    }

    // Função de navegação interativa para a matéria indicada
    function goToStudySubject(subjectName) {
        resultsContainer.classList.add("hidden");
        criteriaCards.classList.remove("hidden");

        const studyTab = document.querySelector('.nav-tab[data-tab="study-content"]');
        if (studyTab) studyTab.click();

        // Limpa e preenche o input de busca com o nome da matéria
        const searchInput = document.getElementById("subject-search");
        if (searchInput) {
            let cleanTerm = subjectName.replace("Língua ", "").replace(" (Opção)", "").trim();
            searchInput.value = cleanTerm;
            searchInput.dispatchEvent(new Event("input"));
        }

        // Scroll até a seção de matérias
        window.scrollTo({ top: 350, behavior: "smooth" });
    }

    btnRestart.addEventListener("click", () => {
        resultsContainer.classList.add("hidden");
        criteriaCards.classList.remove("hidden");
        window.scrollTo({ top: 200, behavior: "smooth" });
    });

    btnBackStudy.addEventListener("click", () => {
        resultsContainer.classList.add("hidden");
        criteriaCards.classList.remove("hidden");
        const studyTab = document.querySelector('.nav-tab[data-tab="study-content"]');
        if (studyTab) studyTab.click();
    });
}

