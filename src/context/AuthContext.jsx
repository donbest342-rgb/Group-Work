// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { get, post } from "../utils/api"; // ← FIXED: Import your API helpers

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await get(
        "https://students-learning-api.onrender.com/api/auth/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        localStorage.removeItem("authToken");
        setUser(null);
      }
    } catch (err) {
      console.error("Failed to fetch user", err);
      localStorage.removeItem("authToken");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (email, password) => {
    const res = await post(
      "https://students-learning-api.onrender.com/api/auth/login",
      { email, password }
    );
    
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    localStorage.setItem("authToken", data.token);
    await fetchUser(); // Refetch real user data
  };

  const signup = async (formData) => {
    const res = await post(
      "https://students-learning-api.onrender.com/api/auth",
      formData
    );
    
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Signup failed");

    localStorage.setItem("authToken", data.token);
    await fetchUser();
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, refetch: fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}