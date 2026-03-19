import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const imgGraduationCap = "https://www.figma.com/api/mcp/asset/669ad2e9-bbb1-4d98-944d-d5829dc09c8b"
const imgChalkboard = "https://www.figma.com/api/mcp/asset/aeea9f34-927b-4d4a-9f92-739620c6efd4"

const Register = () => {
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState(null)
  const [isOver18, setIsOver18] = useState(false)

  const handleNext = () => {
    if (step === 1 && accountType) {
      setStep(2)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden">
      <div className="w-[1440px] mx-auto relative">
        <Header />

        <div className="flex flex-col items-center mx-auto pb-[32px] pt-[64px] w-[1090px]">
          {step === 1 && (
            <div className="flex flex-col gap-[32px] items-end justify-center">
              <div className="flex flex-col gap-[28px] items-end justify-center">
                <div className="flex items-start justify-between p-[4px] w-[797px]">
                  <div className="flex flex-1 items-center justify-between">
                    <h2 className="font-semibold leading-[1.4] text-[20px] text-[#333] text-center whitespace-nowrap">
                      Choose an account type
                    </h2>
                    <Link to="/login" className="size-[20px] flex items-center justify-center hover:opacity-70 transition-opacity">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M1 1L14 14M14 1L1 14" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-[20px] items-start w-[797px]">
                  <div className="flex flex-col gap-[12px] items-start w-full">
                    <div
                      onClick={() => setAccountType('student')}
                      className={`bg-white border ${accountType === 'student' ? 'border-[#007aff]' : 'border-[#e9eaeb]'} flex gap-[4px] items-start p-[16px] rounded-[12px] w-full cursor-pointer hover:border-[#007aff] transition-colors`}
                    >
                      <div className="flex flex-1 gap-[16px] items-start">
                        <div className="bg-white border border-[#e9eaeb] overflow-hidden rounded-[6px] size-[32px] flex items-center justify-center">
                          <img src={imgGraduationCap} alt="" className="size-[16px]" />
                        </div>
                        <div className="flex flex-col gap-[2px] items-start w-[398px]">
                          <div className="flex gap-[8px] items-center">
                            <p className="font-medium leading-[24px] text-[#414651] text-[16px] whitespace-nowrap">
                              I want to learn
                            </p>
                            <div className="bg-[#fcf7f1] flex items-center justify-center px-[8px] py-[4px] rounded-[25px]">
                              <span className="font-medium leading-[1.4] text-[12px] text-[#d9a055] whitespace-nowrap">
                                Student account
                              </span>
                            </div>
                          </div>
                          <p className="font-normal leading-[20px] text-[#535862] text-[14px]">
                            Includes up to 10 users, 20 GB individual data and access to all features.
                          </p>
                        </div>
                      </div>
                      <div className={`border ${accountType === 'student' ? 'bg-[#0080ff] border-[#0080ff]' : 'bg-white border-[#dfe1e7]'} rounded-[6px] size-[20px] flex items-center justify-center`}>
                        {accountType === 'student' && (
                          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                            <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    {accountType === 'student' && (
                      <div className="flex gap-[12px] items-center">
                        <button
                          type="button"
                          onClick={() => setIsOver18(!isOver18)}
                          className={`relative flex h-[20px] items-center overflow-hidden p-[2px] rounded-[12px] w-[36px] transition-colors ${isOver18 ? 'bg-[#0080ff]' : 'bg-[#eceff3]'}`}
                        >
                          <div className={`size-[16px] bg-white rounded-full shadow-sm transition-transform ${isOver18 ? 'translate-x-[16px]' : 'translate-x-0'}`} />
                        </button>
                        <p className="font-normal leading-[1.4] text-[14px] text-black whitespace-nowrap">
                          I am over 18
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    onClick={() => setAccountType('tutor')}
                    className={`bg-white border ${accountType === 'tutor' ? 'border-[#007aff]' : 'border-[#e9eaeb]'} flex gap-[4px] items-start p-[16px] rounded-[12px] w-full cursor-pointer hover:border-[#007aff] transition-colors`}
                  >
                    <div className="flex flex-1 gap-[16px] items-start">
                      <div className="bg-white border border-[#e9eaeb] overflow-hidden rounded-[6px] size-[32px] flex items-center justify-center">
                        <img src={imgChalkboard} alt="" className="size-[16px]" />
                      </div>
                      <div className="flex flex-col gap-[2px] items-start w-[398px]">
                        <div className="flex gap-[8px] items-center">
                          <p className="font-medium leading-[24px] text-[#414651] text-[16px] whitespace-nowrap">
                            I want to teach
                          </p>
                          <div className="bg-[#f1f9f4] flex items-center justify-center px-[8px] py-[4px] rounded-[25px]">
                            <span className="font-medium leading-[1.4] text-[12px] text-[#53a862] whitespace-nowrap">
                              Tutor account
                            </span>
                          </div>
                        </div>
                        <p className="font-normal leading-[20px] text-[#535862] text-[14px]">
                          Includes up to 10 users, 20 GB individual data and access to all features.
                        </p>
                      </div>
                    </div>
                    <div className={`border ${accountType === 'tutor' ? 'bg-[#0080ff] border-[#0080ff]' : 'bg-white border-[#dfe1e7]'} rounded-[6px] size-[20px] flex items-center justify-center`}>
                      {accountType === 'tutor' && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end w-full">
                <div className="flex gap-[12px] items-center">
                  <Link to="/login" className="bg-white border border-[#dfe1e7] flex h-[48px] items-center justify-center overflow-hidden px-[16px] py-[12px] rounded-full hover:bg-[#f5f5f5] transition-colors">
                    <span className="font-medium leading-[24px] text-[16px] text-[rgba(0,0,5,0.95)] whitespace-nowrap">
                      Cancel
                    </span>
                  </Link>
                  <button
                    onClick={handleNext}
                    disabled={!accountType}
                    className={`flex h-[48px] items-center justify-center overflow-hidden px-[16px] py-[12px] rounded-full shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] transition-colors ${accountType ? 'bg-[#0080ff] hover:bg-[#0066dd]' : 'bg-[#0080ff]/50 cursor-not-allowed'}`}
                  >
                    <span className="font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">
                      Sign up
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Register
