import "./styles.css"

const FloatingEle = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="heart text-red-500 text-2xl"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${3 + Math.random() * 3}s`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                >
                    🐘💕
                </div>
            ))}
        </div>
    );
};

export default FloatingEle;