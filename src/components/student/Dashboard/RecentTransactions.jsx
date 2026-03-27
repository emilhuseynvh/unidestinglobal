const imgAvatar1 = "https://www.figma.com/api/mcp/asset/61a1b9ff-fa8b-4e84-91ef-43b35f73bcd7"
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/7b114619-a0ab-42b9-a97d-eefff0c285d5"
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/379792f1-7a4f-418d-85aa-c9e9b415305d"
const imgAvatar4 = "https://www.figma.com/api/mcp/asset/9ca6c847-f882-45ae-983d-a5d7bb27407d"

const statusStyles = {
  Paid: { bg: "bg-[#f1f9f4]", text: "text-[#53a862]" },
  Pending: { bg: "bg-[#fcf7f1]", text: "text-[#d9a055]" },
  Failed: { bg: "bg-[#fef1f0]", text: "text-[#ea4335]" },
}

const transactions = [
  {
    id: 1,
    date: "Aug 20, 2022",
    name: "Albert Flores",
    avatar: imgAvatar1,
    course: "Enhancing User Experience\nfor Optimal Design",
    status: "Paid",
    amount: "$19.99",
  },
  {
    id: 2,
    date: "Aug 20, 2022",
    name: "Jerome Bell",
    avatar: imgAvatar2,
    course: "Web Development with HTML",
    status: "Pending",
    amount: "$19.99",
  },
  {
    id: 3,
    date: "Aug 20, 2022",
    name: "Kristin Watson",
    avatar: imgAvatar3,
    course: "Enhancing User Experience\nfor Optimal Design",
    status: "Failed",
    amount: "$19.99",
  },
  {
    id: 4,
    date: "Aug 20, 2022",
    name: "Arlene McCoy",
    avatar: imgAvatar4,
    course: "Creativity in the World of\n3D Design",
    status: "Paid",
    amount: "$19.99",
  },
]

const RecentTransactions = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between pl-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-[24px] font-semibold text-[#333] leading-8">Recent Transactions</h2>
          <p className="text-[12px] font-normal text-[#808080] leading-[1.4]">Continue watching the courses.</p>
        </div>
        <button className="border border-[#c6c5c8] rounded-2xl h-12 px-5 text-[16px] font-medium text-black leading-[1.4] hover:bg-[#f9f9f9] transition-colors whitespace-nowrap">
          All transactions
        </button>
      </div>

      <div className="bg-white p-1">
        <div className="hidden sm:flex items-start w-full">
          <div className="w-[18.7%] px-1 py-2.5">
            <span className="text-[14px] font-medium text-[#808080] leading-[1.4] px-1">Date</span>
          </div>
          <div className="w-[25%] px-1 py-2.5">
            <span className="text-[14px] font-medium text-[#808080] leading-[1.4] px-1">Name</span>
          </div>
          <div className="w-[18.6%] px-1 py-2.5">
            <span className="text-[14px] font-medium text-[#808080] leading-[1.4] px-1">Course</span>
          </div>
          <div className="w-[18.5%] px-1 py-2.5">
            <span className="text-[14px] font-medium text-[#808080] leading-[1.4] px-1">Status</span>
          </div>
          <div className="w-[18.7%] px-1 py-2.5">
            <span className="text-[14px] font-medium text-[#808080] leading-[1.4] px-1">Amount</span>
          </div>
        </div>

        {transactions.map((t) => {
          const s = statusStyles[t.status]
          return (
            <div key={t.id}>
              <div className="h-px bg-[#e9eaeb]" />
              <div className="flex flex-col sm:flex-row sm:items-center w-full py-2 sm:py-0">
                <div className="sm:w-[18.7%] px-1 py-1.5 sm:py-2.5">
                  <span className="text-[14px] font-medium text-[#333] leading-[1.4] px-1">{t.date}</span>
                </div>
                <div className="sm:w-[25%] px-1 py-1.5 sm:py-2.5">
                  <div className="flex items-center gap-2 px-1">
                    <div className="size-7 rounded-full overflow-hidden shrink-0">
                      <img src={t.avatar} alt={t.name} className="size-full object-cover" />
                    </div>
                    <span className="text-[14px] font-medium text-[#333] leading-[1.4]">{t.name}</span>
                  </div>
                </div>
                <div className="sm:w-[18.6%] px-1 py-1.5 sm:py-2.5">
                  <span className="text-[14px] font-medium text-[#333] leading-[1.4] px-1 whitespace-pre-line">{t.course}</span>
                </div>
                <div className="sm:w-[18.5%] px-1 py-1.5 sm:py-2.5">
                  <div className="px-1">
                    <span className={`${s.bg} ${s.text} text-[12px] font-normal leading-[1.4] px-2 py-1 rounded-full`}>
                      {t.status}
                    </span>
                  </div>
                </div>
                <div className="sm:w-[18.7%] px-1 py-1.5 sm:py-2.5">
                  <span className="text-[14px] font-medium text-[#333] leading-[1.4] px-1">{t.amount}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentTransactions
