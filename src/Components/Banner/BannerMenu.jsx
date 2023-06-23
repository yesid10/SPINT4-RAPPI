
import { TbHome } from 'react-icons/tb'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineHistory } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { DivLayout } from './StylesBanner'

const BannerMenu = () => {
    const [iconSeleccionado, setIconSeleccionado] = useState('icon1');
    const navigate = useNavigate();

    const handleIconClick = (icon) => {
        if (icon === iconSeleccionado) {
            setIconSeleccionado(null)
        } else {
            setIconSeleccionado(icon)
        }
        if(icon === 'icon1'){
            navigate('/home')
        } else if (icon === 'icon2') {
            navigate('/search')
        } else if (icon === 'icon3') {
            navigate('')
        } else if (icon === 'icon4') {
            navigate('/perfil')
        }
    }
    return (
        // <Div style={{
        //     padding: 0,
        //     alignTracks:'flex-end'
        //     }}>
            <DivLayout className="icons">
                <div className="icono">
                    <TbHome onClick={() => handleIconClick('icon1')}
                        style={{ color: iconSeleccionado === 'icon1' ? '#FFE031' : '#414141', fontSize: '2rem', cursor: 'pointer' }} />
                    {iconSeleccionado === 'icon1' && <div className="bolita"></div>}
                </div>
                <div className="icono">
                    <FiSearch
                        onClick={() => handleIconClick('icon2')}
                        style={{ color: iconSeleccionado === 'icon2' ? '#FFE031' : '#414141', fontSize: '2rem', cursor: 'pointer' }} />
                    {iconSeleccionado === 'icon2' && <div className="bolita"></div>}
                </div>
                <div className="icono">
                    <MdOutlineHistory
                        onClick={() => handleIconClick('icon3')}
                        style={{
                            color: iconSeleccionado === 'icon3' ? '#FFE031' : '#414141', fontSize: '2rem', cursor: 'pointer'
                        }} />
                    {iconSeleccionado === 'icon3' && <div className="bolita"></div>}
                </div>
                <div className="icono">
                    <FaRegUser
                        onClick={() => handleIconClick('icon4')}
                        style={{ color: iconSeleccionado == 'icon4' ? '#FFE031' : '#414141', fontSize: '2rem', cursor: 'pointer' }} />
                    {iconSeleccionado === 'icon4' && <div className="bolita"></div>}
                </div>

            </DivLayout>
        // </Div>


    )
}

export default BannerMenu