import { Link } from "react-router"

const steps = [
  { num: 1, title: "Your details", desc: "Provide an email and password" },
  { num: 2, title: "Verify your mail", desc: "Enter your verification code" },
  { num: 3, title: "Parent Information", desc: "Provide parent details" },
  { num: 4, title: "Let's us know you!", desc: "Description" },
]

const RegisterSidebar = ({ currentStep = 1 }) => {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-[#f7f9fb] w-[280px] xl:w-[320px] shrink-0 rounded-2xl m-4 p-6 pt-8 pb-6">
      <div className="flex flex-col gap-11">
        <Link to="/">
          <img src="https://www.figma.com/api/mcp/asset/55a81b1a-cad6-48b3-80eb-6471a28c39d9" alt="Unidestin" className="h-[17px] w-[100px]" />
        </Link>
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isCompleted = step.num < currentStep
            const isActive = step.num === currentStep
            return (
              <div key={step.num} className="flex items-start gap-4">
                <div className="flex flex-col items-center shrink-0">
                  {isCompleted ? (
                    <div className="size-6 rounded-full bg-[#007aff] border-[0.5px] border-[#c6c5c8] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="size-6 rounded-full border-[0.5px] border-[#c6c5c8] flex items-center justify-center">
                      <span className={`text-[16px] font-medium leading-[1.4] ${isActive ? "text-[#007aff]" : "text-[#b3b3b3]"}`}>
                        {step.num}
                      </span>
                    </div>
                  )}
                  {i < steps.length - 1 && (
                    <div className="w-px h-7 border-l border-dashed border-[#c6c5c8] my-1" />
                  )}
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <p className="text-[16px] font-normal text-black leading-[1.4]">{step.title}</p>
                  <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Link to="/" className="flex items-center gap-2 text-[16px] font-medium text-[#666] leading-[1.4] hover:text-[#333] transition-colors">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15l-5-5 5-5" stroke="#666" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Back to unidestin.com
      </Link>
    </div>
  )
}

export default RegisterSidebar
