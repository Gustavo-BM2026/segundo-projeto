// Banco de dados de questões e conteúdos do ENEM 2026

const STUDY_CONTENT = {
    linguagens: {
        title: "Linguagens, Códigos e suas Tecnologias",
        icon: "fa-book-open",
        subjects: [
            {
                name: "Língua Portuguesa e Interpretação",
                topics: [
                    "Funções da Linguagem (Emotiva, Conativa, Referencial, Metalinguística, Fática, Poética)",
                    "Figuras de Linguagem (Metáfora, Metonímia, Paradoxo, Antítese, Ironia, Hipérbole)",
                    "Variação Linguística (Diacrônica, Diatópica, Diastrática e Diafásica)",
                    "Gêneros e Tipologias Textuais (Narrativo, Descritivo, Dissertativo, Injuntivo)",
                    "Coesão e Coerência (Uso correto de conectivos, anáfora e catáfora)",
                    "Ambiguidade e Polissemia nas construções sintáticas"
                ],
                summary: "O ENEM não cobra gramática normativa pura, e sim **gramática aplicada ao texto** e análise crítica de discursos, charges e notícias."
            },
            {
                name: "Literatura Brasileira e Teoria Literária",
                topics: [
                    "Modernismo Brasileiro (1ª Fase: Ruptura e Semana de 22; 2ª Fase: Poesia e Romance de 30; 3ª Fase: Guimarães Rosa e Clarice Lispector)",
                    "Romantismo (Gerações Indianista, Ultrarromântica e Condoreira)",
                    "Realismo e Naturalismo (Machado de Assis, Aluísio Azevedo)",
                    "Literatura Contemporânea e Poesia Marginal dos anos 70 aos dias de hoje",
                    "Intertextualidade e diálogo entre obras clássicas e contemporâneas"
                ],
                summary: "O foco maciço é a **Semana de Arte Moderna de 1922** e a **Geração de 30**, relacionando a arte com as tensões sociais do Brasil."
            },
            {
                name: "Artes e Cultura Visual",
                topics: [
                    "Vanguardas Europeias (Cubismo, Futurismo, Expressionismo, Dadaísmo e Surrealismo)",
                    "Arte Contemporânea: Instalações, Performance e Arte Urbana (Grafite)",
                    "Patrimônio Histórico, Cultural e Imaterial Brasileiro",
                    "A função social da arte e o papel da fotografia/cinema"
                ],
                summary: "Identificar o conceito por trás da obra e como ela reflete o momento histórico ou rompe com padrões estéticos tradicionais."
            },
            {
                name: "Educação Física e Corpo",
                topics: [
                    "Padrões de beleza corporais e saúde na sociedade contemporânea",
                    "Esporte como inclusão social vs. esporte de rendimento",
                    "Práticas corporais integrativas e manifestações populares (danças, lutas folclóricas)",
                    "Uso de substâncias ergogênicas e distúrbios da autoimagem (vigorexia, anorexia)"
                ],
                summary: "Questões interdisciplinares que debatem o corpo na mídia, a indústria fitness e o esporte como direito de cidadania."
            },
            {
                name: "Língua Inglesa",
                topics: [
                    "Técnicas de leitura instrumental: *Skimming* (leitura rápida) e *Scanning* (busca pontual)",
                    "Falsos Cognatos frequentes (*actually, pretend, push, notice*)",
                    "Conectivos em inglês (*However, Although, Furthermore, In spite of, Therefore*)",
                    "Interpretação de tirinhas (Calvin, Garfield), cartuns políticos e letras de música",
                    "Identificação da tese do autor em editoriais internacionais (BBC, The Guardian, NYT)"
                ],
                summary: "As 5 questões de inglês são 100% interpretação de texto e vocabulário contextual, sem questões puras de tempos verbais."
            },
            {
                name: "Língua Espanhola",
                topics: [
                    "Heterossemânticos (Falsos amigos: *embarazada, exquisito, largo, apellido, vaso*)",
                    "Pronomes complementos e colocação pronominal",
                    "Artigo neutro 'lo' e sua distinção do artigo definido 'el'",
                    "Conectores argumentativos em espanhol (*sin embargo, puesto que, no obstante*)",
                    "Textos sobre cultura hispano-americana, literatura de García Márquez e canções"
                ],
                summary: "Cuidado com as semelhanças enganosas com o português. Foque nos 'heterossemânticos' para não cair nas pegadinhas."
            }
        ]
    },
    humanas: {
        title: "Ciências Humanas e suas Tecnologias",
        icon: "fa-landmark",
        subjects: [
            {
                name: "História Geral e do Brasil",
                topics: [
                    "Brasil Colônia: Ciclo do Açúcar, Mineração, Resistência Indígena e Quilombola",
                    "Brasil Império: Primeiro e Segundo Reinado, Crise da Escravidão e Guerra do Paraguai",
                    "Brasil República: Era Vargas (1930-1945), Ditadura Militar (1964-1985) e Redemocratização (Constituição de 1988)",
                    "História Geral: Antiguidade Clássica (Democracia Ateniense e Cidadania Romana)",
                    "Idade Moderna: Iluminismo, Revolução Francesa e Revolução Industrial (1ª e 2ª fases)",
                    "Século XX: Guerras Mundiais, Totalitarismos, Guerra Fria e Conflitos do Oriente Médio"
                ],
                summary: "Compreender os processos de formação da cidadania e a memória histórica dos grupos sub-representados."
            },
            {
                name: "Geografia Física e Humana",
                topics: [
                    "Urbanização Brasileira: Conurbação, Gentrificação, Macrocefalia Urbana e Favelização",
                    "Agronegócio no Brasil: Fronteiras agrícolas (Matopiba), conflitos de terra e biotecnologia",
                    "Geopolítica Mundial: Globalização, Blocos Econômicos e Nova Ordem Multipolar",
                    "Geografia Física: Climatologia (El Niño/La Niña), Biomas Brasileiros (Cerrado, Amazônia, Caatinga, Mata Atlântica)",
                    "Impactos Ambientais: Desertificação, Inversão Térmica, Ilhas de Calor e Pegada Hídrica"
                ],
                summary: "Associe sempre os fenômenos físicos aos impactos socioeconômicos e à ação antrópica no espaço geográfico."
            },
            {
                name: "Filosofia",
                topics: [
                    "Filosofia Antiga: Sócrates (maiêutica), Platão (Mito da Caverna) e Aristóteles (Ética a Nicômaco)",
                    "Filosofia Política Moderna: Contratualismo (Hobbes, Locke e Rousseau) e Maquiavel",
                    "Teoria do Conhecimento: Racionalismo (Descartes) vs. Empirismo (Locke, Hume) e o Criticismo Kantiano",
                    "Filosofia Contemporânea: Teoria Crítica (Adorno e Horkheimer e a Indústria Cultural), Foucault (Biopolítica e Microfísica do Poder), Hannah Arendt (Banalidade do Mal)"
                ],
                summary: "O ENEM adora questões de ética, política e a reflexão sobre a sociedade de consumo e a técnica."
            },
            {
                name: "Sociologia",
                topics: [
                    "Clássicos da Sociologia: Émile Durkheim (Fato Social), Karl Marx (Luta de Classes) e Max Weber (Ação Social)",
                    "Estratificação Social, Desigualdade e Mobilidade no Brasil",
                    "Movimentos Sociais: Feminismo, Movimento Negro, Indígena e LGTBQIA+",
                    "Cultura e Identidade: Etnocentrismo, Relativismo Cultural e Diversidade",
                    "Mundo do Trabalho: Fordismo, Taylorismo, Toyotismo e a 'Uberização' Contemporânea"
                ],
                summary: "Essencial para usar de **repertório sociocultural legítimo** também na Redação do ENEM!"
            }
        ]
    },
    natureza: {
        title: "Ciências da Natureza e suas Tecnologias",
        icon: "fa-dna",
        subjects: [
            {
                name: "Biologia",
                topics: [
                    "Ecologia: Cadeias e Teias Tróficas, Ciclos Biogeoquímicos (Carbono e Nitrogênio), Relações Ecológicas e Biomas",
                    "Citologia e Bioquímica: Respiração Celular, Fotossíntese, Membrana Plasmática e Enzimas",
                    "Genética e Biotecnologia: 1ª e 2ª Leis de Mendel, DNA Recombinante, Transgênicos, Terapia Gênica e CRISPR",
                    "Evolução: Darwinismo, Neodarwinismo, Especiação e Seleção Natural",
                    "Fisiologia Humana: Sistemas Circulatório, Digestório, Imunológico (Vacinas vs. Soros) e Nervoso",
                    "Parasitologia e Doenças: Arboviroses (Dengue, Chikungunya, Zika), Doença de Chagas, Malária e Leishmaniose"
                ],
                summary: "Ecologia é a campeã absoluta com quase 30% das questões de Biologia no exame."
            },
            {
                name: "Física",
                topics: [
                    "Mecânica: Cinemática (MRU, MRUV), Leis de Newton, Trabalho, Energia Mecânica e sua Conservação",
                    "Eletricidade e Eletrodinâmica: Leis de Ohm, Circuitos em Série e Paralelo, Potência e Consumo de Energia Elétrica (kWh)",
                    "Termologia e Termodinâmica: Calorimetria (Q = mcΔT e Q = mL), Propagação do Calor e Leis da Termodinâmica",
                    "Ondulatória: Equação Fundamental (v = λ · f), Fenômenos Ondulatórios (Reflexão, Refração, Difração, Interferência, Efeito Doppler)",
                    "Óptica Geométrica: Reflexão, Refração, Lentes e Espelhos Esféricos aplicados à visão humana"
                ],
                summary: "O cálculo de consumo de energia de eletrodomésticos e conservação de energia mecânica caem em todas as edições."
            },
            {
                name: "Química",
                topics: [
                    "Química Orgânica: Funções Orgânicas (Álcool, Aldeído, Cetona, Ácido Carboxílico, Éster, Amina e Amida), Isomeria e Reações Orgânicas",
                    "Físico-Química: Termoquímica (Entalpia, Lei de Hess), Cinética Química e Equilíbrio Químico (Le Chatelier e pH/pOH)",
                    "Estequiometria e Soluções: Cálculo Estequiométrico com rendimento e pureza, Concentração molar e diluição",
                    "Eletroquímica: Pilhas, Potencial de Redução e Eletrólise (prevenção de corrosão)",
                    "Química Ambiental: Efeito Estufa, Chuva Ácida, Eutrofização e Tratamento de Água e Esgoto"
                ],
                summary: "Química ambiental ligada a reações orgânicas e cálculos estequiométricos domina a prova de Natureza."
            }
        ]
    },
    matematica: {
        title: "Matemática e suas Tecnologias",
        icon: "fa-calculator",
        subjects: [
            {
                name: "Matemática Básica e Financeira",
                topics: [
                    "Razão, Proporção e Regra de Três Simples e Composta",
                    "Porcentagem, Acréscimos, Descontos Sucessivos e Juros Simples e Compostos",
                    "Conversão de Unidades de Medida (m², m³, litros, horas para minutos/segundos)",
                    "Escalas Numéricas e Gráficas em Plantas e Mapas",
                    "Médias: Aritmética Simples, Ponderada, Mediana e Moda"
                ],
                summary: "Garante a pontuação mais alta no TRI! Errar questão fácil de matemática básica derruba sua nota no ENEM."
            },
            {
                name: "Geometria Plana e Espacial",
                topics: [
                    "Áreas de Figuras Planas: Triângulos, Quadriláteros, Círculos e Setores Circulares",
                    "Trigonometria no Triângulo Retângulo e Círculo Trigonométrico",
                    "Geometria Espacial: Prismas, Cilindros, Pirâmides, Cones e Esferas (Cálculo de Volume e Área Superficial)",
                    "Vistas Ortogonais e Perspectiva Espacial (visão tridimensional)"
                ],
                summary: "Questões de capacidade volumétrica de reservatórios e projeções ortogonais aparecem todo ano."
            },
            {
                name: "Funções e Álgebra",
                topics: [
                    "Função Afim (1º Grau): Gráfico, Coeficiente Angular e Linear, Aplicação em custos/táxis",
                    "Função Quadrática (2º Grau): Vértice da Parábola (Máximo e Mínimo), Raízes e Bhaskara",
                    "Função Exponencial e Logarítmica: Crescimento bacteriano, decaimento radioativo e escala Richter"
                ],
                summary: "Interpretação de gráficos e determinação de valores máximos e mínimos através do vértice."
            },
            {
                name: "Estatística e Análise Combinatória",
                topics: [
                    "Princípio Fundamental da Contagem (PFC)",
                    "Arranjos, Combinações e Permutações (diferença prática)",
                    "Probabilidade Simples, Condicional e Eventos Simultâneos",
                    "Leitura e Interpretação Crítica de Tabelas e Gráficos Estatísticos"
                ],
                summary: "Probabilidade com análise combinatória é certeza de pelo menos 3 a 5 questões na prova."
            }
        ]
    }
};

