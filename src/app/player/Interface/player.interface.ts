export interface Player {
  accountId: string;
  id?: string;
  name: string;
  gender: string;
  race: string;
  playTime?: number;
  className: string;
  inventory: any[];
  equipped: any;
  level: string;
  description: string;
  alignmentScore: number;
  totalExperience?: number;
  experience?: number;
  experienceToNextLevel?: number;
  stats: {
    hitPoints: number;
    manaPoints: number;
    movePoints: number;
  };
  maxStats: {
    hitPoints: number;
    manaPoints: number;
    movePoints: number;
  };
  attributes: any;
  maxAttributes: any;
  targetName?: string;
  armorRating: {
    armour: number;
    magic: number;
  };
  status: string;
  money?: {
    gold: number;
    silver: number;
    copper: number;
  };
  qffects?: any;
  weight: number,
  MobKills?: number,
  Trains?: number,
  MobDeaths?: number,
  QuestPoints?: number,
  Practices?: number,
  PlayerKills?: number,
  config?: any;
  joinedDate?: Date;
  LastLoginTime?: Date;
  LastCommandTime?: Date;
  Build: string,
  Face: string,
  Skin: string,
  Eyes: string,
  FacialHair: string,
  HairColour: string,
  HairLength: string,
  HairTexture: string,
}
