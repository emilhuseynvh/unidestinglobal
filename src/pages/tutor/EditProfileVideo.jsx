import { useRef, useState } from "react"
import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"

const doItems = [
  "Introduce yourself by name and subject",
  "Mention your qualifications briefly",
  "Tell students what to expect",
  "Smile and speak naturally",
]

const dontItems = [
  "Record in a dark or noisy room",
  "Read a script without eye contact",
  "Make it longer than 2 minutes",
  "Worry about it being \"perfect\"",
]

const EditProfileVideo = () => {
  const fileInputRef = useRef(null)
  const [showTip, setShowTip] = useState(true)
  const [uploadFile, setUploadFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadFile({ name: file.name, size: (file.size / (1024 * 1024)).toFixed(0) + " MB" })
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + 2
      })
    }, 50)
  }

  const cancelUpload = () => {
    setUploadFile(null)
    setUploadProgress(0)
  }

  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={26} />
      <div className="md:px-6 px-3 lg:px-10">
        <ProfileTabs />
      </div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 3 of 5 — Not completed</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Record your intro video</h1>
              <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">A 60–90 second video introducing yourself dramatically increases trial bookings. Just be yourself — authenticity beats production quality.</p>
            </div>
          </div>

          <div className={`bg-black/[0.03] backdrop-blur-[12px] rounded-3xl p-3 transition-all duration-300 ease-in-out ${showTip ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 p-0 overflow-hidden"}`}>
            <div className={`bg-white rounded-2xl p-3 flex gap-2 items-start shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)] ${showTip ? "" : "hidden"}`}>
              <div className="w-8 h-8 rounded-full bg-[rgba(6,177,241,0.12)] hidden sm:flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.5" stroke="#008ece" strokeWidth="1.5" /><path d="M10 6.5v4M10 13.5h.01" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="flex flex-col flex-1 min-w-0 px-1">
                <p className="text-sm sm:text-base font-medium text-[#0a0c11] leading-6">
                  Tutors with videos get <span className="font-extrabold">5× more profile views</span>.
                </p>
                <p className="text-xs sm:text-sm text-[#8c929c] leading-5">You don't need a studio — a bright room, your phone, and a genuine smile is all you need.</p>
              </div>
              <button onClick={() => setShowTip(false)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>

          {uploadFile ? (
            <div className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex gap-4 items-start">
              <div className="w-[72px] h-14 rounded-[10px] bg-[#e8efff] flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2.333" y="5.833" width="17.5" height="16.334" rx="2" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M19.833 11.667l5.834-3.5v11.666l-5.834-3.5v-4.666z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-[#0a0c11] leading-6">{uploadFile.name}</span>
                  <span className="text-xs text-[#5b616d] leading-4">{uploadFile.size} · 1:20 min</span>
                </div>
                <div className="h-1.5 bg-[#dddfe4] rounded overflow-hidden">
                  <div
                    className="h-full bg-[#007aff] rounded transition-all duration-100 ease-linear"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
              <button onClick={cancelUpload} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#f9f9fa] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
            >
              <div className="relative">
                <div className="w-[88px] h-[88px] rounded-full bg-[#e8efff] flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="3.333" y="8.333" width="25" height="23.334" rx="3" stroke="#3b82f6" strokeWidth="2.5" />
                    <path d="M28.333 16.667l8.334-5v16.666l-8.334-5v-6.666z" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="absolute -inset-2 rounded-[58px] border border-dashed border-[#98b0e9]" />
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center max-w-[376px]">
                <span className="text-base font-semibold text-[#0a0c11] leading-6">Upload your intro video</span>
                <p className="text-sm text-[#5b616d] leading-5">
                  Drag & drop your video file here, or click to browse.<br />
                  MP4, MOV, AVI (max 500 MB)
                </p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click() }}
                className="h-10 px-3 rounded-[10px] bg-[#007aff] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25M12.75 6L9 2.25 5.25 6M9 2.25v9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Browse files
              </button>
            </div>
          )}
          <input ref={fileInputRef} type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[13.3px] font-bold text-[#0a0c11] tracking-[-0.14px]">Tips</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#e3f6e2] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 4.5L6.75 12.75 3 9" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="text-base font-semibold text-[#5b616d] leading-6">DO</span>
              </div>
              <div className="flex flex-col gap-1">
                {doItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0"><path d="M10 3L4.5 8.5 2 6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm text-[#9297ad] leading-5">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[rgba(237,64,48,0.12)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#ed4030" strokeWidth="1.5" /><path d="M11.25 6.75l-4.5 4.5M6.75 6.75l4.5 4.5" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <span className="text-base font-semibold text-[#5b616d] leading-6">DON'T</span>
              </div>
              <div className="flex flex-col gap-1">
                {dontItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0"><path d="M9 3L3 9M3 3l6 6" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    <span className="text-sm text-[#9297ad] leading-5">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileVideo
