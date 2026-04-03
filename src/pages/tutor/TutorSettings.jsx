import { useState } from "react"
import SettingsTabs from "../../components/tutor/Settings/SettingsTabs"
import BasicInfoTab from "../../components/tutor/Settings/BasicInfoTab"
import PasswordTab from "../../components/tutor/Settings/PasswordTab"
import BillingTab from "../../components/tutor/Settings/BillingTab"
import NotificationsTab from "../../components/tutor/Settings/NotificationsTab"

const TutorSettings = () => {
  const [activeTab, setActiveTab] = useState("basic")

  const renderTab = () => {
    switch (activeTab) {
      case "basic":
        return <BasicInfoTab />
      case "password":
        return <PasswordTab />
      case "billing":
        return <BillingTab />
      case "notifications":
        return <NotificationsTab />
      default:
        return <BasicInfoTab />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Settings</h1>
          <p className="text-sm text-[#5b616d] leading-5">Manage sessions, availability and bookings</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
            Cancel
          </button>
          <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 5.25L6.75 13.5 3 9.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Save Changes
          </button>
        </div>
      </div>

      <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="max-w-[720px] mx-auto w-full">
        {renderTab()}
      </div>
    </div>
  )
}

export default TutorSettings
