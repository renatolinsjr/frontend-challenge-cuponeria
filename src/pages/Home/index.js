import { useState } from 'react';
import { Link } from "react-router-dom";
import Discover from '../../components/Discover';
import ProductSlide from '../../components/ProductSlide';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';
import '../../stylesHeader.css';
import iconLogo from '../../images/logo-cuponeria.png';

export default function Home() {

    const [checkValueMenu, setCheckValueMenu] = useState(undefined);

    const items = [
        <button className={checkValueMenu === undefined ? 'itemMenu itemMenuActive' : 'itemMenu'} onClick={(e) => backHome() } style={{width: 165}}>HOME</button>,
        <button className={checkValueMenu === 'men clothing' ? 'itemMenu itemMenuActive' : 'itemMenu'} onClick={(e) => pressMenu('men clothing')} style={{width: 235}}>MEN CLOTHING</button>,
        <button className={checkValueMenu === 'women clothing' ? 'itemMenu itemMenuActive' : 'itemMenu'} onClick={(e) => pressMenu('women clothing')} style={{width: 235}}>WOMEN CLOTHING</button>,
        <button className={checkValueMenu === 'electronics' ? 'itemMenu itemMenuActive' : 'itemMenu'} onClick={(e) => pressMenu('electronics')} style={{width: 235}}>ELECTRONICS</button>,
        <button className={checkValueMenu === 'jewelery' ? 'itemMenu itemMenuActive' : 'itemMenu'} onClick={(e) => pressMenu('jewelery')} style={{width: 235}}>JEWELERY</button>,
    ];

    function backHome(){
        setCheckValueMenu(undefined);
    }

    function pressMenu(value) {
        setCheckValueMenu(value);
      }

      const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    return (
        <>
            <div className="mainHeader">
                <div className="containerHeader">
                    <Link to="/">
                        <div className="containerLogo">
                            <img src={iconLogo} alt="Cuponeria" title="Cuponeria" width="64" />
                            <h1 className="textLogo">CUPONERIA STORE</h1>
                        </div>
                    </Link>
                    <div className="containerMenu">
                        <AliceCarousel
                            mouseTracking
                            autoWidth
                            items={items}
                            responsive={responsive}
                            disableButtonsControls={true}
                            disableDotsControls={true}
                            paddingRight={50}
                        />
                    </div>
                </div>
            </div>
            <div className="main">
              <div className="container">

                  <section className="grid grid-template-columns-1">
                      <div className="discoverTitle">DISCOVER</div>
                  </section>
                  <section className="grid grid-template-columns-2">
                      <Discover/>
                  </section>

                  <section className="grid grid-template-columns-1">
                      <div className="featuredTitle">FEATURED</div>
                  </section>
                  
                  <section>
                      <ProductSlide valueMenu={checkValueMenu} />
                  </section>

              </div>
            </div>
        </>
    )
}