// @ts-ignore
import React from "react";
import {FaWhatsapp, FaInstagram, FaChevronUp, FaEnvelope, FaRegCopy} from "react-icons/fa"
import {GiHealing} from "react-icons/gi";
import {motion} from "framer-motion";


const serviceCards = [
    {
        icon: "/fisioterapia-ortopedica.svg",
        title: "Fisioterapia Ortopédica",
        description: "Tratamento de lesões musculoesqueléticas, como fraturas, entorses, lesões ligamentares e tendinites, promovendo reabilitação funcional e alívio da dor.",
    },
    {
        icon: "/fisioterapia-respiratoria.svg",
        title: "Fisioterapia Respiratória",
        description: "Melhora a função pulmonar, facilita a remoção de secreções e auxilia na recuperação de pacientes com doenças respiratórias como asma, bronquite ou DPOC.",
    },
    {
        icon: "/fisioterapia-neurologica.svg",
        title: "Fisioterapia Neurológica",
        description: "Voltada à reabilitação de pacientes com sequelas neurológicas como AVC, Parkinson, esclerose múltipla e lesões medulares, melhorando a mobilidade e independência.",
    },
    {
        icon: "/massagem-terapeutica.svg",
        title: "Massagem Terapêutica",
        description: "Promove o relaxamento muscular, melhora a circulação sanguínea e auxilia na redução do estresse, ansiedade e dores musculares.",
    },
    {
        icon: "/ventosoterapia.svg",
        title: "Ventosoterapia",
        description: "Técnica com ventosas que estimula a circulação sanguínea, alivia dores, reduz tensões musculares e melhora quadros inflamatórios.",
    },
    {
        icon: "/cinesioterapia.svg",
        title: "Cinesioterapia",
        description: "Tratamento com exercícios terapêuticos para recuperar movimentos, fortalecer músculos e restaurar a funcionalidade do corpo.",
    },
    {
        icon: "/massagem-miofascial.svg",
        title: "Massagem Miofascial",
        description: "Técnica de liberação de tensões profundas na fáscia muscular, indicada para aliviar dores crônicas, melhorar a mobilidade e reduzir rigidez.",
    },
    {
        icon: "/kinesiotape.svg",
        title: "Kinesiotape",
        description: "Aplicação de bandagens terapêuticas que auxiliam na estabilidade muscular, aliviam dores e aceleram o processo de recuperação sem limitar os movimentos.",
    },
    {
        icon: "/relaxamento-neuromuscular.svg",
        title: "Terapia de Relaxamento Neuromuscular",
        description: "Tratamento que combina técnicas manuais e estímulos específicos para reduzir tensões profundas e restaurar o equilíbrio neuromuscular do corpo.",
    }

];


