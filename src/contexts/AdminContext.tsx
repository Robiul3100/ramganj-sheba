import { createContext, useContext, useState, ReactNode } from "react";
import type { Service } from "@/data/services";
import { services as defaultServices } from "@/data/services";

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  serviceList: Service[];
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: number, data: Partial<Service>) => void;
  deleteService: (id: number) => void;
  toggleStatus: (id: number) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

const ADMIN_USER = "admin";
const ADMIN_PASS = "ramganj2026";
const AUTH_KEY = "ramganj_admin_auth";

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(AUTH_KEY) === "true";
  });

  const [serviceList, setServiceList] = useState<Service[]>(() => defaultServices);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  const addService = (service: Omit<Service, "id">) => {
    const maxId = serviceList.reduce((max, s) => Math.max(max, s.id), 0);
    setServiceList((prev) => [...prev, { ...service, id: maxId + 1 }]);
  };

  const updateService = (id: number, data: Partial<Service>) => {
    setServiceList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data } : s))
    );
  };

  const deleteService = (id: number) => {
    setServiceList((prev) => prev.filter((s) => s.id !== id));
  };

  const toggleStatus = (id: number) => {
    setServiceList((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "active" ? "coming_soon" : "active" }
          : s
      )
    );
  };

  return (
    <AdminContext.Provider
      value={{ isAuthenticated, login, logout, serviceList, addService, updateService, deleteService, toggleStatus }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
  return ctx;
};
