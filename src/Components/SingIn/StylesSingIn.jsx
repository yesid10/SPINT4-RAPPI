import styled from 'styled-components';

export const ContainDiv = styled.div`
margin: 0 5%;
    
    figure{
        display: flex;
        justify-content: center;
        img{
            width: 20%;
        }
    }

    .singIn{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3{
            font-size: 2rem;
        }
        p{
            width: 40%;
            text-align: center;
            font-size: 1.2rem;
        }
    }
    form{
        width: 98%;

        .iniciarConGoggle{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            padding: 2%;
            margin: 5% 0;
            border-radius: 10px;
            cursor: pointer;
            &:hover{
                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;   
                transition: box-shadow .2s ease-in-out;
                
            }
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                text-align: center;
                font-size: 1.2rem;
                

            }
        }
        .login{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 100%;
                padding: 2%;
                background-color: #FFE031 ;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1.2rem;
            }
        }
    }
    .crearCuenta{
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 10% 0 6% 0;
        background-color: #414141;
        color: #fff;
        padding: 2%;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
    }
`;