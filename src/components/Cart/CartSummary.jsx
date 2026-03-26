const CartSummary = ({ items }) => {
  const total = items.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2)

  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 w-full">
      <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#333] leading-7 sm:leading-8">Summary</h3>

      <div className="flex flex-col gap-5 sm:gap-7 p-2 sm:p-3">
        <div className="flex flex-col gap-3 sm:gap-4 text-[14px] sm:text-[16px] text-[#333] leading-[1.4]">
          {items.map((item) => (
            <div key={item.id} className="flex items-start justify-between gap-2">
              <span className="font-normal truncate">{item.title}</span>
              <span className="font-normal shrink-0">${item.price}</span>
            </div>
          ))}
          <div className="flex items-start justify-between">
            <span className="text-[16px] sm:text-[20px] font-medium leading-[1.4]">Original price</span>
            <span className="text-[16px] sm:text-[20px] font-medium leading-[1.4]">${total}</span>
          </div>
        </div>

        <div className="h-px bg-[#e6e6e6]" />

        <div className="flex items-center justify-between">
          <span className="text-[16px] sm:text-[20px] font-semibold text-[#333] leading-[1.4]">Total</span>
          <span className="text-[22px] sm:text-[28px] font-semibold text-[#333] leading-[1.4]">${total}</span>
        </div>

        <button className="w-full h-12 bg-[#007aff] rounded-2xl text-white text-[16px] font-medium leading-[1.4] hover:bg-[#0066d6] transition-colors">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartSummary
