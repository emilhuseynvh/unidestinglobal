import { Link } from "react-router"
import StudentPanelHeader from "../../components/student/StudentPanelHeader"

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-[#f9f9fa] flex flex-col">
      <StudentPanelHeader />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[474px]">
          <div className="flex flex-col items-center gap-4 px-5 pt-[72px] pb-4">
            <div className="py-2">
              <div className="w-[88px] h-[88px] rounded-full bg-[rgba(64,155,63,0.12)] flex items-center justify-center relative">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#409b3f" strokeWidth="2.5" /><path d="M13 20l5 5 9-9" stroke="#409b3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-[#409b3f]" />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-center w-full">
              <span className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">Payment Successful</span>
              <span className="text-sm text-[#8c929c] leading-5">Thank you! Your payment has been processed successfully, and your course is now available in your dashboard.</span>
            </div>
          </div>
          <div className="px-5 py-6">
            <Link to="/student" className="w-full h-10 rounded-[10px] bg-[#007aff] border border-black/[0.09] text-sm font-medium text-white flex items-center justify-center shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] no-underline">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
