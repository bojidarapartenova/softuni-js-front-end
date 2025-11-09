function loadingBar(num) {
    let bar = [];

    for (let i = 0; i < 10; i++) {
        bar.push('.');
    }

    let percent = num / 10;

    for (let i = 0; i < percent; i++) {
        bar[i] = '%';
    }

    if (num == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
    else {
        console.log(`${num}% [${bar.join('')}]`);
        console.log('Still loading...');
    }
}

loadingBar(100);