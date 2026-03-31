import GuideHeader from "../components/GuideHeader"
import Footer from "../components/Footer"

const tocItems = [
  "What this Privacy Policy Covers",
  "Categories of Personal Data We Collect",
  "Categories of Sources of Personal Data",
  "Our Commercial or Business Purposes for Collecting Personal Data",
  "Changes to this Privacy Policy",
  "Contact Information",
]

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="px-4 sm:px-6 pt-6">
        <div className="bg-[#f7f7f7] rounded-[32px] overflow-hidden">
          <div className="px-4 sm:px-16">
            <GuideHeader />
          </div>
          <div className="flex flex-col items-center gap-6 py-16 sm:py-24 px-4 text-center">
            <h1 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.4]">
              Privacy & Policy
            </h1>
            <p className="text-[18px] sm:text-[20px] font-normal text-[#4d4d4d] leading-[1.4] max-w-[600px]">
              A global education ecosystem connecting students and tutors worldwide through one platform.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="hidden lg:flex flex-col gap-3 w-[260px] shrink-0 sticky top-6 self-start">
            <h4 className="text-[20px] font-semibold text-[#0d0d12] leading-[1.4]">Table of content</h4>
            <div className="flex flex-col gap-3 px-2">
              {tocItems.map((item, i) => (
                <ol key={i} start={i + 1} className={`list-decimal ml-6 text-[16px] ${i === 0 ? "font-medium text-[#007aff]" : "font-normal text-[#4d4d4d]"}`}>
                  <li><span className="ml-1 cursor-pointer hover:text-[#007aff] transition-colors leading-[1.4]">{item}</span></li>
                </ol>
              ))}
            </div>
          </aside>

          <article className="flex-1 min-w-0 max-w-[720px] flex flex-col text-[18px] font-normal text-[#535862] leading-7">
            <p className="mb-5">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            </p>
            <p className="mb-5">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            </p>

            <h2 className="text-[30px] font-semibold text-[#181d27] leading-[38px] mt-10 mb-5">
              What information do we collect?
            </h2>
            <p className="mb-5">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            </p>
            <p className="mb-5">
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet.
            </p>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </p>

            <h2 className="text-[30px] font-semibold text-[#181d27] leading-[38px] mt-10 mb-5">
              How do we use your information?
            </h2>
            <p className="mb-5">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            </p>
            <p className="mb-5">
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.
            </p>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
            </p>

            <h3 className="text-[24px] font-semibold text-[#181d27] leading-8 mt-8 mb-4">
              Do we use cookies and other tracking technologies?
            </h3>
            <p>
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
            </p>

            <h3 className="text-[24px] font-semibold text-[#181d27] leading-8 mt-8 mb-4">
              How long do we keep your information?
            </h3>
            <p>
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
            </p>

            <h3 className="text-[24px] font-semibold text-[#181d27] leading-8 mt-8 mb-4">
              How do we keep your information safe?
            </h3>
            <p>
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
            </p>

            <h2 className="text-[30px] font-semibold text-[#181d27] leading-[38px] mt-10 mb-5">
              What are your privacy rights?
            </h2>
            <p>
              Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
            </p>

            <h3 className="text-[24px] font-semibold text-[#181d27] leading-8 mt-8 mb-4">
              How can you contact us about this policy?
            </h3>
            <p className="mb-5">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
            </p>
            <ol className="list-decimal ml-7 flex flex-col gap-1">
              <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
              <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
              <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
            </ol>
          </article>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
