export interface Culture {
  name: string;
  sourceBook: string;
  blessing: { title: string; text: string };
  shadowPath: { title: string; text: string };
  virtues?: Array<{
    title: string;
    text: string;
  }>;
  standardOfLiving: string;
  attributesTable: Array<{
    roll: number;
    strength: number;
    heart: number;
    mind: number;
  }>;
  derivedStats: {
    endurance: string;
    hope: string;
    parry: string;
  };
  skills: {
    impresionar: number;
    atletismo: number;
    alerta: number;
    cazar: number;
    cantar: number;
    oficio: number;
    alentar: number;
    viajar: number;
    perspicacia: number;
    curar: number;
    cortesia: number;
    guerrear: number;
    persuadir: number;
    sigilo: number;
    inspeccionar: number;
    explorar: number;
    acertijos: number;
    saber: number;
  };
  favoredSkillsChoices: string[];
  combatProficiencies: {
    1: string;
    2: string;
  };
  distinctiveFeatures: string[];
  languagesAndNames: {
    languages: string;
    maleNames: string[];
    femaleNames: string[];
  };
}
