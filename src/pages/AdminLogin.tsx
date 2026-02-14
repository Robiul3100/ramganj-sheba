import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAdmin();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/admin/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password.trim()) {
      setError("ইউজারনেম ও পাসওয়ার্ড দিন");
      return;
    }
    const success = login(username.trim(), password);
    if (success) {
      navigate("/admin/dashboard", { replace: true });
    } else {
      setError("ভুল ইউজারনেম বা পাসওয়ার্ড");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <button onClick={() => navigate("/")} className="flex items-center gap-1 text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> হোমে ফিরে যান
        </button>

        <div className="bg-card rounded-2xl shadow-neu p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">এডমিন লগইন</h1>
            <p className="text-sm text-muted-foreground mt-1">রামগঞ্জ ডিজিটাল সার্ভিস</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="ইউজারনেম"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 rounded-xl"
                maxLength={50}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="password"
                placeholder="পাসওয়ার্ড"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 rounded-xl"
                maxLength={100}
              />
            </div>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            <Button type="submit" className="w-full rounded-xl">লগইন</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
