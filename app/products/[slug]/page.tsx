import { redirect } from 'next/navigation';

// Product detail page has been removed. Redirect to home.
export default function Page() {
  redirect('/');
}
