import Container from "@/components/container";
import "./index.scss";
import Title from "@/components/title";

export default function AcademicSection() {
  return (
    <Container.Section colorScheme="color-2" id="academic-education">
      <Title.Primary
        title="Academic Education"
        subtitle="Educational intitutions that have contributed to my academic foundation"
      />
    </Container.Section>
  );
}
