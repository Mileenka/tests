import data from "../data.js";
import dom from "../dom.js";
import generateRandomInteger from "../utils/generateRandomInteger.js";

const bgAnimeHandler = () => {
    const effectKeys = Object.keys(data.bgEffects);
    let currentIndex = 0;

    const showNextEffect = () => {
        const currentEffect = document.createElement('div');
        currentEffect.classList.add('animated-effect');
        currentEffect.innerHTML = data.bgEffects[effectKeys[currentIndex]];
        dom.animatedEffects.appendChild(currentEffect);

        setTimeout(() => {
            currentEffect.style.top = '0';
            setTimeout(() => {
                currentEffect.style.top = '-100px'; // Przesuń na górę po animacji
                currentIndex = (currentIndex + 1) % effectKeys.length;
                if (currentIndex < effectKeys.length) {
                    setTimeout(showNextEffect, 1000); // Pokaż kolejny efekt po 1 sekundzie
                }
            }, 3000); // Zanik po 3 sekundach
        }, currentIndex * 1000); // Opóźnienie w zależności od indeksu
    }

    // showNextEffect();
};

export default bgAnimeHandler;


