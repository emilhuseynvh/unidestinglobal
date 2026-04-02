import { useState } from "react"

const Toggle = ({ enabled, onChange }) => (
  <button onClick={onChange} className={`w-10 h-7 rounded-[10px] p-[3px] transition-colors ${enabled ? "bg-[#007aff]" : "bg-[#dddfe4]"}`}>
    <div className={`w-[18px] h-[18px] bg-white rounded-[6px] shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)] transition-transform ${enabled ? "translate-x-[14px]" : "translate-x-0"}`} />
  </button>
)

const ToggleRow = ({ title, desc, enabled, onChange }) => (
  <div className="bg-white border border-black/[0.06] rounded-xl p-4 flex items-center gap-2">
    <div className="flex-1 min-w-0">
      <p className="text-base font-medium text-[#0a0c11] leading-6">{title}</p>
      <p className="text-sm text-[#5b616d] leading-6">{desc}</p>
    </div>
    <Toggle enabled={enabled} onChange={onChange} />
  </div>
)

const LiveSettingsTab = () => {
  const [settings, setSettings] = useState({
    published: false,
    waitlist: false,
    recordings: false,
    reminder: false,
    lateJoin: false,
  })

  const toggle = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }))

  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
        <span className="text-base font-semibold text-[#0a0c11] leading-6">Settings</span>
      </div>

      <div className="p-5 flex flex-col gap-5">
        <div className="max-w-[649px] flex flex-col gap-8">
          {/* Class Settings */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Class Settings</span>
            <div className="flex flex-col gap-3">
              <ToggleRow title="Class published" desc="Visible and enrollable by students" enabled={settings.published} onChange={() => toggle("published")} />
              <ToggleRow title="Waitlist enabled" desc="Allow students to join waitlist when class is full" enabled={settings.waitlist} onChange={() => toggle("waitlist")} />
              <ToggleRow title="Session recordings" desc="Automatically share recordings with enrolled students" enabled={settings.recordings} onChange={() => toggle("recordings")} />
              <ToggleRow title="24h reminder emails" desc="Send automatic reminders before each session" enabled={settings.reminder} onChange={() => toggle("reminder")} />
              <ToggleRow title="Late join allowed" desc="Allow students to join up to 15 minutes after start" enabled={settings.lateJoin} onChange={() => toggle("lateJoin")} />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/[0.06]" />

          {/* Schedule & Capacity */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Schedule & Capacity</span>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Max Students</label>
                <input type="text" defaultValue="0" className="bg-white border border-black/[0.06] rounded-xl h-12 px-3 text-sm text-[#0a0c11] leading-6 outline-none" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Session time</label>
                  <input type="text" defaultValue="16:00" className="bg-white border border-black/[0.06] rounded-xl h-12 px-3 text-sm text-[#0a0c11] leading-6 outline-none" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Session durations</label>
                  <div className="bg-white border border-black/[0.06] rounded-xl h-12 px-3 flex items-center justify-between">
                    <span className="text-sm text-[#0a0c11] leading-6">60 minutes</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <button className="self-start h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] mt-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 4.5L6.75 12.75 3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Save Schedule
            </button>
          </div>

          {/* Danger Zone */}
          <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-[28px] p-3">
            <div className="bg-white rounded-2xl p-3 flex flex-col gap-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)]">
              <div className="w-8 h-8 rounded-full bg-[rgba(237,64,48,0.12)] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#ed4030" strokeWidth="1.5" /><path d="M10 6.667v3.333M10 13.333h.008" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-[#0a0c11] leading-6">Danger Zone</span>
                <p className="text-sm text-[#8c929c] leading-5">Archiving hides the course from new students but existing enrolled students keep access. Deleting permanently removes all data.</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button className="h-8 px-3 rounded-lg border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-xs font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">Archive Course</button>
                <button className="h-8 px-3 rounded-lg bg-[rgba(237,64,48,0.12)] text-xs font-medium text-[#df2917]">Delete Course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveSettingsTab
