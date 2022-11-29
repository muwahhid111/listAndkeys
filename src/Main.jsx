const Main = (props) => {
  console.log(props);
  return (
    <div className="list">
      <span className="id">Номер:{props.id}</span>
      <span>{props.name}</span>
      <span>Цена:{props.price}</span>
      <span>Остаток:{props.left}</span>
      <img className="img" src={props.img} alt="" />
    </div>
  );
};

export default Main;
