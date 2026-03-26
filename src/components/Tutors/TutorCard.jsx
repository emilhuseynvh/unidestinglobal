import { Link } from "react-router"

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4.667 1.167V2.917M9.333 1.167V2.917M1.75 5.542h10.5M2.917 2.333h8.166c.645 0 1.167.522 1.167 1.167v8.167c0 .644-.522 1.166-1.167 1.166H2.917c-.644 0-1.167-.522-1.167-1.166V3.5c0-.645.523-1.167 1.167-1.167z" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.25" stroke="#717680" strokeWidth="1.2"/><path d="M7 4.083V7l1.75.875" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const RepeatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 1.167l1.75 1.75-1.75 1.75M1.75 6.417V5.25a2.333 2.333 0 012.333-2.333h8.167M3.5 12.833l-1.75-1.75 1.75-1.75M12.25 7.583V8.75a2.333 2.333 0 01-2.333 2.333H1.75" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.917 12.25v-1.167a2.333 2.333 0 00-2.334-2.333H2.917a2.333 2.333 0 00-2.334 2.333v1.167M5.25 6.417A2.333 2.333 0 105.25 1.75a2.333 2.333 0 000 4.667zM13.417 12.25v-1.167a2.333 2.333 0 00-1.75-2.258M9.333 1.825a2.334 2.334 0 010 4.519" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const TutorCard = ({ tutor }) => {
  return (
    <div className="border border-[#e9eaeb] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-[140px] md:w-[160px] h-[180px] sm:h-auto rounded-lg overflow-hidden shrink-0 bg-[#f5f5f5]">
        <img src={tutor.image} alt={tutor.name} className="size-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#181d27] leading-6">{tutor.name}</h3>
          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.167l1.802 3.652 4.031.589-2.916 2.842.688 4.014L7 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L7 1.168z" fill="#F79009" stroke="#F79009" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-[13px] font-medium text-[#414651]">{tutor.rating}</span>
          </div>
        </div>

        <p className="text-[13px] sm:text-[14px] text-[#535862] leading-5 line-clamp-2">{tutor.description}</p>

        <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
          {tutor.badges.map((badge, i) => (
            <span key={i} className="px-2 py-0.5 border border-[#007aff] rounded text-[12px] font-medium text-[#007aff]">
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] sm:text-[13px] text-[#717680] mt-1">
          <span className="flex items-center gap-1.5"><CalendarIcon />{tutor.days}</span>
          <span className="flex items-center gap-1.5"><ClockIcon />{tutor.time}</span>
          <span className="flex items-center gap-1.5"><RepeatIcon />{tutor.frequency}</span>
          <span className="flex items-center gap-1.5"><UsersIcon />{tutor.students}</span>
        </div>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 sm:gap-4 shrink-0">
        <div className="flex items-baseline gap-1">
          <span className="text-[20px] sm:text-[22px] font-semibold text-[#181d27]">${tutor.price}</span>
          <span className="text-[13px] text-[#717680]">/ 1 hour</span>
        </div>
        <Link to={`/tutors/${tutor.id}`} className="bg-[#007aff] text-white text-[14px] font-semibold leading-5 px-5 py-2.5 rounded-full hover:bg-[#0066d6] transition-colors whitespace-nowrap text-center">
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default TutorCard
