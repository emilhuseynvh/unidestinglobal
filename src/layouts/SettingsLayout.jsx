import { Outlet } from "react-router"
import Header from "../components/Header"
import SettingsSidebar from "../components/Settings/SettingsSidebar"

const SettingsLayout = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-6">
        <h1 className="text-[24px] sm:text-[28px] font-semibold text-[#181d27] leading-tight">
          Settings
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <SettingsSidebar />
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SettingsLayout
