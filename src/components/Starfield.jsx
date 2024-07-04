import React, { useEffect, useRef } from 'react';

const COUNT = 800;
const SPEED = 0.07;

class Star {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.xPrev = x;
        this.yPrev = y;
    }

    update(width, height, speed) {
        this.xPrev = this.x;
        this.yPrev = this.y;
        this.z += speed * 0.0675;
        this.x += this.x * (speed * 0.0225) * this.z;
        this.y += this.y * (speed * 0.0225) * this.z;
        if (this.x > width / 2 || this.x < -width / 2 || this.y > height / 2 || this.y < -height / 2) {
            this.x = Math.random() * width - width / 2;
            this.y = Math.random() * height - height / 2;
            this.xPrev = this.x;
            this.yPrev = this.y;
            this.z = 0;
        }
    }

    draw(ctx) {
        ctx.lineWidth = this.z;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xPrev, this.yPrev);
        ctx.stroke();
    }
}

const Starfield = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const stars = useRef(Array.from({ length: COUNT }, () => new Star(0, 0, 0)));
    const rafId = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const container = containerRef.current;

        const setup = () => {
            if (rafId.current > 0) cancelAnimationFrame(rafId.current);

            const { clientWidth: width, clientHeight: height } = container;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            for (const star of stars.current) {
                star.x = Math.random() * width - width / 2;
                star.y = Math.random() * height - height / 2;
                star.z = 0;
            }

            ctx.translate(width / 2, height / 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.strokeStyle = 'white';
            rafId.current = requestAnimationFrame(frame);
        };

        const frame = () => {
            const { clientWidth: width, clientHeight: height } = container;

            ctx.fillRect(-width / 2, -height / 2, width, height);
            for (const star of stars.current) {
                star.update(width, height, SPEED);
                star.draw(ctx);
            }

            rafId.current = requestAnimationFrame(frame);
        };

        const resizeObserver = new ResizeObserver(setup);
        resizeObserver.observe(container);

        setup();

        return () => {
            cancelAnimationFrame(rafId.current);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>
    );
};

export default Starfield;