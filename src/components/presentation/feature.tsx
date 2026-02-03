import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon1.png" alt="Diseño" />
    ),
    title: "Diseño",
    description:
      "Asesoría e interventoría en diseño de piezas y equipos industriales para procesos de caucho y plástico.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon2.png" alt="Fabricación" />
    ),
    title: "Fabricación",
    description:
      "Diseño, fabricación y reparación de piezas. Equipos para extrusión, molino, prensas y sistemas de dosificación.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon3.png" alt="Montajes" />
    ),
    title: "Montajes",
    description:
      "Construcción, mantenimiento por outsourcing y montajes industriales. Soluciones a la medida de tu proceso.",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
          <Typography color="dark" className="text-xl font-semibold">
            CR Soluciones Industriales
          </Typography>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
