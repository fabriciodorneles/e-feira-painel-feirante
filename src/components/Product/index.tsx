import React from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IProduct {
    id: number;
    name: string;
    avatar: string;
    price: string;
    quantity: string;
    description: string;
}

interface IProps {
    product: IProduct;
    handleDelete: (id: number) => {};
    handleEditFood: (food: IProduct) => void;
}

const Product: React.FC<IProps> = ({
    product,
    handleDelete,
    handleEditFood,
}: IProps) => {
    function setEditingFood(): void {
        handleEditFood(product);
    }

    return (
        <Container>
            <header>
                <img src={product.avatar} alt={product.name} />
            </header>
            <section className="body">
                <h2>{product.name}</h2>
                <p className="price">
                    R$ <b>{product.price}</b> /KG
                </p>
                <p className="price">
                    Estoque: <b>{product.quantity}</b> KG
                </p>
                <p className="desc">{product.description}</p>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => setEditingFood()}
                        data-testid={`edit-food-${product.id}`}
                    >
                        <FiEdit3 size={20} />
                        <p> EDITAR </p>
                    </button>
                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(product.id)}
                        data-testid={`remove-food-${product.id}`}
                    >
                        <FiTrash size={20} />
                        <p> APAGAR </p>
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default Product;
