import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    /* height: 100vh;
    display: flex;
    align-items: stretch; */
`;

export const Header = styled.div`
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
        z-index: 1000;
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
    margin: 64px auto;
    display: flex;
`;

export const Schedule = styled.div`
    flex: 1;
    margin-right: 120px;

    h1 {
        font-size: 36px;
    }

    p {
        margin-top: 8px;
        color: #ff9000;
        display: flex;
        align-items: center;
        font-weight: 500;

        span {
            display: flex;
            align-items: center;
        }

        span + span::before {
            content: '';
            width: 1px;
            height: 12px;
            background: #ff9000;
            margin: 0 8px;
        }
    }
`;

export const Section = styled.aside`
    margin-top: 48px;
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
    padding: 40px 0;
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
