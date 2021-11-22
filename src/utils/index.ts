const tool = {
    //防抖
    debounce(fn, dalay = 2000) {
        if(typeof fn !== 'function') {
            throw new TypeError('need a function')
        }
        let timer = null;
        return (...args) => {
            if(timer) clearTimeout(timer)

            timer = setTimeout(() => {
                fn.apply(this, args)
            }, dalay)
        }
    },
    //截流
    throttle(fn, dalay) {
        let timer = null;
        return (...args) => {
            if(!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, args)
                }, dalay)
            }
        }
    }
}