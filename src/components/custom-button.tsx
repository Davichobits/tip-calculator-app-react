import { useCalculatorStore } from '../store/calculator.store';
import { useState, type ChangeEvent } from 'react';

export const CustomButton = () => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [buttonValue, setButtonValue] = useState<string>('Custom');
  const [inputValue, setInputValue] = useState<string>('');

  const store = useCalculatorStore()

  const handleClick = () => {
    setIsEditable(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if(value.trim() !== ""){
      setNewValue(e.currentTarget.value);
    }else{
      setNewValue('0');
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      setNewValue(e.currentTarget.value);
    }
  }

  const setNewValue = (newValue: string) => {
    
    if(newValue.trim() === ""){
      setButtonValue('0%')
      store.setTipPercent(0);
    }else{
      store.setTipPercent(Number(newValue));
      setButtonValue(`${newValue}%`);
    }
    setIsEditable(false);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const currentInputValue = e.target.value;

    const decimalsRegExp = /^\d*\.?\d*$/; 
    const isValid = decimalsRegExp.test(currentInputValue);
    if (!isValid) return;
    setInputValue(currentInputValue);
  }

  return (
    <>
      {isEditable ? (
        <input 
          onChange={handleChange}
          className='p-2 focus:outline-Green-400 text-right caret-Green-400 text-2xl font-bold text-Green-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          type='number'
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleEnter} 
          value={inputValue}
        />
      ) : (
        <button
          className={`text-2xl font-bold h-12 rounded-[5px] cursor-pointer bg-Grey-200 text-Grey-500 hover:bg-Grey-50 hover:text-Grey-500 transition-colors`}
          onClick={handleClick}
        >
          {buttonValue}
        </button>
      )}
    </>
  );
};
