import { useState } from 'react';

interface Props {
  label: string;
  value: number;
  variant: "bill" | "people"
  setValue: (value: number) => void;
}

export const Input = ({ label, value, variant, setValue }: Props) => {
  const [localValue, setLocalValue] = useState<string>(value.toString());
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const userInput = e.target.value

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

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <label htmlFor='bill'>{label}</label>
        {
          variant === 'people' && <p className={`text-Orange-400 font-bold ${error ? 'block': 'hidden'}`}>Can't be zero</p>
        }
      </div>
      <input
        id='people'
        type='text'
        value={localValue}
        onChange={handleChange}
        className={`
          bg-Grey-50 rounded-[5px] focus:ouline-1 focus:outline-Green-400 input-none cursor-pointer 
          ${error && 'focus:outline-Orange-400'} 
        `}
      />
    </div>
  );
};
