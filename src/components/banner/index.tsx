import useApp from "@/hooks/useApp";
import "./index.scss";
import { componentData } from "./utils";
import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
export default function Banner() {
  const app = useApp();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && !app.isLoading) {
      mainControls.start("visible");
    } else {
      mainControls.set("hidden");
    }
  }, [isInView, mainControls, app.isLoading]);

  return (
    <div ref={ref} className="banner" id="home">
      <img
        src="/my-portfolio/images/bg.jpg"
        alt="background"
        className="bg-image"
        onLoad={app.incrementImages}
      />
      <div className="main-content">
        <div className="left-side">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 74 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.25, delay: 0.25 }}
            className="content"
          >
            <div className="titles">
              <div className="subtitle">{componentData.subtitle}</div>
              <div className="title">{componentData.title}</div>
            </div>
            <div className="divider"></div>
            <div className="fields">
              {componentData.fields.map((field, index) => (
                <div className="field" key={index}>
                  <div className="label">{field.label}</div>
                  <div className="value">{field.value}</div>
                </div>
              ))}
            </div>
            <button>download cv</button>
          </motion.div>
        </div>
        <div className="right-side">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 74 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.25, delay: 0.25 }}
            className="content"
          >
            <img
              alt="Fábio Paulo"
              src={"/my-portfolio/images/person_lg2.png"}
              onLoad={app.incrementImages}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
