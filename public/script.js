class ComponenteMonitor {
    constructor(id) {
        this.el = document.getElementById(id);
    }
}

class CardHardware extends ComponenteMonitor {
    atualizar(valor, tipo) {
        this.el.querySelector('.v').innerText = valor;

        // Lógica de Alerta: CPU > 90 ou TEMP > 75
        const alertaCpu = (tipo === 'cpu' && valor > 90);
        const alertaTemp = (tipo === 'temp' && valor > 75);

        if (alertaCpu || alertaTemp) {
            this.el.classList.add('alerta-critico');
        } else {
            this.el.classList.remove('alerta-critico');
        }
    }
}

const cpu = new CardHardware('c-cpu');
const ram = new CardHardware('c-ram');
const temp = new CardHardware('c-temp');

setInterval(async () => {
    try {
        const res = await fetch('/api/status');
        const d = await res.json();
        
        cpu.atualizar(d.cpu, 'cpu');
        ram.atualizar(d.ram, 'ram');
        temp.atualizar(d.temp, 'temp');
    } catch (e) {
        console.log("Erro na leitura");
    }
}, 2000);