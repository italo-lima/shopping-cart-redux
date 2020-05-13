import styled from "styled-components"

export const Container = styled.div`
  box-shadow: 0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22);
  background: #fff;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  transform: ${({ toggle }) => toggle ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

@media only screen and (min-width: 1280px){
  width: 375px;
  right: 0;
}
`;

export const ModalOpacity = styled.div`
    opacity: .5;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #000;
`;