import { useState } from "react"
import { Link } from "react-router"

const imgTutor = "https://www.figma.com/api/mcp/asset/73dd3838-5ced-417e-86bc-7f7f205ef3bc"
const ChartUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M1.66602 1.04102C2.01119 1.04102 2.29102 1.32084 2.29102 1.66602V15.416C2.29102 16.6817 3.31703 17.7077 4.58268 17.7077H18.3327C18.6779 17.7077 18.9577 17.9875 18.9577 18.3327C18.9577 18.6779 18.6779 18.9577 18.3327 18.9577H4.58268C2.62667 18.9577 1.04102 17.372 1.04102 15.416V1.66602C1.04102 1.32084 1.32084 1.04102 1.66602 1.04102Z" fill="#FF832D"/>
    <path d="M16.8743 7.34157V9.16602C16.8743 9.51119 17.1542 9.79102 17.4993 9.79102C17.8445 9.79102 18.1243 9.51119 18.1243 9.16602V5.83268C18.1243 5.4875 17.8445 5.20768 17.4993 5.20768H14.166C13.8208 5.20768 13.541 5.4875 13.541 5.83268C13.541 6.17786 13.8208 6.45768 14.166 6.45768H15.9905L12.4993 9.9488L9.60796 7.05741C9.36388 6.81333 8.96815 6.81333 8.72407 7.05741L4.55741 11.2241C4.31333 11.4682 4.31333 11.8639 4.55741 12.108C4.80148 12.352 5.19721 12.352 5.44129 12.108L9.16602 8.38323L12.0574 11.2746C12.3015 11.5187 12.6972 11.5187 12.9413 11.2746L16.8743 7.34157Z" fill="#FF832D"/>
  </svg>
)
const ThumbsUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.16997 7.75323L9.66636 1.71407C9.90741 1.29772 10.3525 1.04185 10.8335 1.04297C12.3139 1.04273 13.4559 2.34665 13.2602 3.81429L12.7966 7.29104H14.769C15.4465 7.29103 15.996 7.29103 16.4357 7.32955C16.8869 7.36908 17.2924 7.45343 17.654 7.6667C18.2124 7.99614 18.6341 8.51501 18.8425 9.129C18.9774 9.52647 18.9771 9.94066 18.9236 10.3905C18.8714 10.8288 18.7592 11.3666 18.6207 12.0298L18.0482 14.7719C17.9142 15.4138 17.8066 15.9292 17.6874 16.3443C17.5646 16.772 17.4185 17.135 17.1875 17.4618C16.813 17.9915 16.3002 18.4082 15.705 18.6664C15.3379 18.8257 14.9527 18.8944 14.5089 18.9272C14.0782 18.9589 13.5518 18.9588 12.8959 18.9586L12.259 18.9585C11.1357 18.9583 10.5086 18.9581 9.89067 18.8715C9.34212 18.7946 8.80188 18.667 8.2769 18.4903C7.73624 18.3084 7.22109 18.0584 6.36895 17.633C6.34129 17.7352 6.30403 17.8363 6.25332 17.9359C6.07356 18.2887 5.78672 18.5755 5.43392 18.7553C5.19743 18.8758 4.95167 18.9203 4.70458 18.9405C4.47047 18.9597 4.18625 18.9596 3.85679 18.9596H3.64191C3.31245 18.9596 3.02823 18.9597 2.79412 18.9405C2.54703 18.9203 2.30127 18.8758 2.06479 18.7553C1.71198 18.5755 1.42514 18.2887 1.24538 17.9359C1.12488 17.6994 1.08031 17.4536 1.06012 17.2065C1.041 16.9724 1.04101 16.6882 1.04102 16.3588V9.47721C1.04101 9.14775 1.041 8.86351 1.06012 8.62941C1.08031 8.38232 1.12488 8.13656 1.24538 7.90007C1.42514 7.54727 1.71198 7.26043 2.06479 7.08067C2.30127 6.96017 2.54703 6.9156 2.79412 6.89541C3.02823 6.87628 3.31246 6.87629 3.64193 6.8763H3.85677C4.18624 6.87629 4.47047 6.87628 4.70458 6.89541C4.95167 6.9156 5.19743 6.96017 5.43392 7.08067C5.73639 7.23478 5.99038 7.46761 6.16997 7.75323Z" fill="#B781FD"/>
  </svg>
)
const imgCheckCircle = "https://www.figma.com/api/mcp/asset/9abebcb3-a09c-4627-b1dd-b72517b921ab"
const imgBookmark = "https://www.figma.com/api/mcp/asset/36527453-4542-4253-a93c-9e3be5e5c387"
const imgStar = "https://www.figma.com/api/mcp/asset/a7cf099c-a421-4373-9212-47d49ccdddeb"
const imgGradCap = "https://www.figma.com/api/mcp/asset/8c663d9d-c839-4e1e-b4eb-02502fbddc91"
const imgBookOpen = "https://www.figma.com/api/mcp/asset/bcbbd920-86c5-4c12-8fdb-62af0ae268f3"

const CardCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M22.9768 3H7.69118C6.60742 2.99999 5.73323 2.99998 5.02536 3.05782C4.29651 3.11737 3.65632 3.24318 3.06403 3.54497C2.12322 4.02434 1.35832 4.78924 0.878953 5.73005C0.577166 6.32234 0.451353 6.96253 0.391804 7.69138C0.340464 8.31974 0.334704 9.07914 0.334064 9.99986C0.333936 10.184 0.483222 10.3333 0.667316 10.3333H30.0007C30.1847 10.3333 30.334 10.184 30.3339 9.99986C30.3333 9.07913 30.3275 8.31975 30.2762 7.69138C30.2166 6.96253 30.0908 6.32234 29.789 5.73005C29.3097 4.78924 28.5447 4.02434 27.6039 3.54497C27.0116 3.24318 26.3715 3.11737 25.6426 3.05782C24.9347 2.99998 24.0605 2.99999 22.9768 3Z" fill="#1A1A1A"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M30.334 12.6667C30.334 12.4826 30.1847 12.3333 30.0007 12.3333H0.667319C0.483224 12.3333 0.333985 12.4826 0.333985 12.6667V18.9762C0.333976 20.0599 0.333968 20.9341 0.391804 21.642C0.451353 22.3708 0.577166 23.011 0.878953 23.6033C1.35832 24.5441 2.12322 25.309 3.06403 25.7884C3.65632 26.0902 4.29651 26.216 5.02536 26.2755C5.73324 26.3334 6.60738 26.3333 7.69115 26.3333H15.8673C16.4196 26.3333 16.8673 25.8856 16.8673 25.3333C16.8673 20.2891 20.9565 16.2 26.0007 16.2C27.055 16.2 28.0655 16.3782 29.0052 16.7054C29.3109 16.8119 29.6494 16.7637 29.9133 16.5761C30.1772 16.3886 30.334 16.0848 30.334 15.761V12.6667ZM12.0007 18.3333C12.5529 18.3333 13.0007 18.781 13.0007 19.3333C13.0007 19.8856 12.5529 20.3333 12.0007 20.3333H6.00065C5.44837 20.3333 5.00065 19.8856 5.00065 19.3333C5.00065 18.781 5.44837 18.3333 6.00065 18.3333H12.0007Z" fill="#1A1A1A"/>
    <path d="M31.3744 21.2929C31.7649 21.6834 31.7649 22.3166 31.3744 22.7071L25.3744 28.7071C24.9839 29.0976 24.3507 29.0976 23.9602 28.7071L20.6269 25.3738C20.2364 24.9832 20.2364 24.3501 20.6269 23.9596C21.0174 23.569 21.6506 23.569 22.0411 23.9596L24.6673 26.5858L29.9602 21.2929C30.3507 20.9024 30.9839 20.9024 31.3744 21.2929Z" fill="#1A1A1A"/>
  </svg>
)
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.4375 1.61773C15.0473 0.80203 16.9494 0.801894 18.5594 1.61737L28.0229 6.4109C29.0316 6.92182 29.6673 7.95647 29.6673 9.08716V11.7867C29.6673 12.4554 29.5324 13.7708 29.3799 15.0646C29.0235 18.0866 27.8561 20.9366 26.098 23.389C24.0643 26.2259 21.3939 28.5467 18.3011 30.165L17.3005 30.6885C16.4849 31.1152 15.512 31.1153 14.6964 30.6886L13.6981 30.1665C10.6024 28.5472 7.93002 26.2238 5.89614 23.3832C4.14269 20.9343 2.97828 18.0893 2.62241 15.0729C2.46944 13.7762 2.33398 12.4567 2.33398 11.7867V9.08696C2.33398 7.95642 2.96955 6.92189 3.97801 6.4109L13.4375 1.61773ZM21.3744 13.7081C21.7649 13.3176 21.7649 12.6844 21.3744 12.2939C20.9839 11.9033 20.3507 11.9033 19.9602 12.2939L14.6673 17.5868L12.0411 14.9605C11.6506 14.57 11.0174 14.57 10.6269 14.9605C10.2364 15.3511 10.2364 15.9842 10.6269 16.3748L13.9602 19.7081C14.3507 20.0986 14.9839 20.0986 15.3744 19.7081L21.3744 13.7081Z" fill="#1A1A1A"/>
  </svg>
)
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M10.6668 27.5559C8.88898 28.5831 6.66602 27.3001 6.66602 25.247V6.75464C6.66602 4.70146 8.88898 3.4185 10.6667 4.44566L26.6698 13.6919C28.4466 14.7184 28.4466 17.2832 26.6698 18.3097L10.6668 27.5559Z" fill="#1A1A1A"/>
  </svg>
)

