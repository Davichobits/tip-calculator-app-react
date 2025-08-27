import { create } from 'zustand';

interface Calculator {
  bill: number;
  people: number;
  tipPorcentage: number;
  
  setBill: (value: number) => void;
  setPeople: (value: number) => void;
  setTipPorcentage: (value: number) => void;

  // calculados
  tipAmount: ()=> number;
  total: ()=> number;
}

export const useCalculatorStore = create<Calculator>((set, get)=>({
  bill: 0,
  people:1,
  tipPorcentage: 10,

  setBill: (value:number)=>set(()=>({
    bill: value,
  })),
  setPeople: (value:number) => set(()=>({
    people: value,
  })),
  setTipPorcentage: (value:number)=>set(()=>({
    tipPorcentage: value,
  })),

  tipAmount: () => (get().bill * get().tipPorcentage / 100) / get().people,
  total: () => (get().bill + get().bill * get().tipPorcentage / 100) / get().people,

}))