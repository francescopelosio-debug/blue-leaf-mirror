﻿// app/auth/login/page.tsx
import { Suspense } from "react";
import LoginClient from "./page.client";

export const dynamic = "force-dynamic"; // evita pre-render aggressivo

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginClient />
    </Suspense>
  );
}