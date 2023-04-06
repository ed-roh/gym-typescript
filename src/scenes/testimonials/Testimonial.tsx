import { motion } from "framer-motion";

type Props = {
  name: string;
  image: string;
  title?: string;
  description: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Testimonial = ({ name, image, title, description }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={childVariant}
      className="mb-12 md:mb-0"
    >
      <div className="mb-6 flex justify-center">
        <img
          src={image}
          className="w-32 rounded-full shadow-lg"
          alt="testimonials"
        />
      </div>
      <h5 className="mb-4 text-lg font-bold">{name}</h5>
      <h6 className="mb-4 font-medium text-primary-500">{title}</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="inline-block w-6 pr-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="text-primary-500"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        {description}
      </p>
    </motion.div>
  );
};

export default Testimonial;
