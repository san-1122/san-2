import { Link } from "react-router-dom"
import Menu from "./menu"
import './home.css'
import png1 from './image/1.png'
import png2 from './image/2.png'
import png3 from './image/3.png'
import png4 from './image/4.png'
import png5 from './image/5.png'
import png6 from './image/6.png'
import png7 from './image/7.png'
import png8 from './image/8.png'
import png9 from './image/9.png'
import png10 from './image/10.png'
import png11 from './image/11.png'
import png12 from './image/12.png'
import CookieConsent from "./cookie/cookie"
import { useCookies } from 'react-cookie';
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const click_regis = () => {
    wrapper.classList.add('active');
}

const click_login = () => {
    wrapper.classList.remove('active');
}

const close_modal = () => {
    wrapper.style.height = '0px';
    setInterval(() => {
        wrapper.style.border = '0px';
    }, 100)
}
const Home = () => {
    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <>
            <div className="app">
                {!cookies.cookieConsent && <CookieConsent />}
            </div>
            <Menu />
            <div>
                <div class="container mt-5 mb-5">
                    <div class="row">
                        <div class="col-sm-8 col-lg-8 col-xl-10 col-xxl-10 mt-5">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con1"} ><img src={png1} style={{ width: '250px', textAlign: 'center' }} ></img>
                                                <div className="buttonanima">สเนห์สาวข้าวปั้น</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con2"}><img src={png2} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima" style={{ fontSize: '12px' }}>โฉมงามพูดไม่เก่ง กับผองเพื่อนไม่เต็มเต็ง</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con3"}><img src={png3} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima" style={{ fontSize: '12px' }}>วันนั้น..วันไหนหัวใจจะเป็นสีชมพู</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con4"} ><img src={png4} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima">บีสตาร์</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con5"}><img src={png5} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima" style={{ fontSize: '12px' }}>แม่มดน้วยกิกิ</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con6"}><img src={png6} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima" style={{ fontSize: '12px' }}>วัยกระเตาะตึ่งตึงตึ๊ง</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con7"} ><img src={png7} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima">ป๊อปปี้ฮิลล์ร่ำร้องขอปาฏิหาริย์</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con8"}><img src={png8} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima" style={{ fontSize: '12px' }}>สมุดโน้ตกระชากวิญญาณ</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con9"}><img src={png9} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima" style={{ fontSize: '12px' }}>ถ้วยคำเอ่อล้นด้วยหัวใจรัก</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con10"} ><img src={png10} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima">ไวโอเล็ตเอเวอร์การ์เด้น</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con11"}><img src={png11} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima">ทูตสวรรค์ทัณอำมหิต</div></Link>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-xl-4 col-xxl-4 mt-5">
                                        <div className="anima">
                                            <Link to={"/con12"}><img src={png12} style={{ width: '250px', textAlign: 'center' }} />
                                                <div className="buttonanima">ฝันของฉันต้องมีเธอ</div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-sm-4 col-lg-4 col-xl-2 col-xxl-2" style={{ backgroundColor: '#ffff' }}>
                        <nav className='navigation'><Link to={"/login"} style={{color:'black'}}><a>Login</a></Link></nav>
                        </div>
                    </div>

                </div>
            </div>
            <h1>Home</h1>
            <Link to={"/pageone"}>
                <button>Go to Page one</button>
            </Link>
            <Link to={"/pagetwo"}>
                <button>Go to Page Two</button>
            </Link>
        </>
    )
}
export default Home