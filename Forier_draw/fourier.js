function dft(x){
    let X = [];
    const N = x.length;

    for(let k= 0; k<N; k++){

        let re = 0;
        let im = 0;        

        for(let n =0; n<N; n++){
            let angle = (TWO_PI * k * n)/ N; 
            re += x[n] * cos(angle);
            im -= x[n] * sin(angle);
        }

        re = re / N;
        im = im / N;

        // X[k] = {
        //     re : re,
        //     im : im
        // };

        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);

        X[k] = {re,im, freq, amp, phase}; // better way to declare objects 
    }

    return X;

}