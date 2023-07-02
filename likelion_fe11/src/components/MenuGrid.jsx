import "../styles/MenuGrid.scss";

export const MenuGridItem = ({ text, img, style }) => {
    return (
        <div className="menu-grid-item">
            <img src={process.env.PUBLIC_URL + `/img/menu/${img}`} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default function MenuGrid({ menuItems, menuText }) {
    return (
        <div className="menu-grid-wrapper wrapper">
            <div className="menu-grid-container container">
                {menuItems.slice(0, 4).map((item, index) => {
                    return <MenuGridItem img={item.img} text={item.text}></MenuGridItem>;
                })}
            </div>

            <div className="menu-grid-container container">
                {menuItems.slice(4, 9).map((item, index) => {
                    return <MenuGridItem img={item.img} text={item.text}></MenuGridItem>;
                })}
            </div>
        </div>
    );
}
