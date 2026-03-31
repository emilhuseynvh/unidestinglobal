import LiveTutoringHero from "../components/LiveTutoring/LiveTutoringHero"
import HowItWorks from "../components/LiveTutoring/HowItWorks"
import TutoringFeatures from "../components/LiveTutoring/TutoringFeatures"
import VirtualClassroom from "../components/LiveTutoring/VirtualClassroom"
import FeaturedTutors from "../components/LiveTutoring/FeaturedTutors"
import TutoringFAQ from "../components/LiveTutoring/TutoringFAQ"
import TutoringCTA from "../components/LiveTutoring/TutoringCTA"

const LiveTutoring = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LiveTutoringHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
        <HowItWorks />
        <TutoringFeatures />
        <VirtualClassroom />
        <FeaturedTutors />
        <TutoringFAQ />
        <TutoringCTA />
      </div>
    </div>
  )
}

export default LiveTutoring
