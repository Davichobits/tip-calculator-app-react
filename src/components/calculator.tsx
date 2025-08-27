import { useCalculatorStore } from '../store/calculator.store';
import { Button, Input, Total } from '../components';

const tips: number[] = [5, 10, 15, 25, 50];

export const Calculator = () => {
  const store = useCalculatorStore();

  const handleClick = (newPercent:number) => {
    store.setTipPercent(newPercent);
  };

  const handleCustomClick = () => {
    console.log('Custom');
  };

  return (
    <div className='bg-White p-8 rounded-[25px]'>
      <Input variant='bill' value={store.bill} setValue={store.setBill} label='Bill' />
      <h2>Select Tip %</h2>

      <div className='grid grid-cols-2 gap-4'>
        {tips.map((tip) => (
          <Button key={tip} percent={tip} onClick={handleClick} />
        ))}
        <Button percent={0} onClick={handleCustomClick} isCustom />
      </div>

      <Input
        variant='people'
        value={store.people}
        setValue={store.setPeople}
        label='Number of people'
      />

      <Total />
    </div>
  );
};
