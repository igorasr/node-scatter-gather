class Notification{
    constructor(context=null, message){
        this.context=context;
        this.message=message;
    }

    toString(){
        return `${this.context ? `${this.context}:` : ''} ${this.message} `
    }
}

export default Notification;