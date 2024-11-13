// app/components/PricingPlans.jsx

export default function PricingPlans() {
    return (
        <section id="planes" className="bg-background py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-primary mb-12">Planes y Precios</h2>

                {/* Tarjetas de Planes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Plan Básico */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-primary mb-4">Plan Básico</h3>
                        <p className="text-gray-700">
                            Acceso a meditaciones y recordatorios de pausas – <span className="italic"> Gratis</span>.
                        </p>
                    </div>

                    {/* Plan Premium */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-primary mb-4">Plan Premium</h3>
                        <p className="text-gray-700">
                            Incluye evaluaciones personalizadas y acceso a terapia online – <span className="italic"> $X al mes</span>.
                        </p>
                    </div>

                    {/* Plan Empresarial */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-primary mb-4">Plan Empresarial</h3>
                        <p className="text-gray-700">
                            Soluciones personalizadas para equipos – <span className="italic"> Solicita una cotización</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
