const barsContainer = document.getElementById('bars-container');
const numBars = 20;
let bars = [];

// Generate a random array of heights for the bars
function generateArray() {
    bars = [];
    barsContainer.innerHTML = '';
    
    for (let i = 0; i < numBars; i++) {
        const height = Math.floor(Math.random() * 400) + 10;
        bars.push(height);
        
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = height + 'px';
        barsContainer.appendChild(bar);
    }
}

// Swap the heights of two bars
function swapBars(bar1, bar2) {
    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
}

// Bubble Sort algorithm
async function bubbleSort() {
    for (let i = 0; i < numBars - 1; i++) {
        for (let j = 0; j < numBars - i - 1; j++) {
            const bar1 = barsContainer.childNodes[j];
            const bar2 = barsContainer.childNodes[j + 1];
            
            // Highlight the bars being compared
            bar1.style.backgroundColor = 'red';
            bar2.style.backgroundColor = 'green';
            
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for visualization
            
            const height1 = parseInt(bar1.style.height);
            const height2 = parseInt(bar2.style.height);
            
            if (height1 > height2) {
                swapBars(bar1, bar2);
            }
            
            // Reset the color of the bars
            bar1.style.backgroundColor = 'cornflowerblue';
            bar2.style.backgroundColor = 'yellow';
        }
    }
}

// Reset the array of bars
function resetArray() {
    generateArray();
}

// Generate initial array of bars on page load
generateArray();
