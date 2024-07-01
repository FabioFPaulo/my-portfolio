import Cards from "../../components/cards";
import Containers from "../../components/containers";
import Title from "../../components/title";
import "./index.scss";
import { experiencesData, formatStartEndDate } from "./utils";

export default function Experiences() {
  return (
    <Containers.Section colorScheme="gradient" id="experiences">
      <Title.Primary
        title="Experiences"
        subtitle="Discover the experiences that have shaped my professional journey"
      />
      <div className="list">
        {experiencesData.map((item, index) => (
          <Cards.Experience
            key={index}
            date={formatStartEndDate(item.start_at, item.end_at)}
            title={item.title}
            company={item.company}
            description={item.description}
          />
        ))}
      </div>
    </Containers.Section>
  );
}
