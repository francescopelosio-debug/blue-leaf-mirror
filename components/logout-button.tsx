// components/logout-button.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <form action="/api/auth/signout" method="post">
      <Button type="submit" size="sm" variant="outline">
        Logout
      </Button>
    </form>
  );
}
