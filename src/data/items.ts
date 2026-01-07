export interface Weapon {
  id: string;
  name: string;
  attack: number;
  effect?: string;
  location: string;
  usedBy: string[];
  description: string;
}

export interface Armor {
  id: string;
  name: string;
  defense: number;
  effect?: string;
  location: string;
  description: string;
}

export interface Accessory {
  id: string;
  name: string;
  effect: string;
  location: string;
  description: string;
}

export interface Consumable {
  id: string;
  name: string;
  effect: string;
  buyPrice?: number;
  sellPrice?: number;
  description: string;
}

export const weapons: Weapon[] = [
  // Crono - Katanas
  { id: "wood_sword", name: "Wood Sword", attack: 3, location: "Equipamento inicial", usedBy: ["Crono"], description: "Uma espada de madeira para treino." },
  { id: "bronze_blade", name: "Bronze Blade", attack: 7, location: "Loja de Truce (600 AD)", usedBy: ["Crono"], description: "Lâmina de bronze básica." },
  { id: "steel_saber", name: "Steel Saber", attack: 15, location: "Loja de Porre (1000 AD)", usedBy: ["Crono"], description: "Sabre de aço afiado." },
  { id: "lode_sword", name: "Lode Sword", attack: 20, location: "Denadoro Mountains", usedBy: ["Crono"], description: "Espada feita de minério especial." },
  { id: "red_katana", name: "Red Katana", attack: 30, location: "Reptite Lair", usedBy: ["Crono"], description: "Katana com lâmina vermelha." },
  { id: "flint_edge", name: "Flint Edge", attack: 40, location: "Tyrano Lair", usedBy: ["Crono"], description: "Espada com fio de pederneira." },
  { id: "aeon_blade", name: "Aeon Blade", attack: 70, location: "Ocean Palace", usedBy: ["Crono"], description: "Lâmina imbuída com poder temporal." },
  { id: "demon_edge", name: "Demon Edge", attack: 90, location: "Black Omen", usedBy: ["Crono"], description: "Espada demoníaca poderosa." },
  { id: "alloy_blade", name: "Alloy Blade", attack: 110, location: "Factory (2300 AD)", usedBy: ["Crono"], description: "Liga metálica do futuro." },
  { id: "star_sword", name: "Star Sword", attack: 125, location: "Black Omen", usedBy: ["Crono"], description: "Espada com poder estelar." },
  { id: "vedic_blade", name: "Vedic Blade", attack: 135, location: "Black Omen", usedBy: ["Crono"], description: "Lâmina sagrada védica." },
  { id: "kali_blade", name: "Kali Blade", attack: 150, location: "Northern Ruins (Side Quest)", usedBy: ["Crono"], description: "Espada da destruição." },
  { id: "shiva_edge", name: "Shiva Edge", attack: 170, location: "Geno Dome", usedBy: ["Crono"], description: "Fio de Shiva, corte divino." },
  { id: "rainbow", name: "Rainbow", attack: 220, effect: "70% chance de crítico", location: "Forja com Rainbow Shell + Sun Stone", usedBy: ["Crono"], description: "A espada definitiva de Crono. Brilha com as cores do arco-íris." },

  // Marle - Crossbows
  { id: "bronze_bow", name: "Bronze Bow", attack: 3, location: "Equipamento inicial", usedBy: ["Marle"], description: "Besta de bronze básica." },
  { id: "iron_bow", name: "Iron Bow", attack: 15, location: "Guardia Castle (1000 AD)", usedBy: ["Marle"], description: "Besta de ferro resistente." },
  { id: "lode_bow", name: "Lode Bow", attack: 20, location: "Loja de Porre (1000 AD)", usedBy: ["Marle"], description: "Besta feita de minério especial." },
  { id: "robin_bow", name: "Robin Bow", attack: 25, location: "Denadoro Mountains", usedBy: ["Marle"], description: "Besta leve e precisa." },
  { id: "sage_bow", name: "Sage Bow", attack: 40, location: "Zeal Palace", usedBy: ["Marle"], description: "Besta encantada por sábios." },
  { id: "dream_bow", name: "Dream Bow", attack: 60, location: "Black Omen", usedBy: ["Marle"], description: "Besta dos sonhos." },
  { id: "comet_bow", name: "Comet Arrow", attack: 80, location: "Forja especial", usedBy: ["Marle"], description: "Dispara flechas como cometas." },
  { id: "sonic_bow", name: "Sonic Arrow", attack: 100, location: "Geno Dome", usedBy: ["Marle"], description: "Flechas que quebram a barreira do som." },
  { id: "siren", name: "Siren", attack: 140, effect: "Ataque confunde inimigos", location: "Black Omen", usedBy: ["Marle"], description: "Besta que encanta inimigos." },
  { id: "venus_bow", name: "Venus Bow", attack: 0, effect: "Causa 777 de dano fixo", location: "Forja com Rainbow Shell", usedBy: ["Marle"], description: "Arco mágico que ignora defesa." },

  // Lucca - Guns
  { id: "airgun", name: "Air Gun", attack: 5, location: "Equipamento inicial", usedBy: ["Lucca"], description: "Pistola de ar comprimido." },
  { id: "dart_gun", name: "Dart Gun", attack: 7, location: "Casa de Lucca", usedBy: ["Lucca"], description: "Dispara dardos." },
  { id: "auto_gun", name: "Auto Gun", attack: 15, location: "Loja de Truce (1000 AD)", usedBy: ["Lucca"], description: "Pistola automática." },
  { id: "plasma_gun", name: "Plasma Gun", attack: 25, location: "Proto Dome", usedBy: ["Lucca"], description: "Dispara plasma." },
  { id: "ruby_gun", name: "Ruby Gun", attack: 40, location: "Ocean Palace", usedBy: ["Lucca"], description: "Pistola com poder de rubi." },
  { id: "dream_gun", name: "Dream Gun", attack: 60, location: "Black Omen", usedBy: ["Lucca"], description: "Arma dos sonhos." },
  { id: "megablast", name: "Megablast", attack: 80, location: "Factory (2300 AD)", usedBy: ["Lucca"], description: "Canhão de mão." },
  { id: "shockwave", name: "Shockwave", attack: 110, location: "Geno Dome", usedBy: ["Lucca"], description: "Gera ondas de choque." },
  { id: "wondershot", name: "Wondershot", attack: 0, effect: "Dano aleatório (1x a 3x)", location: "Sun Stone + Forja", usedBy: ["Lucca"], description: "Arma experimental - dano imprevisível mas potencialmente devastador." },

  // Frog - Broadswords
  { id: "bronze_sword", name: "Bronze Sword", attack: 6, location: "Equipamento inicial", usedBy: ["Frog"], description: "Espada larga de bronze." },
  { id: "iron_blade", name: "Iron Blade", attack: 10, location: "Loja de Truce (600 AD)", usedBy: ["Frog"], description: "Lâmina de ferro." },
  { id: "masamune", name: "Masamune", attack: 75, effect: "Poder da lâmina lendária", location: "Denadoro Mountains (reparar)", usedBy: ["Frog"], description: "A lendária espada heróica." },
  { id: "flash_blade", name: "Flash Blade", attack: 90, location: "Black Omen", usedBy: ["Frog"], description: "Lâmina relampejante." },
  { id: "pearl_edge", name: "Pearl Edge", attack: 105, location: "Geno Dome", usedBy: ["Frog"], description: "Espada com brilho perolado." },
  { id: "rune_blade", name: "Rune Blade", attack: 120, location: "Northern Ruins", usedBy: ["Frog"], description: "Lâmina com runas antigas." },
  { id: "demon_hit", name: "Demon Hit", attack: 120, effect: "Chance de causar Caos", location: "Black Omen", usedBy: ["Frog"], description: "Espada demoníaca." },
  { id: "brave_sword", name: "Brave Sword", attack: 135, location: "Northern Ruins (Cyrus ghost)", usedBy: ["Frog"], description: "Espada do bravo Cyrus." },
  { id: "masamune2", name: "Masamune II", attack: 200, effect: "Crítico +50%, Hero Medal aumenta ainda mais", location: "Forja (Northern Ruins)", usedBy: ["Frog"], description: "A Masamune aprimorada ao máximo." },

  // Robo - Mechanical Arms
  { id: "tin_arm", name: "Tin Arm", attack: 20, location: "Equipamento inicial", usedBy: ["Robo"], description: "Braço de lata." },
  { id: "hammer_arm", name: "Hammer Arm", attack: 25, location: "Factory (2300 AD)", usedBy: ["Robo"], description: "Braço-martelo." },
  { id: "mirage_hand", name: "Mirage Hand", attack: 30, location: "Proto Dome", usedBy: ["Robo"], description: "Mão holográfica." },
  { id: "stone_arm", name: "Stone Arm", attack: 40, location: "Laruba Ruins", usedBy: ["Robo"], description: "Braço de pedra." },
  { id: "doom_finger", name: "Doom Finger", attack: 50, location: "Keeper's Dome", usedBy: ["Robo"], description: "Dedo da perdição." },
  { id: "magma_hand", name: "Magma Hand", attack: 70, location: "Terra Cave", usedBy: ["Robo"], description: "Mão de magma." },
  { id: "megaton_arm", name: "Megaton Arm", attack: 90, location: "Factory (selado)", usedBy: ["Robo"], description: "Braço de uma megatonelada." },
  { id: "big_hand", name: "Big Hand", attack: 105, location: "Geno Dome", usedBy: ["Robo"], description: "Mão gigante." },
  { id: "kaiser_arm", name: "Kaiser Arm", attack: 120, location: "Black Omen", usedBy: ["Robo"], description: "Braço do imperador." },
  { id: "giga_arm", name: "Giga Arm", attack: 135, location: "Geno Dome (Mother Brain)", usedBy: ["Robo"], description: "Braço giga-potente." },
  { id: "terra_arm", name: "Terra Arm", attack: 150, location: "Black Omen", usedBy: ["Robo"], description: "Braço terrestre." },
  { id: "crisis_arm", name: "Crisis Arm", attack: 0, effect: "Dano = último dígito HP x ataque", location: "Geno Dome", usedBy: ["Robo"], description: "Quanto menor o HP, maior o dano potencial. Com 9999 HP causa dano máximo." },

  // Ayla - Fists (evoluem automaticamente)
  { id: "fist", name: "Fist", attack: 0, effect: "Evolui com level", location: "Natural", usedBy: ["Ayla"], description: "Os punhos de Ayla ficam mais fortes com level." },
  { id: "iron_fist", name: "Iron Fist", attack: 0, effect: "Level 72+", location: "Natural (Level 72)", usedBy: ["Ayla"], description: "Punhos duros como ferro." },
  { id: "bronze_fist", name: "Bronze Fist", attack: 0, effect: "Level 96+ / 9999 de dano crítico", location: "Natural (Level 96)", usedBy: ["Ayla"], description: "Punhos supremos. Crítico causa 9999 de dano!" },

  // Magus - Scythes
  { id: "dark_scythe", name: "Dark Scythe", attack: 120, location: "Equipamento inicial (quando recruta)", usedBy: ["Magus"], description: "Foice das trevas." },
  { id: "hurricane", name: "Hurricane", attack: 135, location: "Black Omen", usedBy: ["Magus"], description: "Foice do furacão." },
  { id: "star_scythe", name: "Star Scythe", attack: 150, location: "Black Omen", usedBy: ["Magus"], description: "Foice estelar." },
  { id: "doom_sickle", name: "Doom Sickle", attack: 160, effect: "Dano aumenta quanto mais MP gasto", location: "Northern Ruins (Ozzie's Fort)", usedBy: ["Magus"], description: "A foice definitiva de Magus." },
];

