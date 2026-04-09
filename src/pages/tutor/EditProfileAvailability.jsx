import { useState, useEffect } from "react"
import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"
import { useGetMeQuery, useUpdateProfileMutation } from "../../store/api/authApi"
import { toast } from "react-toastify"

const dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
const dayLabels = { monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday" }

const Toggle = ({ enabled, onToggle }) => (
  <button onClick={onToggle} className="w-14 h-8 relative cursor-pointer shrink-0">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#ececf0] to-[#f9f9fa] rounded-[10px] p-[3px]">
        <div className={`w-12 h-[26px] rounded-lg flex items-center px-[3px] transition-colors ${enabled ? "bg-[#007aff] justify-end" : "bg-[#dddfe4]"}`}>
          <div className="w-[26px] h-5 rounded-md bg-white shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)]" />
        </div>
      </div>
    </div>
  </button>
)

const EditProfileAvailability = () => {
  const { data: meData, isLoading: meLoading } = useGetMeQuery()
  const [updateProfile, { isLoading: saving }] = useUpdateProfileMutation()
  const [availability, setAvailability] = useState({})

  useEffect(() => {
    if (meData?.data?.tutor?.availability) {
      setAvailability(meData.data.tutor.availability)
    }
  }, [meData])

  const isDayEnabled = (day) => {
    const slots = availability[day]
    return Array.isArray(slots) && slots.length > 0
  }

  const toggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: isDayEnabled(day) ? [] : ["09:00-17:00"],
    }))
  }

  const updateSlot = (day, index, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: (prev[day] || []).map((s, i) => i === index ? value : s),
    }))
  }

  const addSlot = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), ""],
    }))
  }

  const removeSlot = (day, index) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: (prev[day] || []).filter((_, i) => i !== index),
    }))
  }

  const handleSave = async () => {
    try {
      await updateProfile({ tutor: { availability } }).unwrap()
      toast.success("Availability saved successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to save availability")
    }
  }

  if (meLoading) return <div className="flex items-center justify-center py-20"><svg className="animate-spin h-8 w-8 text-[#007aff]" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg></div>

  const hasAvailability = dayNames.some((d) => isDayEnabled(d))

  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={hasAvailability ? 80 : 60} />
      <div className="md:px-6 px-3 lg:px-10"><ProfileTabs /></div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 4 of 5 — {hasAvailability ? "Already complete" : "Not completed"}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Set your availability</h1>
                <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Choose when you're available to teach. Students can only book sessions during your open slots.</p>
              </div>
              <button onClick={handleSave} disabled={saving} className={`h-10 px-3 rounded-[10px] text-sm font-medium text-white shrink-0 transition-colors shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] ${saving ? "bg-[#5caaff] cursor-not-allowed" : "bg-[#007aff] hover:bg-[#0066d6]"}`}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">Asia/Baku — AZT (UTC+4)</span>
              <span className="text-xs text-[#8c929c] leading-4">All time shown your local timezone</span>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Click slots to toggle availability</span>
            <div className="flex flex-col divide-y divide-[#f0f0f0]">
              {dayNames.map((day) => {
                const enabled = isDayEnabled(day)
                const slots = availability[day] || []
                return (
                  <div key={day} className="py-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Toggle enabled={enabled} onToggle={() => toggleDay(day)} />
                        <span className={`text-sm font-medium leading-6 ${enabled ? "text-[#0a0c11]" : "text-[#8c929c]"}`}>{dayLabels[day]}</span>
                      </div>
                      {!enabled && <span className="text-sm text-[#8c929c]">Closed</span>}
                    </div>
                    {enabled && (
                      <>
                        {slots.map((slot, si) => (
                          <div key={si} className="flex items-center gap-3 pl-[68px]">
                            <div className="flex-1">
                              <input
                                type="text"
                                value={slot}
                                onChange={(e) => updateSlot(day, si, e.target.value)}
                                placeholder="09:00-17:00"
                                className="w-full border border-black/[0.06] rounded-xl min-h-[48px] p-3 text-sm text-[#0a0c11] outline-none placeholder:text-[#8c929c] focus:border-[#007aff] focus:border-2 transition-colors"
                              />
                            </div>
                            {slots.length > 1 && (
                              <button onClick={() => removeSlot(day, si)} className="text-xs text-[#ed4030]">Remove</button>
                            )}
                          </div>
                        ))}
                        <button onClick={() => addSlot(day)} className="text-sm font-medium text-[#007aff] self-end flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                          Add more hours
                        </button>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileAvailability
