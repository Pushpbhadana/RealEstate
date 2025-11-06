import comingSoonImg from "../assets/images/commingSoonBg.jpg";

const ComingSoon = () => {
  return (
    <>
      <div className="h-[calc(70vh-5rem)] m-2 rounded-4xl relative">
        {/* Background Image Div */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl bg-no-repeat"
          style={{
            backgroundImage: `url(${comingSoonImg})`
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-30% to-black/100 rounded-4xl"></div>
        </div>

        {/* Content Div - This will appear above the background */}
        <div className="relative z-10 h-full flex items-end justify-center">
          <div className="text-center text-white">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 text-white">Coming Soon</h1>
            <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">New Projects</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon