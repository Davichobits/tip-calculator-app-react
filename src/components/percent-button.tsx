import { useEffect } from 'react';
import { useCalculatorStore } from '../store/calculator.store';

interface Props {
  percent: number;
  onClick: (value: number) => void;
}

export const PercentButton = ({ percent = 5, onClick }: Props) => {

  const store = useCalculatorStore()

  const isActive = percent === store.tipPercent

  useEffect(()=>{}, [percent])

  return (
    <button
      className= {`text-2xl font-bold h-12 rounded-[5px] cursor-pointer ${isActive ? 'bg-Green-200 text-Green-900' : 'bg-Green-900 text-Grey-50 hover:bg-Green-200 hover:text-Green-900'} transition-colors`}
      onClick={()=>onClick(percent)}>
      {`${percent}%`}
    </button>
  )
}
