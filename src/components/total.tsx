import { useCalculatorStore } from '../store/calculator.store'

export const Total = () => {

  const store = useCalculatorStore()

  return (
    <div className='bg-Green-900 rounded-[15px] py-6 px-8 text-White'>

        <div className='flex justify-between'>
          <div>
            <p className='font-bold'>Tip Amout</p>
            <p className='text-[13px] text-Grey-400'>/ person</p>
          </div>
          <p className='font-bold text-[32px] text-Green-400'>${store.tipAmount().toFixed(2)}</p>
        </div>

        <div className='flex justify-between'>
          <div>
            <p className='font-bold'>Total</p>
            <p className='text-[13px] text-Grey-400'>/ person</p>
          </div>
          <p className='font-bold text-[32px] text-Green-400'>${store.total().toFixed(2)}</p>
        </div>

        <button className='bg-Green-400 text-Green-900 uppercase font-bold text-center w-full rounded-[5px] h-12'>Reset</button>
      </div>
  )
}