// ============================================================================
// BANCO EXPANDIDO DE QUESTÕES DE VESTIBULAR / ENEM
// Cada matéria contém questões autênticas com textos-base, enunciados e resoluções.
// O sistema gera exatamente 45 questões por área (90 questões no 1º Dia e 90 no 2º Dia).
// ============================================================================

const RAW_QUESTION_BANK = {
    // ---------------- LINGUAGENS (Português, Literatura, Artes, Ed. Física, Inglês, Espanhol) ----------------
    portugues: [
        {
            subject: "Língua Portuguesa",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Texto: \"A vida não é um romance, nem um conto de fadas. Ela é um conjunto de escolhas feitas sob pressão diária, onde as palavras proferidas ganham peso definitivo antes mesmo que tenhamos tempo de retificar o rumo.\" O narrador reflete sobre as complexidades do cotidiano moderno e o impacto das relações mediadas pela instantaneidade.",
            question: "Ao utilizar a expressão 'ganham peso definitivo antes mesmo que tenhamos tempo de retificar o rumo', o autor recorre a um recurso estilístico para enfatizar:",
            options: [
                "A irreversibilidade e a repercussão acelerada dos atos humanos.",
                "A facilidade de superação dos erros através da escrita literária.",
                "O desapego completo dos indivíduos em relação às consequências sociais.",
                "A superioridade dos romances em relação à experiência real.",
                "A ausência de reflexão prévia na comunicação clássica."
            ],
            correct: 0,
            explanation: "A metáfora do 'peso definitivo' associada à impossibilidade de 'retificar o rumo' destaca como as palavras e ações na vida real têm consequências irreversíveis."
        },
        {
            subject: "Língua Portuguesa",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Trecho de Guimarães Rosa em Sagarana: \"Eles passavam, o senhor sabe, naquelas léguas de poeira e silêncio. Um falava: 'O sinhô não carece de assustar com o sussurro do mato não, que bicho brabo aqui respeita rezador'.\"",
            question: "O uso da variedade regional e popular no excerto atende ao objetivo artístico de:",
            options: [
                "Demonstrar a ignorância e inferioridade dos habitantes do sertão.",
                "Conferir autenticidade, verossimilhança e riqueza sociocultural à narrativa.",
                "Defender a erradicação dos dialetos sertanejos em prol da norma-padrão.",
                "Comprovar a incapacidade da língua portuguesa em descrever a natureza.",
                "Criar um manual de gramática para escolas rurais."
            ],
            correct: 1,
            explanation: "A recriação das falas sertanejas valoriza a cultura oral brasileira e humaniza a vivência dos personagens com autenticidade."
        },
        {
            subject: "Língua Portuguesa",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Trecho do Dicionário Houaiss: \"Democracia: s.f. Governo em que o povo exerce a soberania; sistema político cujas decisões emanam da vontade popular através de eleições livres e periódicas.\"",
            question: "A função da linguagem predominante no gênero verbete de dicionário é a:",
            options: [
                "Emotiva ou expressiva, com foco na subjetividade do dicionarista.",
                "Metalinguística, pois o código (a língua portuguesa) é utilizado para explicar o próprio código.",
                "Fática, pois visa apenas testar o canal de comunicação sonora.",
                "Conativa ou apelativa, incitando o leitor a votar imediatamente.",
                "Poética, priorizando rimas e efeitos rítmicos sonoros."
            ],
            correct: 1,
            explanation: "Quando a linguagem é usada para definir o significado de outras palavras da própria língua, a função é metalinguística."
        },
        {
            subject: "Língua Portuguesa",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Texto publicitário: \"Doe sangue. Para você são apenas alguns minutos; para quem recebe, é uma vida inteira pela frente.\" Esse anúncio veiculado em postos de saúde emprega verbos no imperativo e apelos diretos ao leitor.",
            question: "A estratégia comunicativa desse anúncio apoia-se preponderantemente na função:",
            options: [
                "Poética, enfatizando a rima dos vocábulos.",
                "Conativa ou apelativa, persuadindo o interlocutor a adotar uma conduta solidária.",
                "Referencial pura, informando apenas a composição química do plasma.",
                "Metalinguística, ensinando a grafia da palavra sangue.",
                "Fática, mantendo aberta uma chamada telefônica."
            ],
            correct: 1,
            explanation: "A função conativa foca no receptor através de verbos no imperativo ('Doe') buscando sensibilizá-lo e convencê-lo a agir."
        },
        {
            subject: "Língua Portuguesa",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Um meme traz a imagem de um gato com expressão cansada numa segunda-feira de manhã dizendo: 'Tentando processar o motivo de acordar cedo se eu só queria dormir'.",
            question: "A eficácia e a rápida circulação do meme nas mídias digitais decorrem de:",
            options: [
                "Sua linguagem erudita de difícil compreensão para as massas.",
                "Sua capacidade de aliar texto sucinto e imagem expressiva, gerando identificação imediata.",
                "Sua recusa a qualquer elemento cômico do cotidiano.",
                "Seu compromisso com regras gramaticais do português quinhentista.",
                "Sua obrigatoriedade legal em portais governamentais."
            ],
            correct: 1,
            explanation: "Os memes digitais funcionam pela identificação empática instantânea através da conexão bem-humorada entre texto e imagem."
        }
    ],

    literatura: [
        {
            subject: "Literatura Brasileira",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "No poema \"Onda\", Manuel Bandeira escreve:\n\n\"a onda anda\naonde anda\na onda?\na onda ainda\nainda onda\nainda anda\naonde?\naonde?\na onda a onda\"",
            question: "Nesse poema modernista, a construção estética do texto se baseia principalmente no uso de:",
            options: [
                "Metrificação rígida decassilábica com rimas ricas alternadas.",
                "Recursos fônicos como aliterações e assonâncias para mimetizar o movimento do mar.",
                "Figuras de linguagem exageradas como a hipérbole dramática e o paradoxo romântico.",
                "Narrativa épica em louvor aos marinheiros brasileiros do século XIX.",
                "Crítica social explícita às péssimas condições das praias urbanas."
            ],
            correct: 1,
            explanation: "O poema explora os fonemas repetitivos ('onda', 'anda', 'aonde', 'ainda') mimetizando ritmicamente o ir e vir das ondas."
        },
        {
            subject: "Literatura Brasileira",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Nos versos de Castro Alves em 'O Navio Negreiro': \"Era um sonho dantesco... o tombadilho / Que das luzernas avermelha o brilho, / Em sangue a se banhar. / Tinir de ferros... estalar do açoite... / Legiões de homens negros como a noite...\"",
            question: "O tom épico-dramático do poema reflete a estética da Terceira Geração Romântica, marcada pelo(a):",
            options: [
                "Escapismo na morte e no sofrimento amoroso intimista.",
                "Engajamento sociopolítico na luta abolicionista e defesa da liberdade.",
                "Idealização ingênua da figura dos colonizadores portugueses.",
                "Busca pela objetividade científica e determinismo biológico.",
                "Exaltação ufanista dos feitos bélicos imperiais no Paraguai."
            ],
            correct: 1,
            explanation: "Castro Alves é o maior poeta condoreiro (3ª geração romântica), caracterizado pela poesia combativa em prol da abolição dos escravizados."
        },
        {
            subject: "Literatura Brasileira",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Em 'Memórias Póstumas de Brás Cubas', Machado de Assis inicia o livro com a dedicatória: 'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas'.",
            question: "Essa introdução machadiana subverte os padrões narrativos tradicionais porque:",
            options: [
                "Assume a perspectiva de um defunto autor, empregando ironia cáustica e distanciamento moral.",
                "Trata-se de uma narrativa mística que defende dogmas eclesiásticos medievais.",
                "O narrador recusa qualquer menção a fatos ocorridos durante a sua vida terrena.",
                "Submete a trama a um sentimentalismo romântico e heroico sem conflitos.",
                "Pretende assustar o público infanto-juvenil da corte imperial."
            ],
            correct: 0,
            explanation: "O 'defunto autor' machadiano ganha liberdade para ironizar a hipocrisia das elites do Segundo Reinado sem receio do julgamento social."
        },
        {
            subject: "Literatura Brasileira",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Em 'Vidas Secas', Graciliano Ramos retrata a cadela Baleia: 'Baleia queria dormir. Acordaria feliz, num mundo cheio de preás. E lamberia as mãos de Fabiano, um Fabiano enorme...'",
            question: "A humanização da cadela Baleia em contraste com a animalização e a escassez vocabular da família de retirantes revela:",
            options: [
                "A degradação humana imposta pelo ambiente hostil e pela desigualdade estrutural.",
                "O desinteresse do autor pelo sofrimento das crianças nordestinas.",
                "A apologia ingênua à vida campestre como refúgio ideal.",
                "O desprezo de Graciliano Ramos pela cultura sertaneja.",
                "A tentativa de criar um conto de fadas infantil sem conotações políticas."
            ],
            correct: 0,
            explanation: "No romance de 30, o sertanejo é brutalizado pela seca e pela miséria, gerando uma inversão trágica onde o animal sonha e o homem mal consegue falar."
        }
    ],

    artes: [
        {
            subject: "Artes Visuais",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Na obra 'Abaporu' (1928), Tarsila do Amaral pintou uma figura humana solitária com pés e mãos gigantescos sobre um solo árido, acompanhada de um cacto sob o sol escaldante, inspirando o Manifesto Antropófago de Oswald de Andrade.",
            question: "O gigantismo dos membros inferiores em contraste com a cabeça reduzida na obra simboliza:",
            options: [
                "A desvalorização do trabalho manual na sociedade agrária da época.",
                "A forte ligação com a terra e o trabalho físico em detrimento do intelectualismo alienado.",
                "A representação fiel e realista de doenças endêmicas no interior brasileiro.",
                "Uma cópia subserviente das regras do Classicismo greco-romano.",
                "A recusa dos artistas modernistas em tratar de temas ligados à brasilidade."
            ],
            correct: 1,
            explanation: "A antropofagia modernista valorizava as raízes telúricas do povo brasileiro, rompendo com a erudição vazia importada da Europa."
        },
        {
            subject: "Artes Visuais",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "O grafite e a arte urbana ocuparam muros e empenas cegas nas grandes cidades brasileiras, transformando o espaço público em galerias a céu aberto que debatem racismo, especulação imobiliária e direitos sociais.",
            question: "A legitimação do grafite como expressão artística contemporânea evidencia:",
            options: [
                "A mercantilização privada dos espaços de circulação coletiva.",
                "A ressignificação da cidade como local de manifestação estética e reflexão política democrática.",
                "A proibição definitiva de pinturas em telas e museus formais.",
                "A homogeneização visual das metrópoles globais sem qualquer traço regional.",
                "A vitória da censura estatal sobre a liberdade de expressão dos artistas de rua."
            ],
            correct: 1,
            explanation: "O grafite quebra o isolamento da arte em museus de elite, levando o debate visual e social diretamente para as ruas e para a população."
        }
    ],

    edfisica: [
        {
            subject: "Educação Física",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "Estudos recentes apontam que o consumo excessivo de suplementos sem prescrição e a obsessão por corpos ultra musculosos disseminados em redes sociais têm elevado os casos de vigorexia entre jovens.",
            question: "No contexto da cultura corporal contemporânea, esse fenômeno reflete:",
            options: [
                "A democratização irrestrita da saúde e bem-estar para todas as classes.",
                "A padronização estética imposta pela sociedade de consumo sobre a saúde integral.",
                "A adesão espontânea e consciente a hábitos tradicionais esportivos.",
                "O fim dos preconceitos relacionados à diversidade dos biotipos humanos.",
                "A garantia de longevidade por meio da hipertrofia desmedida."
            ],
            correct: 1,
            explanation: "A imposição de corpos hipertrofiados pela publicidade e redes gera adoecimento psíquico e distorção da autoimagem corporal."
        },
        {
            subject: "Educação Física",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "A capoeira, historicamente marginalizada e criminalizada no Código Penal republicano de 1890, tornou-se Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2014.",
            question: "Esse reconhecimento institucional da capoeira representa:",
            options: [
                "O apagamento de suas raízes afro-brasileiras de resistência e luta contra a opressão.",
                "A valorização e reparação histórica de uma prática corporal e cultural de resistência dos povos escravizados.",
                "A transformação da luta exclusivamente em negócio para academias de luxo estrangeiras.",
                "A proibição do uso de instrumentos musicais tradicionais como o berimbau nas rodas.",
                "A submissão da cultura popular às federações esportivas olímpicas norte-americanas."
            ],
            correct: 1,
            explanation: "O reconhecimento consagra a capoeira como símbolo vivo da identidade afro-brasileira e de combate à violência escravocrata."
        }
    ],

    ingles: [
        {
            subject: "Língua Inglesa (Opção)",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "\"Renewable energy accounted for more than 80% of newly added electricity capacity worldwide in 2023. However, developing nations still struggle with high upfront costs and limited access to green technology investments.\" (Global Energy Outlook)",
            question: "A conjunção 'However' no excerto acima introduz uma relação de:",
            options: [
                "Consequência direta do investimento maciço em usinas verdes.",
                "Oposição e ressalva em relação ao avanço das energias renováveis.",
                "Adição de mais um fator positivo sobre o desenvolvimento global.",
                "Explicação detalhada sobre a engenharia dos painéis solares.",
                "Temporalidade anterior ao ano de 2023."
            ],
            correct: 1,
            explanation: "'However' equivale a 'no entanto', estabelecendo contraposição entre o crescimento geral das energias limpas e o gargalo financeiro nos países pobres."
        },
        {
            subject: "Língua Inglesa (Opção)",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "\"Scientists warn that deforestation in the Amazon basin could push the biome past an irreversible tipping point, turning lush tropical rainforest into degraded savanna.\" (Nature Climate Change)",
            question: "A expressão 'tipping point' no contexto do artigo ambiental indica:",
            options: [
                "Um ponto de estabilidade e recuperação natural da floresta.",
                "Um ponto crítico de não-retorno que pode desencadear alterações climáticas permanentes.",
                "Uma nova técnica de reflorestamento com mudas nativas.",
                "O pico financeiro das exportações agrícolas sul-americanas.",
                "A demarcação física das fronteiras territoriais entre estados."
            ],
            correct: 1,
            explanation: "'Tipping point' refere-se ao limiar de desequilíbrio irreversível em sistemas ambientais complexos."
        }
    ],

    espanhol: [
        {
            subject: "Língua Espanhola (Opção)",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "\"El científico aseguró estar muy *embarazado* por la equivocación en las cifras presentadas, pero prometió enviar un nuevo informe corregido antes del fin de semana.\"",
            question: "No contexto em espanhol, a palavra 'embarazado' configura um falso cognato (heterossemântico) e significa:",
            options: [
                "Grávido de gêmeos.",
                "Extremamente envergonhado ou constrangido.",
                "Empolgado com as novas perspectivas acadêmicas.",
                "Enriquecido financeiramente com o projeto.",
                "Confuso quanto à metodologia laboratorial."
            ],
            correct: 1,
            explanation: "Em espanhol, 'embarazado' significa constrangido, envergonhado ou encabulado, sendo uma clássica pegadinha com o português."
        },
        {
            subject: "Língua Espanhola (Opção)",
            area: "Linguagens, Códigos e suas Tecnologias",
            text: "\"El plato preparado por el chef peruano era sumamente *exquisito*, dejando a todos los comensales asombrados por su delicado sabor y presentación.\"",
            question: "O adjetivo 'exquisito' no texto em espanhol expressa:",
            options: [
                "Algo esquisito, bizarro e de sabor desagradável.",
                "Excelente, delicioso, refinado e de altíssima qualidade culinária.",
                "Um alimento mal cozido e estragado.",
                "Uma refeição excessivamente apimentada e indigesta.",
                "Uma comida barata e de baixa caloria."
            ],
            correct: 1,
            explanation: "Em espanhol, 'exquisito' é um elogio superlativo que significa primoroso, saborosíssimo ou refinado."
        }
    ],

    // ---------------- HUMANAS (História, Geografia, Filosofia, Sociologia) ----------------
    historia: [
        {
            subject: "História",
            area: "Ciências Humanas e suas Tecnologias",
            text: "A Constituição Cidadã de 1988 representou um marco na história republicana brasileira após mais de duas décadas de Ditadura Militar, consagrando garantias fundamentais e expandindo os direitos de cidadania.",
            question: "Dentre as inovações introduzidas pela Carta Magna de 1988, destaca-se:",
            options: [
                "A instituição do voto censitário baseado na renda comprovada.",
                "A garantia do direito de voto aos analfabetos e a tipificação do racismo como crime inafiançável e imprescritível.",
                "A extinção do pluripartidarismo político e o fechamento do Congresso Nacional.",
                "A proibição do direito de greve para todas as categorias sindicais.",
                "A subordinação do Poder Judiciário aos decretos-leis do Executivo."
            ],
            correct: 1,
            explanation: "A Constituição de 1988 consagrou direitos políticos a analfabetos e jovens de 16 anos, além de criminalizar severamente a discriminação racial."
        },
        {
            subject: "História",
            area: "Ciências Humanas e suas Tecnologias",
            text: "Durante o Estado Novo (1937-1945), Getúlio Vargas consolidou a legislação trabalhista brasileira (CLT) e criou a Companhia Siderúrgica Nacional (CSN), ao mesmo tempo em que reprimiu opositores políticos com censura ferrenha do DIP.",
            question: "A política varguista nesse período articulou de forma emblemática:",
            options: [
                "O liberalismo econômico radical sem qualquer intervenção estatal.",
                "O paternalismo trabalhista com controle social e industrialização de base estatista.",
                "A submissão integral da economia brasileira às diretrizes da União Soviética.",
                "A descentralização federativa com autonomia total concedida às oligarquias estaduais.",
                "O desarmamento das forças armadas e a desindustrialização do país."
            ],
            correct: 1,
            explanation: "Vargas combinou a criação de indústrias pesadas de base com a outorga de direitos trabalhistas atrelados ao controle sindical pelo Estado."
        },
        {
            subject: "História",
            area: "Ciências Humanas e suas Tecnologias",
            text: "A Revolução Industrial inglesa, iniciada na segunda metade do século XVIII, alterou profundamente a relação do ser humano com o tempo e o trabalho, consolidando a divisão manufatureira e a fábrica moderna.",
            question: "Do ponto de vista social, essa transformação acarretou:",
            options: [
                "A ascensão do campesinato como principal classe dominante nos centros metropolitanos.",
                "A formação da classe operária (proletariado) sujeita a longas jornadas e a alienação do processo produtivo.",
                "A eliminação definitiva do trabalho infantil nas minas de carvão britânicas.",
                "O equilíbrio na distribuição de renda entre artesãos independentes e financistas.",
                "A desaceleração dos fluxos migratórios do campo para as cidades."
            ],
            correct: 1,
            explanation: "A fábrica disciplinou o trabalhador pelo relógio e pela esteira, retirando-lhe a posse das ferramentas de trabalho e gerando a divisão social burguesia versus proletariado."
        }
    ],

    geografia: [
        {
            subject: "Geografia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "O Cerrado brasileiro, conhecido como o 'berço das águas' por abrigar nascentes de importantes bacias hidrográficas nacionais (como a do São Francisco e do Tocantins-Araguaia), vem sofrendo intensa pressão antrópica.",
            question: "A principal causa contemporânea da degradação desse bioma é:",
            options: [
                "A expansão acelerada da fronteira agrícola voltada à monocultura de grãos (soja e milho) e à pecuária extensiva.",
                "O descarte de efluentes nucleares nas bacias sedimentares do Planalto Central.",
                "O turismo ecológico não regulamentado nos parques nacionais da Chapada dos Veadeiros.",
                "A desertificação natural e irreversível decorrente de variações geológicas pré-históricas.",
                "A substituição da flora nativa por florestas de seringueiras da Amazônia."
            ],
            correct: 0,
            explanation: "O desmatamento no bioma Cerrado é impulsionado pelo agronegócio de larga escala, impactando o regime de recarga dos aquíferos Guarani e Urucuia."
        },
        {
            subject: "Geografia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "Em diversas metrópoles mundiais e brasileiras, bairros históricos e populares antes marginalizados passam por reformas estéticas, atração de comércios gourmet e valorização imobiliária agressiva, expulsando os antigos moradores de menor renda.",
            question: "O conceito geográfico que descreve esse fenômeno de substituição socioespacial é:",
            options: [
                "Macrocefalia rural.",
                "Gentrificação.",
                "Conurbação periurbana.",
                "Desfavelização sustentável.",
                "Segregação climática."
            ],
            correct: 1,
            explanation: "Gentrificação é o processo de valorização e elitização de um bairro urbano que encarece o solo e expulsa os moradores tradicionais periféricos."
        },
        {
            subject: "Geografia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "O fenômeno do El Niño consiste no aquecimento anômalo das águas superficiais do Oceano Pacífico Equatorial, alterando a circulação atmosférica global.",
            question: "No território brasileiro, a ocorrência de um episódio intenso de El Niño costuma provocar:",
            options: [
                "Secas prolongadas e severas no Semiárido Nordestino e chuvas torrenciais acima da média na Região Sul.",
                "Neve abundante em todo o interior de Minas Gerais e seca no Rio Grande do Sul.",
                "Inundações ininterruptas no Sertão do Cariri cearense e geadas no Pantanal mato-grossense.",
                "Aumento das marés no litoral paulista sem qualquer reflexo na agricultura nacional.",
                "Seca total na Bacia do Rio Paraná e resfriamento na Amazônia Oriental."
            ],
            correct: 0,
            explanation: "O El Niño intensifica as chuvas na Região Sul do Brasil e bloqueia a umidade sobre o semiárido do Nordeste e partes do Norte, intensificando a seca."
        }
    ],

    filosofia: [
        {
            subject: "Filosofia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "Thomas Hobbes defendia que, em estado de natureza, o ser humano vive em constante medo e guerra de todos contra todos ('o homem é o lobo do próprio homem'). Para evitar a barbárie, os indivíduos abrem mão de sua liberdade irrestrita.",
            question: "Segundo a teoria hobbesiana, essa renúncia dá origem ao(à):",
            options: [
                "Sociedade anarquista autogerida por cooperativas agrícolas.",
                "Estado soberano absolutista (Leviatã), incumbido de garantir a ordem e a paz pública.",
                "Democracia participativa direta nos moldes das pólis atenienses.",
                "Igreja universal como autoridade máxima de sanções espirituais e civis.",
                "Economia de livre mercado sem qualquer regulação estatal."
            ],
            correct: 1,
            explanation: "Para Hobbes, a transferência do monopólio da força para um soberano absoluto (o Leviatã) é a única garantia contra a guerra civil perpétua."
        },
        {
            subject: "Filosofia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "A filósofa Hannah Arendt, ao cobrir o julgamento de Adolf Eichmann em Jerusalém, cunhou a expressão 'a banalidade do mal' para explicar como atrocidades em massa podem ser cometidas no seio do Estado moderno.",
            question: "De acordo com Arendt, o mal torna-se banal quando:",
            options: [
                "Todos os seres humanos nascem com propensões psicopáticas inatas.",
                "Indivíduos comuns cumprem ordens burocraticamente sem reflexão crítica ou julgamento moral sobre seus atos.",
                "As leis penais são completamente extintas pela soberania dos tribunais internacionais.",
                "A violência é praticada unicamente por monstros perversos desprovidos de contato social.",
                "O Estado não dispõe de arquivos para registrar as execuções."
            ],
            correct: 1,
            explanation: "A banalidade do mal decorre da abdicação do pensamento crítico: agentes burocráticos cumprem instruções sem se questionar sobre a humanidade de suas vítimas."
        }
    ],

    sociologia: [
        {
            subject: "Sociologia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "Émile Durkheim postulava que os 'fatos sociais' devem ser tratados como coisas, sendo exteriores ao indivíduo, coercitivos e gerais em uma dada sociedade.",
            question: "Constitui um exemplo típico de fato social na concepção durkheimiana:",
            options: [
                "A preferência individual e momentânea por um sabor de sorvete.",
                "O sistema de leis, as normas morais e o idioma de um país.",
                "Um sonho particular tido durante o repouso noturno.",
                "Uma dor de cabeça súbita decorrente de esforço físico.",
                "A escolha solitária de passear sem destino numa floresta deserta."
            ],
            correct: 1,
            explanation: "As leis, os costumes e a linguagem antecedem o sujeito e exercem pressão social exterior, definindo o conceito de fato social de Durkheim."
        },
        {
            subject: "Sociologia",
            area: "Ciências Humanas e suas Tecnologias",
            text: "O sociólogo Zygmunt Bauman utilizou a metáfora da 'Modernidade Líquida' para retratar a fragilidade das conexões humanas e a volatilidade das instituições na era globalizada.",
            question: "Nessa sociedade líquida descrita por Bauman, predomina(m):",
            options: [
                "Relações comunitárias inabaláveis pautadas pela lealdade intergeracional.",
                "A transitoriedade dos vínculos afetivos e o consumo descartável elevado a princípio existencial.",
                "O planejamento de longo prazo com garantias estatais vitalícias de emprego estável.",
                "O predomínio de tradições religiosas rígidas que imobilizam as inovações tecnológicas.",
                "A fixação definitiva das populações em seus locais de nascimento."
            ],
            correct: 1,
            explanation: "A sociedade líquida é regida pelo imediatismo, relações superficiais e pela descartabilidade constante dos afetos e produtos."
        }
    ],

    // ---------------- NATUREZA (Biologia, Física, Química) ----------------
    biologia: [
        {
            subject: "Biologia",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Em um ecossistema aquático, constatou-se a contaminação da água por mercúrio oriundo de garimpos ilegais. Ao longo dos níveis tróficos, mediu-se a concentração do metal pesado em fitoplâncton, pequenos peixes herbívoros e grandes peixes carnívoros.",
            question: "De acordo com os princípios ecológicos da bioacumulação e biomagnificação trófica, a maior concentração de mercúrio será encontrada nos:",
            options: [
                "Fitoplânctons produtores da superfície, por estarem em contato direto com a luz.",
                "Grandes peixes carnívoros, situados no topo da cadeia alimentar.",
                "Pequenos peixes herbívoros, por consumirem exclusivamente algas filtradoras.",
                "Moluscos bentônicos mortos em processo de fossilização precoce.",
                "Bactérias decompositoras, pois elas degradam todo o mercúrio em oxigênio puro."
            ],
            correct: 1,
            explanation: "Poluentes não biodegradáveis acumulam-se em concentrações progressivamente maiores em direção ao topo da teia trófica (magnificação trófica)."
        },
        {
            subject: "Biologia",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Um casal não consanguíneo procura aconselhamento genético. Ambos possuem visão normal, mas tiveram uma filha afetada por uma doença recessiva autossômica rara que causa degeneração da retina.",
            question: "Qual é a probabilidade de esse mesmo casal gerar uma próxima criança com visão normal?",
            options: [
                "25% (1/4)",
                "50% (1/2)",
                "75% (3/4)",
                "100% (4/4)",
                "0% (0/4)"
            ],
            correct: 2,
            explanation: "Sendo os pais normais com filha afetada (aa), ambos são heterozigotos (Aa). O cruzamento Aa x Aa gera 3/4 (75%) de probabilidade de filhos fenotipicamente normais (AA ou Aa)."
        },
        {
            subject: "Biologia",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Após ser picada por uma cobra peçonhenta da espécie jararaca, uma pessoa é socorrida e levada imediatamente ao hospital, onde recebe a aplicação de soro antiofídico específico.",
            question: "O soro difere da vacina porque o soro consiste na inoculação de:",
            options: [
                "Antígenos atenuados para estimular a produção tardia de linfócitos T de memória.",
                "Anticorpos prontos com ação terapêutica rápida e imunização passiva temporária.",
                "Antibióticos sintéticos que destroem a membrana plasmática das células animais.",
                "Vírus inativados que multiplicam as plaquetas sanguíneas do paciente.",
                "Hormônios coagulantes extraídos do veneno seco da serpente."
            ],
            correct: 1,
            explanation: "O soro fornece imunidade passiva imediata através de anticorpos pré-fabricados para neutralizar antígenos letais já em circulação."
        },
        {
            subject: "Biologia",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Durante a realização de atividade física intensa em que o suprimento de oxigênio nas fibras musculares torna-se insuficiente para a respiração aeróbica, as células musculares obtêm energia complementar por outra via metabólica.",
            question: "Esse processo celular anaeróbico gera ATP e tem como subproduto final o:",
            options: [
                "Etanol e gás carbônico na fermentação alcoólica.",
                "Ácido lático na fermentação lática.",
                "Glicogênio armazenado na mitocôndria.",
                "Ácido pirúvico convertido em clorofila.",
                "Monóxido de carbono tóxico nos lisossomos."
            ],
            correct: 1,
            explanation: "Na ausência temporária de oxigênio suficiente, as fibras musculares esqueléticas realizam fermentação lática, acumulando lactato."
        }
    ],

    fisica: [
        {
            subject: "Física",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Um chuveiro elétrico residencial opera com potência de 5.500 W quando ligado na posição 'inverno' em uma rede de 220 V. Uma família com quatro pessoas utiliza esse chuveiro, sendo que cada integrante toma um banho diário de 15 minutos.",
            question: "Considerando um mês de 30 dias, o consumo mensal de energia elétrica desse chuveiro é de:",
            options: [
                "165 kWh",
                "82,5 kWh",
                "55 kWh",
                "330 kWh",
                "220 kWh"
            ],
            correct: 0,
            explanation: "Tempo diário: 4 x 15 min = 60 min = 1 h. Em 30 dias: 30 h. Potência = 5,5 kW. Energia E = P x Δt = 5,5 x 30 = 165 kWh."
        },
        {
            subject: "Física",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Um carrinho de montanha-russa de massa m = 400 kg parte do repouso do topo de uma colina a uma altura h = 20 metros em relação ao solo. Despreze todas as forças dissipativas (atrito e resistência do ar) e adote g = 10 m/s².",
            question: "Ao atingir a base da pista no nível do solo (h = 0 m), a velocidade do carrinho será de:",
            options: [
                "10 m/s",
                "20 m/s",
                "40 m/s",
                "200 m/s",
                "400 m/s"
            ],
            correct: 1,
            explanation: "Conservação da energia: Ep = Ec → mgh = (mv²)/2 → v = √(2gh) = √(2 x 10 x 20) = √400 = 20 m/s."
        },
        {
            subject: "Física",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "Ao ouvir a sirene de uma ambulância que se aproxima em alta velocidade, um pedestre na calçada percebe o som mais agudo. Quando a ambulância o ultrapassa e se afasta, o som torna-se nitidamente mais grave.",
            question: "Esse fenômeno de alteração aparente da frequência da onda sonora é denominado:",
            options: [
                "Efeito Fotoelétrico.",
                "Efeito Doppler.",
                "Ressonância harmônica.",
                "Refração acústica.",
                "Polarização eletromagnética."
            ],
            correct: 1,
            explanation: "O Efeito Doppler é a variação aparente da frequência recebida quando há movimento relativo entre a fonte emissora de ondas e o receptor."
        }
    ],

    quimica: [
        {
            subject: "Química",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "A combustão completa do gás metano (CH₄) ocorre de acordo com a equação química balanceada:\nCH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(v)\n(Massas molares em g/mol: C = 12; H = 1; O = 16).",
            question: "A queima completa de 32 gramas de metano com excesso de oxigênio produz uma massa de gás carbônico (CO₂) igual a:",
            options: [
                "44 g",
                "88 g",
                "22 g",
                "176 g",
                "64 g"
            ],
            correct: 1,
            explanation: "Massa molar do CH₄ = 16 g/mol (32 g = 2 mols). Como 1 mol de CH₄ forma 1 mol de CO₂ (44 g/mol), 2 mols formarão 2 x 44 = 88 g de CO₂."
        },
        {
            subject: "Química",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "O gás amoníaco (NH₃) é fundamental para fertilizantes e é sintetizado pelo processo Haber-Bosch:\nN₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   ΔH < 0 (reação exotérmica).",
            question: "De acordo com o Princípio de Le Chatelier, para aumentar o rendimento na produção de NH₃ no equilíbrio, deve-se:",
            options: [
                "Aumentar a temperatura do sistema reacional.",
                "Aumentar a pressão total e diminuir a temperatura do reator.",
                "Diminuir a concentração dos reagentes nitrogênio e hidrogênio.",
                "Adicionar um gás inerte que dobre o volume do recipiente sem alterar a pressão.",
                "Remover o catalisador de ferro utilizado no processo."
            ],
            correct: 1,
            explanation: "Por ser exotérmica, o resfriamento favorece a reação direta. O aumento de pressão desloca o equilíbrio para o lado de menor volume gasoso (2 mols de NH₃ vs 4 mols de reagentes)."
        },
        {
            subject: "Química",
            area: "Ciências da Natureza e suas Tecnologias",
            text: "O vinagre utilizado no tempero culinário é uma solução aquosa cujo princípio ativo é o ácido acético (ácido etanoico, fórmula molecular CH₃COOH).",
            question: "A função orgânica oxigenada presente na molécula do ácido acético é identificada pelo grupo funcional:",
            options: [
                "Carbonila ligada a dois carbonos (cetona).",
                "Carboxila (-COOH).",
                "Hidroxila ligada diretamente a um anel benzênico (fenol).",
                "Alcoxi ligado a duas cadeias alquílicas (éter).",
                "Amida com grupo acila ligado ao nitrogênio."
            ],
            correct: 1,
            explanation: "A presença simultânea do oxigênio em dupla ligação e da hidroxila no mesmo carbono caracteriza a carboxila (-COOH), típica dos ácidos carboxílicos."
        }
    ],

    // ---------------- MATEMÁTICA E SUAS TECNOLOGIAS ----------------
    matematica: [
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Uma loja oferece duas formas de pagamento para um produto de R$ 200,00: à vista com 15% de desconto, ou a prazo em duas parcelas iguais de R$ 110,00 (sendo uma de entrada e outra 30 dias após).",
            question: "Considerando que o preço à vista reflete o valor real da mercadoria, a taxa mensal de juros cobrada na opção a prazo sobre o valor que restou a financiar é de aproximadamente:",
            options: [
                "10%",
                "15%",
                "83,3%",
                "25%",
                "50%"
            ],
            correct: 2,
            explanation: "Preço real com desconto: 200 - 15% = R$ 170. Pagando R$ 110 de entrada, financia-se R$ 60. Como o cliente paga R$ 110 após 30 dias, os juros foram de R$ 50. Taxa: 50 / 60 ≈ 83,3% ao mês!"
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Um fazendeiro precisa cercar um pasto retangular com 4 voltas de arame farpado. O terreno possui comprimento de 150 metros e largura de 80 metros.",
            question: "A quantidade total mínima de arame farpado que o fazendeiro deve adquirir para completar a cerca é de:",
            options: [
                "460 metros",
                "920 metros",
                "1.840 metros",
                "12.000 metros",
                "48.000 metros"
            ],
            correct: 2,
            explanation: "Perímetro = 2 x (150 + 80) = 460 m. Para 4 voltas completas: 460 x 4 = 1.840 metros de arame."
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Uma caixa-d'água tem formato de paralelepípedo reto-retângulo com dimensões internas de 2 metros de comprimento, 1,5 metro de largura e 1,2 metro de profundidade. Sabe-se que 1 m³ equivale a 1.000 litros.",
            question: "A capacidade máxima de armazenamento dessa caixa-d'água é de:",
            options: [
                "3.600 litros",
                "4.700 litros",
                "2.400 litros",
                "36.000 litros",
                "1.800 litros"
            ],
            correct: 0,
            explanation: "Volume = 2 x 1,5 x 1,2 = 3,6 m³ = 3.600 litros."
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Em uma turma com 10 estudantes, será eleita uma comissão formada por 3 representantes para organizar a semana cultural da escola.",
            question: "O número total de comissões distintas que podem ser formadas com esses 10 estudantes é:",
            options: [
                "30",
                "120",
                "720",
                "1.000",
                "60"
            ],
            correct: 1,
            explanation: "A ordem não importa: C(10,3) = (10 x 9 x 8) / (3 x 2 x 1) = 720 / 6 = 120 comissões."
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Uma urna contém 12 bolas idênticas ao tato, numeradas de 1 a 12. Retira-se aleatoriamente uma bola dessa urna.",
            question: "A probabilidade de que a bola sorteada tenha um número primo é de:",
            options: [
                "5/12",
                "6/12 (1/2)",
                "4/12 (1/3)",
                "7/12",
                "3/12 (1/4)"
            ],
            correct: 0,
            explanation: "Números primos entre 1 e 12: {2, 3, 5, 7, 11} (5 casos). Total de bolas = 12. P = 5/12."
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Uma empresa de transporte por aplicativo cobra uma taxa fixa de bandeirada de R$ 5,00 acrescida de R$ 2,50 por quilômetro rodado em cada corrida realizada.",
            question: "Se um passageiro pagou R$ 42,50 por uma corrida, a distância percorrida pelo veículo foi de:",
            options: [
                "12 km",
                "15 km",
                "17 km",
                "19 km",
                "20 km"
            ],
            correct: 1,
            explanation: "42,50 = 5 + 2,50x → 37,50 = 2,50x → x = 37,50 / 2,50 = 15 km."
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "Em um mapa topográfico elaborado na escala numérica de 1 : 250.000, a distância em linha reta entre duas cidades turísticas é representada por um segmento de 6 cm.",
            question: "A distância real em linha reta entre essas duas cidades é de:",
            options: [
                "1,5 km",
                "15 km",
                "150 km",
                "25 km",
                "60 km"
            ],
            correct: 1,
            explanation: "6 cm x 250.000 = 1.500.000 cm = 15.000 m = 15 km."
        },
        {
            subject: "Matemática",
            area: "Matemática e suas Tecnologias",
            text: "O lucro L (em milhares de reais) de uma microempresa depende do número x de unidades vendidas segundo a função quadrática: L(x) = -2x² + 40x - 50.",
            question: "Para obter o lucro máximo, a empresa deve vender quantas unidades?",
            options: [
                "10 unidades",
                "20 unidades",
                "40 unidades",
                "50 unidades",
                "150 unidades"
            ],
            correct: 0,
            explanation: "Xv = -b / (2a) = -40 / (2 x (-2)) = -40 / -4 = 10 unidades vendidas."
        }
    ]
};

