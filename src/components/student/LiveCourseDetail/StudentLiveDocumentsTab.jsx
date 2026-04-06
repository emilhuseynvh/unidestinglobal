const documents = [
  { title: "Session 1: Cell Biology Foundations & Cell Theory", fileName: "File_name.docx", meta: "Uploaded · DOCX, 1.2 MB" },
  { title: "Session 1: Cell Biology Foundations & Cell Theory", fileName: "File_name1.pdf", meta: "Uploaded · PDF, 1.2 MB" },
]

const StudentLiveDocumentsTab = () => {
  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden pb-6">
      {/* Header */}
      <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.75 1.65C9.75 1.51 9.75 1.44 9.723 1.387C9.699 1.339 9.66 1.301 9.614 1.277C9.56 1.25 9.49 1.25 9.35 1.25H5.368C4.625 1.25 4.022 1.25 3.533 1.29C3.028 1.331 2.579 1.419 2.161 1.631C1.502 1.967 .967 2.502 .631 3.161C.419 3.579.331 4.028.29 4.533C.25 5.022.25 5.625.25 6.368V17.632C.25 18.375.25 18.978.29 19.467C.331 19.972.419 20.421.631 20.839C.967 21.498 1.502 22.033 2.161 22.369C2.579 22.581 3.028 22.669 3.533 22.71C4.022 22.75 4.625 22.75 5.368 22.75H11.755C12.043 22.75 12.306 22.585 12.431 22.325C12.556 22.065 12.52 21.756 12.34 21.531C11.345 20.29 10.75 18.715 10.75 17C10.75 13.303 13.517 10.252 17.093 9.806C17.223 9.79 17.341 9.741 17.441 9.669C17.464 9.652 17.475 9.644 17.493 9.547C17.505 9.486 17.464 9.36 17.419 9.318C17.347 9.25 17.301 9.25 17.21 9.25H12.5C10.981 9.25 9.75 8.019 9.75 6.5V1.65Z" fill="#78DAFF" />
            <path d="M17.517 7.75C17.533 7.75 17.542 7.731 17.53 7.72L11.28 1.47C11.269 1.458 11.25 1.467 11.25 1.483V6.5C11.25 7.19 11.81 7.75 12.5 7.75H17.517Z" fill="#78DAFF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18 11.25C14.824 11.25 12.25 13.824 12.25 17C12.25 20.176 14.824 22.75 18 22.75C21.176 22.75 23.75 20.176 23.75 17C23.75 13.824 21.176 11.25 18 11.25ZM20.442 15.308C20.686 15.552 20.686 15.948 20.442 16.192L17.942 18.692C17.824 18.81 17.665 18.875 17.499 18.875C17.333 18.875 17.173 18.808 17.056 18.69L15.556 17.178C15.313 16.933 15.315 16.537 15.56 16.294C15.805 16.051 16.201 16.053 16.444 16.298L17.219 17.079C17.318 17.179 17.367 17.229 17.425 17.248C17.475 17.264 17.529 17.264 17.58 17.248C17.637 17.229 17.686 17.18 17.786 17.08L19.558 15.308C19.802 15.064 20.198 15.064 20.442 15.308Z" fill="#78DAFF" />
          </svg>
          <span className="text-base font-semibold text-[#0a0c11] leading-6">Documents</span>
        </div>
      </div>

      {/* Content */}
      {documents.length > 0 ? (
        <div className="px-5 py-3.5 flex flex-col gap-1.5">
          {documents.map((doc, i) => (
            <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] p-[17px] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.542 13.125c-.834-.625-1.459-2.292-.625-3.75.833-1.459 2.708-1.667 4.166-1.042l5.834 2.917c1.458.625 3.333.417 4.166-1.042.834-1.458.209-3.125-.625-3.75" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.5v1.667M10 15.833V17.5M5 4.167l.833 1.458M14.167 14.375L15 15.833" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-1">
                <span className="text-sm font-semibold text-[#0a0c11] leading-6">{doc.title}</span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-[#0a0c11] leading-5">{doc.fileName}</span>
                  <span className="text-xs text-[#5b616d] leading-4">{doc.meta}</span>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] backdrop-blur-[12px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-5 py-3.5">
          <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl flex flex-col items-center justify-center gap-4 px-4 py-10">
            <div className="w-[88px] h-[88px] rounded-full bg-[#f2f2f4] flex items-center justify-center relative">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 3.333v13.334a3.333 3.333 0 003.333 3.333h10M20 3.333C20 13.333 20 20 20 36.667M20 3.333c0 0-6.667 6.667-6.667 16.667S20 36.667 20 36.667" stroke="#8c929c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-black/[0.09]" />
            </div>
            <span className="text-base font-semibold text-[#0a0c11] leading-6">No added document</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentLiveDocumentsTab
