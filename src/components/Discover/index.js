import { Link } from "react-router-dom";
import './styles.css';
import banner1 from '../../images/banner-1.png';
import banner2 from '../../images/banner-2.png';

export default function Header() {

    return (
        <>
            <div className="discoverCard dPink">
                <div className="discoverCardImg">
                    <img src={banner1} alt="Banner 1" title="Banner 1" width="245" />
                </div>
                <div className="discoverCardTexts">
                    <div className="discoverCardTitleButtom">
                        <div className="discoverCardTitle">
                            Solid Gold Petite Micropave 
                        </div>
                        <div className="discoverCardButton">
                            <Link to="/produto/3">
                                <div className="discoverCardButtonText">SHOP</div>
                            </Link>
                        </div>
                    </div>
                    <div className="discoverCardDescription">
                        "Satisfaction Guaranteed. Return or exchange any order within 30 days.
                        Designed and sold by Hafeez Center in the United States. 
                        Satisfaction Guaranteed. Return or exchange any order within 30 days."
                    </div>
                </div>
            </div>
            <div className="discoverCard dBlue">
                <div className="discoverCardImg">
                    <img src={banner2} alt="Banner 2" title="Banner 2" width="217" />
                </div>
                <div className="discoverCardTexts">
                    <div className="discoverCardTitleButtom">
                        <div className="discoverCardTitle">
                            SanDisk SSD PLUS 1TB...
                        </div>
                        <div className="discoverCardButton">
                            <Link to="/produto/1">
                                <div className="discoverCardButtonText">SHOP</div>
                            </Link>
                        </div>
                    </div>
                    <div className="discoverCardDescription">
                        Easy upgrade for faster boot up, shutdown, 
                        application load and response (As compared to 5400 RPM SATA 2.5”
                        hard drive; Based on published specifications and internal benchmarking
                        tests using PCMark vantage...
                    </div>
                </div>
            </div>
        </>
    )
}