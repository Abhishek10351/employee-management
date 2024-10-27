"use client";

export function HeroAnimation() {
    const heroElement = document.querySelector(
        ".hero-section",
    ) as HTMLElement | null;
    const elementsToAnimate = heroElement?.querySelectorAll(
        ".floating-element",
    ) as NodeListOf<HTMLElement>;

    if (!heroElement || !elementsToAnimate) return;

    elementsToAnimate.forEach((element, index) => {
        const floatAnimation = () => {
            element.style.transform = `translateY(${
                5 * Math.sin(index + Date.now() / 500)
            }px)`;
            requestAnimationFrame(floatAnimation);
        };
        floatAnimation();
    });
}
