// app/components/HowItWorks.jsx
import Image from 'next/image';

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="bg-background py-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen */}
                <div className="relative w-full h-96 pl-32">
                    <img
                        src="https://i.ibb.co/yXxc8Xn/imagen-2024-11-13-134936692-removebg-preview.png"
                        alt="Imagen de la aplicación en un teléfono"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                {/* Lista de pasos */}
                <div>
                    <h2 className="text-3xl font-display font-bold text-primary mb-8">¿Cómo Funciona?</h2>
                    <div className="space-y-8">
                        {/* Paso 1 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 text-primary font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-lg">1</div>
                            <div>
                                <h3 className="text-xl font-semibold">Descarga la App</h3>
                                <p className="text-sm text-gray-700">Disponible para Android e iOS.</p>
                            </div>
                        </div>

                        {/* Paso 2 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 text-primary font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-lg">2</div>
                            <div>
                                <h3 className="text-xl font-semibold">Crea tu perfil</h3>
                                <p className="text-sm text-gray-700">Contesta un breve cuestionario sobre tu estado de ánimo y estilo de vida.</p>
                            </div>
                        </div>

                        {/* Paso 3 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 text-primary font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-lg">3</div>
                            <div>
                                <h3 className="text-xl font-semibold">Accede a tus herramientas</h3>
                                <p className="text-sm text-gray-700">Comienza a utilizar las funcionalidades adaptadas a tus necesidades diarias.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
