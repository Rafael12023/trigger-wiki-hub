export interface WalkthroughChapter {
  id: string;
  title: string;
  era: string;
  description: string;
  objectives: string[];
  missables?: string[];
  tips?: string[];
  bosses?: string[];
}

export const walkthrough: WalkthroughChapter[] = [
  {
    id: "chapter1",
    title: "O Festival do Milênio",
    era: "1000 AD",
    description: "Crono acorda tarde no dia do Festival do Milênio. Sua mãe o avisa sobre a demonstração de sua amiga Lucca na praça de Leene.",
    objectives: [
      "Acorde e saia da casa de Crono",
      "Explore o festival - jogue minigames para prêmios",
      "Encontre Marle na praça",
      "Vá até a demonstração do Telepod de Lucca no norte",
      "Quando Marle desaparecer no portal, siga-a"
    ],
    missables: [
      "Silver Points nos minigames (use para comprar itens raros)",
      "Cat Food no barraco perto da tenda",
      "Clone de Crono: ganhe 40+ Silver Points para conseguir"
    ],
    tips: [
      "Jogue a corrida para ganhar Silver Points",
      "O teste de força rende ótimos prêmios",
      "Guarde pontos para o Clone de Crono - necessário para o melhor final"
    ]
  },
  {
    id: "chapter2",
    title: "A Busca pela Rainha",
    era: "600 AD",
    description: "Crono emerge do portal em 600 AD, 400 anos no passado. Marle foi confundida com a Rainha Leene que está desaparecida.",
    objectives: [
      "Saia do canyon e vá para Guardia Castle",
      "Descubra que Marle foi levada ao castelo como 'Rainha Leene'",
      "Encontre Marle no quarto da rainha - ela desaparece!",
      "Lucca aparece explicando o paradoxo temporal",
      "Vá à Catedral ao oeste para resgatar a verdadeira Rainha"
    ],
    bosses: ["Yakra"],
    tips: [
      "A Catedral tem inimigos disfarçados de humanos",
      "Explore todos os cantos para itens escondidos",
      "Salve antes da batalha com Yakra"
    ]
  },
  {
    id: "chapter3",
    title: "O Julgamento",
    era: "1000 AD",
    description: "Ao retornar ao presente, Crono é preso por 'sequestrar' a princesa. Um julgamento determinará seu destino.",
    objectives: [
      "Retorne pelo portal para 1000 AD",
      "Seja preso pelos guardas do castelo",
      "Passe pelo julgamento (suas ações no festival importam!)",
      "Seja levado à prisão independente do resultado",
      "Escape da prisão com ajuda de Lucca ou por conta própria",
      "Derrote o Dragon Tank",
      "Fuja pelo portal temporal no final"
    ],
    bosses: ["Dragon Tank"],
    missables: [
      "O resultado do julgamento afeta diálogos futuros",
      "Itens no castelo durante a fuga"
    ],
    tips: [
      "Ações como devolver o pingente de Marle afetam o julgamento",
      "Não comer a comida do prisioneiro ajuda sua defesa",
      "Dragon Tank: destrua a Cabeça primeiro, depois Rodas, depois Corpo"
    ]
  },
  {
    id: "chapter4",
    title: "Além das Ruínas",
    era: "2300 AD",
    description: "O grupo emerge em um futuro devastado. O mundo foi destruído em 1999 AD por uma criatura chamada Lavos.",
    objectives: [
      "Explore o Lab 16 e encontre o Enertron",
      "Vá ao Arris Dome ao leste",
      "Acesse o computador no subsolo para descobrir sobre Lavos",
      "Atravesse o Lab 32 e Sewer Access (opcional)",
      "Chegue ao Proto Dome",
      "Encontre e repare Robo",
      "Use a Gate Key para escapar pelo portal"
    ],
    tips: [
      "O Enertron cura HP/MP completamente mas não mata a fome",
      "Explore o Arris Dome para encontrar a semente",
      "Robo precisa de reparos antes de se juntar ao grupo"
    ]
  },
  {
    id: "chapter5",
    title: "O Fim do Tempo",
    era: "End of Time",
    description: "Com quatro membros no grupo, o portal os leva ao Fim do Tempo, um hub dimensional onde podem acessar várias eras.",
    objectives: [
      "Conheça Gaspar, o Guru do Tempo",
      "Aprenda sobre os portais e como funcionam",
      "Visite Spekkio para aprender magia",
      "Cada personagem recebe um elemento baseado em sua personalidade",
      "Escolha uma era para visitar e continue a jornada"
    ],
    tips: [
      "Apenas 3 personagens podem viajar juntos - deixe um no Fim do Tempo",
      "Spekkio ensina magia - circule a sala para destravar habilidades",
      "Gaspar dá dicas sobre onde ir a seguir"
    ]
  },
  {
    id: "chapter6",
    title: "A Lenda do Herói",
    era: "600 AD",
    description: "Para derrotar Magus, que está invocando Lavos, o grupo precisa da lendária espada Masamune.",
    objectives: [
      "Vá a 600 AD e visite Tata, o 'herói'",
      "Descubra que Tata não é o verdadeiro herói",
      "Encontre Frog no Cursed Woods",
      "Vá às Denadoro Mountains buscar a Masamune",
      "Derrote Masa e Mune para obter a lâmina quebrada",
      "Leve a lâmina ao Melchior (1000 AD) para reparar",
      "Consiga o Dreamstone em 65.000.000 BC",
      "Retorne e complete a Masamune"
    ],
    bosses: ["Masa & Mune"],
    tips: [
      "Denadoro Mountains tem muitos itens escondidos",
      "Masa e Mune fundem-se para a segunda fase",
      "O Dreamstone está na pré-história com Ayla"
    ]
  },
  {
    id: "chapter7",
    title: "O Reino Pré-Histórico",
    era: "65.000.000 BC",
    description: "O grupo viaja à era dos dinossauros para conseguir o Dreamstone e conhece Ayla, líder da tribo Ioka.",
    objectives: [
      "Chegue à Ioka Village",
      "Vença Ayla no desafio de bebida",
      "Descubra que a Gate Key foi roubada pelos Reptites",
      "Invada o Reptite Lair",
      "Derrote Nizbel e recupere a Gate Key",
      "Consiga o Dreamstone de Ayla",
      "Retorne para reparar a Masamune"
    ],
    bosses: ["Nizbel"],
    tips: [
      "O minigame de caça rende ótimos itens",
      "Nizbel: use Lightning para baixar sua defesa, depois ataque",
      "Ayla pode roubar itens com Charm - muito útil!"
    ]
  },
  {
    id: "chapter8",
    title: "A Batalha Contra Magus",
    era: "600 AD",
    description: "Com a Masamune restaurada, Frog lidera o grupo através do castelo de Magus para confrontá-lo.",
    objectives: [
      "Leve a Masamune reparada a Frog",
      "Atravesse a ponte de Zenan (opcional: ajude os soldados)",
      "Invada o Magus Castle",
      "Derrote os generais Ozzie, Slash e Flea",
      "Confronte Magus no topo",
      "A batalha cria um portal que leva o grupo a 65M BC"
    ],
    bosses: ["Slash", "Flea", "Ozzie", "Magus"],
    tips: [
      "Magus muda de barreira - ataque com elemento oposto",
      "Quando ele levitar e criar barreira, não ataque até mudar",
      "Preparar com equipamentos de resistência ajuda"
    ]
  },
  {
    id: "chapter9",
    title: "Queda do Reino dos Reptites",
    era: "65.000.000 BC",
    description: "Após a batalha com Magus, o grupo cai em 65M BC onde os Reptites estão prestes a atacar.",
    objectives: [
      "Volte à Ioka Village",
      "Descubra sobre o ataque iminente",
      "A aldeia de Laruba é destruída",
      "Siga até o Tyrano Lair",
      "Derrote Nizbel II",
      "Confronte Azala e o Black Tyrano",
      "Testemunhe a queda de Lavos na Terra"
    ],
    bosses: ["Nizbel II", "Azala & Black Tyrano"],
    tips: [
      "Black Tyrano conta regressivamente antes de atacar forte",
      "Derrote Azala primeiro - ela fortalece o Tyrano",
      "A queda de Lavos cria um novo portal"
    ]
  },
  {
    id: "chapter10",
    title: "O Reino no Céu",
    era: "12.000 BC",
    description: "Através do portal criado por Lavos, o grupo chega à era mágica do Reino de Zeal, flutuando nas nuvens.",
    objectives: [
      "Explore Zeal e conheça a cultura mágica",
      "Encontre Schala e Janus (jovem Magus)",
      "Descubra os planos da Rainha Zeal com Lavos",
      "Visite a Montanha Woe (Mt. Woe)",
      "Resgate Melchior",
      "Invada o Ocean Palace",
      "Enfrente a tragédia na câmara de Lavos"
    ],
    bosses: ["Golem", "Dalton", "Giga Gaia", "Lavos (primeira vez)"],
    missables: [
      "Vários itens em Zeal antes da queda",
      "Diálogos importantes com Schala"
    ],
    tips: [
      "Golem copia elementos - use apenas físico",
      "Esta é a sequência mais dramática do jogo",
      "Você PODE perder contra Lavos neste ponto - é roteiro"
    ]
  },
  {
    id: "chapter11",
    title: "A Morte de um Herói",
    era: "12.000 BC / End of Time",
    description: "Após a tragédia no Ocean Palace, Crono é morto por Lavos. O grupo deve encontrar uma forma de trazê-lo de volta.",
    objectives: [
      "Escape do futuro alterado",
      "Descubra sobre o Chrono Trigger (Egg)",
      "Visite Gaspar no Fim do Tempo",
      "Consiga o Time Egg de Gaspar",
      "Vá ao Death Peak em 2300 AD",
      "Traga Crono de volta usando o clone",
      "Reagrupe com Crono e continue"
    ],
    tips: [
      "Você PRECISA do clone do festival para reviver Crono",
      "Death Peak é desafiador - prepare-se bem",
      "Magus pode ser recrutado ou derrotado neste ponto"
    ]
  },
  {
    id: "chapter12",
    title: "Side Quests e Preparação",
    era: "Múltiplas Eras",
    description: "Antes de enfrentar Lavos, há várias side quests que melhoram os personagens e revelam histórias.",
    objectives: [
      "Complete as side quests para equipamentos finais",
      "Sun Stone: consiga a pedra solar",
      "Rainbow Shell: encontre a concha arco-íris",
      "Northern Ruins: ajude o espírito de Cyrus",
      "Fiona's Forest: plante a floresta com Robo",
      "Geno Dome: Robo enfrenta seu passado",
      "Ozzie's Fort: derrote os generais de Magus"
    ],
    tips: [
      "Cada side quest dá equipamentos lendários",
      "Complete ANTES de ir ao Black Omen",
      "O Black Omen pode ser feito 3 vezes em eras diferentes"
    ]
  },
  {
    id: "chapter13",
    title: "O Black Omen e Lavos",
    era: "12.000 BC / 1999 AD",
    description: "A batalha final contra a Rainha Zeal no Black Omen e depois contra o próprio Lavos.",
    objectives: [
      "Entre no Black Omen (pode fazer em 12000 BC, 600 AD ou 1000 AD)",
      "Atravesse a fortaleza derrotando guardiões",
      "Enfrente a Rainha Zeal e suas formas",
      "Derrote a Mammon Machine",
      "Caia na câmara de Lavos",
      "Derrote as 3 formas de Lavos",
      "Salve o futuro!"
    ],
    bosses: ["Mega Mutant", "Zeal (Face)", "Mammon Machine", "Lavos (Shell)", "Lavos (Core)"],
    tips: [
      "Black Omen em 12000 BC, depois 600 AD, depois 1000 AD = 3x os itens",
      "Lavos Shell imita bosses anteriores",
      "Lavos Core: destrua bit DIREITO, depois ESQUERDO, depois CENTRO"
    ]
  },
];

