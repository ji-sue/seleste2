document.addEventListener('DOMContentLoaded', function() {
    const counters = [
        { element: document.getElementById('counter1'), endNumber: 100, suffix: '%' },
        { element: document.getElementById('counter2'), endNumber: 145, suffix: '' },
        { element: document.getElementById('counter3'), endNumber: 38, suffix: '' },
        { element: document.getElementById('counter4'), endNumber: 7856, suffix: '', format: true }
    ];
    
    const duration = 5000; // Total duration of the count (in milliseconds)
    const frameRate = 60; // Number of updates per second
    
    counters.forEach(counter => {
        let currentNumber = 0;
        const increment = counter.endNumber / (duration / (1000 / frameRate));
        
        function updateCounter() {
            currentNumber += increment;
            if (currentNumber >= counter.endNumber) {
                currentNumber = counter.endNumber;
                clearInterval(counter.interval);
            }
            let displayNumber = Math.floor(currentNumber);
            if (counter.format) {
                displayNumber = displayNumber.toLocaleString();
            }
            counter.element.innerText = displayNumber + counter.suffix;
        }
        
        counter.interval = setInterval(updateCounter, 1000 / frameRate);
    });
});
