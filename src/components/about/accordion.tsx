import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          ¿Qué es CR Soluciones Industriales?
        </AccordionHeader>
        <AccordionBody className="text-blue-gray-800">
          Prestamos un servicio de asesoría con acompañamiento en la solución y mejoramiento de procesos industriales mediante interventoría o ejecución en diseño, construcción y montaje, así como mantenimiento por outsourcing. Comercializamos repuestos, grasas y lubricantes.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          ¿Cómo contactarnos?
        </AccordionHeader>
        <AccordionBody className="text-blue-gray-800">
          Escríbenos por WhatsApp al 311-360.84.91 o visita nuestra página de contacto. Estamos para apoyarte en diseño, fabricación, reparación de piezas y montajes industriales.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          ¿Qué servicios ofrecemos?
        </AccordionHeader>
        <AccordionBody className="text-blue-gray-800">
          Asesoría e interventoría, diseño, construcción, mantenimiento por outsourcing y montajes. Equipos para extrusión de caucho, marginadores para molino, molino triturador, aglutinadoras, extrusoras, tinas de enfriamiento, bandas haladoras, mesas de corte, sistemas de dosificación, torre de enfriamiento y fabricación de repuestos.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}