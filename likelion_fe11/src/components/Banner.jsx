import "../styles/Banner.scss";

export default function Banner({ imgSrc }) {
    return (
        <div className="banner-wrapper wrapper">
            <img src={process.env.PUBLIC_URL + imgSrc} alt="" />
        </div>
    );
}
