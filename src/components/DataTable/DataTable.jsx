import s from "./DataTable.module.css";

const DataTable = ({ title, data }) => (
  <div className={s.wrapper}>
    <h3 className={s.title}>{title}</h3>
    <ul className={s.list}>
      {data.map(item => (
        <li key={item.postId} className={s.item}>
          <span className={s.postTitle}>{item.title}</span>
          <span className={s.count}>{item.commentsCount}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DataTable

