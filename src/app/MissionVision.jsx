import { FaRegLightbulb, FaRegCompass } from 'react-icons/fa';

export default function MissionVisionSection() {
    return (
        <section id="mision-vision" className="bg-background py-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                {/* Misión */}
                <div className="space-y-4">
                    <FaRegLightbulb className="text-4xl text-primary mx-auto" /> {/* Ícono de Misión */}
                    <h2 className="text-3xl font-display font-bold text-primary">Misión</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Mejorar la salud mental en los entornos laborales mediante una plataforma innovadora de inteligencia artificial que brinde apoyo
                        emocional personalizado, promoviendo un equilibrio saludable entre vida y trabajo para cada empleado.
                    </p>
                </div>

                {/* Visión */}
                <div className="space-y-4">
                    <FaRegCompass className="text-4xl text-primary mx-auto" /> {/* Ícono de Visión */}
                    <h2 className="text-3xl font-display font-bold text-primary">Visión</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Convertirnos en la plataforma líder en bienestar emocional en el trabajo, ayudando a empresas de todo el mundo a crear espacios
                        laborales saludables, productivos y centrados en el bienestar integral de sus colaboradores.
                    </p>
                </div>
            </div>
        </section>
    );
}
