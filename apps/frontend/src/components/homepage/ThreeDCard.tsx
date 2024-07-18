
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import FeatureCard from "./FeatureCard";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          <FeatureCard/>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}