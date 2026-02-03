import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="flex place-items-center bg-white py-20">
        <div className="container mx-auto items-center flex">
          <div className="text-left mb-8 md:w-1/2">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Compromiso con la calidad
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Soluciones industriales a la medida de tu proceso
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
              Ofrecemos asesoría, interventoría, diseño, construcción, mantenimiento por outsourcing y montajes industriales.
            </Typography>
            
          </div>
          <img src="consistenly.png" alt="components" className="mx-auto hidden md:flex md:w-1/2" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
