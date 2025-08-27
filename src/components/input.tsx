interface Props {
  label: string;
  value: number;
  setValue: (value:number) => void;
}

export const Input = ({label, value, setValue}: Props) => {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  }

  return (
    <form className='flex flex-col' action="">
      <label htmlFor="bill">{label}</label>
      <input onChange={handleChange} className='bg-Grey-50 rounded-[5px] focus:ouline-1 focus:outline-Green-400 input-none' id="people" type="number" value={value} />
    </form>
  )
}
