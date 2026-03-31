const imgLightning = "https://www.figma.com/api/mcp/asset/815592db-129c-4157-aec2-58a185f87395"

const TutoringCTA = () => {
  return (
    <section className="py-16">
      <div className="bg-[#fafafa] rounded-[20px] p-8 flex flex-col sm:flex-row items-center gap-8 overflow-hidden max-w-[648px] mx-auto">
        <div className="flex flex-1 items-center gap-6 min-w-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M21.8218 2.1161C22.293 1.45641 23.3333 1.78977 23.3333 2.60047V16.6667H31.714C32.3918 16.6667 32.786 17.4328 32.392 17.9845L18.1782 37.884C17.7068 38.5437 16.6666 38.2103 16.6666 37.3997V23.3333H8.28596C7.60816 23.3333 7.2139 22.5673 7.60786 22.0157L21.8218 2.1161Z" fill="#FF832D" />
          </svg>
          <div className="flex flex-col gap-1">
            <h3 className="text-[24px] font-medium text-[#1a1a1a] leading-[1.24] tracking-[-0.48px]">
              Learn or Teach. Journey Starts Here.
            </h3>
            <p className="text-[18px] font-medium text-[rgba(26,26,26,0.65)] leading-[1.24] tracking-[-0.36px]">
              Join a growing community of students and tutors learning and teaching.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center shrink-0">
          <button className="bg-[#007aff] text-white rounded-full px-5 py-3.5 text-[16px] font-medium leading-[1.24] tracking-[-0.32px] text-center hover:bg-[#0066d6] transition-colors">
            Start learning
          </button>
          <button className="bg-[rgba(26,26,26,0.1)] text-[#1a1a1a] rounded-full px-5 py-3.5 text-[16px] font-medium leading-[1.24] tracking-[-0.32px] text-center hover:bg-[rgba(26,26,26,0.15)] transition-colors">
            Become a tutor
          </button>
        </div>
      </div>
    </section>
  )
}

export default TutoringCTA
