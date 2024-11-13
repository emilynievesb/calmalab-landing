export default function WhatWeOffer() {
    return (
        <section
            id="herramientas"
            className="relative bg-background py-16 px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('https://cdn.gamma.app/cbce6svg9w6fwnn/generated-images/F1RPllTrnihIHyr0UJ9kH.jpg')" }} // Cambia a la ruta de tu imagen
        >
            {/* Overlay para darle opacidad y hacer que el texto sea legible */}
            <div className="absolute inset-0 bg-white/70"></div>

            {/* Contenido de la sección */}
            <div className="relative max-w-5xl mx-auto">
                <h2 className="text-center text-3xl font-display font-bold text-primary mb-12">¿Qué Ofrecemos?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pl-20">
                    <div className="flex items-start gap-4">
                        <span className="bg-primary text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">1</span>
                        <div>
                            <h3 className="text-xl font-semibold">Meditaciones</h3>
                            <p className="text-sm text-gray-700">Ejercicios cortos y fáciles de seguir para relajarte durante tu jornada.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="bg-primary text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">2</span>
                        <div>
                            <h3 className="text-xl font-semibold">Recordatorios</h3>
                            <p className="text-sm text-gray-700">Notificaciones para estirarte y despejar la mente.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="bg-primary text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">3</span>
                        <div>
                            <h3 className="text-xl font-semibold">Evaluación</h3>
                            <p className="text-sm text-gray-700">Herramientas que miden tus niveles de estrés y te ofrecen recomendaciones.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="bg-primary text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">4</span>
                        <div>
                            <h3 className="text-xl font-semibold">Seguimiento</h3>
                            <p className="text-sm text-gray-700">Lleva un registro diario de cómo te sientes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
