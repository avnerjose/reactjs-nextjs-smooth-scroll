import {
  ServicesCard,
  ServicesCardSubtitle,
  ServicesCardTitle,
  ServicesContainer,
  ServicesIcon,
  ServicesTitle,
  ServicesWrapper,
} from "./styles";
import Icon1 from "../../public/images/svg-1.svg";
import Icon2 from "../../public/images/svg-2.svg";
import Icon3 from "../../public/images/svg-4.svg";

export function ServicesSection() {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Our services</ServicesTitle>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon height={160} width={160} src={Icon1} />
          <ServicesCardTitle>Reduce expenses</ServicesCardTitle>
          <ServicesCardSubtitle>
            We help reduce your fees and increase your overall revenue.
          </ServicesCardSubtitle>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon height={160} width={160} src={Icon2} />
          <ServicesCardTitle>Virtual offices</ServicesCardTitle>
          <ServicesCardSubtitle>
            You can access our platform online anywhere in the world.
          </ServicesCardSubtitle>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon height={160} width={160} src={Icon3} />
          <ServicesCardTitle>Premium Benefits</ServicesCardTitle>
          <ServicesCardSubtitle>
            Unlock our special membership card that returns 5% cashback.
          </ServicesCardSubtitle>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
