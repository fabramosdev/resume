import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export function Expertise() {
  return (
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
  );
}
