import React from 'react';
import { BackgroundGradientAnimation } from './components/ui/bg';
import Game from './components/Game';
import Footer from './components/Footer';

export function BackgroundGradientAnimationDemo() {
    return (
        <BackgroundGradientAnimation>
            <Game />
            <Footer />

        </BackgroundGradientAnimation>
    );
}
