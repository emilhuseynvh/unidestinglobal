import { useState, useRef } from "react"
import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"

const EditProfileCertificates = () => {
  const fileInputRef = useRef(null)
  const [showTip, setShowTip] = useState(true)
  const [newCerts, setNewCerts] = useState([])

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const cert = { id: Date.now(), name: file.name.replace(/\.[^.]+$/, ""), size: (file.size / (1024 * 1024)).toFixed(1) + " MB", progress: 0, done: false }
    setNewCerts((prev) => [...prev, cert])
    const interval = setInterval(() => {
      setNewCerts((prev) => prev.map((c) => {
        if (c.id !== cert.id) return c
        if (c.progress >= 100) { clearInterval(interval); return { ...c, done: true } }
        return { ...c, progress: c.progress + 3 }
      }))
    }, 50)
    e.target.value = ""
  }

  const removeCert = (id) => setNewCerts((prev) => prev.filter((c) => c.id !== id))

  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={86} />
      <div className="md:px-6 px-3 lg:px-10">
        <ProfileTabs />
      </div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 5 of 5 — Not completed</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Add your certificates</h1>
              <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Verified credentials build trust and let you justify higher rates. Add any relevant degrees, diplomas, teaching certificates, or professional qualifications.</p>
            </div>
          </div>

          <div className={`bg-black/[0.03] backdrop-blur-[12px] rounded-3xl p-3 transition-all duration-300 ease-in-out ${showTip ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 p-0 overflow-hidden"}`}>
            <div className={`bg-white rounded-2xl p-3 flex gap-2 items-start shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)] ${showTip ? "" : "hidden"}`}>
              <div className="w-8 h-8 rounded-full bg-[rgba(6,177,241,0.12)] hidden sm:flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.5" stroke="#008ece" strokeWidth="1.5" /><path d="M10 6.5v4M10 13.5h.01" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="flex flex-col flex-1 min-w-0 px-1">
                <p className="text-sm sm:text-base font-medium text-[#0a0c11] leading-6">Tips for you</p>
                <p className="text-xs sm:text-sm text-[#8c929c] leading-5">
                  Tutors with <span className="font-extrabold text-[#5b616d]">verified credentials</span> charge on average 35% more and have a 28% higher conversion rate from profile views to bookings.
                </p>
              </div>
              <button onClick={() => setShowTip(false)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>

          <div className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 12.5L2.5 8.333 10 4.167l7.5 4.166L10 12.5z" stroke="#3b82f6" strokeWidth="1.5" /><path d="M5 9.583v4.167c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5V9.583" stroke="#3b82f6" strokeWidth="1.5" /></svg>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">BSc Molecular Biology — Baku State University</span>
              <span className="text-xs text-[#5b616d] leading-4">Uploaded · PDF, 1.2 MB</span>
            </div>
            <span className="bg-[rgba(64,155,63,0.12)] h-5 px-1 rounded-md flex items-center gap-1 shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="text-[10px] font-medium text-[#338732] leading-4">Verified</span>
            </span>
          </div>

          {newCerts.map((cert) => (
            <div key={cert.id} className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke="#3b82f6" strokeWidth="1.5" /><path d="M11.667 1.667v5h5" stroke="#3b82f6" strokeWidth="1.5" /></svg>
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span className="text-sm font-semibold text-[#0a0c11] leading-6 truncate">{cert.name}</span>
                <span className="text-xs text-[#5b616d] leading-4">Uploaded · PDF, {cert.size}</span>
                {!cert.done && (
                  <div className="h-1.5 bg-[#dddfe4] rounded overflow-hidden">
                    <div className="h-full bg-[#007aff] rounded transition-all duration-100 ease-linear" style={{ width: `${Math.min(cert.progress, 100)}%` }} />
                  </div>
                )}
              </div>
              {cert.done ? (
                <div className="flex items-center gap-3 shrink-0">
                  <span className="bg-[rgba(64,155,63,0.12)] h-5 px-1 rounded-md flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-[10px] font-medium text-[#338732] leading-4">Verified</span>
                  </span>
                  <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25M12.75 6L9 2.25 5.25 6M9 2.25v9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button onClick={() => removeCert(cert.id)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                </div>
              ) : (
                <button onClick={() => removeCert(cert.id)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </button>
              )}
            </div>
          ))}

          <div
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#f9f9fa] border border-dashed border-black/[0.06] rounded-xl px-4 py-8 flex flex-col items-center gap-4 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
          >
            <div className="relative">
              <div className="w-[88px] h-[88px] rounded-full bg-[#e8efff] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M21 4H9a3 3 0 00-3 3v26a3 3 0 003 3h22a3 3 0 003-3V17l-13-13z" stroke="#3b82f6" strokeWidth="2.5" />
                  <path d="M21 4v13h13" stroke="#3b82f6" strokeWidth="2.5" />
                  <path d="M25 22H15M25 28H15M18 16h-3" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute -inset-2 rounded-[58px] border border-dashed border-[#98b0e9]" />
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center max-w-[376px]">
              <span className="text-base font-semibold text-[#0a0c11] leading-6">Upload certificates</span>
              <p className="text-sm text-[#5b616d] leading-5">
                Drag & drop your video file here, or click to browse.<br />
                PDF, JPG, PNG (max 6 MB)
              </p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click() }}
              className="h-12 px-3 rounded-xl bg-[#007aff] text-base font-medium text-white flex items-center gap-2 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 12.5v2.5a1.667 1.667 0 01-1.667 1.667H4.167A1.667 1.667 0 012.5 15v-2.5M14.167 6.667L10 2.5 5.833 6.667M10 2.5v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Browse files
            </button>
            <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileCertificates
