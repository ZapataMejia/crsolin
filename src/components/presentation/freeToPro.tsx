import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "12+",
    title: "Equipos extrusión caucho",
    desc: "Extrusora, cabezales, tinas, bandas, mesas de corte, atemperadores, prensa vulcanizado."
  },
  {
    count: "9+",
    title: "Servicios principales",
    desc: "Molino triturador, aglutinadora, extrusora PVC, tinas, bandas, dosificación, repuestos."
  },
  {
    count: "100%",
    title: "A la medida",
    desc: "Diseño, construcción y montaje según las necesidades de tu proceso."
  },
  {
    count: "—",
    title: "Mantenimiento",
    desc: "Outsourcing de mantenimiento y comercialización de repuestos, grasas y lubricantes."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Nuestros equipos y servicios
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Diseño, fabricación y montaje
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              Equipos para extrusión de caucho, marginadores para molino, molino triturador, aglutinadoras, extrusoras, tinas de enfriamiento, bandas haladoras, mesas de corte, sistemas de dosificación, torre de enfriamiento y fabricación de repuestos.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a href="https://wa.me/573113608491" target="_blank" rel="noreferrer">
                  <Button color="dark" className="flex items-center">
                    Contactar
                  </Button>
                </a>
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
