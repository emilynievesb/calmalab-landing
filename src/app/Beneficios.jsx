export default function Beneficios() {
    return (
        <section id="beneficios" className="relative text-white py-16 px-6">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://i.ibb.co/BcbpFGZ/ze7-Lf-XH-ww-VB3-D7-XA-bja-1.jpg" // Cambia esta ruta a la imagen que prefieras
                    alt="Imagen de fondo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    className="opacity-50 w-full object-cover"
                    style={{ objectPosition: '50% -100%;' }} // Transparencia de la imagen de fondo
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Filtro oscuro */}
            </div>

            {/* Contenido de la sección */}
            <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold mb-8">Beneficios para Empresas y Empleados</h2>

                {/* Contenedor de beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white bg-opacity-10 p-8 rounded-lg border border-white border-opacity-30 backdrop-blur-sm">
                    {/* Columna para Empresas */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Empresas</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Mejora la moral de tu equipo.</li>
                            <li>Disminuye el ausentismo laboral.</li>
                            <li>Demuestra que te importa el bienestar de tus empleados.</li>
                        </ul>
                    </div>

                    {/* Columna para Empleados */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Empleados</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Menos estrés.</li>
                            <li>Mejor concentración.</li>
                            <li>Un sentido de equilibrio.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
