const ProfileProgressBar = ({ progress = 26 }) => {
  return (
    <div className="flex items-center gap-4 px-6 bg-[#F2F2F4] md:mx-10 mx-3 mt-4 mb-8 rounded-[18px] lg:px-10 py-5">
      <span className="text-xs text-[#8c929c] leading-4 shrink-0">Profile setup</span>
      <div className="flex-1 h-1.5 bg-[#e9eaeb] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#007aff] to-[#3b82f6]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
        <span className="text-[11px] font-medium text-[#8c929c]">{progress} %</span>
      </div>
    </div>
  )
}

export default ProfileProgressBar
