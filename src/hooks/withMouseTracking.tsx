import { useMotionValue, MotionValue } from "framer-motion";
import React, { MouseEvent, FC } from "react";

interface WithMouseTrackingProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const withMouseTracking = <P extends WithMouseTrackingProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithMouseTracking: FC<Omit<P, keyof WithMouseTrackingProps>> = (
    props
  ) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <div onMouseMove={handleMouseMove}>
        <WrappedComponent {...(props as P)} mouseX={mouseX} mouseY={mouseY} />
      </div>
    );
  };

  return WithMouseTracking;
};
