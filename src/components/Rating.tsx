interface RatingProps {
  value: number;
}

export default function Rating(props: RatingProps) {
  const { value } = props;

  return (
    <ul className="flex items-center space-x-2">
      <li className={`w-12 h-4 border-2 rounded-full border-primary-green ${value > 0 ? 'bg-primary-green' : ''}`}></li>
      <li className={`w-12 h-4 border-2 rounded-full border-primary-green ${value > 1 ? 'bg-primary-green' : ''}`}></li>
      <li className={`w-12 h-4 border-2 rounded-full border-primary-green ${value > 2 ? 'bg-primary-green' : ''}`}></li>
      <li className={`w-12 h-4 border-2 rounded-full border-primary-green ${value > 3 ? 'bg-primary-green' : ''}`}></li>
      <li className={`w-12 h-4 border-2 rounded-full border-primary-green ${value > 4 ? 'bg-primary-green' : ''}`}></li>
    </ul>
  )
}