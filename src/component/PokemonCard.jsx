import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, image, number, abilities }) => {
  const allAbilities = abilities.map(a => a.ability.name).join(", "); 
  return (
    <Card
      title={number + " - " + name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta title="Abilities" description={allAbilities}></Meta>
    </Card>
  );
};

export default PokemonCard;
