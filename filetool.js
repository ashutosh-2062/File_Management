const http =require('http');
const fs=require('fs');
const port=3000;

const server =http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/txt'})
fs.readFile('data.txt',function(error,data){
    if(error) {
        res.writeHead(404)
        res.write("error:file not found")
    } else {
        res.write(data)
    }
    res.end()
    })
})

server.listen(port ,function(error){
    if(error){
        console.log("something went wrong",error)
    } else{
        console.log("server is listening on port " + port)
    }
})

try{
    fs.writeFileSync('data.txt','Hello ,file is created' );
    fs.writeFileSync('temp.txt','Hello ,file is created and ready to be deleted' );
    console.log("File written sucessfully");
} catch(e){
    console.log(e);
}

try{
    fs.unlinkSync('temp.txt');
    console.log("File deleted sucessfully");
} catch(e){
    console.log(e);
}
