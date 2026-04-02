import { useState } from "react"
import { MultipleChoiceCard, TrueFalseCard, ShortAnswerCard, EssayCard } from "./QuestionCards"

const questionTypes = [
  { id: "multiple", label: "Multiple choice", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3.333v13.334M3.333 10h13.334" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg> },
  { id: "truefalse", label: "True / False", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M16.667 5L7.5 14.167 3.333 10" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { id: "short", label: "Short Answer", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.167 2.5a2.357 2.357 0 013.333 3.333L6.667 16.667l-4.167 1.166 1.167-4.166L14.167 2.5z" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { id: "essay", label: "Essay", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke="#0a0c11" strokeWidth="1.2" /><path d="M11.667 1.667v5h5" stroke="#0a0c11" strokeWidth="1.2" /></svg> },
]

const QuestionsStep = ({ onNext }) => {
  const [questions, setQuestions] = useState([])
  const [showTip, setShowTip] = useState(true)

  const addQuestion = (type) => {
    setQuestions([...questions, { id: Date.now(), type }])
  }

  const counts = {
    multiple: questions.filter(q => q.type === "multiple").length,
    truefalse: questions.filter(q => q.type === "truefalse").length,
    short: questions.filter(q => q.type === "short").length,
    essay: questions.filter(q => q.type === "essay").length,
  }
  const totalMarks = questions.length * 0

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 3 of 6 — Questions</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Build your question bank</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Add multiple choice, true/false, short answer, or essay questions. Drag to reorder. Set marks per question.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Best Practice Toast */}
      {showTip && (
        <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-3xl p-3">
          <div className="bg-white rounded-2xl p-3 flex gap-2 items-start shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]">
            <div className="w-8 h-8 rounded-full bg-[rgba(0,122,255,0.12)] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#007aff" strokeWidth="1.5" /><path d="M10 9v4M10 7h.008" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div className="flex-1 min-w-0 px-1">
              <p className="text-base font-medium text-[#0a0c11] leading-6">Best practice:</p>
              <p className="text-sm text-[#8c929c] leading-5">IB Biology HL papers typically include <span className="font-semibold text-[#5b616d]">MCQ (1–2 marks)</span>, data-based questions <span className="font-semibold text-[#5b616d]">(4–6 marks)</span>, and extended responses <span className="font-semibold text-[#5b616d]">(8–12 marks)</span>. Mix question types for a well-rounded assessment.</p>
            </div>
            <button onClick={() => setShowTip(false)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25l-7.5 7.5M5.25 5.25l7.5 7.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Summary chips */}
      {questions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#5b616d]">✓ {questions.length} questions</span>
          <span className="text-[#5b616d]">· {totalMarks} total marks</span>
          {counts.multiple > 0 && <span className="bg-[rgba(0,122,255,0.12)] h-5 px-1.5 rounded-[6px] text-[10px] font-medium text-[#0267d0]">{counts.multiple} MCQ</span>}
          {counts.truefalse > 0 && <span className="bg-[rgba(6,177,241,0.12)] h-5 px-1.5 rounded-[6px] text-[10px] font-medium text-[#008ece]">{counts.truefalse} T/F</span>}
          {counts.short > 0 && <span className="bg-[rgba(237,64,48,0.12)] h-5 px-1.5 rounded-[6px] text-[10px] font-medium text-[#df2917]">{counts.short} Short answer</span>}
          {counts.essay > 0 && <span className="bg-[rgba(255,195,10,0.12)] h-5 px-1.5 rounded-[6px] text-[10px] font-medium text-[#e4a000]">{counts.essay} Essay</span>}
        </div>
      )}

      {/* Question Cards */}
      <div className="flex flex-col gap-5">
        {questions.map((q) => {
          const onDelete = () => setQuestions(questions.filter(x => x.id !== q.id))
          switch (q.type) {
            case "multiple": return <MultipleChoiceCard key={q.id} onDelete={onDelete} />
            case "truefalse": return <TrueFalseCard key={q.id} onDelete={onDelete} />
            case "short": return <ShortAnswerCard key={q.id} onDelete={onDelete} />
            case "essay": return <EssayCard key={q.id} onDelete={onDelete} />
            default: return null
          }
        })}
      </div>

      {/* Add Question Type Buttons — sticky bottom */}
      <div className="sticky bottom-0 bg-white pt-3 border-t border-black/[0.06] -mx-6 px-6 pb-1">
        <div className="flex flex-wrap gap-[9px]">
          {questionTypes.map((type) => (
            <button key={type.id} onClick={() => addQuestion(type.id)} className="px-3 py-2 rounded-xl border border-dashed border-black/[0.06] bg-[rgba(242,242,244,0.8)] text-base font-medium text-[#0a0c11] leading-6 flex items-center gap-2 hover:bg-[#ececf0] transition-colors">
              {type.icon}
              {type.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionsStep
