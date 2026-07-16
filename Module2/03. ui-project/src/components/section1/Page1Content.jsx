import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const Page1Content = (props) => {
  return (
    <div className='pb-6 pt-1  flex items-center gap-2 h-[90vh]  px-12'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content