import { useState } from "react"

const stats = [
  {
    iconBg: "bg-[#dff3ff]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
      <path d="M5.00005 0C5.46029 0 5.83339 0.373096 5.83339 0.833333V2.118C6.38152 2.16835 6.88244 2.27848 7.39063 2.48004C8.12478 2.77122 8.82342 3.23397 9.6698 3.87484C10.0367 4.15268 10.1089 4.67535 9.8311 5.04227C9.55327 5.40918 9.03059 5.4814 8.66368 5.20357C7.84337 4.58243 7.29201 4.23389 6.77616 4.0293C6.27977 3.83242 5.76742 3.74997 5.00005 3.74997C3.8684 3.74997 3.01478 4.01663 2.46802 4.41262C1.94622 4.79053 1.66671 5.30716 1.66671 5.96948C1.66671 6.78835 2.05941 7.2731 2.69876 7.631C3.39078 8.01838 4.29843 8.20489 5.13706 8.34466C5.9651 8.48266 7.14079 8.7024 8.11545 9.24799C9.14276 9.82306 10.0001 10.798 10.0001 12.3638C10.0001 13.5825 9.44624 14.5923 8.5097 15.2705C7.78752 15.7935 6.86566 16.1026 5.83339 16.2085V17.5C5.83339 17.9602 5.46029 18.3333 5.00005 18.3333C4.53982 18.3333 4.16672 17.9602 4.16672 17.5V16.2153C3.61858 16.1649 3.11765 16.0548 2.60946 15.8532C1.87532 15.562 1.17668 15.0993 0.330319 14.4584C-0.0365972 14.1805 -0.108813 13.6579 0.169019 13.291C0.446852 12.924 0.969524 12.8518 1.33644 13.1297C2.15675 13.7508 2.70811 14.0994 3.22397 14.304C3.72036 14.5009 4.23271 14.5833 5.00005 14.5833C6.13171 14.5833 6.98533 14.3167 7.5321 13.9207C8.0539 13.5428 8.3334 13.0261 8.3334 12.3638C8.3334 11.545 7.94071 11.0602 7.30135 10.7023C6.60934 10.3149 5.70169 10.1284 4.86306 9.98865C4.03501 9.85064 2.85933 9.63091 1.88467 9.08532C0.857355 8.51025 4.61342e-05 7.53531 4.61342e-05 5.96948C4.61342e-05 4.75084 0.553875 3.74105 1.49041 3.06278C2.21258 2.53976 3.13444 2.2307 4.16672 2.12485V0.833333C4.16672 0.373096 4.53982 0 5.00005 0Z" fill="#98B0E9" />
    </svg>,
    value: "$842",
    label: "Total Spent (2026)",
    badge: "+18%",
    sparkColor: "#93c5fd",
    sparkPath: "M0 30 C30 28, 60 26, 90 24 C120 22, 140 20, 160 18 C180 16, 200 10, 220 6 C230 4, 234 2, 236 2",
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
      <path d="M5.41667 13.5417C5.41667 13.6567 5.50994 13.75 5.625 13.75H13.3333V16.6667H2.70833C1.90292 16.6667 1.25 16.0137 1.25 15.2083C1.25 14.4029 1.90292 13.75 2.70833 13.75H3.95833C4.07339 13.75 4.16667 13.6567 4.16667 13.5417V0.208333C4.16667 0.0932738 4.07339 0 3.95833 0H3.54167C1.58566 0 0 1.58566 0 3.54167V15.2083C0 16.7041 1.21256 17.9167 2.70833 17.9167H15.625C15.9702 17.9167 16.25 17.6368 16.25 17.2917C16.25 16.9465 15.9702 16.6667 15.625 16.6667H14.5833V13.7386C15.5208 13.6349 16.25 12.8401 16.25 11.875V1.875C16.25 0.839466 15.4105 0 14.375 0H5.625C5.50994 0 5.41667 0.093274 5.41667 0.208333V13.5417Z" fill="#5CAAFF" />
    </svg>,
    value: "18",
    label: "Sessions Purchased",
    badge: "+15%",
    sparkColor: "#86efac",
    sparkPath: "M0 28 C30 26, 50 24, 80 20 C100 18, 120 22, 140 16 C160 12, 180 14, 200 8 C220 4, 230 6, 236 4",
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.37484 3.48082C9.37484 3.41852 9.34712 3.35928 9.29821 3.32071C8.46071 2.66018 7.41732 2.29102 6.3299 2.29102C4.79587 2.29102 3.29615 2.74509 2.01976 3.59602L1.77223 3.76104C1.31571 4.06539 1.0415 4.57775 1.0415 5.12641V16.0623C1.0415 16.9976 2.08397 17.5555 2.86224 17.0367C3.83608 16.3875 4.9803 16.041 6.15071 16.041H6.54101C7.28949 16.041 8.01568 16.2958 8.60015 16.7633L9.23945 17.2748C9.29401 17.3184 9.37484 17.2796 9.37484 17.2097V3.48082Z" fill="#409B3F" />
      <path d="M10.7602 17.2748C10.7057 17.3184 10.6248 17.2796 10.6248 17.2097V3.48082C10.6248 3.41853 10.6526 3.35928 10.7015 3.32071C11.539 2.66018 12.5823 2.29102 13.6698 2.29102C15.2038 2.29102 16.7035 2.74509 17.9799 3.59602L18.2274 3.76104C18.684 4.06539 18.9582 4.57775 18.9582 5.12641V16.0623C18.9582 16.9976 17.9157 17.5555 17.1374 17.0367C16.1636 16.3875 15.0194 16.041 13.849 16.041H13.4587C12.7102 16.041 11.984 16.2958 11.3995 16.7633L10.7602 17.2748Z" fill="#409B3F" />
    </svg>,
    value: "3",
    label: "Courses Enrolled",
    badge: "+15%",
    sparkColor: "#93c5fd",
    sparkPath: "M0 30 C20 28, 40 20, 60 22 C80 24, 100 14, 120 16 C140 18, 160 10, 180 8 C200 6, 220 4, 236 6",
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.50016 1.66732C2.50016 1.20708 2.12707 0.833984 1.66683 0.833984C1.20659 0.833984 0.833496 1.20708 0.833496 1.66732V15.4173C0.833496 17.4884 2.51243 19.1673 4.5835 19.1673H18.3335C18.7937 19.1673 19.1668 18.7942 19.1668 18.334C19.1668 17.8737 18.7937 17.5007 18.3335 17.5007H4.5835C3.4329 17.5007 2.50016 16.5679 2.50016 15.4173V1.66732Z" fill="#E4A000" />
      <path d="M18.0894 7.25657C18.4149 6.93114 18.4149 6.4035 18.0894 6.07806C17.764 5.75263 17.2363 5.75263 16.9109 6.07806L12.9168 10.0721L10.1728 7.32806C9.84732 7.00263 9.31968 7.00263 8.99424 7.32806L4.41091 11.9114C4.08547 12.2368 4.08547 12.7645 4.41091 13.0899C4.73634 13.4153 5.26398 13.4153 5.58942 13.0899L9.5835 9.09583L12.3276 11.8399C12.653 12.1653 13.1806 12.1653 13.5061 11.8399L18.0894 7.25657Z" fill="#E4A000" />
    </svg>,
    value: "$68",
    label: "Discounts Saved",
    badge: "+$40",
    sparkColor: "#fde68a",
    sparkPath: "M0 30 C30 28, 60 24, 90 22 C120 18, 150 16, 180 12 C200 8, 220 6, 236 4",
  },
]

