
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import img from '../../assets/explore.gif'

export function HeroCard3() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-3xl font-bold text-neutral-600 dark:text-white"
                >
                    Connect & <span className="text-blue-600">Collaborate</span>
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={-10}
                    rotateZ={20}
                    className="w-full mt-4"
                >
                    <img
                        src={img}

                        className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
            </CardBody>
        </CardContainer>
    );
}