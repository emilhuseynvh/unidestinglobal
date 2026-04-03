import { useState } from "react"

const initialNotifications = [
  { id: "enrollment", title: "New enrollment alerts", desc: "Get notified when a student enrolls", enabled: true },
  { id: "review", title: "New review alerts", desc: "Get notified when a student leaves a review", enabled: false },
  { id: "completion", title: "Completion alerts", desc: "Get notified when a student completes the course", enabled: false },
  { id: "reminders", title: "Reminders", desc: "These are notifications to remind you of updates you might have missed.", enabled: false },
]

const Toggle = ({ enabled, onToggle }) => (
  <button onClick={onToggle} className={`w-10 h-7 rounded-[10px] p-[3px] transition-colors ${enabled ? "bg-[#007aff]" : "bg-gradient-to-b from-[#ececf0] to-[#f9f9fa]"}`}>
    <div className={`w-[32px] h-[18px] rounded-[6px] flex items-center px-0.5 transition-colors ${enabled ? "bg-[#007aff] justify-end" : "bg-[#dddfe4]"}`}>
      <div className="w-[18px] h-[14px] rounded-full bg-white shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)]" />
    </div>
  </button>
)

const NotificationsTab = () => {
  const [notifications, setNotifications] = useState(initialNotifications)

  const toggle = (id) => {
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, enabled: !n.enabled } : n))
  }

  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Billing & Earnings</p>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold text-[#0a0c11] leading-6">Notification settings</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[479px]">We may still send you important notifications about your account outside of your notification settings.</p>
        </div>
        <div className="h-px bg-[#e9eaeb] mt-3" />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Notifications</p>
        {notifications.map((n) => (
          <div key={n.id} className="bg-white border border-black/[0.06] rounded-xl p-4 flex items-center gap-2">
            <div className="flex-1 min-w-0 flex flex-col">
              <span className="text-base font-medium text-[#0a0c11] leading-6">{n.title}</span>
              <span className="text-sm text-[#5b616d] leading-6">{n.desc}</span>
            </div>
            <Toggle enabled={n.enabled} onToggle={() => toggle(n.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsTab
