export default function Header() {
    return (
        <header id="inicio" className="bg-background py-16 px-40 flex flex-col md:flex-row items-center justify-between mt-16 min-h-[70vh]">
            <div className="max-w-lg md:ml-10">
                <h1 className="text-5xl font-display font-bold text-primary leading-tight">CalmaLab – Bienestar Mental para Trabajadores</h1>
                <p className="mt-4 text-lg text-gray-600">“Tu salud mental importa, incluso en el trabajo”</p>
                <div className="mt-8 flex gap-4">
                    <button className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-opacity-90">Empezar ahora</button>
                    <button className="border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white">
                        Conoce más
                    </button>
                </div>
            </div>
            <div className="mt-10 md:mt-0">
                <div className="w-full h-full max-w-md bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://cdn.gamma.app/cbce6svg9w6fwnn/generated-images/dbD9fCcm2cpp1TFgpXY3h.jpg"
                        alt="Imagen de oficina"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </header>
    );
}
