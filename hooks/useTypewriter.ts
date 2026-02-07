"use client";

import { useState, useEffect } from "react";

export const useTypewriter = (text: string, speed: number = 50) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};

export const useTypewriterLoop = (words: string[], speed: number = 100, pause: number = 1500) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    // Typing logic
    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 && !reverse) {
            // Word finished typing, wait before deleting
            const timeout = setTimeout(() => {
                setReverse(true);
            }, pause);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Word finished deleting, move to next
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : speed, parseInt((Math.random() * 350).toString())));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, speed, pause]);

    return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};
