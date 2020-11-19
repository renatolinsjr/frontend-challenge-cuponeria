import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from '../../services/api';
import './styles.css';
import '../../stylesHeader.css';
import Currency from '../../components/Currency';
import iconLogo from '../../images/logo-cuponeria.png';
import iconArrow from '../../images/icon-arrow.png';

export default function Product() {
    
    let { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        api.get(`products/${id}`).then((response) => {
          const shop = response.data;  
          setProduct(shop);
        });
      }, [id]);

    return (
        <>
            <div className="mainHeader">
                <div className="containerHeader containerHeaderProduct">
                    <Link to="/">
                        <div className="containerLogo">
                            <img src={iconLogo} alt="Cuponeria" title="Cuponeria" width="64" />
                            <h1 className="textLogo">CUPONERIA STORE</h1>
                        </div>
                    </Link>
                    <div className="containerMenu containerMenuProduct">
                        <Link to="/">
                            <button className="buttonBack">
                                <img src={iconArrow} alt="Voltar" title="Voltar" height="16" />
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mainPageProduct">
                <div className="containerPageProduct">
                    <div className="pageProductTitle">DETALHES</div>
                        {product.length === 0 ? <h3 className="Loading">Carregando...</h3> : [product]?.map((item) => {
                            return (
                                <div key={item.id} className="contentProduct">
                                    <div className="detailContainerProduct">
                                        <div className="detailProductImage">
                                            <img src={item.image} alt={item.title} title={item.title} width="300" />
                                        </div>
                                        <div className="detailProductTexts">
                                            <div className="detailProductTitle">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="detailProductPrice"><Currency value={item.price}/></div>
                                            <p className="detailProductDescription">{item.description}</p>
                                            <p className="detailProductCategory">Categoria: {item.category}</p>
                                            <button className="detailProductButton">Adicionar ao Carrinho</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}