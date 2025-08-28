import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Calculator {
  bill: number;
  people: number;
  tipPercent: number;
  hasCustomValue: boolean;
  showModal: boolean;

  setBill: (value: number) => void;
  setPeople: (value: number) => void;
  setTipPercent: (value: number) => void;
  reset: () => void;
  setHasCustomValue: (value: boolean) => void;
  setShowModal: (value: boolean) => void;

  // calculados
  tipAmount: () => number;
  total: () => number;
}

export const useCalculatorStore = create<Calculator>()(
  devtools((set, get, store) => ({
    bill: 0,
    people: 1,
    tipPercent: 5,
    hasCustomValue: false,
    showModal:false,

    setBill: (value: number) =>
      set(() => ({
        bill: value,
      })),
    setPeople: (value: number) => {
      if (value <= 0) return;
      set(() => ({
        people: value,
      }));
    },
    setTipPercent: (value: number) =>
      set(() => ({
        tipPercent: value,
      })),
    setHasCustomValue: (value)=>set(()=>({
      hasCustomValue: value,
    })),
    setShowModal: (value)=>set(()=>({
      showModal: value,
    })),
    reset: () =>set(store.getInitialState()),

    tipAmount: () => (get().bill * get().tipPercent) / 100 / get().people,
    total: () =>
      (get().bill + (get().bill * get().tipPercent) / 100) / get().people,
  }))
);
