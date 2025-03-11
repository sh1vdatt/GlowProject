"use client";

import { useEffect } from "react";

export default function FadeEffect() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((element) => observer.observe(element));

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
}
