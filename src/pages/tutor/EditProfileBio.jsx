import { useState, useEffect } from "react"
import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"
import { useGetMeQuery, useUpdateProfileMutation } from "../../store/api/authApi"
import { toast } from "react-toastify"

const EditProfileBio = () => {
  const { data: meData, isLoading: meLoading } = useGetMeQuery()
  const [updateProfile, { isLoading: saving }] = useUpdateProfileMutation()
  const [bio, setBio] = useState("")

  useEffect(() => {
    if (meData?.data?.bio) setBio(meData.data.bio)
  }, [meData])

  const handleSave = async () => {
    try {
      await updateProfile({ bio }).unwrap()
      toast.success("Bio saved successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to save bio")
    }
  }

  if (meLoading) return <div className="flex items-center justify-center py-20"><svg className="animate-spin h-8 w-8 text-[#007aff]" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg></div>

  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={meData?.data?.bio ? 40 : 20} />
      <div className="md:px-6 px-3 lg:px-10">
        <ProfileTabs />
      </div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 2 of 5 — {bio ? "Already complete" : "Not completed"}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Write your bio</h1>
                <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your bio is the first thing students read. Be specific about your qualifications, teaching style, and who you help best.</p>
              </div>
              <button onClick={handleSave} disabled={saving} className={`h-10 px-3 rounded-[10px] text-sm font-medium text-white shrink-0 transition-colors shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] ${saving ? "bg-[#5caaff] cursor-not-allowed" : "bg-[#007aff] hover:bg-[#0066d6]"}`}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 px-0.5">
              <span className="text-base font-medium text-[#5b616d] leading-6">Your Bio</span>
              <span className="text-base text-[#8c929c] leading-6">({bio.length}/600)</span>
            </div>
            <textarea
              value={bio}
              onChange={(e) => e.target.value.length <= 600 && setBio(e.target.value)}
              className="w-full min-h-[104px] border border-black/[0.06] rounded-xl px-3.5 py-2.5 text-sm text-[#0a0c11] leading-6 outline-none resize-y focus:border-[#CCE4FF] focus:border-2 transition-colors placeholder:text-[#c3c6cc]"
              placeholder="Tell students about yourself..."
            />
            <p className="text-sm text-[#8c929c] leading-5 px-0.5">
              Minimum 80 characters. Write in the first person — "I help students..." not "She helps..."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileBio
