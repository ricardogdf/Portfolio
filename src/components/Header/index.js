import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 20px 20px 20px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--background);
`

export default Header;