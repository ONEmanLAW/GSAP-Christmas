gsap.to('#moon',{
  scrollTrigger: {
    scrub: 1
  },
  scale: 1.5,
})

gsap.to('#bg',{
  scrollTrigger: {
    scrub: 1
  },
  scale: 3,
})

gsap.to('#santa',{
  scrollTrigger: {
    scrub: 1
  },
  scale: 1.5,
  y: -500,
  x: 2200
})

gsap.to('#tree',{
  scrollTrigger: {
    scrub: 1
  },
  x: -500
})

gsap.to('#cloud1',{
  scrollTrigger: {
    scrub: 1
  },
  x: -200
})

gsap.to('#cloud2',{
  scrollTrigger: {
    scrub: 1
  },
  x: 300
})


gsap.to('#text', {
  scrollTrigger: {
    scrub: 1,
    onEnter: () => playMusic(),
    onLeaveBack: () => pauseMusic(),
    onEnterBack: () => playMusic()
  },
  y: -800
});

const snowflakeContainer = document.getElementById('snowflakes');

// Function to create a snowflake
const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.width = `${Math.random() * 30 + 10}px`;
  snowflake.style.height = snowflake.style.width;
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflakeContainer.appendChild(snowflake);

  // Animation pour 'snowflake
  gsap.to(snowflake, {
    y: '199vh',
    duration: Math.random() * 5 + 5,
    opacity: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      snowflake.remove();
      createSnowflake();
    }
  });
};

// Pour crée snowflake
for (let i = 0; i < 30; i++) {
  createSnowflake();
}