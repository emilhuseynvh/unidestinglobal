const CertificateCard = ({ certificate }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="border border-[#e9eaeb] rounded-xl overflow-hidden bg-white p-3 sm:p-4 aspect-[4/3] flex items-center justify-center">
        <div className="w-full h-full border border-dashed border-[#d5d7da] rounded-lg flex flex-col items-center justify-center gap-3 px-4 py-6 relative">
          <div className="absolute top-3 right-[-12px] w-8 h-24">
            <div className="w-full h-full bg-[#007aff] rounded-b-sm" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[12px] border-l-[#007aff] border-r-[#007aff] border-b-white" />
          </div>

          <div className="flex flex-col items-center gap-0.5 text-center">
            <p className="text-[14px] sm:text-[16px] font-bold text-[#181d27] leading-tight tracking-wide uppercase">
              Certificate
            </p>
            <p className="text-[10px] sm:text-[11px] font-semibold text-[#414651] uppercase tracking-wider">
              of Appreciation
            </p>
          </div>

          <p className="text-[8px] sm:text-[9px] text-[#717680] text-center leading-tight max-w-[180px]">
            This hereby presented to certify that
          </p>

          <p className="text-[18px] sm:text-[22px] font-['Georgia',serif] italic text-[#181d27] leading-tight">
            {certificate.name}
          </p>

          <p className="text-[7px] sm:text-[8px] text-[#717680] text-center leading-tight max-w-[200px]">
            For outstanding contribution and excellence in the field of design and digital innovation.
          </p>

          <div className="flex items-end justify-between w-full mt-2 px-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-px bg-[#414651]" />
              <p className="text-[6px] sm:text-[7px] text-[#717680]">Chief Learning Officer</p>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <p className="text-[6px] sm:text-[7px] text-[#717680]">{certificate.issueDate}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="size-5 sm:size-6 rounded-full bg-[#007aff] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-[14px] sm:text-[16px] font-medium text-[#181d27] leading-6">
          {certificate.title}
        </p>
        <p className="text-[12px] sm:text-[13px] text-[#717680] leading-5">
          Valid until {certificate.validUntil}
        </p>
      </div>
    </div>
  )
}

export default CertificateCard