const tabs = [
  "Motivation Letter Help",
  "Scholarship Focused",
  "Low GPA?",
  "Deadline Soon",
  "Europe / Germany",
  "Speak English",
]

const tutors = [
  { name: "Tariro M.", subject: "Biology tutor", helped: 14, rating: "4.9", reviews: 23 },
  { name: "Tariro M.", subject: "Biology tutor", helped: 14, rating: "4.9", reviews: 23 },
  { name: "Samira L.", subject: "Mathematics tutor", helped: 14, rating: "4.8", reviews: 18 },
  { name: "Jamal R.", subject: "Chemistry tutor", helped: 14, rating: "5.0", reviews: 15 },
]

const features = [
  "All tutors are verified",
  "Pay securely through the platform",
  "No commitment after intro call",
]

const FloatingIcon = ({ bg, icon: Icon, className }) => (
  <div className={`hidden lg:flex size-16 rounded-full items-center justify-center absolute ${className}`} style={{ backgroundColor: bg }}>
    {typeof Icon === "string" ? <img src={Icon} alt="" className="size-8" /> : <Icon />}
  </div>
)

const MeetTutors = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 sm:py-28">
      <div className="flex flex-col items-center gap-11">
        <div className="flex flex-col items-center gap-6 text-center relative w-full">
          <FloatingIcon bg="#d5f1db" icon={CardCheckIcon} className="left-[10%] top-[-10px]" />
          <FloatingIcon bg="#b7cbf4" icon={PlayIcon} className="right-[5%] top-[0px]" />
          <FloatingIcon bg="#a2d6f0" icon={PlayIcon} className="left-[15%] top-[240px]" />
          <FloatingIcon bg="#dcead0" icon={ShieldCheckIcon} className="right-[12%] top-[240px]" />

          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#1a1a1a] leading-none tracking-[-1.92px] max-w-[647px]">
            Meet tutors who've helped students like you
          </h2>
          <p className="text-[16px] font-normal text-[#4d4d4d] leading-[1.4]">
            Get guidance from verified tutors who understand your goals, profile, and challenges.
          </p>
          <div className="flex flex-col gap-4 items-center">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <img src={imgCheckCircle} alt="" className="size-5" />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">{f}</span>
              </div>
            ))}
          </div>
          <Link to="/find-a-tutor" className="relative h-12 px-4 rounded-xl overflow-hidden flex items-center justify-center mt-2">
            <div className="absolute inset-0 backdrop-blur-xl bg-[#007aff]" />
            <span className="relative text-[16px] font-medium text-white leading-6">Find a tutor</span>
          </Link>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-[20px] shadow-sm p-1.5 flex items-center gap-1.5 overflow-x-auto max-w-full">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`h-[52px] px-5 rounded-[14px] text-[18px] font-medium leading-6 whitespace-nowrap transition-colors ${
                activeTab === i
                  ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]"
                  : "text-[#8c929c] hover:text-[#5b616d]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full" style={{ perspective: "1000px" }}>
          {tutors.map((tutor, i) => (
            <div key={i} className="relative cursor-pointer group hover:z-20" style={{ minHeight: "476px" }}>
              <div className="relative w-full h-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                  <div className="flex flex-col gap-3 pb-3">
                    <div className="w-full aspect-square rounded-t-2xl overflow-hidden">
                      <img src={imgTutor} alt={tutor.name} className="size-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-start gap-2">
                          <ChartUpIcon />
                          <span className="text-[16px] font-normal text-[#666] leading-[1.4]">
                            Helped {tutor.helped} students get admitted
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ThumbsUpIcon />
                          <span className="text-[16px] font-normal text-[#666] leading-[1.4]">
                            Rated {tutor.rating} by {tutor.reviews} students
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[24px] font-semibold text-black leading-8">{tutor.name}</h3>
                        <span className="text-[16px] font-medium text-[#666] leading-6">{tutor.subject}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[-20px] z-10 [transform:rotateY(180deg)]" style={{ backfaceVisibility: "hidden" }}>
                  <div className="bg-white rounded-2xl shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)] p-6 h-full overflow-hidden">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[24px] font-semibold text-black leading-8">{tutor.name}</h3>
                          <span className="text-[16px] font-medium text-[#666] leading-6">{tutor.subject}</span>
                        </div>
                        <div className="bg-[#f5f5f5] rounded-full size-14 flex items-center justify-center shrink-0">
                          <img src={imgBookmark} alt="" className="size-6" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-7">
                        <div className="flex-1 flex flex-col items-center gap-1">
                          <div className="flex items-center gap-1">
                            <span className="text-[16px] font-semibold text-black tracking-[-0.48px]">5</span>
                            <img src={imgStar} alt="" className="size-4" />
                          </div>
                          <span className="text-[14px] font-normal text-[rgba(27,31,38,0.72)] text-center tracking-[-0.28px]">34 reviews</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center gap-0.5">
                          <div className="flex items-center gap-1">
                            <span className="text-[16px] font-semibold text-black tracking-[-0.48px]">20</span>
                            <img src={imgGradCap} alt="" className="size-4" />
                          </div>
                          <span className="text-[14px] font-normal text-[rgba(27,31,38,0.72)] text-center tracking-[-0.28px]">students</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center gap-0.5">
                          <div className="flex items-center gap-1">
                            <span className="text-[16px] font-semibold text-black tracking-[-0.48px]">147</span>
                            <img src={imgBookOpen} alt="" className="size-4" />
                          </div>
                          <span className="text-[14px] font-normal text-[rgba(27,31,38,0.72)] text-center tracking-[-0.28px]">lessons</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="border border-[#e6e6e6] rounded-[15px] px-2 py-1.5 text-[14px] font-medium text-[#333]">Professional</span>
                        <span className="border border-[#e6e6e6] rounded-[15px] px-2 py-1.5 text-[14px] font-medium text-[#333]">Super Tutor</span>
                      </div>
                      <p className="text-[14px] font-normal text-[#4d4d4d] leading-[1.4] line-clamp-3">
                        Clear English, Real Progress. Your personalized path for Business, Conversation & Beginners.
                      </p>
                      <div className="flex items-end justify-between py-1">
                        <span className="text-[14px] font-medium text-[#8e8e93] tracking-[-0.32px]">45-min lesson</span>
                        <div className="flex items-start gap-1.5">
                          <span className="text-[24px] font-semibold text-black tracking-[-0.72px]">$32</span>
                          <span className="text-[14px] font-medium text-[#999] tracking-[-0.48px] line-through">$45</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <button className="relative h-12 rounded-xl overflow-hidden w-full">
                          <div className="absolute inset-0 bg-[#007aff]" />
                          <span className="relative text-[16px] font-medium text-white leading-6">15 min intro-call</span>
                        </button>
                        <button className="relative h-12 rounded-xl overflow-hidden w-full">
                          <div className="absolute inset-0 bg-[rgba(242,242,244,0.8)]" />
                          <span className="relative text-[16px] font-medium text-[#0a0c11] leading-6">View Profile</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTutors
