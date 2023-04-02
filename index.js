#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function isWindows() {
    return process.platform === "win32";
}
function isUnix() {
    return process.platform === "linux" || process.platform === "darwin";
}

function runCommand(cmd) {
    console.log(`Executing ${cmd}`);
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    });
}

function symlink(input, output) {
    console.log(`Linking ${input} to ${output}`);
    const inputPath = path.resolve(input);
    const outputPath = path.resolve(output);

    // if the input file does not exist, exit or if the output file already exists
    if (!fs.existsSync(inputPath)) {
        console.error(`Input file ${inputPath} does not exist`);
        return;
    }


    if (isWindows()) {
        if (fs.existsSync(outputPath)) {
            return;
        }

        runCommand(`mklink /H ${outputPath} ${inputPath}`);
        return;
    }

    if (isUnix()) {
        runCommand(`ln -sf ${inputPath} ${outputPath}`);
    }

}
//check if the user has provided the input and output file
if (yargs.argv._.length < 2) {
    console.log("Please provide the input and output file");
    process.exit(1);
}
symlink(yargs.argv._[0], yargs.argv._[1]);
