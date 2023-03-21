'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';
import whatsNew from '../public/whats-new.webp';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col lg:ml-[10%]"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus?</>} />

        <div className="mt-[48px] flex flex-wrap justfiy-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          className="w-[90%] h-[90%] object-contain"
          src={whatsNew}
          alt="whatsNew"
          width={600}
          height={450}
        />
      </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