const transactions = [
  { icon: "calendar", title: "IB Biology HL — Lesson 14", subtitle: "Leyla Mammadova", date: "Mar 18", type: "Session", typeColor: "bg-[rgba(6,177,241,0.12)] text-[#008ece]", amount: "-$20", amountColor: "text-[#0a0c11]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
  { icon: "book", title: "IB Biology HL Course", subtitle: "86 students enrolled", date: "Mar 15", type: "Course", typeColor: "bg-[rgba(167,139,250,0.12)] text-[#a78bfa]", amount: "-$49", amountColor: "text-[#0a0c11]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
  { icon: "video", title: "AP Biology Group — Session 7", subtitle: "12 attendees", date: "Mar 10", type: "Live", typeColor: "bg-[rgba(237,64,48,0.12)] text-[#df2917]", amount: "-$25", amountColor: "text-[#0a0c11]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
  { icon: "dollar", title: "Refund — Mar 7", subtitle: "Visa •••• 4211", date: "Mar 7", type: "Refund", typeColor: "bg-[rgba(245,166,35,0.12)] text-[#f5a623]", amount: "+$20", amountColor: "text-[#409b3f]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
  { icon: "calendar", title: "IB Biology HL — Lesson 13", subtitle: "Leyla Mammadova", date: "Mar 4", type: "Session", typeColor: "bg-[rgba(6,177,241,0.12)] text-[#008ece]", amount: "-$20", amountColor: "text-[#0a0c11]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
  { icon: "book", title: "GCSE Biology Foundation Course", subtitle: "44 students enrolled", date: "Feb 28", type: "Course", typeColor: "bg-[rgba(167,139,250,0.12)] text-[#a78bfa]", amount: "-$39", amountColor: "text-[#0a0c11]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
  { icon: "calendar", title: "IB Biology HL — Lesson 12 (refund)", subtitle: "Sara Rzayeva", date: "Feb 24", type: "Session", typeColor: "bg-[rgba(6,177,241,0.12)] text-[#008ece]", amount: "+$20", amountColor: "text-[#409b3f]", status: "Refunded", statusColor: "bg-[rgba(245,166,35,0.12)] text-[#f5a623]" },
  { icon: "dollar", title: "Payment — Feb 21", subtitle: "Visa •••• 4211", date: "Feb 21", type: "Payment", typeColor: "bg-[rgba(245,166,35,0.12)] text-[#f5a623]", amount: "-$120", amountColor: "text-[#0a0c11]", status: "Paid", statusColor: "bg-[rgba(64,155,63,0.12)] text-[#338732]" },
]

const paymentMethods = [
  { brand: "Visa", number: "•••• 4211", expiry: "Expires 06/2028", isDefault: true },
  { brand: "Mastercard", number: "•••• 8734", expiry: "Expires 12/2027", isDefault: false },
  { brand: "Visa", number: "•••• 9102", expiry: "Expires 03/2029", isDefault: false },
]

const IconMap = ({ type }) => {
  switch (type) {
    case "calendar":
      return (
        <div className="w-8 h-8 rounded-full bg-[#f2f2f4] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2.667" width="12" height="11.333" rx="1.5" stroke="#5b616d" strokeWidth="1.2" /><path d="M5.333 1.333v2.667M10.667 1.333v2.667M2 6h12" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" /></svg>
        </div>
      )
    case "book":
      return (
        <div className="w-8 h-8 rounded-full bg-[#f2f2f4] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 11V4a1 1 0 011-1h3a2.5 2.5 0 012.5 2.5V14M14.5 11V4a1 1 0 00-1-1h-3A2.5 2.5 0 008 5.5V14" stroke="#5b616d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      )
    case "video":
      return (
        <div className="w-8 h-8 rounded-full bg-[#f2f2f4] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3" width="9" height="9.5" rx="1.5" stroke="#5b616d" strokeWidth="1.1" /><path d="M10.5 6.5L14 4.5V11.5L10.5 9.5V6.5Z" stroke="#5b616d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      )
    case "dollar":
      return (
        <div className="w-8 h-8 rounded-full bg-[#f2f2f4] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333v13.334M10.667 4H6.667a2 2 0 000 4h2.666a2 2 0 010 4H5.333" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      )
    default:
      return null
  }
}

const StudentTransactions = () => {
  const [selectedPayment, setSelectedPayment] = useState(0)

  return (
    <div className="px-6 lg:px-10 py-6 sm:py-8 flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Transactions</h1>
          <p className="text-sm text-[#5b616d] leading-5">Track your spending, payments and financial overview</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] shrink-0 self-start">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col justify-between min-h-[148px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}>{s.icon}</div>
                <div className="bg-[#e3f6e2] flex items-center gap-[3px] px-[7px] py-[3px] rounded-[20px]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[11px] font-semibold text-[#338732] leading-none">{s.badge}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{s.value}</span>
                <span className="text-xs text-[#5b616d] leading-4">{s.label}</span>
              </div>
            </div>
            <svg className="w-full h-9" viewBox="0 0 236 36" fill="none" preserveAspectRatio="none">
              <path d={`${s.sparkPath} L236 36 L0 36 Z`} fill={s.sparkColor} fillOpacity="0.3" />
              <path d={s.sparkPath} stroke={s.sparkColor} strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.06]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.0001 1C12.5523 1 13.0001 1.44772 13.0001 2V3.5416C13.6578 3.60202 14.2589 3.73417 14.8688 3.97604C15.7497 4.32546 16.5881 4.88076 17.6038 5.64981C18.0441 5.98321 18.1307 6.61042 17.7973 7.05072C17.4639 7.49102 16.8367 7.57768 16.3964 7.24428C15.412 6.49891 14.7504 6.08067 14.1314 5.83516C13.5357 5.5989 12.9209 5.49997 12.0001 5.49997C10.6421 5.49997 9.61774 5.81996 8.96162 6.29514C8.33546 6.74863 8.00006 7.36859 8.00006 8.16337C8.00006 9.14602 8.47129 9.72772 9.23852 10.1572C10.0689 10.6221 11.1581 10.8459 12.1645 11.0136C13.1581 11.1792 14.5689 11.4429 15.7385 12.0976C16.9713 12.7877 18.0001 13.9576 18.0001 15.8366C18.0001 17.299 17.3355 18.5107 16.2116 19.3246C15.345 19.9523 14.2388 20.3231 13.0001 20.4501V22C13.0001 22.5523 12.5523 23 12.0001 23C11.4478 23 11.0001 22.5523 11.0001 22V20.4584C10.3423 20.3979 9.74118 20.2658 9.13135 20.0239C8.25038 19.6744 7.41201 19.1191 6.39638 18.3501C5.95608 18.0167 5.86942 17.3895 6.20282 16.9491C6.53622 16.5089 7.16343 16.4222 7.60373 16.7556C8.5881 17.501 9.24973 17.9192 9.86877 18.1648C10.4644 18.401 11.0792 18.5 12.0001 18.5C13.358 18.5 14.3824 18.18 15.0385 17.7048C15.6647 17.2513 16.0001 16.6314 16.0001 15.8366C16.0001 14.854 15.5289 14.2722 14.7616 13.8428C13.9312 13.3779 12.842 13.1541 11.8357 12.9864C10.842 12.8208 9.43119 12.5571 8.2616 11.9024C7.02883 11.2123 6.00006 10.0424 6.00006 8.16337C6.00006 6.701 6.66465 5.48926 7.78849 4.67534C8.6551 4.04771 9.76133 3.67684 11.0001 3.54982V2C11.0001 1.44772 11.4478 1 12.0001 1Z" fill="#5CAAFF" />
          </svg>
          <span className="text-base font-semibold text-[#0a0c11] leading-6">Transactions</span>
        </div>

        <div className="hidden sm:grid bg-[#f9f9fa] border-b border-black/[0.03] h-[34px] grid-cols-[1fr_100px_100px_100px_80px] items-center px-4">
          <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Description</span>
          <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Date</span>
          <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Type</span>
          <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Amount</span>
          <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Status</span>
        </div>

        <div>
          {transactions.map((tx, i) => (
            <div key={i} className="flex flex-col gap-3 p-4 border-b border-black/[0.03] sm:grid sm:grid-cols-[1fr_100px_100px_100px_80px] sm:items-center sm:h-[57px] sm:gap-0 sm:p-0 sm:px-4">
              <div className="flex items-center gap-0 sm:px-1">
                <div className="w-[42px] pr-[10px] shrink-0">
                  <IconMap type={tx.icon} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#0a0c11] leading-5">{tx.title}</span>
                  <span className="text-xs text-[#5b616d] leading-4">{tx.subtitle}</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:block sm:px-1">
                <span className="text-xs text-[#8c929c] sm:hidden">Date:</span>
                <span className="text-xs text-[#8c929c] leading-4">{tx.date}</span>
              </div>
              <div className="flex items-center justify-between sm:block sm:px-1">
                <span className="text-xs text-[#8c929c] sm:hidden">Type:</span>
                <span className={`${tx.typeColor} h-5 px-[7px] rounded-[20px] text-[10.5px] font-bold inline-flex items-center`}>{tx.type}</span>
              </div>
              <div className="flex items-center justify-between sm:block sm:px-1">
                <span className="text-xs text-[#8c929c] sm:hidden">Amount:</span>
                <span className={`text-sm font-semibold leading-4 ${tx.amountColor}`}>{tx.amount}</span>
              </div>
              <div className="flex items-center justify-between sm:block sm:px-1">
                <span className="text-xs text-[#8c929c] sm:hidden">Status:</span>
                <span className={`${tx.statusColor} h-6 px-1.5 rounded-lg text-xs font-medium inline-flex items-center`}>{tx.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.06]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.2679 3.25H17.7321C18.5449 3.24999 19.2006 3.24999 19.7315 3.29336C20.2781 3.33803 20.7582 3.43239 21.2025 3.65873C21.9081 4.01825 22.4817 4.59193 22.8413 5.29754C23.0676 5.74176 23.162 6.2219 23.2066 6.76853C23.2423 7.20524 23.2486 7.72633 23.2498 8.34989C23.25 8.48973 23.2501 8.55964 23.2229 8.61322C23.199 8.66029 23.1607 8.6987 23.1136 8.72269C23.0601 8.75 22.9901 8.75 22.85 8.75H1.15C1.00992 8.75 0.939879 8.75 0.886353 8.72269C0.839325 8.6987 0.800985 8.66029 0.777076 8.61322C0.749863 8.55964 0.749988 8.48973 0.750239 8.34989C0.751357 7.72633 0.757684 7.20524 0.793364 6.76853C0.838026 6.2219 0.932386 5.74176 1.15873 5.29754C1.51825 4.59193 2.09193 4.01825 2.79754 3.65873C3.24176 3.43239 3.7219 3.33803 4.26853 3.29336C4.79944 3.24999 5.45507 3.24999 6.2679 3.25Z" fill="#FFC30A" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15 10.25C1.00999 10.25 0.93998 10.25 0.886503 10.2772C0.839462 10.3012 0.801217 10.3395 0.777249 10.3865C0.75 10.44 0.75 10.51 0.75 10.65V15.2321C0.749993 16.0449 0.749987 16.7006 0.793364 17.2315C0.838026 17.7781 0.932386 18.2582 1.15873 18.7025C1.51825 19.4081 2.09193 19.9818 2.79754 20.3413C3.24176 20.5676 3.7219 20.662 4.26853 20.7066C4.79944 20.75 5.45505 20.75 6.26788 20.75H17.7321C18.545 20.75 19.2006 20.75 19.7315 20.7066C20.2781 20.662 20.7582 20.5676 21.2025 20.3413C21.9081 19.9818 22.4817 19.4081 22.8413 18.7025C23.0676 18.2582 23.162 17.7781 23.2066 17.2315C23.25 16.7005 23.25 16.0449 23.25 15.232V10.65C23.25 10.51 23.25 10.44 23.2228 10.3865C23.1988 10.3395 23.1605 10.3012 23.1135 10.2772C23.06 10.25 22.99 10.25 22.85 10.25H1.15ZM10.25 15.5C10.25 15.0858 9.91421 14.75 9.5 14.75H5C4.58579 14.75 4.25 15.0858 4.25 15.5C4.25 15.9142 4.58579 16.25 5 16.25H9.5C9.91421 16.25 10.25 15.9142 10.25 15.5ZM14 16.25C14.4142 16.25 14.75 15.9142 14.75 15.5C14.75 15.0858 14.4142 14.75 14 14.75H12.5C12.0858 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 12.0858 16.25 12.5 16.25H14Z" fill="#FFC30A" />
          </svg>
          <span className="text-base font-semibold text-[#0a0c11] leading-6">Payment method</span>
        </div>

        <div className="p-5 flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-1 lg:w-[280px] shrink-0">
            <span className="text-sm font-medium text-[#0a0c11] leading-5">Your cards</span>
            <span className="text-sm text-[#5b616d] leading-5">Select a default payment method</span>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {paymentMethods.map((card, i) => (
              <div
                key={i}
                onClick={() => setSelectedPayment(i)}
                className={`border rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-colors ${selectedPayment === i ? "border-[#007aff] bg-[rgba(0,122,255,0.02)]" : "border-black/[0.06]"
                  }`}
              >
                <div className="w-[46px] h-8 rounded-md border border-black/[0.06] bg-[#f9f9fa] flex items-center justify-center shrink-0">
                  {card.brand === "Visa" ? (
                    <svg width="28" height="10" viewBox="0 0 28 10" fill="none"><path d="M10.2 0.5L6.7 9.5H4.4L2.7 2.3C2.6 1.8 2.4 1.6 2 1.4C1.3 1.1 0.5 0.8 0 0.6L0.1 0.5H3.7C4.2 0.5 4.6 0.8 4.7 1.4L5.5 5.8L7.8 0.5H10.2ZM18.5 6.5C18.5 4.1 15.1 3.9 15.1 2.9C15.1 2.6 15.4 2.2 16 2.1C16.9 2 17.9 2.2 18.7 2.5L19.1 0.8C18.3 0.5 17.3 0.3 16.3 0.3C14 0.3 12.4 1.5 12.4 3.1C12.4 4.4 13.5 5 14.3 5.5C15.2 5.9 15.5 6.2 15.5 6.6C15.5 7.2 14.8 7.5 14.2 7.5C13.2 7.5 12.3 7.2 11.6 6.9L11.2 8.6C12 8.9 13 9.1 14.1 9.1C16.6 9.1 18.5 8 18.5 6.5ZM24.2 9.5H26.3L24.5 0.5H22.6C22.2 0.5 21.8 0.7 21.6 1.1L18.2 9.5H20.5L21 8.2H23.8L24.2 9.5ZM21.6 6.5L22.8 3.2L23.5 6.5H21.6ZM12 0.5L10.2 9.5H8L9.8 0.5H12Z" fill="#1A1F71" /></svg>
                  ) : (
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none"><circle cx="9.5" cy="8" r="7" fill="#EB001B" fillOpacity="0.8" /><circle cx="16.5" cy="8" r="7" fill="#F79E1B" fillOpacity="0.8" /><path d="M13 2.36a7 7 0 010 11.28 7 7 0 000-11.28z" fill="#FF5F00" fillOpacity="0.9" /></svg>
                  )}
                </div>

                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#0a0c11] leading-5">{card.brand} ending in {card.number.slice(-4)}</span>
                    <span className="text-sm text-[#5b616d] leading-5">{card.expiry}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm font-medium text-[#007aff] hover:underline">Set as default</button>
                    <button className="text-sm font-medium text-[#5b616d] hover:underline">Edit</button>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${selectedPayment === i ? "border-[#007aff]" : "border-[#d0d5dd]"}`}>
                  {selectedPayment === i && <div className="w-2 h-2 rounded-full bg-[#007aff]" />}
                </div>
              </div>
            ))}

            <button className="text-sm font-medium text-[#007aff] flex items-center gap-1.5 self-start hover:underline">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.333v9.334M3.333 8h9.334" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>
              Add new payment method
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentTransactions
