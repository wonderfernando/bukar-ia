import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

export default function DisciplinePage() {
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
            <div className="overflow-x-hidden px-2 mt-20 flex flex-col gap-4 pb-8">
                <h1 className="text-center text-2xl">Escolhe a disciplina</h1>
                <div className="grid grid-cols-2 gap-4 px-2">
                    <Link href="/bot/lp">
                        <Card className="shadow-lg overflow-hidden">
                            <CardContent className="px-0">
                                <img src="./images/PRT02.png" className="w-full h-48" alt="" />
                                <h1 className="px-4 text-center">Lingua portuguesa</h1>
                            </CardContent>
                        </Card>
                    </Link>
                    
                    <Link href="/bot/mt">
                    <Card className="shadow-lg overflow-hidden">
                        <CardContent className="px-0">
                            <img src="./images/MAT02.png" className="w-full h-48" alt="" />
                            <h1 className="px-4 text-center">Matematica</h1>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link href="/bot/em">
                    <Card className="shadow-lg overflow-hidden">
                        <CardContent className="px-0">
                            <img src="./images/EDM02.png" className="w-full h-48" alt="" />
                            <h1 className="px-4 text-center">Estudo do meio</h1>
                        </CardContent>
                    </Card>
                    </Link>
                    <Link href="/bot/ep">
                    <Card className="shadow-lg overflow-hidden">
                        <CardContent className="px-0">
                            <img src="./images/EMP02.png" className="w-full h-48" alt="" />
                            <h1 className="px-4 text-center">Educao manual</h1>
                        </CardContent>
                    </Card>
                    </Link>
                </div>
            </div>
         
        </div>
    )
}