import Carousel from "../components/Carousel";
import MenuGrid from "../components/MenuGrid";

import { carouselItems } from "../assets/carouselItems";
import { menuItems } from "../assets/menuItems";

export default function HomePage() {
    return (
        <main className="home-page-wrapper">
            <Carousel carouselItems={carouselItems}></Carousel>
            <MenuGrid menuItems={menuItems}></MenuGrid>
        </main>
    );
}
