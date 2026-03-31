import GuideHeader from "../GuideHeader"

const LiveTutoringHero = () => {
  return (
    <section className="px-4 sm:px-6 pt-6">
      <div className="bg-[#c8e6c9] rounded-[32px] overflow-hidden relative">
        <div className="px-4 sm:px-16">
          <GuideHeader />
        </div>
        <div className="flex flex-col items-center gap-8 py-20 sm:py-28 md:py-36 px-4 text-center">
          <div className="flex flex-col items-center gap-5 max-w-[870px]">
            <span className="bg-[#b1dfbb] text-[14px] font-medium text-[#333] leading-[1.4] px-3 py-2.5 rounded-3xl flex items-center gap-2">
              <span className="size-[6px] rounded-full bg-[#333]" />
              Live lessons happens now
            </span>
            <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#141219] leading-[1.4]">
              Learn Live with Expert Tutors
            </h1>
            <p className="text-[18px] font-normal text-[#141219] leading-normal max-w-[648px]">
              Connect face-to-face with certified tutors through HD video. Interactive whiteboard, live chat, screen sharing — everything you need for effective learning.
            </p>
          </div>
          <button className="bg-white rounded-full px-5 py-3 text-[16px] font-semibold text-black leading-6 hover:bg-gray-50 transition-colors">
            Find a tutor
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveTutoringHero
