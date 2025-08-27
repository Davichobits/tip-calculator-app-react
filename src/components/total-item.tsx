interface Props {
  text: string; 
  value: number;
}

export const TotalItem = ({text, value}: Props) => {
  return (
    <div className='flex justify-between mb-7 lg:mb-[52px]'>
      <div>
        <p className='font-bold'>{text}</p>
        <p className='text-[13px] text-Grey-400'>/ person</p>
      </div>
      <p className='font-bold text-[32px] text-Green-400 md:text-5xl'>
        ${value.toFixed(2)}
      </p>
    </div>
  );
};
