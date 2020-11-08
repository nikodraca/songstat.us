export type MessageType =
  | 'AUTH'
  | 'CURRENTLY_PLAYING'
  | 'PLAYER_PREFERENCES'
  | 'TOGGLE_INCOGNITO'
  | 'USER_DATA'
  | 'LOGOUT';

export interface Message {
  type: MessageType;
  body: any;
}

export interface SlackUserData {
  userId: string;
  teamId: string;
  teamName: string;
  userName?: string;
  userAvatar?: string;
}

export interface PlayerPreferences {
  isIncognito: boolean;
}

export interface SpotifyTrack {
  id: string;
  title: string;
  artist: string;
}
