import "../styles/ProductSection.scss";

export default function ProductSection({ title, subtitle, productItems, begin, end }) {
    return (
        <section className="product-section-wrapper wrapper">
            <div className="product-item-container container">
                {productItems.slice(begin, end).map((item, index) => {
                    return (
                        <div className="product-item">
                            <img src={process.env.PUBLIC_URL + `/img/products/${item["imgsrc"]}`} alt="" />
                            <div className="product-item-description">
                                <h5>{item["brand"]}</h5>
                                <p>{item["name"]}</p>
                                <span></span>
                                <h4>{item["price"]}</h4>
                                <p style={{ fontSize: "0.7rem" }}>즉시 구매가</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button>더보기</button>
        </section>
    );
}
