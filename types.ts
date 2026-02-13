
export interface DialogueLine {
  id: string;
  speaker: string;
  text: string;
}

export interface SpeakerConfig {
  voice: string;
  volume: number;
  toneDescription: string;
  temperature: number;
}

export interface Voice {
  name: string;
  id: string;
  isCustom?: boolean;
  // Which pre-built voice to use for playback of custom voices
  baseVoiceId?: string; 
  // Recommended tone description found during analysis
  toneDescription?: string;
}

export interface TextModel {
  id: string;
  name: string;
  description: string;
}

// Added VoiceName enum to satisfy dependencies in VoiceSelector
export enum VoiceName {
  Kore = 'Kore',
  Puck = 'Puck',
  Charon = 'Charon',
  Zephyr = 'Zephyr',
  Fenrir = 'Fenrir',
  Enceladus = 'Enceladus'
}
