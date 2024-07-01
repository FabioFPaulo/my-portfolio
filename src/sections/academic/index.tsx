import Container from "@/components/container";
import "./index.scss";
import Title from "@/components/title";
import Card from "@/components/card";
import { academicData } from "./utils";
import { formatStartEndDate } from "../experiences/utils";

export default function AcademicSection() {
  return (
    <Container.Section colorScheme="color-2" id="academic-education">
      <Title.Primary
        title="Academic Education"
        subtitle="Educational intitutions that have contributed to my academic foundation"
      />
      <div className="list">
        {academicData.map((item, index) => (
          <Card.Academic
            key={index}
            href={item.href}
            title={item.title}
            src={item.src}
            dateString={formatStartEndDate(item.start_at, item.end_at)}
            leftAnimation={index % 2 === 0}
          />
        ))}
      </div>
    </Container.Section>
  );
}
