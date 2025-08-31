// app/signup/page.tsx
import { Suspense } from "react";
import { SignUpForm } from "@/components/sign-up-form"; // named export

export const metadata = { title: "Sign up â€” IN-1" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SignUpForm />
    </Suspense>
  );
}
