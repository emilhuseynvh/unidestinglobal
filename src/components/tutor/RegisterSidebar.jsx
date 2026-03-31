import { Link } from "react-router"

const ColorSwatchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.9989 16.5V19.5C21.9989 20.88 20.8789 22 19.4989 22H12.3589C11.4689 22 11.0289 20.93 11.6489 20.3L17.5189 14.3C17.7089 14.11 17.9689 14 18.2289 14H19.4989C20.8789 14 21.9989 15.12 21.9989 16.5Z" fill="#B9CBF5" />
    <path d="M18.3683 11.29L15.6583 14L13.1983 16.45C12.5683 17.08 11.4883 16.64 11.4883 15.75C11.4883 12.54 11.4883 7.26002 11.4883 7.26002C11.4883 6.99002 11.5983 6.74002 11.7783 6.55002L12.6983 5.63002C13.6783 4.65002 15.2583 4.65002 16.2383 5.63002L18.3583 7.75002C19.3483 8.73002 19.3483 10.31 18.3683 11.29Z" fill="#B9CBF5" />
    <path d="M7.5 2H4.5C3 2 2 3 2 4.5V18C2 18.27 2.03 18.54 2.08 18.8C2.11 18.93 2.14 19.06 2.18 19.19C2.23 19.34 2.28 19.49 2.34 19.63C2.35 19.64 2.35 19.65 2.35 19.65C2.36 19.65 2.36 19.65 2.35 19.66C2.49 19.94 2.65 20.21 2.84 20.46C2.95 20.59 3.06 20.71 3.17 20.83C3.28 20.95 3.4 21.05 3.53 21.15L3.54 21.16C3.79 21.35 4.06 21.51 4.34 21.65C4.35 21.64 4.35 21.64 4.35 21.65C4.5 21.72 4.65 21.77 4.81 21.82C4.94 21.86 5.07 21.89 5.2 21.92C5.46 21.97 5.73 22 6 22C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.44 21.73 7.55 21.68C7.9 21.54 8.24 21.34 8.54 21.08C8.63 21.01 8.73 20.92 8.82 20.83L8.86 20.79C9.56 20.07 10 19.08 10 18V4.5C10 3 9 2 7.5 2ZM6 19.5C5.17 19.5 4.5 18.83 4.5 18C4.5 17.17 5.17 16.5 6 16.5C6.83 16.5 7.5 17.17 7.5 18C7.5 18.83 6.83 19.5 6 19.5Z" fill="#B9CBF5" />
  </svg>
)

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.19 2H12.75V8V8.75V13.75H22V8.75V8V7.81C22 4.17 19.83 2 16.19 2Z" fill="#C3C6CC" />
    <path d="M2 10.25V15.25V15.75V16.19C2 19.83 4.17 22 7.81 22H11.25V15.75V15.25V10.25H2Z" fill="#C3C6CC" />
    <path d="M11.25 2V8.75H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill="#C3C6CC" />
    <path d="M22 15.25V16.19C22 19.83 19.83 22 16.19 22H12.75V15.25H22Z" fill="#C3C6CC" />
  </svg>
)

const CropIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill="#C3C6CC" />
    <path d="M21.2488 17.72H18.4688C18.0588 17.72 17.7188 18.06 17.7188 18.47V21.25C17.7188 21.66 18.0588 22 18.4688 22C18.8787 22 19.2188 21.66 19.2188 21.25V19.22H21.2488C21.6588 19.22 21.9988 18.88 21.9988 18.47C21.9988 18.06 21.6588 17.72 21.2488 17.72Z" fill="#C3C6CC" />
    <path d="M16.7181 18.4701C16.7181 17.5101 17.5081 16.7201 18.4681 16.7201H19.1581V10.0501C19.1581 7.16007 16.8181 4.82007 13.9281 4.82007H7.27813V5.51007C7.27813 6.47007 6.48813 7.26007 5.52813 7.26007H4.82812V13.9301C4.82812 16.8201 7.16813 19.1601 10.0581 19.1601H16.7281V18.4701H16.7181Z" fill="#C3C6CC" />
  </svg>
)

const steps = [
  { icon: <ColorSwatchIcon />, iconBg: "bg-[#e8efff]", title: "Personal information", subtitle: "Provide an email and password", active: true },
  { icon: <GridIcon />, iconBg: "bg-[#ececf0]", activeBg: "bg-[#FDE689]", title: "Education", subtitle: "Enter your verification code", active: false },
  { icon: <CropIcon />, iconBg: "bg-[#ececf0]", activeBg: "bg-[#d5f1db]", title: "Training information", subtitle: "Provide parent details", active: false },
]

const backLabels = ["Back to Login", "Back to Personal information", "Back to Education"]

const RegisterSidebar = ({ currentStep = 0 }) => {
  const backLinks = ["/login", "/tutor/register", "/tutor/register/education"]
  return (
    <div className="w-full lg:w-[272px] shrink-0 flex flex-col gap-8">
      <Link to={backLinks[currentStep]} className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        {backLabels[currentStep]}
      </Link>
      <div className="flex flex-col gap-8 relative">
        <div className="absolute left-6 top-12 w-px h-14 bg-[#dddfe4] hidden lg:block" />
        <div className="absolute left-6 top-[152px] w-px h-8 bg-[#dddfe4] hidden lg:block" />
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className={`${i <= currentStep ? (step.activeBg || step.iconBg) : "bg-[#ececf0]"} w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative`}>
              {step.icon}
              {i < currentStep && (
                <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`text-base leading-6 ${i === currentStep ? "font-medium text-[#0a0c11]" : i < currentStep ? "font-medium text-[#0a0c11]" : "text-[#5b616d]"}`}>{step.title}</span>
              <span className={`text-base leading-6 ${i <= currentStep ? "text-[#5b616d]" : "text-[#8c929c]"}`}>{step.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RegisterSidebar
