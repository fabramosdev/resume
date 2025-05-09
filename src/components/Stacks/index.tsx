import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export function Stacks() {
  return (
    <div id="stacks" className="mt-5">
      <Card className="w-[1024px]">
        <CardHeader>
          <CardTitle>Stacks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <p>
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src="src/assets/javascript.png"
                    alt=""
                    className="h-[48px] w-auto"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center">
                    <img
                      src="src/assets/javascript.png"
                      alt=""
                      className="h-[48px] w-auto"
                    />
                    <CardTitle className="ml-6">Javascript</CardTitle>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
            <p>
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src="src/assets/node.png"
                    alt=""
                    className="h-[48px] w-auto mx-4"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center">
                    <img
                      src="src/assets/node.png"
                      alt=""
                      className="h-[48px] w-auto mx-4"
                    />
                    <CardTitle className="ml-6">NodeJS</CardTitle>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
            <p>
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src="src/assets/react.png"
                    alt=""
                    className="h-[48px] w-auto mx-4"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center">
                    <img
                      src="src/assets/react.png"
                      alt=""
                      className="h-[48px] w-auto mx-4"
                    />
                    <CardTitle className="ml-6">ReactJS</CardTitle>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
            <p>
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src="src/assets/reactnative.png"
                    alt=""
                    className="h-[48px] w-auto mx-4"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex items-center">
                    <img
                      src="src/assets/reactnative.png"
                      alt=""
                      className="h-[48px] w-auto mx-4"
                    />
                    <CardTitle className="ml-6">ReactNative</CardTitle>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
