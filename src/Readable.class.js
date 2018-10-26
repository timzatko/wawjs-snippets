// Readable class
// wawjs - Readable class

const { Readable } = require("stream");

class MyReadable extends Readable {
    /*
    1. All Readable stream implementations must 
        provide an implementation of the readable._read() method 
        to fetch data from the underlying resource.
    2. If data is available from the resource 
        the implementation should begin pushing that data 
        into the read queue using the this.push(dataChunk)
    3. _read() should continue reading from the resource 
        and pushing data until readable.push() returns false.
    4. Once the readable._read() method has been called, 
        it will not be called again 
        until the readable.push() method is called.  
    5. Passing chunk as null signals the end of the stream (EOF), 
        after which no more data can be written.
    */
    constructor(options) {

    }
    _read(size) {
        //a) push data when asked
        let b = this.push(data);
        //b) while not full    
        if (!b) return;
        //c) end of data stream          
        this.push(null);
        //d) signal error in reading
        // proces.nextTick(...)
        this.emit('error', err)
        //e) do not call or delay
        //   the call to push()   
    }
}

