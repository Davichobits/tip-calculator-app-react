import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Calculator {
  bill: number;
  people: number;
  tipPercent: number;

  setBill: (value: number) => void;
  setPeople: (value: number) => void;
  setTipPercent: (value: number) => void;
  reset: () => void;

  // calculados
  tipAmount: () => number;
  total: () => number;
}

export const useCalculatorStore = create<Calculator>()(
  devtools((set, get, store) => ({
    bill: 0,
    people: 1,
    tipPercent: 5,

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
    reset: () =>set(store.getInitialState()),

    tipAmount: () => (get().bill * get().tipPercent) / 100 / get().people,
    total: () =>
      (get().bill + (get().bill * get().tipPercent) / 100) / get().people,
  }))
);
