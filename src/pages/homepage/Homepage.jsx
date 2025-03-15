import { useEffect, useRef } from 'react'

import Glow from '../../components/glow/Glow.jsx'
import styles from './Homepage.module.scss'


export default function Homepage() {
    const canvasRef = useRef(null);
    const homepageRef = useRef(null);

    useEffect(
        () => {
            const canvas = canvasRef.current;
            const homepage = homepageRef.current;
            const ctx = canvas.getContext('2d');

            const handleResize = () => {
                canvas.width = homepage.offsetWidth;
                canvas.height = homepage.offsetHeight;
            }

            let animationX = Math.random();
            let t = performance.now();
            const x = (x) => x / 300 * canvas.width;
            const y = (y) => y / 150 * canvas.height;

            const renderCanvas = (newT) => {
                const dt = newT - t;
                t = newT;
                animationX += dt / 4000;
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#232425"

                const points = [
                    [x(-100 - Math.sin(animationX * Math.log(9)) * 50), y(60 - Math.sin(animationX / 1.5) * 30)],
                    [x(100 + Math.sin(animationX / 5) * 50), y(60 + Math.sin(animationX * Math.E / Math.PI) * 60)],
                    [x(200 - Math.sin(animationX / 3) * 50), y(60 - Math.sin(animationX * Math.PI / Math.E) * 60)],
                    [x(400 - Math.sin(animationX * Math.log(11)) * 50), y(60 + Math.sin(animationX / 1.3) * 30)],
                ];
                
                ctx.beginPath();
                ctx.moveTo(
                    ...points[0]
                );
                ctx.bezierCurveTo(
                    ...points[1],
                    ...points[2],
                    ...points[3],
                );
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(
                    points[0][0] + x(Math.sin(animationX / 0.8) * 40), points[0][1] + y(40)
                );
                ctx.bezierCurveTo(
                    points[1][0] + x(Math.sin(animationX / 0.9) * 40), points[1][1] + y(40),
                    points[2][0] + x(Math.sin(animationX / 1.1) * -40), points[2][1] + y(40),
                    points[3][0] + x(Math.sin(animationX / 1.2) * -40), points[3][1] + y(40),
                );
                ctx.stroke();

                let lineCount = canvas.width / 300;
                let linePadding = 36 / lineCount * 10;
                let animationOffset = (animationX % 20) * linePadding / 20;
                for (let i = -2; i < lineCount; i++) {
                    ctx.beginPath();
                    ctx.moveTo(
                        x(i * linePadding + animationOffset), y(0)
                    );
                    ctx.lineTo(
                        x((i - 1) * linePadding + animationOffset), y(150)
                    );
                    ctx.stroke();
                }

                frame = requestAnimationFrame(renderCanvas);
            }


            handleResize()
            window.addEventListener('resize', handleResize);
            let frame = requestAnimationFrame(renderCanvas);

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(frame);
            }
        }, []
    )

    return (
        <section ref={homepageRef} className={styles['homepage']} id="homepage">
            <Glow className={styles['glare1']} />
            <Glow className={styles['glare2']} />
            <canvas ref={canvasRef}></canvas>
            <div className={styles['gradients']}></div>
            <div className={styles['dotted-bg']}></div>

            <div>
                {/* intentionally left blank to center following div */}
            </div>

            <div className={styles['center']}>
                <img src="/svg/logo-full-glow.svg" />
                <span>Kayıtlar ...'a kadar açık!</span>
                <div className={styles['buttons']}>
                    <button className="rounded-button" onClick={() => window.location.href = "#details"}>Detaylı Bilgi</button>
                    <button className="rounded-acm-button">Kayıt</button>
                </div>
            </div>
            
            <div className={styles['sponsors']}>
                <span>Sponsorlar</span>
                <div>
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                </div>
            </div>
        </section>
    );
};
