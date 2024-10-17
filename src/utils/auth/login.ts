import { createClient } from "../supabase/client";

export const login = async (email: string, password: string) => {
  console.log("login with credentials");
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const loginWithGoogle = async () => {
  console.log("login with google provider");
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  return { data, error };
};

export const register = async (email: string, password: string) => {
  console.log("register with credentials");
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

