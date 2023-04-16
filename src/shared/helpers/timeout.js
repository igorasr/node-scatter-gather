  
  export function timeout(seconds) {
    let time = seconds * 1000;
    return new Promise((_, rej) => {
      setTimeout(() => {
        let error = new Error(`Timeout after ${time}`);
        rej(error);
      }, time);
    });
  }