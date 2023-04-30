import styles from "../styles/home.module.css";

type ListType = {
  head: string;
  text: string;
};

type InfoBlockProps = {
  title: string;
  info: string;
  list?: ListType[];
  extraInfo?: string;
};

const InfoBlock = ({ title, info, list, extraInfo }: InfoBlockProps) => {
  return (
    <div className={styles.info}>
      <h2>{title}</h2>
      <p>{info}</p>
      {list && (
        <ul>
          {list.map(({ head, text }: ListType, index) => (
            <li key={index}>
              <b>{head}:</b> {text}
            </li>
          ))}
        </ul>
      )}
      {extraInfo && <p>{extraInfo}</p>}
    </div>
  );
};

export { InfoBlock };
