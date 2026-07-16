import HeroText from './HeroText';
import { ArrowUpRight } from 'lucide-react';


const LeftContent = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between pb-6" >
        <HeroText />
        <ArrowUpRight size={60} />
    </div>
  )
}

export default LeftContent