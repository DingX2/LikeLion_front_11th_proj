import Carousel from "../components/Carousel";
import MenuGrid from "../components/MenuGrid";
import ProductSection from "../components/ProductSection";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";

import { carouselItems } from "../assets/carouselItems";
import { menuItems, brandItems } from "../assets/menuItems";
import { productItems } from "../assets/productItems";

export default function HomePage() {
    return (
        <main className="home-page-wrapper">
            <Carousel carouselItems={carouselItems}></Carousel>

            <MenuGrid menuItems={menuItems} baseImgURL={"menu"}></MenuGrid>

            <SectionTitle title="Just Dropped" subtitle="발매 상품"></SectionTitle>
            <ProductSection productItems={productItems} begin={0} end={4}></ProductSection>

            <SectionTitle title="Top 8 Brand" subtitle="인기 탑 8 브랜드"></SectionTitle>
            <MenuGrid menuItems={brandItems} baseImgURL={"brands"} style={{ padding: "0px" }}></MenuGrid>

            <Banner imgSrc={"img/banner/banner1.jpg"}></Banner>
        </main>
    );
}
