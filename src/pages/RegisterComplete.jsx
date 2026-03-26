import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import RegisterSidebar from "../components/RegisterSidebar"

const imgLogo = "https://www.figma.com/api/mcp/asset/3e463ab6-04a8-4b61-825c-504cbe473499"

const categories = [
  "UX Design", "3D Design", "Illustration", "Figma", "Craft",
  "Design", "Writing", "Web & App Design",
  "Calligraphy & Typography", "Music & Audio",
  "Architecture & Spaces", "Photography", "Video", "Marketing",
  "Business", "Product", "Sketching", "Product Design",
]

const skills = [
  "Figma", "Webflow", "Adobe XD", "Visual Design", "Craft",
  "Design", "User Research", "Web & App Design",
  "Design Theory", "Design Systems", "Architecture & Spaces",
  "User Flows", "Interactive Design", "Product Design",
]

const certifications = [
  "Cisco", "AWS Certified Cloud Practitioner",
  "Project Management Professional (PMP)",
  "AWS Certified Solutions Architect", "Google User Experience",
]

const RegisterComplete = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedCats, setSelectedCats] = useState([])
  const [selectedSkills, setSelectedSkills] = useState([])
  const [selectedCerts, setSelectedCerts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => navigate("/dashboard"), 2000)
      return () => clearTimeout(timer)
    }
  }, [loading, navigate])

  const toggleItem = (item, list, setList, max = 4) => {
    if (list.includes(item)) {
      setList(list.filter((c) => c !== item))
    } else if (list.length < max) {
      setList([...list, item])
    }
  }

  const Header = ({ title, subtitle }) => (
    <div className="flex flex-col items-center gap-6">
      <div className="h-[43px] w-14 relative">
        <img src={imgLogo} alt="Unidestin" className="absolute inset-0 size-full object-contain" />
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-[24px] font-semibold text-[#333] leading-8">{title}</h1>
        <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">{subtitle}</p>
      </div>
    </div>
  )

  const Footer = ({ stepNum, onBack, onNext, nextLabel = "Continue" }) => (
    <>
      <div className="flex items-center justify-between w-full">
        <button onClick={onBack} className="h-12 px-5 border border-[#dfe1e7] rounded-full text-[16px] font-medium text-[#181d27] leading-6 hover:bg-[#f5f5f5] transition-colors">
          Go Back
        </button>
        <button onClick={onNext} className="h-12 px-5 bg-[#007aff] rounded-full text-[16px] font-medium text-white leading-6 hover:bg-[#0066d6] transition-colors">
          {nextLabel}
        </button>
      </div>
      <div className="flex flex-col items-center gap-2 pt-6 mt-auto">
        <span className="text-[14px] font-normal text-[#535862] leading-5">Step {stepNum} of 3</span>
        <button onClick={() => navigate("/dashboard")} className="text-[14px] font-semibold text-[#007aff] leading-[1.4] hover:underline">
          I'll do this later
        </button>
      </div>
    </>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-[220px] h-[200px] rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=440&h=400&fit=crop" alt="" className="size-full object-cover" />
        </div>
        <div className="absolute top-[25%] left-[15%] w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=320&h=320&fit=crop" alt="" className="size-full object-cover" />
        </div>
        <div className="absolute bottom-[10%] left-[20%] w-[160px] h-[140px] rounded-2xl overflow-hidden shadow-lg opacity-50 blur-sm">
          <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=320&h=280&fit=crop" alt="" className="size-full object-cover" />
        </div>
        <div className="absolute bottom-[10%] right-[8%] w-[140px] h-[120px] rounded-2xl overflow-hidden shadow-lg opacity-50 blur-sm">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=280&h=240&fit=crop" alt="" className="size-full object-cover" />
        </div>

        <div className="flex flex-col items-center gap-5 z-10">
          <div className="size-12 border-[3px] border-[#e9eaeb] border-t-[#007aff] rounded-full animate-spin" />
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-[22px] font-semibold text-[#181d27] leading-7">Hold on! We are preparing your Courses</h2>
            <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">It will take a few seconds</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex">
      <RegisterSidebar currentStep={4} />
      <div className="flex-1 flex flex-col items-center justify-between p-4 sm:p-8">
        <div className="w-full max-w-[560px] flex flex-col items-center gap-8 flex-1 justify-center">

          {step === 1 && (
            <>
              <Header title="What are your favorite subjects you are interested in?" subtitle="Select up to 4 categories" />
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat, i) => (
                  <button key={i} onClick={() => toggleItem(cat, selectedCats, setSelectedCats)}
                    className={`px-4 py-2.5 rounded-full text-[14px] font-medium leading-[1.4] transition-colors whitespace-nowrap ${selectedCats.includes(cat) ? "bg-[#181d27] text-white" : "bg-white border border-[#d5d7da] text-[#414651] hover:border-[#a4a7ae]"}`}
                  >{cat}</button>
                ))}
              </div>
              <Footer stepNum={1} onBack={() => navigate(-1)} onNext={() => setStep(2)} />
            </>
          )}

          {step === 2 && (
            <>
              <Header title="What skills are you interested in?" subtitle="Choose a few to start with. You can change these or follow more skills in the future." />
              <div className="w-full flex items-center gap-2 bg-[#f5f5f5] border border-[#d5d7da] rounded-lg px-3.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input type="text" placeholder="Search for skill" className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]" />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, i) => (
                  <button key={i} onClick={() => toggleItem(skill, selectedSkills, setSelectedSkills, 10)}
                    className={`px-4 py-2.5 rounded-full text-[14px] font-medium leading-[1.4] transition-colors whitespace-nowrap ${selectedSkills.includes(skill) ? "bg-[#181d27] text-white" : "bg-white border border-[#d5d7da] text-[#414651] hover:border-[#a4a7ae]"}`}
                  >{skill}</button>
                ))}
              </div>
              <Footer stepNum={2} onBack={() => setStep(1)} onNext={() => setStep(3)} />
            </>
          )}

          {step === 3 && (
            <>
              <Header title="Are you interested in any certifications?" subtitle="Choose a few to start with. You can change these or follow more skills in the future." />
              <div className="w-full flex items-center gap-2 bg-[#f5f5f5] border border-[#d5d7da] rounded-lg px-3.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input type="text" placeholder="Search for a certificaton" className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]" />
              </div>
              <div className="flex flex-col gap-3 w-full items-center">
                <p className="text-[14px] font-medium text-[#414651] leading-5">Popular Certifications</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {certifications.map((cert, i) => (
                    <button key={i} onClick={() => toggleItem(cert, selectedCerts, setSelectedCerts, 10)}
                      className={`px-4 py-2.5 rounded-full text-[14px] font-medium leading-[1.4] transition-colors whitespace-nowrap ${selectedCerts.includes(cert) ? "bg-[#181d27] text-white" : "bg-white border border-[#d5d7da] text-[#414651] hover:border-[#a4a7ae]"}`}
                    >{cert}</button>
                  ))}
                </div>
              </div>
              <Footer stepNum={3} onBack={() => setStep(2)} onNext={() => setLoading(true)} nextLabel="Start learning" />
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default RegisterComplete
