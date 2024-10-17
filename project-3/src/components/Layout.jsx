import { Link, Outlet, useNavigate } from "react-router-dom";
import './Layout.css'

function Layout() {
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <div className="gnb">
                    <ul className="ul">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/contents">컨텐츠</Link></li>
                        <li style={{marginLeft:"auto"}}><Link to="/login">로그인</Link></li>
                    </ul>
                </div>
            </header>
            <Outlet/>
        </div>
    )
  }

export default Layout;