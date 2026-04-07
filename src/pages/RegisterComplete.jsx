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
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="44" viewBox="0 0 56 44" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5664 0C43.8492 5.49679e-05 48.0754 1.18636 51.2451 3.55859C54.4148 5.9309 55.9999 9.9976 56 15.7588C56 22.198 52.3015 28.468 44.9053 34.5684C37.8613 40.3297 30.1129 43.2109 21.6602 43.2109C16.025 43.2109 10.9184 41.8548 6.33984 39.1436C2.11343 36.4323 0 32.196 0 26.4346C0.000102282 19.3176 4.22695 13.2173 12.6797 8.13379C21.4846 2.71141 30.1137 0 38.5664 0ZM22.7617 12.9209C22.3794 12.9209 21.9276 13.3402 21.4062 14.1787C20.8849 15.0175 20.3802 16.0839 19.8936 17.377C19.407 18.6699 18.9901 19.9807 18.6426 21.3086C18.3298 22.6364 18.1739 23.807 18.1738 24.8203C18.1738 26.2182 18.5206 27.4596 19.2158 28.543C19.9458 29.5913 20.9022 30.1152 22.084 30.1152C22.9529 30.1152 23.7875 29.8177 24.5869 29.2236C25.3862 28.6296 26.151 27.8436 26.8809 26.8652C27.6108 25.8518 28.2884 24.7684 28.9141 23.6152C28.8098 24.0693 28.7228 24.5234 28.6533 24.9775C28.5838 25.3969 28.5488 25.817 28.5488 26.2363C28.5489 26.9351 28.6538 27.5818 28.8623 28.1758C29.1056 28.7697 29.4876 29.2414 30.0088 29.5908C30.5649 29.9403 31.2955 30.1152 32.1992 30.1152C33.4505 30.1152 34.7368 29.7129 36.0576 28.9092C37.3783 28.1054 38.6298 26.9874 39.8115 25.5547C40.9933 24.087 41.9488 22.4094 42.6787 20.5225L42.001 20.0498C41.1668 21.832 40.2113 23.3701 39.1338 24.6631C38.0562 25.9212 36.9959 26.8829 35.9531 27.5469C34.9104 28.2108 34.0239 28.5429 33.2939 28.543C32.6683 28.543 32.2166 28.3502 31.9385 27.9658C31.6952 27.5814 31.5732 27.0744 31.5732 26.4453C31.5733 25.5717 31.7472 24.5584 32.0947 23.4053C32.4423 22.2521 32.8421 21.1163 33.2939 19.998C33.7806 18.8448 34.1973 17.8831 34.5449 17.1143C34.8925 16.3106 35.0664 15.839 35.0664 15.6992C35.0664 15.3847 34.8925 15.1396 34.5449 14.9648C34.2322 14.7902 33.8671 14.6507 33.4502 14.5459C33.0679 14.4411 32.772 14.3709 32.5635 14.3359C32.1811 15.1048 31.6954 16.0665 31.1045 17.2197C30.5483 18.373 29.9397 19.5788 29.2793 20.8369C28.6189 22.0949 27.9233 23.2653 27.1934 24.3486C26.4982 25.4319 25.8035 26.3235 25.1084 27.0225C24.4132 27.6865 23.7347 28.0186 23.0742 28.0186C22.5182 28.0185 22.1013 27.7911 21.8232 27.3369C21.5452 26.8826 21.3713 26.3756 21.3018 25.8164C21.2323 25.2224 21.1973 24.7854 21.1973 24.5059C21.1973 23.3177 21.4062 22.0248 21.8232 20.627C22.2404 19.229 22.727 17.9185 23.2832 16.6953C23.8392 15.4725 24.3081 14.5638 24.6904 13.9697C24.4124 13.6553 24.0654 13.4101 23.6484 13.2354C23.2314 13.0257 22.9355 12.9209 22.7617 12.9209Z" fill="#007AFF" />
        </svg>
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
