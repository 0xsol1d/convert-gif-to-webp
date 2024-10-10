import { execFile } from 'node:child_process';
import gif2webp from 'gif2webp-bin';
import fs from 'fs';
import path from 'path';
import ProgressBar from 'progress';

const inputDir = 'images';
const outputDir = 'webp';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading the directory:', err);
        return;
    }

    const gifFiles = files.filter(file => path.extname(file).toLowerCase() === '.gif');
    const totalFiles = gifFiles.length;
    if (totalFiles === 0) {
        console.log('No GIF files found in the directory.');
        return;
    }

    const bar = new ProgressBar('Converting images [:bar] :current/:total files :percent :etas', {
        total: totalFiles,
        width: 40,
        incomplete: "░",
        complete: "█",
    });

    processFiles(gifFiles, bar);
});

function processFiles(files, bar) {
    if (files.length === 0) {
        console.log('All files have been converted.');
        return;
    }

    const file = files.shift();
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, path.basename(file, '.gif') + '.webp');

    execFile(gif2webp, [inputFilePath, '-o', outputFilePath, '-loop_compatibility'], (err) => {
        if (err) {
            console.error(`Error converting ${file}:`, err);
            return;
        }

        bar.tick();
        processFiles(files, bar);
    });
}