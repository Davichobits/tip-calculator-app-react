interface Props {
  text: string;
  onClick: () => void;
}
export const Button = ({text, onClick}: Props) => {
  return (
    <button onClick={onClick} className='bg-Green-400 text-Green-900 uppercase font-bold text-center w-full rounded-[5px] text-[20px] h-12 cursor-pointer hover:bg-Green-200 transition-colors'>{text}</button>
  )
}
