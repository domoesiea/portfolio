// components/motion.ts
import { motion } from "framer-motion";
import React from "react";

export const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & React.ComponentPropsWithoutRef<"div">
>;

export const MotionLink = motion.a as React.ComponentType<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ComponentPropsWithoutRef<"a">
>;
