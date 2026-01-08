export interface CharacterData {
  name: string;
  title: string;
  era: string;
  element: string;
  weapon: string;
  bio: string;
  story: string;
  stats: {
    hp: string;
    mp: string;
    power: string;
    magic: string;
    speed: string;
  };
  techs: {
    single: { name: string; mp: number; description: string }[];
    double: { name: string; partner: string; description: string }[];
    triple: { name: string; partners: string; description: string }[];
  };
  bestEquipment: {
    weapon: string;
    armor: string;
    accessory: string;
  };
  color: string;
  imageUrl: string;
}

export const charactersData: Record<string, CharacterData> = {
  crono: {
    name: "Crono",
    title: "O Herói Silencioso",
    era: "1000 AD",
    element: "Raio (Lightning)",
    weapon: "Katana",
    bio: "Crono é um jovem espadachim de cabelos vermelhos espetados que vive com sua mãe na vila de Truce, no Reino de Guardia. Apesar de ser o protagonista, Crono nunca fala durante o jogo, deixando suas ações falarem por ele.",
    story: "A aventura de Crono começa no Festival do Milênio, onde ele encontra uma misteriosa garota chamada Marle. Quando ela desaparece através de um portal temporal criado pelo Telepod de Lucca, Crono não hesita em segui-la, iniciando uma jornada épica através do tempo. Sua coragem e determinação inspiram todos ao seu redor, e ele se torna o líder natural do grupo de heróis.",
    stats: {
      hp: "Alto",
      mp: "Médio",
      power: "Alto",
      magic: "Médio",
      speed: "Alto",
    },
    techs: {
      single: [
        { name: "Cyclone", mp: 2, description: "Ataque circular que atinge todos os inimigos próximos" },
        { name: "Slash", mp: 2, description: "Corte horizontal poderoso em um único alvo" },
        { name: "Lightning", mp: 2, description: "Invoca um raio para atingir um inimigo" },
        { name: "Spincut", mp: 4, description: "Salto giratório seguido de corte descendente" },
        { name: "Lightning 2", mp: 8, description: "Raio mais poderoso que atinge área" },
        { name: "Life", mp: 10, description: "Revive um aliado caído" },
        { name: "Confuse", mp: 12, description: "Ataques rápidos múltiplos em todos os inimigos" },
        { name: "Luminaire", mp: 20, description: "Técnica suprema de raio - devastadora" },
      ],
      double: [
        { name: "Aura Whirl", partner: "Marle", description: "Cura em área combinando aura e movimento" },
        { name: "Ice Sword", partner: "Marle", description: "Espada imbuída de gelo" },
        { name: "Fire Whirl", partner: "Lucca", description: "Tornado de fogo" },
        { name: "Fire Sword", partner: "Lucca", description: "Espada flamejante" },
        { name: "X Strike", partner: "Frog", description: "Ataque cruzado devastador" },
        { name: "Sword Stream", partner: "Frog", description: "Combo de espadas aquáticas" },
        { name: "Rocket Roll", partner: "Robo", description: "Robo arremessa Crono" },
        { name: "Max Cyclone", partner: "Robo", description: "Ciclone potencializado" },
        { name: "Drill Kick", partner: "Ayla", description: "Ataque combinado aéreo" },
        { name: "Volt Bite", partner: "Ayla", description: "Mordida elétrica" },
        { name: "Dark Bomb", partner: "Magus", description: "Explosão sombria" },
      ],
      triple: [
        { name: "Delta Force", partners: "Marle + Lucca", description: "Triângulo elemental devastador" },
        { name: "Lifeline", partners: "Marle + Robo", description: "Cura suprema em área" },
        { name: "Arc Impulse", partners: "Marle + Frog", description: "Ataque triplo coordenado" },
        { name: "Final Kick", partners: "Marle + Ayla", description: "Chute final combinado" },
        { name: "Delta Storm", partners: "Lucca + Robo", description: "Tempestade elemental" },
        { name: "Gatling Kick", partners: "Lucca + Ayla", description: "Rajada de chutes" },
        { name: "Triple Raid", partners: "Frog + Robo", description: "Investida tripla" },
        { name: "Twister", partners: "Robo + Ayla", description: "Tornado físico" },
      ],
    },
    bestEquipment: {
      weapon: "Rainbow (Arco-Íris) - A espada mais poderosa do jogo",
      armor: "Moon Armor - Defesa excepcional",
      accessory: "Gold Stud - Reduz custo de MP em 75%",
    },
    color: "text-chrono-cyan",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/2/25/Crono2.png",
  },
  marle: {
    name: "Marle",
    title: "Princesa de Guardia",
    era: "1000 AD",
    element: "Gelo (Ice)",
    weapon: "Crossbow",
    bio: "Marle é na verdade a Princesa Nadia do Reino de Guardia, que fugiu do castelo para aproveitar o Festival do Milênio. Ela é alegre, teimosa e tem um forte senso de justiça.",
    story: "Entediada com a vida no castelo, Nadia assume o nome 'Marle' e foge para o festival onde encontra Crono. Sua natureza aventureira a leva a testar o Telepod de Lucca, causando o acidente que inicia toda a aventura. Ao longo da jornada, ela amadurece e aceita suas responsabilidades como princesa.",
    stats: {
      hp: "Médio",
      mp: "Alto",
      power: "Baixo",
      magic: "Alto",
      speed: "Médio",
    },
    techs: {
      single: [
        { name: "Aura", mp: 1, description: "Cura um aliado" },
        { name: "Provoke", mp: 1, description: "Distrai inimigos, causando Caos" },
        { name: "Ice", mp: 2, description: "Ataque de gelo em um inimigo" },
        { name: "Cure", mp: 2, description: "Cura moderada em um aliado" },
        { name: "Haste", mp: 6, description: "Aumenta velocidade de um aliado" },
        { name: "Ice 2", mp: 8, description: "Gelo poderoso em área" },
        { name: "Cure 2", mp: 5, description: "Cura forte em um aliado" },
        { name: "Life 2", mp: 15, description: "Revive aliado com HP cheio" },
      ],
      double: [
        { name: "Aura Whirl", partner: "Crono", description: "Cura em área" },
        { name: "Ice Sword", partner: "Crono", description: "Espada de gelo" },
        { name: "Antipode", partner: "Lucca", description: "Fogo e gelo combinados" },
        { name: "Ice Water", partner: "Frog", description: "Combo de água e gelo" },
        { name: "Aura Beam", partner: "Robo", description: "Cura em linha" },
        { name: "Ice Tackle", partner: "Ayla", description: "Investida congelante" },
        { name: "Dark Eternal", partner: "Magus", description: "Combo sombrio gelado" },
      ],
      triple: [
        { name: "Delta Force", partners: "Crono + Lucca", description: "Triângulo elemental" },
        { name: "Lifeline", partners: "Crono + Robo", description: "Cura suprema" },
        { name: "Arc Impulse", partners: "Crono + Frog", description: "Ataque triplo" },
        { name: "Final Kick", partners: "Crono + Ayla", description: "Chute final" },
        { name: "Antipode 3", partners: "Lucca + Frog", description: "Combo elemental máximo" },
      ],
    },
    bestEquipment: {
      weapon: "Venus Bow - Crossbow com poder mágico",
      armor: "Prism Dress - Defesa e resistência mágica",
      accessory: "Prism Specs - Aumenta poder mágico significativamente",
    },
    color: "text-chrono-cyan",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/0/00/Marle2.png",
  },
  lucca: {
    name: "Lucca",
    title: "A Inventora Genial",
    era: "1000 AD",
    element: "Fogo (Fire)",
    weapon: "Pistola",
    bio: "Lucca é a melhor amiga de infância de Crono e uma inventora genial. Filha de Taban, outro inventor, ela cresceu cercada por máquinas e experimentos.",
    story: "A paixão de Lucca por ciência foi moldada por um trauma: quando criança, sua mãe ficou paralítica em um acidente com uma das máquinas de Taban. Esse evento a impulsionou a dominar a tecnologia. Sua invenção, o Telepod, acidentalmente cria o portal temporal que inicia a aventura. Durante a jornada, ela tem a chance de voltar ao passado e salvar sua mãe.",
    stats: {
      hp: "Médio",
      mp: "Alto",
      power: "Baixo",
      magic: "Muito Alto",
      speed: "Baixo",
    },
    techs: {
      single: [
        { name: "Flame Toss", mp: 1, description: "Lança uma bola de fogo" },
        { name: "Hypno Wave", mp: 1, description: "Coloca inimigos para dormir" },
        { name: "Fire", mp: 2, description: "Ataque de fogo" },
        { name: "Napalm", mp: 3, description: "Bomba incendiária em área" },
        { name: "Protect", mp: 6, description: "Aumenta defesa de um aliado" },
        { name: "Fire 2", mp: 8, description: "Fogo poderoso em área" },
        { name: "Mega Bomb", mp: 15, description: "Explosão massiva" },
        { name: "Flare", mp: 20, description: "Técnica suprema de fogo" },
      ],
      double: [
        { name: "Fire Whirl", partner: "Crono", description: "Tornado flamejante" },
        { name: "Fire Sword", partner: "Crono", description: "Espada de fogo" },
        { name: "Antipode", partner: "Marle", description: "Fogo e gelo" },
        { name: "Red Pin", partner: "Frog", description: "Combo fogo-água" },
        { name: "Fire Punch", partner: "Robo", description: "Soco incendiário" },
        { name: "Blaze Kick", partner: "Ayla", description: "Chute flamejante" },
        { name: "Dark Bomb", partner: "Magus", description: "Bomba sombria" },
      ],
      triple: [
        { name: "Delta Force", partners: "Crono + Marle", description: "Triângulo elemental" },
        { name: "Delta Storm", partners: "Crono + Robo", description: "Tempestade elemental" },
        { name: "Gatling Kick", partners: "Crono + Ayla", description: "Rajada de chutes" },
        { name: "Antipode 3", partners: "Marle + Frog", description: "Combo máximo" },
        { name: "Omega Flare", partners: "Robo + Magus", description: "Flare supremo" },
      ],
    },
    bestEquipment: {
      weapon: "Wondershot - Dano variável mas potencialmente devastador",
      armor: "Taban Vest - Feito por seu pai, resistência a fogo",
      accessory: "Sun Shades - Aumenta poder de ataque",
    },
    color: "text-chrono-red",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/6/68/Lucca2.png",
  },
  frog: {
    name: "Frog",
    title: "O Cavaleiro Amaldiçoado",
    era: "600 AD",
    element: "Água (Water)",
    weapon: "Espada Larga",
    bio: "Frog, cujo nome verdadeiro é Glenn, era um escudeiro humano que foi transformado em sapo por Magus. Apesar de sua aparência, ele mantém a nobreza e honra de um verdadeiro cavaleiro do Reino de Guardia.",
    story: "Glenn serviu como escudeiro de Cyrus, o maior cavaleiro de Guardia. Quando Cyrus foi morto por Magus enquanto tentava obter a Masamune, Glenn foi transformado em sapo como punição por sua covardia. Carregando a culpa e a lendária espada Masamune, ele jurou derrotar Magus e vingar seu mestre. Durante a jornada, ele encontra redenção e prova seu valor como o verdadeiro herdeiro da lâmina lendária.",
    stats: {
      hp: "Alto",
      mp: "Médio",
      power: "Alto",
      magic: "Médio-Alto",
      speed: "Médio",
    },
    techs: {
      single: [
        { name: "Slurp", mp: 1, description: "Cura um aliado lambendo-o" },
        { name: "Slurp Cut", mp: 2, description: "Ataque com a língua seguido de corte" },
        { name: "Water", mp: 2, description: "Ataque de água em um inimigo" },
        { name: "Heal", mp: 2, description: "Cura HP de um aliado" },
        { name: "Leap Slash", mp: 4, description: "Salto poderoso com corte descendente" },
        { name: "Water 2", mp: 8, description: "Ataque de água em área" },
        { name: "Cure 2", mp: 5, description: "Cura forte em um aliado" },
        { name: "Frog Squash", mp: 15, description: "Quanto menos HP, mais dano" },
      ],
      double: [
        { name: "X Strike", partner: "Crono", description: "Ataque cruzado devastador" },
        { name: "Sword Stream", partner: "Crono", description: "Combo de espadas aquáticas" },
        { name: "Ice Water", partner: "Marle", description: "Combo de água e gelo" },
        { name: "Glacier", partner: "Marle", description: "Ataque de gelo massivo" },
        { name: "Red Pin", partner: "Lucca", description: "Combo fogo-água" },
        { name: "Blade Toss", partner: "Robo", description: "Arremesso de lâminas" },
        { name: "Slurp Kiss", partner: "Ayla", description: "Cura combinada" },
        { name: "Frog Flare", partner: "Magus", description: "Combo sombrio aquático" },
      ],
      triple: [
        { name: "Arc Impulse", partners: "Crono + Marle", description: "Ataque triplo coordenado" },
        { name: "Triple Raid", partners: "Crono + Robo", description: "Investida tripla" },
        { name: "Antipode 3", partners: "Marle + Lucca", description: "Combo elemental máximo" },
        { name: "3D Attack", partners: "Robo + Ayla", description: "Ataque tridimensional" },
        { name: "Dark Eternal", partners: "Marle + Magus", description: "Combo sombrio gelado" },
      ],
    },
    bestEquipment: {
      weapon: "Masamune II - A lendária espada melhorada",
      armor: "Moon Armor - Alta defesa",
      accessory: "Hero Medal - Aumenta crítico com Masamune",
    },
    color: "text-chrono-green",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/9/9e/Frog2.png",
  },
  robo: {
    name: "Robo",
    title: "O Autômato com Coração",
    era: "2300 AD",
    element: "Sombra (Shadow)",
    weapon: "Braço Mecânico",
    bio: "R-66Y, apelidado de Robo por Marle, é um robô do futuro pós-apocalíptico. Originalmente projetado para ajudar humanos, ele foi encontrado desativado e quebrado nas ruínas de um laboratório.",
    story: "Robo foi criado pela Mãe Cérebro como parte de uma série de robôs auxiliares. Quando Lavos destruiu a civilização em 1999 AD, Robo foi danificado e desligado. Crono e seus amigos o encontraram e repararam, e ele se juntou à causa. Durante a aventura, Robo questiona sua própria existência e propósito, eventualmente descobrindo que possui algo que seus criadores nunca planejaram: uma alma. Ele passa 400 anos sozinho replantando uma floresta, demonstrando sua dedicação inabalável.",
    stats: {
      hp: "Muito Alto",
      mp: "Baixo",
      power: "Muito Alto",
      magic: "Baixo",
      speed: "Baixo",
    },
    techs: {
      single: [
        { name: "Rocket Punch", mp: 1, description: "Lança seu punho como projétil" },
        { name: "Cure Beam", mp: 2, description: "Raio de cura em um aliado" },
        { name: "Laser Spin", mp: 3, description: "Ataque giratório com lasers" },
        { name: "Robo Tackle", mp: 4, description: "Investida robótica poderosa" },
        { name: "Heal Beam", mp: 3, description: "Cura em linha" },
        { name: "Uzzi Punch", mp: 12, description: "Rajada de socos" },
        { name: "Area Bomb", mp: 14, description: "Bomba de área" },
        { name: "Shock", mp: 17, description: "Técnica elétrica devastadora" },
      ],
      double: [
        { name: "Rocket Roll", partner: "Crono", description: "Robo arremessa Crono" },
        { name: "Max Cyclone", partner: "Crono", description: "Ciclone potencializado" },
        { name: "Aura Beam", partner: "Marle", description: "Cura em linha" },
        { name: "Ice Tackle", partner: "Marle", description: "Investida congelante" },
        { name: "Fire Punch", partner: "Lucca", description: "Soco incendiário" },
        { name: "DoublevBomb", partner: "Lucca", description: "Bomba dupla" },
        { name: "Blade Toss", partner: "Frog", description: "Arremesso de lâminas" },
        { name: "Boogie", partner: "Ayla", description: "Dança confusora" },
        { name: "Dark Bomb", partner: "Magus", description: "Bomba sombria" },
      ],
      triple: [
        { name: "Lifeline", partners: "Crono + Marle", description: "Cura suprema em área" },
        { name: "Delta Storm", partners: "Crono + Lucca", description: "Tempestade elemental" },
        { name: "Triple Raid", partners: "Crono + Frog", description: "Investida tripla" },
        { name: "Twister", partners: "Crono + Ayla", description: "Tornado físico" },
        { name: "3D Attack", partners: "Frog + Ayla", description: "Ataque tridimensional" },
        { name: "Omega Flare", partners: "Lucca + Magus", description: "Flare supremo" },
      ],
    },
    bestEquipment: {
      weapon: "Crisis Arm - Dano baseado em último dígito de HP",
      armor: "Moon Armor - Alta defesa",
      accessory: "Gold Stud - Reduz custo de MP",
    },
    color: "text-chrono-gold",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/e/e5/Robo2.png",
  },
  ayla: {
    name: "Ayla",
    title: "A Guerreira Pré-Histórica",
    era: "65.000.000 BC",
    element: "Nenhum (Physical)",
    weapon: "Punhos",
    bio: "Ayla é a líder da tribo Ioka na era pré-histórica. Extremamente forte e destemida, ela usa apenas seus punhos como armas e possui uma personalidade selvagem mas leal.",
    story: "Ayla lidera seu povo na guerra contra os Reptites, uma raça de dinossauros inteligentes que competem pelo domínio do planeta. Quando Crono e seus amigos aparecem em sua era, ela os ajuda a recuperar a Gate Key roubada pelos Reptites. Impressionada com a coragem do grupo, ela se junta à aventura. Ayla representa a força primitiva da humanidade e seu instinto de sobrevivência. Sua linguagem simples esconde uma mente astuta e um coração corajoso.",
    stats: {
      hp: "Muito Alto",
      mp: "Nenhum",
      power: "Extremamente Alto",
      magic: "Muito Baixo",
      speed: "Muito Alto",
    },
    techs: {
      single: [
        { name: "Kiss", mp: 1, description: "Cura e remove status de um aliado" },
        { name: "Rollo Kick", mp: 2, description: "Chute giratório" },
        { name: "Cat Attack", mp: 3, description: "Ataque felino rápido" },
        { name: "Rock Throw", mp: 4, description: "Arremessa pedras nos inimigos" },
        { name: "Charm", mp: 4, description: "Rouba itens de inimigos" },
        { name: "Tail Spin", mp: 10, description: "Giro de cauda em área" },
        { name: "Dino Tail", mp: 15, description: "Ataque de cauda de dinossauro" },
        { name: "Triple Kick", mp: 20, description: "Três chutes devastadores" },
      ],
      double: [
        { name: "Drill Kick", partner: "Crono", description: "Ataque combinado aéreo" },
        { name: "Volt Bite", partner: "Crono", description: "Mordida elétrica" },
        { name: "Ice Tackle", partner: "Marle", description: "Investida congelante" },
        { name: "Cube Toss", partner: "Marle", description: "Arremesso de cubo de gelo" },
        { name: "Blaze Kick", partner: "Lucca", description: "Chute flamejante" },
        { name: "Flame Kick", partner: "Lucca", description: "Chute de fogo" },
        { name: "Slurp Kiss", partner: "Frog", description: "Cura combinada" },
        { name: "Drop Kick", partner: "Frog", description: "Chute descendente" },
        { name: "Boogie", partner: "Robo", description: "Dança confusora" },
        { name: "Spin Kick", partner: "Robo", description: "Chute giratório robótico" },
        { name: "Dark Tackle", partner: "Magus", description: "Investida sombria" },
      ],
      triple: [
        { name: "Final Kick", partners: "Crono + Marle", description: "Chute final combinado" },
        { name: "Gatling Kick", partners: "Crono + Lucca", description: "Rajada de chutes" },
        { name: "Twister", partners: "Crono + Robo", description: "Tornado físico" },
        { name: "3D Attack", partners: "Frog + Robo", description: "Ataque tridimensional" },
        { name: "Poyozo Dance", partners: "Marle + Lucca", description: "Dança confusa" },
      ],
    },
    bestEquipment: {
      weapon: "Bronze Fist (evolui automaticamente) - Iron Fist → BronzeFist",
      armor: "Prism Dress - Alta defesa mágica",
      accessory: "Power Glove - Aumenta poder de ataque",
    },
    color: "text-amber-400",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/4/43/Ayla2.png",
  },
  magus: {
    name: "Magus",
    title: "O Mago das Sombras",
    era: "600 AD / 12.000 BC",
    element: "Sombra (Shadow)",
    weapon: "Foice",
    bio: "Magus é um poderoso mago que comanda as forças dos Mystics em 600 AD. Sua verdadeira identidade é Janus, o príncipe do Reino de Zeal da era 12.000 BC, irmão de Schala.",
    story: "Janus nasceu no Reino de Zeal como filho da Rainha Zeal e irmão mais novo de Schala. Quando criança, ele possuía poderes mágicos latentes e uma conexão especial com seu gato, Alfador. Quando a Rainha Zeal tentou absorver o poder de Lavos, o desastre resultante enviou Janus através do tempo até 600 AD. Lá, ele foi encontrado por Ozzie e criado para se tornar o líder dos Mystics. Assumindo o nome Magus, ele planejou invocar Lavos para destruí-lo e vingar sua família. Após ser derrotado pelo grupo de Crono, ele pode se juntar a eles em sua missão comum de destruir Lavos.",
    stats: {
      hp: "Médio",
      mp: "Muito Alto",
      power: "Médio",
      magic: "Extremamente Alto",
      speed: "Alto",
    },
    techs: {
      single: [
        { name: "Lightning 2", mp: 8, description: "Raio poderoso" },
        { name: "Ice 2", mp: 8, description: "Gelo poderoso" },
        { name: "Fire 2", mp: 8, description: "Fogo poderoso" },
        { name: "Dark Bomb", mp: 8, description: "Bomba de energia sombria" },
        { name: "Magic Wall", mp: 8, description: "Barreira mágica protetora" },
        { name: "Dark Mist", mp: 10, description: "Névoa sombria em área" },
        { name: "Black Hole", mp: 15, description: "Buraco negro que suga inimigos" },
        { name: "Dark Matter", mp: 20, description: "Técnica suprema de sombra" },
      ],
      double: [
        { name: "Dark Bomb", partner: "Crono", description: "Explosão sombria elétrica" },
        { name: "Doom Blade", partner: "Crono", description: "Lâmina da perdição" },
        { name: "Dark Eternal", partner: "Marle", description: "Combo sombrio gelado" },
        { name: "Dark Bomb", partner: "Lucca", description: "Bomba sombria incendiária" },
        { name: "Frog Flare", partner: "Frog", description: "Combo sombrio aquático" },
        { name: "Dark Bomb", partner: "Robo", description: "Bomba mecânica sombria" },
        { name: "Dark Tackle", partner: "Ayla", description: "Investida sombria" },
      ],
      triple: [
        { name: "Omega Flare", partners: "Lucca + Robo", description: "Flare supremo técnico" },
        { name: "Dark Eternal", partners: "Marle + Frog", description: "Eternidade sombria" },
      ],
    },
    bestEquipment: {
      weapon: "Doom Sickle - Foice das trevas",
      armor: "Gloom Cape - Resistência a sombra",
      accessory: "Gold Stud - Reduz custo de MP em 75%",
    },
    color: "text-chrono-purple",
    imageUrl: "https://static.wikia.nocookie.net/chrono/images/e/ed/Magus2.png",
  },
};
