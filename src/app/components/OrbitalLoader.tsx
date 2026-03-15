import { motion } from "motion/react";

export function OrbitalLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-32 h-32">
        {/* Central Core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9D4DFF] to-[#6CFFF3]" />
        </motion.div>

        {/* Orbiting Rings */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3 - index * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              transformOrigin: "center",
            }}
          >
            <div
              className="absolute top-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2"
              style={{
                background: index === 0 ? "#9D4DFF" : index === 1 ? "#6CFFF3" : "#3C22FF",
                boxShadow: `0 0 ${10 + index * 5}px ${
                  index === 0 ? "#9D4DFF" : index === 1 ? "#6CFFF3" : "#3C22FF"
                }`,
              }}
            />
          </motion.div>
        ))}

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4DFF]/30 to-[#6CFFF3]/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
