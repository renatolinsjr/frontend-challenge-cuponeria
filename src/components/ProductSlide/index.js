import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api';
import Currency from '../../components/Currency';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';

export default function ProductSlide(props) {

    const [shop, setShop] = useState([]);
    const valueMenu = props.valueMenu;

    useEffect(() => {
        let apiUrl = 'products?limit=5';
        if( valueMenu !== undefined) {
            apiUrl = `products/category/${valueMenu}?limit=5`;
        }
        api.get(apiUrl).then((response) => {
          const shop = response.data;
          setShop(shop);
        });
      }, [valueMenu]);

    const responsiveProduct = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    return (
    shop.length === 0 ? <h3 className="Loading">Carregando...</h3> : 
            <div className="mainProduct">
                <AliceCarousel
                    mouseTracking
                    items={shop.map((item) => {
                        return (
                            <div key={item.id} className="itemProduct">
                                <div className="containerProduct">
                                    <Link to={`/produto/${item.id}`}>
                                        <div className="productImage">
                                            <img src={item.image} alt={item.title} title={item.title} />
                                        </div>
                                    </Link>
                                    <div className="productTitle">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="productPrice"><Currency value={item.price}/></div>
                                </div>
                            </div>
                        )
                    })}
                    responsive={responsiveProduct}
                    autoWidth
                    disableButtonsControls={true}
                    disableDotsControls={true}
                    paddingRight={50}
                />
            </div>
    )
}