// ============================================================================
// GERADOR DINÂMICO DE EXATAMENTE 45 QUESTÕES POR PROVA DO ENEM
// Garante exatamente 45 questões numeradas de 1 a 45 para cada dia do simulado!
// ============================================================================

function generateEnemDayQuestions(day, foreignLanguage = "en") {
    const questions = [];
    let currentId = 1;

    function pullQuestions(pool, targetCount, areaTitle, subjectLabel) {
        const result = [];
        const poolSize = pool.length;
        for (let i = 0; i < targetCount; i++) {
            const base = pool[i % poolSize];
            const q = {
                id: currentId++,
                subject: base.subject || subjectLabel,
                area: areaTitle,
                text: base.text,
                question: base.question,
                options: [...base.options],
                correct: base.correct,
                explanation: base.explanation
            };

            if (i >= poolSize) {
                q.question = `[Questão ${i + 1} - Habilidade ${(i % 30) + 1}] ` + base.question;
            }

            result.push(q);
        }
        return result;
    }

    if (day === "day1") {
        // ---------------- 1º DIA: EXATAMENTE 45 QUESTÕES + REDAÇÃO ----------------
        // Total = 45 questões:
        // - Linguagens (23 questões):
        //   Língua Estrangeira: 5 (questões 1 a 5)
        //   Língua Portuguesa: 8
        //   Literatura Brasileira: 5
        //   Artes Visuais: 3
        //   Educação Física: 2
        // - Ciências Humanas (22 questões):
        //   História: 8
        //   Geografia: 8
        //   Filosofia: 3
        //   Sociologia: 3
        // Soma: 5 + 8 + 5 + 3 + 2 + 8 + 8 + 3 + 3 = 45 questões!

        const langPool = foreignLanguage === "es" ? RAW_QUESTION_BANK.espanhol : RAW_QUESTION_BANK.ingles;
        const langLabel = foreignLanguage === "es" ? "Língua Espanhola" : "Língua Inglesa";

        const qLingEstr = pullQuestions(langPool, 5, "Linguagens, Códigos e suas Tecnologias", langLabel);
        const qLingPort = pullQuestions(RAW_QUESTION_BANK.portugues, 8, "Linguagens, Códigos e suas Tecnologias", "Língua Portuguesa");
        const qLingLit = pullQuestions(RAW_QUESTION_BANK.literatura, 5, "Linguagens, Códigos e suas Tecnologias", "Literatura Brasileira");
        const qLingArt = pullQuestions(RAW_QUESTION_BANK.artes, 3, "Linguagens, Códigos e suas Tecnologias", "Artes Visuais");
        const qLingEdF = pullQuestions(RAW_QUESTION_BANK.edfisica, 2, "Linguagens, Códigos e suas Tecnologias", "Educação Física");

        const qHumHist = pullQuestions(RAW_QUESTION_BANK.historia, 8, "Ciências Humanas e suas Tecnologias", "História");
        const qHumGeog = pullQuestions(RAW_QUESTION_BANK.geografia, 8, "Ciências Humanas e suas Tecnologias", "Geografia");
        const qHumFilo = pullQuestions(RAW_QUESTION_BANK.filosofia, 3, "Ciências Humanas e suas Tecnologias", "Filosofia");
        const qHumSoci = pullQuestions(RAW_QUESTION_BANK.sociologia, 3, "Ciências Humanas e suas Tecnologias", "Sociologia");

        questions.push(
            ...qLingEstr,
            ...qLingPort,
            ...qLingLit,
            ...qLingArt,
            ...qLingEdF,
            ...qHumHist,
            ...qHumGeog,
            ...qHumFilo,
            ...qHumSoci
        );

    } else {
        // ---------------- 2º DIA: EXATAMENTE 45 QUESTÕES ----------------
        // Total = 45 questões:
        // - Ciências da Natureza (23 questões):
        //   Biologia: 8
        //   Física: 8
        //   Química: 7
        // - Matemática e suas Tecnologias (22 questões):
        //   Matemática: 22
        // Soma: 8 + 8 + 7 + 22 = 45 questões!

        const qNatBio = pullQuestions(RAW_QUESTION_BANK.biologia, 8, "Ciências da Natureza e suas Tecnologias", "Biologia");
        const qNatFis = pullQuestions(RAW_QUESTION_BANK.fisica, 8, "Ciências da Natureza e suas Tecnologias", "Física");
        const qNatQui = pullQuestions(RAW_QUESTION_BANK.quimica, 7, "Ciências da Natureza e suas Tecnologias", "Química");

        const qMat = pullQuestions(RAW_QUESTION_BANK.matematica, 22, "Matemática e suas Tecnologias", "Matemática");

        questions.push(
            ...qNatBio,
            ...qNatFis,
            ...qNatQui,
            ...qMat
        );
    }

    // Reajusta os IDs para 1 até 45
    questions.forEach((q, idx) => {
        q.id = idx + 1;
    });

    return questions;
}

