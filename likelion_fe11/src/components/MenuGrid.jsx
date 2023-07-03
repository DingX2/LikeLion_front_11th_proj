import "../styles/MenuGrid.scss";

export const MenuGridItem = ({ text, img, baseImgURL, style }) => {
    return (
        <div className="menu-grid-item">
            <img src={process.env.PUBLIC_URL + `/img/${baseImgURL}/${img}`} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default function MenuGrid({ menuItems, baseImgURL, style }) {
    return (
        <div className="menu-grid-wrapper wrapper" style={style}>
            <div className="menu-grid-container container">
                {menuItems.slice(0, 4).map((item, index) => {
                    return <MenuGridItem img={item.img} baseImgURL={baseImgURL} text={item.text}></MenuGridItem>;
                })}
            </div>

            <div className="menu-grid-container container">
                {menuItems.slice(4, 9).map((item, index) => {
                    return <MenuGridItem img={item.img} baseImgURL={baseImgURL} text={item.text}></MenuGridItem>;
                })}
            </div>

            <hr />
        </div>
    );
}
