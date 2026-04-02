import { useState } from "react"

const students = [
  { name: "Rosalie Brooks", date: "Oct 12, 2025", sales: "$ 125", enrollments: "80", role: null, avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Ashley Robinson", date: "Oct 12, 2025", sales: "$ 125", enrollments: "56", role: null, avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "Jordan Blake", date: "Oct 12, 2025", sales: "$ 125", enrollments: "45", role: null, avatar: "https://i.pravatar.cc/40?img=3" },
  { name: "Ryan Anscher", date: "Oct 12, 2025", sales: "$ 125", enrollments: null, role: "Editor", avatar: "https://i.pravatar.cc/40?img=4" },
  { name: "Emily Anderson", date: "Oct 12, 2025", sales: "$ 125", enrollments: null, role: "Editor", avatar: "https://i.pravatar.cc/40?img=5" },
]

const FilterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M1.5 3.75h15M4.5 9h9M6.75 14.25h4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DotsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="4.5" r="1.25" fill="#8c929c" />
    <circle cx="9" cy="9" r="1.25" fill="#8c929c" />
    <circle cx="9" cy="13.5" r="1.25" fill="#8c929c" />
  </svg>
)

const MyStudents = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-[#0a0c11] leading-6">My students</h2>

      <div className="bg-white rounded-[20px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)] overflow-hidden pt-2 pb-3">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-black/[0.03]">
                <th className="text-left px-4 pt-1.5 pb-3">
                  <div className="flex items-center gap-1.5">
                    <FilterIcon />
                    <span className="text-sm font-medium text-[#8c929c] leading-5">Course name</span>
                  </div>
                </th>
                <th className="text-left px-4 pt-1.5 pb-3">
                  <span className="text-sm font-medium text-[#8c929c] leading-5">Creation date</span>
                </th>
                <th className="text-left px-4 pt-1.5 pb-3 w-[160px]">
                  <span className="text-sm font-medium text-[#8c929c] leading-5">Sales</span>
                </th>
                <th className="text-left px-4 pt-1.5 pb-3 w-[160px]">
                  <span className="text-sm font-medium text-[#8c929c] leading-5">Enrollments</span>
                </th>
                <th className="text-left px-4 pt-1.5 pb-3 w-16">
                  <span className="text-[13px] font-semibold text-[#8c929c] leading-5">Role</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={i} className={i < students.length - 1 ? "border-b border-black/[0.03]" : ""}>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                      <span className="text-[15px] font-semibold text-[#5b616d] leading-6">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-base font-medium text-[#5b616d] leading-6">{student.date}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="text-base font-medium text-[#5b616d] leading-6">{student.sales}</span>
                  </td>
                  <td className="px-4 py-2">
                    {student.enrollments ? (
                      <span className="text-base font-medium text-[#5b616d] leading-6">{student.enrollments}</span>
                    ) : student.role ? (
                      <button className="h-8 px-2 rounded-lg border border-black/[0.05] bg-white text-xs font-semibold text-[#5b616d] flex items-center gap-1 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                        {student.role}
                        <ChevronDownIcon />
                      </button>
                    ) : null}
                  </td>
                  <td className="px-4 py-3">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#f5f5f5] transition-colors">
                      <DotsIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 pt-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="w-8 h-8 rounded-lg border border-black/[0.05] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 13L7 9l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="flex items-center gap-1 shrink-0">
              {[1, 2, 3, 4, 5, "...", 10].map((p, i) => (
                <button
                  key={i}
                  onClick={() => typeof p === "number" && setCurrentPage(p)}
                  className={`h-8 min-w-[32px] px-1.5 sm:px-2 rounded-lg text-[13px] font-semibold leading-5 shrink-0 ${
                    p === currentPage
                      ? "border border-black/[0.05] bg-[rgba(242,242,244,0.8)] text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
                      : "text-[#5b616d]"
                  } ${i >= 3 && i <= 4 ? "hidden sm:flex" : "flex"} items-center justify-center`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className="w-8 h-8 rounded-lg border border-black/[0.05] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 5l4 4-4 4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[13px] font-medium text-[#8c929c]">
            <div className="flex items-center gap-2">
              <span>Go to page:</span>
              <div className="flex items-center bg-[#ececf0] border border-black/[0.03] rounded-lg h-8 overflow-hidden">
                <input type="text" placeholder="Number" className="w-16 h-full px-2 text-xs font-semibold text-[#8c929c] bg-transparent outline-none" />
                <button className="h-6 px-1.5 rounded-md border border-black/[0.05] bg-white text-[10px] font-semibold text-[#5b616d] mr-1 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">Go</button>
              </div>
            </div>
            <div className="w-px h-4 bg-black/[0.06]" />
            <div className="flex items-center gap-2">
              <span>Results per page:</span>
              <button className="h-8 px-2 rounded-lg border border-black/[0.05] bg-white text-xs font-semibold text-[#5b616d] flex items-center gap-1 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                5
                <ChevronDownIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyStudents
