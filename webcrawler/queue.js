var queue=[];
queue.prototype={
        push:function(z){
                this.queue.push(z);
        },
        
        shift:function(z){

                this.queue.shift(z);        
        }
};


module.exports = queue;