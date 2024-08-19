import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function NivelPage() {
    const classes = [
        {
            id: 1,
            name:"1 classe",
        },
        {
            id: 2,
            name:"2 classe",
        },
        {
            id: 3,
            name:"3 classe",
        },
        {
            id: 4,
            name:"4 classe",
        },
        {
            id: 5,
            name:"5 classe",
        },{
            id: 6,
            name:"6 classe",
        }

    ]
    return (
        <div className="flex items-center justify-center">
            <div className="overflow-x-hidden px-2 mt-44 flex flex-col gap-4">
                <h1 className="text-center text-3xl">Escolhe a classe</h1>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {classes.map((classe) => <CarouselItem className="pl-2 md:pl-4 basis-1/3"><Card><CardHeader><CardTitle className="text-center text-2xl">{`${classe.name.split(" ")[0]}ª`}</CardTitle></CardHeader><CardContent className="text-center">{classe.name.split(" ")[1]}</CardContent></Card></CarouselItem>)}
                    </CarouselContent>
                </Carousel>
            </div>
         
        </div>
    )
}