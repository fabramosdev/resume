import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <div id="about" className="mt-5">
        <Card className="w-[1024px]">
          <CardHeader>
            <CardTitle>Sobre</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              maxime expedita libero et hic eum asperiores! Ad obcaecati totam
              rerum nobis earum laudantium temporibus illo ipsum ut,
              necessitatibus, praesentium id!
            </p>
          </CardContent>
        </Card>
      </div>
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
      <div id="expertise" className="mt-5">
        <Card className="w-[1024px]">
          <CardHeader>
            <CardTitle>Experiência Profissional</CardTitle>
          </CardHeader>
          <CardContent>
            <CardTitle>Grupo Soma</CardTitle>
            <p className="font-light text-xs mt-3">De Jan/2021 à Dez/2022</p>
            <Separator className="mt-2 mb-2" />
            <Label className="mb-2">Atividades</Label>
            <p className="font-light text-xs mt-1.6">
              Manutenção do app Animale (Android e iOS)
            </p>
            <p className="font-light text-xs mt-1.6">
              Manutenção do app Hering (Android e iOS)
            </p>
            <p className="font-light text-xs mt-1.6">
              Criação do app SomaBox (Android e iOS)
            </p>
            <Label className="mt-2 mb-2">Resumo</Label>
            <p className="font-light text-xs mt-1.6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit debitis error sunt molestias consequuntur laboriosam
              consectetur quasi nemo, perferendis et necessitatibus dicta quam
              odio provident nisi vero autem ut ratione.
            </p>
            <Separator className="my-10 border-2" />
          </CardContent>
          <CardContent>
            <CardTitle>Grupo Soma</CardTitle>
            <p className="font-light text-xs mt-3">De Jan/2021 à Dez/2022</p>
            <Separator className="mt-2 mb-2" />
            <Label className="mb-2">Atividades</Label>
            <p className="font-light text-xs mt-1.6">
              Manutenção do app Animale (Android e iOS)
            </p>
            <p className="font-light text-xs mt-1.6">
              Manutenção do app Hering (Android e iOS)
            </p>
            <p className="font-light text-xs mt-1.6">
              Criação do app SomaBox (Android e iOS)
            </p>
            <Label className="mt-2 mb-2">Resumo</Label>
            <p className="font-light text-xs mt-1.6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit debitis error sunt molestias consequuntur laboriosam
              consectetur quasi nemo, perferendis et necessitatibus dicta quam
              odio provident nisi vero autem ut ratione.
            </p>
            <Separator className="my-10 border-2" />
          </CardContent>
          <CardContent>
            <CardTitle>Grupo Soma</CardTitle>
            <p className="font-light text-xs mt-3">De Jan/2021 à Dez/2022</p>
            <Separator className="mt-2 mb-2" />
            <Label className="mb-2">Atividades</Label>
            <p className="font-light text-xs mt-1.6">
              Manutenção do app Animale (Android e iOS)
            </p>
            <p className="font-light text-xs mt-1.6">
              Manutenção do app Hering (Android e iOS)
            </p>
            <p className="font-light text-xs mt-1.6">
              Criação do app SomaBox (Android e iOS)
            </p>
            <Label className="mt-2 mb-2">Resumo</Label>
            <p className="font-light text-xs mt-1.6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit debitis error sunt molestias consequuntur laboriosam
              consectetur quasi nemo, perferendis et necessitatibus dicta quam
              odio provident nisi vero autem ut ratione.
            </p>
            <Separator className="my-10 border-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
