import { useState, useEffect } from 'react';

interface Props {
  label: string;
  value: number;
  iconUrl?: string;
  variant: "bill" | "people"
  setValue: (value: number) => void;
}

export const Input = ({ label, value, variant,iconUrl, setValue }: Props) => {
  
  
  const [localValue, setLocalValue] = useState<string>(value.toString());
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const userInput = e.target.value;

    const decimalsRegExp = /^\d*\.?\d*$/; 
    const numbersRegExp = /^\d*$/;

    const regExp = variant === "bill" ? decimalsRegExp : numbersRegExp;

    const isValid = regExp.test(userInput);
    if (!isValid) return;
    // UI
    setLocalValue(userInput);

    // STORE


    if (userInput === '' || userInput === '0') {
      setValue(0);
      setError(true);
    } else {
      setError(false);
      setValue(Number(userInput));
    }
  };

  useEffect(()=>{
    setLocalValue(value.toString())
  },[value])

  return (
    <div className='flex flex-col mb-8'>
      <div className='flex justify-between mb-2'>
        <label className='font-bold text-Grey-500' htmlFor='bill'>{label}</label>
        {
          variant === 'people' && <p className={`text-Orange-400 font-bold ${error ? 'block': 'hidden'}`}>Can't be zero</p>
        }
      </div>
      <div className='relative'>
        <input
          id='people'
          type='text'
          value={localValue}
          onChange={handleChange}
          className={`
            bg-Grey-50 rounded-[5px] focus:ouline-1 focus:outline-Green-400 input-none cursor-pointer h-12 w-full text-right pr-4 text-2xl font-bold text-Green-900 
            ${error && 'focus:outline-Orange-400'} 
          `}
        />
        {
          iconUrl && (<img className='absolute top-4 left-2' src={iconUrl} alt="icon" />)
        }
      </div>
    </div>
  );
};
