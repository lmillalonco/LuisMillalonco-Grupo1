function App() {
  return (
    <div className="bg-[#FFFBF0] text-gray-800">
      <header className="bg-[#2D4A22] text-white py-4 px-8 flex justify-between items-center sticky top-0 z-40">
        <h1 className="font-bold text-xl tracking-widest">CHILOÉ ORIGEN</h1>
        <a href="#contacto" className="bg-[#D4A574] text-[#2D4A22] px-5 py-2 rounded-full font-bold text-sm">Contacto</a>
      </header>

      <section className="relative h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h2 className="text-5xl font-bold mb-4">Chiloé Auténtico</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">Vive la isla, su cultura, palafitos y naturaleza. Sin apuro, a lo chilote.</p>
          <a href="https://wa.me/56900000000" className="bg-[#D4A574] text-[#2D4A22] px-8 py-3 rounded-full font-bold">Reservar por WhatsApp</a>
        </div>
      </section>

      <section id="historia" className="max-w-6xl mx-auto py-16 px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-[#D4A574] font-bold text-sm tracking-widest mb-2">NUESTRA RAÍZ</h3>
          <h2 className="text-3xl font-bold text-[#2D4A22] mb-4">400 años de historia viva</h2>
          <p className="text-gray-600">Iglesias patrimonio, palafitos de colores, curanto en hoyo y la minga. En Chiloé Origen te mostramos lo real, no lo turístico.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077" className="rounded-xl h-80 object-cover w-full shadow-lg" alt="Chiloe" />
      </section>

      <section className="bg-[#2D4A22] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-xl"><h4 className="font-bold text-[#D4A574] mb-2">Bosques</h4><p className="text-sm opacity-80">Tepuhueico y senderos entre nalcas gigantes.</p></div>
          <div className="bg-white/10 p-6 rounded-xl"><h4 className="font-bold text-[#D4A574] mb-2">Mar</h4><p className="text-sm opacity-80">Delfines chilenos y navegación al amanecer.</p></div>
          <div className="bg-white/10 p-6 rounded-xl"><h4 className="font-bold text-[#D4A574] mb-2">Sabores</h4><p className="text-sm opacity-80">Curanto, chapalele y productos de la huerta.</p></div>
        </div>
      </section>

      <section id="contacto" className="bg-[#D4A574] py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-[#2D4A22] mb-3">¿Listo para venir?</h2>
        <p className="mb-6 text-[#2D4A22]/80">Escríbenos y te mandamos el programa con fotos reales.</p>
        <a href="https://wa.me/56900000000?text=Hola%20quiero%20info%20Chiloe%20Origen" target="_blank" className="bg-[#2D4A22] text-white px-8 py-3 rounded-full font-bold inline-block">Hablar por WhatsApp</a>
        <p className="mt-4 text-xs text-[#2D4A22]/60">Curaco de Vélez - Chiloé - Chile</p>
      </section>
    </div>
  )
}
export default App;