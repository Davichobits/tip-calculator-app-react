import { useCalculatorStore } from '../store/calculator.store'
import { TotalItem, Button } from '../components'

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

        <Button text="reset" onClick={handleReset}  />
      </div>
  )
}