export const armors: Armor[] = [
  // Light Armors (todos podem usar)
  { id: "hide_tunic", name: "Hide Tunic", defense: 5, location: "Equipamento inicial", description: "Túnica de couro." },
  { id: "karate_gi", name: "Karate Gi", defense: 10, location: "Loja de Porre", description: "Roupa de artes marciais." },
  { id: "bronze_armor", name: "Bronze Armor", defense: 16, location: "Loja de Truce (600 AD)", description: "Armadura de bronze." },
  { id: "maiden_suit", name: "Maiden Suit", defense: 18, location: "Guardia Castle", description: "Vestido protetor para mulheres." },
  { id: "iron_suit", name: "Iron Suit", defense: 25, location: "Loja de Medina", description: "Armadura de ferro." },
  { id: "titan_vest", name: "Titan Vest", defense: 32, location: "Denadoro Mountains", description: "Colete de titã." },
  { id: "gold_suit", name: "Gold Suit", defense: 39, location: "Zeal Palace", description: "Armadura de ouro." },
  { id: "ruby_vest", name: "Ruby Vest", defense: 45, location: "Ocean Palace", description: "Colete de rubi - resistência a fogo." },
  { id: "dark_mail", name: "Dark Mail", defense: 45, location: "Magus Castle", description: "Armadura das trevas." },
  { id: "mist_robe", name: "Mist Robe", defense: 54, location: "Black Omen", description: "Manto de névoa." },
  { id: "meso_mail", name: "Meso Mail", defense: 52, location: "Laruba Ruins", description: "Armadura mesozoica." },
  { id: "lumin_robe", name: "Lumin Robe", defense: 63, location: "Sun Palace", description: "Manto luminoso." },
  { id: "flash_armor", name: "Flash Armor", defense: 64, location: "Giant's Claw", description: "Armadura relampejante." },
  { id: "lode_vest", name: "Lode Vest", defense: 71, location: "Geno Dome", description: "Colete de minério raro." },
  { id: "aeon_suit", name: "Aeon Suit", defense: 75, location: "Black Omen", description: "Armadura temporal." },
  { id: "zodiacy", name: "Zodiacy", defense: 80, location: "Black Omen", description: "Armadura zodiacal." },
  { id: "nova_armor", name: "Nova Armor", defense: 82, location: "Black Omen (raro)", description: "Armadura de supernova." },
  { id: "moon_armor", name: "Moon Armor", defense: 85, location: "Black Omen", description: "Armadura lunar - uma das melhores." },
  { id: "prism_dress", name: "Prism Dress", defense: 99, effect: "Reduz dano mágico em 1/3", location: "Forja (Rainbow Shell)", description: "Vestido prismático para mulheres." },
  { id: "gloom_cape", name: "Gloom Cape", defense: 84, effect: "Absorve Shadow", location: "Ozzie's Fort", description: "Capa sombria para Magus." },

  // Exclusive armors
  { id: "taban_vest", name: "Taban Vest", defense: 33, effect: "Resistência a fogo +10", location: "Dado por Taban", description: "Colete feito pelo pai de Lucca - só ela pode usar." },
  { id: "taban_suit", name: "Taban Suit", defense: 79, effect: "Resistência a fogo +5, aumenta Speed +3", location: "Dado por Taban (após Sun Stone)", description: "Traje avançado de Taban para Lucca." },
];

