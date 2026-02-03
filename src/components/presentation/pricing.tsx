import React, { useEffect } from "react";
// import Script from "next/script";

import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

function PaddleLoader() {
  useEffect(() => {
    // Check if we are in the browser environment
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.paddle.com/paddle/paddle.js';
      script.onload = () => {
        // Access the Paddle global object from the script
        window.Paddle.Setup({
          vendor: Number(102023),
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

export function PricingSectionOne() {
  return (
    <>
    <PaddleLoader />
      <section id="pricing" className="py-24 px-8">
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Contáctanos
          </Typography>
          <Typography className="mb-8 font-normal !text-gray-500">
            Cotizaciones y proyectos a la medida. Escríbenos por WhatsApp o visita nuestra web.
          </Typography>
        </div>
        <div className="mt-12">
          <div className="container mx-auto md:flex justify-center gap-10">
            <Card
              color="transparent"
              className="border border-blue-gray-100 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="capitalize mb-2 text-center"
                >
                  Información
                </Typography>

                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="flex gap-1 justify-center"
                >
                  Gratuita
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Asesoría inicial
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Cotización sin compromiso
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      WhatsApp 311-360.84.91
                    </Typography>
                  </li>
                  <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                    <Typography variant="small" className="font-normal text-inherit">
                      Nosotros, Login, Contacto
                    </Typography>
                  </li>
                </ul>
                <a href="https://wa.me/573113608491" target="_blank" rel="noreferrer">
                  <Button
                    size="sm"
                    variant="gradient"
                    color="blue-gray"
                    className="from-blue-gray-900 to-blue-gray-800"
                  >
                    Contactar
                  </Button>
                </a>
              </CardBody>
            </Card>

            <Card
              color="blue-gray"
              className="bg-dark w-full md:w-1/2 lg:w-1/4">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="!m-0 pt-6 text-center"
              >
                <Typography
                  variant="h5"
                  color="white"
                  className="capitalize mb-2 text-center"
                >
                  Proyectos a medida
                </Typography>

                <Typography
                  variant="h3"
                  color="white"
                  className="flex gap-1 justify-center"
                >
                  Cotización
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <ul className="flex flex-col mb-8 px-5">
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Diseño y fabricación
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Montaje e interventoría
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Mantenimiento outsourcing
                    </Typography>
                  </li>
                  <li
                    className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                    <Typography variant="small" className="font-normal text-inherit">
                      Repuestos y lubricantes
                    </Typography>
                  </li>
                </ul>
                <a href="https://wa.me/573113608491" target="_blank" rel="noreferrer">
                  <Button
                    id="847482"
                    size="sm"
                    variant="gradient"
                    color="white"
                  >
                    Solicitar cotización
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSectionOne;
