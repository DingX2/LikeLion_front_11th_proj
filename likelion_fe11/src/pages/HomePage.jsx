import Carousel from "../components/Carousel";

const carouselItems = ["carousel_1.jpg", "carousel_2.jpg", "carousel_4.jpg", "carousel_5.jpg", "carousel_3.jpg", "carousel_6.jpg", "carousel_7.jpg", "carousel_8.jpg"];

export default function HomePage() {
    return (
        <main className="home-page-wrapper">
            <Carousel carouselItems={carouselItems}></Carousel>
        </main>
    );
}