export const accessories: Accessory[] = [
  { id: "bandana", name: "Bandana", effect: "Speed +1", location: "Truce Inn", description: "Bandana simples." },
  { id: "ribbon", name: "Ribbon", effect: "Protege contra status negativos", location: "Guardia Castle", description: "Fita protetora." },
  { id: "power_glove", name: "Power Glove", effect: "Power +2", location: "Loja de Medina", description: "Luva de força." },
  { id: "defender", name: "Defender", effect: "Vigor +2", location: "Denadoro Mountains", description: "Símbolo de defesa." },
  { id: "magic_scarf", name: "Magic Scarf", effect: "Magic +2", location: "Drop de Magus", description: "Cachecol mágico." },
  { id: "hit_ring", name: "Hit Ring", effect: "Hit +10", location: "Factory", description: "Anel de precisão." },
  { id: "berserker", name: "Berserker", effect: "Ataque automático +50% de dano", location: "Giant's Claw", description: "Anel do berserker - perde controle." },
  { id: "power_ring", name: "Power Ring", effect: "Power +6", location: "Proto Dome", description: "Anel de força." },
  { id: "magic_ring", name: "Magic Ring", effect: "Magic +6", location: "Zeal Palace", description: "Anel mágico." },
  { id: "wall_ring", name: "Wall Ring", effect: "Protect constante", location: "Black Omen", description: "Anel de barreira." },
  { id: "silver_earring", name: "Silver Earring", effect: "HP Máximo +25%", location: "Northern Ruins", description: "Brinco de prata." },
  { id: "gold_earring", name: "Gold Earring", effect: "HP Máximo +50%", location: "Black Omen", description: "Brinco de ouro." },
  { id: "silver_stud", name: "Silver Stud", effect: "Reduz custo de MP em 50%", location: "Geno Dome", description: "Brinco mágico de prata." },
  { id: "gold_stud", name: "Gold Stud", effect: "Reduz custo de MP em 75%", location: "Black Omen", description: "Brinco mágico de ouro - essencial para magos." },
  { id: "sight_scope", name: "Sight Scope", effect: "Mostra HP do inimigo", location: "Loja de Truce", description: "Mostra informações do inimigo." },
  { id: "charm_top", name: "Charm Top", effect: "Aumenta taxa de Charm", location: "Laruba Ruins", description: "Melhora roubo de itens." },
  { id: "rage_band", name: "Rage Band", effect: "Contra-ataque 50%", location: "Denadoro Mountains", description: "Banda de fúria." },
  { id: "frenzy_band", name: "Frenzy Band", effect: "Contra-ataque 80%", location: "Giant's Claw", description: "Banda de frenesi." },
  { id: "third_eye", name: "Third Eye", effect: "Evade 2x", location: "Proto Dome", description: "Terceiro olho." },
  { id: "wallet", name: "Wallet", effect: "Converte EXP em Gold", location: "Loja de Medina", description: "Carteira mágica." },
  { id: "green_dream", name: "Green Dream", effect: "Auto-Revive uma vez", location: "Doan (Arris Dome)", description: "Sonho verde - revive uma vez por batalha." },
  { id: "hero_medal", name: "Hero Medal", effect: "Crítico 50%+ com Masamune", location: "Cyrus's Ghost", description: "Medalha do herói Cyrus - só Frog pode usar." },
  { id: "prism_specs", name: "Prism Specs", effect: "Aumenta dano mágico em 50%", location: "Forja (Rainbow Shell)", description: "Óculos prismáticos." },
  { id: "sun_shades", name: "Sun Shades", effect: "Aumenta dano de ataque em 25%", location: "Sun Stone + Forja", description: "Óculos de sol - aumenta dano físico." },
  { id: "dash_ring", name: "Dash Ring", effect: "Speed +3", location: "Factory (2300 AD)", description: "Anel de velocidade." },
  { id: "speed_belt", name: "Speed Belt", effect: "Speed +2, Evade +2", location: "Black Omen", description: "Cinto de velocidade." },
  { id: "musclering", name: "Muscle Ring", effect: "Vigor +6, Hit +10", location: "Fiona's Shrine", description: "Anel muscular." },
  { id: "flea_vest", name: "Flea Vest", effect: "Magic Defense +12", location: "Ozzie's Fort", description: "Colete de Flea." },
  { id: "ozzie_pants", name: "Ozzie Pants", effect: "Nenhum positivo, só piadas", location: "Ozzie's Fort", description: "As calças de Ozzie... não vale a pena." },
  { id: "amulet", name: "Amulet", effect: "Reduz dano mágico em 1/3", location: "Black Omen", description: "Amuleto de proteção mágica." },
];

