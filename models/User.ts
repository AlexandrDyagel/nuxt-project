export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  isBot: boolean;
  photoUrl?: string;
  isPremium?: boolean;
}
