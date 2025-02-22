import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/coming-soon'); // Auto-redirect users
}