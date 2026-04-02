import { useState } from "react"

const ArticleDetailsForm = ({ lessonTitle, setLessonTitle }) => {
  const [content, setContent] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Lesson details</h3>
        <p className="text-sm text-[#8c929c] leading-6">Fill in the details for this quiz lesson.</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Lesson title</label>
          <input
            type="text"
            value={lessonTitle}
            onChange={(e) => setLessonTitle(e.target.value)}
            placeholder="e.g. DNA Structure"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
            Content <span className="text-[#8c929c] font-normal">(0/280)</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article content here..."
            className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-base text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleDetailsForm
