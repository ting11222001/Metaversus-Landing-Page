'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import map from '../public/map.webp';
import people01 from '../public/people-01.webp';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relateive mt-[68px] flex justify-center"
      >
        <Image
          src={map}
          alt="map"
          width={1000}
          height={1000}
          placeholder="blur"
        />

        <div className="absolute bottom-[10%] right-[10%] p-[6px] rounded-full bg-[#5d6680]">
          <Image
            src={people01}
            alt="map"
            width={70}
            height={70}
            placeholder="blur"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
