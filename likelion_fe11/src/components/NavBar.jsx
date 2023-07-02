import { Link } from "react-router-dom";

import "../styles/NavBar.scss";

export default function NavBar() {
    return (
        <nav className="nav-wrapper wrapper">
            <ul className="nav-upper container">
                <li style={{ flexGrow: 2 }} />
                <li>
                    <Link to="/notice">고객센터</Link>
                </li>
                <li>
                    <Link>마이페이지</Link>
                </li>
                <li>
                    <Link>관심상품</Link>
                </li>
                <li>
                    <Link>알림</Link>
                </li>
                <li>
                    <Link>로그인</Link>
                </li>
            </ul>

            <ul className="nav-middle container">
                <li>
                    <Link>KREAM</Link>
                </li>
                <li style={{ flexGrow: 2 }} />
                <li>
                    <Link>HOME</Link>
                </li>
                <li>
                    <Link>STYLE</Link>
                </li>
                <li>
                    <Link>SHOP</Link>
                </li>
                <li>
                    <Link>SEARCH</Link>
                </li>
            </ul>

            <ul className="nav-lower container">
                <li>
                    <Link>추천</Link>
                </li>
                <li>
                    <Link>랭킹</Link>
                </li>
                <li>
                    <Link>럭셔리</Link>
                </li>
                <li>
                    <Link>남성</Link>
                </li>
                <li>
                    <Link>여성</Link>
                </li>
                <li>
                    <Link>발견</Link>
                </li>
                <li style={{ flexGrow: 2 }} />
            </ul>
        </nav>
    );
}
