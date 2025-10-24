export interface FormValues {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  gender: string;
  birthDate: string;
  birthTime: string | null;
  birthLocation: string;
  latitude: number;
  longitude: number;
  profilePicture: string | null;
  instagram: string | null;
  tiktok: string | null;
}
