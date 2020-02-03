const ffmpeg = require('fluent-ffmpeg');

const outputPath = require('./fileConstants').outPutPath;
const resPath = require('./fileConstants').resPath;

export function addTextToVideo() {
    ffmpeg()
        .input(resPath + '/sample1.mp4')
        .save(outputPath + '/output1.mp4')
        .on('end', () => {
            console.log("video saved");
        })
        .on('error', (err: any) => {
            console.log(err);
        });
};