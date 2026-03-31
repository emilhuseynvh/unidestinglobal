const fees = [
  { label: "Annual tuition", domestic: "$9,250", international: "$38,000" },
  { label: "College fee", domestic: "$3,500", international: "$3,500" },
  { label: "Living costs", domestic: "$12,000", international: "$15,000" },
  { label: "Materials & books", domestic: "$500", international: "$500" },
  { label: "Health insurance", domestic: "Included", international: "$800" },
  { label: "Total (estimated)", domestic: "$25,250", international: "$57,800" },
]

const ProgramFees = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[20px] font-semibold text-black leading-7">Fees & Living Cost</h2>
      <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#fafafa]">
              <th className="text-left px-5 py-3 text-[14px] font-semibold text-[#333] leading-5">Item</th>
              <th className="text-left px-5 py-3 text-[14px] font-semibold text-[#333] leading-5">Domestic</th>
              <th className="text-left px-5 py-3 text-[14px] font-semibold text-[#333] leading-5">International</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, i) => (
              <tr key={fee.label} className={`border-t border-[#e9eaeb] ${i === fees.length - 1 ? "bg-[#fafafa] font-semibold" : ""}`}>
                <td className="px-5 py-3 text-[14px] text-[#333] leading-5">{fee.label}</td>
                <td className="px-5 py-3 text-[14px] text-[#333] leading-5">{fee.domestic}</td>
                <td className="px-5 py-3 text-[14px] text-[#333] leading-5">{fee.international}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProgramFees
