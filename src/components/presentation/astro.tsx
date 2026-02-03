import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              Nuestro enfoque
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              ¿Qué hacemos?
            </Typography>
            <Typography variant="lead" color="white">
              Prestamos servicio de asesoría con acompañamiento en la solución y mejoramiento de procesos industriales mediante interventoría o ejecución en diseño, construcción y montaje, así como mantenimiento por outsourcing. Comercializamos repuestos, grasas y lubricantes.
            </Typography>
            <a href="https://wa.me/573113608491" target="_blank" rel="noreferrer">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-12">
                Contactar
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="astro.png"
              alt="astro"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
