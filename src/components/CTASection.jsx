const imgVector = "https://www.figma.com/api/mcp/asset/bde8dd8a-16a9-4132-8985-0965086b2b11"
const imgVector1 = "https://www.figma.com/api/mcp/asset/c8848424-de4b-4e94-94c2-db33a87130e3"

const CTASection = () => {
  return (
    <section className="w-full px-[175px] py-[72px]">
      <div className="bg-[#9bd8a9] overflow-hidden relative rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] w-full h-[424px]">
        <div className="absolute flex h-[634.705px] items-center justify-center left-[540.41px] top-[-205px] w-[787.876px]">
          <div className="rotate-[-16.89deg]">
            <div className="h-[455.265px] relative w-[685.152px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>

        <div className="absolute flex h-[479.705px] items-center justify-center left-[-216px] top-[12px] w-[657.345px]">
          <div className="rotate-[-16.89deg]">
            <div className="h-[322.454px] relative w-[589.066px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
        </div>

        <div className="absolute flex flex-col gap-10 items-center left-1/2 -translate-x-1/2 top-[137px] w-[648px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-wrap gap-y-2 items-end justify-center w-full">
                <p className="flex-1 text-[#141219] text-[48px] font-bold leading-normal text-center">
                  Where will you go for studing?
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-black flex items-center justify-center py-[13px] px-5 rounded-full hover:bg-gray-800 transition-colors">
              <span className="text-white text-[16px] font-medium leading-[1.24] text-center tracking-[-0.32px] whitespace-nowrap">
                Get started
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