export const LpDraSandra = (): JSX.Element => {
    return (
        <main className="bg-[#000000] min-h-screen w-full">


            <section className="w-full bg-cover bg-center min-h-screen bg-[url('./bg-fisio.png')] ">
                <div
                    className="mx-auto flex flex-col lg:flex-row items-center justify-between px-20 lg:px-32 md:px-52  gap-12 content-center absolute inset-0 bg-[#1c0f0a]/80 z-0">
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="flex-1 flex flex-col items-start gap-10"
                    >
                        <div className="flex items-center gap-3 mt-10">
                            <GiHealing className="text-[#fefaf4] text-3xl"/>
                            <div>
                                <div
                                    className="text-[#fefaf4] text-[25px] font-semibold tracking-wide [font-family:'Recoleta-RegularDEMO',Helvetica]">
                                    SANDRA RODRIGUES
                                </div>
                                <div className="text-[#fefaf4] text-sm tracking-tight">
                                    Fisioterapeuta | CREFITO: 161550-3
                                </div>
                            </div>
                        </div>

                        <h1 className="max-w-[720px]  text-4xl md:text-5xl font-bold leading-snug [font-family:'Recoleta-RegularDEMO',Helvetica] text-[#fefaf4]">
                            Está buscando um atendimento{" "}
                            <span className="text-[#d4ba76]">fisioterapêutico humanizado</span> e de qualidade?
                        </h1>

                        <p className="max-w-[650px] text-[#fefaf4] text-1xl [font-family:'Recoleta-RegularDEMO',Helvetica] md:text-2xl">
                            Com mais de 18 anos de experiência, atendo na Zona Sul de São Paulo com foco em
                            reabilitação, alívio da dor e bem-estar. Atendimento domiciliar com técnicas
                            personalizadas e humanizadas.
                        </p>

                        <a
                            href="https://wa.me/5511939445414?text=Ol%C3%A1%2C%20Dra.%20Sandra!%20Encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20um%20atendimento%20de%20fisioterapia."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-nowrap items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-[#532d18] text-base sm:text-lg font-bold [font-family:'Inter',Helvetica] bg-gradient-to-b from-[#f2deba] to-[#d4ba76] hover:brightness-110 transition w-full sm:w-fit"
                        >
                            <FaWhatsapp className="text-2xl sm:text-3xl" />
                            <span className="leading-tight text-center">FALAR COM DRA. SANDRA RODRIGUES</span>
                        </a>


                    </motion.div>

                    <div className="hidden lg:block flex-1 h-[500px]"></div>
                </div>
            </section>

            <section
                className="w-full py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#2e1c14] via-[#3e2a1f] to-[#5c4033]">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="max-w-7xl mx-auto flex flex-col gap-10"
                >
                    <div className="text-center px-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#fefaf4] [font-family:'Open_Sans',Helvetica]">
                            Serviços de Fisioterapia
                        </h2>
                        <p className="text-[#d9d9d9] mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                            Conheça as técnicas oferecidas para cuidar do seu corpo, aliviar dores
                            e melhorar sua qualidade de vida.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
                        {serviceCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: 0, duration: 0.2}}
                                viewport={{once: true}}
                                whileHover={{
                                    scale: 1.03,
                                    y: -5,
                                    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.1)",
                                }}
                                className="w-full max-w-[320px] bg-[#fefaf4] rounded-xl p-6 shadow-md flex flex-col items-start gap-4 cursor-pointer transition-all duration-300"
                            >

                                <h3 className="text-xl font-semibold text-[#532d18]">{card.title}</h3>
                                <p className="text-[#5c4033] text-sm">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>


            <section className="w-full min-h-screen bg-gradient-to-r from-[#2e1c14] via-[#3e2a1f] to-[#5c4033] flex justify-center">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-10">

                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl bg-[#7b4a2d] shadow-xl">
                        <img
                            className="object-cover w-full h-full"
                            alt="Dra. Sandra Rodrigues"
                            src="/fisioterapeuta.png"/>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        viewport={{once: true}}
                        className="w-full lg:w-1/2 flex flex-col gap-6 text-start">
                        <div>
                            <p className="text-[#d4ba76] text-lg font-semibold">Conheça a</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#fefaf4] [font-family:'Open_Sans',Helvetica]">
                                Dra. Sandra Rodrigues
                            </h2>
                        </div>

                        <span className="text-[#f3e4c5] text-base border-b border-[#f3e4c5] pb-1 w-fit">CREFITO 161550-3</span>

                        <div className="flex flex-col gap-4 mt-2 text-justify">
                            <p className="text-[#f3e4c5] text-base sm:text-lg font-medium">
                                Fisioterapeuta com mais de 18 anos de experiência, atuando com excelência em
                                fisioterapia ortopédica, respiratória e neurológica. Referência em técnicas modernas de
                                reabilitação e alívio da dor.
                            </p>
                            <p className="text-[#f3e4c5] text-base sm:text-lg font-medium">
                                Atendimento humanizado e personalizado na Zona Sul de São Paulo, com foco em qualidade
                                de vida e funcionalidade do paciente.
                            </p>
                            <p className="text-[#f3e4c5] text-base sm:text-lg font-medium">
                                Disponível para atendimentos domiciliares com toda estrutura necessária para oferecer
                                cuidado, conforto e segurança no próprio lar.
                            </p>
                            <p className="text-[#f3e4c5] text-base sm:text-lg font-medium">
                                Entre em contato e agende uma avaliação personalizada. Seu bem-estar começa com um
                                passo.
                            </p>
                        </div>

                        <a href="#" className="mt-4 inline-block w-fit bg-[#d4ba76] hover:bg-[#c4a858] text-[#532d18] font-semibold px-6 py-3 rounded-full transition duration-300 shadow-sm hover:shadow-md text-sm md:text-base">
                            Saiba mais
                        </a>
                    </motion.div>
                </div>
            </section>


            <footer className="w-full bg-[#2e1c14] text-[#fefaf4] border-t border-[#5c4033] py-14 px-6 text-base">
                <div className="max-w-7xl mx-auto flex flex-col gap-12">

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 justify-between">

                        <div className="flex flex-col gap-4">

                            <h4 className="font-bold text-lg md:text-xl">Fisioterapeuta | CREFITO: 161550-3</h4>

                            <a href="https://wa.me/5511939445414?text=Ol%C3%A1%2C%20Dra.%20Sandra!%20Encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20um%20atendimento%20de%20fisioterapia." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:underline hover:text-[#c4a858]">
                                <FaWhatsapp className="text-lg"/>
                                (11) 93944-5414
                            </a>

                            <button onClick={() => navigator.clipboard.writeText('sandramorais1968@icloud.com')} className="flex items-center gap-2 text-sm hover:underline hover:text-[#c4a858]">
                                <FaEnvelope className="text-lg"/>
                                sandramorais1968@icloud.com
                                <FaRegCopy className="text-sm" title="Clique para copiar"/>
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="font-semibold">Redes sociais</span>
                            <a href="https://www.instagram.com/drasandrarodrigues_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:underline hover:text-[#c4a858]">
                                <FaInstagram className="text-lg"/>
                                @drasandrarodrigues_
                            </a>
                        </div>

                        <div className="flex flex-col gap-4 items-start">
                            <button
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                className="flex items-center gap-2 text-sm hover:text-[#c4a858]">
                                Voltar para o topo <FaChevronUp/>
                            </button>

                            <div className="flex flex-col gap-2 text-sm">
                                <a href="#servicos" className="underline hover:text-[#c4a858]">
                                    Serviços
                                </a>
                                <a href="#sobre" className="underline hover:text-[#c4a858]">
                                    Sobre mim
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row justify-between items-center border-t border-[#d2b48c] pt-6 gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <span>Desenvolvido por:</span>
                            <a
                                href="https://nicolasralves.github.io/portifolio.nicolas.2025/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold underline hover:text-[#c4a858]"
                            >
                                Nicolas Rodrigues
                            </a>
                        </div>

                        <div className="text-sm text-center sm:text-right">
                            <p>© 2025. Todos os direitos reservados.</p>
                            <p className="underline cursor-pointer hover:text-[#c4a858]">Política de Privacidade</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};
