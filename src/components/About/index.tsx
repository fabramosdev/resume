import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export function About() {
  return (
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
  );
}
