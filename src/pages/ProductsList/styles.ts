import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;

    height: 255px;
    background: #3bb946;
    display: flex;
    flex-direction: column;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    display: flex;
    align-items: center;

    > img {
        display: flex;
        margin-left: 20px;
        margin-top: -18px;
        margin-bottom: -61px;
        position: relative;
        height: 276px;
    }
`;

export const MenuBar = styled.div`
    background: #52a759;
    height: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.main`
    max-width: 1120px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    .addProduct {
        margin-top: 16px;
        font-family: 'Roboto';
        color: #1e5323;
        font-weight: 600;
        border-radius: 8px;
        border: 0;
        background: #39b100;
        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
            padding: 16px 24px;
        }

        .icon {
            display: flex;
            padding: 12px 12px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
        }
    }
`;

export const Section = styled.aside`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        align-self: center;
    }

    > strong {
        /* color: #999591;
        font-size: 20px;
        line-height: 26px;
        border-bottom: 1px solid #3e3b47;
        display: block;
        padding-bottom: 16px;
        margin-bottom: 16px; */
    }

    > p {
        color: #999591;
    }
`;

export const ProductsContainer = styled.div`
    width: 800px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0px 0;
    margin-top: 0px;

    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
`;

export const Appointment = styled.div`
    display: flex;
    align-items: center;

    & + div {
        margin-top: 16px;
    }

    span {
        margin-left: auto;
        display: flex;
        align-items: center;
        color: #f4ede8;
        width: 70px;

        svg {
            color: #ff9000;
            margin-right: 8px;
        }
    }

    div {
        flex: 1;
        background: #3e3b47;
        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-radius: 10px;
        margin-left: 24px;

        img {
            object-fit: cover;

            height: 56px;
            width: 56px;
            border-radius: 50%;
        }

        strong {
            margin-left: 24px;
            font-size: 20px;
            color: #fff;
        }
    }
`;
