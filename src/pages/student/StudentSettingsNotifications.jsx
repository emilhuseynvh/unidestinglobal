import { useState } from "react"

const notificationItems = [
  { id: "comments", title: "Comments", desc: "These are notifications for comments on your posts and replies to your comments.", defaultOn: true },
  { id: "tags", title: "Tags", desc: "These are notifications for when someone tags you in a comment, post or story.", defaultOn: false },
  { id: "activity", title: "More activity about you", desc: "These are notifications for posts on your profile, likes and other reactions to your posts, and more.", defaultOn: false },
  { id: "reminders", title: "Reminders", desc: "These are notifications to remind you of updates you might have missed.", defaultOn: false },
]

const Toggle = ({ on, onClick }) => (
  <button onClick={onClick} className={`w-10 h-7 rounded-[10px] flex items-center px-[3px] transition-colors shrink-0 ${on ? "bg-[#007aff] justify-end" : "bg-[#dddfe4]"}`}>
    <div className="w-[18px] h-[18px] rounded-[6px] bg-white shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)]" />
  </button>
)

const StudentSettingsNotifications = () => {
  const [toggles, setToggles] = useState(
    Object.fromEntries(notificationItems.map((n) => [n.id, n.defaultOn]))
  )

  const toggle = (id) => setToggles((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Billing & Earnings</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-lg font-semibold text-[#0a0c11] leading-6">Notification settings</span>
          <span className="text-sm text-[#5b616d] leading-5 max-w-[479px]">We may still send you important notifications about your account outside of your notification settings.</span>
        </div>
        <div className="h-px bg-[#e9eaeb]" />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Notifications</span>
        {notificationItems.map((item) => (
          <div key={item.id} className="border border-black/[0.06] rounded-xl p-4 flex items-center gap-2">
            <div className="flex-1 min-w-0 flex flex-col">
              <span className="text-base font-medium text-[#0a0c11] leading-6">{item.title}</span>
              <span className="text-sm text-[#5b616d] leading-6 max-w-[356px]">{item.desc}</span>
            </div>
            <Toggle on={toggles[item.id]} onClick={() => toggle(item.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentSettingsNotifications
