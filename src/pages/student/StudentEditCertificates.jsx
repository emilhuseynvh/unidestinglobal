import { useState, useEffect } from "react"

const CertIcon = () => (
  <div className="w-11 h-11 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 2.5h8l4 4v10a1.5 1.5 0 01-1.5 1.5H4a1.5 1.5 0 01-1.5-1.5v-13A1.5 1.5 0 014 2.5z" stroke="#3b82f6" strokeWidth="1.3" /><path d="M12 2.5v4h4M7.5 11h5M7.5 14h3" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" /></svg>
  </div>
)

const StudentEditCertificates = () => {
  const [files, setFiles] = useState([
    { id: 1, name: "IB Examiner Certificate — Biology", meta: "Uploaded · PDF, 1.2 MB", status: "uploaded" },
  ])
  const [uploading, setUploading] = useState(null)

  const simulateUpload = () => {
    const newFile = { id: Date.now(), name: "IB Examiner Certificate — Biology", meta: "Uploading · PDF, 1.2 MB", status: "uploading", progress: 0 }
    setUploading(newFile)
  }

  useEffect(() => {
    if (!uploading) return
    if (uploading.progress >= 100) {
      setFiles((prev) => [...prev, { ...uploading, status: "uploaded", meta: "Uploaded · PDF, 1.2 MB" }])
      setUploading(null)
      return
    }
    const timer = setTimeout(() => {
      setUploading((prev) => prev ? { ...prev, progress: prev.progress + 14 } : null)
    }, 200)
    return () => clearTimeout(timer)
  }, [uploading])

  const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id))

  return (
    <div className="max-w-[769px] mx-auto w-full">
      <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
            <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 5 of 5 — Not completed</span>
          </div>
          <div className="flex flex-col gap-[10.9px]">
            <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Add your certificates</h1>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Verified credentials build trust and let you justify higher rates. Add any relevant degrees, diplomas, teaching certificates, or professional qualifications.</p>
          </div>
        </div>

        {files.map((file) => (
          <div key={file.id} className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex items-center gap-4">
            <CertIcon />
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">{file.name}</span>
              <span className="text-xs text-[#5b616d] leading-4">{file.meta}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button onClick={() => removeFile(file.id)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
        ))}

        {uploading && (
          <div className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex items-center gap-4">
            <CertIcon />
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">{uploading.name}</span>
              <span className="text-xs text-[#5b616d] leading-4">{uploading.meta}</span>
              <div className="h-1.5 bg-[#dddfe4] rounded overflow-hidden">
                <div className="h-full bg-[#007aff] rounded transition-all" style={{ width: `${Math.min(uploading.progress, 100)}%` }} />
              </div>
            </div>
            <button onClick={() => setUploading(null)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        )}

        <div className="bg-[#f9f9fa] border border-dashed border-black/[0.06] rounded-xl flex flex-col items-center justify-center gap-4 px-4 py-8">
          <div className="w-[88px] h-[88px] rounded-full bg-[#e8efff] flex items-center justify-center relative">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 5h16l8 8v20a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3z" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 5v8h8M15 22h10M15 28h6" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-[#98b0e9]" />
          </div>
          <div className="flex flex-col items-center gap-1.5 max-w-[376px]">
            <span className="text-base font-semibold text-[#0a0c11] leading-6 text-center">Upload certificates</span>
            <div className="flex flex-col items-center">
              <span className="text-sm text-[#5b616d] leading-5 text-center">Drag & drop your video file here, or click to browse.</span>
              <span className="text-sm text-[#5b616d] leading-5 text-center">PDF, JPG, PNG (max 6 MB)</span>
            </div>
          </div>
          <button onClick={simulateUpload} className="h-12 px-3 rounded-xl bg-[#007aff] border border-black/[0.09] text-base font-medium text-white flex items-center gap-2 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M16.667 12.5v2.5a1.667 1.667 0 01-1.667 1.667H5a1.667 1.667 0 01-1.667-1.667v-2.5M13.333 6.667L10 3.333 6.667 6.667M10 3.333v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Browse files
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentEditCertificates
