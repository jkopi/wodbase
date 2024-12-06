type InfoType =
  | 'IMPORTANT_INFO'
  | 'GENERAL_INFO'
  | 'WEEKLY_INFO'
  | 'CONTACT_INFO';

export interface FeedInfo {
  id: string;
  type: InfoType;
  content: string;
  createdAt: Date;
  gymId: string;
}
