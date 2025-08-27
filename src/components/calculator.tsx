import { useCalculatorStore } from '../store/calculator.store';
import { Button, Input, Total } from '../components';

const tips: number[] = [5, 10, 15, 25, 50];

export const Calculator = () => {
  const store = useCalculatorStore();

  const handleClick = (newPercent:number) => {
    store.setHasCustomValue(false);
    store.setTipPercent(newPercent);
  };

  const handleCustomClick = () => {
    const customPercent = prompt('Ingresa un porcentaje (%)');
    store.setTipPercent(Number(customPercent));
    store.setHasCustomValue(true);
  };

  return (
    <div className='bg-White p-8 rounded-[25px] m-auto my-10 w-[375px] md:w-[608px] md:px-20 md:py-12 lg:w-[920px] lg:p-8 lg:flex lg:gap-12'>
      <div className='flex-1'>
        <Input
          label='Bill'
          variant='bill'
          value={store.bill}
          setValue={store.setBill}
          iconUrl='/images/icon-dollar.svg'
        />
        <h2 className='font-bold text-Grey-500 mb-2'>Select Tip %</h2>
        <div className='grid grid-cols-2 gap-4 mb-8'>
          {tips.map((tip) => (
            <Button key={tip} percent={tip} onClick={handleClick} />
          ))}
          <Button percent={store.tipPercent} onClick={handleCustomClick} isCustom />
        </div>
        <Input
          variant='people'
          value={store.people}
          label='Number of people'
          setValue={store.setPeople}
          iconUrl='/images/icon-person.svg'
        />
      </div>

      <Total />
    </div>
  );
};
