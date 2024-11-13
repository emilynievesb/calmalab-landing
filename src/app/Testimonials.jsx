// app/components/Testimonials.jsx

export default function Testimonials() {
    return (
        <section id="testimonios" className="bg-backgroundT py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-3xl font-display font-bold text-primary mb-8">Testimonios</h2>

                {/* Testimonios */}
                <div className="space-y-8">
                    {/* Testimonio 1 */}
                    <div>
                        <p className="text-lg font-semibold text-primary">▼ Laura, Empleada de Marketing</p>
                        <p className="mt-2 text-gray-700 italic">
                            “Gracias a CalmaLab, mi nivel de estrés ha bajado y me siento más equilibrado en mi día a día laboral.”
                        </p>
                    </div>

                    {/* Testimonio 2 */}
                    <div>
                        <p className="text-lg font-semibold text-primary">▼ Carlos, Gerente de Recursos Humanos</p>
                        <p className="mt-2 text-gray-700 italic">
                            “Implementar CalmaLab en nuestra empresa ha sido un éxito. El equipo se siente más motivado y relajado.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
