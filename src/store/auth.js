import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useAuthStore = create((set, get) => ({
  userData: null,
  loading: false,
  setUserData: (user) => set({ userData: user }),
  setLoading: (loading) => set({ loading }),
  user: () => get({
      user_id: get().userData?.user_id,
      username: get().userData?.username,
    }),
  isLoggedIn: () => get().userData !== null, 
}));

if (import.meta.env.DEV) {
mountStoreDevtool("Store", useAuthStore);
}

export { useAuthStore }; 
