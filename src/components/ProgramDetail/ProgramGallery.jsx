const images = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&h=300&fit=crop",
]

const ProgramGallery = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[20px] font-semibold text-black leading-7">Campus Gallery</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <div key={i} className="w-[200px] h-[150px] rounded-xl overflow-hidden shrink-0">
            <img src={img} alt="" className="size-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramGallery
