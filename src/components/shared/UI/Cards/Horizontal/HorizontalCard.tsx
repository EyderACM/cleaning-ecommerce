const HorizontalCard = () => {
  return (
    <div className="card card-side w-full bg-base-100 h-32 shadow-xl py-2 px-2 mb-16">
      <div
        className="h-full w-4/12 rounded-2xl"
        style={{
          backgroundImage: `url('imgs/cleaningSpray.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="card-body flex flex-row text-center p-4 w-9/12">
        <div className="flex flex-col align-top text-left">
          <h2 className="card-title">Cleaning spray</h2>
          <p className="text-sm">
            Amazing product for cleaning any leftovers after your breakfast,
            dinner or lunch!
          </p>
        </div>
        <div className="card-actions items-center ">
          <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
