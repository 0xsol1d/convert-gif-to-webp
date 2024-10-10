# GIF to WebP Converter

This project provides a simple Node.js script to convert all GIF files in a specified directory to WebP format using the `gif2webp` binary. It also displays a progress bar during the conversion process.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/gif-to-webp-converter.git
    cd gif-to-webp-converter
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

## Usage

1. Place all your GIF files in the `images` directory. Make sure that the directory contains only GIF files.

2. Run the script:
    ```bash
    node convert.js
    ```

3. The script will convert each GIF file in the `images` directory to a WebP file and save it in the `webp` directory. It will also display a progress bar indicating the conversion progress.

## Script Explanation

The script does the following:
1. Ensures that the output directory `webp` exists, and if not, creates it.
2. Reads all files from the `images` directory.
3. Filters the files to include only those with a `.gif` extension.
4. Initializes a progress bar based on the total number of GIF files.
5. Converts each GIF file to a WebP file one by one, updating the progress bar after each conversion.

## Dependencies

- [gif2webp-bin](https://www.npmjs.com/package/gif2webp-bin): A Node.js wrapper for the `gif2webp` tool.
- [progress](https://www.npmjs.com/package/progress): A simple and flexible progress bar for Node.js.


## Acknowledgments

This project uses the `gif2webp` binary provided by Google as part of the WebP project.
