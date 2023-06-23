
import Switch from '@mui/material/Switch';
import { useSelector } from "react-redux";
import BannerMenu from "../Banner/BannerMenu"
import { Div } from "../Home/StylesHome"
import { DivPerfil } from "./StylesPerfil";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CiUser } from 'react-icons/ci';
import { MdArrowForwardIos } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { TbWorld } from 'react-icons/tb';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';



const PerfilUsuario = () => {

  const usuario = useSelector((store) => store.authReducer.user);
  console.log(usuario);
  const photoGooge = usuario?.photoURL;
  console.log(photoGooge);


  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  return (
    <Div style={{ marginTop:'13rem' }}>
      <DivPerfil>
        <div className="back">
          <NavLink to={`/home`} style={{ textDecoration: 'none', color: 'black' }}>
            <MdOutlineArrowBackIosNew />
          </NavLink>
          <p>Profile</p>
        </div>
        <figure>
          <img src={usuario.avatar ? usuario.avatar : photoGooge} alt={usuario.name} />
        </figure>
        <p>{usuario.displayName}</p>

        <div className='DivButtons'>
          <div className='button'>
            <div className='icon'>
              <CiUser style={{ fontSize: '1.6rem' }} />
              <p>Account edit</p>
            </div>
            <MdArrowForwardIos style={{ fontSize: '1.6rem' }} />
          </div>
          <div className='button'>
            <div className='icon'>
              <BiBell style={{ fontSize: '1.6rem' }} />
              <p>Account edit</p>
            </div>
            <Switch {...label} defaultChecked color="warning" />
          </div>
          <div className='button'>
            <div className='icon'>

              <p>Payment</p>
            </div>
            <MdArrowForwardIos style={{ fontSize: '1.6rem' }} />
          </div>
          <div className='button'>
            <div className='icon'>
              <TbWorld />
              <p>Language</p>
            </div>
            <MdArrowForwardIos style={{ fontSize: '1.6rem' }} />
          </div>
          <div className='button'>
            <div className='icon'>

              <p>Location</p>
            </div>
            <MdArrowForwardIos style={{ fontSize: '1.6rem' }} />
          </div>
          <div className='button'>
            <div className='icon'>
              <FaRegQuestionCircle style={{ fontSize: '1.6rem' }} />
              <p>FAQ</p>
            </div>
            <MdArrowForwardIos style={{ fontSize: '1.6rem' }} />
          </div>
          <div className='button'>
            <div className='icon'>
              <BsTelephone style={{ fontSize: '1.6rem' }} />
              <p>Support</p>
            </div>
            <MdArrowForwardIos style={{ fontSize: '1.6rem' }} />
          </div>

        </div>
      </DivPerfil>

      <BannerMenu />
    </Div>
  )
}

export default PerfilUsuario