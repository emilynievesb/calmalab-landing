import { FaQuestionCircle, FaShieldAlt, FaEnvelope, FaHashtag } from 'react-icons/fa';

export default function SupportSection() {
    return (
        <section id="soporte" className="bg-background py-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Imagen de la aplicación */}
                <div className="relative w-full h-30">
                    <img
                        src="https://cdn.gamma.app/cbce6svg9w6fwnn/generated-images/O1NgF1s6ty3Zn7n3nfymG.jpg" // Cambia esta ruta a la imagen que prefieras
                        alt="Imagen de la aplicación en un teléfono"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                {/* Información y enlaces */}
                <div className="space-y-8 pl-20">
                    <h2 className="text-3xl font-display font-bold text-primary mb-8">¿Necesitas ayuda?</h2>

                    {/* Preguntas Frecuentes */}
                    <div className="flex items-start gap-4">
                        <FaQuestionCircle className="text-2xl text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Preguntas Frecuentes</h3>
                            <p className="text-sm text-gray-700">Encuentra respuestas a tus preguntas.</p>
                        </div>
                    </div>

                    {/* Política de Privacidad */}
                    <div className="flex items-start gap-4">
                        <FaShieldAlt className="text-2xl text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Política de Privacidad</h3>
                            <p className="text-sm text-gray-700">Conoce cómo protegemos tu información.</p>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-2xl text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Contacto</h3>
                            <p className="text-sm text-gray-700">Escríbenos para cualquier duda.</p>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex items-start gap-4">
                        <FaHashtag className="text-2xl text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Redes Sociales</h3>
                            <p className="text-sm text-gray-700">Síguenos en Instagram, LinkedIn y Facebook.</p>
                        </div>
                    </div>

                    {/* Botón de Descarga */}
                    <button className="mt-8 bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-opacity-90">Descarga ahora</button>
                </div>
            </div>
        </section>
    );
}
