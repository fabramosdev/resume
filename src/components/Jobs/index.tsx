import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button";
import { Separator, Label } from "@radix-ui/react-dropdown-menu";

export function Jobs() {
  return (
    <div id="expertise" className="mt-5">
      <Card className="w-[1024px]">
        <CardHeader>
          <CardTitle>Experiência Profissional</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-auto">
            <TabsList className="">
              <TabsTrigger value="soma">
                <Button variant={"outline"} className="mr-2">
                  Grupo Soma
                </Button>
              </TabsTrigger>
              <TabsTrigger value="corebiz">
                <Button variant={"outline"} className="mr-2">
                  CoreBiz
                </Button>
              </TabsTrigger>
              <TabsTrigger value="k2">
                <Button variant={"outline"} className="mr-2">
                  K2 Partners
                </Button>
              </TabsTrigger>
              <TabsTrigger value="frog">
                <Button variant={"outline"} className="mr-2">
                  Agência Frog
                </Button>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="soma">
              <CardContent className="px-0">
                <p className="font-light text-xs mt-3">
                  De Jan/2021 à Dez/2022
                </p>
                <Separator className="mt-2 mb-2" />
                <Label className="mb-2">Atividades</Label>
                <p className="font-light text-xs mt-1.6">
                  Manutenção do app Animale
                </p>
                <p className="font-light text-xs mt-1.6">
                  Manutenção do app Hering
                </p>
                <p className="font-light text-xs mt-1.6">
                  Criação do app SomaBox
                </p>
                <Label className="mt-2 mb-2">Resumo</Label>
                <p className="font-light text-xs mt-1.6">
                  No Grupo Soma iniciei aplicando manutenção e adição de novas
                  funcionalidades do aplicativo Animale, pertencente ao Grupo.
                  Posteriormente participei da equipe de transição e passagem de
                  conhecimento do aplicvativo Hering - O Grupo Hering tinha sido
                  adquirido pelo Grupo Soma. Também participei da criação do
                  aplicativo interno Somabox, uma espécio de PDV mobile para
                  executar vendas diretamente do celular.
                  <br />
                  No Grupo Soma, na época, a stack utilizada era o javascript
                  utilizando o ReactNative para todas as aplicações das quais
                  fiz parte.
                </p>
                <Label className="mt-2 mb-2">Informações adicionais</Label>
                <p className="font-light text-xs mt-1.6">Contrato PJ</p>
              </CardContent>
            </TabsContent>
            <TabsContent value="corebiz">
              <CardContent className="px-0">
                <p className="font-light text-xs mt-3">
                  De Jan/2021 à Mai/2021
                </p>
                <Separator className="mt-2 mb-2" />
                <Label className="mb-2">Atividades</Label>
                <p className="font-light text-xs mt-1.6">
                  Manutenção e desenvolvimento de novas funcionalidades do site
                  Maria Filó
                </p>
                <p className="font-light text-xs mt-1.6">
                  Manutenção do site Atacadista BIGBIG
                </p>
                <p className="font-light text-xs mt-1.6">
                  Manutenção e desenvolvimento de funcionalidades do site
                  Carrefour
                </p>
                <Label className="mt-2 mb-2">Resumo</Label>
                <p className="font-light text-xs mt-1.6">
                  Na empresa Corebiz obtive novos conhecimentos tais como o
                  funcionamento geral de um e-commerce e também da plataforma
                  VTEX. O site Maria Filó utilizava VTEX de forma Legada e os
                  demais sites já aplicavam o VTEX.IO, baseado em React +
                  Typescript.
                </p>
                <Label className="mt-2 mb-2">Informações adicionais</Label>
                <p className="font-light text-xs mt-1.6">
                  Contrato CLT - Temporário
                </p>
              </CardContent>
            </TabsContent>
            <TabsContent value="k2">
              <CardContent className="px-0">
                <p className="font-light text-xs mt-3">
                  De Out/2020 à Mar/2021
                </p>
                <Separator className="mt-2 mb-2" />
                <Label className="mb-2">Atividades</Label>
                <p className="font-light text-xs mt-1.6">
                  Criação do aplicativo web interno BoxUp, do Grupo Votorantim
                </p>
                <Label className="mt-2 mb-2">Resumo</Label>
                <p className="font-light text-xs mt-1.6">
                  Atuando no Grupo Votorantim como terceirizado pela K2
                  Partners, a princípio para continuar o projeto em andamento
                  pude constatar problemas na arquitetura do projeto e foi
                  decidido junto com os stakeholders iniciar um novo projeto do
                  zero.
                  <br />O projeto BoxUp consiste em uma plataforma de idéias
                  onde funcionário de todos os setores do Grupo Votorantim
                  poderiam cadastrar seus projetos/idéias na plataforma,
                  passando por sete níveis, sendo o último a aprovação e
                  implementação da idéia. Foi utilizado no projeto o ReactJS no
                  frontend e NestJS no Backend, substituindo o Strapi.
                </p>
                <Label className="mt-2 mb-2">Informações adicionais</Label>
                <p className="font-light text-xs mt-1.6">Contrato PJ</p>
              </CardContent>
            </TabsContent>
            <TabsContent value="frog">
              <CardContent className="px-0">
                <p className="font-light text-xs mt-3">
                  De Jan/2019 à Jul/2020
                </p>
                <Separator className="mt-2 mb-2" />
                <Label className="mb-2">Atividades</Label>
                <p className="font-light text-xs mt-1.6">
                  Criação do site Juçaí
                </p>
                <p className="font-light text-xs mt-1.6">
                  Criação do site EAD Unisuam
                </p>
                <p className="font-light text-xs mt-1.6">
                  Primeiro release do site da FM O Dia
                </p>
                <p className="font-light text-xs mt-1.6">
                  Manutenção do site da Comgás
                </p>
                <Label className="mt-2 mb-2">Resumo</Label>
                <p className="font-light text-xs mt-1.6">
                  Na Agência frog pude trabalhar com alguns grandes clientes
                  (Oi, Unisuam, Comgás) ambos utilizando Wordpress.
                </p>
                <Label className="mt-2 mb-2">Informações adicionais</Label>
                <p className="font-light text-xs mt-1.6">Contrato PJ</p>
              </CardContent>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
