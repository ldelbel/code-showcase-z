const Description = ({ pageName, description }: { pageName: string, description: string }) => {
  return (
    <div>
      <div className='w-[80vw] mt-4'>
        <p className="font-medium text-base text-whitesmoke text-center">
          Os astros já estão alinhados, mas nossa página de {pageName} ainda não está pronta!
        </p>
      </div>
      <div className='w-[80vw] mt-2'>
        <p className='text-oldgoldlight text-center font-bold'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Description;
