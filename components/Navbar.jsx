'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import search from '../public/search.svg';
import menu from '../public/menu.svg';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div className={`${styles.innerWidth} mx-auto flex justify-betwteen gap-8`}>
      <div>
        <Image
          className="w-[24px] h-[24px] object-contain"
          src={search}
          alt="search"
          width={50}
          height={50}
        />
      </div>
      <div className="grow text-center">
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METEAVERSUS
        </h2>
      </div>
      <div>
        <Image
          className="w-[24px] h-[24px] object-contain"
          src={menu}
          alt="menu"
          width={50}
          height={50}
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
