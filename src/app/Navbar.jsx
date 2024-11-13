import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-background py-4 px-6 fixed w-full top-0 z-10 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo y Título envueltos en un div */}
                <div className="flex items-center space-x-3">
                    <img src="https://i.ibb.co/bLm20PW/imagen-2024-11-13-135833140.png" alt="Logo" className="w-10 h-10" />
                    <h1 className="text-xl font-display font-bold text-gray-900">CalmaLab</h1>
                </div>

                {/* Enlaces de Navegación */}
                <div className="space-x-6">
                    <Link href="#inicio" className="text-gray-700 hover:text-primary">
                        Inicio
                    </Link>
                    <Link href="#nuestra-propuesta" className="text-gray-700 hover:text-primary">
                        Propuesta
                    </Link>
                    <Link href="#porque" className="text-gray-700 hover:text-primary">
                        ¿Por qué CalmaLab?
                    </Link>
                    <Link href="#beneficios" className="text-gray-700 hover:text-primary">
                        Beneficios
                    </Link>
                    <Link href="#testimonios" className="text-gray-700 hover:text-primary">
                        Testimonios
                    </Link>
                    <Link href="#planes" className="text-gray-700 hover:text-primary">
                        Planes
                    </Link>
                    <Link href="#soporte" className="text-gray-700 hover:text-primary">
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
