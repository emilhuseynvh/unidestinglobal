import GuideHeader from "../GuideHeader"

const ProgramsHero = () => {
  return (
    <section className="px-4 sm:px-6 pt-6">
      <div className="bg-[#edd780] rounded-[32px] overflow-hidden relative">
        <div className="px-4 sm:px-16">
          <GuideHeader />
        </div>
        <div className="flex flex-col items-center gap-12 py-16 sm:py-20 md:py-24 px-4">
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.4] text-center max-w-[648px]">
            Your study abroad journey, made simpler
          </h1>
          <div className="bg-[#fafafa] border border-[#e6e6e6] rounded-[39px] flex items-center pl-5 pr-2 py-2 w-full max-w-[766px]">
            <div className="flex flex-1 items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M10 2.5a4.583 4.583 0 00-4.583 4.583c0 1.25.5 2.417 1.25 3.334L10 14.583l3.333-4.166a4.583 4.583 0 00-3.333-7.917z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="7.083" r="1.667" stroke="#999" strokeWidth="1.5"/>
              </svg>
              <input
                type="text"
                placeholder="Fields of Study"
                className="flex-1 text-[16px] font-normal text-black placeholder:text-[#999] outline-none bg-transparent leading-[1.4]"
              />
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#e6e6e6] mx-4 shrink-0" />
            <div className="hidden sm:flex flex-1 items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M10 10.833a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" stroke="#999" strokeWidth="1.5"/>
                <path d="M10 17.5s6.667-4.833 6.667-9.167a6.667 6.667 0 00-13.334 0C3.333 12.667 10 17.5 10 17.5z" stroke="#999" strokeWidth="1.5"/>
              </svg>
              <input
                type="text"
                placeholder="Country or city"
                className="flex-1 text-[16px] font-normal text-black placeholder:text-[#999] outline-none bg-transparent leading-[1.4]"
              />
            </div>
            <button className="bg-[#f5f5f5] rounded-full size-12 flex items-center justify-center shrink-0 hover:bg-[#e9eaeb] transition-colors ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsHero
