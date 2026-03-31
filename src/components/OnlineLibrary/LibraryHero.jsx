import GuideHeader from "../GuideHeader"

const LibraryHero = () => {
  return (
    <section className="px-4 sm:px-6 pt-6">
      <div className="bg-[#a2d6f0] rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] overflow-hidden relative">
        <div className="px-4 sm:px-16">
          <GuideHeader />
        </div>
        <div className="flex flex-col items-center gap-8 py-20 sm:py-28 md:py-32 px-4">
          <div className="flex flex-col items-center gap-5 max-w-[648px] text-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-[#141219] leading-none">
              UniDestin Online Library
            </h1>
            <p className="text-[16px] font-normal text-[#333] leading-[1.4] max-w-[585px]">
              Access thousands of educational resources — e-books, worksheets, exam prep, video lessons, audio content, and more from our contributors' curated collection to learn smarter, anytime.
            </p>
          </div>
          <div className="w-full max-w-[600px] relative">
            <div className="bg-white rounded-full flex items-center px-5 py-3.5 gap-3 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search by title, topic, or author..."
                className="flex-1 text-[16px] font-medium text-[#0d0d12] leading-6 placeholder:text-[#808080] outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LibraryHero
