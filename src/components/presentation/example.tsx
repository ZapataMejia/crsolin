import React from "react";
import {
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-center mg:mx-64">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Powerful Ecommerce UI Tool
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight lg:mx-52"
            >
              CR Soluciones Industriales: diseño, fabricación y reparación de piezas industriales.
            </Typography>
            <Typography color="blue-gray" className="mb-8 lg:mx-80">
              Don’t spend hours reinventing the wheel! Our UI tool comes packed with everything you need for you Online Store.
            </Typography>
          </div>
            <img src="checkout.jpg" alt="iphone" className="w-full rounded-3xl mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
