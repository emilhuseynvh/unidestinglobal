const groups = [
  { tag: "IELTS", tagColor: "text-[#007aff]", members: 45, active: true, name: "IELTS Band 7+ Club", description: "Daily IELTS practice with speaking partners, writing reviews, and mock tests. Active community of 45 members." },
  { tag: "Turkish", tagColor: "text-[#007aff]", members: 45, active: false, name: "Türkçe Öğreniyoruz", description: "Daily IELTS practice with speaking partners, writing reviews, and mock tests. Active community of 45 members." },
  { tag: "Python", tagColor: "text-[#007aff]", members: 45, active: false, name: "Python Study Buddies", description: "Collaborative Python learning group. Weekly code challenges, pair programming, and project discussions." },
  { tag: "Python", tagColor: "text-[#007aff]", members: 45, active: false, name: "Python Study Buddies", description: "Collaborative Python learning group. Weekly code challenges, pair programming, and project discussions." },
]

const StudyGroups = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#333] leading-[1.4]">Study Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {groups.map((group, i) => (
          <div key={i} className="border border-[#e6e6e6] rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium ${group.tagColor}`}>{group.tag}</span>
                <span className="text-xs text-[#808080]">{group.members} members</span>
                {group.active && (
                  <span className="text-xs font-medium text-[#2e7d32] bg-[#e8f5e9] px-2 py-0.5 rounded-full">Active now</span>
                )}
              </div>
              <h3 className="text-base font-semibold text-[#333]">{group.name}</h3>
              <p className="text-sm text-[#666] leading-[1.4]">{group.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((j) => (
                  <img key={j} src={`https://i.pravatar.cc/28?img=${i * 3 + j + 10}`} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#f5f5f5] flex items-center justify-center text-[10px] text-[#808080] font-medium">+{group.members - 3}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-9 px-4 rounded-lg bg-[#007aff] text-white text-sm font-medium hover:bg-[#0066d6] transition-colors">
                Join Group
              </button>
              <button className="h-9 px-4 rounded-lg border border-[#e6e6e6] text-sm font-medium text-[#333] hover:bg-[#f5f5f5] transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudyGroups
