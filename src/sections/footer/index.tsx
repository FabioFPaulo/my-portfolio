import Container from "@/components/container";
import "./index.scss";

export default function FooterSection() {
  return (
    <Container.Section id="footer" colorScheme="color-1">
      <div>
        &copy; Copyright{" "}
        <a href="https://github.com/FabioFPaulo" target="_blank">
          FabioFPaulo
        </a>
        , all rights reserved
      </div>
    </Container.Section>
  );
}
