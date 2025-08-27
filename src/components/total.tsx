import { useCalculatorStore } from '../store/calculator.store'
import { TotalItem } from '../components'

export const Total = () => {

  const store = useCalculatorStore()

  const handleReset = () => {
    store.reset()
  }

  return (
    <div className='bg-Green-900 rounded-[15px] py-6 px-8 text-White lg:w-[413px] lg:p-8 lg:flex lg:flex-col lg:justify-between'>

        <div>
          <TotalItem text='Tip Amount' value={store.tipAmount()} />
          <TotalItem text='Total' value={store.total()} />
        </div>

        <button onClick={handleReset} className='bg-Green-400 text-Green-900 uppercase font-bold text-center w-full rounded-[5px] text-[20px] h-12 cursor-pointer hover:bg-Green-200 transition-colors'>Reset</button>
      </div>
  )
}
