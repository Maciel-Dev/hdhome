import React from 'react';
import './App.css';
import {motion} from 'framer-motion';
import Spline from "@splinetool/react-spline";




function App() {
    return (
        <>
            <motion.section className="w-screen h-screen" style={{ backgroundColor: "#242582" }}>
                <motion.div className="w-full h-full grid grid-rows-3 grid-cols-3">
                    <Spline className="w-full h-full absolute"
                            scene="https://prod.spline.design/9Y0xBc6nLl61TXsL/scene.splinecode"/>
                    <motion.div className="row-start-1 row-span-2 grid grid-cols-3 grid-rows-3 col-span-full">
                        <motion.div className="col-start-1 row-start-1 flex items-center justify-start h-1/3">
                            LOGO
                        </motion.div>
                        <motion.div className="row-start-1 col-start-3 grid grid-cols-4 h-1/3 rounded-b-2xl">
                            <motion.div className="col-start-2 flex items-center justify-center text-white font-bold text-lg">
                                Produtos
                            </motion.div>
                            <motion.div className="col-start-3 flex items-center justify-center text-white font-bold text-lg">
                                Serviços
                            </motion.div>
                            <motion.div className="col-start-4 flex items-center justify-center text-white font-bold text-lg">
                                Contato
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{x: 0}} animate={{y: -100}}
                                    transition={{duration: 2, delay: 3, type: "spring"}}
                                    className="text-center row-start-2 col-start-2 font-medium text-6xl">
                            <motion.p initial={{opacity: 0, y: 200}} animate={{opacity: 1, y: 0}}
                                      transition={{duration: 3, type: "spring"}} className="text-white font-light">Bem vindo a
                            </motion.p>
                            <motion.p initial={{opacity: 0, y: 200}} animate={{opacity: 1, y: 0}}
                                      transition={{duration: 3, delay: 1, type: "spring"}}
                                      className="text-white font-semibold ">HD-Home Center
                            </motion.p>
                            <motion.p initial={{opacity: 0}} animate={{opacity: 0.6}}
                                      transition={{duration: 3, delay: 2, type: "spring"}}
                                      className="text-white font-semibold text-2xl">Uma nova forma de estar em casa
                            </motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="row-start-3 col-span-full flex items-center justify-center bg-white rounded-t-3xl">
                        <motion.div initial={{scale: 1}} animate={{scale: 1.2}} transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            repeatDelay: 1,
                            duration: 1,
                            type: "spring"
                        }}>
                            <p className="text-2xl font-bold text-center">
                                VEJA NOSSOS PRODUTOS
                            </p>
                            <p className="text-2xl font-bold text-center">
                                Tem uma loja INTEIRA te aguardando
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}

export default App;
