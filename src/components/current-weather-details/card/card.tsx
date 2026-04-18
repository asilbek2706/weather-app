import './card.css';

interface IProps {
  type: string;
  value: string;
}

export const CurrentWeatherDetailsCard = ({ type, value }: IProps) => {
  return (
    <div className="current-weather__card">
      <p className="current-weather__card-type">{type}</p>
      <p className="current-weather__card-type">{value}</p>
    </div>
  );
};
