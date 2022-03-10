import { Ack, ImageChunk, ImageQuery, Metadata } from "./gen/image_pb.js";
import { ImagesClient } from "./gen/image_grpc_web_pb.js";

var client = new ImagesClient('http://data.dyadsocial.com:80', null, null);


/* 
async function _byteChunker(bytes)  {
    pos = 0;
    endOffset = pos + 32;
    while(pos<bytes.length){
        if(endOffset<bytes.length){
            return ImageChunk(bytes.substring(pos, pos+32));
        }
        else{
            return ImageChunk(bytes.substring(pos, bytes.length))
        }
        pos = pos + 32;
        endOffset = endOffset + 32;
    }
}

async function runUploadImage(image, username, id){
    imageBytes = btoa(image);
    ack = await client.UploadImage(_byteChunker(imageBytes));
    return JSON.stringify(ack);
}
*/

export async function runPullImage(username){
    var obj = {
        'author':username,
        'id':'profile_picture'
    };
    var query = new ImageQuery(obj);
    var imageBytes = "";
    var stream = client.pullImage(query, {});
    stream.on('data', (response)=> {
        //let message = response.getMessage();
        console.log(response);
        /*if(imageBytes.length == 0){
            imageBytes.length = message.imagesize
        }*/
    });
}
