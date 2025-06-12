import styles from "../styles/button.module.css";

export default function Button({ text, icon, handleClick, loading }) {
    return (
        <button
            onClick={handleClick}
            className={styles.btn}
            disabled={loading}
        >
            {loading ? (
                <span className={styles.spinner}></span>
            ) : (
                <>
                    {text} {icon}
                </>
            )}
        </button>
    );
}
