import { useState } from 'react'
import { Button, Input } from '../components'
import { useCalculatorStore } from '../store/calculator.store'

export const Modal = () => {

  const [customPercent, setCustomPercent] = useState<number>(0)

  const store = useCalculatorStore()

  const handleCancel = () => {
    store.setShowModal(false);
    store.setHasCustomValue(false);
  }

  const handleChange = (newValue: number)=>{
    setCustomPercent(newValue);
  }

  const handleConfirm = () => {
    store.setShowModal(false);
    store.setTipPercent(customPercent)
  }

  return (
    <dialog
      className='bg-black/50 w-full fixed inset-0 h-screen grid place-content-center'
    >
      <div
        className='w-[375px] py-10 px-6 bg-white rounded-xl'
      >
        <Input 
          label='Ingresa un porcentaje (%)' 
          variant='bill' 
          value={0} 
          setValue={handleChange} 
        />
        <div className='flex gap-4'>
          <Button text="Cancelar" onClick={handleCancel}  />
          <Button text="Aceptar" onClick={handleConfirm}  />
        </div>
      </div>
    </dialog>
  )
}
