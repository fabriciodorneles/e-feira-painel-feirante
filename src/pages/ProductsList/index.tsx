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
import Product from '../../components/Product';
import api from '../../services/api';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    description: string;
}

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    // const product: IProduct = {
    //     id: 1,
    //     name: 'Banana',
    //     image:
    //         'https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale',
    //     description: 'só se for amarelinha e doce',
    //     price: '12',
    // };

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const productsList = (await api.get<IProduct[]>('/products')).data;
            console.log(productsList);
            setProducts(productsList);
        }
        loadProducts();
    }, []);

    const handleDeleteFood = useCallback(async (id: number): Promise<void> => {
        console.log('delete');
    }, []);
    const handleEditFood = useCallback(() => {
        console.log('edit');
    }, []);
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="GoBarber" />
                </HeaderContent>

                <MenuBar>
                    <h1>VERDURAS</h1>
                </MenuBar>
            </Header>

            <Content>
                <Schedule>
                    <Section>
                        <h1>LEGUMES</h1>
                        <ProductsContainer data-testid="products-list">
                            {products &&
                                products.map((product) => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                        handleDelete={handleDeleteFood}
                                        handleEditFood={handleEditFood}
                                    />
                                ))}
                        </ProductsContainer>
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
