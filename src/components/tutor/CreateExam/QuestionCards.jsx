import { useState } from "react"

const DragIcon = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="7" cy="6" r="1.2" fill="#c3c6cc" /><circle cx="11" cy="6" r="1.2" fill="#c3c6cc" /><circle cx="7" cy="10" r="1.2" fill="#c3c6cc" /><circle cx="11" cy="10" r="1.2" fill="#c3c6cc" /><circle cx="7" cy="14" r="1.2" fill="#c3c6cc" /><circle cx="11" cy="14" r="1.2" fill="#c3c6cc" /></svg>
const DeleteIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5z" stroke="#ed4030" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
const ChevronIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>

const CardHeader = ({ title, badge, badgeColor, onDelete }) => (
  <div className="border-b border-black/[0.03] flex items-center gap-4 px-5 py-4">
    <DragIcon />
    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
      <span className="text-sm font-semibold text-[#0a0c11] leading-6">{title}</span>
      <span className={`${badgeColor} h-6 px-1.5 rounded-lg text-xs font-medium inline-flex items-center self-start`}>{badge}</span>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <div className="flex items-center gap-2">
        <input type="text" defaultValue="0" className="w-[50px] h-8 text-center text-xs text-[#8c929c] border border-black/[0.06] rounded-lg outline-none" />
        <span className="text-xs text-[#8c929c]">mark</span>
      </div>
      <button onClick={onDelete} className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0"><DeleteIcon /></button>
      <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]"><ChevronIcon /></button>
    </div>
  </div>
)

const MultipleChoiceCard = ({ onDelete }) => {
  const [options, setOptions] = useState(["Option A", "Option B", "Option C", "Option D"])
  const [correct, setCorrect] = useState(0)

  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
      <CardHeader title="Untitled question" badge="Multiple choice" badgeColor="bg-[rgba(64,155,63,0.12)] text-[#338732]" onDelete={onDelete} />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Question text</span>
          <textarea className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1 px-0.5">
            <span className="text-sm font-medium text-[#5b616d] leading-5">Answer options</span>
            <span className="text-sm text-[#8c929c] leading-5">(Click radio to mark correct)</span>
          </div>
          {options.map((opt, i) => (
            <div key={i} className="flex items-center gap-3">
              <button onClick={() => setCorrect(i)} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${correct === i ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
                {correct === i && <div className="w-2 h-2 rounded-full bg-white" />}
              </button>
              <input type="text" defaultValue={opt} className="flex-1 bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
            </div>
          ))}
          <button onClick={() => setOptions([...options, `Option ${String.fromCharCode(65 + options.length)}`])} className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 self-start shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Add option
          </button>
        </div>
      </div>
    </div>
  )
}

const TrueFalseCard = ({ onDelete }) => {
  const [answer, setAnswer] = useState("true")
  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
      <CardHeader title="Untitled question" badge="True / False" badgeColor="bg-[rgba(6,177,241,0.12)] text-[#008ece]" onDelete={onDelete} />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Statement</span>
          <textarea className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 px-0.5">
            <span className="text-sm font-medium text-[#5b616d] leading-5">Correct answer</span>
            <span className="text-sm text-[#8c929c] leading-5">(Click radio to mark correct)</span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setAnswer("true")} className={`flex-1 p-4 rounded-xl text-base font-medium text-center transition-colors ${answer === "true" ? "bg-[rgba(64,155,63,0.12)] border border-[rgba(64,155,63,0.4)] text-[#0a0c11]" : "bg-white border border-black/[0.06] text-[#0a0c11]"}`}>True</button>
            <button onClick={() => setAnswer("false")} className={`flex-1 p-4 rounded-xl text-base font-medium text-center transition-colors ${answer === "false" ? "bg-[rgba(64,155,63,0.12)] border border-[rgba(64,155,63,0.4)] text-[#0a0c11]" : "bg-white border border-black/[0.06] text-[#0a0c11]"}`}>Flase</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShortAnswerCard = ({ onDelete }) => (
  <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
    <CardHeader title="Untitled question" badge="Short answer" badgeColor="bg-[rgba(237,64,48,0.12)] text-[#df2917]" onDelete={onDelete} />
    <div className="p-5 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Question text</span>
        <textarea className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Model answer (for reference)</span>
        <textarea placeholder="Enter the expected answer..." className="bg-white border border-black/[0.06] rounded-[10px] min-h-[96px] px-2.5 py-2 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
      </div>
    </div>
  </div>
)

const EssayCard = ({ onDelete }) => (
  <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
    <CardHeader title="Untitled question" badge="Essay" badgeColor="bg-[rgba(255,195,10,0.12)] text-[#e4a000]" onDelete={onDelete} />
    <div className="p-5 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Question text</span>
        <textarea className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Marking rubric (optional)</span>
        <textarea placeholder="e.g. Award 2 marks for each valid point up to a maximum of 8..." className="bg-white border border-black/[0.06] rounded-[10px] min-h-[96px] px-2.5 py-2 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
      </div>
    </div>
  </div>
)

export { MultipleChoiceCard, TrueFalseCard, ShortAnswerCard, EssayCard }
