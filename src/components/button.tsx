import { useCalculatorStore } from '../store/calculator.store';

interface Props {
  percent: number;
  isCustom?: boolean;
  onClick: (value: number) => void;
}

export const Button = ({ percent = 5, onClick, isCustom = false }: Props) => {

  const store = useCalculatorStore()

  const styles = isCustom 
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50 hover:text-Grey-500' 
    : 'bg-Green-900 text-Grey-50 hover:bg-Green-200 hover:text-Green-900'

  const isActive = percent === store.tipPercent

  return (
    <button
      className= {`text-2xl font-bold h-12 rounded-[5px] cursor-pointer ${isActive ? 'bg-Green-200 text-Green-900' : styles} transition-colors`}
      onClick={()=>onClick(percent)}>
      {isCustom ? 'Custom': `${percent}%` }
    </button>
  )
}
