import "../styles/SectionTitle.scss";

export default function SectionTitle({ title, subtitle }) {
    return (
        <>
            <div className="section-title container" style={{ marginBottom: "40px" }}>
                <div></div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </>
    );
}
