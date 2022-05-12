import styled from 'styled-components'

const BoxSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    :hover{
        background-image: linear-gradient(25deg, #FA3CF9 1.7%, #FC587E 50.85%, #FC3239 99.99%);
    }

    .social-light{
        background-color: #000000;
    }

    .social-dark{
        background-color: #FFFFFF;
    }
`

export default BoxSocialMedia;