import { useCalculatorStore } from '../store/calculator.store';
import { Button, Input, Total } from '../components';

const tips: number[] = [5,10,15,25,50];

const handleClick = () => {
  console.log('button')
}

const handleCustomClick = ()=>{
    console.log('Custom')
  }

export const Calculator = () => {

  const store = useCalculatorStore()

  return (
    <div className='bg-White p-8 rounded-[25px]'>
        <Input value={store.bill} setValue={store.setBill} label="Bill" />
      <h2>Select Tip %</h2>

      <div className='grid grid-cols-2 gap-4'>
        {
          tips.map((tip)=> <Button key={tip} porcentage={tip} onClick={handleClick} />)
        }
        <Button onClick={handleCustomClick} isCustom />
      </div>

      <Input value={store.people} setValue={store.setPeople} label="Number of people" />

      <Total />
    </div>
  );
};
