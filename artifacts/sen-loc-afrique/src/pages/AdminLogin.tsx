import { useState } from "react";
import { useLocation } from "wouter";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, navigate] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
    if (password === correctPassword) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/vehicles");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card border border-white/10 p-8 rounded-2xl w-96">
        <h1 className="text-2xl font-bold mb-6 text-foreground text-center">Administration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 rounded-xl mb-4 bg-background border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-primary text-primary-foreground p-3 rounded-xl font-bold hover:bg-primary/90">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
