import { MotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { withMouseTracking } from "~/hooks/withMouseTracking";

interface SpotlightCardProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  color?: string;
}

const primaryColor = "rgba(14, 165, 233, 0.15)";

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  mouseX,
  mouseY,
  color = primaryColor,
}) => {
  return (
    <div className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl">
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className="text-base font-semibold leading-7 text-sky-500">
          Byline
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">
            Hero
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum
          eum ullam nostrum atque quam.
        </p>
      </div>
    </div>
  );
};

export const TrackedSpotlightCard = withMouseTracking(SpotlightCard);
