import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const imgGoogle1 = "https://www.figma.com/api/mcp/asset/4bc8cf87-fd09-49af-9a59-c8aa22fbeec1"
const imgGoogle2 = "https://www.figma.com/api/mcp/asset/2c295268-5148-40e0-84fd-22bf4abd1412"
const imgGoogle3 = "https://www.figma.com/api/mcp/asset/3b272b27-110d-421c-8ab8-e9f1898a5f71"
const imgGoogle4 = "https://www.figma.com/api/mcp/asset/ec08e301-57af-4362-b3d6-17d1bd5e52d5"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden">
      <div className="w-[1440px] mx-auto relative">
        <Header />

        <div className="flex flex-col gap-[24px] items-center mx-auto pb-[32px] pt-[64px] w-[1090px]">
          <div className="flex flex-col items-center w-[360px]">
            <div className="flex flex-col gap-[32px] items-center w-full">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col gap-[4px] items-center text-center w-full">
                  <h1 className="font-semibold leading-[32px] text-[24px] text-[#333] w-full">
                    Welcome to Unidestin! 👋
                  </h1>
                  <p className="font-normal leading-[1.4] text-[16px] text-[#808080] w-full">
                    Continue watching the courses you have already started watching.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col gap-[24px] items-center w-full">
                  <div className="flex flex-col gap-[24px] items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <div className="flex flex-col gap-[28px] items-start w-full">
                        <div className="flex flex-col gap-[6px] items-start w-full">
                          <label className="font-medium leading-[24px] text-[#0d0d12] text-[16px]">
                            Email adress
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="bg-white border border-[#e6e6e6] flex gap-[8px] h-[48px] items-center px-[12px] py-[8px] rounded-[10px] w-full text-[16px] text-[#808080] placeholder:text-[#808080] outline-none focus:border-[#007aff] transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start w-full">
                          <label className="font-medium leading-[24px] text-[#0d0d12] text-[16px]">
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="bg-white border border-[#e6e6e6] flex gap-[8px] h-[48px] items-center px-[12px] py-[8px] rounded-[10px] w-full text-[16px] text-[#717680] placeholder:text-[#717680] outline-none focus:border-[#007aff] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-[8px] items-start w-[222px]">
                        <button
                          type="button"
                          onClick={() => setRememberMe(!rememberMe)}
                          className={`border border-[#dfe1e7] rounded-[6px] size-[20px] flex items-center justify-center transition-colors ${rememberMe ? 'bg-[#007aff] border-[#007aff]' : 'bg-white'}`}
                        >
                          {rememberMe && (
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </button>
                        <div className="flex flex-col flex-1 items-start">
                          <p className="font-medium leading-[1.4] text-[14px] text-[#4d4d4d]">
                            Remember for 30 days
                          </p>
                        </div>
                      </div>
                      <button className="flex gap-[6px] items-center justify-center">
                        <span className="font-semibold leading-[1.4] text-[#0080ff] text-[14px] whitespace-nowrap hover:underline">
                          Forgot password
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[16px] items-start w-full">
                    <button className="bg-[#007aff] flex h-[48px] items-center justify-center overflow-hidden px-[16px] py-[12px] rounded-full shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] w-full hover:bg-[#0066dd] transition-colors">
                      <span className="font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">
                        Log in
                      </span>
                    </button>

                    <button className="bg-white border border-[#e4e4e7] flex gap-[8px] items-center justify-center overflow-hidden pl-[12px] pr-[16px] py-[14px] rounded-full shadow-[0px_1px_2px_0px_rgba(14,18,27,0.03)] w-full hover:bg-[#f5f5f5] transition-colors">
                      <div className="relative size-[20px]">
                        <img alt="" className="absolute" style={{ top: '42.03%', left: '50.9%', width: '8.57px', height: '8.22px' }} src={imgGoogle1} />
                        <img alt="" className="absolute" style={{ top: '58.65%', left: '11.01%', width: '13.89px', height: '7.02px' }} src={imgGoogle2} />
                        <img alt="" className="absolute" style={{ top: '30.15%', left: '6.25%', width: '3.85px', height: '7.9px' }} src={imgGoogle3} />
                        <img alt="" className="absolute" style={{ top: '6.25%', left: '11.01%', width: '13.89px', height: '7.02px' }} src={imgGoogle4} />
                      </div>
                      <span className="font-medium leading-[20px] text-[#09090b] text-[14px] whitespace-nowrap">
                        Sign up with Google
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[4px] items-baseline justify-center w-full">
            <p className="font-normal leading-[1.4] text-[#535862] text-[14px] whitespace-nowrap">
              Don't have an account?
            </p>
            <Link to="/register" className="flex gap-[6px] items-center justify-center">
              <span className="font-semibold leading-[1.4] text-[#007aff] text-[14px] whitespace-nowrap hover:underline">
                Sign up
              </span>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Login
