export interface LoginProps {
  bannerImage: string;
  onSuccess: (credentials: { email: string; password: string }) => void;
}
