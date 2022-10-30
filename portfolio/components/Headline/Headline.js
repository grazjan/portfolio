import styles from "./Headline.module.css";

const Headline = ({ topline, semantic, headline, children }) => {

    if(!semantic) {
        semantic = "strong"
    }

    const Tag = semantic;

    return (
        <div className={styles.headline}>
            {topline ? <p className={styles.topline}>{topline}</p> : null}
            {children || headline ? 
                <Tag>
                    {children ? children : headline}
                </Tag> 
                : null
            }
        </div>
    )
}

export default Headline
