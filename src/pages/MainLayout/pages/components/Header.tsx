import GradientText from "@/shared/GradientText";

const Header = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <GradientText text={title} fontSize="28px" />
        <div className='bg-golden-gradient w-[190px] h-[1px] -mt-1 shadow-box-2' />
      </div>

      <div className='bg-golden-gradient p-[2px] mt-5 rounded-md'>
        <div className='bg-DarkGray text-2xl text-whitesmoke font-bold px-5 py-[3px] rounded-md text-center'>
          {subtitle}
        </div>
      </div>
    </div >
  )
}

export default Header;