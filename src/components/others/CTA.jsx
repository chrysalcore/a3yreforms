function CTA({ children, onClick }) {
    return (
        <div className="cta">
            <button className="cta__btn button" onClick={onClick}>{children}</button>
        </div>
    )
}

export default CTA