export const consumables: Consumable[] = [
  { id: "potion", name: "Potion", effect: "Cura 50 HP", buyPrice: 10, sellPrice: 5, description: "Poção básica de cura." },
  { id: "mid_potion", name: "Mid Potion", effect: "Cura 200 HP", buyPrice: 100, sellPrice: 50, description: "Poção de cura intermediária." },
  { id: "hi_potion", name: "Hi-Potion", effect: "Cura 500 HP", buyPrice: 700, sellPrice: 350, description: "Poção de cura avançada." },
  { id: "full_potion", name: "Full Potion", effect: "Cura HP completamente", buyPrice: 0, sellPrice: 200, description: "Poção de cura completa - não pode ser comprada." },
  { id: "ether", name: "Ether", effect: "Recupera 10 MP", buyPrice: 800, sellPrice: 400, description: "Restaura um pouco de MP." },
  { id: "mid_ether", name: "Mid Ether", effect: "Recupera 30 MP", buyPrice: 2000, sellPrice: 1000, description: "Restaura MP moderadamente." },
  { id: "hi_ether", name: "Hi-Ether", effect: "Recupera 60 MP", buyPrice: 0, sellPrice: 500, description: "Restaura muito MP - raro." },
  { id: "full_ether", name: "Full Ether", effect: "Recupera MP completamente", buyPrice: 0, sellPrice: 1000, description: "Restaura todo o MP - muito raro." },
  { id: "elixir", name: "Elixir", effect: "Restaura HP e MP completamente", buyPrice: 0, sellPrice: 5000, description: "Item supremo de cura - guarde para emergências." },
  { id: "mega_elixir", name: "MegaElixir", effect: "Restaura HP e MP de todo o grupo", buyPrice: 0, sellPrice: 10000, description: "Cura o grupo inteiro - extremamente raro." },
  { id: "revive", name: "Revive", effect: "Revive aliado caído com 50 HP", buyPrice: 200, sellPrice: 100, description: "Ressuscita um aliado." },
  { id: "full_revive", name: "Full Revive", effect: "Revive aliado caído com HP cheio", buyPrice: 0, sellPrice: 2500, description: "Ressuscita com HP máximo." },
  { id: "heal", name: "Heal", effect: "Cura status negativos", buyPrice: 10, sellPrice: 5, description: "Remove veneno, cegueira, etc." },
  { id: "shelter", name: "Shelter", effect: "Recupera HP/MP no save point", buyPrice: 150, sellPrice: 75, description: "Use em pontos de save para descansar." },
  { id: "power_tab", name: "Power Tab", effect: "Aumenta Power permanentemente", buyPrice: 0, sellPrice: 5, description: "Tab vermelho - aumenta força." },
  { id: "magic_tab", name: "Magic Tab", effect: "Aumenta Magic permanentemente", buyPrice: 0, sellPrice: 5, description: "Tab azul - aumenta magia." },
  { id: "speed_tab", name: "Speed Tab", effect: "Aumenta Speed permanentemente", buyPrice: 0, sellPrice: 5, description: "Tab amarelo - aumenta velocidade." },
  { id: "petal", name: "Petal", effect: "Cura 50 HP", buyPrice: 0, sellPrice: 5, description: "Pétala encontrada na pré-história." },
  { id: "fang", name: "Fang", effect: "Cura 200 HP", buyPrice: 0, sellPrice: 10, description: "Presa encontrada na pré-história." },
  { id: "horn", name: "Horn", effect: "Cura 500 HP", buyPrice: 0, sellPrice: 25, description: "Chifre encontrado na pré-história." },
  { id: "feather", name: "Feather", effect: "Cura HP completamente", buyPrice: 0, sellPrice: 50, description: "Pena rara da pré-história." },
];
