import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Header,
    HeaderContent,
    MenuBar,
    Content,
    Schedule,
    Section,
    ProductsContainer,
    Appointment,
} from './styles';
import logoImg from '../../assets/logo.svg';

interface monthAvailabilityItem {
    day: number;
    available: boolean;
}

interface Appointment {
    id: string;
    date: string;
    hourFormatted: string;
    user: {
        name: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="GoBarber" />
                </HeaderContent>

                <MenuBar>
                    <text>VERDURAS</text>
                </MenuBar>
            </Header>

            <Content>
                <Schedule>
                    <Section>
                        <h1>LEGUMES</h1>
                        <ProductsContainer data-testid="foods-list">
                            {foods &&
                                foods.map((food) => (
                                    <Product
                                        key={food.id}
                                        food={food}
                                        handleDelete={handleDeleteFood}
                                        handleEditFood={handleEditFood}
                                    />
                                ))}
                        </FoodsContainer>
                    </Section>
                    <Section>
                        <h1>LEGUMES</h1>
                    </Section>
                </Schedule>
            </Content>
        </Container>
    );
};

export default Dashboard;
