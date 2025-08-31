// app/signin/page.tsx
import { Suspense } from "react";
import { LoginForm } from "@/components/login-form"; // named export

export const metadata = { title: "Sign in — IN-1" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
