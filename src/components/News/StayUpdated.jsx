const StayUpdated = () => {
  return (
    <div className="bg-[#090909] rounded-2xl px-6 py-10 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-[24px] font-semibold text-white leading-8">Stay Updated</h3>
        <p className="text-[18px] font-normal text-[#fafafa] leading-7">
          Get the latest education news, tips, and platform updates delivered to your inbox every week.
        </p>
      </div>

      <div className="relative w-full max-w-[382px]">
        <div className="bg-[#161616] rounded-[32px] overflow-hidden flex items-center pl-8 pr-[152px] py-[22px]">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 min-w-0 text-[16px] font-medium text-white leading-6 outline-none placeholder:text-[#666] bg-transparent"
          />
        </div>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007aff] rounded-full px-5 py-3.5 text-[16px] font-medium text-white text-center leading-[1.24] tracking-[-0.32px] hover:bg-[#0066d6] transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default StayUpdated
