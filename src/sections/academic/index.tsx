import Container from "@/components/container";
import Title from "@/components/title";
import Card from "@/components/card";
import { academicRepository } from "@/repositories";
import { formatStartEndDate } from "../experiences/utils";
import "./index.scss";

export default function AcademicSection() {
  const academicList = academicRepository.getAcademicData();

  return (
    <Container.Section colorScheme="color-2" id="academic-education">
      <Title.Primary
        title="Academic Education"
        subtitle="Academic degrees and qualifications shaping my engineering foundation"
      />
      <div className="academic-grid">
        {academicList.map((item, index) => (
          <Card.Academic
            key={item.id}
            href={item.website}
            title={`${item.degree} - ${item.field}`}
            institution={item.institution}
            location={item.location}
            src={item.logo}
            badge={item.badge}
            grade={item.grade}
            dateString={formatStartEndDate(item.startDate, item.endDate)}
            leftAnimation={index % 2 === 0}
          />
        ))}
      </div>
    </Container.Section>
  );
}
