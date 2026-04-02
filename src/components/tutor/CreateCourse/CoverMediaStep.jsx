import { useState } from "react"

const CoverMediaStep = ({ onNext }) => {
  const [showTip, setShowTip] = useState(true)
  const [videoUrl, setVideoUrl] = useState("")

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 2 of 5 — Cover & Media</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Give your course a visual identity</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">A strong cover increases click-through rate. Choose an emoji cover or upload a custom image.</p>
          </div>
          <button
            onClick={onNext}
            className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Best Practice Toast */}
      {showTip && (
        <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-3xl p-3">
          <div className="bg-white rounded-2xl p-3 flex gap-2 items-start shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)]">
            <div className="w-8 h-8 rounded-full bg-[rgba(0,122,255,0.12)] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#007aff" strokeWidth="1.5" /><path d="M10 9v4M10 7h.008" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div className="flex-1 min-w-0 px-1">
              <p className="text-base font-medium text-[#0a0c11] leading-6">Best practice:</p>
              <p className="text-sm text-[#8c929c] leading-5">Use a cover that reflects the subject. Bold, high-contrast visuals get 2× more clicks. Avoid cluttered text on covers.</p>
            </div>
            <button onClick={() => setShowTip(false)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] backdrop-blur-[12px]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25l-7.5 7.5M5.25 5.25l7.5 7.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Cover Upload */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Cover</span>
        <div className="bg-[#f2f2f4] border border-dashed border-black/[0.06] rounded-xl px-4 py-8 flex flex-col items-center gap-4">
          <div className="w-[88px] h-[88px] rounded-full bg-[#e8efff] flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.719 2.08398H8.94636C7.70791 2.08397 6.70261 2.08396 5.88723 2.15058C5.04565 2.21934 4.29687 2.36525 3.60107 2.71978C2.50346 3.27905 1.61107 4.17143 1.05181 5.26905C0.697283 5.96485 0.551372 6.71363 0.482612 7.55521C0.415993 8.37059 0.416003 9.37586 0.416016 10.6143V22.7203C0.416003 23.9588 0.415993 24.964 0.482613 25.7794C0.551372 26.621 0.697284 27.3698 1.05181 28.0656C1.61107 29.1632 2.50346 30.0556 3.60107 30.6149C4.29687 30.9694 5.04565 31.1153 5.88723 31.1841C6.70261 31.2507 7.70802 31.2507 8.94647 31.2506H19.4898C19.9835 31.2506 20.431 30.96 20.6318 30.5089C20.8325 30.0578 20.7489 29.5308 20.4184 29.164C19.5443 28.1938 19.0084 26.9266 18.9875 25.5488C18.9827 25.2305 18.8565 24.9259 18.6348 24.6974C16.5653 22.5641 16.5653 19.1038 18.6348 16.9706C18.8565 16.742 18.9827 16.4375 18.9875 16.1192C19.0326 13.1473 21.4794 10.7005 24.4512 10.6555C24.7695 10.6506 25.0741 10.5245 25.3026 10.3028C27.4359 8.23327 30.8962 8.23327 33.0294 10.3028C33.258 10.5245 33.5625 10.6506 33.8808 10.6555C34.1853 10.6601 34.4836 10.6898 34.7741 10.7425C35.14 10.8088 35.5165 10.7088 35.8013 10.4696C36.086 10.2304 36.2494 9.87682 36.2472 9.50494C36.2365 7.74357 36.1894 6.39923 35.6136 5.26904C35.0543 4.17143 34.1619 3.27904 33.0643 2.71978C32.3685 2.36525 31.6197 2.21934 30.7781 2.15058C29.9627 2.08396 28.9575 2.08397 27.719 2.08398ZM7.49935 14.584H16.666C17.3564 14.584 17.916 14.0243 17.916 13.334C17.916 12.6436 17.3564 12.084 16.666 12.084H7.49935C6.80899 12.084 6.24935 12.6436 6.24935 13.334C6.24935 14.0243 6.80899 14.584 7.49935 14.584ZM13.7493 20.0007C13.7493 19.3103 13.1897 18.7507 12.4993 18.7507H7.49935C6.80899 18.7507 6.24935 19.3103 6.24935 20.0007C6.24935 20.691 6.80899 21.2507 7.49935 21.2507H12.4993C13.1897 21.2507 13.7493 20.691 13.7493 20.0007Z" fill="#98B0E9" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.2493 24.5879C37.607 26.4174 36.5648 28.0902 35.0075 28.7215L37.0405 36.3452C37.1672 36.8203 37.0036 37.3256 36.6224 37.6362C36.2413 37.9469 35.7135 38.0053 35.2737 37.7854L33.9736 37.1353C31.941 36.119 31.1381 35.7302 30.3185 35.5764C29.5568 35.4335 28.7752 35.4335 28.0135 35.5764C27.194 35.7302 26.391 36.119 24.3585 37.1353L23.0584 37.7854C22.6186 38.0053 22.0907 37.9469 21.7096 37.6362C21.3285 37.3256 21.1649 36.8203 21.2916 36.3452L23.3245 28.7215C21.7672 28.0902 20.7251 26.4174 21.0827 24.5879L21.169 24.1465L20.7959 23.8953C18.6227 22.4329 18.6227 19.2351 20.7959 17.7726L21.169 17.5215L21.0827 17.0801C20.5802 14.5094 22.8414 12.2482 25.4121 12.7507L25.8535 12.837L26.1047 12.4638C27.5671 10.2907 30.7649 10.2907 32.2274 12.4638L32.4785 12.837L32.9199 12.7507C35.4906 12.2482 37.7519 14.5094 37.2493 17.0801L37.163 17.5215L37.5362 17.7726C39.7093 19.2351 39.7093 22.4329 37.5362 23.8953L37.163 24.1465L37.2493 24.5879ZM26.1047 29.2041L25.8744 28.862L24.4212 34.3116C25.6711 33.6985 26.5879 33.3003 27.5525 33.1193C28.6189 32.9192 29.7131 32.9192 30.7795 33.1193C31.7441 33.3003 32.6609 33.6985 33.9108 34.3116L32.4576 28.862L32.2274 29.2041C30.7649 31.3773 27.5671 31.3773 26.1047 29.2041ZM32.4993 20.834C32.4993 22.6749 31.007 24.1673 29.166 24.1673C27.3251 24.1673 25.8327 22.6749 25.8327 20.834C25.8327 18.993 27.3251 17.5007 29.166 17.5007C31.007 17.5007 32.4993 18.993 32.4993 20.834Z" fill="#98B0E9" />
            </svg>
            <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-[#98b0e9]" />
          </div>
          <div className="flex flex-col items-center gap-1.5 max-w-[376px]">
            <span className="text-base font-semibold text-[#0a0c11] leading-6 text-center">Add Cover</span>
            <div className="text-sm text-[#5b616d] leading-5 text-center">
              <p>Drag & drop your video file here, or click to browse.</p>
              <p>SVG, JPG, PNG (max 400 x 240 px)</p>
            </div>
          </div>
          <button className="h-12 px-3 rounded-xl bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-base font-medium text-white flex items-center gap-2 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 16.667V3.333M3.333 8.333L10 1.667l6.667 6.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Browse files
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Promo Video */}
      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
          Promo video <span className="text-[#8c929c] font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Paste YouTube or Vimeo URL"
          className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
        />
        <p className="text-sm text-[#8c929c] leading-5 px-0.5">A 2–3 min promo video boosts enrollments significantly</p>
      </div>
    </div>
  )
}

export default CoverMediaStep
