import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import VentusButton from "../components/ventusbutton";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="grid grid-cols-3 gap-4 border-b-4 border-sky-500 object-cover">
        <div className="object-cover">
          <video autoPlay loop id="video-background" muted className="object-none">
            <source
              src="https://media-us-westslateappcom.s3.us-west-1.amazonaws.com/madcowfilms/production/clips/514ebae1-ebbb-4477-addd-d52a30cd28c1-1280x720.2500.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="col-span-2">
          <h1 className="px-6 text-8xl text-sky-600 font-bold ">Ventus</h1>
          <p className="px-20 py-4 text-center text-3xl text-slate-500 font-bold ">
            Es un Protocolo de medición, certificación y acondicionamiento,
            basado en simulaciones computacionales para garantizar un aire
            seguro sin recirculación en espacios cerrados.
          </p>
          <div className="grid grid-cols-2 gap-3 py-6">
            <div className="">
              <VentusButton title="WATCH NOW"/>
              <video autoPlay loop id="video-background" muted className="">
                <source
                  src="https://media-us-westslateappcom.s3.us-west-1.amazonaws.com/madcowfilms/production/clips/514ebae1-ebbb-4477-addd-d52a30cd28c1-1280x720.2500.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="grid px-6 items-center place-content-end">
              <h1 className="text-3xl text-center text-sky-700 font-bold justify-self-end">Contactenos</h1>
              <VentusButton title="LLAMENOS" className=""/>
              <p className="text-right">
              También nos puede contactar en Colombia:
                +57 3194086072
              Correo:
                  XXXX@fFLUMEX.edu.co
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-local" styles="background-image: url('../public/sense.png')" >
        Hola
      </div>
    </div>
  );
}