export const pointsOfNoReturn = [
  {
    location: "Ocean Palace (12000 BC)",
    description: "Após entrar no Ocean Palace, você não pode mais acessar Zeal normalmente. Certifique-se de ter explorado completamente.",
    consequences: ["Itens em Zeal ficam inacessíveis", "Algumas conversas com NPCs são perdidas"]
  },
  {
    location: "Black Omen",
    description: "Entrar no Black Omen em uma era remove-o daquela era e de eras anteriores.",
    consequences: ["Faça em 12000 BC primeiro, depois 600 AD, depois 1000 AD para maximizar drops"]
  },
  {
    location: "Dentro de Lavos",
    description: "Após entrar no núcleo de Lavos, você só pode sair derrotando-o ou perdendo.",
    consequences: ["Salve antes de entrar", "Prepare-se completamente"]
  },
];

export const missableItems = [
  { item: "Clone de Crono", location: "Festival do Milênio", requirement: "40+ Silver Points", importance: "Essencial para reviver Crono" },
  { item: "Toma's Pop", location: "Choras Inn (1000 AD)", requirement: "Falar com Toma", importance: "Necessário para Rainbow Shell quest" },
  { item: "Jerky", location: "Snail Stop (600 AD)", requirement: "Comprar por 9900G", importance: "Necessário para Fiona's Forest quest" },
  { item: "Seed", location: "Arris Dome (2300 AD)", requirement: "Encontrar no subsolo", importance: "Leva à Fiona's Forest quest" },
  { item: "Sun Stone", location: "Sun Palace (2300 AD)", requirement: "Derrotar Son of Sun", importance: "Forja as melhores armas" },
  { item: "Moon Stone", location: "Giant's Claw (600 AD)", requirement: "Encontrar após Sun Palace", importance: "Evolui para Sun Stone" },
  { item: "Bent Sword/Bent Hilt", location: "Denadoro Mountains", requirement: "Derrotar Masa & Mune", importance: "Necessário para Masamune" },
  { item: "Hero Medal", location: "Northern Ruins", requirement: "Complete a side quest de Cyrus", importance: "Aumenta crítico de Frog com Masamune" },
];
