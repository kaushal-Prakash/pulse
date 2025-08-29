"use client";
import { useEffect } from "react";
import { motion } from "motion/react"; 

export default function Home() {
  // In Next.js (App Router), when you import plotly.js-dist-min directly, 
  // it tries to access self (browser global) during SSR (server-side rendering). 
  // Since self doesn’t exist on the server, you get ReferenceError: self is not defined.
  useEffect(() => {
    // Import dynamically on client
    import("plotly.js-dist-min").then((Plotly) => {
      // The reason we usually use useRef is because Plotly needs a real DOM element (<div>) to draw the chart into. 
      // React renders JSX virtually first, so you can’t give Plotly the element directly until it exists in the DOM.

      // So useRef → points to a <div> → which React attaches to the real DOM → 
      // then inside useEffect you call Plotly.newPlot(plotRef.current, …).

      // But 👉 you don’t always need useRef

      // If you don’t want useRef, you can give your <div> an id and then grab it inside useEffect with document.getElementById

      // --- Bar Chart ---
      const barData = [
        {
          x: ["A", "B", "C", "D"],
          y: [10, 15, 13, 17], // static values now (no animation)
          type: "bar",
          marker: { color: "skyblue" },
        },
      ];

      const barLayout = {
        title: "Bar Chart",
        width: 500,
        height: 400,
      };

      Plotly.newPlot("bar-chart", barData, barLayout);

      // --- Pie Chart ---
      const pieData = [
        {
          labels: ["Red", "Blue", "Yellow", "Green"],
          values: [30, 20, 25, 25], // static values
          type: "pie",
          textinfo: "label+percent",
          hole: 0.4,
        },
      ];

      const pieLayout = {
        title: "Pie Chart",
        width: 500,
        height: 400,
      };

      Plotly.newPlot("pie-chart", pieData, pieLayout);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Plotly Charts (with Motion.dev containers)</h1>
      <div className="flex gap-8 flex-wrap">
        {/* Animate chart containers with Motion.dev */}
        <motion.div
          id="bar-chart"
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          id="pie-chart"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
      </div>
    </div>
  );
}
