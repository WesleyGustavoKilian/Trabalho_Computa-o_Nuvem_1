function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem');
    mensagem.innerText = 'Funcionalidade ativada com sucesso na nuvem Azure!';
    mensagem.style.opacity = '1';
    
    // Resetar a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => {
            mensagem.innerText = '';
        }, 300);
    }, 3000);
    
    // Efeito de confete
    const button = document.querySelector('.azure-button');
    createConfetti(button);
}

function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.backgroundColor = getRandomColor();
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 3 + Math.random() * 3;
        const rotation = Math.random() * 360;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += Math.cos(angle) * velocity;
            posY += Math.sin(angle) * velocity + 0.2; // 0.2 para gravidade
            opacity -= 0.02;
            
            confetti.style.left = `${posX}px`;
            confetti.style.top = `${posY}px`;
            confetti.style.opacity = opacity;
            confetti.style.transform = `rotate(${rotation}deg)`;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

function getRandomColor() {
    const colors = ['#0078d4', '#50e6ff', '#ffaa44', '#c239b3', '#107c10'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Adiciona estilos dinâmicos para os confetes
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    }
`;
document.head.appendChild(style);