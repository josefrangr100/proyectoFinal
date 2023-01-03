import { NavLink } from 'react-router-dom'
import { AboutSection } from '../AboutSection/AboutSection'


export const GridItems = () => {


    return ( 
    <>
    
        <div className="grid-item tall" >
                    <img src="http://quintotiempo.com/media/k2/items/cache/2fa67f482133f1c934235b73c2a03954_XL.jpg" alt="" />
                </div>
                <div className="grid-item">
                    <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/06/28182001/Mendozaa.jpg" alt="" />
                </div>
                <div className="grid-item links-item">
                    <NavLink href="/carta" to='carta' className='link-carta-container'>
                        <div className='link-carta'>
                            Carta
                        </div>
                    </NavLink>
                </div>
                <div className="grid-item">
                    <img src="https://oleico.com/wp-content/uploads/2020/09/post_thumbnail-b6d279093b7698f952dd017059e794df.jpeg" alt="" />
                </div>

                <div className="grid-item pedir-item links-item">
                <NavLink href="/pedir" to='pedir' className='link-pedir-container'>
                        <div className='link-pedir'>
                            Pedir comida
                        </div>
                </NavLink>
                </div>
                <div className="grid-item wide">
                    <img src="https://cubiro.com/wp-content/uploads/2019/07/comidas-de-lujo-que-puedes-preparar-800x445.jpg" alt="" />
                </div>
                <div className="grid-item ">
                <img src="https://cdn7.kiwilimon.com/clasificacion/3345/3345.jpg" alt="" />
                </div>
                <div className="grid-item ">
                <img src="https://heladitos.com/wp-content/uploads/2017/07/ice-2305144_960_720.jpg" alt="" />
                </div>
                <div className="grid-item wide about-main links-item">
                    <AboutSection/>
                </div>
                <div className="grid-item links-item link-registro-container">
                <NavLink href="/registrarse" to='registrarse' className='link-registrarse-container'>
                        <div className='link-registro'>
                            Registrarse
                        </div>
                </NavLink>
                </div>
                <div className="grid-item wide">
                    <img src="https://www.caraotadigital.net/wp-content/uploads/2020/10/12536225-807F-4BDE-B15E-7EAB8C630A8E-1-1068x601.jpeg" alt="" />
                    
                </div>
                <div className="grid-item">
                <img src="https://t2.rg.ltmcdn.com/es/posts/3/1/2/carne_al_vino_con_salsa_47213_600_square.jpg" alt="" />
                </div>
                
    </>
)}
