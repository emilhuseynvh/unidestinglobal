import { useState } from "react"
import { Link } from "react-router"

const questions = [
  { id: 1, text: "Which process produces glucose and oxygen using light energy, water and carbon dioxide?", options: ["Protein synthesis", "Photosynthesis", "Fermentation", "Transpiration"] },
  { id: 2, text: "What is the primary function of the mitochondria in a cell?", options: ["Protein synthesis", "Lipid storage", "ATP production", "Cell division"] },
  { id: 3, text: "Which organelle contains DNA in a eukaryotic cell?", options: ["Ribosome", "Nucleus", "Golgi apparatus", "Endoplasmic reticulum"] },
  { id: 4, text: "What type of bond holds the two strands of DNA together?", options: ["Ionic bonds", "Covalent bonds", "Hydrogen bonds", "Peptide bonds"] },
  { id: 5, text: "Which molecule carries amino acids to the ribosome during translation?", options: ["mRNA", "tRNA", "rRNA", "DNA"] },
]

const labels = ["A", "B", "C", "D"]

const ExamQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [goToInput, setGoToInput] = useState("")

  const totalQuestions = 20
  const question = questions[currentQuestion] || questions[0]
  const answeredCount = Object.keys(answers).length
  const selectedAnswer = answers[currentQuestion]

  const selectAnswer = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: optionIndex }))
  }

  const goNext = () => setCurrentQuestion((q) => Math.min(totalQuestions - 1, q + 1))
  const goPrev = () => setCurrentQuestion((q) => Math.max(0, q - 1))

  return (
    <div className="min-h-screen bg-[#f9f9fa] flex flex-col">
      <div className="bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)] px-4 sm:px-6 lg:px-12 py-3 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-lg font-semibold text-[#0a0c11] leading-6 truncate">GCSE Biology — Unit Test: Ecology & Environment</span>
            <span className="text-xs sm:text-sm text-[#5b616d] leading-6">20 questions · 40 min · Sara Rzayeva</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 sm:ml-auto shrink-0">
            <div className="flex flex-col gap-1.5 flex-1 sm:flex-none sm:w-[160px]">
              <span className="text-sm sm:text-base text-[#8c929c] leading-5">
                Answered: <span className="font-semibold text-[#0a0c11]">{answeredCount}</span> / {totalQuestions}
              </span>
              <div className="h-2 bg-[#f2f2f4] rounded-sm overflow-hidden">
                <div className="h-full bg-[#007aff] rounded-sm transition-all" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
              </div>
            </div>
            <div className="h-10 px-3 rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] text-sm font-semibold text-[#0a0c11] flex items-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
              39:50
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-36 sm:pb-28">
        <div className="max-w-[777px] flex flex-col gap-6 sm:gap-[30px]">
          <div className="flex flex-col gap-1.5">
            <span className="text-sm sm:text-base text-[#8c929c] leading-6">Question {currentQuestion + 1} of {totalQuestions}</span>
            <h2 className="text-lg sm:text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">{question.text}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => {
              const isSelected = selectedAnswer === i
              return (
                <div key={i} className="flex items-center gap-3 cursor-pointer" onClick={() => selectAnswer(i)}>
                  <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center">
                    {isSelected ? (
                      <div className="w-5 h-5 rounded-full bg-[#007aff] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white" />
                    )}
                  </div>
                  <div className={`flex-1 min-h-[48px] px-4 py-3 rounded-xl flex items-center gap-1 ${
                    isSelected
                      ? "bg-[rgba(0,122,255,0.12)] border border-[rgba(0,122,255,0.2)]"
                      : "bg-white border border-black/[0.06]"
                  }`}>
                    <span className={`text-base font-semibold leading-6 ${isSelected ? "text-[#007aff]" : "text-[#0a0c11]"}`}>{labels[i]}.</span>
                    <span className={`text-sm font-medium leading-6 ${isSelected ? "text-[#007aff]" : "text-[#5b616d]"}`}>{option}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 sm:px-6 lg:px-12 py-4 sm:py-6 z-30 border-t border-black/[0.03]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between">
          <button
            disabled={currentQuestion === 0}
            onClick={goPrev}
            className={`h-10 px-3 rounded-[10px] text-sm font-medium flex items-center gap-1.5 self-start ${
              currentQuestion === 0
                ? "bg-[#f2f2f4] text-[#c3c6cc]"
                : "border border-black/[0.06] bg-white text-[#5b616d] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.25 4.5L6.75 9l4.5 4.5" stroke={currentQuestion === 0 ? "#c3c6cc" : "#5b616d"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Previous
          </button>

          <div className="flex items-center gap-3 overflow-x-auto sm:overflow-visible">
            <div className="flex items-center gap-1 shrink-0">
              <button onClick={goPrev} className="w-8 h-8 rounded-lg border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.25 4.5L6.75 9l4.5 4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              {[...Array(Math.min(5, totalQuestions))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuestion(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium flex items-center justify-center shrink-0 ${
                    i === currentQuestion
                      ? "border border-black/[0.06] bg-[rgba(242,242,244,0.8)] text-[#0a0c11] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]"
                      : "text-[#5b616d]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <span className="text-xs text-[#5b616d] px-1 shrink-0">...</span>
              <button onClick={() => setCurrentQuestion(totalQuestions - 1)} className="w-8 h-8 rounded-lg text-xs font-medium text-[#5b616d] flex items-center justify-center shrink-0">{totalQuestions}</button>
              <button onClick={goNext} className="w-8 h-8 rounded-lg border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <span className="text-sm text-[#8c929c]">Go to question:</span>
              <div className="bg-[#ececf0] border border-black/[0.06] rounded-lg flex items-center pl-2 pr-1 py-1 w-[104px]">
                <input type="text" placeholder="Number" value={goToInput} onChange={(e) => setGoToInput(e.target.value)} className="bg-transparent flex-1 text-sm outline-none placeholder:text-[#8c929c] text-[#0a0c11] min-w-0 px-1" />
                <button onClick={() => { const n = parseInt(goToInput); if (n >= 1 && n <= totalQuestions) { setCurrentQuestion(n - 1); setGoToInput("") } }} className="h-6 px-1.5 rounded-[6px] border border-black/[0.06] bg-white text-[10px] font-medium text-[#5b616d] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">Go</button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Link to="/student/panel/exams" className="h-10 px-3 rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)] no-underline">
              Save & Exit
            </Link>
            <button onClick={goNext} className="h-10 px-3 rounded-[10px] bg-[#007aff] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
              Next
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamQuestions
