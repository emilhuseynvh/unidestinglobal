import { useState } from "react"

const students = [
  { id: 1, name: "Leyla Mammadova", email: "leyla.mammadova@email.com", gradient: "from-[#f7c948] to-[#f2a735]" },
  { id: 2, name: "Arman Rustamov", email: "arman.rustamov@email.com", gradient: "from-[#6c5ce7] to-[#a29bfe]" },
  { id: 3, name: "Nigar Zeynalova", email: "nigar.zeynalova@email.com", gradient: "from-[#00b894] to-[#55efc4]" },
  { id: 4, name: "Leyla Mammadova", email: "leyla.m2@email.com", gradient: "from-[#e17055] to-[#fab1a0]" },
  { id: 5, name: "Arman Rustamov", email: "arman.r2@email.com", gradient: "from-[#0984e3] to-[#74b9ff]" },
  { id: 6, name: "Nigar Zeynalova", email: "nigar.z2@email.com", gradient: "from-[#fdcb6e] to-[#f6e58d]" },
]

const AssignStudentsStep = ({ onNext }) => {
  const [selected, setSelected] = useState([])

  const toggle = (id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id])
  }

  const selectAll = () => setSelected(students.map((s) => s.id))
  const clearAll = () => setSelected([])

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 4 of 6 — Assign Students</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Who takes this exam?</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Select the students who should see and complete this exam. You can change this later.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Counter + Actions */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#5b616d] leading-5">{selected.length} students selected</span>
        <div className="flex items-center gap-3">
          <button onClick={selectAll} className="text-sm font-medium text-[#007aff] leading-5 hover:underline">Select all</button>
          <button onClick={clearAll} className="text-sm font-medium text-[#5b616d] leading-5 hover:underline">Clear all</button>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {students.map((student) => {
          const isSelected = selected.includes(student.id)
          return (
            <button
              key={student.id}
              onClick={() => toggle(student.id)}
              className={`h-[68px] rounded-xl border px-4 flex items-center gap-3 text-left transition-colors ${isSelected ? "border-[#007aff] bg-[rgba(0,122,255,0.04)]" : "border-black/[0.06] bg-white"}`}
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${student.gradient} flex items-center justify-center shrink-0`}>
                <span className="text-xs font-semibold text-white leading-none">{student.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <span className="text-sm font-medium text-[#0a0c11] leading-5 truncate">{student.name}</span>
                <span className="text-xs text-[#8c929c] leading-4 truncate">{student.email}</span>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default AssignStudentsStep