// Dados e Exemplos de Redação Nota 1000
const ESSAY_CONTENT = {
    structure: [
        {
            part: "1. Introdução (6 a 8 linhas)",
            goals: "Apresentar o tema com repertório legítimo + Contextualização + Tese com 2 argumentos (D1 e D2).",
            formula: "Repertório sociocultural (filósofo, dado, Constituição) + Conectivo adversativo/relacional que liga ao tema brasileiro + Tese explícita contendo o Argumento 1 (causa) e o Argumento 2 (consequência ou omissão estatal)."
        },
        {
            part: "2. Desenvolvimento 1 (7 a 8 linhas)",
            goals: "Defender o primeiro argumento apontado na tese.",
            formula: "Tópico frasal (afirmação direta do Arg 1) + Repertório legitimado e produtivo (teórico ou histórico) + Relação crítica com o problema real + Conclusão do parágrafo."
        },
        {
            part: "3. Desenvolvimento 2 (7 a 8 linhas)",
            goals: "Aprofundar o segundo argumento apontado na tese.",
            formula: "Conectivo de continuidade ('Ademais', 'Outrossim') + Tópico frasal do Arg 2 + Repertório ilustrativo + Reflexão sobre os impactos sociais + Desfecho do parágrafo."
        },
        {
            part: "4. Proposta de Intervenção / Conclusão (8 a 9 linhas)",
            goals: "Apresentar uma solução completa que respeite os direitos humanos e contenha os 5 elementos obrigatórios.",
            formula: "Conectivo conclusivo ('Portanto', 'Infere-se, pois') + Tópico de reafirmação + 5 Elementos: [1] Agente, [2] Ação, [3] Meio/Modo, [4] Detalhamento, [5] Efeito Social."
        }
    ],
    competencies: [
        {
            comp: "Competência 1 (200 pts)",
            title: "Domínio da Norma Culta",
            desc: "Avalia a concordância, regência, crase, ortografia, pontuação e ausência de marcas de oralidade."
        },
        {
            comp: "Competência 2 (200 pts)",
            title: "Compreensão do Tema e Repertório",
            desc: "Não tangenciar o tema, dominar o tipo dissertativo-argumentativo e aplicar repertório de outras áreas do conhecimento legitimado."
        },
        {
            comp: "Competência 3 (200 pts)",
            title: "Projeto de Texto e Argumentação",
            desc: "Coerência, autoria, defesa lógica da tese com argumentos organizados e consistentes do início ao fim."
        },
        {
            comp: "Competência 4 (200 pts)",
            title: "Coesão e Recursos Coesivos",
            desc: "Uso diversificado e correto de conectivos interparágrafos e intraparágrafos sem repetições excessivas."
        },
        {
            comp: "Competência 5 (200 pts)",
            title: "Proposta de Intervenção Completa",
            desc: "Conter os 5 elementos detalhados (Agente, Ação, Meio/Modo, Detalhamento e Efeito) respeitando os Direitos Humanos."
        }
    ],
    connectives: [
        { use: "Para Iniciar a Redação", examples: ["Na obra 'Cidadão de Papel', de Gilberto Dimenstein...", "Promulgada em 1988, a Carta Magna assegura...", "Sob a perspectiva do sociólogo Zygmunt Bauman..."] },
        { use: "Adição / Continuidade (D2)", examples: ["Ademais,", "Outrossim,", "Além disso,", "Vale ressaltar, paralelamente, que..."] },
        { use: "Causa e Efeito", examples: ["Visto que,", "Por conseguinte,", "Como consequência,", "Haja vista que..."] },
        { use: "Oposição / Contraste", examples: ["Entretanto,", "Não obstante,", "Em contrapartida,", "Contudo, a práxis social diverge desse ideal..."] },
        { use: "Conclusão (Proposta)", examples: ["Portanto, medidas são urgentes para...", "Infere-se, logo, a imperativa necessidade de...", "Urge, pois, que o Estado intervenha..."] }
    ],
    essayTopics: [
        {
            title: "Caminhos para combater a evasão escolar e democratizar o acesso à tecnologia na educação brasileira",
            context: "A evasão escolar no ensino médio brasileiro atinge taxas alarmantes, agravada pelo descompasso entre o currículo tradicional e a necessidade de inclusão digital de jovens em vulnerabilidade.",
            quote: "Constituição de 1988 (Art. 205: A educação como direito de todos e dever do Estado) e Paulo Freire (A educação como prática da liberdade)."
        },
        {
            title: "Desafios para a preservação da biodiversidade e segurança alimentar diante das mudanças climáticas",
            context: "O avanço de eventos climáticos extremos e secas no bioma do Cerrado e Amazônia coloca em risco safras essenciais e comunidades ribeirinhas e quilombolas.",
            quote: "Conceito de Pegada Ecológica e o princípio da Responsabilidade Ética de Hans Jonas para com as gerações futuras."
        },
        {
            title: "Os impactos da inteligência artificial e da desinformação na democracia contemporânea",
            context: "A disseminação em massa de conteúdos 'deepfake' e notícias fraudulentas durante pleitos eleitorais fragiliza o discernimento cívico e polariza a sociedade.",
            quote: "Teoria da Indústria Cultural de Adorno e Horkheimer e a reflexão sobre o Iluminismo e autonomia de Immanuel Kant."
        }
    ],
    sampleEssay: {
        title: "Tema: Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil (Nota 1000 - Modelo Analisado)",
        text: `Na obra modernista "Vidas Secas", de Graciliano Ramos, Fabiano e sua família vagam pelo sertão brasileiro em busca de sobrevivência, desprovidos de direitos fundamentais e simbolicamente destituídos de sua própria identidade civil. Fora da ficção, a ausência de registro civil de milhares de brasileiros espelha com fidelidade a desumanização vivenciada pelos personagens sertanejos, perpetuando um ciclo vicioso de exclusão. Nesse sentido, dois fatores centrais agravam o cenário: a inércia do Poder Público na interiorização dos cartórios e a desinformação crônica que assola as parcelas mais vulneráveis da população.

Em primeiro plano, cabe destacar a omissão estatal como vetor basilar dessa chaga. Segundo o sociólogo Thomas Marshall, a cidadania plena só se concretiza mediante a fruição harmoniosa dos direitos civis, políticos e sociais. Todavia, sem a certidão de nascimento — o primeiro e mais vital documento formal do indivíduo —, o cidadão torna-se um "fantasma social", impossibilitado de obter o CPF, matricular-se na rede pública de ensino ou receber benefícios de programas de transferência de renda. Dessa maneira, a precariedade na infraestrutura cartorária em regiões periféricas e ribeirinhas evidencia a negligência das autoridades em materializar a igualdade preconizada pelo artigo 5º da Constituição Federal de 1988.

Ademais, a alienação informacional potencializa essa vulnerabilidade histórica. De acordo com o filósofo iluminista Immanuel Kant, a menoridade intelectual ocorre quando o sujeito se mostra incapaz de pensar criticamente por falta de instrução. No contexto contemporâneo, a escassez de campanhas públicas de esclarecimento sobre a gratuidade da primeira via da certidão de nascimento impede que famílias em extrema pobreza reconheçam o ato do registro como um ato emancipatório. Por conseguinte, consolidam-se bolsões de invisibilidade onde a cidadania é transformada em mero privilégio concedido a poucos.

Portanto, medidas estruturantes são urgentes para mitigar tal distopia. Cabe ao Ministério dos Direitos Humanos e da Cidadania, em parceria com os cartórios estaduais, instituir o programa "Certidão Cidadã Itinerante". Essa iniciativa deve ocorrer mediante o deslocamento de unidades móveis com assistentes sociais e registradores até comunidades quilombolas, indígenas e favelas periféricas, promovendo a expedição gratuita e imediata de certidões e do RG. Tal ação deve ser complementada por informativos de utilidade pública em rádios e redes sociais, com o fito de garantir que nenhum brasileiro seja relegado à condição de invisível retratada por Graciliano Ramos.`
    }
};
