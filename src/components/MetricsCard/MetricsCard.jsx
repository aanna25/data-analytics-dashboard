import s from "./MetricsCard.module.css";

const MetricsCard = ({ title, value, unit = "", bgColor }) => {
  if (value === undefined || value === null) {
    return (
      <div
        className={s.wrapper}
        style={{ backgroundColor: bgColor || "var(--card)" }}
      >
        Brak danych
      </div>
    );
  }

  return (
    <div
      className={s.wrapper}
      style={{ backgroundColor: bgColor || "var(--card)" }}
    >
      <p className={s.title}>{title}</p>
      <div className={s.valueContainer}>
        <span className={s.value}>{value}</span>
        {unit && <span className={s.unit}>{unit}</span>}
      </div>
    </div>
  );
};

export default MetricsCard;
