import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import "./PokemonCard.css";
import StarButton from "./StarButton";

const PokemonCard = ({ name, image, number, abilities, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(", ");
  const allAbilities = abilities.map((a) => a.ability.name).join(", ");

  const handleOnClick = () => {
    dispatch(setFavorite({pokemonId: id}));
  };

  return (
    <div className="PokemonCard">
      <Card
        title={number + " - " + name}
        cover={<img src={image} alt={name} />}
        extra={<StarButton isFavorite={favorite} onClick={handleOnClick} />}
      >
        <Meta
          title="Type"
          description={typesString}
          style={{ marginBottom: 20 }}
        />
        <Meta title="Abilities" description={allAbilities} />
      </Card>
    </div>
  );
};

export default PokemonCard;
