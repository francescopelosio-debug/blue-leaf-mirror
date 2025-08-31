import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  // Tenere la pagina semplice: niente props tipizzati che rompono la build.
  // Se serve mostrare un messaggio di errore da querystring, lo gestiamo dentro il form (client)
  // usando useSearchParams, senza toccare i PageProps della page.
  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-xl font-semibold mb-4">Sign in</h1>
      <LoginForm />
    </div>
  );
}
