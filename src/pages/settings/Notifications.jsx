import { useState } from "react"

const initialSettings = [
  {
    label: "Comments",
    description: "These are notifications for comments on your posts and replies to your comments.",
    push: true,
    email: true,
    sms: false,
  },
  {
    label: "Tags",
    description: "These are notifications for when someone tags you in a comment, post or story.",
    push: true,
    email: false,
    sms: false,
  },
  {
    label: "Reminders",
    description: "These are notifications to remind you of updates you might have missed.",
    push: false,
    email: false,
    sms: false,
  },
  {
    label: "More activity about you",
    description: "These are notifications for posts on your profile, likes and other reactions to your posts, and more.",
    push: false,
    email: false,
    sms: false,
  },
]

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-11 h-6 rounded-full transition-colors ${enabled ? "bg-[#7f56d9]" : "bg-[#e9eaeb]"}`}
  >
    <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-all duration-200 ${enabled ? "left-[22px]" : "left-0.5"}`} />
  </button>
)

const Notifications = () => {
  const [settings, setSettings] = useState(initialSettings)

  const toggleSetting = (index, type) => {
    setSettings(prev => prev.map((s, i) => i === index ? { ...s, [type]: !s[type] } : s))
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[18px] font-semibold text-[#181d27] leading-7">Notification settings</h2>
        <p className="text-[14px] font-normal text-[#535862] leading-5">We may still send you important notifications about your account outside of your notification settings.</p>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      {settings.map((setting, i) => (
        <div key={i}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-2">
            <div className="sm:w-[280px] shrink-0">
              <p className="text-[14px] font-semibold text-[#181d27] leading-5">{setting.label}</p>
              <p className="text-[14px] font-normal text-[#535862] leading-5 mt-0.5">{setting.description}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Toggle enabled={setting.push} onToggle={() => toggleSetting(i, "push")} />
                <span className="text-[14px] font-medium text-[#414651] leading-5">Push</span>
              </div>
              <div className="flex items-center gap-3">
                <Toggle enabled={setting.email} onToggle={() => toggleSetting(i, "email")} />
                <span className="text-[14px] font-medium text-[#414651] leading-5">Email</span>
              </div>
              <div className="flex items-center gap-3">
                <Toggle enabled={setting.sms} onToggle={() => toggleSetting(i, "sms")} />
                <span className="text-[14px] font-medium text-[#414651] leading-5">SMS</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#e9eaeb] mt-4" />
        </div>
      ))}

      <div className="bg-[#fafafa] rounded-2xl p-6 flex flex-col gap-4 mt-2">
        <div>
          <h3 className="text-[18px] font-semibold text-[#181d27] leading-7">We've just released a new update!</h3>
          <p className="text-[14px] font-normal text-[#535862] leading-5 mt-0.5">Check out the all new dashboard view. Pages and now load faster.</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-[#181d27] leading-5">Subscribe to updates</label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] px-3.5 py-2.5 flex-1 sm:max-w-[280px] min-w-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 6.667l6.813 4.552a1.667 1.667 0 001.874 0L17.5 6.667M4.167 15.833h11.666c.92 0 1.667-.746 1.667-1.666V5.833c0-.92-.747-1.666-1.667-1.666H4.167c-.92 0-1.667.746-1.667 1.666v8.334c0 .92.747 1.666 1.667 1.666z" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
              />
            </div>
            <button className="h-11 px-5 bg-[#007aff] rounded-lg text-[16px] font-medium text-white leading-[1.4] hover:bg-[#0066d6] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
