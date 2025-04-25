// features/services/presentation/serviceStore.ts
import { create } from 'zustand';

interface ServiceState {
  selectedService: string;
  setSelectedService: (title: string) => void;
}

export const useServiceStore = create<ServiceState>((set) => ({
  selectedService: '',
  setSelectedService: (title) => set({ selectedService: title }),
}));
