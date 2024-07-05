console.log('Hola v3 desde el SW 👋');

// Se ejecuta una sola vez
self.addEventListener('install', ()=>{
    console.log('SW: Install');
})

// Cuando se instala se activa
self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})
