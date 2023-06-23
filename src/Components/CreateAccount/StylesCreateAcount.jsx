import { styled } from "styled-components";

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90ch;
  width: 100%;
  margin-top: 1rem;
  border-radius: 10px;

  

  Form {
    background-color: #fff;
    width: 54%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      color: #414141;
    }
    label {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #a7a7a7;
    }

  }
  .ui.button {
    display: flex;
    justify-content: center;
    align-content: flex-end;
    width: 100%;
    background-color: #ffe031;
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 16px;
    text-align: center;
    color: #414141;
    margin-top: 10rem;
  }
  .ui.form .field .ui.input input,
  .ui.form .fields .field .ui.input input {
    width: auto;
    border: 0;
    border-bottom: 0.5px solid #a7a7a7;
  }
`;
